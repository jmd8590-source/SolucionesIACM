import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://solucionesiacm.com";

  const staticPaths = [
    "",
    "/servicios",
    "/soluciones-ia",
    "/desarrollo-web",
    "/automatizacion",
    "/auditor-web-ia",
    "/recursos",
    "/blog",
    "/contacto",
    "/agenda-reunion",
    "/aviso-legal",
    "/privacidad",
    "/cookies",
  ];

  const blogSlugs = [
    "como-la-ia-puede-transformar-tu-negocio",
    "guia-seo-local-negocios",
    "automatizar-tareas-repetitivas-n8n",
  ];

  const staticUrls = staticPaths.map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1.0 : 0.8,
  }));

  const blogUrls = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...blogUrls];
}
