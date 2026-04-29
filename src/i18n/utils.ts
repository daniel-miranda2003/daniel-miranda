import { defaultLang, type Language, translations } from "@/config/i18n";

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: string) {
    const translation = translations[lang] as Record<string, any>;
    const defaultTranslation = translations[defaultLang] as Record<string, any>;
    return translation[key] || defaultTranslation[key] || key;
  };
}

export function translatePath(path: string, targetLang: Language): string {
  const currentLang = path.startsWith("/en") ? "en" : "es";
  if (currentLang === targetLang) return path;
  if (targetLang === "en") {
    if (path === "/") return "/en";
    if (path.startsWith("/sobre-mi")) return "/en/about";
    if (path.startsWith("/proyectos")) return "/en/projects";
    if (path.startsWith("/contacto")) return "/en/contact";
  }
  if (targetLang === "es") {
    if (path === "/en") return "/";
    if (path.startsWith("/en/about")) return "/sobre-mi";
    if (path.startsWith("/en/projects")) return "/proyectos";
    if (path.startsWith("/en/contact")) return "/contacto";
  }
  return path;
}

export function getCVPath(lang: Language): string {
  return lang === "en"
    ? "/cv/CV Daniel Miranda - English.pdf"
    : "/cv/CV Daniel Miranda - Español.pdf";
}
