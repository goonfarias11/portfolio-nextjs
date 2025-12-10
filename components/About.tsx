"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "HTML5", icon: "/img/skills/html.png" },
  { name: "CSS3", icon: "/img/skills/css.png" },
  { name: "JavaScript", icon: "/img/skills/js.png" },
  { name: "SASS", icon: "/img/skills/sass.png" },
  { name: "Bootstrap", icon: "/img/skills/bootstrap.png" },
  { name: "Python", icon: "/img/skills/python.png" },
  { name: "Git", icon: "/img/skills/git.png" },
  { name: "GitHub", icon: "/img/skills/github.png" },
  { name: "Ionic", icon: "/img/skills/ionic.png" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          SOBRE MÍ
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <Image
                src="/img/goon.png"
                alt="Gonzalo Farias - Web Developer"
                width={400}
                height={400}
                className="rounded-2xl border-4 border-white shadow-2xl shadow-purple-500/50"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 border border-purple-500"
            >
              <h3 className="text-3xl font-bold text-center mb-6">
                Desarrollador Web Apasionado
                <span className="text-purple-400">...</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-justify italic">
                "Soy un desarrollador web joven y ambicioso con pasión por crear
                experiencias digitales excepcionales. Mi enfoque está en
                transformar ideas en realidades funcionales y estéticamente
                impecables.
                <br />
                <br />
                Cada línea de código que escribo está impulsada por la
                dedicación, el aprendizaje continuo y el deseo de superar
                expectativas. Me especializo en diseño responsivo, desarrollo
                frontend y creación de interfaces intuitivas que conectan con
                los usuarios.
                <br />
                <br />
                Mi objetivo es construir soluciones web que no solo funcionen
                perfectamente, sino que también inspiren y generen impacto.
                Estoy comprometido con la excelencia técnica y la innovación
                constante, siempre buscando las mejores prácticas y tecnologías
                emergentes.
                <br />
                <br />
                Trabajo con atención al detalle, comunicación clara y un enfoque
                colaborativo para llevar proyectos desde la conceptualización
                hasta el despliegue exitoso."
              </p>
            </motion.div>

            {/* Skills Slider */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center mb-6 text-purple-300">
                TECNOLOGÍAS & HERRAMIENTAS
              </h3>

              <div className="glass-effect rounded-2xl border border-purple-500 overflow-hidden p-6">
                <div className="flex gap-8 animate-slideshow">
                  {/* Duplicate skills for infinite scroll */}
                  {[...skills, ...skills].map((skill, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 flex items-center justify-center"
                    >
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}