"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGlobe } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Stable - Sitio Corporativo",
    description:
      "Sitio web corporativo moderno que destaca los valores de marca, compromiso social y noticias empresariales con un diseño profesional y elegante.",
    image: "/img/images/img-1.png",
    link: "https://goonfarias11.github.io/Pagina-Name-Stable/",
  },
  {
    id: 2,
    title: "Union - Plataforma Comercial",
    description:
      "Sitio comercial optimizado para ventas online con catálogo de productos, sistema de gestión y experiencia de compra fluida.",
    image: "/img/images/img-2.png",
    link: "https://goonfarias11.github.io/Pagina-Name-Union/",
  },
  {
    id: 3,
    title: "WebRes - Portfolio Creativo",
    description:
      "Portfolio personal con diseño innovador y atractivo, destacando proyectos creativos con animaciones modernas y UX excepcional.",
    image: "/img/images/img-3.png",
    link: "https://goonfarias11.github.io/Pagina-Name-WebRes/",
  },
  {
    id: 4,
    title: "Fearless - Agencia Digital",
    description:
      "Sitio para agencia especializada en diseño web, branding y servicios digitales. Muestra completa de servicios con diseño impactante.",
    image: "/img/images/img-4.png",
    link: "https://goonfarias11.github.io/Page-Name-Fearless/",
  },
  {
    id: 5,
    title: "Optics - Soluciones Digitales",
    description:
      "Plataforma digital para negocios con múltiples servicios, atención al cliente integrada y gestión de contenido eficiente.",
    image: "/img/images/img-5.png",
    link: "https://goonfarias11.github.io/Page-Name-Optics/",
  },
  {
    id: 6,
    title: "Psycko - Centro de Salud Mental",
    description:
      "Blog informativo para centro de salud mental con programas, servicios especializados y sistema de contacto para pacientes.",
    image: "/img/images/img-6.png",
    link: "https://goonfarias11.github.io/Page-Name-Hospital-Psycko/",
  },
  {
    id: 7,
    title: "Savory - Experiencia Gastronómica",
    description:
      "Sitio web gastronómico con menú digital, sistema de reservas online y galería visual de platillos con diseño elegante.",
    image: "/img/images/img-7.png",
    link: "https://goonfarias11.github.io/Page-Name-Savory/",
  },
  {
    id: 8,
    title: "DevTeam - Landing Profesional",
    description:
      "Landing page para empresa de desarrollo con portfolio de proyectos, servicios detallados y call-to-action optimizado para conversión.",
    image: "/img/images/img-8.png",
    link: "https://goonfarias11.github.io/Landing-Page-01/",
  },
  {
    id: 9,
    title: "Qzbiz - Blog Empresarial",
    description:
      "Template corporativo con estilo clásico y profesional, ideal para empresas que buscan presencia web informativa.",
    image: "/img/images/img-9.png",
    link: "https://goonfarias11.github.io/Page-Name-Qzbiz/",
  },
  {
    id: 10,
    title: "Twist - Template Versátil",
    description:
      "Template multipropósito con diseño simétrico y paleta de colores equilibrada, adaptable a diferentes tipos de negocio.",
    image: "/img/images/img-10.png",
    link: "https://goonfarias11.github.io/Page-Name-Twist/",
  },
  {
    id: 11,
    title: "Bs-Relax - Showcase Premium",
    description:
      "Portfolio empresarial para exhibición de productos y servicios con navegación intuitiva y diseño minimalista elegante.",
    image: "/img/images/img-11.png",
    link: "https://goonfarias11.github.io/Page-Name-Bs-Relax/",
  },
  {
    id: 12,
    title: "Thanol - Branding Studio",
    description:
      "Sitio especializado en creación de marcas innovadoras y websites efectivos, con portfolio visual impactante y diseño contemporáneo.",
    image: "/img/images/img-12.png",
    link: "https://goonfarias11.github.io/Page-Name-Thanol/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient"
        >
          PROYECTOS DESTACADOS
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-center mb-16 text-purple-300"
        >
          SITIOS WEB DESARROLLADOS
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-effect rounded-2xl overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">
                  Proyecto:
                </h4>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {project.title}
                </h3>

                <h4 className="text-sm font-semibold text-purple-400 mb-2">
                  Descripción:
                </h4>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all font-semibold text-sm"
                >
                  Ver Proyecto <FaExternalLinkAlt />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center glass-effect rounded-2xl p-12 border-2 border-purple-500"
        >
          <FaGlobe className="text-6xl text-purple-400 mx-auto mb-6" />
          <p className="text-2xl font-bold mb-6">
            ¿Necesitas tu sitio web profesional?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all shadow-lg shadow-purple-500/50"
          >
            Contáctame Ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
}