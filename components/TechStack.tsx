"use client";

import { memo, useRef } from "react";
import { motion } from "framer-motion";
import { TECH_STACK } from "@/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/lib/hooks";

const TechStack = memo(function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const categories = [
    { key: "frontend", title: "Frontend", color: "purple" },
    { key: "backend", title: "Backend", color: "blue" },
    { key: "tools", title: "Herramientas", color: "green" },
    { key: "learning", title: "Aprendiendo", color: "orange" },
  ] as const;

  return (
    <section id="skills" className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient"
        >
          Tecnologías y Habilidades
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-gray-300 mb-16 max-w-3xl mx-auto"
        >
          Tecnologías y herramientas que domino para construir soluciones web modernas y escalables
        </motion.p>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map(({ key, title, color }) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              className="card-hover rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                <span className={`text-${color}-400`}>{title}</span>
              </h3>
              <div className="space-y-3">
                {TECH_STACK[key].map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full bg-${color}-400`} />
                    <span className="text-gray-300 font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fortalezas clave */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="card-hover rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">SEO</div>
            <h4 className="text-lg font-semibold mb-2">Optimización Técnica</h4>
            <p className="text-gray-400 text-sm">
              Sitios optimizados para motores de búsqueda con estructura semántica correcta
            </p>
          </div>
          <div className="card-hover rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">⚡</div>
            <h4 className="text-lg font-semibold mb-2">Performance</h4>
            <p className="text-gray-400 text-sm">
              Carga rápida y Core Web Vitals optimizados para mejor experiencia
            </p>
          </div>
          <div className="card-hover rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">♿</div>
            <h4 className="text-lg font-semibold mb-2">Accesibilidad</h4>
            <p className="text-gray-400 text-sm">
              Sitios accesibles para todos siguiendo estándares WCAG
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

TechStack.displayName = "TechStack";

export default TechStack;
