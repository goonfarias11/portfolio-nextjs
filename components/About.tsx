"use client";

import { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SKILLS } from "@/constants";
import { fadeIn, fadeInUp } from "@/lib/motion";
import { useInView } from "@/lib/hooks";

const About = memo(function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  
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
            className="flex justify-center"
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
          <div className="space-y-8">
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
                  Soy un <strong>desarrollador web full stack</strong> especializado en crear
                  sitios web que no solo se ven bien, sino que <strong>convierten visitantes en clientes</strong>.
                  Mi enfoque está en el rendimiento, la accesibilidad y el SEO técnico.
                </p>
                <p>
                  Trabajo con <strong>Next.js, React y TypeScript</strong> para construir
                  aplicaciones web modernas y escalables. Cada proyecto lo abordo pensando en
                  la experiencia del usuario final y los objetivos de negocio del cliente.
                </p>
                <p>
                  <strong>Mi proceso de trabajo:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Análisis de requerimientos y objetivos del proyecto</li>
                  <li>Diseño de la arquitectura y planificación técnica</li>
                  <li>Desarrollo iterativo con feedback constante</li>
                  <li>Testing, optimización y despliegue</li>
                  <li>Documentación y soporte post-lanzamiento</li>
                </ul>
                <p>
                  Me mantengo actualizado con las últimas tecnologías y mejores prácticas
                  de la industria. Creo en el código limpio, la comunicación clara y
                  la entrega de valor real en cada línea de código.
                </p>
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
