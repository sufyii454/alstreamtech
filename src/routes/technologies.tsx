import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Brain,
  Server,
  Layout,
  Smartphone,
  Cloud,
  GitBranch,
  Database,
  Cpu,
  ChevronDown,
  ArrowRight,
  Shield,
  Sparkles,
  Zap,
  Layers,
  Repeat,
  LifeBuoy,
  Rocket,
  Network,
} from "lucide-react";
import { ParticleNetwork } from "../components/ParticleNetwork";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Modern Technology Stack — AI, Cloud & Software | ALStreamTech" },
      { name: "description", content: "Cutting-edge AI, cloud, backend, frontend, mobile, DevOps and database technologies powering scalable, secure enterprise software." },
      { property: "og:title", content: "Technologies — ALStreamTech" },
      { property: "og:description", content: "The modern AI-first stack we build with." },
    ],
  }),
  component: Technologies,
});

// ---------------- Data ----------------

type Category = {
  key: string;
  title: string;
  icon: any;
  overview: string;
  tech: string[];
  solutions: string[];
  flow: string[];
  gradient: string;
};

const categories: Category[] = [
  {
    key: "ai",
    title: "Artificial Intelligence & Generative AI",
    icon: Brain,
    overview: "LLM-powered assistants, agents, and knowledge systems that solve real business problems.",
    tech: ["OpenAI GPT", "Gemini", "LangChain"],
    solutions: ["AI Chatbots", "AI Agents", "Document Intelligence", "AI Assistants", "Knowledge Base Systems", "AI Automation"],
    flow: ["Customer", "AI Assistant", "OpenAI GPT", "Knowledge Base", "Business Response"],
    gradient: "from-sky-500/30 to-cyan-400/10",
  },
  {
    key: "backend",
    title: "Backend Development",
    icon: Server,
    overview: "Robust APIs, microservices and platforms engineered to scale.",
    tech: ["Python", "Node.js"],
    solutions: ["APIs", "Business Platforms", "SaaS Products", "Automation Systems", "AI Applications"],
    flow: ["Frontend", "API Gateway", "Microservices", "Database", "Cloud"],
    gradient: "from-emerald-500/30 to-teal-400/10",
  },
  {
    key: "frontend",
    title: "Frontend Development",
    icon: Layout,
    overview: "Beautiful, fast, accessible interfaces that convert.",
    tech: ["React", "Next.js", "Angular"],
    solutions: ["Business Websites", "Enterprise Dashboards", "SaaS Platforms", "Customer Portals", "Web Applications"],
    flow: ["Design", "Components", "State", "API", "User"],
    gradient: "from-fuchsia-500/30 to-pink-400/10",
  },
  {
    key: "mobile",
    title: "Mobile Development",
    icon: Smartphone,
    overview: "Cross-platform mobile apps with native-grade performance.",
    tech: ["Flutter", "React Native"],
    solutions: ["Android Applications", "iOS Applications", "Cross-Platform Apps", "Enterprise Mobility", "Customer Applications"],
    flow: ["Design", "Build", "Test", "Publish", "Update"],
    gradient: "from-indigo-500/30 to-violet-400/10",
  },
  {
    key: "cloud",
    title: "Cloud Platforms",
    icon: Cloud,
    overview: "Cloud-native infrastructure for AI, data and mission-critical apps.",
    tech: ["AWS", "Azure"],
    solutions: ["Cloud Infrastructure", "AI Hosting", "Enterprise Solutions", "Disaster Recovery", "Scalable Applications"],
    flow: ["Users", "Load Balancer", "Cloud Services", "Databases", "Analytics"],
    gradient: "from-blue-500/30 to-sky-400/10",
  },
  {
    key: "devops",
    title: "DevOps & Infrastructure",
    icon: GitBranch,
    overview: "Automated pipelines, containers and orchestration for continuous delivery.",
    tech: ["Docker", "Kubernetes"],
    solutions: ["Containerized Applications", "CI/CD Pipelines", "Auto Scaling", "Infrastructure Automation", "High Availability"],
    flow: ["Developer", "Git", "CI/CD", "Docker", "Kubernetes", "Production"],
    gradient: "from-amber-500/30 to-orange-400/10",
  },
  {
    key: "db",
    title: "Databases & Storage",
    icon: Database,
    overview: "SQL, NoSQL and real-time data platforms for AI and business apps.",
    tech: ["PostgreSQL", "MongoDB", "Firebase", "Supabase"],
    solutions: ["Business Applications", "AI Knowledge Bases", "Analytics Platforms", "Mobile Applications", "Customer Portals"],
    flow: ["App", "ORM", "Database", "Cache", "Analytics"],
    gradient: "from-purple-500/30 to-fuchsia-400/10",
  },
];

