import { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  Sparkles,
  Clock,
  DollarSign,
  RefreshCw,
  Workflow,
  Mail,
  Database,
  FileSpreadsheet,
  MessageSquare,
  ShoppingCart,
  Bell,
  Shield,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Counter from "@/components/ui/Counter";

export const metadata: Metadata = {
  title: "Automatización",
  description:
    "Automatiza procesos de negocio con n8n y herramientas modernas. Elimina tareas repetitivas, conecta tus aplicaciones y ahorra horas cada semana.",
};

const automationExamples = [
  {
    icon: Mail,
    title: "Email Marketing Automático",
    description: "Envía emails personalizados basados en el comportamiento de tus clientes. Secuencias de bienvenida, seguimiento y reactivación.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileSpreadsheet,
    title: "Facturación y Contabilidad",
    description: "Genera facturas automáticamente, sincroniza con tu software contable y envía recordatorios de pago.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: MessageSquare,
    title: "Respuestas Automáticas",
    description: "Responde a consultas de clientes en WhatsApp, email y redes sociales de forma inteligente y personalizada.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: ShoppingCart,
    title: "Gestión de Pedidos",
    description: "Automatiza el flujo completo: recepción, confirmación, preparación, envío y seguimiento de pedidos.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Database,
    title: "Sincronización de Datos",
    description: "Mantén tus bases de datos, CRM, hojas de cálculo y herramientas siempre sincronizadas en tiempo real.",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Bell,
    title: "Alertas y Notificaciones",
    description: "Recibe notificaciones inteligentes por email, SMS o Telegram sobre eventos importantes de tu negocio.",
    color: "from-rose-500 to-red-500",
  },
];

const benefits = [
  { icon: Clock, value: 15, suffix: "h", label: "Horas ahorradas por semana de media" },
  { icon: DollarSign, value: 40, suffix: "%", label: "Reducción de costes operativos" },
  { icon: RefreshCw, value: 0, suffix: "", label: "Errores humanos en tareas automatizadas", displayValue: "0" },
  { icon: Shield, value: 99, suffix: "%", label: "Fiabilidad en la ejecución" },
];

export default function AutomatizacionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/40" />
        <div className="absolute top-20 left-[20%] w-[400px] h-[400px] bg-amber-400/8 rounded-full blur-[100px]" />

        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
          <AnimatedSection>
            <div className="badge mb-6">
              <Workflow size={14} />
              Automatización
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="mb-6">
              Automatiza y{" "}
              <span className="gradient-text">deja de perder tiempo</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed mb-8">
              Conecta tus herramientas, elimina tareas repetitivas y deja que la
              tecnología trabaje por ti. Con n8n y flujos inteligentes, tu negocio
              funciona en piloto automático.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <Link href="/agenda-reunion" className="btn btn-primary btn-lg">
              <CalendarDays size={20} />
              Descubre qué puedes automatizar
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="section section-alt" id="beneficios-auto">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <AnimatedSection key={b.label} delay={i * 100}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mx-auto mb-4 border border-amber-200/50">
                      <Icon size={24} className="text-amber-600" />
                    </div>
                    <div className="text-3xl font-extrabold gradient-text mb-1">
                      {b.displayValue !== undefined ? b.displayValue : <Counter end={b.value} suffix={b.suffix} />}
                    </div>
                    <p className="text-xs text-gray-500">{b.label}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Automation Examples */}
      <section className="section" id="ejemplos-auto">
        <div className="container mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="section-header">
              <h2>
                ¿Qué puedes{" "}
                <span className="gradient-text">automatizar?</span>
              </h2>
              <p>
                Estos son solo algunos ejemplos. Si puedes describirlo, podemos automatizarlo.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationExamples.map((example, i) => {
              const Icon = example.icon;
              return (
                <AnimatedSection key={example.title} delay={i * 100}>
                  <div className="card p-8 h-full group">
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${example.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">{example.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{example.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section-alt" id="como-funciona-auto">
        <div className="container mx-auto max-w-[900px] px-6">
          <AnimatedSection>
            <div className="section-header">
              <h2>¿Cómo <span className="gradient-text">funciona</span>?</h2>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-6">
            {[
              { step: "1", title: "Analizamos tus procesos", desc: "Identificamos qué tareas consumen más tiempo y cuáles son automatizables." },
              { step: "2", title: "Diseñamos los flujos", desc: "Creamos flujos de automatización visuales y fáciles de entender." },
              { step: "3", title: "Implementamos y testamos", desc: "Configuramos todo, hacemos pruebas exhaustivas y nos aseguramos de que funciona." },
              { step: "4", title: "Monitorizamos y optimizamos", desc: "Supervisamos los flujos y los optimizamos continuamente para máximo rendimiento." },
            ].map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 100}>
                <div className="flex gap-6 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0 shadow-md">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-500">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark">
        <div className="container mx-auto max-w-[800px] px-6 text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6">¿Cuántas horas pierdes en tareas repetitivas?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Te ayudamos a recuperarlas. Agenda una consulta y te mostramos qué puedes automatizar.
            </p>
            <Link href="/agenda-reunion" className="btn btn-lg bg-white text-gray-900 hover:bg-gray-100 font-bold shadow-xl hover:-translate-y-1 transition-all">
              <Sparkles size={20} />
              Consulta gratuita
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
