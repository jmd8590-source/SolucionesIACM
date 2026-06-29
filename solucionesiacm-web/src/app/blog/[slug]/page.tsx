import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarDays,
  Clock,
  ArrowLeft,
  Share2,
  Link2,
  Tag,
  BookOpen,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Rich article database matching blog index slugs
const articles = [
  {
    slug: "como-la-ia-puede-transformar-tu-negocio",
    title: "Cómo la IA puede transformar tu pequeño negocio en 2025",
    excerpt: "Descubre las aplicaciones prácticas de la inteligencia artificial para pymes y autónomos. Desde chatbots hasta automatización.",
    category: "Inteligencia Artificial",
    readTime: "8 min",
    date: "15 Jun 2025",
    content: `
      <h2>El poder de la IA al alcance de las pymes</h2>
      <p>La inteligencia artificial ha dejado de ser una tecnología exclusiva de las multinacionales y gigantes tecnológicos. En 2025, la IA se ha convertido en el motor de crecimiento y eficiencia más accesible para autónomos y pequeñas empresas. Integrar soluciones de IA te permite automatizar la rutina, tomar decisiones más rápidas y ofrecer un servicio impecable.</p>

      <h2>1. Atención al Cliente 24/7 con Chatbots Inteligentes</h2>
      <p>Un chatbot con IA no sigue un guion rígido. Entiende el lenguaje de tus clientes, responde sus dudas de inmediato y recopila sus datos para que puedas contactarles más tarde. Esto significa que nunca perderás un cliente potencial, incluso si te escriben de madrugada o durante el fin de semana.</p>
      <blockquote>"Los negocios que integran chatbots IA reportan un incremento del 30% en la captación de leads y un ahorro significativo de tiempo en atención primaria."</blockquote>

      <h2>2. Automatización de Procesos Internos</h2>
      <p>Conectar tus herramientas del día a día (correo, CRM, contabilidad) mediante plataformas de automatización permite que la información fluya sin errores manuales. Puedes sincronizar bases de datos automáticamente, emitir facturas y enviar avisos automáticos a tu equipo.</p>

      <h2>3. Creación de Contenido y SEO Local</h2>
      <p>La IA es un excelente asistente para generar ideas de artículos, estructurar publicaciones para tu blog optimizadas para SEO local y redactar borradores. Esto te ayuda a posicionarte en Google en tu localidad (por ejemplo, en Cumbres Mayores y alrededores) sin tener que dedicarle horas diarias al marketing.</p>

      <h2>Conclusión: Da el primer paso</h2>
      <p>Para hacer crecer tu negocio, ponte al dIA. La digitalización no requiere una gran inversión inicial, sino elegir las herramientas adecuadas que resuelvan tus cuellos de botella actuales. Empieza automatizando un solo proceso o integrando un chatbot sencillo, y verás el cambio inmediato.</p>
    `
  },
  {
    slug: "guia-seo-local-negocios",
    title: "Guía completa de SEO local para negocios",
    excerpt: "Aprende a posicionar tu negocio en Google Maps y búsquedas locales. Estrategias probadas para atraer clientes de tu zona.",
    category: "SEO",
    readTime: "12 min",
    date: "10 Jun 2025",
    content: `
      <h2>¿Qué es el SEO Local y por qué importa?</h2>
      <p>Si tienes un comercio, taller, clínica o despacho profesional, tus clientes están a tu alrededor. El SEO local es el conjunto de técnicas para lograr que tu negocio aparezca en los primeros resultados de Google cuando un usuario busca tus servicios cerca de su ubicación (por ejemplo: "desarrollo web en Huelva" o "restaurantes en Cumbres Mayores").</p>

      <h2>1. Optimiza tu ficha de Google Business Profile (antes Google My Business)</h2>
      <p>Tu ficha de Google es tu escaparate digital local más importante. Completa todos los campos obligatorios:</p>
      <ul>
        <li>Nombre comercial exacto.</li>
        <li>Horarios actualizados y festivos.</li>
        <li>Fotos de alta calidad del local y productos.</li>
        <li>Reseñas de clientes (y responde a todas con palabras clave).</li>
      </ul>

      <h2>2. Palabras clave localizadas en tu Web</h2>
      <p>Asegúrate de incluir el nombre de tu municipio y áreas vecinas en la estructura de títulos (H1, H2) y textos de tu web. Por ejemplo, en lugar de poner solo "Ofrecemos servicios de fontanería", escribe "Servicios de fontanería profesional en Cumbres Mayores y alrededores".</p>

      <h2>3. Consistencia NAP (Name, Address, Phone)</h2>
      <p>Los motores de búsqueda comprueban que tus datos sean coherentes en toda la red. Tu nombre, dirección y número de teléfono deben escribirse exactamente igual en tu web, directorios locales, redes sociales y ficha de Google.</p>

      <h2>Conclusión</h2>
      <p>El SEO local es una inversión de medio plazo que genera un flujo constante de clientes sin pagar por anuncios. Optimizar estos puntos marcará la diferencia frente a tus competidores locales.</p>
    `
  },
  {
    slug: "automatizar-tareas-repetitivas-n8n",
    title: "5 tareas que puedes automatizar hoy con n8n",
    excerpt: "Flujos de automatización prácticos que cualquier negocio puede implementar para ahorrar horas cada semana.",
    category: "Automatización",
    readTime: "6 min",
    date: "5 Jun 2025",
    content: `
      <h2>Automatización accesible con n8n</h2>
      <p>n8n es una de las herramientas de automatización de flujos de trabajo más potentes y flexibles. Permite conectar tus aplicaciones y automatizar flujos complejos sin saber programar. Aquí tienes 5 casos prácticos que te ahorrarán horas de trabajo semanal.</p>

      <h2>1. Registro de leads en el CRM desde Formularios Web</h2>
      <p>Cada vez que un cliente rellena el formulario de contacto o agenda una cita, la información puede enviarse automáticamente a tu base de datos y notificarte en WhatsApp o email. No más copiar y pegar datos manualmente.</p>

      <h2>2. Sincronización automática de Calendario y CRM</h2>
      <p>Cuando un cliente reserve una reunión, n8n crea automáticamente la ficha de cliente en tu CRM, genera el enlace de videollamada y bloquea el espacio en tu calendario de Google o Outlook.</p>

      <h2>3. Respuestas y alertas automáticas a clientes</h2>
      <p>Si recibes un correo con la palabra "Presupuesto", n8n puede enviar una plantilla de respuesta instantánea acusando recibo y alertar a tu equipo comercial para una respuesta rápida.</p>

      <h2>Conclusión</h2>
      <p>Automatizar tus tareas repetitivas libera a tu equipo para centrarse en aportar valor y cerrar ventas. Empieza hoy mismo.</p>
    `
  }
];

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Blog SolucionesIACM`,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "datePublished": article.date,
    "description": article.excerpt,
    "author": {
      "@type": "Organization",
      "name": "SolucionesIACM",
    },
  };

  return (
    <>
      {/* Article Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-32 pb-20 bg-white" role="main">
        <div className="container mx-auto max-w-[900px] px-6">
          <AnimatedSection>
            {/* Back button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Volver al blog
            </Link>

            {/* Category and Read time */}
            <div className="flex items-center gap-4 mb-4 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                <Tag size={12} />
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {article.readTime}
              </span>
              <span>•</span>
              <span>{article.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-slate-500 leading-relaxed mb-10 border-l-4 border-blue-500 pl-4 italic">
              {article.excerpt}
            </p>

            {/* Author bar */}
            <div className="flex items-center justify-between py-6 border-y border-slate-100 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  S
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">SolucionesIACM</p>
                  <p className="text-xs text-slate-400">Consultoría Digital</p>
                </div>
              </div>

              {/* Share links */}
              <div className="flex items-center gap-2">
                <button
                  className="p-2.5 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center"
                  aria-label="Compartir en Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
                <button
                  className="p-2.5 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center"
                  aria-label="Compartir en LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
                <button
                  className="p-2 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-all"
                  aria-label="Copiar enlace"
                >
                  <Link2 size={16} />
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Article Prose content */}
          <AnimatedSection delay={200}>
            <div
              className="prose prose-blue max-w-none text-slate-700 space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </AnimatedSection>
        </div>
      </article>

      {/* CTA Final */}
      <section className="section bg-slate-50 border-t border-slate-100 text-center">
        <div className="container mx-auto max-w-[700px] px-6">
          <AnimatedSection>
            <h2 className="mb-4">¿Quieres digitalizar tu negocio?</h2>
            <p className="text-slate-500 mb-8">
              Agenda una reunión gratuita de 30 minutos y analizamos cómo aplicar
              desarrollo web, IA y automatización en tu empresa.
            </p>
            <Link href="/agenda-reunion" className="btn btn-primary">
              <CalendarDays size={18} />
              Reservar consulta gratuita
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
