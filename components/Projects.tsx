"use client";

import { memo, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGlobe, FaRocket, FaCode } from "react-icons/fa";
import { PROJECTS } from "@/constants";
import { fadeInUp, staggerContainer, zoomIn } from "@/lib/motion";
import { useInView } from "@/lib/hooks";

const Projects = memo(function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<HTMLElement>);

  const productionProjects = PROJECTS.filter((p: any) => p.inProduction);
  const demoProjects = PROJECTS.filter((p: any) => !p.inProduction);

  return (
    <section id="projects" className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient"
        >
          Proyectos Destacados
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-gray-300 mb-16 max-w-3xl mx-auto"
        >
          Productos en producción con usuarios reales y proyectos de práctica que demuestran mi experiencia
        </motion.p>

        {/* PROYECTOS EN PRODUCCIÓN */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaRocket className="text-green-400 text-2xl" />
            <h3 className="text-2xl font-bold text-green-400">
              En Producción - Productos Propios
            </h3>
          </div>

          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {productionProjects.map((project: any) => (
              <motion.article
                key={project.id}
                variants={zoomIn}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(34, 197, 94, 0.4)"
                }}
                className="card-hover rounded-2xl overflow-hidden group border-2 border-green-500/30 bg-gradient-to-br from-green-900/10 to-transparent relative"
                role="article"
                aria-labelledby={`project-${project.id}`}
              >
                <div className="relative h-64 overflow-hidden bg-gray-900">
                  {/* Badge en producción */}
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                    <FaRocket /> EN PRODUCCIÓN
                  </div>
                  <Image
                    src={project.image}
                    alt={`${project.title} - Producto en producción`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3
                    id={`project-${project.id}`}
                    className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors"
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stack tecnológico */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-semibold rounded-md border border-green-500/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Resultado */}
                  {project.result && (
                    <div className="mb-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <p className="text-green-300 text-sm font-medium">
                        ✓ {project.result}
                      </p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    {project.link !== "#" && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-sm font-bold transition-colors text-white"
                        aria-label={`Visitar ${project.title} en producción`}
                      >
                        <FaGlobe aria-hidden="true" /> Visitar sitio
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        {/* PROYECTOS DE PRÁCTICA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <FaCode className="text-purple-400 text-2xl" />
            <h3 className="text-2xl font-bold text-purple-400">
              Proyectos de Práctica
            </h3>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {demoProjects.map((project: any) => (
              <motion.article
                key={project.id}
                variants={zoomIn}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)"
                }}
                className="card-hover rounded-2xl overflow-hidden group"
                role="article"
                aria-labelledby={`project-${project.id}`}
              >
                <div className="relative h-56 overflow-hidden bg-gray-900">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Captura de pantalla del proyecto`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3
                    id={`project-${project.id}`}
                    className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors"
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Stack tecnológico */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600/80 hover:bg-purple-600 rounded-lg text-sm font-medium transition-colors"
                      aria-label={`Ver proyecto ${project.title} en vivo`}
                    >
                      <FaGlobe aria-hidden="true" /> Ver demo
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