const allTech = [
  { name: "OpenAI GPT", cat: "AI", desc: "Frontier LLMs for chat, agents and reasoning.", uses: ["Chatbots", "Agents", "Content"], services: ["AI Assistants", "Automation"], projects: ["Support Copilot"] },
  { name: "Gemini", cat: "AI", desc: "Multimodal foundation models by Google.", uses: ["Vision", "Chat", "Reasoning"], services: ["AI Products"], projects: ["Document AI"] },
  { name: "LangChain", cat: "AI", desc: "Framework for building LLM apps and agents.", uses: ["RAG", "Agents", "Workflows"], services: ["AI Platforms"], projects: ["Knowledge Base"] },
  { name: "Python", cat: "Backend", desc: "AI, data and backend workhorse.", uses: ["APIs", "ML", "Automation"], services: ["Backend"], projects: ["Data Platform"] },
  { name: "Node.js", cat: "Backend", desc: "High-throughput JS runtime for APIs.", uses: ["APIs", "Realtime"], services: ["Backend"], projects: ["SaaS API"] },
  { name: "React", cat: "Frontend", desc: "Component-driven UI library.", uses: ["SPA", "Dashboards"], services: ["Web Apps"], projects: ["Enterprise Dashboard"] },
  { name: "Next.js", cat: "Frontend", desc: "React framework with SSR & edge.", uses: ["Marketing", "SaaS"], services: ["Web Apps"], projects: ["Marketing Site"] },
  { name: "Angular", cat: "Frontend", desc: "Enterprise TypeScript framework.", uses: ["Enterprise", "Portals"], services: ["Web Apps"], projects: ["Admin Portal"] },
  { name: "Flutter", cat: "Mobile", desc: "Beautiful cross-platform apps.", uses: ["iOS", "Android"], services: ["Mobile"], projects: ["Consumer App"] },
  { name: "React Native", cat: "Mobile", desc: "Native mobile with React.", uses: ["iOS", "Android"], services: ["Mobile"], projects: ["Field App"] },
  { name: "AWS", cat: "Cloud", desc: "Broadest cloud platform.", uses: ["Compute", "AI", "Data"], services: ["Cloud"], projects: ["AI Hosting"] },
  { name: "Azure", cat: "Cloud", desc: "Enterprise cloud with OpenAI.", uses: ["AI", "Enterprise"], services: ["Cloud"], projects: ["OpenAI Deploy"] },
  { name: "Docker", cat: "DevOps", desc: "Container packaging standard.", uses: ["Packaging", "CI/CD"], services: ["DevOps"], projects: ["Containerization"] },
  { name: "Kubernetes", cat: "DevOps", desc: "Container orchestration at scale.", uses: ["Orchestration", "Scaling"], services: ["DevOps"], projects: ["K8s Migration"] },
  { name: "PostgreSQL", cat: "Database", desc: "Powerful open-source SQL.", uses: ["OLTP", "Analytics"], services: ["Data"], projects: ["Core DB"] },
  { name: "MongoDB", cat: "Database", desc: "Flexible document database.", uses: ["Content", "Flexible schema"], services: ["Data"], projects: ["CMS"] },
  { name: "Firebase", cat: "Database", desc: "Realtime app backend.", uses: ["Realtime", "Mobile"], services: ["Data"], projects: ["Mobile Backend"] },
  { name: "Supabase", cat: "Database", desc: "Postgres + auth + realtime.", uses: ["Full-stack", "Auth"], services: ["Data"], projects: ["SaaS MVP"] },
];

const architectures = [
  { title: "AI Chatbot Architecture", steps: ["User", "AI Chatbot", "OpenAI GPT", "Knowledge Base", "Response"] },
  { title: "SaaS Platform Architecture", steps: ["Frontend", "Backend API", "Authentication", "Database", "Cloud Infrastructure"] },
  { title: "Enterprise Automation Architecture", steps: ["CRM", "Automation Engine", "AI Layer", "Analytics Dashboard"] },
];

