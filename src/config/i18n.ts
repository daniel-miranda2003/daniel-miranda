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
    "nav.cv": "Ver CV",
    "nav.skills": "Habilidades",

    "hero.greeting": "¡Hola! Soy",
    "hero.subtitle": "Desarrollador Full Stack",
    "hero.description":
      "Especializado en Next.js para web y Flutter para móvil. Construyo productos escalables con arquitectura clara y rendimiento optimizado.",
    "hero.contact": "Contáctame",

    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes un proyecto en mente?",

    "footer.copyrightLine":
      "Daniel Miranda · 2026 · Todos los derechos reservados.",
    "footer.madeWith": "Hecho con",

    "theme.toggle": "Cambiar tema",

    "expertise.title": "Habilidades",
    "expertise.focusLabel": "Enfoque",
    "expertise.fullstack": "Desarrollador Full Stack",
    "expertise.fullstackDescription":
      "Construyo aplicaciones web completas con renderizado del lado del servidor, APIs REST, autenticación, bases de datos y despliegue continuo, todo dentro de un mismo ecosistema.",
    "expertise.fullstackTags": "Next.js,TypeScript,React",
    "expertise.flutter": "Desarrollador Flutter",
    "expertise.flutterDescription":
      "Desarrollo aplicaciones móviles nativas para Android e iOS desde una única base de código. Interfaz fluida, estado gestionado e integración con servicios externos.",
    "expertise.apis": "APIs y Backend",
    "expertise.apisDescription":
      "Servicios web seguros, escalables y bien documentados con arquitectura modular y buenas prácticas de desarrollo.",
  },
  en: {
    "nav.home": "Home",
    "nav.contact": "Contact",
    "nav.cv": "View Resume",
    "nav.skills": "Skills",

    "hero.greeting": "Hi! I am",
    "hero.subtitle": "Full Stack Developer",
    "hero.description":
      "Specialized in Next.js for web and Flutter for mobile. I build scalable products with clean architecture and optimized performance.",
    "hero.contact": "Contact me",

    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind?",

    "footer.copyrightLine": "Daniel Miranda · 2026 · All rights reserved.",
    "footer.madeWith": "Made with",

    "theme.toggle": "Toggle theme",

    "expertise.title": "Skills",
    "expertise.focusLabel": "Focus",
    "expertise.fullstack": "Full Stack Developer",
    "expertise.fullstackDescription":
      "I build complete web applications with server-side rendering, REST APIs, authentication, databases, and continuous deployment, all within a single ecosystem.",
    "expertise.fullstackTags": "Next.js,TypeScript,React",
    "expertise.flutter": "Flutter Developer",
    "expertise.flutterDescription":
      "I develop native mobile apps for Android and iOS from a single codebase. Fluid UI, managed state, and integration with external services.",
    "expertise.apis": "APIs & Backend",
    "expertise.apisDescription":
      "Secure, scalable, and well-documented web services with modular architecture and development best practices.",
  },
} as const;
