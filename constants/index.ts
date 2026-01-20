import { FaInstagram, FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export const NAV_LINKS = [
  { href: "#home", label: "INICIO" },
  { href: "#services", label: "SERVICIOS" },
  { href: "#projects", label: "PROYECTOS" },
  { href: "#skills", label: "SKILLS" },
  { href: "#about", label: "SOBRE MÍ" },
  { href: "#contact", label: "CONTACTO" },
] as const;

export const SERVICES = [
  {
    id: "responsive",
    title: "Diseño Web Responsivo",
    description:
      "Sitios web que se adaptan perfectamente a cualquier dispositivo. Optimizados para móviles, tablets y desktop con diseño moderno y experiencia de usuario fluida.",
    image:
      "/img/service-responsive.png",
    link: "https://www.iebschool.com/blog/que-es-responsive-web-design-analitica-usabilidad/",
    benefits: ["Mobile-first", "UX optimizada", "Carga rápida"]
  },
  {
    id: "development",
    title: "Desarrollo Web Full Stack",
    description:
      "Desarrollo completo de aplicaciones web con Next.js, React y TypeScript. Desde landing pages hasta aplicaciones complejas con backend integrado y bases de datos.",
    image:
      "/img/service-development.png",
    link: "https://es.wikipedia.org/wiki/Dise%C3%B1o_web",
    benefits: ["Next.js y React", "TypeScript", "Escalable"]
  },
  {
    id: "optimization",
    title: "Optimización y SEO Técnico",
    description:
      "Mejoro la velocidad, accesibilidad y posicionamiento en buscadores de tu sitio web. Core Web Vitals optimizados, código limpio y estructura semántica correcta.",
    image:
      "/img/service-optimization.png",
    link: "https://grupovisuallab.com/por-que-es-importante-actualizar-tu-pagina-web/",
    benefits: ["SEO técnico", "Performance", "Accesibilidad"]
  },
] as const;

export const PROJECTS = [
  // PROYECTOS EN PRODUCCIÓN
  {
    id: "generadorcv",
    title: "GeneradorCV",
    description:
      "Plataforma SaaS para crear CVs profesionales de forma simple, rápida y guiada. Sistema completo con flujo intuitivo, generación dinámica de contenido y exportación lista para usar.",
    image: "/img/images/generadorcv.png",
    link: "https://www.generadorcv.online/",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    problem: "Personas que necesitan un CV profesional sin conocimientos de diseño ni redacción",
    solution: "Web app con flujo guiado, generación dinámica y exportación profesional",
    inProduction: true,
    isOwn: true,
    responsibility: "Desarrollo completo del proyecto (frontend, lógica y despliegue)",
    result: "Producto funcionando en producción con usuarios reales"
  },
  {
    id: "vendimax",
    title: "VendiMax",
    description:
      "Sistema web de gestión de ventas (POS) para comercios, con control completo de productos, ventas, tickets y reportes. Solución centralizada para administración comercial.",
    image: "/img/images/vendimax.png",
    link: "https://vendimax-ff4l.vercel.app/",
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
    problem: "Comercios que necesitan un sistema simple y centralizado para gestionar ventas",
    solution: "Sistema web con gestión de productos, ventas, reportes y flujos de pago",
    inProduction: true,
    isOwn: true,
    responsibility: "Desarrollo completo del sistema",
    result: "Sistema funcional en uso y en evolución continua"
  },
  
  // PROYECTOS DE PRÁCTICA Y DEMOS
  {
    id: 1,
    title: "Stable - Sitio Corporativo",
    description:
      "Plataforma corporativa desarrollada para comunicar valores de marca y compromiso social. Implementa navegación intuitiva, secciones optimizadas para SEO y diseño responsivo.",
    image: "/img/images/img-1.png",
    link: "https://goonfarias11.github.io/Pagina-Name-Stable/",
    stack: ["HTML5", "CSS3", "JavaScript"],
    problem: "Necesidad de presencia digital profesional y moderna",
    solution: "Sitio web corporativo con diseño elegante y contenido estructurado",
    inProduction: false,
    isOwn: false
  },
  {
    id: 2,
    title: "Union - Plataforma Comercial",
    description:
      "E-commerce optimizado para conversión con catálogo de productos dinámico. Incluye sistema de navegación fluida, carrito de compras y diseño enfocado en la experiencia del usuario.",
    image: "/img/images/img-2.png",
    link: "https://goonfarias11.github.io/Pagina-Name-Union/",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    problem: "Venta online eficiente con buena UX",
    solution: "Plataforma comercial con gestión de productos y checkout optimizado",
    inProduction: false,
    isOwn: false
  },
  {
    id: 3,
    title: "WebRes - Portfolio Creativo",
    description:
      "Portfolio personal con animaciones modernas y diseño innovador. Showcase de proyectos creativos con transiciones suaves, galería interactiva y navegación optimizada.",
    image: "/img/images/img-3.png",
    link: "https://goonfarias11.github.io/Pagina-Name-WebRes/",
    stack: ["HTML5", "CSS3", "JavaScript", "SASS"],
    problem: "Destacar proyectos creativos de forma atractiva",
    solution: "Portfolio con animaciones modernas y diseño impactante",
    inProduction: false,
    isOwn: false
  },
  {
    id: 4,
    title: "Fearless - Agencia Digital",
    description:
      "Sitio para agencia de marketing digital especializada en branding y diseño web. Presenta servicios de forma clara con secciones optimizadas para conversión y casos de éxito.",
    image: "/img/images/img-4.png",
    link: "https://goonfarias11.github.io/Page-Name-Fearless/",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    problem: "Mostrar servicios digitales de forma profesional",
    solution: "Sitio de agencia con portfolio completo y CTAs estratégicos",
    inProduction: false,
    isOwn: false
  },
  {
    id: 5,
    title: "Optics - Soluciones Digitales",
    description:
      "Plataforma B2B para servicios empresariales con múltiples soluciones integradas. Sistema de gestión de contenido eficiente y atención al cliente en tiempo real.",
    image: "/img/images/img-5.png",
    link: "https://goonfarias11.github.io/Page-Name-Optics/",
    stack: ["HTML5", "CSS3", "JavaScript"],
    problem: "Centralizar múltiples servicios empresariales",
    solution: "Plataforma integral con gestión y atención unificada",
    inProduction: false,
    isOwn: false
  },
  {
    id: 6,
    title: "Psycko - Centro de Salud Mental",
    description:
      "Sitio informativo para centro de salud mental con programas especializados. Incluye blog educativo, sistema de citas online y recursos para pacientes con navegación accesible.",
    image: "/img/images/img-6.png",
    link: "https://goonfarias11.github.io/Page-Name-Hospital-Psycko/",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    problem: "Informar y conectar con pacientes efectivamente",
    solution: "Portal de salud con blog, programas y sistema de contacto",
    inProduction: false,
    isOwn: false
  },
  {
    id: 7,
    title: "Savory - Experiencia Gastronómica",
    description:
      "Web gastronómica con menú digital interactivo, galería visual de alta calidad y sistema de reservas online. Optimizado para dispositivos móviles y carga rápida de imágenes.",
    image: "/img/images/img-7.png",
    link: "https://goonfarias11.github.io/Page-Name-Savory/",
    stack: ["HTML5", "CSS3", "JavaScript", "SASS"],
    problem: "Presentar menú y facilitar reservas online",
    solution: "Sitio gastronómico con galería visual y reservas integradas",
    inProduction: false,
    isOwn: false
  },
  {
    id: 8,
    title: "DevTeam - Landing Profesional",
    description:
      "Landing page de alta conversión para empresa de desarrollo de software. Incluye portfolio de proyectos, testimonios de clientes y call-to-action estratégicamente ubicados.",
    image: "/img/images/img-8.png",
    link: "https://goonfarias11.github.io/Landing-Page-01/",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    problem: "Captar leads cualificados para desarrollo",
    solution: "Landing optimizada con portfolio y CTAs de conversión",
    inProduction: false,
    isOwn: false
  },
  {
    id: 9,
    title: "Qzbiz - Blog Empresarial",
    description:
      "Template corporativo clásico y profesional para contenido empresarial. Estructura optimizada para SEO, blog integrado y diseño que transmite confianza y autoridad.",
    image: "/img/images/img-9.png",
    link: "https://goonfarias11.github.io/Page-Name-Qzbiz/",
    stack: ["HTML5", "CSS3", "JavaScript"],
    problem: "Presencia web informativa y profesional",
    solution: "Template corporativo con blog y diseño clásico",
    inProduction: false,
    isOwn: false
  },
  {
    id: 10,
    title: "Twist - Template Versátil",
    description:
      "Template multipropósito con diseño simétrico y paleta equilibrada. Adaptable a diferentes tipos de negocio con componentes modulares y código bien estructurado.",
    image: "/img/images/img-10.png",
    link: "https://goonfarias11.github.io/Page-Name-Twist/",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    problem: "Solución rápida para diversos tipos de negocio",
    solution: "Template versátil y adaptable con componentes modulares",
    inProduction: false,
    isOwn: false
  },
  {
    id: 11,
    title: "Bs-Relax - Showcase Premium",
    description:
      "Portfolio empresarial minimalista para exhibición de productos y servicios premium. Navegación intuitiva, diseño elegante y enfoque en contenido visual de calidad.",
    image: "/img/images/img-11.png",
    link: "https://goonfarias11.github.io/Page-Name-Bs-Relax/",
    stack: ["HTML5", "CSS3", "JavaScript", "SASS"],
    problem: "Exhibir productos premium de forma elegante",
    solution: "Showcase minimalista con navegación intuitiva",
    inProduction: false,
    isOwn: false
  },
  {
    id: 12,
    title: "Thanol - Branding Studio",
    description:
      "Sitio para estudio creativo especializado en identidad de marca y diseño web. Portfolio visual impactante, casos de estudio detallados y diseño contemporáneo que inspira.",
    image: "/img/images/img-12.png",
    link: "https://goonfarias11.github.io/Page-Name-Thanol/",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    problem: "Mostrar trabajo creativo de forma inspiradora",
    solution: "Portfolio visual con casos de estudio y diseño contemporáneo",
    inProduction: false,
    isOwn: false
  },
] as const;

export const SKILLS = [
  { name: "HTML5", icon: "/img/skills/html.png", category: "frontend" },
  { name: "CSS3", icon: "/img/skills/css.png", category: "frontend" },
  { name: "JavaScript", icon: "/img/skills/js.png", category: "frontend" },
  { name: "SASS", icon: "/img/skills/sass.png", category: "frontend" },
  { name: "Bootstrap", icon: "/img/skills/bootstrap.png", category: "frontend" },
  { name: "Python", icon: "/img/skills/python.png", category: "backend" },
  { name: "Git", icon: "/img/skills/git.png", category: "tools" },
  { name: "GitHub", icon: "/img/skills/github.png", category: "tools" },
  { name: "Ionic", icon: "/img/skills/ionic.png", category: "mobile" },
] as const;

export const TECH_STACK = {
  frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Python", "Node.js"],
  tools: ["Git", "GitHub", "VS Code", "Figma"],
  learning: ["PostgreSQL", "MongoDB", "Docker"]
} as const;

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/gonzalofarias11/",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/goon.farias.50",
    icon: FaFacebook,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/farias_goon",
    icon: FaTwitter,
  },
  {
    name: "GitHub",
    url: "https://github.com/goonfarias11",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/goon-farias-8a584723b/",
    icon: FaLinkedin,
  },
] as const;