"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  MessageSquare,
  X,
  Send,
  Loader2,
  Sparkles,
  Bot,
  User,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

interface Message {
  role: "system" | "assistant" | "user";
  content: string;
}

export default function ChatWidget() {
  const pathname = usePathname();

  // Hide on admin routes
  if (pathname?.startsWith("/admin")) return null;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "¡Hola! Soy tu asistente virtual de SolucionesIACM. ¿Te gustaría saber cómo podemos digitalizar tu negocio con desarrollo web, automatización o IA? ¡Pregúntame lo que quieras!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [capturedLead, setCapturedLead] = useState<{
    name?: string;
    email?: string;
    phone?: string;
  } | null>(null);
  const [showLeadNotification, setShowLeadNotification] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages list updates or when open status changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    const updatedMessages: Message[] = [
      ...messages,
      { role: "user", content: userText },
    ];

    setMessages(updatedMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.content },
        ]);

        // If the API detected/captured lead information
        if (data.leadData) {
          const newLead = { ...capturedLead, ...data.leadData };
          setCapturedLead(newLead);
          setShowLeadNotification(true);
          // Hide notification banner after 5 seconds
          setTimeout(() => setShowLeadNotification(false), 5000);
        }
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Lo siento, he tenido un problema de conexión al procesar tu solicitud. ¿Podrías volver a intentarlo?",
          },
        ]);
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Parece que hay un error de red. Por favor, comprueba tu conexión e inténtalo de nuevo.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Lead CRM Captured Banner */}
      {isOpen && showLeadNotification && (
        <div className="absolute bottom-[460px] right-0 w-[340px] bg-emerald-50 border border-emerald-200 rounded-2xl p-4 shadow-xl flex gap-3 items-start animate-fade-in-up">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
            <CheckCircle2 size={18} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-900">CRM — Lead Registrado</p>
            <p className="text-[11px] text-gray-500 mt-0.5">
              Hemos registrado tus datos en nuestro pipeline comercial de SolucionesIACM.
            </p>
          </div>
          <button
            onClick={() => setShowLeadNotification(false)}
            className="text-gray-400 hover:text-gray-600 ml-auto"
            aria-label="Cerrar banner"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div
          className="w-[90vw] sm:w-[380px] h-[500px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col mb-4 transition-all duration-300 animate-fade-in-up"
          role="dialog"
          aria-label="Chat con SolucionesIACM"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between text-white relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                <Bot size={20} className="text-white animate-float" />
              </div>
              <div>
                <p className="text-sm font-bold leading-none">Asesor SolucionesIACM</p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-blue-100 font-medium">Asistente en línea</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/15 transition-colors text-white/80 hover:text-white"
              aria-label="Cerrar chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages list */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
            {messages.map((msg, i) => {
              const isAssistant = msg.role === "assistant";
              return (
                <div
                  key={i}
                  className={`flex gap-3 items-start ${
                    isAssistant ? "" : "flex-row-reverse"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold shadow-sm ${
                      isAssistant
                        ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                        : "bg-white border border-gray-200 text-blue-600"
                    }`}
                  >
                    {isAssistant ? <Bot size={16} /> : <User size={16} />}
                  </div>

                  {/* Bubble content */}
                  <div
                    className={`p-4 rounded-2xl text-sm leading-relaxed max-w-[75%] shadow-sm ${
                      isAssistant
                        ? "bg-white text-gray-800 border border-gray-100"
                        : "bg-blue-600 text-white font-medium"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              );
            })}

            {/* Writing Indicator */}
            {isLoading && (
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Bot size={16} />
                </div>
                <div className="bg-white border border-gray-100 p-4 rounded-2xl max-w-[75%] shadow-sm flex items-center gap-1.5">
                  <span className="text-xs text-gray-500 font-medium">Asistente está escribiendo</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick CTAs */}
          <div className="px-6 py-2 bg-gray-50 border-t border-gray-100 flex gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => {
                setInputValue("Quiero crear una página web");
                if (inputRef.current) inputRef.current.focus();
              }}
              className="text-xs font-semibold bg-white border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-300 px-3 py-1.5 rounded-full whitespace-nowrap transition-all shadow-sm"
            >
              Crear página web
            </button>
            <button
              onClick={() => {
                setInputValue("¿Qué soluciones de IA ofrecéis?");
                if (inputRef.current) inputRef.current.focus();
              }}
              className="text-xs font-semibold bg-white border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-300 px-3 py-1.5 rounded-full whitespace-nowrap transition-all shadow-sm"
            >
              Soluciones de IA
            </button>
            <button
              onClick={() => {
                setInputValue("Quiero agendar una reunión gratuita");
                if (inputRef.current) inputRef.current.focus();
              }}
              className="text-xs font-semibold bg-white border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-300 px-3 py-1.5 rounded-full whitespace-nowrap transition-all shadow-sm"
            >
              Agendar cita
            </button>
          </div>

          {/* Form input */}
          <form
            onSubmit={handleSendMessage}
            className="p-4 bg-white border-t border-gray-100 flex gap-2 items-center"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 py-2.5 px-4 rounded-xl border border-gray-200 text-gray-900 outline-none focus:border-blue-400 text-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-50 flex-shrink-0"
              aria-label="Enviar mensaje"
            >
              {isLoading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-105 transition-all duration-300 relative group animate-float"
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat con asistente"}
        aria-expanded={isOpen}
        style={{
          boxShadow: "0 8px 32px rgba(0, 102, 255, 0.3)",
        }}
      >
        {/* Glow pulsing effect */}
        <span className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping group-hover:animate-none scale-105 pointer-events-none" />

        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}
