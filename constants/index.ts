import { FaInstagram, FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";



// Cache busting version - update this timestamp to force image refresh

export const CACHE_VERSION = "1777917127";



export const NAV_LINKS = [

  { href: "#home", label: "INICIO" },

  { href: "#services", label: "SERVICIOS" },

  { href: "#projects", label: "PROYECTOS" },

  { href: "#testimonials", label: "TESTIMONIOS" },

  { href: "#about", label: "SOBRE MÍ" },

  { href: "#contact", label: "CONTACTO" },

] as const;



export const SERVICES = [

  {

    id: "responsive",

    title: "Landing Page / Sitio Institucional",

    description:

      "Sitio web profesional para tu negocio o emprendimiento. Diseño moderno, adaptado a celulares, con formulario de contacto y optimizado para aparecer en Google.",

    image:

      "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1200",

    link: "#contact",

    benefits: ["Mobile-first", "SEO incluido", "Entrega en 7 días"],

    price: "Desde $150 USD"

  },

  {

    id: "development",

    title: "Aplicación Web a Medida",

    description:

      "Desarrollo completo de sistemas y aplicaciones: tiendas online, paneles de gestión, CRMs, sistemas de turnos o lo que necesite tu negocio. Con base de datos y lógica de negocio incluida.",

    image:

      "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1200",

    link: "#contact",

    benefits: ["Full Stack", "Escalable", "Mantenimiento disponible"],

    price: "Desde $400 USD"

  },

  {

    id: "optimization",

    title: "Mejora y Optimización de Web Existente",

    description:

      "¿Tu web es lenta, no aparece en Google o se ve mal en el celular? La reviso, identifico los problemas y la dejo funcionando como debe. Velocidad, SEO técnico y accesibilidad.",

    image:

      "https://images.pexels.com/photos/6476592/pexels-photo-6476592.jpeg?auto=compress&cs=tinysrgb&w=1200",

    link: "#contact",

    benefits: ["Diagnóstico gratis", "Resultados medibles", "Sin contratos"],

    price: "Desde $80 USD"

  },

] as const;



export const PROJECTS = [

  // PRODUCTO ESTRELLA

  {

    id: "generadorcv",

    title: "GeneradorCV",

    description:

      "SaaS completo que permite a profesionales crear CVs optimizados en minutos sin conocimientos de diseño. El usuario responde preguntas guiadas y el sistema genera contenido profesional listo para exportar.",

    image: "/img/images/generadorcv.png",

    link: "https://www.generadorcv.online/",

    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

    problem: "Miles de personas necesitan un CV profesional pero no tienen tiempo ni conocimientos de diseño y redacción corporativa.",

    solution: "Web app con flujo guiado paso a paso, generación automática de contenido profesional y exportación en formato optimizado para ATS.",

    inProduction: true,

    isOwn: true,

    responsibility: "Producto desarrollado 100% por mí: arquitectura, frontend, lógica de negocio, UX y deployment en producción.",

    result: "Producto SaaS funcionando con usuarios reales. Conversión activa de visitantes a CVs generados."

  },



  // FULL-STACK BUSINESS APPS

  {

    id: "vendimax",

    title: "VendiMax - Sistema POS",

    description:

      "Sistema de punto de venta completo para comercios pequeños y medianos. Gestiona inventario, registra ventas, emite tickets y genera reportes de ingresos. Solución centralizada que reemplaza registros manuales y hojas de cálculo.",

    image: "/img/images/vendimax.png",

    link: "https://vendimax-ff4l.vercel.app/",

    stack: ["React", "Node.js", "Express", "PostgreSQL"],

    problem: "Comercios sin herramientas digitales pierden tiempo en control manual, no tienen visibilidad de inventario ni reportes confiables de ingresos.",

    solution: "Sistema web full-stack con backend robusto, base de datos relacional, gestión de productos, registro de ventas y módulo de reportes en tiempo real.",

    inProduction: true,

    isOwn: true,

    responsibility: "Desarrollo completo: arquitectura backend, diseño de base de datos, lógica comercial, frontend y flujos de negocio.",

    result: "Sistema funcional usado por comercios reales. Iteración continua basada en feedback de usuarios."

  },

  {

    id: "restaurantos",

    title: "RestaurantOS - Sistema Gastronómico",

    description:

      "Sistema de gestión gastronómica para restaurantes con apertura de caja, dashboard operativo, pedidos por mesa o delivery, vista de cocina en tiempo real, control de caja y menú digital QR.",

    image: "/img/images/restaurantos.png",

    link: "https://restaurant-amkwaih42-goonfarias11s-projects.vercel.app/",

    stack: ["React", "Vite", "JavaScript", "CSS"],

    problem: "Restaurantes pequeños necesitan centralizar pedidos, cocina, delivery y cobros sin depender de planillas o comunicación manual entre áreas.",

    solution: "Aplicación web con flujo operativo completo: caja abierta, alta de pedidos, seguimiento por estado, panel de cocina, gestión de delivery y control de ingresos por método de pago.",

    inProduction: true,

    isOwn: true,

    responsibility: "Desarrollo completo del frontend, lógica de pedidos, estados operativos, paneles de gestión y deployment en Vercel.",

    result: "Producto funcionando en producción como demo operativa para gestión integral de restaurantes."

  },

  {

    id: "torneo-saas",

    title: "Torneo SaaS",

    description:

      "Plataforma multi-tenant para organizar y gestionar torneos deportivos. Cada organizador tiene su panel administrativo donde crea equipos, genera fixtures automáticos, registra resultados y publica tablas de posiciones en tiempo real.",

    image: "/img/images/torneo.png",

    link: "https://torneo-saas.vercel.app",

    stack: ["Next.js", "React", "TypeScript", "Prisma", "Tailwind CSS"],

    problem: "Organizadores de torneos usan herramientas dispersas (Excel, WhatsApp, grupos) sin centralización ni transparencia para participantes.",

    solution: "SaaS con autenticación, panel de administración, generación automática de fixtures, seguimiento de partidos y publicación pública de resultados.",

    inProduction: true,

    isOwn: true,

    responsibility: "Arquitectura SaaS completa: autenticación, ORM con Prisma, lógica de torneos, frontend y deployment.",

    result: "Producto funcionando en producción con capacidad multi-tenant. Escalable a múltiples organizadores."

  },



  // PROYECTOS COMPLEMENTARIOS

  {

    id: "sorteo",

    title: "Sorteo Online",

    description:

      "App web para crear y gestionar sorteos digitales. Los usuarios se autentican, crean campañas de sorteo, agregan participantes y ejecutan sorteos aleatorios con transparencia y trazabilidad.",

    image: "/img/images/sorteo.png",

    link: "https://sorteo-amber-nine.vercel.app",

    stack: ["Next.js", "React", "TypeScript", "Prisma", "NextAuth"],

    problem: "Marcas y creadores necesitan herramientas confiables para sorteos online sin depender de plataformas externas.",

    solution: "Web app con autenticación mediante NextAuth, gestión de participantes con Prisma y lógica de sorteo aleatoria verificable.",

    inProduction: true,

    isOwn: true,

    responsibility: "Full-stack development: autenticación, persistencia de datos, lógica de sorteo y frontend.",

    result: "Producto funcional en producción usado para sorteos reales."

  },

  {

    id: 6,

    title: "Psycko - Portal de Salud Mental",

    description:

      "Portal informativo para centro de salud mental con contenido educativo, programas terapéuticos y sistema de contacto para pacientes. Diseño accesible enfocado en navegación clara y contenido sensible.",

    image: "/img/images/img-6.png",

    link: "https://goonfarias11.github.io/Page-Name-Hospital-Psycko/",

    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

    problem: "Centros de salud mental necesitan presencia digital accesible que transmita profesionalismo y empatía.",

    solution: "Sitio web con arquitectura de información clara, blog educativo, presentación de programas y formulario de contacto optimizado.",

    inProduction: false,

    isOwn: true,

    responsibility: "Diseño, desarrollo frontend y optimización de accesibilidad.",

    result: "Proyecto que demuestra capacidad de trabajar con nichos sensibles y diseño centrado en usuario."

  },



  // DISEÑO Y UI/UX

  {

    id: 12,

    title: "Thanol - Branding Studio",

    description:

      "Showcase digital para estudio de branding y diseño web. Portfolio visual con casos de estudio, galería de proyectos y narrativa enfocada en identidad de marca.",

    image: "/img/images/img-12.png",

    link: "https://goonfarias11.github.io/Page-Name-Thanol/",

    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

    problem: "Estudios creativos necesitan presencia digital que refleje su nivel de diseño y capacidad creativa.",

    solution: "Sitio web con diseño contemporáneo, portfolio visual impactante y presentación clara de servicios de branding.",

    inProduction: false,

    isOwn: true,

    responsibility: "Diseño visual, desarrollo frontend y experiencia de usuario.",

    result: "Proyecto que demuestra capacidad de UI/UX y diseño visual de alto nivel."

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

  backend: ["Node.js", "Python", "PostgreSQL", "Prisma"],

  tools: ["Git", "GitHub", "VS Code", "Figma", "n8n"],

  learning: ["Docker", "MongoDB", "SEO"]

} as const;



export const STATS = [
  { value: "+5", label: "Proyectos en producción", icon: "rocket" },
  { value: "100%", label: "Proyectos entregados", icon: "check" },
  { value: "24hs", label: "Tiempo de respuesta", icon: "bolt" },
  { value: "ARG", label: "Desarrollador en Córdoba", icon: "location" },
] as const;



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