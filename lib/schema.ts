import { createHash } from "crypto";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gonzalo Farias",
  jobTitle: "Desarrollador Web Full Stack",
  description:
    "Desarrollador web en Córdoba, Argentina. Especializado en Next.js, React y TypeScript. Creo sitios web y sistemas a medida para negocios.",
  url: "https://portafoliogoon.vercel.app",
  email: "gonfarias6@gmail.com",
  telephone: "+5493543515007",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Córdoba",
    addressCountry: "AR",
  },
  image: "https://portafoliogoon.vercel.app/img/logoon.png",
  sameAs: [
    "https://github.com/goonfarias11",
    "https://www.linkedin.com/in/goon-farias-8a584723b/",
    "https://twitter.com/farias_goon",
    "https://www.instagram.com/gonzalofarias11/",
  ],
  knowsAbout: [
    "Desarrollo Web",
    "Frontend Development",
    "Full Stack Development",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "SEO Técnico",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Desarrollador Web Full Stack",
    skills:
      "Next.js, React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Git, Node.js",
  },
};

export const jsonLdString = JSON.stringify(jsonLd);
export const jsonLdScriptHash = `'sha256-${createHash("sha256").update(jsonLdString).digest("base64")}'`;
