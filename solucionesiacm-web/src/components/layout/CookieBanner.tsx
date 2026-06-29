"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cookie, X, ShieldCheck } from "lucide-react";

export default function CookieBanner() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already set cookie preferences
    const consent = localStorage.getItem("iacm_cookie_consent");
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "iacm_cookie_consent",
      JSON.stringify({ necessary: true, analytics: true, marketing: true })
    );
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem(
      "iacm_cookie_consent",
      JSON.stringify({ necessary: true, analytics: false, marketing: false })
    );
    setIsVisible(false);
  };

  // Hide on admin routes or if not visible
  if (pathname?.startsWith("/admin") || !isVisible) return null;

  return (
    <div
      className="fixed bottom-6 left-6 right-6 sm:left-auto sm:max-w-md bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-gray-100 z-40 animate-fade-in-up"
      role="dialog"
      aria-label="Consentimiento de Cookies"
    >
      <div className="flex gap-4 items-start">
        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
          <Cookie size={20} className="animate-float" />
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
            Valoramos tu privacidad
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Utilizamos cookies propias y de terceros para analizar el tráfico de la web y
            personalizar el contenido. Puedes aceptar todas las cookies o configurar tus
            preferencias.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={handleAcceptAll}
              className="text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-xl shadow-md shadow-blue-500/10 transition-all cursor-pointer"
            >
              Aceptar todas
            </button>
            <button
              onClick={handleRejectAll}
              className="text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-xl transition-all cursor-pointer"
            >
              Rechazar opcionales
            </button>
            <Link
              href="/cookies"
              onClick={() => setIsVisible(false)}
              className="text-xs font-semibold text-blue-600 hover:underline px-2 py-2 flex items-center"
            >
              Configurar
            </Link>
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 p-1"
          aria-label="Cerrar banner"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
