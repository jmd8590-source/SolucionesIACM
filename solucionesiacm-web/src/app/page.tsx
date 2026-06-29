import Link from "next/link";
import {
  Globe,
  Brain,
  Zap,
  Search,
  Database,
  MessageSquare,
  Bot,
  Mail,
  Palette,
  ShoppingCart,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Shield,
  TrendingUp,
  Users,
  Clock,
  CalendarDays,
  Star,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Counter from "@/components/ui/Counter";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Webs corporativas, landing pages y tiendas online con diseño premium y rendimiento optimizado.",
    href: "/desarrollo-web",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "Soluciones IA",
    description: "Chatbots, agentes y asistentes inteligentes que trabajan 24/7 para tu negocio.",
    href: "/soluciones-ia",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Elimina tareas repetitivas con flujos automatizados que ahorran horas cada semana.",
    href: "/automatizacion",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Search,
    title: "Auditor Web IA",
    description: "Analiza tu web con inteligencia artificial y descubre cómo mejorar tu presencia online.",
    href: "/auditor-web-ia",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Database,
    title: "Bases de Datos",
    description: "Gestión profesional de datos con Access, MySQL y soluciones cloud escalables.",
    href: "/servicios",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Mail,
    title: "Correo Corporativo",
    description: "Email profesional con tu dominio, configurado y listo para usar.",
    href: "/servicios",
    color: "from-rose-500 to-red-500",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Proyectos entregados" },
  { value: 98, suffix: "%", label: "Clientes satisfechos" },
  { value: 24, suffix: "/7", label: "Soporte disponible" },
  { value: 5, suffix: "★", label: "Valoración media" },
];

const process = [
  {
    step: "01",
    title: "Consulta gratuita",
    description: "Analizamos tus necesidades y te proponemos la mejor solución digital para tu negocio.",
  },
  {
    step: "02",
    title: "Estrategia a medida",
    description: "Diseñamos un plan personalizado con tecnologías modernas adaptadas a tus objetivos.",
  },
  {
    step: "03",
    title: "Desarrollo ágil",
    description: "Construimos tu solución con metodología ágil, manteniéndote informado en cada paso.",
  },
  {
    step: "04",
    title: "Lanzamiento y soporte",
    description: "Desplegamos, optimizamos y te acompañamos con soporte continuo para crecer.",
  },
];

