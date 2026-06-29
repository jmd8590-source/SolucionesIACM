"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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

const navItems = [
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      {
        label: "Desarrollo Web",
        href: "/desarrollo-web",
        icon: Globe,
        description: "Webs corporativas, landing pages y ecommerce",
      },
      {
        label: "Soluciones IA",
        href: "/soluciones-ia",
        icon: Brain,
        description: "Chatbots, agentes y asistentes inteligentes",
      },
      {
        label: "Automatización",
        href: "/automatizacion",
        icon: Zap,
        description: "Flujos automatizados con n8n",
      },
      {
        label: "Auditor Web IA",
        href: "/auditor-web-ia",
        icon: Search,
        description: "Análisis inteligente de tu web",
      },
    ],
  },
  {
    label: "Recursos",
    href: "/recursos",
    children: [
      {
        label: "Blog",
        href: "/blog",
        icon: BookOpen,
        description: "Artículos sobre IA, web y negocio",
      },
      {
        label: "Recursos",
        href: "/recursos",
        icon: BookOpen,
        description: "Guías, herramientas y descargas",
      },
    ],
  },
  { label: "Contacto", href: "/contacto", icon: Mail },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
          <Link
            href="/agenda-reunion"
            className="hidden sm:inline-flex btn btn-primary btn-sm"
            id="header-cta"
          >
            <CalendarDays size={16} />
            Agenda una reunión
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
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Link
                href="/agenda-reunion"
                className="btn btn-primary w-full justify-center"
                onClick={() => setIsMobileOpen(false)}
              >
                <CalendarDays size={18} />
                Agenda una reunión
              </Link>
              <p className="text-center text-xs text-gray-400 mt-4">
                Para hacer crecer tu negocio, ponte al dIA.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
