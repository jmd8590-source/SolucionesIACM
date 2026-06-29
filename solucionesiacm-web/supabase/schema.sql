-- Esquema de Base de Datos PostgreSQL / Supabase para SolucionesIACM
-- Habilita RLS en todas las tablas para seguridad multi-tenant / admin

-- 1. TABLA DE CLIENTES (LEADS)
CREATE TABLE IF NOT EXISTS public.clients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(50),
    company VARCHAR(255),
    status VARCHAR(50) DEFAULT 'Nuevo' CHECK (status IN ('Nuevo', 'Contactado', 'Propuesta', 'Ganado', 'Perdido')),
    source VARCHAR(100) DEFAULT 'Web Form', -- 'Web Form', 'Chatbot IA', 'Manual'
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

-- Políticas de RLS (solo accesibles por administradores autenticados)
CREATE POLICY "Allow authenticated admins select" ON public.clients
    FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated admins insert" ON public.clients
    FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Allow authenticated admins update" ON public.clients
    FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Allow authenticated admins delete" ON public.clients
    FOR DELETE TO authenticated USING (true);


-- 2. TABLA DE OPORTUNIDADES COMERCIALES
CREATE TABLE IF NOT EXISTS public.opportunities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID REFERENCES public.clients(id) ON DELETE CASCADE NOT NULL,
    title VARCHAR(255) NOT NULL,
    value NUMERIC(10, 2) DEFAULT 0.00,
    stage VARCHAR(50) DEFAULT 'Nuevo Lead' CHECK (stage IN ('Nuevo Lead', 'Contactado', 'Propuesta Enviada', 'Negociación', 'Cierre Ganado')),
    probability INTEGER DEFAULT 10, -- porcentaje de éxito
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.opportunities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Opportunities admin access" ON public.opportunities
    FOR ALL TO authenticated USING (true) WITH CHECK (true);


-- 3. TABLA DE REUNIONES Y CITAS
CREATE TABLE IF NOT EXISTS public.meetings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID REFERENCES public.clients(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    duration INTEGER DEFAULT 30, -- en minutos
    type VARCHAR(50) DEFAULT 'Videollamada' CHECK (type IN ('Videollamada', 'Llamada telefónica', 'Presencial')),
    status VARCHAR(50) DEFAULT 'Pendiente' CHECK (status IN ('Pendiente', 'Completada', 'Reagendada', 'Cancelada')),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.meetings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Meetings admin access" ON public.meetings
    FOR ALL TO authenticated USING (true) WITH CHECK (true);


-- 4. TABLA DE HISTORIAL DE CONVERSACIONES DEL CHATBOT
CREATE TABLE IF NOT EXISTS public.conversations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID REFERENCES public.clients(id) ON DELETE SET NULL,
    chat_history JSONB NOT NULL DEFAULT '[]'::jsonb, -- array de mensajes [{role: 'user', content: '...'}, {role: 'assistant', content: '...'}]
    summary TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Conversations admin access" ON public.conversations
    FOR ALL TO authenticated USING (true) WITH CHECK (true);


-- 5. TABLA DE BLOG POSTS (SEO)
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    category VARCHAR(100) NOT NULL,
    status VARCHAR(50) DEFAULT 'Borrador' CHECK (status IN ('Borrador', 'Publicado')),
    author VARCHAR(100) DEFAULT 'SolucionesIACM',
    seo_meta JSONB DEFAULT '{"title": "", "description": "", "keywords": []}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    published_at TIMESTAMP WITH TIME ZONE
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Los posts publicados son visibles para todo el mundo (anónimo/público)
CREATE POLICY "Allow public read published posts" ON public.blog_posts
    FOR SELECT TO anon, authenticated USING (status = 'Publicado');

-- Control total para administradores
CREATE POLICY "Posts admin access" ON public.blog_posts
    FOR ALL TO authenticated USING (true) WITH CHECK (true);


-- 6. TRIGGERS Y FUNCIONES DE AUTO-UPDATE TIMESTAMP
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_clients_modtime BEFORE UPDATE ON public.clients FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
CREATE TRIGGER update_opportunities_modtime BEFORE UPDATE ON public.opportunities FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
CREATE TRIGGER update_conversations_modtime BEFORE UPDATE ON public.conversations FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
