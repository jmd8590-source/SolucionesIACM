import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Brain,
  Zap,
  Search,
  Database,
  Mail,
  MessageSquare,
  Bot,
  ShoppingCart,
  Wrench,
  Palette,
  FileText,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  CalendarDays,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo web, inteligencia artificial, automatización, chatbots, ecommerce y más. Servicios digitales profesionales para pymes y autónomos.",
};

const allServices = [
  {
    icon: Globe,
    title: "Páginas Web Corporativas",
    description:
      "Diseño y desarrollo de páginas web profesionales que transmiten confianza y generan clientes. Optimizadas para SEO y rendimiento.",
    features: ["Diseño responsive", "SEO optimizado", "Carga ultrarrápida", "Panel de gestión"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Landing Pages",
    description:
      "Páginas de aterrizaje de alta conversión diseñadas para captar leads y maximizar tus campañas de marketing digital.",
    features: ["Alta conversión", "A/B Testing", "Analytics integrado", "Formularios inteligentes"],
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Tiendas online completas con pasarela de pagos, gestión de inventario y experiencia de compra optimizada.",
    features: ["Pasarela de pagos", "Gestión de stock", "Envíos automatizados", "Panel admin"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Web",
    description:
      "Mantenimiento técnico, actualizaciones de seguridad, backups y soporte continuo para tu web.",
    features: ["Actualizaciones", "Backups diarios", "Monitorización 24/7", "Soporte prioritario"],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: MessageSquare,
    title: "Chatbots",
    description:
      "Chatbots inteligentes que atienden a tus clientes 24/7, responden preguntas y captan leads automáticamente.",
    features: ["Atención 24/7", "Multiidioma", "Integración CRM", "Personalizable"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Brain,
    title: "Agentes IA",
    description:
      "Agentes de inteligencia artificial avanzados que ejecutan tareas complejas y toman decisiones por tu negocio.",
    features: ["Toma de decisiones", "Aprendizaje continuo", "Integración APIs", "Análisis datos"],
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Bot,
    title: "Asistentes IA",
    description:
      "Asistentes virtuales personalizados con el conocimiento de tu empresa para mejorar la productividad.",
    features: ["Base conocimiento", "Contexto empresa", "Multicanal", "Histórico"],
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Automatización con n8n",
    description:
      "Automatiza procesos repetitivos conectando tus herramientas favoritas. Ahorra horas cada semana.",
    features: ["Flujos visuales", "+400 integraciones", "Sin código", "Escalable"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Database,
    title: "Bases de Datos",
    description:
      "Diseño y migración de bases de datos Access y MySQL. Consultas optimizadas y dashboards personalizados.",
    features: ["Migración Access", "MySQL/PostgreSQL", "Dashboards", "Consultas optimizadas"],
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Mail,
    title: "Correo Corporativo",
    description:
      "Email profesional con tu dominio, configuración DNS, antispam y soporte técnico incluido.",
    features: ["Tu dominio", "Antispam", "Webmail", "Soporte"],
    color: "from-red-500 to-pink-500",
  },
  {
    icon: FileText,
    title: "Consultoría Digital",
    description:
      "Asesoramiento estratégico para la transformación digital de tu negocio. Plan personalizado y acompañamiento.",
    features: ["Auditoría digital", "Plan estratégico", "Formación", "Seguimiento"],
    color: "from-indigo-500 to-violet-500",
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/40" />
        <div className="absolute top-20 right-[20%] w-[400px] h-[400px] bg-blue-400/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-purple-400/8 rounded-full blur-[80px]" />

        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
          <AnimatedSection>
            <div className="badge mb-6">
              <Sparkles size={14} />
              Nuestros servicios
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="mb-6">
              Servicios digitales para{" "}
              <span className="gradient-text">hacer crecer tu negocio</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              Soluciones integrales de desarrollo web, inteligencia artificial y
              automatización. Todo lo que necesitas para competir en el mundo
              digital.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" id="servicios-grid">
        <div className="container mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 80}>
                  <div className="card p-8 h-full group">
                    <div className="relative z-10">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full"
                          >
                            <CheckCircle2
                              size={12}
                              className="text-emerald-500"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark" id="servicios-cta">
        <div className="container mx-auto max-w-[800px] px-6 text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6">
              ¿No sabes qué servicio necesitas?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Agenda una consulta gratuita y te asesoramos sin compromiso.
              Analizaremos tu caso y te recomendaremos la mejor solución.
            </p>
            <Link
              href="/agenda-reunion"
              className="btn btn-lg bg-white text-gray-900 hover:bg-gray-100 font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              id="servicios-cta-button"
            >
              <CalendarDays size={20} />
              Consulta gratuita
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
