import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gonzalo Farias - Web Developer & UI Designer | Portfolio",
  description: "Gonzalo Farias - Full Stack Developer & UI Designer. Creación de sitios web modernos, responsivos y profesionales. Portfolio de proyectos web y servicios de desarrollo.",
  keywords: ["desarrollador web", "web developer", "UI designer", "portfolio", "Gonzalo Farias", "diseño web", "desarrollo frontend"],
  authors: [{ name: "Gonzalo Farias" }],
  openGraph: {
    type: "website",
    title: "Gonzalo Farias - Web Developer & UI Designer",
    description: "Portfolio profesional de desarrollo web. Especializado en sitios modernos, responsivos y optimizados.",
    url: "https://goonfarias11.github.io",
    images: ["/img/logoon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Farias - Web Developer",
    description: "Portfolio profesional de desarrollo web",
    images: ["/img/logoon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/img/logg.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}