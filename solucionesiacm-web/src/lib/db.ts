"use client";

// Client-side Database utility for leads and meetings management (synced with localStorage)

export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: string;
  source: string;
  value: number;
  stage: string;
  created_at: string;
  messages: any[];
  notes?: string;
}

export interface Meeting {
  id: string;
  clientName: string;
  title: string;
  date: string;
  time: string;
  type: string;
  status: string;
}

const DEFAULT_LEADS: Lead[] = [
  {
    id: "1",
    name: "María García",
    company: "Panadería La Espiga",
    email: "maria@laespiga.com",
    phone: "612 345 678",
    status: "Ganado",
    source: "Chatbot IA",
    value: 1200,
    stage: "Cierre Ganado",
    created_at: "2026-06-25",
    messages: [
      { role: "assistant", content: "¡Hola! ¿Cómo te llamas?" },
      { role: "user", content: "Hola, me llamo María García." },
      { role: "assistant", content: "¡Un placer conocerte, María! ¿En qué puedo ayudarte?" },
      { role: "user", content: "Tengo una panadería en Cumbres Mayores y quiero crear una web para recibir pedidos de pan y dulces." },
      { role: "assistant", content: "¡Excelente idea! Las webs corporativas o e-commerce locales son perfectas para eso. Podríamos automatizar los pedidos. Para agendar una reunión gratuita y enviarte una propuesta, ¿cuál es tu correo electrónico?" },
      { role: "user", content: "maria@laespiga.com" },
      { role: "assistant", content: "Gracias. ¿Nos facilitas tu teléfono?" },
      { role: "user", content: "Mi teléfono es 612345678 y mi negocio es Panadería La Espiga" },
      { role: "assistant", content: "Perfecto María. He registrado tus datos de contacto en nuestro CRM. Un consultor te contactará muy pronto. ¡Muchas gracias!" }
    ]
  },
  {
    id: "2",
    name: "Antonio López",
    company: "Ferretería López",
    email: "contacto@ferreterialopez.es",
    phone: "654 987 321",
    status: "Contactado",
    source: "Web Form",
    value: 2800,
    stage: "Contactado",
    created_at: "2026-06-27",
    messages: [
      { role: "user", content: "Hola, solicito información sobre flujos de automatización para inventario." },
      { role: "assistant", content: "Hola Antonio. Con n8n podemos automatizar tu base de datos con hojas de cálculo y enviarte alertas automáticas. Te contactaremos enseguida." }
    ]
  },
  {
    id: "3",
    name: "Carmen Ruiz",
    company: "Estudio Carmen Ruiz",
    email: "info@carmenruiz.design",
    phone: "633 445 566",
    status: "Propuesta",
    source: "Chatbot IA",
    value: 3500,
    stage: "Propuesta Enviada",
    created_at: "2026-06-28",
    messages: [
      { role: "assistant", content: "¡Hola! ¿En qué te puedo asesorar hoy?" },
      { role: "user", content: "Quiero soluciones de inteligencia artificial para atender a mis clientes automáticamente." },
      { role: "assistant", content: "¡Excelente! Podemos diseñar un asistente inteligente personalizado con tus servicios. ¿Me dejas tu contacto para llamarte?" },
      { role: "user", content: "Carmen, info@carmenruiz.design, 633 445 566" },
      { role: "assistant", content: "¡Hecho Carmen! Te llamaremos en menos de 24 horas." }
    ]
  },
  {
    id: "4",
    name: "Manuel Gómez",
    company: "Restaurante El Patio",
    email: "manuel@elpatio.es",
    phone: "688 777 999",
    status: "Nuevo",
    source: "Web Form",
    value: 1500,
    stage: "Nuevo Lead",
    created_at: "2026-06-29",
    messages: []
  },
  {
    id: "5",
    name: "Lucía Fernández",
    company: "Clínica Dental DentalCumbres",
    email: "lucia@dentalcumbres.com",
    phone: "622 111 000",
    status: "Propuesta",
    source: "Chatbot IA",
    value: 4200,
    stage: "Negociación",
    created_at: "2026-06-29",
    messages: [
      { role: "assistant", content: "¡Hola! ¿Cómo podemos ayudarte?" },
      { role: "user", content: "Quiero una web para mi clínica con agenda de citas integrada y avisos automáticos." },
      { role: "assistant", content: "Eso automatizará muchísimo tu día a día. Por favor, facilítame tu correo." },
      { role: "user", content: "lucia@dentalcumbres.com y tel 622 111 000" }
    ]
  }
];

const DEFAULT_MEETINGS: Meeting[] = [
  {
    id: "m1",
    clientName: "Carmen Ruiz",
    title: "Presentación Propuesta IA",
    date: "2026-07-02",
    time: "10:30",
    type: "Videollamada",
    status: "Pendiente"
  },
  {
    id: "m2",
    clientName: "Antonio López",
    title: "Consultoría Automatización",
    date: "2026-07-03",
    time: "12:00",
    type: "Llamada telefónica",
    status: "Pendiente"
  },
  {
    id: "m3",
    clientName: "María García",
    title: "Kickoff Proyecto Web",
    date: "2026-06-29",
    time: "17:00",
    type: "Presencial",
    status: "Completada"
  }
];

// Helper to check if localStorage is available
const isClient = typeof window !== "undefined";

export const getLeads = (): Lead[] => {
  if (!isClient) return DEFAULT_LEADS;
  const data = localStorage.getItem("iacm_leads");
  if (!data) {
    localStorage.setItem("iacm_leads", JSON.stringify(DEFAULT_LEADS));
    return DEFAULT_LEADS;
  }
  return JSON.parse(data);
};

export const saveLead = (lead: Omit<Lead, "id" | "created_at" | "messages">): Lead => {
  const leads = getLeads();
  const newLead: Lead = {
    ...lead,
    id: String(leads.length + 1),
    created_at: new Date().toISOString().split("T")[0],
    messages: []
  };
  const updated = [newLead, ...leads];
  if (isClient) {
    localStorage.setItem("iacm_leads", JSON.stringify(updated));
  }
  return newLead;
};

export const updateLeadsList = (updatedList: Lead[]) => {
  if (isClient) {
    localStorage.setItem("iacm_leads", JSON.stringify(updatedList));
  }
};

export const getMeetings = (): Meeting[] => {
  if (!isClient) return DEFAULT_MEETINGS;
  const data = localStorage.getItem("iacm_meetings");
  if (!data) {
    localStorage.setItem("iacm_meetings", JSON.stringify(DEFAULT_MEETINGS));
    return DEFAULT_MEETINGS;
  }
  return JSON.parse(data);
};

export const saveMeeting = (meeting: Omit<Meeting, "id" | "status">): Meeting => {
  const meetings = getMeetings();
  const newMeeting: Meeting = {
    ...meeting,
    id: `m${meetings.length + 1}`,
    status: "Pendiente"
  };
  const updated = [newMeeting, ...meetings];
  if (isClient) {
    localStorage.setItem("iacm_meetings", JSON.stringify(updated));
  }
  return newMeeting;
};

export const updateMeetingsList = (updatedList: Meeting[]) => {
  if (isClient) {
    localStorage.setItem("iacm_meetings", JSON.stringify(updatedList));
  }
};
