"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const STATS = [
  { value: "+5", label: "Proyectos en producción", emoji: "🚀" },
  { value: "100%", label: "Proyectos entregados", emoji: "✅" },
  { value: "24hs", label: "Tiempo de respuesta", emoji: "⚡" },
  { value: "ARG", label: "Desarrollador en Córdoba", emoji: "🇦🇷" },
];

const TESTIMONIALS = [
  {
    name: "Martín Pereyra",
    role: "Dueño de Ferretería Don Martín · Córdoba",
    text: "Gonzalo nos armó la web del local en menos de una semana. Antes los clientes llamaban para preguntar el horario, ahora todo está en el sitio y hasta nos escriben por WhatsApp directo desde ahí. Muy conforme con el resultado.",
    stars: 5,
    initial: "MP",
  },
  {
    name: "Lucía Fernández",
    role: "Emprendedora · Tienda de ropa online",
    text: "Necesitaba algo prolijo para mostrar mis productos y Gonzalo entendió exactamente lo que quería desde el primer momento. El sitio quedó moderno, se ve bien en el celular y me lo entregó antes del plazo acordado.",
    stars: 5,
    initial: "LF",
  },
  {
    name: "Diego Romero",
    role: "Organizador de torneos amateur · Rosario",
    text: "Usé la plataforma de torneos que desarrolló y te ahorra horas de trabajo. Antes todo era por Excel y grupos de WhatsApp, ahora los resultados se cargan solos y los equipos ven la tabla en tiempo real. Un cambio enorme.",
    stars: 5,
    initial: "DR",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <FaStar key={i} className="text-yellow-400 text-sm" />
    ))}
  </div>
);

const SocialProof = memo(function SocialProof() {
  return (
    <section id="testimonials" className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="card-hover rounded-2xl p-6 text-center"
            >
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient"
        >
          Lo que dicen quienes trabajaron conmigo
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12"
        >
          Personas reales, proyectos reales.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="card-hover rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <Stars count={t.stars} />
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-purple-500/20">
                <div className="w-10 h-10 rounded-full bg-purple-600/40 border border-purple-500/50 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
});

SocialProof.displayName = "SocialProof";

export default SocialProof;
