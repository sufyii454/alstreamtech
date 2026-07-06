import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cpu,
  Database,
  FileText,
  LineChart,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  X,
  Calendar,
  Rocket,
  Check,
} from "lucide-react";
import { PageHero } from "../components/PageHero";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Enterprise AI & Software Projects | ALStreamTech" },
      {
        name: "description",
        content:
          "Explore ALStreamTech's premium AI, automation, and software case studies delivering measurable enterprise outcomes across industries.",
      },
      { property: "og:title", content: "ALStreamTech Case Studies" },
      { property: "og:description", content: "Real AI, automation & software projects with measurable business impact." },
    ],
  }),
  component: CaseStudies,
});

type Project = {
  id: string;
  title: string;
  industry: string;
  services: string[];
  technologies: string[];
  overview: string;
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
  visual: "chat" | "documents" | "workflow" | "dashboard" | "recruit" | "saas";
  testimonial: { quote: string; author: string; role: string; company: string };
  timeline: { phase: string; detail: string }[];
};

const projects: Project[] = [
  {
    id: "ai-customer-support",
    title: "AI Customer Support Platform",
    industry: "Healthcare / Enterprise Support",
    services: ["AI Development", "Automation"],
    technologies: ["OpenAI", "LangChain", "React", "Node.js", "AWS"],
    overview:
      "An AI-powered customer support platform integrated with the client's knowledge base and CRM to deliver instant, accurate answers 24/7.",
    challenge:
      "The client struggled with high support volumes, slow response times, and rising operational costs across their global support desk.",
    solution:
      "We built a GPT-powered chatbot grounded in the company's knowledge base and connected to their support systems, with clean escalation paths to human agents.",
    results: [
      { value: "70%", label: "fewer support tickets" },
      { value: "24/7", label: "customer availability" },
      { value: "60%", label: "faster responses" },
      { value: "4.8★", label: "CSAT score" },
    ],
    gradient: "from-primary/40 via-primary/10 to-accent/30",
    icon: MessageSquare,
    visual: "chat",
    testimonial: {
      quote:
        "ALStreamTech delivered an AI support layer that fundamentally changed how our customers experience us — instant, accurate, and always on.",
      author: "Dr. Meera Kapoor",
      role: "VP of Customer Experience",
      company: "NorthCare Health",
    },
    timeline: [
      { phase: "Discovery", detail: "Audited support flows, ticket categories and existing knowledge base." },
      { phase: "Planning", detail: "Defined intent taxonomy, escalation rules and success metrics." },
      { phase: "Design", detail: "Crafted the conversational UX and agent handoff experience." },
      { phase: "Development", detail: "Built the RAG pipeline, chatbot UI and CRM integrations." },
      { phase: "Testing", detail: "Ran red-team, hallucination and latency benchmarks." },
      { phase: "Deployment", detail: "Rolled out to production with observability dashboards." },
      { phase: "Optimization", detail: "Tuned prompts and retrieval weekly using real conversation data." },
    ],
  },
  {
    id: "document-processing",
    title: "Intelligent Document Processing System",
    industry: "Finance",
    services: ["AI Development", "Automation", "Analytics"],
    technologies: ["Python", "OCR", "OpenAI", "PostgreSQL", "Azure"],
    overview:
      "An intelligent pipeline that ingests, extracts and validates thousands of financial documents daily with human-in-the-loop review.",
    challenge:
      "Teams were processing thousands of statements, invoices and KYC documents manually — slow, error-prone, and expensive to scale.",
    solution:
      "We combined OCR with GPT-powered extraction and validation, routing exceptions into an approval workflow with a clean review UI.",
    results: [
      { value: "90%", label: "less manual work" },
      { value: "99.4%", label: "extraction accuracy" },
      { value: "5×", label: "faster approvals" },
      { value: "–42%", label: "processing cost" },
    ],
    gradient: "from-accent/40 via-primary/15 to-cyan-400/25",
    icon: FileText,
    visual: "documents",
    testimonial: {
      quote:
        "What used to take our operations team days now happens in minutes — with better accuracy than any manual process we ever ran.",
      author: "Rahul Verma",
      role: "Head of Operations",
      company: "Ledgerpoint Finance",
    },
    timeline: [
      { phase: "Discovery", detail: "Mapped every document type and manual touchpoint." },
      { phase: "Planning", detail: "Prioritized highest-volume forms for automation." },
      { phase: "Design", detail: "Designed the reviewer UI and confidence-based routing." },
      { phase: "Development", detail: "Built OCR + LLM extraction pipeline with validators." },
      { phase: "Testing", detail: "Benchmarked against 20k labeled documents." },
      { phase: "Deployment", detail: "Deployed on Azure with encrypted document vault." },
      { phase: "Optimization", detail: "Retrained on edge cases to push accuracy higher." },
    ],
  },
  {
    id: "workflow-automation",
    title: "AI Workflow Automation Platform",
    industry: "Enterprise Operations",
    services: ["Automation", "AI Development", "Software Development"],
    technologies: ["Python", "Node.js", "AWS", "Automation APIs", "OpenAI"],
    overview:
      "A unified automation platform that connects CRM, reporting, email and approvals with AI-powered decisioning at each step.",
    challenge:
      "Departments juggled manual, disconnected workflows across a dozen tools, creating handoff delays and reporting gaps.",
    solution:
      "We built an event-driven orchestration layer with AI decision nodes, human approvals, and a visual workflow builder.",
    results: [
      { value: "80%", label: "manual work removed" },
      { value: "3×", label: "faster cycle times" },
      { value: "100%", label: "audit coverage" },
      { value: "+35%", label: "team throughput" },
    ],
    gradient: "from-fuchsia-400/30 via-primary/15 to-accent/30",
    icon: Workflow,
    visual: "workflow",
    testimonial: {
      quote:
        "It feels like we hired an invisible operations team. Approvals, reports and handoffs just… happen.",
      author: "Priya Sharma",
      role: "COO",
      company: "Helix Global",
    },
    timeline: [
      { phase: "Discovery", detail: "Interviewed 20+ stakeholders across departments." },
      { phase: "Planning", detail: "Prioritized 12 workflows by impact and effort." },
      { phase: "Design", detail: "Designed the visual builder and audit surface." },
      { phase: "Development", detail: "Built connectors, event bus and AI decision nodes." },
      { phase: "Testing", detail: "Load tested to 5k events/minute." },
      { phase: "Deployment", detail: "Phased rollout by department with training." },
      { phase: "Optimization", detail: "Added new workflows monthly based on request queue." },
    ],
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics Dashboard",
    industry: "Retail / Manufacturing",
    services: ["Analytics", "AI Development", "Software Development"],
    technologies: ["Python", "Machine Learning", "Power BI", "AWS"],
    overview:
      "Predictive models and executive dashboards that turn scattered operational data into confident forecasts.",
    challenge:
      "Leadership had limited forecasting capability and made inventory and revenue decisions based on lagging indicators.",
    solution:
      "We built ML forecasting models trained on 5 years of operational data, surfaced through interactive executive dashboards.",
    results: [
      { value: "92%", label: "forecast accuracy" },
      { value: "–28%", label: "stockouts" },
      { value: "+18%", label: "revenue visibility" },
      { value: "Real-time", label: "executive KPIs" },
    ],
    gradient: "from-emerald-400/30 via-primary/15 to-accent/30",
    icon: LineChart,
    visual: "dashboard",
    testimonial: {
      quote:
        "For the first time our leadership team is planning around what will happen — not just what happened last quarter.",
      author: "Andrew Wilson",
      role: "CFO",
      company: "Marlin Retail Group",
    },
    timeline: [
      { phase: "Discovery", detail: "Audited data sources and forecasting needs." },
      { phase: "Planning", detail: "Selected model families and dashboard KPIs." },
      { phase: "Design", detail: "Designed executive dashboards with drill-downs." },
      { phase: "Development", detail: "Trained models, built ETL and BI layer." },
      { phase: "Testing", detail: "Back-tested forecasts against historical outcomes." },
      { phase: "Deployment", detail: "Rolled out to leadership team with training." },
      { phase: "Optimization", detail: "Continuous model retraining on new data." },
    ],
  },
  {
    id: "recruitment-assistant",
    title: "AI-Powered Recruitment Assistant",
    industry: "Human Resources",
    services: ["AI Development", "Software Development", "Automation"],
    technologies: ["GPT Models", "Resume Parsing", "Python", "React"],
    overview:
      "An AI screening assistant that parses resumes, ranks candidates and drafts personalized outreach at scale.",
    challenge:
      "Recruiters were drowning in candidate volume, missing strong profiles and losing days to manual screening.",
    solution:
      "We built a resume-parsing pipeline with LLM-based fit scoring, ranked shortlists and personalized outreach templates.",
    results: [
      { value: "–65%", label: "time to shortlist" },
      { value: "3×", label: "recruiter productivity" },
      { value: "+40%", label: "quality-of-hire" },
      { value: "10k+", label: "resumes / week" },
    ],
    gradient: "from-purple-500/30 via-primary/15 to-accent/30",
    icon: Users,
    visual: "recruit",
    testimonial: {
      quote:
        "Our recruiters finally spend their time talking to great candidates instead of scanning PDFs.",
      author: "Sofia Martinez",
      role: "Head of Talent",
      company: "Brightpath HR",
    },
    timeline: [
      { phase: "Discovery", detail: "Mapped hiring pipeline and pain points." },
      { phase: "Planning", detail: "Defined scoring rubric with recruiter panel." },
      { phase: "Design", detail: "Designed shortlist and candidate detail views." },
      { phase: "Development", detail: "Built parser, scoring engine and UI." },
      { phase: "Testing", detail: "Blind-tested rankings against recruiter picks." },
      { phase: "Deployment", detail: "Rolled out to 4 recruiting pods." },
      { phase: "Optimization", detail: "Refined scoring with recruiter feedback loop." },
    ],
  },
  {
    id: "enterprise-saas",
    title: "Enterprise SaaS Management Platform",
    industry: "Enterprise Software",
    services: ["Software Development", "AI Development", "Analytics"],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "OpenAI"],
    overview:
      "A unified cloud platform that centralizes operations across disconnected business systems with AI-powered reporting.",
    challenge:
      "The client operated across multiple disconnected business systems, causing duplicated work, licensing waste and blind spots.",
    solution:
      "We built a single SaaS platform unifying operations with role-based views, AI insights and automated reporting.",
    results: [
      { value: "1", label: "unified platform" },
      { value: "+45%", label: "team productivity" },
      { value: "–30%", label: "software spend" },
      { value: "Weekly", label: "AI insights delivered" },
    ],
    gradient: "from-cyan-400/30 via-primary/15 to-indigo-500/25",
    icon: Cpu,
    visual: "saas",
    testimonial: {
      quote:
        "One login, one source of truth. ALStreamTech gave us the operating system we didn't know we needed.",
      author: "James O'Connor",
      role: "CTO",
      company: "Vantage Enterprise",
    },
    timeline: [
      { phase: "Discovery", detail: "Inventoried existing tools and workflows." },
      { phase: "Planning", detail: "Prioritized modules for phased delivery." },
      { phase: "Design", detail: "Designed unified information architecture." },
      { phase: "Development", detail: "Built platform, modules and AI insight layer." },
      { phase: "Testing", detail: "Ran QA, security review and load tests." },
      { phase: "Deployment", detail: "Cutover per department with data migration." },
      { phase: "Optimization", detail: "Added modules and AI insights quarterly." },
    ],
  },
];

