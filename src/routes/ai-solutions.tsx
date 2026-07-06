import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Headphones, TrendingUp, HeartPulse, Home, Landmark, ShoppingBag, GraduationCap,
  FileText, BookOpen, ArrowRight, Sparkles, Check, Bot, Cpu, Cloud, Database,
  Layers, ChevronDown, Zap, ShieldCheck, LineChart, MessageSquare, Brain,
} from "lucide-react";
import { ParticleNetwork } from "../components/ParticleNetwork";
import { SectionHeading } from "../components/SectionHeading";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/ai-solutions")({
  head: () => ({
    meta: [
      { title: "AI Solutions — Enterprise AI for Every Industry | ALStreamTech" },
      { name: "description", content: "Industry-specific AI solutions for support, sales, healthcare, finance, e-commerce, education, documents and internal knowledge — with measurable ROI." },
      { property: "og:title", content: "AI Solutions Designed for Real Business Challenges" },
      { property: "og:description", content: "Enterprise AI that automates operations, improves CX and drives measurable outcomes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AISolutions,
});

/* ---------- Hero visualization ---------- */

const HERO_INDUSTRIES = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Landmark, label: "Finance" },
  { icon: TrendingUp, label: "Sales" },
  { icon: Headphones, label: "Support" },
  { icon: Home, label: "Real Estate" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingBag, label: "E-Commerce" },
  { icon: FileText, label: "Documents" },
];

