"use client";

import { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SKILLS } from "@/constants";
import { fadeIn, fadeInUp } from "@/lib/motion";
import { useInView } from "@/lib/hooks";

const About = memo(function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<HTMLElement>);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Sobre Mí
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image with Parallax */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center order-2 lg:order-1"
          >
            <motion.div 
              style={{ y }}
              className="relative w-full max-w-md"
            >
              <Image
                src="/img/goon.png"
                alt="Gonzalo Farias - Desarrollador Web Full Stack trabajando en proyectos"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl shadow-purple-500/50"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="card-hover rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold mb-6">
                Desarrollador Web{" "}
                <span className="text-purple-400">Enfocado en Resultados</span>
              </h3>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Soy Gonzalo, desarrollador web de <strong>La Calera, Córdoba</strong>. 
                  Trabajo con negocios y emprendedores que necesitan presencia digital profesional 
                  sin pagar precios de agencia ni esperar meses.
                </p>
                <p>
                  Arranqué desarrollando proyectos propios — un <strong>sistema POS para comercios</strong>, 
                  una <strong>plataforma SaaS para torneos</strong>, un <strong>generador de CVs</strong> — 
                  y hoy aplico esa misma mentalidad a cada proyecto de cliente: construir algo 
                  que funcione de verdad, no solo que se vea bien.
                </p>
                <p>
                  <strong>Lo que podés esperar si trabajamos juntos:</strong>
                </p>
                <ul className="list-none space-y-2 text-gray-400">
                  <li>✅ Comunicación clara en todo momento, sin vueltas técnicas</li>
                  <li>✅ Entrega en tiempo y forma, con plazos reales</li>
                  <li>✅ Precios transparentes antes de empezar</li>
                  <li>✅ Soporte post-entrega incluido</li>
                  <li>✅ Sitio optimizado para Google desde el día uno</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-purple-500/20">
                <a
                  href={`https://wa.me/5493514000000?text=${encodeURIComponent("Hola Gonzalo, vi tu portfolio y me interesa hablar sobre mi proyecto 👋")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-purple-600/30 border border-purple-500/50 text-purple-300 rounded-full hover:bg-purple-600/50 transition-colors font-medium text-sm"
                >
                  ¿Tenés un proyecto? Hablemos →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