const allServices = ["AI Development", "Chatbots", "Automation", "Mobile Apps", "Software Development", "Analytics"];
const allIndustries = ["Healthcare", "Finance", "Retail", "Logistics", "Education", "Real Estate"];
const allTech = ["OpenAI", "AWS", "React", "Python", "Azure"];

const impactStats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Businesses Served" },
  { value: 40, suffix: "+", label: "AI Solutions Built" },
  { value: 500, suffix: "+", label: "Automations Created" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const techEcosystem = [
  "OpenAI", "Gemini", "Python", "React", "AWS",
  "Azure", "Docker", "Node.js", "Kubernetes", "PostgreSQL",
];

function CaseStudies() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (activeService && !p.services.some((s) => s.toLowerCase().includes(activeService.toLowerCase()))) return false;
      if (activeIndustry && !p.industry.toLowerCase().includes(activeIndustry.toLowerCase())) return false;
      if (activeTech && !p.technologies.some((t) => t.toLowerCase() === activeTech.toLowerCase())) return false;
      return true;
    });
  }, [activeService, activeIndustry, activeTech]);

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={
          <>
            Transforming ideas into <span className="text-gradient">successful digital solutions</span>
          </>
        }
        subtitle="Explore how we help businesses leverage AI, automation, and custom software to improve efficiency, enhance customer experiences and accelerate growth."
      >
        <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up">
          <div className="glass rounded-full px-4 py-2 text-xs uppercase tracking-widest text-primary">
            <Sparkles className="mr-2 inline h-3.5 w-3.5" /> AI-first delivery
          </div>
          <div className="glass rounded-full px-4 py-2 text-xs uppercase tracking-widest text-primary">
            <Rocket className="mr-2 inline h-3.5 w-3.5" /> Enterprise-grade outcomes
          </div>
          <div className="glass rounded-full px-4 py-2 text-xs uppercase tracking-widest text-primary">
            <TrendingUp className="mr-2 inline h-3.5 w-3.5" /> Measurable business impact
          </div>
        </div>
      </PageHero>

      <FeaturedCarousel onOpen={setOpenProject} />

      <FiltersAndGrid
        filtered={filtered}
        activeService={activeService}
        setActiveService={setActiveService}
        activeIndustry={activeIndustry}
        setActiveIndustry={setActiveIndustry}
        activeTech={activeTech}
        setActiveTech={setActiveTech}
        onOpen={setOpenProject}
      />

      <ImpactStats />
      <TechEcosystem />

      <FinalCTA />

      {openProject && <CaseStudyDrawer project={openProject} onClose={() => setOpenProject(null)} />}
    </>
  );
}

