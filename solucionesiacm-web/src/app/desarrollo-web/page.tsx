import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Palette,
  ShoppingCart,
  Smartphone,
  Search,
  Gauge,
  Code2,
  Layers,
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Desarrollo Web",
  description:
    "Diseño y desarrollo web profesional. Páginas corporativas, landing pages, ecommerce y aplicaciones web. Rendimiento, SEO y diseño premium.",
};

const webServices = [
  {
    icon: Globe,
    title: "Web Corporativa",
    description: "Tu carta de presentación digital. Diseño profesional que transmite confianza y convierte visitantes en clientes.",
    features: ["Diseño a medida", "SEO integrado", "Responsive", "Formularios de contacto", "Panel de gestión", "Analytics"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Landing Pages",
    description: "Páginas de aterrizaje optimizadas para convertir. Diseño persuasivo que maximiza el ROI de tus campañas.",
    features: ["Alta conversión", "Diseño persuasivo", "A/B Testing", "Lead capture", "Fast loading", "Tracking"],
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: ShoppingCart,
    title: "Tienda Online",
    description: "E-commerce completo con gestión de productos, pagos seguros y logística integrada. Vende online sin complicaciones.",
    features: ["Catálogo productos", "Pagos seguros", "Gestión pedidos", "Stock automático", "Multi-idioma", "Facturación"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Smartphone,
    title: "Web App / PWA",
    description: "Aplicaciones web progresivas que funcionan como apps nativas. Rápidas, instalables y funcionales offline.",
    features: ["Instalable", "Offline ready", "Push notifications", "Actualizaciones auto", "Multiplataforma", "Rendimiento nativo"],
    color: "from-orange-500 to-red-500",
  },
];

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Lenguaje" },
  { name: "Tailwind CSS", category: "Estilos" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Base de datos" },
  { name: "Supabase", category: "Backend as Service" },
  { name: "Vercel", category: "Despliegue" },
  { name: "Cloudflare", category: "CDN/Security" },
  { name: "Docker", category: "Contenedores" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "E-commerce" },
];

const processSteps = [
  { step: "01", title: "Briefing", description: "Entendemos tu negocio, objetivos y público objetivo." },
  { step: "02", title: "Diseño UX/UI", description: "Creamos wireframes y diseños visuales para tu aprobación." },
  { step: "03", title: "Desarrollo", description: "Construimos tu web con las mejores tecnologías del mercado." },
  { step: "04", title: "Testing & QA", description: "Probamos en todos los dispositivos y navegadores." },
  { step: "05", title: "Lanzamiento", description: "Desplegamos, configuramos SEO y activamos analytics." },
  { step: "06", title: "Soporte", description: "Mantenimiento, actualizaciones y soporte continuo." },
];

export default function DesarrolloWebPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/40" />
        <div className="absolute top-20 right-[20%] w-[400px] h-[400px] bg-cyan-400/8 rounded-full blur-[100px]" />

        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
          <AnimatedSection>
            <div className="badge mb-6">
              <Code2 size={14} />
              Desarrollo Web
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="mb-6">
              Webs que{" "}
              <span className="gradient-text">generan resultados</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed mb-8">
              Diseño y desarrollo web de alto rendimiento. Desde páginas
              corporativas hasta tiendas online, creamos experiencias digitales
              que convierten visitantes en clientes.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <Link href="/agenda-reunion" className="btn btn-primary btn-lg">
              <CalendarDays size={20} />
              Solicitar presupuesto
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Web Services */}
      <section className="section" id="tipos-web">
        <div className="container mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="section-header">
              <h2>
                Tipos de{" "}
                <span className="gradient-text">proyecto web</span>
              </h2>
              <p>
                Cada proyecto es único. Elegimos la tecnología y el enfoque que
                mejor se adapta a tus necesidades y presupuesto.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 100}>
                  <div className="card p-8 h-full">
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((f) => (
                          <span key={f} className="flex items-center gap-1.5 text-xs text-gray-500">
                            <CheckCircle2 size={12} className="text-emerald-500" />
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section-alt" id="proceso-web">
        <div className="container mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="section-header">
              <h2>Nuestro <span className="gradient-text">proceso</span></h2>
              <p>Metodología clara y transparente de principio a fin.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{step.step}</span>
                  <h3 className="text-lg font-bold mt-4 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section" id="tecnologias">
        <div className="container mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="section-header">
              <h2>Tecnologías que <span className="gradient-text">utilizamos</span></h2>
              <p>Trabajamos con las herramientas más modernas y fiables del mercado.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <div key={tech.name} className="px-5 py-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-default">
                  <p className="text-sm font-semibold text-gray-900">{tech.name}</p>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark">
        <div className="container mx-auto max-w-[800px] px-6 text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6">¿Tienes un proyecto en mente?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Cuéntanos tu idea y te preparamos un presupuesto sin compromiso en 24 horas.
            </p>
            <Link href="/agenda-reunion" className="btn btn-lg bg-white text-gray-900 hover:bg-gray-100 font-bold shadow-xl hover:-translate-y-1 transition-all">
              <Sparkles size={20} />
              Solicitar presupuesto gratuito
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
