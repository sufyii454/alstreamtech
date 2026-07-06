import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Brain, Bot, Zap, Cloud, Code2, Smartphone, BarChart3,
  Sparkles, Building2, Stethoscope, Landmark, ShoppingBag, Truck, GraduationCap,
  ArrowRight, Cpu, Database, LineChart, Network, Server, Layers, Rocket,
  Workflow, MessageSquare, Globe, Settings, X, CheckCircle2, TrendingUp,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { useEffect, useState } from "react";
import { CTASection } from "../components/CTASection";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AI Development, Custom Software & Automation | ALStreamTech" },
      { name: "description", content: "End-to-end AI, custom software, web & mobile, chatbots, automation, cloud/DevOps and data analytics services engineered for enterprise scale." },
      { property: "og:title", content: "ALStreamTech Services" },
      { property: "og:description", content: "AI-powered software services from strategy to deployment." },
    ],
  }),
  component: Services,
});

type Service = {
  slug: string;
  icon: typeof Brain;
  name: string;
  summary: string;
  capabilities: string[];
  technologies: string[];
  industries: string[];
  featured?: boolean;
  visual: "ai" | "software" | "web" | "mobile" | "chatbot" | "automation" | "cloud" | "analytics";
};

const services: Service[] = [
  {
    slug: "ai-development", icon: Brain, featured: true, visual: "ai",
    name: "AI Development",
    summary: "Flagship offering. Custom AI agents, generative AI apps, ML models and vision systems engineered for production.",
    capabilities: ["AI Agents", "Generative AI", "Machine Learning", "NLP", "Recommendation Systems", "Predictive Analytics", "Computer Vision", "AI Integrations"],
    technologies: ["OpenAI", "Gemini", "Claude", "LangChain", "Python", "TensorFlow"],
    industries: ["Healthcare", "Finance", "Retail", "Manufacturing"],
  },
  {
    slug: "custom-software", icon: Code2, visual: "software",
    name: "Custom Software Development",
    summary: "Bespoke enterprise platforms, CRMs, ERPs and SaaS built around your exact workflows.",
    capabilities: ["Enterprise Platforms", "CRM Systems", "ERP Solutions", "SaaS Applications", "Internal Tools", "Workflow Platforms", "Customer Portals"],
    technologies: ["React", "Angular", "Node.js", ".NET", "Java", "PostgreSQL"],
    industries: ["Enterprise", "SaaS", "Logistics", "Healthcare"],
  },
  {
    slug: "web-applications", icon: Globe, visual: "web",
    name: "Web Application Development",
    summary: "Progressive web apps, portals and dashboards with lightning performance and modern UX.",
    capabilities: ["Progressive Web Apps", "Customer Portals", "SaaS Products", "Enterprise Dashboards", "Booking Systems", "E-Commerce Platforms"],
    technologies: ["React", "Next.js", "Vue.js", "Angular", "Node.js"],
    industries: ["SaaS", "Retail", "Media", "Education"],
  },
  {
    slug: "mobile-apps", icon: Smartphone, visual: "mobile",
    name: "Mobile App Development",
    summary: "Native and cross-platform mobile apps built for iOS and Android with native-grade UX.",
    capabilities: ["Android Apps", "iOS Apps", "Cross Platform", "Business Apps", "Customer Apps", "Enterprise Mobile"],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin"],
    industries: ["Consumer", "Fintech", "Health", "Enterprise"],
  },
  {
    slug: "chatbots", icon: Bot, featured: true, visual: "chatbot",
    name: "AI Chatbot Development",
    summary: "Conversational AI for support, sales, WhatsApp, internal assistants and knowledge search.",
    capabilities: ["Website Chatbots", "WhatsApp Bots", "Support Bots", "Internal AI Assistants", "Sales Chatbots", "Knowledge Base Bots"],
    technologies: ["GPT", "Gemini", "LangChain", "Vector Databases"],
    industries: ["Ecommerce", "SaaS", "Banking", "Telecom"],
  },
  {
    slug: "automation", icon: Zap, visual: "automation",
    name: "Business Automation",
    summary: "Intelligent workflow automation across sales, ops, finance and support — eliminate repetitive work.",
    capabilities: ["Process Automation", "CRM Automation", "Document Automation", "Email Automation", "Approval Workflows", "Operational Automation"],
    technologies: ["n8n", "Zapier", "Temporal", "Python", "REST APIs"],
    industries: ["Operations", "Finance", "HR", "Logistics"],
  },
  {
    slug: "cloud-devops", icon: Cloud, visual: "cloud",
    name: "Cloud & DevOps",
    summary: "Cloud-native architecture, CI/CD, infrastructure-as-code and 24/7 monitoring.",
    capabilities: ["AWS Solutions", "Azure Solutions", "CI/CD Pipelines", "Infrastructure Automation", "Monitoring", "Security"],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    industries: ["Enterprise", "SaaS", "Fintech", "Streaming"],
  },
  {
    slug: "data-analytics", icon: BarChart3, visual: "analytics",
    name: "Data & Analytics",
    summary: "Modern data platforms, BI dashboards, warehousing and predictive analytics.",
    capabilities: ["Business Intelligence", "Reporting Dashboards", "Data Warehousing", "Predictive Analytics", "Data Visualization", "KPI Monitoring"],
    technologies: ["Power BI", "Tableau", "Python", "SQL", "Snowflake"],
    industries: ["Retail", "Finance", "Media", "Healthcare"],
  },
];

