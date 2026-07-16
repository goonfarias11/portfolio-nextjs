"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/constants";
import { fadeInUp, staggerFast } from "@/lib/motion";

const WHATSAPP_NUMBER = "5493543515007";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola Gonzalo, vi tu portfolio y me interesa hablar sobre mi proyecto"
);

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
          {/* Contact directo */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-4 text-white">Contacto directo</h3>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <FaWhatsapp className="text-green-400 text-xl flex-shrink-0" />
                <span className="group-hover:underline underline-offset-2">WhatsApp</span>
              </a>
              <a
                href="mailto:gonfarias6@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group"
              >
                <FaEnvelope className="text-purple-400 text-lg flex-shrink-0" />
                <span className="group-hover:underline underline-offset-2 text-sm">gonfarias6@gmail.com</span>
              </a>
              <p className="text-gray-500 text-xs mt-2">Respondo en menos de 24hs · Córdoba, Argentina</p>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center justify-center gap-4"
          >
            <p className="text-gray-400 text-sm font-medium">Seguime en redes</p>
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
                    whileHover={{ scale: 1.2, y: -5, color: "#a78bfa" }}
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

          {/* Navigation */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-4 text-white">Navegación</h3>
            <nav aria-label="Navegación footer">
              <ul className="space-y-2">
                {[
                  { href: "#services", label: "Servicios y precios" },
                  { href: "#projects", label: "Proyectos" },
                  { href: "#testimonials", label: "Testimonios" },
                  { href: "#about", label: "Sobre mí" },
                  { href: "#contact", label: "Contacto" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors inline-block hover:translate-x-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
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
          <p className="text-gray-500 text-xs mt-2">
            Desarrollado con Next.js 15 & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
