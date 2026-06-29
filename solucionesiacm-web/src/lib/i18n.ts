// Dictionary for ES and EN translations of core UI elements

export const translations = {
  es: {
    nav: {
      services: "Servicios",
      webDev: "Desarrollo Web",
      aiSolutions: "Soluciones IA",
      automation: "Automatización",
      auditor: "Auditor Web IA",
      resources: "Recursos",
      blog: "Blog",
      contact: "Contacto",
      booking: "Agenda una reunión"
    },
    hero: {
      badge: "Soluciones digitales para pymes",
      titlePre: "Para hacer crecer tu negocio, ponte",
      titlePost: "al dIA.",
      subtitle: "Digitalizamos tu empresa con desarrollo web profesional, inteligencia artificial y automatización. Desde Cumbres Mayores para toda España.",
      ctaPrimary: "Agenda tu consulta gratuita",
      ctaSecondary: "Ver servicios"
    },
    footer: {
      tagline: "Para hacer crecer tu negocio, ponte al dIA.",
      madeWith: "Hecho con ❤️ en Cumbres Mayores, Huelva."
    }
  },
  en: {
    nav: {
      services: "Services",
      webDev: "Web Development",
      aiSolutions: "AI Solutions",
      automation: "Automation",
      auditor: "AI Web Auditor",
      resources: "Resources",
      blog: "Blog",
      contact: "Contact",
      booking: "Book a meeting"
    },
    hero: {
      badge: "Digital solutions for small businesses",
      titlePre: "To grow your business, get up",
      titlePost: "to dAte.",
      subtitle: "We digitalize your company with professional web development, artificial intelligence, and automation. From Cumbres Mayores to all of Spain.",
      ctaPrimary: "Book your free consultation",
      ctaSecondary: "View services"
    },
    footer: {
      tagline: "To grow your business, get up to dAte.",
      madeWith: "Made with ❤️ in Cumbres Mayores, Huelva."
    }
  }
};
export type Language = "es" | "en";
export const getActiveLanguage = (): Language => {
  if (typeof window !== "undefined") {
    const lang = localStorage.getItem("iacm_language");
    if (lang === "en" || lang === "es") return lang;
  }
  return "es";
};
export const setActiveLanguage = (lang: Language) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("iacm_language", lang);
    // Dispatch a custom event to notify Header/components
    window.dispatchEvent(new Event("languagechange"));
  }
};
