"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Brain,
  Globe,
  Zap,
  Search,
  BookOpen,
  Mail,
  CalendarDays,
} from "lucide-react";
import { getActiveLanguage, setActiveLanguage, translations } from "@/lib/i18n";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [lang, setLang] = useState<"es" | "en">("es");

  useEffect(() => {
    setLang(getActiveLanguage());
    const handleLangChange = () => setLang(getActiveLanguage());
    window.addEventListener("languagechange", handleLangChange);
    return () => window.removeEventListener("languagechange", handleLangChange);
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === "es" ? "en" : "es";
    setActiveLanguage(nextLang);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Hide on admin routes
  if (pathname?.startsWith("/admin")) return null;

  const t = translations[lang].nav;
  const navItems = [
    {
      label: t.services,
      href: "/servicios",
      children: [
        {
          label: t.webDev,
          href: "/desarrollo-web",
          icon: Globe,
          description: lang === "es" ? "Webs corporativas, landing pages y ecommerce" : "Corporate websites, landing pages and ecommerce",
        },
        {
          label: t.aiSolutions,
          href: "/soluciones-ia",
          icon: Brain,
          description: lang === "es" ? "Chatbots, agentes y asistentes inteligentes" : "Chatbots, agents and virtual assistants",
        },
        {
          label: t.automation,
          href: "/automatizacion",
          icon: Zap,
          description: lang === "es" ? "Flujos automatizados con n8n" : "Automated workflows with n8n",
        },
        {
          label: t.auditor,
          href: "/auditor-web-ia",
          icon: Search,
          description: lang === "es" ? "Análisis inteligente de tu web" : "Intelligent analysis of your website",
        },
      ],
    },
    {
      label: t.resources,
      href: "/recursos",
      children: [
        {
          label: t.blog,
          href: "/blog",
          icon: BookOpen,
          description: lang === "es" ? "Artículos sobre IA, web y negocio" : "Articles on AI, web and business",
        },
        {
          label: lang === "es" ? "Recursos" : "Resources",
          href: "/recursos",
          icon: BookOpen,
          description: lang === "es" ? "Guías, herramientas y descargas" : "Guides, tools and downloads",
        },
      ],
    },
    { label: t.contact, href: "/contacto", icon: Mail },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between max-w-[1400px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="SolucionesIACM - Inicio"
        >
          <Image
            src="/logo.png"
            alt="SolucionesIACM"
            width={44}
            height={44}
            className="transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-gray-900 leading-none">
              soluciones<span className="gradient-text">IACM</span>
            </span>
            <span className="text-[10px] font-medium text-gray-400 tracking-widest uppercase leading-none mt-0.5 hidden sm:block">
              Soluciones Digitales
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Navegación principal">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.children && setActiveDropdown(item.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                  ${
                    activeDropdown === item.label
                      ? "text-blue-600 bg-blue-50/80"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
                  }`}
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Dropdown */}
              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-[340px] p-2 rounded-2xl bg-white shadow-xl border border-gray-100 animate-fade-in">
                  {item.children.map((child) => {
                    const Icon = child.icon;
                    return (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-gray-50 group/item"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center border border-blue-100/50 group-hover/item:border-blue-200 transition-colors">
                          <Icon
                            size={18}
                            className="text-blue-600"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors">
                            {child.label}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {child.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center gap-1.5 px-3 py-1.5 border border-gray-200 hover:border-gray-300 text-xs font-bold text-gray-700 bg-white hover:bg-gray-50 rounded-xl transition-all shadow-xs cursor-pointer"
            aria-label="Cambiar idioma / Change language"
          >
            <Globe size={13} className="text-slate-400" />
            <span className="uppercase">{lang}</span>
          </button>

          <Link
            href="/agenda-reunion"
            className="hidden sm:inline-flex btn btn-primary btn-sm"
            id="header-cta"
          >
            <CalendarDays size={16} />
            {lang === "es" ? "Agenda una reunión" : "Book a meeting"}
          </Link>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 top-0 z-[100]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />
          {/* Drawer */}
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[380px] bg-white shadow-2xl p-6 overflow-y-auto animate-slide-right">
            {/* Close & Logo */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileOpen(false)}>
                <Image src="/logo.png" alt="SolucionesIACM" width={36} height={36} />
                <span className="font-bold text-gray-900">
                  soluciones<span className="gradient-text">IACM</span>
                </span>
              </Link>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Nav Items */}
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-3 px-4 text-base font-medium text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                    onClick={() => !item.children && setIsMobileOpen(false)}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={16} />}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 mb-2 flex flex-col gap-0.5">
                      {item.children.map((child) => {
                        const Icon = child.icon;
                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center gap-3 py-2.5 px-4 text-sm text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            <Icon size={16} className="text-blue-500" />
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-1.5 w-full py-2.5 border border-gray-200 hover:border-gray-300 text-xs font-bold text-gray-700 bg-white hover:bg-gray-50 rounded-xl transition-all shadow-xs cursor-pointer"
                aria-label="Cambiar idioma / Change language"
              >
                <Globe size={13} className="text-slate-400" />
                <span>{lang === "es" ? "Cambiar idioma (EN)" : "Change language (ES)"}</span>
              </button>

              <Link
                href="/agenda-reunion"
                className="btn btn-primary w-full justify-center"
                onClick={() => setIsMobileOpen(false)}
              >
                <CalendarDays size={18} />
                {lang === "es" ? "Agenda una reunión" : "Book a meeting"}
              </Link>
              <p className="text-center text-xs text-gray-400 mt-4">
                {lang === "es" ? "Para hacer crecer tu negocio, ponte al dIA." : "To grow your business, get up to dAte."}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
