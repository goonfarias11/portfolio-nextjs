"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = true;
    if (!formData.message.trim()) newErrors.message = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          ¿Tienes un Proyecto en Mente?
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-effect rounded-2xl p-8 md:p-12 border-2 border-purple-500"
        >
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-white mb-2 font-semibold">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                errors.name ? "border-red-500" : "border-purple-500/50"
              } text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all`}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-2">
                Por favor ingresa tu nombre
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-white mb-2 font-semibold">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                errors.email ? "border-red-500" : "border-purple-500/50"
              } text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all`}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-2">
                Por favor ingresa un email válido
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-white mb-2 font-semibold">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntame sobre tu proyecto..."
              rows={6}
              className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                errors.message ? "border-red-500" : "border-purple-500/50"
              } text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all resize-vertical`}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-2">
                Por favor escribe un mensaje
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/50"
          >
            Enviar Mensaje <FaPaperPlane />
          </motion.button>

          {/* Success Message */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-500/20 border-2 border-green-500 rounded-lg text-green-400 text-center font-semibold"
            >
              ¡Mensaje enviado exitosamente! Te contactaré pronto.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}