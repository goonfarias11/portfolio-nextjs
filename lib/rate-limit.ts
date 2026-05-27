import type { NextRequest } from "next/server";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;

const rateLimitStore = new Map<
  string,
  {
    count: number;
    expiresAt: number;
  }
>();

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

export function checkRateLimit(request: NextRequest) {
  const ip = getClientIp(request);
  const now = Date.now();
  const existing = rateLimitStore.get(ip);

  if (!existing || existing.expiresAt <= now) {
    rateLimitStore.set(ip, {
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
  rateLimitStore.set(ip, existing);

  return {
    allowed: true,
    limit: MAX_REQUESTS_PER_WINDOW,
    remaining: MAX_REQUESTS_PER_WINDOW - existing.count,
    reset: Math.floor(existing.expiresAt / 1000),
  };
}
