import { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  MessageSquare,
  Bot,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  Cpu,
  Network,
  Shield,
  Zap,
  TrendingUp,
  Clock,
  Users,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Soluciones IA",
  description:
    "Chatbots inteligentes, agentes IA y asistentes virtuales para tu empresa. Automatiza la atención al cliente y mejora la productividad con inteligencia artificial.",
};

const solutions = [
  {
    icon: MessageSquare,
    title: "Chatbots Inteligentes",
    description:
      "Chatbots con IA que entienden el lenguaje natural y atienden a tus clientes como si fueran humanos. Integrados en tu web, WhatsApp o redes sociales.",
    benefits: [
      "Atención al cliente 24/7 sin descanso",
      "Respuestas en segundos, no minutos",
      "Captación automática de leads",
      "Integración con tu CRM",
      "Multiidioma (español, inglés, más)",
      "Personalizado con el conocimiento de tu empresa",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Brain,
    title: "Agentes IA Avanzados",
    description:
      "Agentes autónomos que ejecutan tareas complejas: analizan datos, toman decisiones, gestionan procesos y aprenden de cada interacción.",
    benefits: [
      "Análisis de datos en tiempo real",
      "Toma de decisiones automatizada",
      "Integración con APIs y herramientas",
      "Aprendizaje continuo del negocio",
      "Alertas y notificaciones inteligentes",
      "Informes automáticos personalizados",
    ],
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Bot,
    title: "Asistentes Virtuales",
    description:
      "Asistentes IA personalizados con todo el conocimiento de tu empresa. Ayudan a tu equipo a ser más productivo y a tus clientes a encontrar lo que necesitan.",
    benefits: [
      "Base de conocimiento personalizada",
      "Soporte interno para empleados",
      "Búsqueda semántica de documentos",
      "Generación de contenido",
      "Resumen de reuniones y emails",
      "Integración con herramientas internas",
    ],
    color: "from-sky-500 to-blue-500",
  },
];

const useCases = [
  {
    icon: Users,
    title: "Atención al cliente",
    description: "Responde consultas automáticamente y escala solo cuando es necesario.",
  },
  {
    icon: TrendingUp,
    title: "Ventas",
    description: "Califica leads, recomienda productos y agenda reuniones comerciales.",
  },
  {
    icon: Clock,
    title: "Productividad",
    description: "Automatiza tareas repetitivas y libera tiempo para lo que importa.",
  },
  {
    icon: Shield,
    title: "Análisis de datos",
    description: "Extrae insights de tus datos y genera informes automáticamente.",
  },
];

export default function SolucionesIAPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-white to-blue-50/40" />
        <div className="absolute top-20 left-[15%] w-[400px] h-[400px] bg-purple-400/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-[10%] w-[350px] h-[350px] bg-blue-400/8 rounded-full blur-[80px]" />

        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
          <AnimatedSection>
            <div className="badge mb-6">
              <Cpu size={14} />
              Inteligencia Artificial
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="mb-6">
              Impulsa tu negocio con{" "}
              <span className="gradient-text">Inteligencia Artificial</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed mb-8">
              Chatbots, agentes y asistentes IA que trabajan para ti 24/7.
              Automatiza la atención al cliente, mejora ventas y multiplica la
              productividad de tu equipo.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link href="/agenda-reunion" className="btn btn-primary btn-lg">
                <CalendarDays size={20} />
                Ver demo gratuita
              </Link>
              <Link href="/contacto" className="btn btn-secondary btn-lg">
                Más información
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Solutions Detail */}
      <section className="section" id="soluciones-detalle">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col gap-20">
            {solutions.map((solution, i) => {
              const Icon = solution.icon;
              const isReversed = i % 2 !== 0;
              return (
                <AnimatedSection key={solution.title}>
                  <div
                    className={`flex flex-col ${
                      isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                    } gap-12 items-center`}
                  >
                    {/* Content */}
                    <div className="flex-1">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <Icon size={28} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">
                        {solution.title}
                      </h2>
                      <p className="text-gray-500 text-lg leading-relaxed mb-8">
                        {solution.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {solution.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-emerald-500 mt-0.5 flex-shrink-0"
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual */}
                    <div className="flex-1 w-full">
                      <div className="relative rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/60 p-8 min-h-[350px] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02]" style={{
                          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }} />
                        <div className="text-center relative z-10">
                          <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${solution.color} flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                            <Icon size={44} className="text-white" />
                          </div>
                          <p className="text-sm font-semibold text-gray-900">{solution.title}</p>
                          <p className="text-xs text-gray-500 mt-1">Powered by AI</p>
                          {/* Animated dots */}
                          <div className="flex justify-center gap-1.5 mt-4">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse delay-200" style={{ animationDelay: "200ms" }} />
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse delay-400" style={{ animationDelay: "400ms" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section section-alt" id="casos-uso-ia">
        <div className="container mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="section-header">
              <h2>
                Casos de uso de{" "}
                <span className="gradient-text">IA en tu negocio</span>
              </h2>
              <p>
                La inteligencia artificial no es solo para grandes empresas.
                Descubre cómo puede transformar tu día a día.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <AnimatedSection key={uc.title} delay={i * 100}>
                  <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mx-auto mb-4 border border-blue-100/50">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <h3 className="text-base font-bold mb-2 text-gray-900">{uc.title}</h3>
                    <p className="text-sm text-gray-500">{uc.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark">
        <div className="container mx-auto max-w-[800px] px-6 text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6">
              ¿Quieres ver la IA en acción?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Te hacemos una demostración gratuita y personalizada para tu negocio.
            </p>
            <Link
              href="/agenda-reunion"
              className="btn btn-lg bg-white text-gray-900 hover:bg-gray-100 font-bold shadow-xl hover:-translate-y-1 transition-all"
            >
              <Sparkles size={20} />
              Solicitar demo gratuita
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
