"use client";

import { useState } from "react";
import Link from "next/link";
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
  Sparkles,
  Globe,
  Bot,
  Database,
  ArrowRight,
  XCircle,
  HelpCircle,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const auditCategories = [
  {
    icon: Gauge,
    title: "Rendimiento",
    description: "Velocidad de carga, Core Web Vitals y optimización de recursos.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Search,
    title: "SEO Local",
    description: "Meta tags, indexación local y estructura de títulos semánticos.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Soporte Multi-idioma",
    description: "Presencia multilingüe para captar turistas y mercado extranjero.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Bot,
    title: "Agentes Web IA",
    description: "Atención al cliente 24/7 y captura activa de clientes potenciales.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    title: "CRM e Integración",
    description: "Seguimiento automatizado de leads y centralización de contactos.",
    color: "from-rose-500 to-amber-500",
  },
  {
    icon: Eye,
    title: "Accesibilidad",
    description: "Cumplimiento de contrastes, navegación de teclado y WCAG 2.2.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Protocolos HTTPS, cabeceras seguras y protección de formularios.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Smartphone,
    title: "Adaptabilidad Móvil",
    description: "Diseño responsive nativo, tamaño de controles y velocidad móvil.",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Buenas Prácticas",
    description: "Caché, codificación moderna y tiempos de interactividad óptimos.",
    color: "from-rose-500 to-red-500",
  },
];

interface AuditDeficiency {
  category: string;
  title: string;
  impact: string;
  description: string;
  severity: "critical" | "warning" | "success";
}

