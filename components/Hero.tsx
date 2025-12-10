"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaEnvelope, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 animate-float">
            <Image
              src="/img/logoon.png"
              alt="Gonzalo Farias Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Soy{" "}
            <span className="text-gradient">
              <TypeAnimation
                sequence={[
                  "Gonzalo Farias",
                  2000,
                  "Desarrollador Web",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Frontend Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 mb-8">
            Desarrollo sitios web modernos, responsivos y optimizados.
            <br />
            Transformo ideas en experiencias digitales impactantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/50"
            >
              <FaEnvelope /> Contáctame
            </motion.a>

            <motion.a
              href="/pdf/Curriculum - Gonzalo Farias.pdf"
              download="CV - Gonzalo Farias"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect hover:bg-white/10 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all border-2 border-purple-500"
            >
              <FaDownload /> Descargar CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}