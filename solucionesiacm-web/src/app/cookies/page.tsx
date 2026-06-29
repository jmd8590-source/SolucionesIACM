"use client";

import { useState } from "react";
import { Cookie, Shield, Settings, BarChart3, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CookiesPage() {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto max-w-[800px] px-6">
        <AnimatedSection>
          <h1 className="text-3xl font-bold mb-8">Política de Cookies</h1>
          <p className="text-sm text-gray-400 mb-8">Última actualización: Junio 2025</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4">¿Qué son las cookies?</h2>
              <p className="text-gray-600 leading-relaxed">
                Las cookies son pequeños archivos de texto que los sitios web almacenan en tu
                dispositivo cuando los visitas. Se utilizan para recordar tus preferencias,
                mejorar la experiencia de navegación y analizar el uso del sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Tipos de cookies que utilizamos</h2>

              <div className="space-y-4 mt-6">
                {/* Necessary */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <Shield size={20} className="text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold">Cookies necesarias</h3>
                        <p className="text-xs text-gray-500">Siempre activas</p>
                      </div>
                    </div>
                    <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-not-allowed">
                      <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Esenciales para el funcionamiento del sitio web. No se pueden desactivar.
                    Incluyen cookies de sesión y preferencias básicas.
                  </p>
                </div>

                {/* Analytics */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <BarChart3 size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold">Cookies analíticas</h3>
                        <p className="text-xs text-gray-500">Opcionales</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setPreferences((p) => ({ ...p, analytics: !p.analytics }))}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.analytics ? "bg-blue-500" : "bg-gray-200"
                      }`}
                    >
                      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${
                        preferences.analytics ? "right-0.5" : "left-0.5"
                      }`} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Nos ayudan a entender cómo los visitantes interactúan con el sitio web,
                    recopilando información de forma anónima. Utilizamos Google Analytics.
                  </p>
                </div>

                {/* Marketing */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                        <Settings size={20} className="text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold">Cookies de marketing</h3>
                        <p className="text-xs text-gray-500">Opcionales</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setPreferences((p) => ({ ...p, marketing: !p.marketing }))}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.marketing ? "bg-purple-500" : "bg-gray-200"
                      }`}
                    >
                      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${
                        preferences.marketing ? "right-0.5" : "left-0.5"
                      }`} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Se utilizan para mostrar anuncios relevantes y medir la eficacia de las
                    campañas publicitarias.
                  </p>
                </div>
              </div>

              <button className="btn btn-primary mt-6">
                <CheckCircle2 size={18} />
                Guardar preferencias
              </button>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Cómo gestionar las cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Puedes configurar tu navegador para bloquear o eliminar las cookies. Ten en
                cuenta que si desactivas las cookies necesarias, algunas funcionalidades del
                sitio web podrían no funcionar correctamente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Más información</h2>
              <p className="text-gray-600 leading-relaxed">
                Si tienes alguna duda sobre nuestra política de cookies, puedes contactarnos
                en{" "}
                <a href="mailto:info@solucionesiacm.com" className="text-blue-600 hover:underline">
                  info@solucionesiacm.com
                </a>.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
