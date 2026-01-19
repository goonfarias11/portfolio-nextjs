"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/constants";
import { fadeInUp, staggerFast } from "@/lib/motion";

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-effect border-t-2 border-purple-500" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-4 text-white">Servicios</h3>
            <nav aria-label="Servicios">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-purple-400 transition-colors inline-block hover:translate-x-1"
                  >
                    Diseño Responsivo
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-purple-400 transition-colors inline-block hover:translate-x-1"
                  >
                    Actualización Web
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-purple-400 transition-colors inline-block hover:translate-x-1"
                  >
                    Desarrollo Completo
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center items-center"
          >
            <motion.div 
              variants={staggerFast}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex gap-6"
              role="navigation"
              aria-label="Redes sociales"
            >
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -5,
                      color: "#a78bfa"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="text-3xl text-gray-300 transition-colors"
                    aria-label={`Visitar perfil de ${social.name}`}
                  >
                    <Icon aria-hidden="true" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Information */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-4 text-white">Información</h3>
            <nav aria-label="Información adicional">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-purple-400 transition-colors inline-block hover:translate-x-1"
                  >
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-purple-400 transition-colors inline-block hover:translate-x-1"
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-purple-400 transition-colors inline-block hover:translate-x-1"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pt-8 border-t border-purple-500/30 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Gonzalo Farias. Todos los derechos reservados.
          </p>
          <motion.p 
            className="text-gray-500 text-xs mt-2"
            whileHover={{ scale: 1.05 }}
          >
            Desarrollado con ❤️ usando Next.js 15 & Tailwind CSS
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
