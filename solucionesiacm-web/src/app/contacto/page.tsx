"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  MessageSquare,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-purple-50/40" />
        <div className="absolute top-20 right-[15%] w-[400px] h-[400px] bg-blue-400/8 rounded-full blur-[100px]" />

        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
          <AnimatedSection>
            <div className="badge mb-6">
              <MessageSquare size={14} />
              Contacto
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="mb-6">
              Hablemos de tu{" "}
              <span className="gradient-text">proyecto</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              ¿Tienes una idea? ¿Necesitas digitalizar tu negocio? Cuéntanos y te
              respondemos en menos de 24 horas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section" id="contacto-form">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                {isSubmitted ? (
                  <div className="bg-emerald-50 rounded-3xl p-12 border border-emerald-100 text-center">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">¡Mensaje enviado!</h3>
                    <p className="text-gray-600 mb-6">
                      Hemos recibido tu mensaje. Te responderemos en menos de 24 horas.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn btn-secondary"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                          placeholder="+34 600 000 000"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-company" className="block text-sm font-semibold text-gray-700 mb-2">
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="contact-company"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="block text-sm font-semibold text-gray-700 mb-2">
                        ¿Qué servicio te interesa?
                      </label>
                      <select
                        id="contact-service"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option>Desarrollo Web</option>
                        <option>Soluciones IA / Chatbot</option>
                        <option>Automatización</option>
                        <option>Auditoría Web</option>
                        <option>E-commerce</option>
                        <option>Consultoría</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                        placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                      />
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="contact-privacy" required className="mt-1 accent-blue-600" />
                      <label htmlFor="contact-privacy" className="text-xs text-gray-500">
                        He leído y acepto la{" "}
                        <a href="/privacidad" className="text-blue-600 hover:underline">
                          política de privacidad
                        </a>
                        . *
                      </label>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-lg w-full justify-center"
                      id="contact-submit-button"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Enviar mensaje
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={200}>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100/50">
                    <h3 className="text-lg font-bold mb-6">Información de contacto</h3>
                    <div className="space-y-5">
                      <a href="mailto:info@solucionesiacm.com" className="flex items-center gap-4 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                          <Mail size={18} className="text-blue-600" />
                        </div>
                        info@solucionesiacm.com
                      </a>
                      <a href="tel:+34600000000" className="flex items-center gap-4 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                          <Phone size={18} className="text-blue-600" />
                        </div>
                        +34 600 000 000
                      </a>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                          <MapPin size={18} className="text-blue-600" />
                        </div>
                        Cumbres Mayores, Huelva, España
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                          <Clock size={18} className="text-blue-600" />
                        </div>
                        Lun - Vie: 9:00 - 18:00
                      </div>
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div className="bg-gray-100 rounded-2xl h-[250px] flex items-center justify-center border border-gray-200 overflow-hidden">
                    <div className="text-center">
                      <MapPin size={32} className="text-gray-300 mx-auto mb-2" />
                      <p className="text-sm text-gray-400">Cumbres Mayores, Huelva</p>
                      <p className="text-xs text-gray-300">Mapa interactivo próximamente</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
