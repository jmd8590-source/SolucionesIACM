import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight, Search, Tag } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos sobre desarrollo web, inteligencia artificial, automatización y digitalización de negocios. Consejos y guías para pymes.",
};

const blogPosts = [
  {
    slug: "como-la-ia-puede-transformar-tu-negocio",
    title: "Cómo la IA puede transformar tu pequeño negocio en 2025",
    excerpt: "Descubre las aplicaciones prácticas de la inteligencia artificial para pymes y autónomos. Desde chatbots hasta automatización.",
    category: "Inteligencia Artificial",
    readTime: "8 min",
    date: "15 Jun 2025",
    featured: true,
  },
  {
    slug: "guia-seo-local-negocios",
    title: "Guía completa de SEO local para negocios",
    excerpt: "Aprende a posicionar tu negocio en Google Maps y búsquedas locales. Estrategias probadas para atraer clientes de tu zona.",
    category: "SEO",
    readTime: "12 min",
    date: "10 Jun 2025",
    featured: false,
  },
  {
    slug: "automatizar-tareas-repetitivas-n8n",
    title: "5 tareas que puedes automatizar hoy con n8n",
    excerpt: "Flujos de automatización prácticos que cualquier negocio puede implementar para ahorrar horas cada semana.",
    category: "Automatización",
    readTime: "6 min",
    date: "5 Jun 2025",
    featured: false,
  },
  {
    slug: "por-que-necesitas-web-profesional",
    title: "Por qué tu negocio necesita una web profesional",
    excerpt: "Las razones por las que una presencia digital profesional es imprescindible para cualquier negocio en la era digital.",
    category: "Desarrollo Web",
    readTime: "5 min",
    date: "1 Jun 2025",
    featured: false,
  },
  {
    slug: "chatbots-atencion-cliente",
    title: "Chatbots: la revolución en atención al cliente",
    excerpt: "Cómo los chatbots con IA están cambiando la forma en que las empresas atienden a sus clientes, con ejemplos reales.",
    category: "Inteligencia Artificial",
    readTime: "7 min",
    date: "28 May 2025",
    featured: false,
  },
  {
    slug: "errores-comunes-web-pymes",
    title: "Los 10 errores más comunes en webs de pymes",
    excerpt: "Analiza los errores típicos que cometen las pequeñas empresas en sus páginas web y cómo solucionarlos.",
    category: "Desarrollo Web",
    readTime: "9 min",
    date: "20 May 2025",
    featured: false,
  },
];

const categories = ["Todos", "Inteligencia Artificial", "SEO", "Automatización", "Desarrollo Web"];

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-white to-blue-50/40" />

        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
          <AnimatedSection>
            <div className="badge mb-6">
              <BookOpen size={14} />
              Blog
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="mb-6">
              Artículos para{" "}
              <span className="gradient-text">impulsar tu negocio</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              Consejos, guías y tendencias sobre desarrollo web, IA y
              digitalización. Contenido práctico para pymes y autónomos.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4">
        <div className="container mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    i === 0
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="section pt-8">
          <div className="container mx-auto max-w-[1200px] px-6">
            <AnimatedSection>
              <div className="card p-0 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-12 flex items-center min-h-[300px]">
                    <div className="text-white">
                      <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
                        Destacado
                      </span>
                      <h2 className="text-3xl font-bold mt-4 mb-3 text-white">{featured.title}</h2>
                      <p className="text-white/80 text-sm leading-relaxed">{featured.excerpt}</p>
                    </div>
                  </div>
                  <div className="p-12 flex flex-col justify-center relative z-10">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Tag size={14} />
                        {featured.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {featured.readTime}
                      </span>
                      <span>{featured.date}</span>
                    </div>
                    <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:gap-2 transition-all cursor-pointer">
                      Leer artículo <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section" id="blog-grid">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 100}>
                <article className="card p-0 overflow-hidden h-full group">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <BookOpen size={40} className="text-gray-300" />
                  </div>
                  <div className="p-6 relative z-10">
                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                      <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-semibold">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{post.date}</span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                        Leer <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
