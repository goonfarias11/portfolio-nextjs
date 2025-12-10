"use client";

import { FaInstagram, FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="glass-effect border-t-2 border-purple-500 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Diseño Responsivo
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Actualización Web
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Desarrollo Completo
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center items-center">
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/gonzalofarias11/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-300 hover:text-purple-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/goon.farias.50"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-300 hover:text-purple-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/farias_goon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-300 hover:text-purple-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/goonfarias11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-300 hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/goon-farias-8a584723b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-300 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Información</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Gonzalo Farias. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}