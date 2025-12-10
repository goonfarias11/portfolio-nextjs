"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const services = [
  {
    id: "responsive",
    title: "Diseño Responsivo",
    description:
      "Sitios web que se adaptan perfectamente a cualquier dispositivo: desktop, tablet o móvil. Experiencia de usuario optimizada en todas las plataformas.",
    image:
      "https://img.freepik.com/foto-gratis/especialista-ti-revisando-codigo-computadora-oscura-oficina-noche_1098-18699.jpg?w=826",
    link: "https://www.iebschool.com/blog/que-es-responsive-web-design-analitica-usabilidad/",
  },
  {
    id: "edit",
    title: "Actualización y Mantenimiento",
    description:
      "Mantengo tu sitio actualizado con nuevo contenido, mejoras de seguridad y optimizaciones continuas para mantener tu presencia digital relevante.",
    image:
      "https://img.freepik.com/foto-gratis/imagen-primer-plano-programador-trabajando-su-escritorio-oficina_1098-18707.jpg?size=626&ext=jpg&ga=GA1.2.2074902052.1629594733",
    link: "https://grupovisuallab.com/por-que-es-importante-actualizar-tu-pagina-web/",
  },
  {
    id: "design",
    title: "Desarrollo Web Completo",
    description:
      "Creación de sitios web profesionales con las últimas tecnologías. Desde landing pages hasta aplicaciones web complejas y e-commerce.",
    image:
      "https://img.freepik.com/foto-gratis/programador-profesional-trabajando-tarde-oscura-oficina_1098-18705.jpg?w=826",
    link: "https://es.wikipedia.org/wiki/Dise%C3%B1o_web",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          MIS SERVICIOS
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white dark:text-white light:text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Más información <FaExternalLinkAlt />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}