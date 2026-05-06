"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaEnvelope, FaDownload, FaWhatsapp } from "react-icons/fa";
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
            Tu negocio,{" "}
            <span className="text-gradient block md:inline">
              online y funcionando
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 mb-4"
          >
            Soy Gonzalo, desarrollador web. Creo <strong className="text-purple-400">sitios web y sistemas a medida</strong> que ayudan a negocios reales a vender más y trabajar mejor.
          </motion.p>
          
          <motion.p 
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-400 mb-4"
          >
            Ya lancé <strong>+5 productos en producción</strong> — desde un sistema POS para comercios hasta una plataforma SaaS. Si tenés un proyecto en mente, puedo hacerlo realidad.
          </motion.p>

          {/* Social proof bar */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 mb-8 text-sm"
          >
            <span className="flex items-center gap-1 text-green-400">
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
              Disponible para proyectos
            </span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-300">🇦🇷 Córdoba, Argentina</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-300">Respondo en menos de 24hs</span>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a
              href="https://wa.me/5493514000000?text=Hola%20Gonzalo%2C%20vi%20tu%20portfolio%20y%20me%20interesa%20hablar%20sobre%20mi%20proyecto%20%F0%9F%91%8B"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 197, 94, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-full transition-colors"
              aria-label="Contactar por WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" className="text-xl" /> Escribime por WhatsApp
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center justify-center gap-2"
              aria-label="Ver proyectos realizados"
            >
              Ver mis proyectos
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