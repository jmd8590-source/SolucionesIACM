import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chat/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SolucionesIACM — Desarrollo Web, IA y Automatización para tu Negocio",
    template: "%s | SolucionesIACM",
  },
  description:
    "Digitalizamos pymes y autónomos con desarrollo web profesional, inteligencia artificial, chatbots, automatización y soluciones a medida. Cumbres Mayores, Huelva.",
  keywords: [
    "desarrollo web",
    "inteligencia artificial",
    "automatización",
    "chatbots",
    "pymes",
    "Cumbres Mayores",
    "Huelva",
    "soluciones digitales",
    "ecommerce",
    "landing page",
  ],
  authors: [{ name: "SolucionesIACM" }],
  creator: "SolucionesIACM",
  metadataBase: new URL("https://solucionesiacm.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://solucionesiacm.com",
    siteName: "SolucionesIACM",
    title: "SolucionesIACM — Desarrollo Web, IA y Automatización",
    description:
      "Para hacer crecer tu negocio, ponte al dIA. Soluciones digitales para pymes y autónomos.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SolucionesIACM - Soluciones Digitales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SolucionesIACM — Desarrollo Web, IA y Automatización",
    description:
      "Para hacer crecer tu negocio, ponte al dIA. Soluciones digitales para pymes y autónomos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
