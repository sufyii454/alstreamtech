import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Bot, LayoutDashboard, BarChart3, Workflow,
  Users, Cloud, Smartphone, Sparkles, Check, X, Calendar, MessageSquare,
  FileText, Quote, TrendingUp, Zap, Filter, Brain, Code2, Server, Wrench,
} from "lucide-react";
import { ParticleNetwork } from "../components/ParticleNetwork";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Real Solutions, Real Results | ALStreamTech" },
      { name: "description", content: "Explore AI, automation, cloud, and custom software case studies delivering measurable business impact across industries." },
      { property: "og:title", content: "ALStreamTech Portfolio — Real Solutions, Real Results" },
      { property: "og:description", content: "Case studies of AI chatbots, document AI, CRM, recommendation engines, WhatsApp AI, and automation dashboards." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

/* --------------------------------- Data --------------------------------- */

type Case = {
  id: string;
  title: string;
  industry: string;
  service: string;
  tech: string[];
  ai: string[];
  challenge: string;
  solution: string;
  screens: string[];
  impact: string[];
  results: { v: number; suffix?: string; l: string }[];
  testimonial: { quote: string; name: string; role: string; company: string };
  accent: string;
  icon: React.ComponentType<{ className?: string }>;
};

const CASES: Case[] = [
  {
    id: "ai-support-bot",
    title: "AI Customer Support Bot",
    industry: "E-Commerce",
    service: "AI Chatbots",
    tech: ["OpenAI", "LangChain", "React", "Node.js", "AWS"],
    ai: ["Natural Language Processing", "Context Awareness", "Knowledge Base Search", "Multi-language Support"],
    challenge: "The client received thousands of customer support requests every month, leading to long response times and increased operational costs.",
    solution: "Developed an AI-powered customer support chatbot capable of answering FAQs, handling support requests, understanding customer context, and escalating complex issues to human agents.",
    screens: ["Chat interface", "Admin dashboard", "Analytics reports", "Support management panel"],
    impact: ["70% reduction in support workload", "24/7 customer support", "Faster response times", "Higher customer satisfaction"],
    results: [{ v: 70, suffix: "%", l: "Workload Reduced" }, { v: 24, suffix: "/7", l: "Availability" }, { v: 4, suffix: "x", l: "Faster Replies" }],
    testimonial: { quote: "The bot handles the bulk of our tickets and our team finally focuses on complex issues.", name: "Priya Menon", role: "Head of Support", company: "ShopCove" },
    accent: "from-primary/40 to-cyan-400/30",
    icon: Bot,
  },
  {
    id: "ai-document-reader",
    title: "AI Document Reader",
    industry: "Finance",
    service: "AI Development",
    tech: ["Python", "OpenAI", "OCR Engine", "Azure", "PostgreSQL"],
    ai: ["OCR", "Document Summarization", "Data Extraction", "Document Classification"],
    challenge: "Manual review of invoices, contracts, and financial documents consumed significant employee time.",
    solution: "Developed an AI document processing platform capable of extracting, classifying, summarizing, and analyzing documents automatically.",
    screens: ["Upload interface", "Extraction dashboard", "Document viewer", "Analytics dashboard"],
    impact: ["90% faster processing", "Improved data accuracy", "Reduced manual effort", "Faster approvals"],
    results: [{ v: 90, suffix: "%", l: "Faster Processing" }, { v: 99, suffix: "%", l: "Accuracy" }, { v: 60, suffix: "%", l: "Cost Saved" }],
    testimonial: { quote: "What took days now takes minutes — with better accuracy than our manual review.", name: "Daniel Roy", role: "Operations Director", company: "Fintrust Capital" },
    accent: "from-emerald-400/30 to-primary/40",
    icon: FileText,
  },
  {
    id: "smart-crm",
    title: "Smart CRM Platform",
    industry: "Real Estate",
    service: "Software Development",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    ai: ["Lead Scoring", "Predictive Analytics", "Customer Insights", "Sales Recommendations"],
    challenge: "Lead management relied on disconnected spreadsheets and multiple systems.",
    solution: "Built a custom CRM with AI lead scoring, reporting, automation, and customer management.",
    screens: ["CRM Dashboard", "Lead Pipeline", "Reports", "Customer Profiles"],
    impact: ["Better lead conversion", "Increased productivity", "Reduced administrative work", "Faster follow-ups"],
    results: [{ v: 45, suffix: "%", l: "Conversion Lift" }, { v: 3, suffix: "x", l: "Team Productivity" }, { v: 50, suffix: "%", l: "Less Admin" }],
    testimonial: { quote: "Our agents finally see every lead in one place, ranked by likelihood to close.", name: "Ananya Verma", role: "Sales Head", company: "Urbanest Realty" },
    accent: "from-violet-500/30 to-primary/40",
    icon: Users,
  },
  {
    id: "recommendation-engine",
    title: "E-Commerce Recommendation Engine",
    industry: "Retail",
    service: "AI Development",
    tech: ["Python", "Machine Learning", "AWS", "React"],
    ai: ["Recommendation Engine", "Customer Behavior Analysis", "Predictive Modeling"],
    challenge: "Low customer engagement and limited repeat purchases.",
    solution: "Developed an AI recommendation engine that analyzes customer behavior and delivers personalized product recommendations.",
    screens: ["Storefront widget", "Personalization console", "A/B testing panel", "Revenue analytics"],
    impact: ["Increased sales", "Higher conversion rates", "Better customer engagement", "Improved retention"],
    results: [{ v: 32, suffix: "%", l: "Revenue Uplift" }, { v: 2, suffix: "x", l: "Repeat Orders" }, { v: 18, suffix: "%", l: "AOV Increase" }],
    testimonial: { quote: "Personalization moved our top-line metrics from week one.", name: "Ravi Krishnan", role: "CTO", company: "Kartly" },
    accent: "from-amber-400/30 to-primary/40",
    icon: BarChart3,
  },
  {
    id: "whatsapp-ai",
    title: "WhatsApp AI Assistant",
    industry: "Professional Services",
    service: "Automation",
    tech: ["WhatsApp Business API", "OpenAI", "Node.js", "AWS"],
    ai: ["Conversational AI", "Scheduling Automation", "Lead Qualification", "Customer Support"],
    challenge: "Managing customer inquiries and appointment requests manually.",
    solution: "Built an AI-powered WhatsApp assistant for customer support, lead qualification, and appointment scheduling.",
    screens: ["Conversation view", "Booking flow", "Lead scoring", "Team inbox"],
    impact: ["Faster responses", "More qualified leads", "Reduced manual work", "Better engagement"],
    results: [{ v: 5, suffix: "x", l: "Faster Replies" }, { v: 40, suffix: "%", l: "More Qualified Leads" }, { v: 24, suffix: "/7", l: "Coverage" }],
    testimonial: { quote: "Every inquiry is qualified and booked before we even open the laptop.", name: "Sneha Kapoor", role: "Founder", company: "BrightLegal" },
    accent: "from-green-400/30 to-primary/40",
    icon: MessageSquare,
  },
  {
    id: "automation-dashboard",
    title: "Business Automation Dashboard",
    industry: "Logistics",
    service: "Analytics",
    tech: ["React", "Power BI", "Node.js", "Azure"],
    ai: ["Predictive Analytics", "Workflow Automation", "Smart Reporting"],
    challenge: "Operations relied heavily on spreadsheets and disconnected reporting systems.",
    solution: "Created a centralized dashboard integrating workflows, reporting, notifications, and analytics.",
    screens: ["Live ops board", "KPI reports", "Alerts center", "Route planner"],
    impact: ["Better visibility", "Faster reporting", "Reduced manual work", "Smarter decision making"],
    results: [{ v: 80, suffix: "%", l: "Reporting Time Saved" }, { v: 100, suffix: "%", l: "Live Visibility" }, { v: 25, suffix: "%", l: "OTIF Improved" }],
    testimonial: { quote: "One board replaced twelve spreadsheets and half our status meetings.", name: "Arjun Shetty", role: "COO", company: "Meridian Freight" },
    accent: "from-cyan-400/30 to-indigo-500/30",
    icon: LayoutDashboard,
  },
];

const SERVICES = ["AI Development", "AI Chatbots", "Automation", "Software Development", "Mobile Apps", "Analytics", "Cloud & DevOps"];
const INDUSTRIES = ["Healthcare", "Finance", "Retail", "Real Estate", "Education", "Logistics", "E-Commerce", "Professional Services"];
const TECHS_FILTER = ["OpenAI", "AWS", "Azure", "React", "Python", "LangChain"];

const METRICS = [
  { v: 100, suffix: "+", l: "Projects Delivered" },
  { v: 50, suffix: "+", l: "AI Solutions Built" },
  { v: 75, suffix: "+", l: "Businesses Served" },
  { v: 20, suffix: "+", l: "Industries Supported" },
  { v: 98, suffix: "%", l: "Client Satisfaction" },
  { v: 500, suffix: "+", l: "Automation Workflows" },
];

const TECH_STACK: { group: string; items: string[] }[] = [
  { group: "AI", items: ["OpenAI", "Gemini", "LangChain"] },
  { group: "Frontend", items: ["React", "Next.js", "Angular"] },
  { group: "Backend", items: ["Node.js", "Python", ".NET"] },
  { group: "Cloud", items: ["AWS", "Azure"] },
  { group: "DevOps", items: ["Docker", "Kubernetes"] },
];

const COMPARE = [
  { b: "Manual Processes", a: "AI Automation" },
  { b: "Slow Operations", a: "Real-Time Visibility" },
  { b: "Limited Insights", a: "Improved Efficiency" },
  { b: "Disconnected Systems", a: "Scalable Operations" },
];

const HERO_CARDS = [
  { icon: Bot, label: "AI Chatbots" },
  { icon: LayoutDashboard, label: "Dashboards" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Workflow, label: "Automation" },
  { icon: Users, label: "CRM" },
  { icon: Cloud, label: "Cloud" },
  { icon: Smartphone, label: "Mobile" },
];

/* -------------------------------- Utils -------------------------------- */

function useInView<T extends Element>(opts?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current || inView) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect(); }
    }, opts ?? { threshold: 0.2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [inView, opts]);
  return { ref, inView };
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1500;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <div ref={ref} className="font-display text-4xl font-bold text-gradient md:text-5xl">{val}{suffix}</div>;
}

