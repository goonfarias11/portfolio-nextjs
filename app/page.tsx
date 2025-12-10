"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Animated Background - matching original dark gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-[#1a0a3a] to-slate-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(94,43,255,0.1),transparent_50%)]"></div>
        </div>
      </div>

      <Navigation />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}