import type { NextRequest } from "next/server";
import { Redis } from "@upstash/redis";

// Rate limiting con Upstash Redis (conectado el 16/07/2026)
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_WINDOW_SECONDS = RATE_LIMIT_WINDOW_MS / 1000;
const MAX_REQUESTS_PER_WINDOW = 10;

// Soporta tanto la integración "Upstash Redis" como "Vercel KV" (nombres de
// variables distintos según cómo se conecte el storage en Vercel).
const redisUrl =
  process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const redisToken =
  process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

const redis =
  redisUrl && redisToken
    ? new Redis({ url: redisUrl, token: redisToken })
    : null;

// Fallback en memoria (solo se usa si todavía no hay Redis conectado).
// No es confiable en serverless porque cada instancia tiene su propia
// memoria, pero evita que el sitio se rompa mientras no esté configurado.
const memoryStore = new Map<string, { count: number; expiresAt: number }>();

export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  return "unknown";
}

type RateLimitResult = {
  allowed: boolean;
  limit: number;
  remaining: number;
  reset: number;
};

function checkRateLimitMemory(ip: string): RateLimitResult {
  const now = Date.now();
  const existing = memoryStore.get(ip);

  if (!existing || existing.expiresAt <= now) {
    memoryStore.set(ip, {
      count: 1,
      expiresAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return {
      allowed: true,
      limit: MAX_REQUESTS_PER_WINDOW,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
      reset: Math.floor((now + RATE_LIMIT_WINDOW_MS) / 1000),
    };
  }

  if (existing.count >= MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      limit: MAX_REQUESTS_PER_WINDOW,
      remaining: 0,
      reset: Math.floor(existing.expiresAt / 1000),
    };
  }

  existing.count += 1;
  memoryStore.set(ip, existing);

  return {
    allowed: true,
    limit: MAX_REQUESTS_PER_WINDOW,
    remaining: MAX_REQUESTS_PER_WINDOW - existing.count,
    reset: Math.floor(existing.expiresAt / 1000),
  };
}

async function checkRateLimitRedis(ip: string): Promise<RateLimitResult> {
  const key = `ratelimit:contact:${ip}`;

  // INCR atómico: si es la primera request de la ventana, arranca en 1
  // y le ponemos TTL; si no, solo incrementa.
  const count = await redis!.incr(key);

  if (count === 1) {
    await redis!.expire(key, RATE_LIMIT_WINDOW_SECONDS);
  }

  const ttl = await redis!.ttl(key);
  const resetSeconds = ttl > 0 ? ttl : RATE_LIMIT_WINDOW_SECONDS;
  const reset = Math.floor(Date.now() / 1000) + resetSeconds;

  if (count > MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      limit: MAX_REQUESTS_PER_WINDOW,
      remaining: 0,
      reset,
    };
  }

  return {
    allowed: true,
    limit: MAX_REQUESTS_PER_WINDOW,
    remaining: Math.max(0, MAX_REQUESTS_PER_WINDOW - count),
    reset,
  };
}

export async function checkRateLimit(
  request: NextRequest
): Promise<RateLimitResult> {
  const ip = getClientIp(request);

  if (redis) {
    try {
      return await checkRateLimitRedis(ip);
    } catch (error) {
      console.error("Rate limit (Redis) error, usando fallback en memoria:", error);
      return checkRateLimitMemory(ip);
    }
  }

  return checkRateLimitMemory(ip);
}