/* ------------------------------- Hero Viz ------------------------------ */

function HeroShowcase() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <div className="absolute inset-0 rounded-full border border-primary/15 animate-[whyus-spin_50s_linear_infinite]" />
      <div className="absolute inset-[10%] rounded-full border border-primary/10" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
        {HERO_CARDS.map((_, i) => {
          const a = (i / HERO_CARDS.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(a) * 42;
          const y = 50 + Math.sin(a) * 42;
          return <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="rgba(21,171,230,0.28)" strokeWidth="0.3" strokeDasharray="1 2" />;
        })}
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid h-24 w-24 place-items-center rounded-3xl bg-gradient-brand shadow-glow animate-pulse-glow md:h-28 md:w-28">
          <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-2xl" />
          <Sparkles className="relative h-9 w-9 text-primary-foreground" />
        </div>
      </div>

      {HERO_CARDS.map((c, i) => {
        const a = (i / HERO_CARDS.length) * 360;
        const Icon = c.icon;
        return (
          <div key={c.label}
            className="absolute left-1/2 top-1/2 h-0 w-0"
            style={{ transform: `rotate(${a}deg) translateX(min(42%,220px))` }}
          >
            <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ transform: `rotate(-${a}deg) translate(-50%,-50%)` }}>
              <div
                className="group flex flex-col items-center"
                style={{ animation: `whyus-float ${5 + (i % 4)}s ease-in-out ${i * 0.3}s infinite` }}
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl glass-strong shadow-glow transition group-hover:scale-110 group-hover:border-primary/60">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mt-2 whitespace-nowrap text-[11px] font-medium text-foreground/90">{c.label}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* --------------------------------- Page -------------------------------- */

function Portfolio() {
  const [fService, setFService] = useState<string | null>(null);
  const [fIndustry, setFIndustry] = useState<string | null>(null);
  const [fTech, setFTech] = useState<string | null>(null);

  const filtered = useMemo(() => CASES.filter(c =>
    (!fService || c.service === fService) &&
    (!fIndustry || c.industry === fIndustry) &&
    (!fTech || c.tech.includes(fTech))
  ), [fService, fIndustry, fTech]);

  const anyFilter = fService || fIndustry || fTech;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-70"><ParticleNetwork density={45} /></div>
        <div className="absolute inset-0 ai-grid opacity-20" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary animate-fade-up">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Portfolio
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl animate-fade-up">
              Real Solutions. <span className="text-gradient">Real Results.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground animate-fade-up">
              Explore how we help businesses transform operations, improve customer experiences, automate processes, and
              accelerate growth through AI-powered solutions, automation, cloud technologies, and custom software development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]">
                Discuss Your Project <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="glass inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold transition hover:bg-white/10">
                <Calendar className="h-4 w-4" /> Schedule Consultation
              </Link>
              <Link to="/services" className="glass inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold transition hover:bg-white/10">
                View Services
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <HeroShowcase />
          </div>
        </div>
      </section>

      {/* FEATURED SUCCESS STORIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="glass inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">Featured Success Stories</div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            Projects that delivered <span className="text-gradient">measurable impact</span>
          </h2>
        </div>

        {/* FILTERS */}
        <div className="glass-strong mb-10 rounded-3xl p-5 md:p-6">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <Filter className="h-3.5 w-3.5 text-primary" /> Filter
            {anyFilter && (
              <button onClick={() => { setFService(null); setFIndustry(null); setFTech(null); }} className="ml-auto text-[11px] text-primary hover:underline">Clear all</button>
            )}
          </div>
          <FilterRow label="Services" options={SERVICES} value={fService} onChange={setFService} />
          <FilterRow label="Industry" options={INDUSTRIES} value={fIndustry} onChange={setFIndustry} />
          <FilterRow label="Technology" options={TECHS_FILTER} value={fTech} onChange={setFTech} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c, i) => <ProjectCard key={c.id} c={c} i={i} />)}
        </div>
        {filtered.length === 0 && (
          <div className="glass rounded-2xl p-10 text-center text-muted-foreground">No projects match those filters yet — try clearing one.</div>
        )}
      </section>

      {/* CASE STUDIES */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="glass inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">Case Studies</div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            From challenge to <span className="text-gradient">business impact</span>
          </h2>
        </div>
        <div className="space-y-16">
          {CASES.map((c, i) => <CaseStudy key={c.id} c={c} index={i} />)}
        </div>
      </section>

      {/* METRICS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="glass-strong grid grid-cols-2 gap-8 rounded-3xl p-10 md:grid-cols-3 lg:grid-cols-6">
          {METRICS.map(m => (
            <div key={m.l} className="text-center">
              <Counter to={m.v} suffix={m.suffix} />
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH SHOWCASE */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="glass inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">Technology Stack</div>
          <h2 className="mt-4 font-display text-2xl font-bold md:text-4xl">A modern, enterprise-grade stack</h2>
        </div>
        <div className="glass-strong rounded-3xl p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {TECH_STACK.map((g, gi) => (
              <div key={g.group}>
                <div className="mb-4 text-xs uppercase tracking-widest text-primary/80">{g.group}</div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((t, i) => (
                    <div key={t}
                      className="glass group flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
                      style={{ animation: `whyus-float ${5 + ((i + gi) % 4)}s ease-in-out ${(i + gi) * 0.2}s infinite` }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary group-hover:animate-pulse" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="glass inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">Before &amp; After</div>
          <h2 className="mt-4 font-display text-2xl font-bold md:text-4xl">The shift our clients experience</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5"><X className="h-5 w-5 text-muted-foreground" /></div>
              <div className="font-display text-xl font-semibold text-muted-foreground">Before</div>
            </div>
            <ul className="space-y-3">
              {COMPARE.map(r => (
                <li key={r.b} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/80" /> {r.b}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-glow">
            <div className="pointer-events-none absolute -top-24 -right-24 h-60 w-60 rounded-full bg-primary/25 blur-3xl" />
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand"><Zap className="h-5 w-5 text-primary-foreground" /></div>
              <div className="font-display text-xl font-semibold text-gradient">After</div>
            </div>
            <ul className="space-y-3">
              {COMPARE.map(r => (
                <li key={r.a} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {r.a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative mx-auto my-24 max-w-7xl px-6">
        <div className="glass-strong relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20">
          <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative text-center">
            <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
              Ready to Become Our Next <span className="text-gradient">Success Story?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Whether you're looking for AI automation, intelligent chatbots, custom software, analytics platforms, CRM systems,
              cloud solutions, or end-to-end digital transformation, our team is ready to turn your vision into reality with
              scalable, future-ready technology.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-3.5 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]">
                <Calendar className="h-4 w-4" /> Schedule Consultation <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="glass inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-semibold transition hover:bg-white/10">
                <MessageSquare className="h-4 w-4" /> Discuss Your Project
              </Link>
              <Link to="/contact" className="glass inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-semibold transition hover:bg-white/10">
                <FileText className="h-4 w-4" /> Request Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------ Subparts ------------------------------- */

function FilterRow({ label, options, value, onChange }:
  { label: string; options: string[]; value: string | null; onChange: (v: string | null) => void }) {
  return (
    <div className="mb-3 last:mb-0 grid grid-cols-[minmax(0,1fr)] items-start gap-3 sm:grid-cols-[110px_minmax(0,1fr)]">
      <div className="pt-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="flex min-w-0 flex-wrap gap-2">
        {options.map(o => {
          const active = value === o;
          return (
            <button key={o} onClick={() => onChange(active ? null : o)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                active ? "bg-gradient-brand text-primary-foreground shadow-glow" : "glass hover:border-primary/50 hover:bg-white/10"
              }`}>
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ProjectCard({ c, i }: { c: Case; i: number }) {
  const Icon = c.icon;
  return (
    <a href={`#${c.id}`}
      className="whyus-card group relative flex flex-col overflow-hidden rounded-3xl glass p-6 transition duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${i * 80}ms` }}
    >
      <div className={`pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br ${c.accent} opacity-0 blur-2xl transition duration-500 group-hover:opacity-100`} />
      <div className={`relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${c.accent} ai-grid`}>
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        <div className="absolute right-3 top-3 rounded-full glass-strong px-2.5 py-1 text-[10px] uppercase tracking-widest text-primary">{c.industry}</div>
        <div className="absolute inset-0 grid place-items-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand shadow-glow transition group-hover:scale-110">
            <Icon className="h-7 w-7 text-primary-foreground" />
          </div>
        </div>
      </div>
      <div className="relative flex flex-1 flex-col">
        <div className="text-xs uppercase tracking-widest text-primary">{c.service}</div>
        <div className="mt-1 font-display text-lg font-semibold">{c.title}</div>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{c.impact[0]} · {c.impact[1]}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {c.tech.slice(0, 4).map(t => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-foreground/80">{t}</span>
          ))}
        </div>
        <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
          View Case Study <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </a>
  );
}

function CaseStudy({ c, index }: { c: Case; index: number }) {
  const Icon = c.icon;
  const related = CASES.filter(x => x.id !== c.id && (x.industry === c.industry || x.service === c.service || x.tech.some(t => c.tech.includes(t)))).slice(0, 3);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <article id={c.id} ref={ref} className={`scroll-mt-24 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="glass-strong relative overflow-hidden rounded-[2rem] p-6 md:p-10">
        <div className={`pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gradient-to-br ${c.accent} blur-3xl opacity-70`} />

        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          {/* Left: header + content */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-primary">Case Study {String(index + 1).padStart(2, "0")}</span>
              <span className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-primary">{c.industry}</span>
              <span className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-primary">{c.service}</span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold md:text-4xl">{c.title}</h3>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Block title="Client Challenge">{c.challenge}</Block>
              <Block title="Our Solution">{c.solution}</Block>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <div className="mb-2 text-xs uppercase tracking-widest text-primary/80">Technologies</div>
                <div className="flex flex-wrap gap-1.5">
                  {c.tech.map(t => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 text-xs uppercase tracking-widest text-primary/80">AI Features</div>
                <ul className="space-y-1.5">
                  {c.ai.map(a => (
                    <li key={a} className="flex items-start gap-2 text-sm">
                      <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 text-xs uppercase tracking-widest text-primary/80">Business Impact</div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {c.impact.map(im => (
                  <li key={im} className="flex items-start gap-2 text-sm">
                    <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {im}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: visual + results + testimonial */}
          <div className="space-y-6">
            <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${c.accent} ai-grid`}>
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-20 w-20 place-items-center rounded-3xl bg-gradient-brand shadow-glow animate-pulse-glow">
                  <Icon className="h-9 w-9 text-primary-foreground" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                {c.screens.map(s => (
                  <span key={s} className="rounded-full glass-strong px-2.5 py-1 text-[10px] uppercase tracking-widest text-foreground/90">{s}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {c.results.map(r => (
                <div key={r.l} className="glass rounded-2xl p-4 text-center">
                  <Counter to={r.v} suffix={r.suffix} />
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{r.l}</div>
                </div>
              ))}
            </div>

            <div className="glass relative rounded-2xl p-5">
              <Quote className="absolute -top-3 left-4 h-6 w-6 text-primary/70" />
              <p className="text-sm italic text-foreground/90">"{c.testimonial.quote}"</p>
              <div className="mt-3 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground/90">{c.testimonial.name}</span> — {c.testimonial.role}, {c.testimonial.company}
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="relative mt-10 border-t border-white/10 pt-8">
            <div className="mb-4 text-xs uppercase tracking-widest text-primary/80">You May Also Like</div>
            <div className="grid gap-4 md:grid-cols-3">
              {related.map(r => {
                const RIcon = r.icon;
                return (
                  <a key={r.id} href={`#${r.id}`}
                    className="group flex items-center gap-3 rounded-2xl glass p-4 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
                    <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${r.accent}`}>
                      <RIcon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold">{r.title}</div>
                      <div className="truncate text-[11px] uppercase tracking-widest text-muted-foreground">{r.industry} · {r.service}</div>
                    </div>
                    <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-primary transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 text-xs uppercase tracking-widest text-primary/80">{title}</div>
      <p className="text-sm text-muted-foreground">{children}</p>
    </div>
  );
}
