"use client";

import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const FAQS = [
  {
    q: "¿Cuánto tarda en estar lista mi web?",
    a: "Una landing page o sitio institucional lo entrego en 5 a 7 días hábiles. Una aplicación más compleja (sistema de gestión, SaaS, tienda) puede llevar de 2 a 6 semanas dependiendo del alcance. Siempre te doy un plazo claro antes de arrancar.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Una landing page arranca desde $150 USD. Una web con más secciones o funcionalidades va desde $300 USD. Sistemas a medida desde $400 USD. Los precios dependen del proyecto, pero siempre te paso un presupuesto detallado antes de arrancar, sin sorpresas.",
  },
  {
    q: "¿Necesito saber de tecnología para trabajar con vos?",
    a: "Para nada. Me encargo de todo lo técnico. Vos me contás qué necesitás y yo lo traduzco en una solución concreta. La comunicación es simple y en lenguaje de todos los días.",
  },
  {
    q: "¿Una vez entregada la web, puedo hacerle cambios?",
    a: "Sí. Incluyo soporte post-entrega para ajustes menores. Si necesitás cambios más grandes en el futuro, te cotizo por separado a buen precio. También puedo capacitarte para que puedas editar el contenido vos mismo si el proyecto lo permite.",
  },
  {
    q: "¿Trabajás con clientes de toda Argentina o solo de Córdoba?",
    a: "Trabajo con clientes de todo el país de forma remota. Las reuniones son por videollamada y la comunicación por WhatsApp. Si sos de Córdoba y preferís una reunión presencial, también puedo.",
  },
  {
    q: "¿Qué necesito tener listo para empezar?",
    a: "Básicamente, tener claro qué necesitás y para qué. No hace falta que tengas el contenido final ni el diseño definido. En la primera charla te hago las preguntas correctas para entender bien tu proyecto y arrancamos desde ahí.",
  },
];

const FAQItem = ({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) => (
  <motion.div
    variants={fadeInUp}
    className="card-hover rounded-xl overflow-hidden"
  >
    <button
      onClick={onClick}
      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
      aria-expanded={isOpen}
    >
      <span className="font-semibold text-white group-hover:text-purple-300 transition-colors">
        {q}
      </span>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className="text-purple-400 flex-shrink-0"
      >
        <FaChevronDown />
      </motion.span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <p className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-purple-500/20 pt-4">
            {a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = memo(function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient"
        >
          Preguntas frecuentes
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12"
        >
          Lo que la mayoría quiere saber antes de arrancar
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* CTA debajo */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">¿Todavía tenés dudas?</p>
          <a
            href="https://wa.me/5493543515007?text=Hola%20Gonzalo%2C%20tengo%20una%20consulta%20sobre%20tu%20servicio%20%F0%9F%91%8B"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-full transition-colors"
          >
            Preguntame directamente por WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
});

FAQ.displayName = "FAQ";

export default FAQ;