function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <>
      <ServicesHero />

      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="What we offer"
          title={<>Eight services. <span className="text-gradient">One integrated team.</span></>}
          description="Hover any card for a quick view. Click Learn more for a full breakdown."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} onOpen={() => setActive(s)} />
          ))}
        </div>
      </section>

      <ComparisonSection />
      <IndustriesSection />
      <TechEcosystem />

      <QuickPanel service={active} onClose={() => setActive(null)} />

      <FinalCTA />
    </>
  );
}

/* ---------------- Hero ---------------- */

function ServicesHero() {
  return (
    <PageHero
      eyebrow="Our Services"
      title={<>Comprehensive AI & <span className="text-gradient">Software Development</span> Solutions</>}
      subtitle="We provide end-to-end technology solutions that help businesses innovate, automate, and scale — from AI development and software engineering to cloud, automation and advanced analytics."
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105">
          Schedule Consultation <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/case-studies" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10">
          View Case Studies
        </Link>
      </div>
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block">
        <HeroVisual />
      </div>
    </PageHero>
  );
}

function HeroVisual() {
  const icons = [
    { Icon: Brain, x: 50, y: 10 }, { Icon: Cpu, x: 90, y: 40 },
    { Icon: Database, x: 80, y: 85 }, { Icon: Cloud, x: 20, y: 85 },
    { Icon: Bot, x: 10, y: 40 }, { Icon: Network, x: 50, y: 55 },
  ];
  return (
    <div className="relative h-[420px] w-[420px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="hg" x1="0" x2="1"><stop offset="0" stopColor="#15abe6" /><stop offset="1" stopColor="#7bd4f5" /></linearGradient>
        </defs>
        {icons.map((a, i) => icons.slice(i + 1).map((b, j) => (
          <line key={`${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="url(#hg)" strokeWidth="0.2" opacity="0.35" />
        )))}
        <circle cx="50" cy="55" r="18" fill="none" stroke="#15abe6" strokeWidth="0.3" opacity="0.5" className="animate-pulse-glow" />
        <circle cx="50" cy="55" r="28" fill="none" stroke="#15abe6" strokeWidth="0.2" opacity="0.3" />
      </svg>
      {icons.map(({ Icon, x, y }, i) => (
        <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2 animate-float-slow" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.5}s` }}>
          <div className="glass-strong flex h-14 w-14 items-center justify-center rounded-2xl shadow-glow">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Service Card ---------------- */

function ServiceCard({ service, index, onOpen }: { service: Service; index: number; onOpen: () => void }) {
  const Icon = service.icon;
  const featured = service.featured;
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2 ${featured ? "lg:col-span-2 lg:row-span-1" : ""}`}
      style={{ animation: `fade-up 0.7s ease-out both`, animationDelay: `${index * 70}ms` }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-primary/20 opacity-40 transition group-hover:opacity-100" />
      <div className="glass-strong relative flex h-full flex-col rounded-3xl p-6">
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition duration-500 group-hover:bg-primary/40" />

        <div className="relative flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow transition group-hover:scale-110 group-hover:rotate-6">
            <Icon className="h-7 w-7 text-primary-foreground" />
          </div>
          {featured && (
            <span className="glass rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">Featured</span>
          )}
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold md:text-2xl">{service.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>

        {featured && <div className="mt-5"><ServiceVisual kind={service.visual} /></div>}

        <div className="mt-5">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Capabilities</div>
          <div className="flex flex-wrap gap-1.5">
            {service.capabilities.slice(0, featured ? 8 : 4).map(c => (
              <span key={c} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-foreground/80">{c}</span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Tech</div>
          <div className="flex flex-wrap gap-1.5">
            {service.technologies.map(t => (
              <span key={t} className="glass rounded-full px-2.5 py-1 text-[11px] font-medium text-primary transition group-hover:bg-primary/10">{t}</span>
            ))}
          </div>
        </div>

        <button onClick={onOpen} className="mt-auto pt-5 text-left">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
            Learn more <ArrowRight className="h-4 w-4" />
          </span>
        </button>
      </div>
    </div>
  );
}

/* ---------------- Service Visuals ---------------- */

function ServiceVisual({ kind }: { kind: Service["visual"] }) {
  if (kind === "ai") return <NeuralViz />;
  if (kind === "chatbot") return <ChatViz />;
  if (kind === "automation") return <WorkflowViz />;
  if (kind === "cloud") return <CloudViz />;
  if (kind === "analytics") return <AnalyticsViz />;
  if (kind === "mobile") return <MobileViz />;
  if (kind === "web") return <WebViz />;
  return <ArchViz />;
}

function NeuralViz() {
  const nodes = [
    [10, 25], [10, 50], [10, 75],
    [45, 15], [45, 40], [45, 60], [45, 85],
    [80, 30], [80, 70],
  ];
  return (
    <div className="glass overflow-hidden rounded-2xl p-3">
      <svg viewBox="0 0 100 100" className="h-32 w-full">
        {nodes.slice(0, 3).map((a, i) => nodes.slice(3, 7).map((b, j) => (
          <line key={`a${i}-${j}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#15abe6" strokeWidth="0.3" opacity="0.4" />
        )))}
        {nodes.slice(3, 7).map((a, i) => nodes.slice(7).map((b, j) => (
          <line key={`b${i}-${j}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#15abe6" strokeWidth="0.3" opacity="0.4" />
        )))}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2" fill="#15abe6">
            <animate attributeName="r" values="2;3.2;2" dur="2.5s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    </div>
  );
}

function ChatViz() {
  return (
    <div className="glass space-y-2 rounded-2xl p-3">
      <div className="ml-auto max-w-[70%] rounded-2xl rounded-br-sm bg-primary/20 px-3 py-1.5 text-[11px]">How can AI help my team?</div>
      <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white/5 px-3 py-1.5 text-[11px]">
        <span className="inline-flex gap-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" style={{ animationDelay: "0ms" }} />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" style={{ animationDelay: "150ms" }} />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" style={{ animationDelay: "300ms" }} />
        </span>
      </div>
    </div>
  );
}

function WorkflowViz() {
  const steps = ["Lead", "CRM", "Email", "Task", "Report"];
  return (
    <div className="glass rounded-2xl p-3">
      <div className="flex items-center justify-between gap-1">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-1">
            <div className="flex h-8 flex-1 items-center justify-center rounded-lg bg-primary/10 text-[10px] font-medium text-primary animate-pulse" style={{ animationDelay: `${i * 400}ms` }}>{s}</div>
            {i < steps.length - 1 && <ArrowRight className="h-3 w-3 shrink-0 text-primary/60" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function CloudViz() {
  return (
    <div className="glass rounded-2xl p-3">
      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        {[
          { i: Globe, l: "Users" }, { i: Network, l: "LB" }, { i: Server, l: "App" },
          { i: Database, l: "DB" }, { i: Cloud, l: "CDN" }, { i: LineChart, l: "Monitor" },
        ].map(({ i: I, l }, k) => (
          <div key={l} className="flex flex-col items-center gap-1 rounded-lg bg-white/5 py-2 animate-pulse" style={{ animationDelay: `${k * 200}ms` }}>
            <I className="h-4 w-4 text-primary" /><span>{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsViz() {
  const bars = [40, 65, 50, 80, 60, 90];
  return (
    <div className="glass rounded-2xl p-3">
      <div className="flex h-24 items-end gap-1.5">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary" style={{ height: `${h}%`, animation: `fade-up 0.8s ease-out both`, animationDelay: `${i * 100}ms` }} />
        ))}
      </div>
    </div>
  );
}

function MobileViz() {
  return (
    <div className="glass flex items-center justify-center rounded-2xl p-3">
      <div className="relative h-28 w-16 rounded-xl border border-white/20 bg-black/40 p-1.5">
        <div className="h-full w-full space-y-1 rounded-md bg-gradient-to-b from-primary/20 to-transparent p-1">
          <div className="h-2 w-3/4 rounded bg-primary/60 animate-pulse" />
          <div className="h-2 w-1/2 rounded bg-white/20" />
          <div className="h-6 rounded bg-white/10" />
          <div className="h-6 rounded bg-primary/30 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

function WebViz() {
  return (
    <div className="glass rounded-2xl p-3">
      <div className="rounded-lg border border-white/10 bg-black/30 p-2">
        <div className="mb-1.5 flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-destructive/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
        </div>
        <div className="grid grid-cols-3 gap-1">
          <div className="h-12 rounded bg-primary/20 animate-pulse" />
          <div className="col-span-2 h-12 rounded bg-white/5" />
          <div className="col-span-2 h-6 rounded bg-white/5" />
          <div className="h-6 rounded bg-primary/30 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

function ArchViz() {
  return (
    <div className="glass rounded-2xl p-3">
      <div className="grid grid-cols-4 gap-1.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex h-10 items-center justify-center rounded-lg bg-primary/10 animate-pulse" style={{ animationDelay: `${i * 150}ms` }}>
            <Layers className="h-4 w-4 text-primary" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Quick Panel ---------------- */

function QuickPanel({ service, onClose }: { service: Service | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!service) return null;
  const Icon = service.icon;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-md sm:items-center sm:p-6" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="glass-strong relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl p-8 sm:rounded-3xl" style={{ animation: "fade-up 0.4s ease-out both" }}>
        <button onClick={onClose} className="glass absolute right-4 top-4 rounded-full p-2 hover:bg-white/10"><X className="h-4 w-4" /></button>
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow">
            <Icon className="h-7 w-7 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">{service.name}</h3>
            <p className="mt-2 text-muted-foreground">{service.summary}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <PanelBlock title="Key Capabilities" items={service.capabilities} icon={CheckCircle2} />
          <PanelBlock title="Technology Stack" items={service.technologies} icon={Cpu} />
          <PanelBlock title="Industry Applications" items={service.industries} icon={Building2} />
          <PanelBlock title="Key Benefits" items={["Faster delivery", "Enterprise-grade security", "Scalable architecture", "Measurable ROI"]} icon={TrendingUp} />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow">
            Discuss this service <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/case-studies" className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-white/10">
            See related work
          </Link>
        </div>
      </div>
    </div>
  );
}

function PanelBlock({ title, items, icon: Icon }: { title: string; items: string[]; icon: typeof Brain }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
        <Icon className="h-4 w-4 text-primary" /> {title}
      </div>
      <ul className="space-y-1.5">
        {items.map(i => <li key={i} className="text-sm text-muted-foreground">• {i}</li>)}
      </ul>
    </div>
  );
}

/* ---------------- Comparison ---------------- */

const pillars = [
  { icon: Rocket, t: "Strategy", d: "Roadmaps, AI readiness assessments and technology audits." },
  { icon: Code2, t: "Development", d: "Custom platforms, SaaS, portals and enterprise tools." },
  { icon: Brain, t: "AI", d: "Agents, LLM apps, ML models and computer vision." },
  { icon: Workflow, t: "Automation", d: "Process, CRM, document and approval automation." },
  { icon: Cloud, t: "Cloud", d: "AWS, Azure, GCP, Kubernetes and IaC." },
  { icon: BarChart3, t: "Analytics", d: "BI dashboards, warehouses and predictive analytics." },
];

function ComparisonSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="What we deliver" title={<>End-to-end <span className="text-gradient">delivery pillars</span></>} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {pillars.map(({ icon: Icon, t, d }, i) => (
          <div key={t} className="glass group relative overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1 hover:border-primary/40"
            style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 80}ms` }}>
            <div className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
            <Icon className="h-6 w-6 text-primary transition group-hover:scale-110" />
            <div className="mt-3 font-display font-semibold">{t}</div>
            <p className="mt-1 text-xs text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Industries ---------------- */

const industries = [
  { icon: Stethoscope, name: "Healthcare", items: ["AI Diagnostics", "Patient Portals", "Data Analytics"] },
  { icon: Landmark, name: "Finance", items: ["Fraud Detection", "Process Automation", "Business Analytics"] },
  { icon: ShoppingBag, name: "Retail", items: ["Recommendation Engines", "AI Chatbots", "E-Commerce Platforms"] },
  { icon: Truck, name: "Logistics", items: ["Workflow Automation", "Tracking Systems", "Predictive Analytics"] },
  { icon: GraduationCap, name: "Education", items: ["Learning Platforms", "AI Tutors", "Student Analytics"] },
  { icon: Building2, name: "Real Estate", items: ["Property Management", "AI Insights", "CRM Automation"] },
];

function IndustriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Industries"
        title={<>Solutions tailored for <span className="text-gradient">every industry</span></>}
        description="Our services adapt to the workflows, compliance and outcomes each industry demands."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.map(({ icon: Icon, name, items }, i) => (
          <div key={name} className="group relative overflow-hidden rounded-3xl p-[1px] transition hover:-translate-y-1"
            style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 80}ms` }}>
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent opacity-40 transition group-hover:opacity-100" />
            <div className="glass-strong relative h-full rounded-3xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:scale-110">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="mt-4 font-display text-xl font-semibold">{name}</div>
              <ul className="mt-3 space-y-1.5">
                {items.map(x => (
                  <li key={x} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Tech Ecosystem ---------------- */

const techClusters: { title: string; icon: typeof Brain; items: string[] }[] = [
  { title: "AI", icon: Brain, items: ["OpenAI", "Gemini", "Claude", "LangChain"] },
  { title: "Frontend", icon: Sparkles, items: ["React", "Next.js", "Angular", "Vue.js"] },
  { title: "Backend", icon: Server, items: ["Node.js", "Python", ".NET", "Java"] },
  { title: "Cloud", icon: Cloud, items: ["AWS", "Azure", "Google Cloud"] },
  { title: "DevOps", icon: Settings, items: ["Docker", "Kubernetes", "Terraform", "Jenkins"] },
  { title: "Database", icon: Database, items: ["PostgreSQL", "MongoDB", "SQL Server", "Redis"] },
  { title: "Analytics", icon: BarChart3, items: ["Power BI", "Tableau", "Snowflake"] },
];

function TechEcosystem() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Ecosystem"
        title={<>Our <span className="text-gradient">technology ecosystem</span></>}
        description="A curated stack of the AI, cloud, data and development platforms we use in production."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {techClusters.map(({ title, icon: Icon, items }, i) => (
          <div key={title} className="glass rounded-2xl p-6" style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 60}ms` }}>
            <div className="mb-4 flex items-center gap-2">
              <Icon className="h-5 w-5 text-primary" />
              <div className="font-display font-semibold">{title}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((t, k) => (
                <span key={t} className="glass rounded-full px-3 py-1.5 text-xs font-medium text-primary animate-float-slow transition hover:bg-primary/15 hover:shadow-glow" style={{ animationDelay: `${k * 0.4}s` }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24">
      <div className="glass-strong relative overflow-hidden rounded-3xl p-10 md:p-16">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
        <div className="pointer-events-none absolute -right-32 -bottom-32 h-80 w-80 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
            <MessageSquare className="h-3.5 w-3.5" /> Let's talk
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">
            Ready to <span className="text-gradient">Transform Your Business?</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Discuss your project requirements with our experts and discover how AI-powered software, automation and modern digital solutions can accelerate your business growth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105">
              Schedule Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10">
              Get a Free Quote
            </Link>
            <Link to="/case-studies" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