const testimonials = [
  {
    name: "María García",
    role: "Propietaria, Panadería La Espiga",
    content: "Desde que tenemos la web y el chatbot, recibimos pedidos online que antes perdíamos. Ha sido un cambio total para nuestro negocio.",
    rating: 5,
  },
  {
    name: "Antonio López",
    role: "Director, Ferretería López e Hijos",
    content: "La automatización nos ha ahorrado más de 10 horas semanales en gestión de inventario. Increíble la diferencia que hace la tecnología.",
    rating: 5,
  },
  {
    name: "Carmen Ruiz",
    role: "Fundadora, Estudio Carmen",
    content: "Mi web refleja exactamente la imagen que quería transmitir. Profesional, moderna y mis clientes la encuentran fácilmente en Google.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden" id="hero">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/60" />
          <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-400/5 rounded-full blur-[150px]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto max-w-[1400px] px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <AnimatedSection delay={0}>
              <div className="badge mb-6">
                <Sparkles size={14} />
                Soluciones digitales para pymes
              </div>
            </AnimatedSection>

            {/* Headline */}
            <AnimatedSection delay={100}>
              <h1 className="mb-6">
                Para hacer crecer{" "}
                <br className="hidden sm:block" />
                tu negocio, ponte{" "}
                <span className="gradient-text-hero">al dIA</span>
                <span className="text-blue-500">.</span>
              </h1>
            </AnimatedSection>

            {/* Subheadline */}
            <AnimatedSection delay={200}>
              <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl leading-relaxed">
                Digitalizamos tu empresa con{" "}
                <strong className="text-gray-700">desarrollo web profesional</strong>,{" "}
                <strong className="text-gray-700">inteligencia artificial</strong> y{" "}
                <strong className="text-gray-700">automatización</strong>. Desde Cumbres
                Mayores para toda España.
              </p>
            </AnimatedSection>

            {/* CTAs */}
            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-4">
                <Link href="/agenda-reunion" className="btn btn-primary btn-lg" id="hero-cta-primary">
                  <CalendarDays size={20} />
                  Agenda tu consulta gratuita
                </Link>
                <Link href="/servicios" className="btn btn-secondary btn-lg" id="hero-cta-secondary">
                  Ver servicios
                  <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedSection>

            {/* Trust Indicators */}
            <AnimatedSection delay={500}>
              <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-gray-200/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  <span className="text-sm text-gray-500">Sin compromiso</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={18} className="text-blue-500" />
                  <span className="text-sm text-gray-500">100% personalizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-purple-500" />
                  <span className="text-sm text-gray-500">Respuesta en 24h</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-400 tracking-wider">SCROLL</span>
          <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section section-alt" id="servicios-home">
        <div className="container mx-auto max-w-[1400px] px-6">
          <AnimatedSection>
            <div className="section-header">
              <div className="badge mx-auto mb-4">
                <Palette size={14} />
                Nuestros servicios
              </div>
              <h2>
                Todo lo que necesitas para{" "}
                <span className="gradient-text">digitalizar tu negocio</span>
              </h2>
              <p>
                Soluciones integrales adaptadas a las necesidades reales de
                pymes y autónomos. Tecnología de vanguardia al alcance de
                todos.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid-services">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 100}>
                  <Link href={service.href} className="block">
                    <div className="card p-8 h-full group cursor-pointer">
                      <div className="relative z-10">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon size={24} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                          Saber más <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section" id="stats">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-extrabold gradient-text mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section className="section section-alt" id="proceso">
        <div className="container mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="section-header">
              <div className="badge mx-auto mb-4">
                <TrendingUp size={14} />
                Nuestro proceso
              </div>
              <h2>
                De la idea al{" "}
                <span className="gradient-text">resultado</span>
              </h2>
              <p>
                Un proceso claro y transparente para transformar tu negocio con
                tecnología. Sin sorpresas, sin complicaciones.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 150}>
                <div className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <span className="text-5xl font-black text-gray-100 absolute top-4 right-6">
                    {step.step}
                  </span>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 text-white text-sm font-bold shadow-md">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {/* Connector line for desktop */}
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-blue-300 to-purple-300" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" id="testimonios">
        <div className="container mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="section-header">
              <div className="badge mx-auto mb-4">
                <Users size={14} />
                Testimonios
              </div>
              <h2>
                Lo que dicen{" "}
                <span className="gradient-text">nuestros clientes</span>
              </h2>
              <p>
                La satisfacción de nuestros clientes es nuestra mejor carta de
                presentación.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.name} delay={i * 100}>
                <div className="card p-8 h-full">
                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, j) => (
                          <Star
                            key={j}
                            size={16}
                            className="text-amber-400 fill-amber-400"
                          />
                        )
                      )}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section section-dark" id="cta-final">
        <div className="container mx-auto max-w-[900px] px-6 text-center">
          <AnimatedSection>
            <div className="badge mx-auto mb-6 bg-white/10 text-white border-white/20">
              <Sparkles size={14} />
              ¿Listo para dar el salto?
            </div>
            <h2 className="text-white mb-6">
              Empieza a{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                digitalizar
              </span>{" "}
              tu negocio hoy
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
              Agenda una consulta gratuita y descubre cómo la tecnología puede
              transformar tu empresa. Sin compromiso, sin letra pequeña.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/agenda-reunion"
                className="btn btn-lg bg-white text-gray-900 hover:bg-gray-100 font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                id="cta-final-button"
              >
                <CalendarDays size={20} />
                Agenda tu consulta gratuita
              </Link>
              <Link
                href="/contacto"
                className="btn btn-lg border border-white/20 text-white hover:bg-white/10 transition-all"
              >
                <Mail size={18} />
                Escríbenos
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