function EcosystemVisual() {
  const R = 150;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
      <svg viewBox="-200 -200 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="line" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="core" cx="50%" cy="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[80, 130, 180].map((r, i) => (
          <circle key={r} r={r} fill="none" stroke="hsl(var(--primary))" strokeOpacity={0.15} strokeDasharray="3 6" style={{ animation: `spin ${30 + i * 15}s linear infinite`, transformOrigin: "center" }} />
        ))}
        {HERO_INDUSTRIES.map((_, i) => {
          const a = (i / HERO_INDUSTRIES.length) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(a) * R, y = Math.sin(a) * R;
          return (
            <line key={i} x1={0} y1={0} x2={x} y2={y} stroke="url(#line)" strokeWidth={1.2}>
              <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" begin={`${i * 0.2}s`} />
            </line>
          );
        })}
        <circle r="90" fill="url(#core)" opacity="0.35" />
        <circle r="34" fill="hsl(var(--primary))" opacity="0.9">
          <animate attributeName="r" values="30;38;30" dur="3s" repeatCount="indefinite" />
        </circle>
        <text textAnchor="middle" dy="5" className="fill-primary-foreground" style={{ fontSize: 11, fontWeight: 700 }}>AI CORE</text>
      </svg>
      {HERO_INDUSTRIES.map(({ icon: Icon, label }, i) => {
        const a = (i / HERO_INDUSTRIES.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + (Math.cos(a) * R * 100) / 400;
        const y = 50 + (Math.sin(a) * R * 100) / 400;
        return (
          <div key={label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%`, animation: `float 4s ease-in-out ${i * 0.25}s infinite` }}>
            <div className="glass-strong group flex flex-col items-center gap-1 rounded-2xl px-3 py-2 shadow-glow transition hover:scale-110">
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-[10px] font-medium uppercase tracking-wider">{label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 opacity-70"><ParticleNetwork density={55} /></div>
      <div className="absolute inset-0 ai-grid opacity-20" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary animate-fade-up">
            <Sparkles className="h-3 w-3" /> AI Innovation Hub
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
            AI Solutions Designed for <span className="text-gradient">Real Business Challenges</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up">
            Discover how artificial intelligence can automate operations, improve customer experiences, increase productivity and help your business make smarter decisions — through industry-specific AI solutions tailored to your goals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]">
              Schedule AI Consultation <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <a href="#solutions" className="glass rounded-2xl px-6 py-3 font-semibold transition hover:bg-white/10">Explore AI Solutions</a>
            <Link to="/contact" className="rounded-2xl px-6 py-3 font-semibold text-muted-foreground transition hover:text-foreground">Discuss Your AI Project →</Link>
          </div>
        </div>
        <div className="relative"><EcosystemVisual /></div>
      </div>
    </section>
  );
}

/* ---------- Industry solutions ---------- */

type Industry = {
  id: string;
  icon: typeof Bot;
  title: string;
  short: string;
  heading: string;
  problems: string[];
  capabilities: string[];
  benefits: string[];
  useCases: string[];
  workflow: string[];
  metrics?: { value: string; label: string }[];
  demo: "chat" | "leads" | "health" | "realestate" | "finance" | "ecom" | "edu" | "docs" | "kb";
};

const INDUSTRIES: Industry[] = [
  { id: "support", icon: Headphones, title: "Customer Support", short: "24/7 intelligent support that resolves issues instantly.",
    heading: "24/7 Intelligent Customer Support",
    problems: ["Long response times", "High support costs", "Repetitive tickets", "Limited coverage hours"],
    capabilities: ["AI Chatbots", "Support Assistants", "Ticket Routing", "FAQ Automation", "Sentiment Analysis", "Multilingual Support"],
    benefits: ["Reduced Support Costs", "Faster Response Times", "24/7 Availability", "Improved Customer Experience"],
    useCases: ["SaaS L1 support", "E-commerce order help", "Telecom troubleshooting"],
    workflow: ["Customer Question", "AI Analysis", "Instant Response", "Resolution", "Customer Satisfaction"],
    metrics: [{ value: "70%", label: "Support Automation" }, { value: "90%", label: "Faster Response" }, { value: "24/7", label: "Availability" }],
    demo: "chat" },
  { id: "sales", icon: TrendingUp, title: "Sales", short: "Score, prioritize and convert leads with AI.",
    heading: "AI-Powered Sales Acceleration",
    problems: ["Unqualified leads", "Slow follow-up", "Missed opportunities", "Manual forecasting"],
    capabilities: ["Lead Qualification", "Sales Assistants", "Customer Segmentation", "Predictive Forecasting", "Personalized Recommendations", "Automated Follow-Ups"],
    benefits: ["Higher Lead Quality", "Faster Follow-Up", "Increased Conversions", "Sales Productivity"],
    useCases: ["Inbound lead scoring", "Outbound prospecting", "Deal-risk alerts"],
    workflow: ["Lead Captured", "AI Qualification", "Lead Scoring", "Sales Assignment", "Conversion"],
    demo: "leads" },
  { id: "healthcare", icon: HeartPulse, title: "Healthcare", short: "Automate admin, guide patients, augment clinicians.",
    heading: "Smarter Healthcare Through AI",
    problems: ["Admin overload", "Patient wait times", "Fragmented records", "Missed follow-ups"],
    capabilities: ["Patient Assistants", "Appointment Automation", "Medical Document Analysis", "Predictive Analytics", "Clinical Knowledge Assistants", "Workflow Automation"],
    benefits: ["Less Admin Workload", "Better Patient Experience", "Operational Efficiency"],
    useCases: ["Symptom triage", "Insurance intake", "Clinical Q&A"],
    workflow: ["Patient Request", "AI Assessment", "Scheduling", "Documentation", "Care Coordination"],
    demo: "health" },
  { id: "realestate", icon: Home, title: "Real Estate", short: "Match buyers to the right property, automatically.",
    heading: "AI Solutions for Modern Real Estate",
    problems: ["Slow lead response", "Poor property matching", "Fragmented market data"],
    capabilities: ["Recommendation Engines", "Property Assistants", "Lead Management", "Market Trend Analysis", "Valuation Tools", "Virtual Assistants"],
    benefits: ["Faster Lead Response", "Better Engagement", "Smarter Recommendations"],
    useCases: ["24/7 listing chat", "Investor market briefings", "Auto-valuations"],
    workflow: ["Property Inquiry", "AI Assistant", "Property Matching", "Lead Qualification", "Agent Assignment"],
    demo: "realestate" },
  { id: "finance", icon: Landmark, title: "Finance", short: "Detect fraud, forecast markets, automate compliance.",
    heading: "Intelligent Financial Solutions",
    problems: ["Fraud losses", "Manual compliance", "Slow risk decisions", "Data silos"],
    capabilities: ["Fraud Detection", "Risk Assessment", "Financial Forecasting", "Automated Compliance", "Support Automation", "Financial Analytics"],
    benefits: ["Lower Risk", "Better Forecasting", "Improved Compliance", "Faster Decisions"],
    useCases: ["Card fraud scoring", "KYC/AML checks", "Portfolio insights"],
    workflow: ["Transaction Data", "AI Analysis", "Risk Detection", "Decision Support", "Action"],
    demo: "finance" },
  { id: "ecom", icon: ShoppingBag, title: "E-Commerce", short: "Personalize every shopper journey in real time.",
    heading: "Personalized Shopping Experiences",
    problems: ["Low conversion", "Cart abandonment", "Inventory blind spots"],
    capabilities: ["Recommendation Engines", "Behavior Analysis", "Shopping Assistants", "Inventory Forecasting", "Personalized Marketing", "Sales Analytics"],
    benefits: ["Increased Sales", "Higher Conversion", "Better Customer Experience"],
    useCases: ["Product recs", "Abandoned-cart AI", "Dynamic pricing"],
    workflow: ["Customer Activity", "AI Analysis", "Recommendations", "Purchase", "Retention"],
    demo: "ecom" },
  { id: "education", icon: GraduationCap, title: "Education", short: "AI tutors, personalized learning, admin automation.",
    heading: "AI-Powered Learning & Education",
    problems: ["One-size-fits-all curricula", "Teacher overload", "Low engagement"],
    capabilities: ["AI Tutors", "Student Assistants", "Personalized Learning", "Content Generation", "Performance Analytics", "Admin Automation"],
    benefits: ["Personalized Learning", "Higher Engagement", "Less Admin Workload"],
    useCases: ["Homework tutor", "Adaptive quizzes", "Grading assistants"],
    workflow: ["Student Request", "AI Tutor", "Learning Support", "Progress Tracking", "Insights"],
    demo: "edu" },
  { id: "documents", icon: FileText, title: "Document Processing", short: "OCR + LLM pipelines that turn paper into data.",
    heading: "Automate Documents with AI",
    problems: ["Manual data entry", "Slow contract review", "Compliance errors"],
    capabilities: ["OCR Processing", "Invoice Automation", "Contract Analysis", "Form Processing", "Data Extraction", "Compliance Verification"],
    benefits: ["Less Manual Effort", "Faster Processing", "Higher Accuracy"],
    useCases: ["AP automation", "Contract summaries", "KYC document intake"],
    workflow: ["Document Upload", "AI Extraction", "Classification", "Validation", "Storage"],
    metrics: [{ value: "90%", label: "Faster Processing" }, { value: "80%", label: "Less Manual Work" }, { value: "99%", label: "Data Accuracy" }],
    demo: "docs" },
  { id: "knowledge", icon: BookOpen, title: "Internal Knowledge Base", short: "Enterprise knowledge at every employee's fingertips.",
    heading: "Enterprise Knowledge at Your Employees' Fingertips",
    problems: ["Scattered docs", "Slow onboarding", "Repetitive HR/IT questions"],
    capabilities: ["Internal Assistants", "Policy Search", "Document Intelligence", "Employee Support", "Knowledge Retrieval", "Training Assistants"],
    benefits: ["Faster Information Access", "Improved Productivity", "Fewer Internal Tickets"],
    useCases: ["HR policy Q&A", "Engineering runbooks", "Sales enablement"],
    workflow: ["Employee Question", "AI Knowledge Search", "Relevant Information", "Instant Answer"],
    demo: "kb" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SolutionCard({ ind, onOpen }: { ind: Industry; onOpen: () => void }) {
  const Icon = ind.icon;
  const go = () => scrollToId(ind.id);
  return (
    <div
      role="link"
      tabIndex={0}
      onClick={go}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } }}
      className="glass-strong group relative cursor-pointer overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:border-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition group-hover:bg-primary/40" />
      <div className="relative">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="font-display text-lg font-semibold">{ind.title}</div>
        <p className="mt-2 text-sm text-muted-foreground">{ind.short}</p>

        <div className="mt-4 max-h-0 overflow-hidden text-xs text-muted-foreground opacity-0 transition-all duration-500 group-hover:max-h-96 group-hover:opacity-100">
          <div className="grid gap-3 pt-3">
            <div>
              <div className="font-semibold text-foreground">Solves</div>
              <ul className="mt-1 list-disc space-y-0.5 pl-4">{ind.problems.slice(0, 3).map(p => <li key={p}>{p}</li>)}</ul>
            </div>
            <div>
              <div className="font-semibold text-foreground">Capabilities</div>
              <div className="mt-1 flex flex-wrap gap-1">{ind.capabilities.slice(0, 4).map(c => <span key={c} className="glass rounded-md px-1.5 py-0.5 text-[10px]">{c}</span>)}</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">Benefits</div>
              <div className="mt-1 flex flex-wrap gap-1">{ind.benefits.slice(0, 3).map(b => <span key={b} className="text-primary">✓ {b}</span>)}</div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <button
            onClick={(e) => { e.stopPropagation(); go(); }}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Learn More <ArrowRight className="h-3 w-3" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(); }}
            className="text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            Quick view
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Demos ---------- */

function ChatDemo() {
  const [step, setStep] = useState(0);
  useEffect(() => { const t = setInterval(() => setStep(s => (s + 1) % 4), 2200); return () => clearInterval(t); }, []);
  const msgs = [
    { from: "user", text: "My order hasn't arrived yet." },
    { from: "ai", text: "I found order #A-3821 — shipping delay detected. I've refunded shipping and expedited delivery." },
    { from: "user", text: "Can I return an item too?" },
    { from: "ai", text: "Sure — I've generated a prepaid return label and emailed it to you." },
  ];
  return (
    <div className="glass-strong rounded-2xl p-4 text-sm">
      <div className="mb-3 flex items-center gap-2 border-b border-white/5 pb-2">
        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" /> <span className="text-xs text-muted-foreground">AI Support · Live</span>
      </div>
      <div className="space-y-2">
        {msgs.slice(0, step + 1).map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"} animate-fade-in`}>
            <div className={`max-w-[80%] rounded-2xl px-3 py-2 ${m.from === "user" ? "bg-primary/20" : "glass"}`}>{m.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeadsDemo() {
  const leads = [
    { n: "Acme Corp", score: 92, tag: "Hot" }, { n: "Nova Health", score: 78, tag: "Warm" }, { n: "Orbit SaaS", score: 64, tag: "Warm" }, { n: "Peak Retail", score: 41, tag: "Cold" },
  ];
  return (
    <div className="glass-strong rounded-2xl p-4 text-sm">
      <div className="mb-3 text-xs uppercase tracking-widest text-primary">AI Lead Scoring</div>
      <div className="space-y-2">
        {leads.map((l, i) => (
          <div key={l.n} className="flex items-center gap-3">
            <div className="w-28 truncate font-medium">{l.n}</div>
            <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/5">
              <div className="absolute inset-y-0 left-0 bg-gradient-brand" style={{ width: `${l.score}%`, animation: `grow 1.2s ${i * 0.15}s ease-out both` }} />
            </div>
            <div className="w-10 text-right text-xs font-mono">{l.score}</div>
            <span className={`rounded-full px-2 py-0.5 text-[10px] ${l.tag === "Hot" ? "bg-red-500/20 text-red-300" : l.tag === "Warm" ? "bg-amber-500/20 text-amber-300" : "bg-blue-500/20 text-blue-300"}`}>{l.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HealthDemo() {
  return (
    <div className="glass-strong rounded-2xl p-4 text-sm space-y-2">
      <div className="text-xs uppercase tracking-widest text-primary">Patient Assistant</div>
      <div className="glass rounded-xl p-3">Hi Sarah — based on your symptoms, I recommend a same-day virtual visit.</div>
      <div className="glass rounded-xl p-3">📅 Booked: Dr. Lee · Today 3:20 PM · Video</div>
      <div className="glass rounded-xl p-3">📝 Pre-visit intake form auto-completed from your history.</div>
    </div>
  );
}

function RealEstateDemo() {
  const props = [{ p: "$820K · 3BR · Downtown", m: 96 }, { p: "$740K · 3BR · Riverside", m: 91 }, { p: "$690K · 2BR · Midtown", m: 84 }];
  return (
    <div className="glass-strong rounded-2xl p-4 text-sm space-y-2">
      <div className="text-xs uppercase tracking-widest text-primary">AI Property Matches</div>
      {props.map((x, i) => (
        <div key={i} className="glass flex items-center justify-between rounded-xl p-3 transition hover:border-primary/40">
          <span>{x.p}</span> <span className="text-primary font-mono">{x.m}% match</span>
        </div>
      ))}
    </div>
  );
}

function FinanceDemo() {
  return (
    <div className="glass-strong rounded-2xl p-4 text-sm">
      <div className="mb-3 text-xs uppercase tracking-widest text-primary">Fraud Monitor · Live</div>
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="glass rounded-xl p-3"><div className="font-mono text-lg text-green-400">1,284</div>Approved</div>
        <div className="glass rounded-xl p-3"><div className="font-mono text-lg text-amber-400">37</div>Flagged</div>
        <div className="glass rounded-xl p-3"><div className="font-mono text-lg text-red-400">4</div>Blocked</div>
      </div>
      <div className="mt-3 h-16 relative overflow-hidden rounded-xl glass">
        <svg viewBox="0 0 200 60" className="h-full w-full">
          <polyline fill="none" stroke="hsl(var(--primary))" strokeWidth="2" points="0,40 20,35 40,42 60,30 80,32 100,20 120,28 140,15 160,22 180,10 200,18" />
        </svg>
      </div>
    </div>
  );
}

function EcomDemo() {
  const items = ["Wireless Headphones", "Smart Watch v3", "Noise-Cancel Buds"];
  return (
    <div className="glass-strong rounded-2xl p-4 text-sm">
      <div className="mb-2 text-xs uppercase tracking-widest text-primary">Recommended for You</div>
      <div className="grid grid-cols-3 gap-2">
        {items.map((it, i) => (
          <div key={it} className="glass rounded-xl p-3 text-center animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="mx-auto mb-2 h-12 w-12 rounded-lg bg-gradient-brand/60" />
            <div className="text-xs">{it}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EduDemo() {
  return (
    <div className="glass-strong rounded-2xl p-4 text-sm space-y-2">
      <div className="text-xs uppercase tracking-widest text-primary">AI Tutor</div>
      <div className="glass rounded-xl p-3">Q: Solve 2x + 6 = 14</div>
      <div className="glass rounded-xl p-3">Step 1: 2x = 14 − 6 = 8</div>
      <div className="glass rounded-xl p-3">Step 2: x = 8 / 2 = <span className="text-primary font-semibold">4</span></div>
    </div>
  );
}

function DocsDemo() {
  return (
    <div className="glass-strong rounded-2xl p-4 text-sm">
      <div className="mb-2 text-xs uppercase tracking-widest text-primary">Invoice → Structured Data</div>
      <div className="grid grid-cols-2 gap-3">
        <div className="glass rounded-xl p-3 space-y-1">
          <div className="h-2 w-3/4 rounded bg-white/10" /><div className="h-2 w-1/2 rounded bg-white/10" /><div className="h-2 w-2/3 rounded bg-white/10" /><div className="h-2 w-1/3 rounded bg-white/10" />
        </div>
        <div className="glass rounded-xl p-3 font-mono text-[11px] space-y-1">
          <div>vendor: <span className="text-primary">Acme Ltd</span></div>
          <div>total: <span className="text-primary">$4,820.00</span></div>
          <div>date: <span className="text-primary">2026-07-01</span></div>
          <div>status: <span className="text-green-400">valid ✓</span></div>
        </div>
      </div>
    </div>
  );
}

function KBDemo() {
  return (
    <div className="glass-strong rounded-2xl p-4 text-sm space-y-2">
      <div className="text-xs uppercase tracking-widest text-primary">Internal Assistant</div>
      <div className="glass rounded-xl p-3">👤 What's the leave approval process?</div>
      <div className="glass rounded-xl p-3">🤖 Submit via HRIS → Manager approves in 48h → HR confirms. Policy: 22 PTO days/yr. <span className="text-primary underline">HR-POL-014</span></div>
    </div>
  );
}

function Demo({ kind }: { kind: Industry["demo"] }) {
  switch (kind) {
    case "chat": return <ChatDemo />;
    case "leads": return <LeadsDemo />;
    case "health": return <HealthDemo />;
    case "realestate": return <RealEstateDemo />;
    case "finance": return <FinanceDemo />;
    case "ecom": return <EcomDemo />;
    case "edu": return <EduDemo />;
    case "docs": return <DocsDemo />;
    case "kb": return <KBDemo />;
  }
}

/* ---------- Industry section ---------- */

function IndustrySection({ ind, index }: { ind: Industry; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <section id={ind.id} className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
      <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div>
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
            <ind.icon className="h-3 w-3" /> {ind.title}
          </div>
          <h3 className="mt-4 font-display text-3xl font-bold md:text-4xl">{ind.heading}</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Solutions</div>
              <ul className="mt-2 space-y-1.5 text-sm">
                {ind.capabilities.map(c => <li key={c} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" />{c}</li>)}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Benefits</div>
              <ul className="mt-2 space-y-1.5 text-sm">
                {ind.benefits.map(b => <li key={b} className="flex gap-2"><Zap className="h-4 w-4 shrink-0 text-primary" />{b}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-6 glass rounded-2xl p-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">AI Workflow</div>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              {ind.workflow.map((w, i) => (
                <div key={w} className="flex items-center gap-2">
                  <span className="glass rounded-lg px-2.5 py-1.5 font-medium">{w}</span>
                  {i < ind.workflow.length - 1 && <ArrowRight className="h-3 w-3 text-primary" />}
                </div>
              ))}
            </div>
          </div>

          {ind.metrics && (
            <div className="mt-6 grid grid-cols-3 gap-3">
              {ind.metrics.map(m => (
                <div key={m.label} className="glass-strong rounded-2xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-gradient">{m.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" />
          <div className="relative"><Demo kind={ind.demo} /></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Comparison matrix ---------- */

const MATRIX = [
  { i: "Customer Support", c: "Long response times & high ticket volume", s: "AI Chatbots + Ticket Routing", o: "70% automated, 90% faster replies" },
  { i: "Sales", c: "Unqualified leads & slow follow-up", s: "AI Lead Scoring + Automation", o: "2× conversion, faster pipeline" },
  { i: "Healthcare", c: "Admin overload & patient wait times", s: "Patient Assistants + Document AI", o: "60% less admin work" },
  { i: "Real Estate", c: "Slow lead response & poor matching", s: "Property Recommendation Engine", o: "3× lead engagement" },
  { i: "Finance", c: "Fraud losses & manual compliance", s: "Fraud Detection + Risk AI", o: "80% fewer false positives" },
  { i: "E-Commerce", c: "Low conversion & cart abandonment", s: "Personalization Engine", o: "+35% AOV, +25% conversion" },
  { i: "Education", c: "One-size-fits-all learning", s: "AI Tutors + Adaptive Learning", o: "Higher engagement & outcomes" },
  { i: "Documents", c: "Manual data entry", s: "OCR + LLM extraction", o: "90% faster processing" },
  { i: "Knowledge Base", c: "Scattered internal information", s: "Enterprise AI Search", o: "Instant answers, less tickets" },
];

function Matrix() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="Solution Matrix" title={<>Find the right <span className="text-gradient">AI solution</span></>} description="Match your business challenge to the AI capability and outcome." />
      <div className="glass-strong overflow-hidden rounded-3xl">
        <div className="hidden grid-cols-4 gap-4 border-b border-white/5 bg-white/5 px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground md:grid">
          <div>Industry</div><div>Business Challenge</div><div>AI Solution</div><div>Business Outcome</div>
        </div>
        {MATRIX.map(r => (
          <div key={r.i} className="grid grid-cols-1 gap-2 border-b border-white/5 px-6 py-4 text-sm transition hover:bg-primary/5 md:grid-cols-4 md:gap-4">
            <div className="font-semibold">{r.i}</div>
            <div className="text-muted-foreground">{r.c}</div>
            <div>{r.s}</div>
            <div className="text-primary">{r.o}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Technologies ---------- */

const TECH_GROUPS = [
  { icon: Brain, name: "AI Models", items: ["OpenAI GPT", "Gemini", "Claude"] },
  { icon: Layers, name: "AI Frameworks", items: ["LangChain", "LlamaIndex"] },
  { icon: Cpu, name: "Machine Learning", items: ["TensorFlow", "PyTorch"] },
  { icon: Database, name: "Data Platforms", items: ["Pinecone", "Weaviate", "PostgreSQL"] },
  { icon: Cloud, name: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
];

function Technologies() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="Stack" title={<>Technologies powering our <span className="text-gradient">AI solutions</span></>} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TECH_GROUPS.map((g, gi) => (
          <div key={g.name} className="glass-strong rounded-3xl p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                <g.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="font-display font-semibold">{g.name}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((t, i) => (
                <span key={t} className="glass inline-flex rounded-xl px-3 py-1.5 text-sm transition hover:bg-primary/20 hover:text-primary" style={{ animation: `float-tag 5s ease-in-out ${(gi + i) * 0.3}s infinite` }}>
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

/* ---------- Success stories ---------- */

const STORIES = [
  { industry: "E-Commerce", challenge: "Low conversion on product pages", solution: "Real-time recommendation engine", tech: ["GPT-4", "Pinecone", "Node.js"], result: "+35% AOV, +25% conversion" },
  { industry: "Finance", challenge: "High card fraud losses", solution: "Real-time fraud scoring model", tech: ["PyTorch", "AWS", "Kafka"], result: "80% fewer false positives" },
  { industry: "Healthcare", challenge: "Slow patient intake", solution: "AI patient assistant + intake forms", tech: ["Claude", "LangChain", "HIPAA"], result: "60% less admin time" },
  { industry: "Support", challenge: "Growing ticket backlog", solution: "AI chatbot grounded on KB", tech: ["GPT-4", "Weaviate", "Zendesk"], result: "70% ticket automation" },
  { industry: "Real Estate", challenge: "Missed after-hours leads", solution: "24/7 AI property assistant", tech: ["Gemini", "PostgreSQL"], result: "3× more qualified leads" },
  { industry: "Documents", challenge: "Manual invoice entry", solution: "OCR + LLM AP pipeline", tech: ["TensorFlow", "Azure"], result: "90% faster processing" },
];

function Stories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="Success Stories" title={<>Real AI <span className="text-gradient">success stories</span></>} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {STORIES.map((s, i) => (
          <div key={i} className="glass-strong group relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition group-hover:bg-primary/40" />
            <div className="relative">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">{s.industry}</div>
              <div className="mt-3 text-sm text-muted-foreground">Challenge</div>
              <div className="font-medium">{s.challenge}</div>
              <div className="mt-3 text-sm text-muted-foreground">Solution</div>
              <div className="font-medium">{s.solution}</div>
              <div className="mt-3 flex flex-wrap gap-1">{s.tech.map(t => <span key={t} className="glass rounded-md px-2 py-0.5 text-[10px]">{t}</span>)}</div>
              <div className="mt-4 rounded-xl bg-primary/10 p-3 text-sm font-semibold text-primary">{s.result}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Metrics counters ---------- */

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen]);
  return { ref, seen };
}

function Counter({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  return <div ref={ref} className="font-display text-4xl font-bold text-gradient md:text-5xl">{v}{suffix}</div>;
}

const IMPACT = [
  { to: 100, suffix: "+", label: "AI Solutions Delivered" },
  { to: 50, suffix: "+", label: "Businesses Served" },
  { to: 1000, suffix: "+", label: "Processes Automated" },
  { to: 70, suffix: "%", label: "Avg. Cost Reduction" },
  { to: 60, suffix: "%", label: "Productivity Increase" },
  { to: 98, suffix: "%", label: "Client Satisfaction" },
];

function Impact() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="glass-strong rounded-3xl p-10">
        <SectionHeading eyebrow="Business Impact" title={<>Outcomes <span className="text-gradient">clients measure</span></>} />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {IMPACT.map(m => (
            <div key={m.label} className="text-center">
              <Counter to={m.to} suffix={m.suffix} />
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Process timeline ---------- */

const PROCESS = ["Discovery", "Business Analysis", "AI Strategy", "Development", "Integration", "Testing", "Deployment", "Optimization"];

function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="Process" title={<>Our AI <span className="text-gradient">implementation process</span></>} />
      <div className="relative overflow-x-auto pb-4">
        <div className="flex min-w-max items-center gap-3">
          {PROCESS.map((p, i) => (
            <div key={p} className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="glass-strong flex min-w-[160px] flex-col items-center rounded-2xl px-5 py-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-xs font-bold text-primary-foreground shadow-glow">{i + 1}</div>
                <div className="mt-2 text-sm font-semibold">{p}</div>
              </div>
              {i < PROCESS.length - 1 && <ArrowRight className="h-4 w-4 shrink-0 text-primary" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

const FAQS = [
  { q: "Which industries benefit most from AI?", a: "Any industry with repetitive processes, high data volume or customer-facing operations — support, sales, healthcare, finance, e-commerce, education and real estate see the fastest ROI." },
  { q: "How long does AI implementation take?", a: "A focused pilot typically ships in 4–8 weeks. Enterprise-grade rollouts with deep integrations take 3–6 months depending on scope." },
  { q: "Can AI integrate with existing systems?", a: "Yes. We integrate with CRMs (Salesforce, HubSpot), ERPs, data warehouses, help-desks, EHRs and custom APIs — securely and with full audit logs." },
  { q: "Is AI secure?", a: "We follow SOC 2 practices: encryption in transit/at rest, RBAC, PII redaction, prompt-injection defenses, private model deployment and full audit trails." },
  { q: "What is the typical ROI of AI projects?", a: "Well-scoped projects usually pay back within 3–9 months through automation, higher conversion, lower support costs and faster decisions." },
  { q: "Can AI solutions scale as the business grows?", a: "Yes — we build on cloud-native, event-driven architectures that scale horizontally and support multi-region deployments." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeading eyebrow="FAQ" title={<>Frequently asked <span className="text-gradient">questions</span></>} />
      <div className="space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="glass-strong overflow-hidden rounded-2xl">
              <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="font-semibold">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Detail modal ---------- */

function DetailModal({ ind, onClose }: { ind: Industry | null; onClose: () => void }) {
  useEffect(() => {
    if (!ind) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    };
  }, [ind, onClose]);
  if (!ind) return null;
  const Icon = ind.icon;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="glass-strong relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl animate-scale-in" onClick={e => e.stopPropagation()}>
        <div className="sticky top-0 z-10 flex items-start gap-4 border-b border-white/10 bg-background/80 p-6 backdrop-blur-md">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs uppercase tracking-widest text-primary">{ind.title}</div>
            <h3 className="font-display text-xl font-bold md:text-2xl">{ind.heading}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-muted-foreground transition hover:bg-white/10 hover:text-foreground"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Problems Solved</div>
              <ul className="mt-2 space-y-1 text-sm">{ind.problems.map(p => <li key={p} className="flex gap-2"><ShieldCheck className="h-4 w-4 shrink-0 text-primary" />{p}</li>)}</ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">AI Capabilities</div>
              <ul className="mt-2 space-y-1 text-sm">{ind.capabilities.map(c => <li key={c} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" />{c}</li>)}</ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Benefits</div>
              <ul className="mt-2 space-y-1 text-sm">{ind.benefits.map(b => <li key={b} className="flex gap-2"><Zap className="h-4 w-4 shrink-0 text-primary" />{b}</li>)}</ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Example Use Cases</div>
              <ul className="mt-2 space-y-1 text-sm">{ind.useCases.map(u => <li key={u} className="flex gap-2"><LineChart className="h-4 w-4 shrink-0 text-primary" />{u}</li>)}</ul>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 flex flex-col gap-3 border-t border-white/10 bg-background/80 p-6 backdrop-blur-md sm:flex-row">
          <Link to="/contact" className="flex-1 rounded-2xl bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]">Discuss This Solution</Link>
          <a href={`#${ind.id}`} onClick={(e) => { e.preventDefault(); onClose(); setTimeout(() => scrollToId(ind.id), 50); }} className="glass rounded-2xl px-5 py-3 text-center text-sm font-semibold hover:bg-white/10">View Section</a>
        </div>
      </div>
    </div>
  );
}

/* ---------- Final CTA ---------- */

function FinalCTA() {
  return (
    <section className="relative mx-auto my-24 max-w-7xl px-6">
      <div className="glass-strong relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20">
        <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute inset-0 opacity-40"><ParticleNetwork density={25} /></div>
        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">Get Started</div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
              Ready to Transform Your Business <span className="text-gradient">with AI?</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Whether you need AI for customer support, sales, healthcare, finance, e-commerce, education, document automation or internal knowledge — we design and build solutions tailored to your business goals.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/contact" className="group flex items-center justify-between rounded-2xl bg-gradient-brand px-6 py-4 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]">
              Schedule AI Consultation <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="glass group flex items-center justify-between rounded-2xl px-6 py-4 font-semibold transition hover:bg-white/10">
              Discuss Your AI Project <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="glass group flex items-center justify-between rounded-2xl px-6 py-4 font-semibold transition hover:bg-white/10">
              Request a Custom Solution <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */

function AISolutions() {
  const [detail, setDetail] = useState<Industry | null>(null);
  return (
    <>
      <style>{`
        @keyframes float { 0%,100%{transform:translate(-50%,-50%)} 50%{transform:translate(-50%,calc(-50% - 6px))} }
        @keyframes float-tag { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes grow { from { width: 0 } }
      `}</style>

      <Hero />

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Solutions" title={<>AI Solutions for <span className="text-gradient">every industry</span></>} description="Nine domain-tuned AI solutions, ready to deploy into your existing systems." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map(ind => <SolutionCard key={ind.id} ind={ind} onOpen={() => setDetail(ind)} />)}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <div className="glass-strong rounded-3xl p-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <MessageSquare className="h-4 w-4 shrink-0 text-primary" />
            <span className="shrink-0 pr-2 font-semibold uppercase tracking-widest text-muted-foreground">Jump to:</span>
            {INDUSTRIES.map(i => (
              <a key={i.id} href={`#${i.id}`} onClick={(e) => { e.preventDefault(); scrollToId(i.id); }} className="glass shrink-0 rounded-full px-3 py-1 hover:bg-primary/20 hover:text-primary">{i.title}</a>
            ))}
          </div>
        </div>
      </div>

      {INDUSTRIES.map((ind, i) => <IndustrySection key={ind.id} ind={ind} index={i} />)}

      <Matrix />
      <Technologies />
      <Stories />
      <Impact />
      <Process />
      <FAQ />
      <FinalCTA />

      <DetailModal ind={detail} onClose={() => setDetail(null)} />
      <CTASection />
    </>
  );
}
