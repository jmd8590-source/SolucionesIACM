import { NextResponse } from "next/server";

// System prompt with full knowledge of SolucionesIACM
const SYSTEM_PROMPT = `Eres el Agente IA de SolucionesIACM (https://solucionesiacm.com). Actúas como asesor comercial, consultor digital y captador de leads.
Tu objetivo es transmitir confianza, profesionalidad, innovación y cercanía, y convencer a autónomos y pymes de Cumbres Mayores y toda España de digitalizar su negocio con nosotros.

Información sobre SolucionesIACM:
- Eslogan: "Para hacer crecer tu negocio, ponte al dIA."
- Ubicación: Cumbres Mayores, Huelva, España (pero trabajamos a nivel nacional).
- Público objetivo: autónomos, pymes, pequeños comercios locales que necesitan dar el salto digital.
- Idiomas: Principalmente español, pero puedes atender en inglés si te escriben en inglés.

Servicios que ofrecemos:
1. Desarrollo Web: Páginas corporativas premium, landing pages de alta conversión, e-commerce (tiendas online) completos, mantenimiento web, y web apps.
2. Inteligencia Artificial: Chatbots interactivos 24/7 (como tú), agentes autónomos complejos, asistentes virtuales con base de conocimiento propia.
3. Automatización: Conexión de herramientas y eliminación de tareas repetitivas usando la plataforma n8n.
4. Auditor Web IA: Herramienta en la web para auditar el rendimiento, SEO, accesibilidad y seguridad de cualquier sitio web.
5. Bases de Datos: Soporte, diseño y migración de bases de datos Access y MySQL.
6. Correo Corporativo: Configuración y hosting de correos profesionales con dominio propio.
7. Consultoría Digital: Planes estratégicos personalizados para pymes.

Pautas de comportamiento y conversión:
- Sé siempre educado, profesional, cercano, entusiasta y claro. Evita tecnicismos excesivos.
- Si te preguntan sobre un problema de negocio (ej. "no tengo tiempo", "no me llegan clientes", "mi web es lenta"), recomiéndales el servicio adecuado de forma empática.
- Siempre que sea oportuno, invita al usuario a "Agendar una reunión gratuita de 30 minutos" usando nuestro enlace o formulario de agenda.
- Si el usuario muestra interés real en contratar un servicio o agendar una cita, trata de capturar de manera natural sus datos básicos: Nombre, Email, Teléfono y Nombre de su Empresa.
- Al final de la conversación, si te proporcionan sus datos, infórmales de que has registrado la oportunidad en nuestro CRM y que un asesor humano le contactará en menos de 24 horas y le llegará un email de confirmación.

Mantén tus respuestas relativamente concisas (máximo 2-3 párrafos cortos) para que se lean bien en una burbuja de chat flotante.`;

