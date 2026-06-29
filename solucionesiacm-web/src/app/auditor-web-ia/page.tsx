"use client";

import { useState } from "react";
import {
  Search,
  Gauge,
  Shield,
  Eye,
  Smartphone,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  ArrowRight,
  Sparkles,
  Globe,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const auditCategories = [
  {
    icon: Gauge,
    title: "Rendimiento",
    description: "Velocidad de carga, Core Web Vitals y optimización.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Meta tags, estructura, indexación y posicionamiento.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Eye,
    title: "Accesibilidad",
    description: "WCAG 2.2, contraste, navegación y etiquetas ARIA.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "HTTPS, headers de seguridad, vulnerabilidades.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Responsive design, touch targets y viewport.",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Buenas Prácticas",
    description: "HTML semántico, imágenes, caché y código limpio.",
    color: "from-rose-500 to-red-500",
  },
];

export default function AuditorWebIAPage() {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setIsAnalyzing(true);
    setShowResults(false);

    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/40" />
        <div className="absolute top-20 right-[15%] w-[400px] h-[400px] bg-emerald-400/8 rounded-full blur-[100px]" />

        <div className="container mx-auto max-w-[900px] px-6 relative z-10 text-center">
          <AnimatedSection>
            <div className="badge mx-auto mb-6">
              <Search size={14} />
              Auditor Web IA
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="mb-6">
              Analiza tu web con{" "}
              <span className="gradient-text">Inteligencia Artificial</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
              Introduce la URL de tu web y obtén un análisis completo de
              rendimiento, SEO, accesibilidad y seguridad. Gratis y en segundos.
            </p>
          </AnimatedSection>

          {/* URL Input */}
          <AnimatedSection delay={300}>
            <form onSubmit={handleAnalyze} className="max-w-xl mx-auto">
              <div className="flex gap-3 bg-white rounded-2xl p-2 shadow-lg border border-gray-200 focus-within:border-blue-300 focus-within:shadow-xl transition-all">
                <div className="flex items-center gap-2 px-3 text-gray-400">
                  <Globe size={20} />
                </div>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://tu-web.com"
                  className="flex-1 py-3 text-base outline-none bg-transparent text-gray-900 placeholder:text-gray-400"
                  id="audit-url-input"
                  required
                />
                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="btn btn-primary px-6 disabled:opacity-50"
                  id="audit-analyze-button"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Analizando...
                    </>
                  ) : (
                    <>
                      <Search size={18} />
                      Analizar
                    </>
                  )}
                </button>
              </div>
            </form>
          </AnimatedSection>

          {/* Analysis Progress */}
          {isAnalyzing && (
            <div className="mt-12 max-w-md mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Loader2 size={20} className="animate-spin text-blue-600" />
                  <span className="text-sm font-semibold text-gray-900">Analizando {url}...</span>
                </div>
                <div className="space-y-2">
                  {["Comprobando rendimiento...", "Analizando SEO...", "Evaluando accesibilidad..."].map((step, i) => (
                    <div key={step} className="flex items-center gap-2 text-sm text-gray-500" style={{ animationDelay: `${i * 800}ms` }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Results Preview */}
          {showResults && (
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-left">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold">Resultados del análisis</h3>
                    <p className="text-sm text-gray-500 mt-1">{url}</p>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white">
                    <span className="text-2xl font-extrabold">72</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Rendimiento", score: 68, color: "text-amber-500" },
                    { label: "SEO", score: 82, color: "text-emerald-500" },
                    { label: "Accesibilidad", score: 74, color: "text-amber-500" },
                    { label: "Seguridad", score: 65, color: "text-amber-500" },
                  ].map((metric) => (
                    <div key={metric.label} className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs text-gray-500 mb-1">{metric.label}</p>
                      <p className={`text-2xl font-bold ${metric.color}`}>{metric.score}</p>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                        <div className={`h-1.5 rounded-full ${metric.score >= 80 ? "bg-emerald-500" : metric.score >= 50 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${metric.score}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
                    <AlertTriangle size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Imágenes sin optimizar</p>
                      <p className="text-xs text-gray-500">Las imágenes podrían reducirse un 60% sin perder calidad.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">HTTPS configurado correctamente</p>
                      <p className="text-xs text-gray-500">Tu web tiene un certificado SSL válido.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 text-center">
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    ¿Quieres un informe completo y un plan de mejora?
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    Nuestro equipo puede analizar tu web en profundidad y preparar un plan de acción personalizado.
                  </p>
                  <a href="/agenda-reunion" className="btn btn-primary btn-sm">
                    <Sparkles size={16} />
                    Solicitar informe completo
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What We Analyze */}
      <section className="section section-alt" id="que-analizamos">
        <div className="container mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="section-header">
              <h2>¿Qué <span className="gradient-text">analizamos</span>?</h2>
              <p>Un análisis integral de los aspectos más importantes de tu presencia online.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <AnimatedSection key={cat.title} delay={i * 100}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-base font-bold mb-2">{cat.title}</h3>
                    <p className="text-sm text-gray-500">{cat.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
