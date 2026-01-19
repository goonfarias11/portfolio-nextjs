"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

// Dynamic imports para code splitting
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="min-h-screen" />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="min-h-screen" />,
});
const TechStack = dynamic(() => import("@/components/TechStack"), {
  loading: () => <div className="min-h-screen" />,
});
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="min-h-screen" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-screen" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-64" />,
});

export default function Home() {
  return (
    <main className="relative">
      {/* Background optimizado con animación */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-[#1a0a3a] to-slate-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(94,43,255,0.15),transparent_50%)] animate-pulse" 
               style={{ animationDuration: "4s" }} 
          />
        </div>
      </div>

      <Navigation />
      <Hero />
      <Services />
      <Projects />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}