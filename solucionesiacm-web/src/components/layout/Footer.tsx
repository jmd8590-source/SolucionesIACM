import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Brain,
  Zap,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const footerLinks = {
  servicios: [
    { label: "Desarrollo Web", href: "/desarrollo-web", icon: Globe },
    { label: "Soluciones IA", href: "/soluciones-ia", icon: Brain },
    { label: "Automatización", href: "/automatizacion", icon: Zap },
    { label: "Auditor Web IA", href: "/auditor-web-ia" },
    { label: "Todos los servicios", href: "/servicios" },
  ],
  empresa: [
    { label: "Blog", href: "/blog" },
    { label: "Recursos", href: "/recursos" },
    { label: "Agenda una reunión", href: "/agenda-reunion" },
    { label: "Contacto", href: "/contacto" },
  ],
  legal: [
    { label: "Aviso Legal", href: "/aviso-legal" },
    { label: "Política de Privacidad", href: "/privacidad" },
    { label: "Política de Cookies", href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden" role="contentinfo">
      {/* Gradient accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-[1400px] px-6 pt-16 pb-8 relative">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/logo.png"
                alt="SolucionesIACM"
                width={40}
                height={40}
                className="transition-transform group-hover:scale-105"
              />
              <div>
                <span className="text-lg font-bold">
                  soluciones<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IACM</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Para hacer crecer tu negocio, ponte al dIA. Digitalizamos pymes y
              autónomos con desarrollo web, inteligencia artificial y
              automatización.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@solucionesiacm.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail size={14} />
                info@solucionesiacm.com
              </a>
              <a
                href="tel:+34600000000"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Phone size={14} />
                +34 600 000 000
              </a>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={14} />
                Cumbres Mayores, Huelva
              </span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Servicios */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Servicios
              </h4>
              <ul className="flex flex-col gap-2.5">
                {footerLinks.servicios.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Empresa
              </h4>
              <ul className="flex flex-col gap-2.5">
                {footerLinks.empresa.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Legal
              </h4>
              <ul className="flex flex-col gap-2.5">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} SolucionesIACM. Todos los derechos
            reservados.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Hecho con <Heart size={14} className="text-red-400 fill-red-400" /> en Cumbres Mayores
          </p>
        </div>
      </div>
    </footer>
  );
}
