"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaEnvelope, FaDownload } from "react-icons/fa";
import { fadeIn, fadeInUp } from "@/lib/motion";

const Hero = memo(function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Logo */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <Image
              src="/img/logoon.png"
              alt="Gonzalo Farias - Desarrollador Web Full Stack"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 256px, 384px"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          animate="show"
          className="text-center md:text-left"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Gonzalo Farias{" "}
            <span className="text-gradient block md:inline">
              Desarrollador Web Full Stack
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 mb-4"
          >
            Creo sitios web <strong className="text-purple-400">rápidos, accesibles y optimizados para SEO</strong> que convierten visitantes en clientes.
          </motion.p>
          
          <motion.p 
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-400 mb-8"
          >
            Especializado en <strong>Next.js</strong>, <strong>React</strong> y <strong>TypeScript</strong>. 
            Transformo tus ideas en experiencias digitales profesionales con código limpio y escalable.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center gap-2"
              aria-label="Iniciar conversación sobre tu proyecto"
            >
              <FaEnvelope aria-hidden="true" /> Hablemos de tu proyecto
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center justify-center gap-2"
              aria-label="Ver proyectos realizados"
            >
              Ver mi trabajo
            </motion.a>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className="mt-6 text-center md:text-left"
          >
            <a
              href="/pdf/Curriculum - Gonzalo Farias.pdf"
              download="CV - Gonzalo Farias"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="Descargar currículum en PDF"
            >
              <FaDownload aria-hidden="true" /> Descargar CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;