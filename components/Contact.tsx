"use client";

import { useState, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = memo(function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo válido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setStatus("loading");

      // Simulate API call
      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});

        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      }, 2000);
    }
  }, [formData, validateForm]);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }
  }, [errors]);

  return (
    <section id="contact" className="section-padding bg-black/20">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient"
        >
          ¿Tienes un Proyecto en Mente?
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-gray-300 mb-12"
        >
          Envíame un mensaje y hablemos sobre tu próximo proyecto
        </motion.p>

        <motion.form
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="card-hover rounded-2xl p-8 md:p-12 space-y-6"
          noValidate
          role="form"
          aria-label="Formulario de contacto"
        >
          {/* Name Field */}
          <motion.div variants={fadeInUp}>
            <label 
              htmlFor="name" 
              className="block text-white mb-2 font-semibold"
            >
              Nombre Completo <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Juan Pérez"
              disabled={status === "loading"}
              className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                errors.name ? "border-red-500 focus:ring-red-500/50" : "border-purple-500/50 focus:ring-purple-500/50"
              } text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  id="name-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-400 text-sm mt-2 flex items-center gap-1"
                  role="alert"
                >
                  <FaExclamationCircle /> {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Email Field */}
          <motion.div variants={fadeInUp}>
            <label 
              htmlFor="email" 
              className="block text-white mb-2 font-semibold"
            >
              Correo Electrónico <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="juan@ejemplo.com"
              disabled={status === "loading"}
              className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                errors.email ? "border-red-500 focus:ring-red-500/50" : "border-purple-500/50 focus:ring-purple-500/50"
              } text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  id="email-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-400 text-sm mt-2 flex items-center gap-1"
                  role="alert"
                >
                  <FaExclamationCircle /> {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Message Field */}
          <motion.div variants={fadeInUp}>
            <label 
              htmlFor="message" 
              className="block text-white mb-2 font-semibold"
            >
              Mensaje <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntame sobre tu proyecto..."
              rows={6}
              disabled={status === "loading"}
              className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                errors.message ? "border-red-500 focus:ring-red-500/50" : "border-purple-500/50 focus:ring-purple-500/50"
              } text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            <AnimatePresence>
              {errors.message && (
                <motion.p
                  id="message-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-400 text-sm mt-2 flex items-center gap-1"
                  role="alert"
                >
                  <FaExclamationCircle /> {errors.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={fadeInUp}>
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={status === "idle" ? { scale: 1.02 } : {}}
              whileTap={status === "idle" ? { scale: 0.98 } : {}}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Enviar mensaje"
            >
              {status === "loading" ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Enviando...
                </>
              ) : (
                <>
                  <FaPaperPlane aria-hidden="true" /> Enviar Mensaje
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Success Message */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-2 text-green-400"
                role="status"
                aria-live="polite"
              >
                <FaCheckCircle className="text-xl flex-shrink-0" />
                <span className="font-medium">
                  ¡Mensaje enviado exitosamente! Te responderé pronto.
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
