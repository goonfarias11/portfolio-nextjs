import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goonfarias11.github.io"),
  title: {
    default: "Gonzalo Farias - Desarrollador Web Full Stack | Portfolio Profesional",
    template: "%s | Gonzalo Farias",
  },
  description:
    "Desarrollador Web Full Stack especializado en Next.js, React y TypeScript. Creo sitios web rápidos, accesibles y optimizados para SEO que convierten visitantes en clientes. Portfolio con +12 proyectos profesionales.",
  keywords: [
    "Gonzalo Farias",
    "desarrollador web",
    "full stack developer",
    "web developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "desarrollo frontend",
    "desarrollo backend",
    "sitios web optimizados",
    "SEO técnico",
    "performance web",
    "accesibilidad web",
    "portfolio desarrollador",
  ],
  authors: [{ name: "Gonzalo Farias", url: "https://github.com/goonfarias11" }],
  creator: "Gonzalo Farias",
  publisher: "Gonzalo Farias",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://goonfarias11.github.io",
    title: "Gonzalo Farias - Desarrollador Web Full Stack",
    description:
      "Desarrollador Full Stack especializado en crear sitios web rápidos, accesibles y optimizados. Next.js, React, TypeScript. +12 proyectos profesionales.",
    siteName: "Gonzalo Farias Portfolio",
    images: [
      {
        url: "/img/logoon.png",
        width: 1200,
        height: 630,
        alt: "Gonzalo Farias - Desarrollador Web Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Farias - Desarrollador Web Full Stack",
    description: "Sitios web rápidos, accesibles y optimizados con Next.js, React y TypeScript",
    creator: "@farias_goon",
    images: ["/img/logoon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://goonfarias11.github.io",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gonzalo Farias",
  jobTitle: "Full Stack Web Developer",
  description: "Desarrollador web especializado en Next.js, React y TypeScript. Creo sitios web rápidos, accesibles y optimizados para SEO.",
  url: "https://goonfarias11.github.io",
  image: "https://goonfarias11.github.io/img/logoon.png",
  sameAs: [
    "https://github.com/goonfarias11",
    "https://www.linkedin.com/in/goon-farias-8a584723b/",
    "https://twitter.com/farias_goon",
    "https://www.instagram.com/gonzalofarias11/",
  ],
  knowsAbout: [
    "Web Development",
    "Frontend Development",
    "Full Stack Development",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "SEO Optimization",
    "Web Performance",
    "Accessibility",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Web Development"
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Web Developer",
    skills: "Next.js, React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Git, Python"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" type="image/png" href="/img/logg.png" />
        <link rel="apple-touch-icon" href="/img/logoon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans overflow-x-hidden">
        <ThemeProvider>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}