"use client";

import { memo, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SERVICES } from "@/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/lib/hooks";

const Services = memo(function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<HTMLElement>);

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Servicios de Desarrollo Web
        </motion.h2>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.id}
              variants={fadeInUp}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
              className="card-hover rounded-2xl overflow-hidden group cursor-pointer"
              role="article"
              aria-labelledby={`service-${service.id}`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Servicio de desarrollo web`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 
                  id={`service-${service.id}`}
                  className="text-2xl font-bold mb-3 text-white"
                >
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Beneficios clave */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30"
                    >
                      ✓ {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Services.displayName = "Services";

export default Services;