import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { jsonLdString } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portafoliogoon.vercel.app"),
  title: {
    default: "Gonzalo Farias — Desarrollador Web | Córdoba, Argentina",
    template: "%s | Gonzalo Farias",
  },
  description:
    "Desarrollador web en Córdoba, Argentina. Creo sitios web, tiendas online y sistemas a medida para negocios y emprendedores. Precios claros, entrega rápida. Consultá sin cargo.",
  keywords: [
    "desarrollador web Córdoba",
    "diseño web Córdoba Argentina",
    "páginas web para negocios Córdoba",
    "desarrollo web freelance Argentina",
    "landing page económica Argentina",
    "sistemas web a medida Córdoba",
    "tienda online Argentina",
    "Gonzalo Farias desarrollador",
    "Next.js React TypeScript",
    "web profesional para emprendedores",
  ],
  authors: [{ name: "Gonzalo Farias", url: "https://portafoliogoon.vercel.app" }],
  creator: "Gonzalo Farias",
  publisher: "Gonzalo Farias",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://portafoliogoon.vercel.app",
    title: "Gonzalo Farias — Desarrollador Web en Córdoba",
    description:
      "Creo sitios web y sistemas a medida para negocios en Córdoba y toda Argentina. Precios claros, entrega rápida. Consultá sin cargo.",
    siteName: "Gonzalo Farias — Desarrollo Web",
    images: [
      {
        url: "/img/logoon.png",
        width: 1200,
        height: 630,
        alt: "Gonzalo Farias — Desarrollador Web Córdoba Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Farias — Desarrollador Web en Córdoba",
    description:
      "Sitios web y sistemas a medida para negocios. Precios claros, entrega rápida.",
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
    canonical: "https://portafoliogoon.vercel.app",
  },
  category: "technology",
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
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString }}
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
