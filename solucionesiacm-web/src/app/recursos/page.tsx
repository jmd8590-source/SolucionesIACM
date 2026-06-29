import { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Download,
  FileText,
  Video,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Lightbulb,
  Wrench,
  GraduationCap,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Recursos",
  description: "Guías, herramientas y recursos gratuitos para digitalizar tu negocio. Aprende sobre desarrollo web, IA y automatización.",
};

const resources = [
  {
    icon: FileText,
    category: "Guía",
    title: "Guía completa de digitalización para pymes",
    description: "Todo lo que necesitas saber para dar el salto digital. Desde la web hasta la automatización.",
    tag: "Popular",
    tagColor: "bg-blue-100 text-blue-600",
  },
  {
    icon: Lightbulb,
    category: "Artículo",
    title: "10 formas en que la IA puede mejorar tu negocio",
    description: "Descubre aplicaciones prácticas de la inteligencia artificial para empresas pequeñas.",
    tag: "Nuevo",
    tagColor: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Wrench,
    category: "Herramienta",
    title: "Checklist: ¿Tu web está optimizada?",
    description: "Una lista de verificación de 50 puntos para asegurar que tu web funciona al máximo.",
    tag: "Gratis",
    tagColor: "bg-purple-100 text-purple-600",
  },
  {
    icon: Video,
    category: "Video",
    title: "Cómo automatizar tu email marketing",
    description: "Tutorial paso a paso para configurar secuencias de email automáticas con n8n.",
    tag: "Tutorial",
    tagColor: "bg-amber-100 text-amber-600",
  },
  {
    icon: GraduationCap,
    category: "Curso",
    title: "Introducción a los chatbots para negocios",
    description: "Aprende qué son los chatbots, cómo funcionan y cómo pueden ayudar a tu empresa.",
    tag: "Gratuito",
    tagColor: "bg-sky-100 text-sky-600",
  },
  {
    icon: Download,
    category: "Plantilla",
    title: "Plantilla de plan de marketing digital",
    description: "Descarga nuestra plantilla profesional para planificar tu estrategia de marketing online.",
    tag: "Descargable",
    tagColor: "bg-rose-100 text-rose-600",
  },
];

export default function RecursosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/60 via-white to-blue-50/40" />
        <div className="absolute top-20 left-[20%] w-[400px] h-[400px] bg-sky-400/8 rounded-full blur-[100px]" />

        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
          <AnimatedSection>
            <div className="badge mb-6">
              <BookOpen size={14} />
              Recursos
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="mb-6">
              Recursos <span className="gradient-text">gratuitos</span>{" "}
              para tu negocio
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              Guías, herramientas, plantillas y tutoriales para ayudarte a
              digitalizar tu empresa. Todo gratis y sin compromiso.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section" id="recursos-grid">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <AnimatedSection key={resource.title} delay={i * 100}>
                  <div className="card p-8 h-full group cursor-pointer">
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          {resource.category}
                        </span>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${resource.tagColor}`}>
                          {resource.tag}
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-4 border border-blue-100/50">
                        <Icon size={22} className="text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        {resource.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                        Acceder <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section section-dark">
        <div className="container mx-auto max-w-[700px] px-6 text-center">
          <AnimatedSection>
            <h2 className="text-white mb-4">
              Recibe recursos en tu email
            </h2>
            <p className="text-gray-300 mb-8">
              Suscríbete a nuestra newsletter y recibe guías, consejos y herramientas
              directamente en tu bandeja de entrada. Sin spam, solo contenido útil.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-blue-400 transition-colors"
                id="newsletter-email"
              />
              <button className="btn btn-lg bg-white text-gray-900 hover:bg-gray-100 font-bold">
                Suscribirme
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
