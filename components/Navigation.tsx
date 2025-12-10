"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCode, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "INICIO" },
  { href: "#services", label: "SERVICIOS" },
  { href: "#projects", label: "PROYECTOS" },
  { href: "#about", label: "SOBRE MÍ" },
  { href: "#contact", label: "CONTACTO" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(savedTheme);
    
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass-effect"
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
            <ul className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors hover:text-purple-400 ${
                      activeSection === link.href
                        ? "text-purple-400"
                        : "text-white"
                    }`}
                  >
                    {link.label}
                    {activeSection === link.href && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect"
          >
            <ul className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-sm font-medium transition-colors ${
                      activeSection === link.href
                        ? "text-purple-400"
                        : "text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.nav>

      {/* Theme Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="fixed top-24 right-6 z-50 p-3 rounded-full glass-effect border-2 border-purple-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <FaMoon className="text-white text-xl" />
        ) : (
          <FaSun className="text-yellow-500 text-xl" />
        )}
      </motion.button>
    </>
  );
}