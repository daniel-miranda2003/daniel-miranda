export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "es";

export const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.cv": "Ver CV",
    "nav.expertise": "Experiencia",
    "nav.skills": "Habilidades",

    "hero.greeting": "¡Hola! Soy",
    "hero.subtitle": "Desarrollador Web y Móvil",
    "hero.description":
      "Desarrollador web y móvil con enfoque en soluciones digitales completas. Desarrollo aplicaciones modernas y eficientes, priorizando rendimiento, escalabilidad y una sólida experiencia de usuario.",
    "hero.cta": "Proyectos",
    "hero.contact": "Contáctame",

    "about.title": "Sobre mí",
    "about.subtitle": "Conoce más sobre mi trayectoria",
    "about.intro":
      "Soy Daniel Miranda, tengo 22 años y soy de Latinoamérica. Recién egresado de la Licenciatura en Ingeniería de Sistemas, me apasiona crear soluciones digitales que combinen funcionalidad, rendimiento y experiencia de usuario excepcional.",
    "about.specialty":
      "Me especializo en desarrollo móvil con Flutter, creando aplicaciones multiplataforma con interfaces modernas y experiencias fluidas. Dominio tanto el diseño UI/UX como la arquitectura técnica para entregar aplicaciones robustas y escalables.",
    "about.fullstack":
      "También cuento con experiencia en desarrollo web full-stack, trabajando con tecnologías modernas como React, Vue.js, Astro y Node.js para el frontend, y Laravel, Express y bases de datos SQL/NoSQL para el backend.",

    "projects.title": "Proyectos",
    "projects.subtitle": "Algunos de mis trabajos recientes",
    "projects.viewProject": "Ver proyecto",
    "projects.viewCode": "Ver código",

    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes un proyecto en mente?",
    "contact.description":
      "Estoy disponible para nuevos proyectos y colaboraciones.",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.message": "Mensaje",
    "contact.send": "Enviar mensaje",

    "footer.rights": "Todos los derechos reservados.",
    "footer.madeWith": "Hecho con",

    "theme.light": "Modo claro",
    "theme.dark": "Modo oscuro",
    "theme.toggle": "Cambiar tema",

    "lang.select": "Seleccionar idioma",

    "skills.title": "Habilidades",
    "skills.subtitle": "Mi Stack Tecnológico",
    "skills.description":
      "Domino un amplio stack de tecnologías modernas para desarrollar soluciones escalables, innovadoras y de alto rendimiento",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.mobile": "Móvil",
    "skills.databases": "Bases de Datos",
    "skills.tools": "Herramientas",

    "expertise.title": "En qué me especializo",
    "expertise.flutter": "Flutter Dev",
    "expertise.mainSpecialty": "Especialidad Principal",
    "expertise.flutterDescription":
      "Especializado en desarrollo de aplicaciones móviles multiplataforma con Flutter. Creo soluciones robustas y escalables para Android e iOS desde una única base de código.",
    "expertise.solutions": "Soluciones",
    "expertise.solution1": "Apps Nativas para iOS & Android",
    "expertise.solution2": "Aplicaciones Empresariales",
    "expertise.solution3": "Integración con APIs REST",
    "expertise.backend": "Backend",
    "expertise.backendDescription":
      "APIs REST con Node.js, Express y Laravel. Bases de datos y autenticación segura.",
    "expertise.frontend": "Frontend",
    "expertise.frontendDescription":
      "React, Vue.js y Astro. Interfaces modernas y responsive con TailwindCSS/BS5.",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.cv": "View Resume",
    "nav.expertise": "Expertise",
    "nav.skills": "Skills",

    "hero.greeting": "Hi! I am",
    "hero.subtitle": "Web & Mobile Developer",
    "hero.description":
      "Web and mobile developer focused on complete digital solutions. I build modern and efficient applications, prioritizing performance, scalability, and a solid user experience.",
    "hero.cta": "Projects",
    "hero.contact": "Contact me",

    "about.title": "About me",
    "about.subtitle": "Get to know my journey",
    "about.intro":
      "I'm Daniel Miranda, 22 years old from Latin America. Recent graduate with a Bachelor's degree in Systems Engineering, passionate about creating digital solutions that combine functionality, performance, and exceptional user experience.",
    "about.specialty":
      "I specialize in mobile development with Flutter, building cross-platform applications with modern interfaces and smooth experiences. I master both UI/UX design and technical architecture to deliver robust and scalable applications.",
    "about.fullstack":
      "I also have experience in full-stack web development, working with modern technologies like React, Vue.js, Astro, and Node.js for the frontend, and Laravel, Express, and SQL/NoSQL databases for the backend.",

    "projects.title": "Projects",
    "projects.subtitle": "Some of my recent work",
    "projects.viewProject": "View project",
    "projects.viewCode": "View code",

    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind?",
    "contact.description":
      "I am available for new projects and collaborations.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send message",

    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Made with",

    "theme.light": "Light mode",
    "theme.dark": "Dark mode",
    "theme.toggle": "Toggle theme",

    "lang.select": "Select language",

    "skills.title": "Skills",
    "skills.subtitle": "My Tech Stack",
    "skills.description":
      "I master a wide stack of modern technologies to develop scalable, innovative, and high-performance solutions",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.mobile": "Mobile",
    "skills.databases": "Databases",
    "skills.tools": "Tools",

    "expertise.title": "My Expertise",
    "expertise.flutter": "Flutter Dev",
    "expertise.mainSpecialty": "Main Specialty",
    "expertise.flutterDescription":
      "Specialized in cross-platform mobile app development with Flutter. I build robust and scalable solutions for Android and iOS from a single codebase.",
    "expertise.solutions": "Solutions",
    "expertise.solution1": "Native Apps for iOS & Android",
    "expertise.solution2": "Enterprise Applications",
    "expertise.solution3": "REST API Integration",
    "expertise.backend": "Backend",
    "expertise.backendDescription":
      "REST APIs with Node.js, Express & Laravel. Databases and secure authentication.",
    "expertise.frontend": "Frontend",
    "expertise.frontendDescription":
      "React, Vue.js & Astro. Modern and responsive interfaces with TailwindCSS.",
  },
} as const;