// Pre-defined rules-based response fallback engine (if no OpenAI key is set)
function getRulesBasedResponse(messages: { role: string; content: string }[]) {
  const userMessages = messages.filter((m) => m.role === "user");
  const assistantMessages = messages.filter((m) => m.role === "assistant");
  
  const lastUserMsg = userMessages[userMessages.length - 1]?.content.toLowerCase() || "";
  const lastAssistantMsg = assistantMessages[assistantMessages.length - 1]?.content || "";

  // Helper to check keywords
  const contains = (...keywords: string[]) => keywords.some((k) => lastUserMsg.includes(k));

  // Determine state based on what the assistant asked last
  if (lastAssistantMsg.includes("¿cómo te llamas?") || lastAssistantMsg.includes("¿me podrías decir tu nombre?")) {
    const name = userMessages[userMessages.length - 1]?.content || "cliente";
    return {
      content: `¡Un placer conocerte, ${name}! Para poder ponernos en contacto contigo y enviarte información o confirmar una cita, ¿cuál es tu correo electrónico?`,
      leadData: { name }
    };
  }

  if (lastAssistantMsg.includes("¿cuál es tu correo electrónico?") || lastAssistantMsg.includes("tu correo electrónico")) {
    const email = userMessages[userMessages.length - 1]?.content || "";
    return {
      content: `Gracias por el correo. Si nos facilitas también un teléfono de contacto y el nombre de tu empresa (si tienes), nuestro equipo podrá llamarte directamente. ¿Cuál es tu teléfono?`,
      leadData: { email }
    };
  }

  if (lastAssistantMsg.includes("¿Cuál es tu teléfono?") || lastAssistantMsg.includes("tu teléfono")) {
    const phone = userMessages[userMessages.length - 1]?.content || "";
    return {
      content: `¡Perfecto! He registrado tus datos de contacto en nuestro CRM de SolucionesIACM y he notificado al equipo comercial. Te llegará un correo electrónico y nos pondremos en contacto contigo en menos de 24 horas laborables para analizar tu proyecto. ¿Te gustaría saber algo más sobre nuestros servicios de desarrollo web, IA o automatización?`,
      leadData: { phone }
    };
  }

  // General Intent Matching
  if (contains("hola", "buenas", "buenos dias", "buenas tardes", "saludos", "ey")) {
    return {
      content: "¡Hola! Soy el asistente virtual de SolucionesIACM. Estoy aquí para ayudarte a digitalizar tu negocio con desarrollo web, automatización e inteligencia artificial. ¿En qué puedo ayudarte hoy?"
    };
  }

  if (contains("web", "pagina", "tienda", "ecommerce", "landing", "desarrollo")) {
    return {
      content: "En SolucionesIACM creamos páginas web corporativas premium, tiendas online (e-commerce) y landing pages de alta conversión, todas optimizadas para SEO, veloces y accesibles (cumpliendo WCAG 2.2). ¿Tienes ya una página web que quieras renovar o quieres empezar un proyecto desde cero?"
    };
  }

  if (contains("ia", "inteligencia artificial", "chatbot", "agente", "asistente")) {
    return {
      content: "La Inteligencia Artificial puede transformar tu negocio. Desarrollamos chatbots conversacionales 24/7 (como yo) para atención al cliente y captación de leads, agentes IA avanzados para análisis de datos y asistentes de productividad interna. ¿Qué proceso de tu negocio te gustaría automatizar con IA?"
    };
  }

  if (contains("automatizacion", "automatizar", "n8n", "tareas", "repetitivo")) {
    return {
      content: "Con n8n y flujos inteligentes podemos conectar tus herramientas (CRM, bases de datos, email, Slack) para eliminar tareas repetitivas. Esto ahorra una media de 15 horas semanales a las pymes. ¿Qué herramientas utilizas actualmente en tu día a día?"
    };
  }

  if (contains("auditor", "analizar mi web", "auditoria")) {
    return {
      content: "¡Excelente! Puedes utilizar nuestra herramienta 'Auditor Web IA' en la sección correspondiente de la web para hacer un test instantáneo de tu sitio. Si lo prefieres, puedo agendar una llamada con nuestro consultor para hacer una auditoría profunda manual de forma gratuita. ¿Te interesa agendar una reunión?"
    };
  }

  if (contains("reunion", "agenda", "cita", "hablar", "reunir", "calendario", "gratis")) {
    return {
      content: "¡Claro! La reunión es totalmente gratuita y dura unos 30 minutos. Podemos hacerlo por videollamada, por teléfono, o presencial si estás en Cumbres Mayores o alrededores. Para registrar tu solicitud de reunión, por favor, ¿me podrías decir tu nombre?"
    };
  }

  if (contains("precio", "cuanto cuesta", "presupuesto", "coste", "tarifa")) {
    return {
      content: "Nuestros proyectos son 100% personalizados según las necesidades de cada pyme o autónomo. Por ejemplo, una landing page o web corporativa sencilla puede adaptarse a presupuestos ajustados, mientras que integraciones complejas de IA se cotizan a medida. Si me facilitas tu nombre y detalles del proyecto, te prepararemos una propuesta sin compromiso. ¿Cómo te llamas?"
    };
  }

  if (contains("cumbres", "huelva", "donde", "ubicacion", "local")) {
    return {
      content: "Estamos ubicados en Cumbres Mayores, Huelva. Nos encanta trabajar con pymes y autónomos locales de la comarca, aunque también ofrecemos servicios a nivel nacional. Si estás cerca, ¡incluso podemos agendar una reunión presencial!"
    };
  }

  if (contains("contacto", "email", "telefono", "escribir", "llamar")) {
    return {
      content: "Puedes contactarnos directamente escribiéndonos a info@solucionesiacm.com o llamándonos al +34 600 000 000. Si lo prefieres, puedes facilitarme tu nombre y datos de contacto aquí mismo y nosotros te llamaremos. ¿Cómo te llamas?"
    };
  }

  if (contains("gracias", "perfecto", "ok", "de acuerdo", "bien")) {
    return {
      content: "¡De nada! Recuerda nuestro eslogan: 'Para hacer crecer tu negocio, ponte al dIA.'. Estoy aquí si te surge cualquier otra duda sobre desarrollo web, IA o automatización. ¡Que tengas un excelente día!"
    };
  }

  // Catch-all response
  return {
    content: "Entiendo. En SolucionesIACM somos expertos en digitalización para pymes. Ofrecemos desarrollo web profesional, automatización con n8n y soluciones de Inteligencia Artificial a medida. ¿Te gustaría que agendemos una breve llamada telefónica gratuita para ver cómo podemos ayudar a tu negocio?"
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Mensajes no válidos" }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (apiKey) {
      // Direct call to OpenAI API (avoids requiring third-party library overhead)
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini", // Cost-efficient and fast
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.map((m) => ({ role: m.role, content: m.content })),
          ],
          temperature: 0.7,
          max_tokens: 400,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const aiMessage = data.choices?.[0]?.message?.content;
        
        // Simulación de detección de leads (si el texto tiene emails/teléfonos en GPT-4o-mini)
        let leadData = null;
        const lastUserText = messages[messages.length - 1]?.content || "";
        const emailMatch = lastUserText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
        const phoneMatch = lastUserText.match(/(\+34|0034|34)?[6789]\d{8}/);
        
        if (emailMatch || phoneMatch) {
          leadData = {
            email: emailMatch ? emailMatch[0] : undefined,
            phone: phoneMatch ? phoneMatch[0] : undefined,
          };
        }

        return NextResponse.json({
          content: aiMessage || "Disculpa, no he podido procesar la respuesta.",
          source: "openai",
          leadData,
        });
      } else {
        console.error("OpenAI API returned status", response.status);
      }
    }

    // Fallback if OpenAI key is missing or calls fail
    const fallbackResponse = getRulesBasedResponse(messages);
    return NextResponse.json({
      content: fallbackResponse.content,
      source: "fallback",
      leadData: fallbackResponse.leadData || null,
    });
  } catch (error) {
    console.error("Error in chat API handler:", error);
    return NextResponse.json(
      { error: "Error interno del servidor al procesar el mensaje." },
      { status: 500 }
    );
  }
}