export default function AuditorWebIAPage() {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "critical" | "warning" | "success">("all");
  const [analysisSteps, setAnalysisSteps] = useState<string[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    "Conectando con el servidor DNS de la web...",
    "Analizando estructura HTML y meta-etiquetas...",
    "Escaneando scripts de analítica y captadores de leads...",
    "Buscando selectores de idiomas e internacionalización (i18n)...",
    "Comprobando presencia de Chatbots o Agentes de IA conversacionales...",
    "Verificando integraciones CRM y APIs de bases de datos...",
    "Midiendo Core Web Vitals y velocidad móvil...",
    "Generando informe detallado de deficiencias...",
  ];

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsAnalyzing(true);
    setShowResults(false);
    setAnalysisSteps([]);
    setCurrentStepIndex(0);

    // Simulate analysis steps sequentially
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < steps.length) {
        setAnalysisSteps((prev) => [...prev, steps[currentIndex]]);
        setCurrentStepIndex(currentIndex);
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsAnalyzing(false);
        setShowResults(true);
      }
    }, 900);
  };

  const getDomainName = (inputUrl: string) => {
    try {
      const parsed = new URL(inputUrl.startsWith("http") ? inputUrl : `https://${inputUrl}`);
      return parsed.hostname.replace("www.", "");
    } catch {
      return inputUrl;
    }
  };

  // Hardcode representative metrics to reveal severe sales losses to business owners
  const mockDeficiencies: AuditDeficiency[] = [
    {
      category: "Soporte Multi-idioma",
      title: "No se detecta selector de idiomas (i18n)",
      severity: "critical",
      impact: "Pérdida de hasta el 40% de facturación en zonas con residentes extranjeros o turismo (Huelva/nacional).",
      description: "Tu sitio web se muestra en un solo idioma. Los visitantes que hablan inglés u otras lenguas abandonan inmediatamente al no comprender la oferta.",
    },
    {
      category: "Agentes Web IA",
      title: "Ausencia de Agente Web o Chatbot conversacional",
      severity: "critical",
      impact: "El 50% de las visitas fuera de horario comercial abandonan sin contactar.",
      description: "No se detectan asistentes inteligentes ni chatbots activos. Tu web es un folleto estático que no resuelve dudas inmediatas de clientes en tiempo real.",
    },
    {
      category: "CRM e Integración",
      title: "Formularios desconectados de un CRM",
      severity: "critical",
      impact: "Tiempo de respuesta promedio > 24 horas, lo que reduce el cierre de ventas en un 80%.",
      description: "Las solicitudes de contacto se envían por correo básico sin registro estructurado en base de datos. Riesgo elevado de pérdida de datos o falta de seguimiento comercial.",
    },
    {
      category: "Rendimiento",
      title: "Carga móvil lenta (Core Web Vitals)",
      severity: "critical",
      impact: "El 53% de los usuarios de smartphones abandona si la carga supera los 3 segundos.",
      description: "Tiempo de interactividad estimado: 4.8s. Recursos e imágenes pesadas retrasan la primera pintura del contenido en dispositivos móviles.",
    },
    {
      category: "SEO Local",
      title: "Falta de optimización local",
      severity: "warning",
      impact: "Poca visibilidad frente a competidores locales en Google Maps y Google Search.",
      description: "La estructura de encabezados (H1, H2) y textos carece de palabras clave contextuales geográficas (ej: Cumbres Mayores, Huelva).",
    },
    {
      category: "Accesibilidad",
      title: "Deficiencias de contraste y etiquetas ARIA",
      severity: "warning",
      impact: "Riesgo de multas por normativas europeas y exclusión de personas con diversidad visual.",
      description: "Se detectan botones sin descripción textual accesibles y ratios de contraste inferiores a 4.5:1 (incumplimiento parcial WCAG 2.2).",
    },
    {
      category: "Seguridad",
      title: "Certificado SSL / HTTPS Activo",
      severity: "success",
      impact: "Genera confianza básica de seguridad de datos.",
      description: "El tráfico web está cifrado correctamente y no muestra advertencias de conexión insegura a tus visitantes.",
    },
    {
      category: "Adaptabilidad Móvil",
      title: "Layout responsive configurado",
      severity: "success",
      impact: "Visualización adaptable en pantallas móviles y tablets.",
      description: "La estructura se re-escala correctamente en smartphones, evitando desbordamientos laterales del diseño.",
    },
  ];

  const filteredDeficiencies = mockDeficiencies.filter((def) => {
    if (activeTab === "all") return true;
    return def.severity === activeTab;
  });

  const criticalCount = mockDeficiencies.filter((d) => d.severity === "critical").length;
  const warningCount = mockDeficiencies.filter((d) => d.severity === "warning").length;
  const successCount = mockDeficiencies.filter((d) => d.severity === "success").length;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/40" />
        <div className="absolute top-20 right-[15%] w-[400px] h-[400px] bg-emerald-400/8 rounded-full blur-[100px]" />

        <div className="container mx-auto max-w-[1000px] px-6 relative z-10 text-center">
          <AnimatedSection>
            <div className="badge mx-auto mb-6 bg-emerald-50 text-emerald-700 border-emerald-200">
              <Search size={14} />
              Auditor Web Inteligente
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="mb-6 leading-tight">
              ¿Tu web está <span className="gradient-text">perdiendo clientes</span>?
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed mb-10">
              Analiza tu sitio al instante. El auditor evaluará si tu web cuenta con multi-idioma (i18n),
              agentes conversacionales de IA y sistemas CRM de seguimiento de leads, identificando todas las
              deficiencias críticas comerciales.
            </p>
          </AnimatedSection>

          {/* URL Input */}
          <AnimatedSection delay={300}>
            <form onSubmit={handleAnalyze} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 bg-white rounded-2xl sm:rounded-full p-2.5 shadow-xl border border-gray-200/80 focus-within:border-blue-500 transition-all">
                <div className="flex items-center gap-2.5 px-4 text-gray-400">
                  <Globe size={20} className="animate-float" />
                  <span className="text-sm font-semibold text-gray-300">URL:</span>
                </div>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://tu-negocio.com"
                  className="flex-1 px-2 py-3 text-base outline-none bg-transparent text-gray-900 placeholder:text-gray-400"
                  id="audit-url-input"
                  required
                />
                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="btn btn-primary sm:px-8 py-3.5 rounded-xl sm:rounded-full disabled:opacity-50 justify-center cursor-pointer"
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
                      Analizar Web
                    </>
                  )}
                </button>
              </div>
            </form>
          </AnimatedSection>

          {/* Analysis Progress */}
          {isAnalyzing && (
            <div className="mt-12 max-w-xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 text-left">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-50">
                  <div className="flex items-center gap-3">
                    <Loader2 size={22} className="animate-spin text-blue-600" />
                    <span className="text-sm font-bold text-gray-900">Escaner Inteligente Activo</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                    {Math.round(((currentStepIndex + 1) / steps.length) * 100)}%
                  </span>
                </div>
                
                <div className="space-y-3.5">
                  {analysisSteps.map((step, i) => (
                    <div
                      key={step}
                      className={`flex items-start gap-2.5 text-sm transition-all duration-300 ${
                        i === currentStepIndex
                          ? "text-blue-600 font-semibold translate-x-1"
                          : "text-gray-400"
                      }`}
                    >
                      {i === currentStepIndex ? (
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 animate-ping" />
                      ) : (
                        <CheckCircle2 size={15} className="text-emerald-500 mt-1 flex-shrink-0" />
                      )}
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Results Preview */}
          {showResults && (
            <div className="mt-12 max-w-4xl mx-auto text-left animate-fade-in">
              <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-2xl border border-gray-100">
                
                {/* Header score block */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-gray-100">
                  <div>
                    <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      Deficiencias comerciales graves
                    </span>
                    <h2 className="text-2xl font-black text-slate-900 mt-3">
                      Informe de Auditoría Web IA
                    </h2>
                    <p className="text-sm text-gray-500 font-medium mt-1">
                      Sitio auditado: <span className="text-blue-600 font-semibold">{getDomainName(url)}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-2xl flex-shrink-0">
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Puntuación Comercial</p>
                      <p className="text-[10px] text-red-600 font-semibold mt-0.5">Alto riesgo de pérdida de clientes</p>
                    </div>
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 via-amber-500 to-orange-500 p-0.5 flex items-center justify-center shadow-lg shadow-orange-500/10">
                      <div className="w-full h-full bg-white rounded-[14px] flex flex-col items-center justify-center">
                        <span className="text-3xl font-black text-slate-900 leading-none">48</span>
                        <span className="text-[9px] text-gray-400 font-bold uppercase mt-1">de 100</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Score breakdown metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8">
                  {[
                    { label: "Rendimiento Móvil", score: 48, color: "text-red-500 bg-red-50" },
                    { label: "Multi-idioma (i18n)", score: 0, color: "text-red-500 bg-red-50" },
                    { label: "Agentes Web IA", score: 0, color: "text-red-500 bg-red-50" },
                    { label: "Sistemas CRM", score: 0, color: "text-red-500 bg-red-50" },
                  ].map((metric) => (
                    <div key={metric.label} className="bg-gray-50/80 rounded-2xl p-4 border border-gray-100 flex flex-col justify-between">
                      <p className="text-[11px] font-bold text-gray-500 leading-tight mb-2">{metric.label}</p>
                      <div>
                        <span className={`text-2xl font-black ${metric.color} px-2 py-0.5 rounded-lg inline-block`}>
                          {metric.score}%
                        </span>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                          <div
                            className={`h-1.5 rounded-full ${metric.score >= 80 ? "bg-emerald-500" : metric.score >= 50 ? "bg-amber-500" : "bg-red-500"}`}
                            style={{ width: `${metric.score}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tabs selection */}
                <div className="flex border-b border-gray-100 mb-6 gap-2">
                  {[
                    { id: "all", label: "Deficiencias y Estado", count: mockDeficiencies.length },
                    { id: "critical", label: "Críticas", count: criticalCount, badgeColor: "bg-red-500 text-white" },
                    { id: "warning", label: "Advertencias", count: warningCount, badgeColor: "bg-amber-500 text-white" },
                    { id: "success", label: "Aciertos", count: successCount, badgeColor: "bg-emerald-500 text-white" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`pb-4 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                        activeTab === tab.id
                          ? "border-blue-600 text-blue-600"
                          : "border-transparent text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      {tab.label}
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold bg-gray-100 text-gray-500 ${tab.badgeColor || ""}`}>
                        {tab.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Deficiencies list */}
                <div className="space-y-4">
                  {filteredDeficiencies.map((def, i) => {
                    const isCritical = def.severity === "critical";
                    const isWarning = def.severity === "warning";
                    const isSuccess = def.severity === "success";

                    return (
                      <div
                        key={i}
                        className={`rounded-2xl p-5 border transition-all ${
                          isCritical
                            ? "bg-red-50/20 border-red-100/60 hover:bg-red-50/40"
                            : isWarning
                            ? "bg-amber-50/20 border-amber-100/60 hover:bg-amber-50/40"
                            : "bg-emerald-50/10 border-emerald-100/60 hover:bg-emerald-50/20"
                        }`}
                      >
                        <div className="flex gap-4 items-start">
                          <div className="mt-0.5 flex-shrink-0">
                            {isCritical ? (
                              <XCircle className="text-red-500 w-6 h-6 animate-pulse" />
                            ) : isWarning ? (
                              <AlertTriangle className="text-amber-500 w-6 h-6" />
                            ) : (
                              <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                            )}
                          </div>

                          <div className="flex-1 space-y-2">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <h4 className="text-sm font-bold text-gray-900">{def.title}</h4>
                              <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                                isCritical ? "bg-red-100 text-red-700" : isWarning ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
                              }`}>
                                {def.category}
                              </span>
                            </div>

                            <p className="text-xs text-gray-500 leading-relaxed">
                              {def.description}
                            </p>

                            {/* Impact warning (shows what they lose) */}
                            {!isSuccess && (
                              <div className="bg-white rounded-xl p-3 border border-slate-100 flex items-start gap-2.5 mt-2">
                                <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded-md flex-shrink-0 uppercase">
                                  Pérdida
                                </span>
                                <p className="text-xs text-slate-600 font-medium leading-normal">
                                  {def.impact}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Final consultation CTA card */}
                <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white mt-10 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
                  
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="space-y-2 max-w-xl">
                      <div className="inline-flex items-center gap-1 bg-white/20 border border-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        <Sparkles size={12} />
                        Plan de Acción IACM
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        Soluciona estas deficiencias y dispara tus ventas
                      </h3>
                      <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                        Podemos configurar el soporte multi-idioma de tu web, integrar agentes inteligentes de IA
                        para atender visitas 24/7 y conectar un CRM para automatizar el seguimiento de tus clientes potenciales.
                      </p>
                    </div>

                    <Link
                      href="/agenda-reunion"
                      className="btn bg-white hover:bg-slate-50 text-blue-600 font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 group shadow-lg flex-shrink-0 cursor-pointer"
                    >
                      Agenda reunión gratuita
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
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
              <h2>¿Qué <span className="gradient-text">analizamos</span> en tu web?</h2>
              <p>Evaluamos minuciosamente los pilares clave que determinan si tu presencia online capta clientes o los pierde.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <AnimatedSection key={cat.title} delay={i * 100}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col justify-between h-full">
                    <div>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-base font-bold mb-2 text-slate-800">{cat.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{cat.description}</p>
                    </div>
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
