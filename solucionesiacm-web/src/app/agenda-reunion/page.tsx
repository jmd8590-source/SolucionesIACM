"use client";

import { useState } from "react";
import {
  CalendarDays,
  Clock,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
  CheckCircle2,
  Loader2,
  Sparkles,
  ArrowRight,
  Video,
  MapPin,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "16:00", "16:30", "17:00", "17:30",
];

const meetingTypes = [
  {
    icon: Video,
    title: "Videollamada",
    description: "Reunión online por Google Meet o Zoom",
    duration: "30 min",
  },
  {
    icon: Phone,
    title: "Llamada telefónica",
    description: "Te llamamos al número que nos indiques",
    duration: "20 min",
  },
  {
    icon: MapPin,
    title: "Presencial",
    description: "Reunión en persona en Cumbres Mayores",
    duration: "45 min",
  },
];

export default function AgendaReunionPage() {
  const [selectedType, setSelectedType] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
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

  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    // Skip weekends
    if (date.getDay() === 0 || date.getDay() === 6) return null;
    return date;
  }).filter(Boolean) as Date[];

  if (isSubmitted) {
    return (
      <section className="relative pt-32 pb-20 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-white to-blue-50/40" />
        <div className="container mx-auto max-w-[600px] px-6 relative z-10 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-emerald-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">¡Reunión agendada!</h1>
            <p className="text-gray-500 mb-8">
              Hemos recibido tu solicitud. Te enviaremos un email de confirmación
              con los detalles y el enlace de la reunión.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <CalendarDays size={16} className="text-blue-600" />
                <span className="text-gray-700 font-medium">{selectedDate}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock size={16} className="text-blue-600" />
                <span className="text-gray-700 font-medium">{selectedTime}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                {selectedType === 0 ? <Video size={16} className="text-blue-600" /> : selectedType === 1 ? <Phone size={16} className="text-blue-600" /> : <MapPin size={16} className="text-blue-600" />}
                <span className="text-gray-700 font-medium">{meetingTypes[selectedType].title}</span>
              </div>
            </div>
            <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary">
              Agendar otra reunión
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-purple-50/40" />
        <div className="absolute top-20 left-[20%] w-[400px] h-[400px] bg-blue-400/8 rounded-full blur-[100px]" />

        <div className="container mx-auto max-w-[900px] px-6 relative z-10 text-center">
          <AnimatedSection>
            <div className="badge mx-auto mb-6">
              <CalendarDays size={14} />
              Consulta gratuita
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="mb-6">
              Agenda tu{" "}
              <span className="gradient-text">reunión gratuita</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              30 minutos para analizar tu negocio y proponerte la mejor solución
              digital. Sin compromiso, sin coste.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section pt-8" id="booking-form">
        <div className="container mx-auto max-w-[900px] px-6">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Step 1: Meeting Type */}
            <AnimatedSection>
              <h2 className="text-xl font-bold mb-4">1. Tipo de reunión</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {meetingTypes.map((type, i) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.title}
                      type="button"
                      onClick={() => setSelectedType(i)}
                      className={`p-6 rounded-2xl border-2 text-left transition-all duration-200 ${
                        selectedType === i
                          ? "border-blue-500 bg-blue-50/50 shadow-md"
                          : "border-gray-100 bg-white hover:border-gray-200"
                      }`}
                    >
                      <Icon size={24} className={selectedType === i ? "text-blue-600" : "text-gray-400"} />
                      <h3 className="text-base font-bold mt-3 mb-1">{type.title}</h3>
                      <p className="text-xs text-gray-500 mb-2">{type.description}</p>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">{type.duration}</span>
                    </button>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* Step 2: Date & Time */}
            <AnimatedSection delay={100}>
              <h2 className="text-xl font-bold mb-4">2. Fecha y hora</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Date picker */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Selecciona un día</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {dates.slice(0, 8).map((date) => {
                      const dateStr = date.toLocaleDateString("es-ES", { weekday: "short", day: "numeric", month: "short" });
                      const isSelected = selectedDate === dateStr;
                      return (
                        <button
                          key={dateStr}
                          type="button"
                          onClick={() => setSelectedDate(dateStr)}
                          className={`p-3 rounded-xl text-center text-sm font-medium border transition-all ${
                            isSelected
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-100 bg-white text-gray-600 hover:border-gray-200"
                          }`}
                        >
                          {dateStr}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time slots */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Selecciona una hora</label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => {
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 rounded-xl text-sm font-medium border transition-all ${
                            isSelected
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-100 bg-white text-gray-600 hover:border-gray-200"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 3: Your Info */}
            <AnimatedSection delay={200}>
              <h2 className="text-xl font-bold mb-4">3. Tus datos</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="meeting-name" className="block text-sm font-semibold text-gray-700 mb-2">Nombre *</label>
                    <input type="text" id="meeting-name" required placeholder="Tu nombre" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" />
                  </div>
                  <div>
                    <label htmlFor="meeting-email" className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input type="email" id="meeting-email" required placeholder="tu@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="meeting-phone" className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                    <input type="tel" id="meeting-phone" placeholder="+34 600 000 000" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" />
                  </div>
                  <div>
                    <label htmlFor="meeting-company" className="block text-sm font-semibold text-gray-700 mb-2">Empresa</label>
                    <input type="text" id="meeting-company" placeholder="Nombre de tu empresa" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="meeting-notes" className="block text-sm font-semibold text-gray-700 mb-2">¿Sobre qué quieres hablar?</label>
                  <textarea id="meeting-notes" rows={3} placeholder="Cuéntanos brevemente tu proyecto o necesidad..." className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none" />
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="meeting-privacy" required className="mt-1 accent-blue-600" />
                  <label htmlFor="meeting-privacy" className="text-xs text-gray-500">
                    He leído y acepto la <a href="/privacidad" className="text-blue-600 hover:underline">política de privacidad</a>. *
                  </label>
                </div>
              </div>
            </AnimatedSection>

            {/* Submit */}
            <AnimatedSection delay={300}>
              <button
                type="submit"
                disabled={isSubmitting || !selectedDate || !selectedTime}
                className="btn btn-primary btn-lg w-full justify-center disabled:opacity-50"
                id="meeting-submit-button"
              >
                {isSubmitting ? (
                  <><Loader2 size={20} className="animate-spin" /> Confirmando...</>
                ) : (
                  <><CalendarDays size={20} /> Confirmar reunión</>
                )}
              </button>
            </AnimatedSection>
          </form>
        </div>
      </section>
    </>
  );
}