const projects = [
  { title: "AI Customer Support Platform", stack: ["OpenAI GPT", "LangChain", "React", "Node.js", "AWS"], features: ["AI Chatbot", "Knowledge Search", "Analytics Dashboard"] },
  { title: "Smart CRM Platform", stack: ["React", "Node.js", "PostgreSQL", "Azure"], features: ["CRM", "Workflow Automation", "AI Insights"] },
  { title: "Mobile Business App", stack: ["Flutter", "Firebase", "AWS"], features: ["Cross-platform", "Push Notifications", "Analytics"] },
];

const workflow = ["Discovery", "Architecture", "Development", "Testing", "Deployment", "Monitoring"];

const metrics = [
  { label: "Technologies Used", value: 20, suffix: "+" },
  { label: "Projects Delivered", value: 100, suffix: "+" },
  { label: "AI Solutions Built", value: 50, suffix: "+" },
  { label: "Cloud Deployments", value: 100, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

const whyStack = [
  { icon: Shield, title: "Enterprise Security", desc: "Zero-trust, encryption everywhere, SOC 2 / HIPAA-ready." },
  { icon: Brain, title: "AI-First Development", desc: "LLMs, RAG and agents integrated from day one." },
  { icon: Cloud, title: "Cloud Native Architecture", desc: "Serverless, containers, elastic scaling." },
  { icon: Zap, title: "High Performance", desc: "Optimized for speed, latency and cost." },
  { icon: Layers, title: "Scalable Infrastructure", desc: "Grows from MVP to millions of users." },
  { icon: Repeat, title: "Continuous Integration", desc: "Automated pipelines with quality gates." },
  { icon: Sparkles, title: "Future-Proof Technologies", desc: "Modern, actively maintained ecosystems." },
  { icon: LifeBuoy, title: "Long-Term Support", desc: "We stay with you post-launch." },
];

const faqs = [
  { q: "Which AI models do you work with?", a: "OpenAI GPT-4/5, Gemini, Claude, Llama, Mistral and specialized open-source models via LangChain and custom orchestration." },
  { q: "Can you integrate with our existing technology stack?", a: "Yes — we integrate with CRMs, ERPs, data warehouses, SaaS tools and legacy systems via APIs, webhooks and event streams." },
  { q: "Do you build cloud-native applications?", a: "Absolutely. We design serverless-first, containerized architectures on AWS and Azure with autoscaling and full observability." },
  { q: "Which databases do you recommend?", a: "PostgreSQL for relational workloads, MongoDB for flexible documents, Supabase / Firebase for realtime apps, and vector DBs for AI." },
  { q: "Can you migrate legacy systems?", a: "Yes — we run structured discovery, incremental strangler-fig migrations and cutover with zero-downtime strategies." },
  { q: "Do you provide DevOps support?", a: "We set up CI/CD, IaC, container orchestration, monitoring and on-call runbooks tailored to your team." },
  { q: "Can you build enterprise-scale software?", a: "Yes — we deliver systems handling millions of users, high concurrency and strict compliance requirements." },
];

// ---------------- Components ----------------

function TechEcosystem() {
  const nodes = ["Artificial Intelligence", "Backend", "Frontend", "Mobile", "Cloud", "DevOps", "Databases"];
  const R = 42;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-[10%] rounded-full border border-primary/20" />
      <div className="absolute inset-[24%] rounded-full border border-white/5" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((_, i) => {
          const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(a) * R;
          const y = 50 + Math.sin(a) * R;
          return <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="url(#tg)" strokeWidth="0.3" opacity="0.6" />;
        })}
        <defs>
          <linearGradient id="tg" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(21,171,230,0.8)" />
            <stop offset="100%" stopColor="rgba(124,92,255,0.4)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-brand shadow-glow">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
          <Cpu className="relative h-10 w-10 text-primary-foreground" />
        </div>
        <div className="mt-2 text-center text-[10px] uppercase tracking-widest text-primary">AI Core</div>
      </div>

      {nodes.map((n, i) => {
        const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(a) * R;
        const y = 50 + Math.sin(a) * R;
        return (
          <div
            key={n}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%`, animation: `floatY 6s ease-in-out ${i * 0.3}s infinite` }}
          >
            <div className="glass flex items-center gap-1.5 whitespace-nowrap rounded-full border border-primary/20 px-3 py-1.5 text-[11px] font-medium shadow-glow backdrop-blur-xl">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              {n}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-black/20 p-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary-foreground/90 shadow-glow backdrop-blur"
              style={{ animation: `pulseNode 3s ease-in-out ${i * 0.4}s infinite` }}
            >
              {s}
            </div>
            {i < steps.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-primary/60" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoryCard({ cat, index }: { cat: Category; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const Icon = cat.icon;
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${cat.gradient} backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow`}>
      <div className="relative p-6">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:scale-110">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-white/10 p-2 text-muted-foreground transition hover:border-primary/40 hover:text-primary"
            aria-label="Toggle details"
          >
            <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold">{cat.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{cat.overview}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {cat.tech.map((t) => (
            <span key={t} className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] text-primary">{t}</span>
          ))}
        </div>

        <div className={`grid transition-all duration-500 ease-out ${open ? "mt-5 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}>
          <div className="overflow-hidden">
            <div className="space-y-4 border-t border-white/10 pt-4">
              <div>
                <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-primary">Solutions We Build</div>
                <ul className="grid grid-cols-1 gap-1 text-xs text-foreground/80 sm:grid-cols-2">
                  {cat.solutions.map((s) => (
                    <li key={s} className="flex items-start gap-1.5">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-primary">Interactive Flow</div>
                <FlowDiagram steps={cat.flow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechCard({ t }: { t: typeof allTech[number] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/30 via-transparent to-purple-500/30 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand shadow-glow transition group-hover:rotate-6">
            <Network className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">{t.cat}</span>
        </div>
        <div className="mt-3 font-display text-base font-semibold">{t.name}</div>
        <p className="mt-1 text-xs text-muted-foreground">{t.desc}</p>
        <div className="mt-3 space-y-1.5 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="text-[10px] uppercase tracking-widest text-primary">Use Cases</div>
          <div className="flex flex-wrap gap-1">
            {t.uses.map((u) => (
              <span key={u} className="rounded-full bg-white/5 px-2 py-0.5 text-[10px]">{u}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <div ref={ref} className="font-display text-4xl font-bold text-gradient md:text-5xl">{n}{suffix}</div>;
}

function PremiumButton({ variant = "primary", to = "/contact", children }: { variant?: "primary" | "secondary" | "outline"; to?: string; children: React.ReactNode }) {
  const base = "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5";
  const styles = {
    primary: "bg-gradient-brand text-primary-foreground shadow-glow hover:shadow-[0_0_40px_rgba(21,171,230,0.5)]",
    secondary: "bg-white/10 text-foreground backdrop-blur-xl border border-white/15 hover:bg-white/15 hover:border-primary/40",
    outline: "border border-primary/40 text-primary hover:bg-primary/10 hover:shadow-glow",
  }[variant];
  return (
    <Link to={to} className={`${base} ${styles}`}>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
      <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => (
        <div key={f.q} className="glass overflow-hidden rounded-2xl border border-white/10 transition hover:border-primary/30">
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
            <span className="font-medium">{f.q}</span>
            <ChevronDown className={`h-4 w-4 shrink-0 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
            <div className="overflow-hidden">
              <p className="px-5 pb-4 text-sm text-muted-foreground">{f.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function WorkflowTimeline() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        workflow.forEach((_, i) => setTimeout(() => setActive(i + 1), i * 400));
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="relative">
      <div className="absolute left-0 right-0 top-6 h-0.5 bg-white/10">
        <div className="h-full bg-gradient-brand transition-all duration-700" style={{ width: `${(active / workflow.length) * 100}%` }} />
      </div>
      <div className="relative grid grid-cols-3 gap-4 md:grid-cols-6">
        {workflow.map((w, i) => (
          <div key={w} className="flex flex-col items-center">
            <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-500 ${i < active ? "border-primary bg-gradient-brand text-primary-foreground shadow-glow" : "border-white/15 bg-black/40 text-muted-foreground"}`}>
              {i + 1}
            </div>
            <div className={`mt-3 text-center text-xs font-medium transition ${i < active ? "text-foreground" : "text-muted-foreground"}`}>{w}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------- Page ----------------

function Technologies() {
  return (
    <>
      <style>{`
        @keyframes floatY {
          0%,100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-6px); }
        }
        @keyframes pulseNode {
          0%,100% { box-shadow: 0 0 0 rgba(21,171,230,0); }
          50% { box-shadow: 0 0 24px rgba(21,171,230,0.4); }
        }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-70"><ParticleNetwork density={55} /></div>
        <div className="absolute inset-0 ai-grid opacity-20" />
        <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Modern Technology Stack
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Powered by Modern <span className="text-gradient">Technologies & AI Innovation</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We combine cutting-edge AI, cloud platforms, software frameworks, databases, DevOps, and modern development tools to build scalable, secure, and future-ready digital solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PremiumButton variant="primary" to="/contact">Discuss Your Project</PremiumButton>
              <PremiumButton variant="secondary" to="/services">Explore Our Services</PremiumButton>
              <PremiumButton variant="outline" to="/contact">Schedule Consultation</PremiumButton>
            </div>
          </div>
          <div className="animate-fade-up">
            <TechEcosystem />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Technology Categories"
          title={<>Seven pillars of a <span className="text-gradient">modern AI stack</span></>}
          description="Expand any category to explore the technologies, solutions and system flow."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <div key={c.key} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
              <CategoryCard cat={c} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK GRID */}
      <section className="relative border-y border-white/5 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Interactive Technology Stack"
            title={<>Every technology in <span className="text-gradient">our toolkit</span></>}
            description="Hover any card to explore use cases and services."
          />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {allTech.map((t, i) => (
              <div key={t.name} className="animate-fade-up" style={{ animationDelay: `${i * 40}ms` }}>
                <TechCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Architecture Showcase"
          title={<>Blueprints for <span className="text-gradient">real systems</span></>}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {architectures.map((a, i) => (
            <div key={a.title} className="glass rounded-2xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="mb-1 text-[10px] uppercase tracking-widest text-primary">Architecture</div>
              <div className="font-display text-lg font-semibold">{a.title}</div>
              <div className="mt-4 space-y-2">
                {a.steps.map((s, si) => (
                  <div key={s} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-[10px] font-bold text-primary-foreground shadow-glow">{si + 1}</div>
                    <div className="flex-1 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm">{s}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT EXAMPLES */}
      <section className="relative border-y border-white/5 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Project Examples"
            title={<>Technologies <span className="text-gradient">shipped in production</span></>}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <div key={p.title} className="group glass rounded-2xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent">
                  <Rocket className="h-10 w-10 text-primary/70 transition group-hover:scale-110" />
                </div>
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] text-primary">{s}</span>
                  ))}
                </div>
                <div className="mt-4 border-t border-white/10 pt-3">
                  <div className="mb-1 text-[10px] uppercase tracking-widest text-primary">Features</div>
                  <ul className="space-y-1 text-sm text-foreground/90">
                    {p.features.map((f) => <li key={f}>• {f}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Development Workflow"
          title={<>From discovery to <span className="text-gradient">production</span></>}
        />
        <WorkflowTimeline />
      </section>

      {/* METRICS */}
      <section className="relative border-y border-white/5 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Business Impact"
            title={<>Delivering results at <span className="text-gradient">enterprise scale</span></>}
          />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {metrics.map((m) => (
              <div key={m.label} className="glass rounded-2xl border border-white/10 p-6 text-center">
                <Counter value={m.value} suffix={m.suffix} />
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUR STACK */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Why Our Technology Stack"
          title={<>Engineered for <span className="text-gradient">enterprise</span></>}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyStack.map((w) => {
            const Icon = w.icon;
            return (
              <div key={w.title} className="group glass rounded-2xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:scale-110">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="font-display text-base font-semibold">{w.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative border-y border-white/5 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Technology FAQ"
            title={<>Frequently asked <span className="text-gradient">questions</span></>}
          />
          <FAQ />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-60"><ParticleNetwork density={40} /></div>
        <div className="absolute inset-0 ai-grid opacity-20" />
        <div className="absolute left-1/4 top-1/2 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl animate-fade-up">
            Build with the <span className="text-gradient">Right Technology Stack</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
            Whether you need AI-powered applications, scalable cloud infrastructure, enterprise software, modern web platforms, or mobile solutions, we use the right technologies to build secure, future-ready systems tailored to your business.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PremiumButton variant="primary" to="/contact">Schedule Consultation</PremiumButton>
            <PremiumButton variant="secondary" to="/contact">Discuss Your Architecture</PremiumButton>
            <PremiumButton variant="outline" to="/contact">Start Your Project</PremiumButton>
          </div>
        </div>
      </section>
    </>
  );
}
