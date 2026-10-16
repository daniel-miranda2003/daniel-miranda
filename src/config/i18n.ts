export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "es";

export const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.contact": "Contacto",
    "nav.cv": "Descargar CV",
    "nav.skills": "Habilidades",

    "hero.greeting": "¡Hola! Soy",
    "hero.subtitle": "Desarrollador Full Stack",
    "hero.description":
      "Diseño y desarrollo plataformas web y aplicaciones móviles a medida, desde la idea hasta producción.",
    "hero.contact": "Contáctame",

    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes un proyecto en mente?",
    "contact.availability":
      "Disponible para proyectos independientes y asesoría para tu negocio.",

    "footer.copyrightLine":
      "Daniel Miranda · 2026",
    "footer.madeWith": "Hecho con",

    "theme.toggle": "Cambiar tema",

    "expertise.title": "Habilidades",
    "expertise.focusLabel": "Enfoque",
    "expertise.fullstack": "Desarrollador Full Stack",
    "expertise.fullstackDescription":
      "Construyo plataformas web de punta a punta: de la interfaz a la lógica de negocio y la infraestructura, con código limpio, mantenible y pensado para escalar.",
    "expertise.fullstackTags": "Next.js,TypeScript,React",
    "expertise.flutter": "Desarrollador Flutter",
    "expertise.flutterDescription":
      "Apps para Android e iOS desde un solo código base, con interfaces fluidas, buen rendimiento y una experiencia consistente en ambas plataformas.",
    "expertise.apis": "APIs y Backend",
    "expertise.apisDescription":
      "Diseño APIs seguras y bien documentadas, con arquitectura modular, autenticación robusta y bases de datos optimizadas para soportar el crecimiento de tu producto.",
  },
  en: {
    "nav.home": "Home",
    "nav.contact": "Contact",
    "nav.cv": "Get Resume",
    "nav.skills": "Skills",

    "hero.greeting": "Hi! I am",
    "hero.subtitle": "Full Stack Developer",
    "hero.description":
      "I design and develop custom web platforms and mobile apps, from idea to production.",
    "hero.contact": "Get in touch",

    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind?",
    "contact.availability":
      "Available for freelance projects and consulting for your business.",

    "footer.copyrightLine": "Daniel Miranda · 2026",
    "footer.madeWith": "Made with",

    "theme.toggle": "Toggle theme",

    "expertise.title": "Skills",
    "expertise.focusLabel": "Focus",
    "expertise.fullstack": "Full Stack Developer",
    "expertise.fullstackDescription":
      "I build web platforms end to end: from the interface to the business logic and infrastructure, with clean, maintainable code built to scale.",
    "expertise.fullstackTags": "Next.js,TypeScript,React",
    "expertise.flutter": "Flutter Developer",
    "expertise.flutterDescription":
      "Apps for Android and iOS from a single codebase, with fluid interfaces, strong performance, and a consistent experience across both platforms.",
    "expertise.apis": "APIs & Backend",
    "expertise.apisDescription":
      "I design secure, well-documented APIs with a modular architecture, robust authentication, and databases optimized to support your product's growth.",
  },
} as const;
