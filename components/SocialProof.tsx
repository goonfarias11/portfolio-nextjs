"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const STATS = [
  { value: "+5", label: "Proyectos en producción", emoji: "🚀" },
  { value: "100%", label: "Proyectos entregados a tiempo", emoji: "✅" },
  { value: "24hs", label: "Tiempo de respuesta máximo", emoji: "⚡" },
  { value: "ARG", label: "Desarrollador local, Córdoba", emoji: "🇦🇷" },
];

// Reemplazá estos testimonios con los reales cuando los tengas
const TESTIMONIALS = [
  {
    name: "Tu primer cliente",
    role: "Dueño de negocio",
    text: "¿Trabajaste con alguien y quedó conforme? Su testimonio acá genera mucha confianza. Pedíselo apenas termines el proyecto.",
    isPlaceholder: true,
  },
];

const SocialProof = memo(function SocialProof() {
  return (
    <section className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
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
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-gradient"
        >
          Lo que dicen mis clientes
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`card-hover rounded-2xl p-8 ${
                t.isPlaceholder ? "border border-dashed border-purple-500/30 opacity-50" : ""
              }`}
            >
              {t.isPlaceholder && (
                <div className="text-xs text-purple-400 uppercase tracking-widest mb-4 font-semibold">
                  📝 Placeholder — reemplazá con un testimonio real
                </div>
              )}
              <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-gray-400 text-sm">{t.role}</div>
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
