"use client";

import { useState, useEffect, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import { NAV_LINKS } from "@/constants";
import { navVariants, fadeInDown, staggerFast } from "@/lib/motion";
import { useActiveSection, useScrolled } from "@/lib/hooks";

const Navigation = memo(function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrolled = useScrolled(20);
  const activeSection = useActiveSection(NAV_LINKS.map(link => link.href));

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="show"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-effect shadow-lg" : "bg-black/10 backdrop-blur-sm"
        }`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <FaCode className="text-purple-500 text-2xl" />
              <h1 className="text-2xl font-bold text-white">
                GONZALO
              </h1>
              <FaCode className="text-purple-500 text-2xl" />
            </div>

            {/* Desktop Menu */}
            <motion.div 
              className="hidden md:flex items-center space-x-1"
              variants={staggerFast}
              initial="hidden"
              animate="show"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={fadeInDown}
                  whileHover="hover"
                  whileTap="tap"
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeSection === link.href
                      ? "text-purple-400 bg-purple-500/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  aria-current={activeSection === link.href ? "page" : undefined}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Menú de navegación"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-20 left-0 right-0 z-40 glass-effect border-t border-white/10"
          >
            <motion.div 
              className="px-4 py-6 space-y-3"
              variants={staggerFast}
              initial="hidden"
              animate="show"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={fadeInDown}
                  onClick={toggleMenu}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    activeSection === link.href
                      ? "text-purple-400 bg-purple-500/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  aria-current={activeSection === link.href ? "page" : undefined}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;