/* ------------------ Featured Carousel ------------------ */
function FeaturedCarousel({ onOpen }: { onOpen: (p: Project) => void }) {
  const [index, setIndex] = useState(0);
  const total = projects.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % total), 7000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [total]);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + total) % total);
    if (timer.current) clearInterval(timer.current);
  };

  const p = projects[index];

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
            Featured Projects
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Signature work, in focus</h2>
        </div>
        <div className="hidden gap-2 md:flex">
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="glass rounded-full p-3 transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="glass rounded-full p-3 transition hover:bg-white/10"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <article
        key={p.id}
        className="glass-strong relative overflow-hidden rounded-3xl p-6 md:p-10 animate-fade-up"
      >
        <div className={`pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br ${p.gradient} blur-3xl opacity-60`} />
        <div className="pointer-events-none absolute inset-0 ai-grid opacity-10" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <ProjectVisual visual={p.visual} gradient={p.gradient} icon={p.icon} />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="glass rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-primary">
                {p.industry}
              </span>
              {p.services.slice(0, 2).map((s) => (
                <span key={s} className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold md:text-4xl">{p.title}</h3>
            <p className="mt-3 text-muted-foreground">{p.overview}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.technologies.map((t) => (
                <span key={t} className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs text-primary">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {p.results.map((r) => (
                <div key={r.label} className="glass rounded-xl p-3 text-center">
                  <div className="font-display text-lg font-bold text-gradient md:text-xl">{r.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{r.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpen(p)}
              className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-5 py-3 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]"
            >
              View Case Study
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        <div className="relative mt-8 flex items-center justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                if (timer.current) clearInterval(timer.current);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
      </article>
    </section>
  );
}

/* ------------------ Project Visual ------------------ */
function ProjectVisual({
  visual,
  gradient,
  icon: Icon,
}: {
  visual: Project["visual"];
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${gradient} p-4`}>
      <div className="absolute inset-0 ai-grid opacity-30" />
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />

      {visual === "chat" && <ChatMock />}
      {visual === "documents" && <DocumentsMock />}
      {visual === "workflow" && <WorkflowMock />}
      {visual === "dashboard" && <DashboardMock />}
      {visual === "recruit" && <RecruitMock />}
      {visual === "saas" && <SaasMock />}

      <div className="absolute right-4 top-4 rounded-full bg-background/50 p-2 backdrop-blur">
        <Icon className="h-5 w-5 text-primary" />
      </div>
    </div>
  );
}

function DeviceFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full w-full rounded-xl border border-white/15 bg-background/70 p-3 shadow-elegant backdrop-blur-md">
      <div className="mb-2 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
      </div>
      {children}
    </div>
  );
}

function ChatMock() {
  return (
    <DeviceFrame>
      <div className="space-y-2 text-xs">
        <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-tr-sm bg-primary/20 px-3 py-2 text-primary-foreground/90">
          How do I reset billing?
        </div>
        <div className="w-fit max-w-[85%] animate-fade-up rounded-2xl rounded-tl-sm bg-white/10 px-3 py-2">
          <Bot className="mr-1 inline h-3 w-3 text-primary" /> Sure — I found 3 relevant steps in your account settings…
        </div>
        <div className="ml-auto w-fit max-w-[70%] rounded-2xl rounded-tr-sm bg-primary/20 px-3 py-2">
          Perfect, thanks!
        </div>
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> AI typing…
        </div>
      </div>
    </DeviceFrame>
  );
}

function DocumentsMock() {
  return (
    <DeviceFrame>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="relative aspect-[3/4] rounded border border-white/15 bg-white/5 p-1.5">
            <div className="space-y-1">
              <div className="h-1 w-3/4 bg-white/30" />
              <div className="h-1 w-full bg-white/15" />
              <div className="h-1 w-2/3 bg-white/15" />
            </div>
            {i < 4 && <div className="absolute inset-x-1 bottom-1 h-1 rounded bg-primary/60" />}
          </div>
        ))}
      </div>
      <div className="mt-2 text-[10px] text-primary">Extracting 6/8 documents…</div>
    </DeviceFrame>
  );
}

function WorkflowMock() {
  const nodes = ["Trigger", "AI Decide", "Approve", "Notify"];
  return (
    <DeviceFrame>
      <div className="flex items-center justify-between gap-1">
        {nodes.map((n, i) => (
          <div key={n} className="flex flex-1 items-center gap-1">
            <div className="flex-1 rounded-md border border-primary/40 bg-primary/10 px-2 py-1.5 text-center text-[10px]">
              {n}
            </div>
            {i < nodes.length - 1 && <div className="h-px w-3 bg-primary/60" />}
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-1.5">
        {[80, 60, 90].map((w, i) => (
          <div key={i} className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-primary/70" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
    </DeviceFrame>
  );
}

function DashboardMock() {
  return (
    <DeviceFrame>
      <div className="grid grid-cols-3 gap-2">
        {["Revenue", "Forecast", "Stock"].map((k) => (
          <div key={k} className="rounded border border-white/10 bg-white/5 p-1.5">
            <div className="text-[9px] text-muted-foreground">{k}</div>
            <div className="text-[11px] font-bold text-gradient">+{Math.floor(Math.random() * 30 + 10)}%</div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex h-14 items-end gap-1">
        {[30, 55, 40, 70, 60, 80, 65, 90, 75].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-primary/60" style={{ height: `${h}%` }} />
        ))}
      </div>
    </DeviceFrame>
  );
}

function RecruitMock() {
  return (
    <DeviceFrame>
      <div className="space-y-1.5">
        {["Alex Kim — 94%", "Priya Rao — 91%", "Diego M. — 87%", "Sara J. — 83%"].map((r, i) => (
          <div key={i} className="flex items-center gap-2 rounded border border-white/10 bg-white/5 px-2 py-1.5 text-[10px]">
            <div className="h-5 w-5 rounded-full bg-gradient-brand" />
            <div className="flex-1">{r}</div>
            <Check className="h-3 w-3 text-primary" />
          </div>
        ))}
      </div>
    </DeviceFrame>
  );
}

function SaasMock() {
  return (
    <DeviceFrame>
      <div className="grid grid-cols-4 gap-1.5">
        {["Sales", "Ops", "HR", "Fin"].map((m) => (
          <div key={m} className="rounded border border-primary/30 bg-primary/10 px-1.5 py-1 text-center text-[9px] text-primary">
            {m}
          </div>
        ))}
      </div>
      <div className="mt-2 rounded border border-white/10 bg-white/5 p-2">
        <div className="text-[9px] text-muted-foreground">AI Insight</div>
        <div className="mt-0.5 text-[10px]">Q3 pipeline up 22% — reallocate Ops capacity to Sales onboarding.</div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-6 rounded bg-white/5" />
        ))}
      </div>
    </DeviceFrame>
  );
}

/* ------------------ Filters + Grid ------------------ */
function FiltersAndGrid({
  filtered,
  activeService,
  setActiveService,
  activeIndustry,
  setActiveIndustry,
  activeTech,
  setActiveTech,
  onOpen,
}: {
  filtered: Project[];
  activeService: string | null;
  setActiveService: (v: string | null) => void;
  activeIndustry: string | null;
  setActiveIndustry: (v: string | null) => void;
  activeTech: string | null;
  setActiveTech: (v: string | null) => void;
  onOpen: (p: Project) => void;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
          Explore all projects
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
          Filter by <span className="text-gradient">service, industry & technology</span>
        </h2>
      </div>

      <div className="glass-strong space-y-4 rounded-2xl p-5">
        <FilterRow label="Service" options={allServices} active={activeService} setActive={setActiveService} />
        <FilterRow label="Industry" options={allIndustries} active={activeIndustry} setActive={setActiveIndustry} />
        <FilterRow label="Technology" options={allTech} active={activeTech} setActive={setActiveTech} />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 && (
          <div className="glass col-span-full rounded-2xl p-10 text-center text-muted-foreground">
            No projects match those filters yet. Try clearing one.
          </div>
        )}
        {filtered.map((p, i) => (
          <button
            key={p.id}
            onClick={() => onOpen(p)}
            style={{ animationDelay: `${i * 80}ms` }}
            className="group animate-fade-up relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-card p-6 text-left transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <div className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br ${p.gradient} opacity-50 blur-3xl transition group-hover:opacity-80`} />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-primary/15 p-2 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <div className="mt-4 text-[10px] uppercase tracking-widest text-primary">{p.industry}</div>
              <h3 className="mt-1 font-display text-xl font-bold leading-snug">{p.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.overview}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.technologies.slice(0, 4).map((t) => (
                  <span key={t} className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
                {p.results.slice(0, 2).map((r) => (
                  <div key={r.label}>
                    <div className="font-display text-sm font-bold text-gradient">{r.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function FilterRow({
  label,
  options,
  active,
  setActive,
}: {
  label: string;
  options: string[];
  active: string | null;
  setActive: (v: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-2 min-w-20 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <button
        onClick={() => setActive(null)}
        className={`rounded-full border px-3 py-1 text-xs transition ${active === null ? "border-primary bg-primary/20 text-primary" : "border-white/10 text-muted-foreground hover:border-white/25"}`}
      >
        All
      </button>
      {options.map((o) => (
        <button
          key={o}
          onClick={() => setActive(active === o ? null : o)}
          className={`rounded-full border px-3 py-1 text-xs transition ${active === o ? "border-primary bg-primary/20 text-primary" : "border-white/10 text-muted-foreground hover:border-white/25"}`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

/* ------------------ Impact stats ------------------ */
function ImpactStats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
          Business Impact
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Numbers that <span className="text-gradient">move the business</span></h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
        {impactStats.map((s) => (
          <div key={s.label} className="glass-strong group relative overflow-hidden rounded-2xl p-6 text-center transition hover:shadow-glow">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="relative font-display text-4xl font-bold text-gradient">
              <Counter value={s.value} />{s.suffix}
            </div>
            <div className="relative mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Counter({ value }: { value: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const dur = 1500;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.floor(p * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{n}</span>;
}

/* ------------------ Tech Ecosystem ------------------ */
function TechEcosystem() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
          Ecosystem
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Technologies Behind <span className="text-gradient">Our Success</span></h2>
      </div>

      <div className="glass-strong relative overflow-hidden rounded-3xl p-10">
        <div className="pointer-events-none absolute inset-0 ai-grid opacity-20" />
        <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative flex flex-wrap items-center justify-center gap-4">
          {techEcosystem.map((t, i) => (
            <div
              key={t}
              style={{ animationDelay: `${i * 200}ms` }}
              className="animate-float-slow glass group flex items-center gap-2 rounded-2xl px-5 py-3 transition hover:scale-110 hover:border-primary hover:shadow-glow"
            >
              <Database className="h-4 w-4 text-primary" />
              <span className="font-medium">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ Final CTA (custom) ------------------ */
function FinalCTA() {
  return (
    <section className="relative mx-auto my-24 max-w-7xl px-6">
      <div className="glass-strong relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20">
        <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 ai-grid opacity-10" />
        <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
              Let's build together
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
              Ready to build the <span className="text-gradient">next success story?</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Let's discuss how AI, automation, and custom software can help transform your business and deliver measurable results.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="/contact" className="group flex items-center justify-between rounded-2xl bg-gradient-brand px-6 py-5 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]">
              <span className="flex items-center gap-3"><Calendar className="h-5 w-5" /> Schedule a Consultation</span>
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a href="/portfolio" className="glass group flex items-center justify-between rounded-2xl px-6 py-5 font-semibold transition hover:bg-white/10">
              <span>View More Projects</span>
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a href="/contact" className="glass group flex items-center justify-between rounded-2xl px-6 py-5 font-semibold transition hover:bg-white/10">
              <span className="flex items-center gap-3"><Rocket className="h-5 w-5 text-primary" /> Start Your Project</span>
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ Case Study Drawer ------------------ */
function CaseStudyDrawer({ project: p, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-md animate-fade-up" onClick={onClose} />
      <div className="relative h-full w-full max-w-3xl overflow-y-auto border-l border-white/10 bg-background shadow-elegant animate-fade-up">
        <div className={`relative overflow-hidden bg-gradient-to-br ${p.gradient} p-8`}>
          <div className="absolute inset-0 ai-grid opacity-20" />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-background/60 p-2 backdrop-blur transition hover:bg-background"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <span className="glass rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-primary">{p.industry}</span>
              {p.services.map((s) => (
                <span key={s} className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-widest">{s}</span>
              ))}
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">{p.title}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.technologies.map((t) => (
                <span key={t} className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs text-primary">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10 p-8">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {p.results.map((r) => (
              <div key={r.label} className="glass rounded-xl p-3 text-center">
                <div className="font-display text-xl font-bold text-gradient">{r.value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{r.label}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary">Business Challenge</h3>
            <p className="mt-2 text-muted-foreground">{p.challenge}</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary">Solution</h3>
            <p className="mt-2 text-muted-foreground">{p.solution}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary">Development Process</h3>
            <ol className="mt-4 space-y-3">
              {p.timeline.map((t, i) => (
                <li key={t.phase} className="glass flex gap-4 rounded-xl p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold">{t.phase}</div>
                    <div className="text-sm text-muted-foreground">{t.detail}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="glass-strong rounded-2xl p-6">
            <div className="text-4xl text-primary">"</div>
            <p className="text-lg italic text-foreground/90">{p.testimonial.quote}</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-brand" />
              <div>
                <div className="font-semibold">{p.testimonial.author}</div>
                <div className="text-xs text-muted-foreground">{p.testimonial.role} · {p.testimonial.company}</div>
              </div>
            </div>
          </div>

          <a href="/contact" className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-brand px-6 py-4 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]">
            Start a Similar Project <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

