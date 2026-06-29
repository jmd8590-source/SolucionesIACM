"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  TrendingUp,
  CalendarDays,
  MessageSquare,
  Search,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowRight,
  TrendingDown,
  Building,
  Mail,
  Phone,
  LayoutDashboard,
  KanbanSquare,
  CalendarRange,
  Bot,
  Settings,
  ArrowLeftRight,
  Sparkles,
  ArrowLeft,
  X,
  MapPin,
  ChevronRight,
} from "lucide-react";

// MOCK CLIENTS & LEADS DATA WITH FULL CONVERSATIONS
const initialClients = [
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

const initialMeetings = [
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

export default function CRMAdminPage() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "clientes" | "kanban" | "reuniones" | "conversaciones">("dashboard");
  const [clients, setClients] = useState(initialClients);
  const [meetings, setMeetings] = useState(initialMeetings);
  
  // Search and filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");

  // Form Modals State
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingClient, setEditingClient] = useState<any>(null);

  // New Client Form Data
  const [newClientName, setNewClientName] = useState("");
  const [newClientCompany, setNewClientCompany] = useState("");
  const [newClientEmail, setNewClientEmail] = useState("");
  const [newClientPhone, setNewClientPhone] = useState("");
  const [newClientStatus, setNewClientStatus] = useState("Nuevo");
  const [newClientValue, setNewClientValue] = useState("");
  const [newClientStage, setNewClientStage] = useState("Nuevo Lead");

  // Selected client for conversation history
  const [selectedClientConv, setSelectedClientConv] = useState(clients[0]);

  // Handle client creations
  const handleAddClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName) return;

    const created: any = {
      id: String(clients.length + 1),
      name: newClientName,
      company: newClientCompany,
      email: newClientEmail,
      phone: newClientPhone,
      status: newClientStatus,
      source: "Manual",
      value: Number(newClientValue) || 0,
      stage: newClientStage,
      created_at: new Date().toISOString().split("T")[0],
      messages: []
    };

    setClients([created, ...clients]);
    setShowAddModal(false);
    resetForm();
  };

  // Handle client updates
  const handleEditClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingClient) return;

    setClients(
      clients.map((c) =>
        c.id === editingClient.id ? { ...editingClient, value: Number(editingClient.value) || 0 } : c
      )
    );
    setEditingClient(null);
  };

  // Handle lead deletion
  const handleDeleteClient = (id: string) => {
    if (confirm("¿Estás seguro de eliminar este lead?")) {
      setClients(clients.filter((c) => c.id !== id));
      if (selectedClientConv.id === id) {
        setSelectedClientConv(clients[0]);
      }
    }
  };

  // Reset form inputs
  const resetForm = () => {
    setNewClientName("");
    setNewClientCompany("");
    setNewClientEmail("");
    setNewClientPhone("");
    setNewClientStatus("Nuevo");
    setNewClientValue("");
    setNewClientStage("Nuevo Lead");
  };

  // Update Kanban Pipeline stages
  const updatePipelineStage = (clientId: string, direction: "left" | "right") => {
    const stages = ["Nuevo Lead", "Contactado", "Propuesta Enviada", "Negociación", "Cierre Ganado"];
    setClients(
      clients.map((c) => {
        if (c.id !== clientId) return c;
        const currentIndex = stages.indexOf(c.stage);
        let nextIndex = currentIndex;
        if (direction === "right" && currentIndex < stages.length - 1) {
          nextIndex += 1;
        } else if (direction === "left" && currentIndex > 0) {
          nextIndex -= 1;
        }
        const newStage = stages[nextIndex];
        // Sincronizar status semántico
        let newStatus = c.status;
        if (newStage === "Cierre Ganado") newStatus = "Ganado";
        else if (newStage === "Nuevo Lead") newStatus = "Nuevo";
        else if (newStage === "Propuesta Enviada" || newStage === "Negociación") newStatus = "Propuesta";
        else if (newStage === "Contactado") newStatus = "Contactado";

        return { ...c, stage: newStage, status: newStatus };
      })
    );
  };

  // Filter clients
  const filteredClients = clients.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.company && c.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "Todos" || c.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const totalLeads = clients.length;
  const totalValue = clients.reduce((acc, c) => acc + c.value, 0);
  const wonValue = clients.filter((c) => c.status === "Ganado").reduce((acc, c) => acc + c.value, 0);
  const pendingMeetingsCount = meetings.filter((m) => m.status === "Pendiente").length;

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800 antialiased" id="admin-crm-dashboard">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col border-r border-slate-800" role="navigation" aria-label="Navegación Admin">
        {/* Brand header */}
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <Bot size={24} className="text-blue-500" />
          <div>
            <span className="font-bold text-base tracking-tight">SolucionesIACM</span>
            <span className="block text-[10px] text-blue-400 font-semibold tracking-wider uppercase">CRM Panel</span>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 p-4 space-y-1.5">
          {[
            { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
            { id: "clientes", label: "Clientes / Leads", icon: Users },
            { id: "kanban", label: "Pipeline (Kanban)", icon: KanbanSquare },
            { id: "reuniones", label: "Reuniones", icon: CalendarRange },
            { id: "conversaciones", label: "Conversaciones IA", icon: MessageSquare },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-900/10"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-semibold transition-all"
            id="back-to-web-button"
          >
            <ArrowLeft size={14} />
            Volver a la Web pública
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Header bar */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between shadow-xs">
          <div>
            <h1 className="text-xl font-bold text-slate-900 uppercase tracking-tight">
              {activeTab === "dashboard" && "Dashboard General"}
              {activeTab === "clientes" && "Gestión de Leads & Clientes"}
              {activeTab === "kanban" && "Pipeline de Ventas (Kanban)"}
              {activeTab === "reuniones" && "Agenda de Reuniones"}
              {activeTab === "conversaciones" && "Historial de Conversaciones IA"}
            </h1>
            <p className="text-xs text-slate-400 mt-1">SolucionesIACM CRM — Panel del Administrador</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            </span>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">Admin Conectado</span>
          </div>
        </header>

        {/* Content container */}
        <div className="p-8 flex-1 max-w-[1400px] w-full mx-auto">
          {/* TAB 1: DASHBOARD */}
          {activeTab === "dashboard" && (
            <div className="space-y-8 animate-fade-in">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Leads */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Leads totales</span>
                    <p className="text-3xl font-extrabold text-slate-900 mt-1">{totalLeads}</p>
                    <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5 mt-1">
                      <TrendingUp size={10} /> +12% este mes
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
                    <Users size={22} />
                  </div>
                </div>

                {/* Pipeline Value */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Valor total pipeline</span>
                    <p className="text-3xl font-extrabold text-slate-900 mt-1">€{totalValue.toLocaleString()}</p>
                    <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5 mt-1">
                      <TrendingUp size={10} /> +8.5% esta semana
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm">
                    <TrendingUp size={22} />
                  </div>
                </div>

                {/* Won Deals */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Ventas Cerradas</span>
                    <p className="text-3xl font-extrabold text-slate-900 mt-1">€{wonValue.toLocaleString()}</p>
                    <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5 mt-1">
                      <CheckCircle2 size={10} /> 100% de éxito
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm">
                    <CheckCircle2 size={22} />
                  </div>
                </div>

                {/* Meetings */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Reuniones pendientes</span>
                    <p className="text-3xl font-extrabold text-slate-900 mt-1">{pendingMeetingsCount}</p>
                    <span className="text-[10px] text-blue-500 font-bold flex items-center gap-0.5 mt-1">
                      <CalendarDays size={10} /> Próxima: 02 de Julio
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shadow-sm">
                    <CalendarDays size={22} />
                  </div>
                </div>
              </div>

              {/* Conversion charts & sources */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Conversion Pipeline progress */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs lg:col-span-2 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight">Embudo de Ventas (Pipeline)</h3>
                    <span className="text-xs text-slate-400">Distribución por fases</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { stage: "Nuevo Lead", count: clients.filter((c) => c.stage === "Nuevo Lead").length, color: "bg-blue-500" },
                      { stage: "Contactado", count: clients.filter((c) => c.stage === "Contactado").length, color: "bg-amber-500" },
                      { stage: "Propuesta Enviada", count: clients.filter((c) => c.stage === "Propuesta Enviada").length, color: "bg-purple-500" },
                      { stage: "Negociación", count: clients.filter((c) => c.stage === "Negociación").length, color: "bg-sky-500" },
                      { stage: "Cierre Ganado", count: clients.filter((c) => c.stage === "Cierre Ganado").length, color: "bg-emerald-500" },
                    ].map((s) => {
                      const percentage = totalLeads > 0 ? (s.count / totalLeads) * 100 : 0;
                      return (
                        <div key={s.stage} className="space-y-1.5">
                          <div className="flex justify-between text-xs font-semibold">
                            <span className="text-slate-600">{s.stage}</span>
                            <span className="text-slate-900">{s.count} ({Math.round(percentage)}%)</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2">
                            <div className={`h-2 rounded-full ${s.color}`} style={{ width: `${percentage}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Sources & Activity */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight">Canales de Adquisición</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { source: "Chatbot IA", count: clients.filter((c) => c.source === "Chatbot IA").length, color: "bg-gradient-to-r from-blue-500 to-purple-600" },
                      { source: "Web Form", count: clients.filter((c) => c.source === "Web Form").length, color: "bg-slate-700" },
                      { source: "Manual", count: clients.filter((c) => c.source === "Manual").length, color: "bg-slate-400" },
                    ].map((s) => {
                      const percentage = totalLeads > 0 ? (s.count / totalLeads) * 100 : 0;
                      return (
                        <div key={s.source} className="flex items-center justify-between gap-4">
                          <span className="text-xs font-semibold text-slate-600 w-24">{s.source}</span>
                          <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
                            <div className={`h-3 rounded-full ${s.color}`} style={{ width: `${percentage}%` }} />
                          </div>
                          <span className="text-xs font-bold text-slate-900 w-8 text-right">{s.count}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 border-t border-slate-100 text-center">
                    <p className="text-xs text-slate-400">
                      💡 El <strong className="text-blue-600">Chatbot IA</strong> ha capturado el{" "}
                      {Math.round((clients.filter((c) => c.source === "Chatbot IA").length / totalLeads) * 100)}% de los leads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CLIENTES CRUD */}
          {activeTab === "clientes" && (
            <div className="space-y-6 animate-fade-in">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                {/* Search / filters */}
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-80 bg-white rounded-xl border border-slate-200/80 shadow-xs px-3.5 py-2 flex items-center gap-2 focus-within:border-blue-400 transition-all">
                    <Search size={16} className="text-slate-400" />
                    <input
                      type="text"
                      placeholder="Buscar lead por nombre, empresa..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent outline-none text-sm w-full text-slate-900 placeholder:text-slate-400"
                      id="lead-search-input"
                    />
                  </div>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-white border border-slate-200/80 rounded-xl px-4 py-2 text-sm font-semibold outline-none focus:border-blue-400 shadow-xs"
                    id="lead-status-filter"
                  >
                    <option value="Todos">Todos los estados</option>
                    <option value="Nuevo">Nuevo</option>
                    <option value="Contactado">Contactado</option>
                    <option value="Propuesta">Propuesta</option>
                    <option value="Ganado">Ganado</option>
                    <option value="Perdido">Perdido</option>
                  </select>
                </div>

                {/* Add lead button */}
                <button
                  onClick={() => setShowAddModal(true)}
                  className="btn btn-primary btn-sm flex items-center gap-2 w-full sm:w-auto justify-center"
                  id="add-lead-button"
                >
                  <Plus size={16} />
                  Añadir Lead
                </button>
              </div>

              {/* Table List */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse" role="table">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                        <th className="py-4 px-6">Cliente</th>
                        <th className="py-4 px-6">Empresa</th>
                        <th className="py-4 px-6">Contacto</th>
                        <th className="py-4 px-6">Valor</th>
                        <th className="py-4 px-6">Canal</th>
                        <th className="py-4 px-6">Estado</th>
                        <th className="py-4 px-6 text-right">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {filteredClients.map((client) => (
                        <tr key={client.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-4 px-6">
                            <span className="font-bold text-slate-900 block">{client.name}</span>
                            <span className="text-[10px] text-slate-400 mt-0.5 block">Creado: {client.created_at}</span>
                          </td>
                          <td className="py-4 px-6 font-semibold text-slate-700">{client.company || "—"}</td>
                          <td className="py-4 px-6 space-y-1">
                            <span className="flex items-center gap-1.5 text-xs text-slate-500">
                              <Mail size={12} className="text-slate-400" />
                              {client.email}
                            </span>
                            {client.phone && (
                              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                                <Phone size={12} className="text-slate-400" />
                                {client.phone}
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-6 font-extrabold text-slate-900">€{client.value.toLocaleString()}</td>
                          <td className="py-4 px-6">
                            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${
                              client.source === "Chatbot IA"
                                ? "bg-purple-50 text-purple-700 border-purple-100"
                                : client.source === "Web Form"
                                ? "bg-blue-50 text-blue-700 border-blue-100"
                                : "bg-slate-100 text-slate-700 border-slate-200"
                            }`}>
                              {client.source === "Chatbot IA" ? <Bot size={12} /> : null}
                              {client.source}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
                              client.status === "Nuevo"
                                ? "bg-blue-50 text-blue-700 border-blue-100"
                                : client.status === "Contactado"
                                ? "bg-amber-50 text-amber-700 border-amber-100"
                                : client.status === "Propuesta"
                                ? "bg-purple-50 text-purple-700 border-purple-100"
                                : client.status === "Ganado"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                                : "bg-red-50 text-red-700 border-red-100"
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                client.status === "Nuevo"
                                  ? "bg-blue-500"
                                  : client.status === "Contactado"
                                  ? "bg-amber-500"
                                  : client.status === "Propuesta"
                                  ? "bg-purple-500"
                                  : client.status === "Ganado"
                                  ? "bg-emerald-500"
                                  : "bg-red-500"
                              }`} />
                              {client.status}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right space-x-1.5">
                            <button
                              onClick={() => setEditingClient(client)}
                              className="p-1.5 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors"
                              aria-label="Editar"
                            >
                              <Edit2 size={14} />
                            </button>
                            <button
                              onClick={() => handleDeleteClient(client.id)}
                              className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-slate-100 transition-colors"
                              aria-label="Eliminar"
                            >
                              <Trash2 size={14} />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredClients.length === 0 && (
                        <tr>
                          <td colSpan={7} className="py-12 text-center text-slate-400 font-medium">
                            No se han encontrado leads con los filtros aplicados.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PIPELINE KANBAN */}
          {activeTab === "kanban" && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 overflow-x-auto min-h-[500px] animate-fade-in" id="kanban-pipeline">
              {[
                { stage: "Nuevo Lead", color: "border-t-blue-500" },
                { stage: "Contactado", color: "border-t-amber-500" },
                { stage: "Propuesta Enviada", color: "border-t-purple-500" },
                { stage: "Negociación", color: "border-t-sky-500" },
                { stage: "Cierre Ganado", color: "border-t-emerald-500" },
              ].map((column) => {
                const stageClients = clients.filter((c) => c.stage === column.stage);
                return (
                  <div key={column.stage} className="bg-slate-100/70 border border-slate-200/50 rounded-2xl p-4 flex flex-col gap-3 min-w-[220px]">
                    {/* Header column */}
                    <div className={`border-t-4 ${column.color} pt-2 flex items-center justify-between`}>
                      <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">{column.stage}</span>
                      <span className="text-xs font-extrabold text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded-full">
                        {stageClients.length}
                      </span>
                    </div>

                    {/* Leads list */}
                    <div className="flex-1 space-y-3">
                      {stageClients.map((client) => (
                        <div
                          key={client.id}
                          className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all space-y-3 cursor-default"
                        >
                          <div>
                            <span className="font-bold text-slate-900 text-xs block">{client.name}</span>
                            <span className="text-[10px] text-slate-400 block mt-0.5">{client.company || "Pyme / Autónomo"}</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-xs font-extrabold text-slate-950">€{client.value}</span>
                            <span className="text-[9px] text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full uppercase font-semibold">
                              {client.source}
                            </span>
                          </div>

                          {/* Pipeline Shift Action buttons */}
                          <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                            <button
                              onClick={() => updatePipelineStage(client.id, "left")}
                              disabled={column.stage === "Nuevo Lead"}
                              className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-700 disabled:opacity-30"
                              aria-label="Mover a la izquierda"
                            >
                              <ArrowLeft size={12} />
                            </button>
                            <button
                              onClick={() => updatePipelineStage(client.id, "right")}
                              disabled={column.stage === "Cierre Ganado"}
                              className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-700 disabled:opacity-30"
                              aria-label="Mover a la derecha"
                            >
                              <ArrowRight size={12} />
                            </button>
                          </div>
                        </div>
                      ))}
                      {stageClients.length === 0 && (
                        <div className="h-full border border-dashed border-slate-200 rounded-xl flex items-center justify-center p-6 text-center">
                          <span className="text-[11px] text-slate-400 font-medium">Sin leads en esta fase</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 4: REUNIONES */}
          {activeTab === "reuniones" && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight mb-4">Agenda de próximas citas</h3>
                <div className="space-y-4">
                  {meetings.map((meeting) => (
                    <div
                      key={meeting.id}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-all"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/50 flex items-center justify-center text-blue-600 flex-shrink-0">
                          <CalendarDays size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{meeting.title}</p>
                          <p className="text-xs text-slate-400 mt-0.5">Cliente: <strong className="text-slate-600">{meeting.clientName}</strong></p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                        <span className="text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full">{meeting.date} a las {meeting.time}h</span>
                        <span className="text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full">{meeting.type}</span>
                        <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold ${
                          meeting.status === "Completada"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                            : "bg-amber-50 text-amber-700 border-amber-100"
                        }`}>
                          {meeting.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: CONVERSACIONES CHATBOT */}
          {activeTab === "conversaciones" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[550px] animate-fade-in" id="chat-transcripts-layout">
              {/* Clients selector list */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-y-auto p-4 space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-2 mb-3">Leads con chat</span>
                {clients.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedClientConv(c)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all ${
                      selectedClientConv.id === c.id
                        ? "bg-blue-50/50 border border-blue-200 text-blue-700"
                        : "border border-transparent text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <div>
                      <span className="font-bold text-xs text-slate-900 block">{c.name}</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">{c.company || "Pyme / Autónomo"}</span>
                    </div>
                    {c.messages.length > 0 && (
                      <span className="text-[10px] font-extrabold text-blue-600 bg-white border border-blue-100 px-2 py-0.5 rounded-full">
                        {c.messages.length} msg
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Chat Transcript Panel */}
              <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex flex-col overflow-hidden">
                {/* Header info */}
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{selectedClientConv.name}</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">Empresa: {selectedClientConv.company || "—"} | Canal: {selectedClientConv.source}</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                    Historial chatbot
                  </span>
                </div>

                {/* Transcripts bubbles */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/20">
                  {selectedClientConv.messages.length > 0 ? (
                    selectedClientConv.messages.map((msg, i) => {
                      const isAssistant = msg.role === "assistant";
                      return (
                        <div key={i} className={`flex gap-3 items-start ${isAssistant ? "" : "flex-row-reverse"}`}>
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold shadow-sm ${
                            isAssistant ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white" : "bg-white border border-slate-200 text-blue-600"
                          }`}>
                            {isAssistant ? <Bot size={14} /> : "U"}
                          </div>
                          <div className={`p-3.5 rounded-2xl text-xs leading-relaxed max-w-[70%] shadow-xs ${
                            isAssistant ? "bg-white text-slate-800 border border-slate-100" : "bg-blue-600 text-white font-medium"
                          }`}>
                            {msg.content}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 p-8">
                      <MessageSquare size={32} className="text-slate-300 mb-2" />
                      <p className="text-sm font-medium">Este lead no tiene interacciones registradas con el Chatbot IA.</p>
                      <p className="text-xs text-slate-300">Fue capturado de forma manual o a través del formulario de la web.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* MODAL: ADD CLIENT */}
      {showAddModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl border border-slate-100 animate-fade-in-up">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Añadir Nuevo Lead</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddClient} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Nombre completo *</label>
                  <input
                    type="text"
                    required
                    value={newClientName}
                    onChange={(e) => setNewClientName(e.target.value)}
                    placeholder="Nombre del cliente"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Empresa</label>
                  <input
                    type="text"
                    value={newClientCompany}
                    onChange={(e) => setNewClientCompany(e.target.value)}
                    placeholder="Empresa o negocio"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={newClientEmail}
                    onChange={(e) => setNewClientEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Teléfono</label>
                  <input
                    type="tel"
                    value={newClientPhone}
                    onChange={(e) => setNewClientPhone(e.target.value)}
                    placeholder="600 000 000"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Valor estimado (€)</label>
                  <input
                    type="number"
                    value={newClientValue}
                    onChange={(e) => setNewClientValue(e.target.value)}
                    placeholder="2500"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Fase Pipeline</label>
                  <select
                    value={newClientStage}
                    onChange={(e) => {
                      setNewClientStage(e.target.value);
                      // Sincronizar status semántico
                      if (e.target.value === "Cierre Ganado") setNewClientStatus("Ganado");
                      else if (e.target.value === "Nuevo Lead") setNewClientStatus("Nuevo");
                      else if (e.target.value === "Propuesta Enviada" || e.target.value === "Negociación") setNewClientStatus("Propuesta");
                      else if (e.target.value === "Contactado") setNewClientStatus("Contactado");
                    }}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400 bg-white"
                  >
                    <option>Nuevo Lead</option>
                    <option>Contactado</option>
                    <option>Propuesta Enviada</option>
                    <option>Negociación</option>
                    <option>Cierre Ganado</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-2.5">
                <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary btn-sm">
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary btn-sm">
                  Guardar Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: EDIT CLIENT */}
      {editingClient && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl border border-slate-100 animate-fade-in-up">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Editar Lead</h3>
              <button onClick={() => setEditingClient(null)} className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleEditClient} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Nombre completo</label>
                  <input
                    type="text"
                    required
                    value={editingClient.name}
                    onChange={(e) => setEditingClient({ ...editingClient, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Empresa</label>
                  <input
                    type="text"
                    value={editingClient.company}
                    onChange={(e) => setEditingClient({ ...editingClient, company: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={editingClient.email}
                    onChange={(e) => setEditingClient({ ...editingClient, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Teléfono</label>
                  <input
                    type="tel"
                    value={editingClient.phone}
                    onChange={(e) => setEditingClient({ ...editingClient, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Valor estimado (€)</label>
                  <input
                    type="number"
                    value={editingClient.value}
                    onChange={(e) => setEditingClient({ ...editingClient, value: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Estado</label>
                  <select
                    value={editingClient.status}
                    onChange={(e) => {
                      // Sincronizar pipeline stage semántico
                      let newStage = editingClient.stage;
                      if (e.target.value === "Ganado") newStage = "Cierre Ganado";
                      else if (e.target.value === "Nuevo") newStage = "Nuevo Lead";
                      else if (e.target.value === "Contactado") newStage = "Contactado";
                      else if (e.target.value === "Propuesta") newStage = "Propuesta Enviada";

                      setEditingClient({ ...editingClient, status: e.target.value, stage: newStage });
                    }}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400 bg-white"
                  >
                    <option value="Nuevo">Nuevo</option>
                    <option value="Contactado">Contactado</option>
                    <option value="Propuesta">Propuesta</option>
                    <option value="Ganado">Ganado</option>
                    <option value="Perdido">Perdido</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-2.5">
                <button type="button" onClick={() => setEditingClient(null)} className="btn btn-secondary btn-sm">
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary btn-sm">
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
