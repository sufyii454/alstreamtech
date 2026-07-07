import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles, ArrowRight, Bot, FileText, Users, Target, Receipt, Mic,
  MessageCircle, Check, Zap, ShieldCheck, Play, Upload, Search,
  Brain, Send, TrendingUp, Clock, DollarSign, FileCheck, Phone,
  Building2, HeartHandshake, Briefcase, Wallet, Cog, Headphones, Crown,
} from "lucide-react";
import { ParticleNetwork } from "../components/ParticleNetwork";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/ai-solution-showcase")({
  head: () => ({
    meta: [
      { title: "AI Solutions Showcase — Practical AI for Real Business Challenges | ALStreamTech" },
      { name: "description", content: "Explore ALStreamTech's AI Solutions Showcase — chatbots, employee assistants, lead qualification, document summarization, invoice automation, voice AI and WhatsApp automation." },
      { property: "og:title", content: "AI Solutions Showcase — ALStreamTech" },
      { property: "og:description", content: "Practical, measurable AI solutions built to automate operations and grow your business." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AIShowcasePage,
});

/* ------------------------------------------------------------------ */
/*                            DATA                                    */
/* ------------------------------------------------------------------ */

type Solution = {
  id: string;
  icon: any;
  short: string;
  tag: string;
  heading: string;
  overview: string;
  problems: string[];
  features: string[];
  workflow: string[];
  benefits: string[];
  industries: string[];
  demo?: { user: string; ai: string; label?: string };
  extra?: "kpi" | "waveform" | "whatsapp" | "compare";
  cta: string;
};

const SOLUTIONS: Solution[] = [
  {
    id: "chatbot",
    icon: Bot,
    short: "AI Chatbot",
    tag: "Knowledge AI",
    heading: "Turn Your Company Knowledge into an AI Expert",
    overview:
      "An AI chatbot that instantly answers questions using your company documents, policies, manuals, SOPs, contracts, and knowledge bases.",
    problems: [
      "Employees can't find information quickly",
      "Repetitive customer questions",
      "Scattered company knowledge",
      "High support workload",
    ],
    features: [
      "Document Search", "PDF Analysis", "Natural Language Questions",
      "Knowledge Retrieval", "Multi-document Support", "Policy Lookup", "Secure Access Control",
    ],
    workflow: ["Upload Documents", "AI Indexing", "User Question", "AI Search", "Accurate Answer"],
    benefits: [
      "Faster information access",
      "Reduced support workload",
      "Increased productivity",
      "Better knowledge sharing",
    ],
    industries: ["Legal", "Healthcare", "Enterprise", "SaaS", "Consulting"],
    demo: {
      user: "What is our refund policy?",
      ai: "Based on your company policy, customers can request refunds within 30 days of purchase.",
    },
    cta: "Deploy your Knowledge AI",
  },
  {
    id: "employee",
    icon: Users,
    short: "Employee Assistant",
    tag: "Internal AI",
    heading: "Your Internal AI Employee Assistant",
    overview:
      "A conversational assistant that helps employees with HR, IT, onboarding, policies, meeting summaries and internal search — 24/7.",
    problems: [
      "Slow HR & IT ticket resolution",
      "Long onboarding cycles",
      "Fragmented internal tools",
      "Repetitive employee questions",
    ],
    features: [
      "HR Assistance", "IT Support", "Company Policy Lookup",
      "Employee Onboarding", "Internal Knowledge Search", "Meeting Summaries",
    ],
    workflow: ["Employee Question", "AI Understanding", "Knowledge Search", "Response", "Task Assistance"],
    benefits: ["Increased productivity", "Faster onboarding", "Reduced HR requests", "Better employee experience"],
    industries: ["Enterprise", "Tech", "Manufacturing", "Retail", "Public Sector"],
    demo: {
      user: "How many PTO days do I have left this year?",
      ai: "You have 12 PTO days remaining. Would you like me to open a leave request?",
    },
    cta: "Launch Employee Assistant",
  },
  {
    id: "lead",
    icon: Target,
    short: "Lead Qualification",
    tag: "Sales AI",
    heading: "Convert More Leads Automatically",
    overview:
      "An AI bot that qualifies inbound leads through natural conversations, scores them, books meetings and syncs everything to your CRM.",
    problems: [
      "Unqualified leads waste sales time",
      "Slow response to inquiries",
      "Manual CRM data entry",
      "Missed follow-ups",
    ],
    features: [
      "Lead Qualification", "Automated Conversations", "CRM Integration",
      "Lead Scoring", "Appointment Scheduling", "Follow-up Automation",
    ],
    workflow: ["Visitor Inquiry", "AI Conversation", "Qualification Questions", "Lead Score", "Sales Team Assignment"],
    benefits: ["Better lead quality", "Faster response", "Increased conversions", "Improved sales productivity"],
    industries: ["B2B SaaS", "Real Estate", "Finance", "Agencies", "Healthcare"],
    demo: {
      user: "I'm exploring an AI solution for our support team of ~40 agents.",
      ai: "Great — that fits our Growth tier. Can I book a 20-min call with a solutions engineer this week?",
    },
    cta: "Qualify More Leads",
  },
  {
    id: "doc",
    icon: FileText,
    short: "Document Summarizer",
    tag: "Document AI",
    heading: "Instantly Understand Large Documents",
    overview:
      "Turn long contracts, reports, and research into executive summaries, key insights, and clear action items — in seconds.",
    problems: [
      "Hours spent reviewing long docs",
      "Missed critical clauses",
      "Slow decision-making",
      "Knowledge locked in PDFs",
    ],
    features: [
      "Executive Summaries", "Key Insight Extraction", "Action Items",
      "Multi-document Analysis", "Smart Search", "Report Generation",
    ],
    workflow: ["Upload", "AI Analysis", "Key Insights", "Summary Generated", "Review"],
    benefits: ["Faster decision-making", "Reduced review time", "Better accessibility", "Higher productivity"],
    industries: ["Legal", "Finance", "Research", "Consulting", "Government"],
    extra: "compare",
    cta: "Summarize Your Documents",
  },
  {
    id: "invoice",
    icon: Receipt,
    short: "Invoice Processing",
    tag: "Finance AI",
    heading: "Automate Invoice Processing from Start to Finish",
    overview:
      "Extract, validate, approve and post invoices with AI + OCR — with full audit trails and ERP integration.",
    problems: [
      "Manual invoice data entry",
      "Slow approval cycles",
      "Duplicate & fraudulent invoices",
      "Missed early-payment discounts",
    ],
    features: [
      "OCR Extraction", "Invoice Validation", "Approval Workflow",
      "ERP Integration", "Duplicate Detection", "Reporting",
    ],
    workflow: ["Invoice Received", "AI Extraction", "Validation", "Approval", "Accounting Update"],
    benefits: ["Faster processing", "Fewer errors", "Lower AP cost", "Real-time visibility"],
    industries: ["Finance", "Manufacturing", "Retail", "Logistics", "Enterprise"],
    extra: "kpi",
    cta: "Automate Your AP",
  },
  {
    id: "voice",
    icon: Mic,
    short: "Voice Assistant",
    tag: "Voice AI",
    heading: "Voice-Powered Business Automation",
    overview:
      "A natural-sounding voice assistant that handles calls, books appointments, answers FAQs, and executes voice commands.",
    problems: [
      "Missed calls & long hold times",
      "After-hours coverage gaps",
      "Repetitive phone inquiries",
      "High call-center costs",
    ],
    features: [
      "Speech Recognition", "Voice Conversations", "Call Automation",
      "Appointment Booking", "Customer Support", "Voice Commands",
    ],
    workflow: ["Voice Request", "Speech Recognition", "AI Processing", "Response", "Voice Reply"],
    benefits: ["24/7 coverage", "Lower call-center cost", "Higher CSAT", "Instant answers"],
    industries: ["Healthcare", "Hospitality", "Retail", "Real Estate", "Automotive"],
    demo: {
      user: "What are your business hours?",
      ai: "Our office operates Monday through Friday from 9 AM to 6 PM.",
      label: "Voice",
    },
    extra: "waveform",
    cta: "Launch Voice AI",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    short: "WhatsApp Automation",
    tag: "Messaging AI",
    heading: "Automate Customer Engagement on WhatsApp",
    overview:
      "AI-powered WhatsApp automation for instant replies, lead capture, appointments, order tracking and support at scale.",
    problems: [
      "Delayed responses on WhatsApp",
      "Manual message handling",
      "Missed sales opportunities",
      "Fragmented conversations",
    ],
    features: [
      "Instant Replies", "Lead Capture", "Appointment Scheduling",
      "Order Tracking", "Customer Support", "Automated Notifications",
    ],
    workflow: ["WhatsApp Message", "AI Analysis", "Automated Response", "Business Action", "Customer Satisfaction"],
    benefits: ["Instant responses", "Higher engagement", "More bookings", "Lower support cost"],
    industries: ["E-commerce", "Clinics", "Education", "Real Estate", "Travel"],
    demo: {
      user: "I want to schedule a consultation.",
      ai: "I'd be happy to help. What date and time works best for you?",
    },
    extra: "whatsapp",
    cta: "Automate WhatsApp",
  },
];

const COMPARISON = [
  { sol: "Company Knowledge Chatbot", best: "Internal & customer support", benefit: "Instant knowledge access", automation: "High", roi: "6–10x", time: "2–4 weeks" },
  { sol: "Employee AI Assistant", best: "HR, IT, Ops teams", benefit: "Fewer internal tickets", automation: "High", roi: "5–8x", time: "3–5 weeks" },
  { sol: "Lead Qualification Bot", best: "Sales & marketing", benefit: "More qualified pipeline", automation: "Very High", roi: "8–12x", time: "2–3 weeks" },
  { sol: "Document Summarizer", best: "Legal, finance, research", benefit: "Faster decisions", automation: "Medium", roi: "4–7x", time: "1–2 weeks" },
  { sol: "Invoice Processing", best: "Finance / AP teams", benefit: "Straight-through processing", automation: "Very High", roi: "10–15x", time: "4–6 weeks" },
  { sol: "Voice Assistant", best: "Contact centers", benefit: "24/7 call handling", automation: "High", roi: "6–9x", time: "4–6 weeks" },
  { sol: "WhatsApp Automation", best: "Consumer businesses", benefit: "Instant engagement", automation: "High", roi: "7–10x", time: "1–3 weeks" },
];

const DEPARTMENTS: Record<string, { icon: any; recs: string[] }> = {
  Sales:            { icon: Briefcase,     recs: ["lead", "whatsapp", "chatbot"] },
  HR:               { icon: HeartHandshake, recs: ["employee", "chatbot", "doc"] },
  Finance:          { icon: Wallet,        recs: ["invoice", "doc", "chatbot"] },
  Operations:       { icon: Cog,           recs: ["doc", "invoice", "employee"] },
  "Customer Service": { icon: Headphones,  recs: ["chatbot", "voice", "whatsapp"] },
  Management:       { icon: Crown,         recs: ["doc", "employee", "chatbot"] },
};

const METRICS = [
  { value: 1_000_000, suffix: "M+", divisor: 1_000_000, label: "Tasks Automated" },
  { value: 100_000,   suffix: "K+", divisor: 1_000,     label: "Hours Saved" },
  { value: 5_000_000, suffix: "M+", divisor: 1_000_000, label: "Documents Processed" },
  { value: 500_000,   suffix: "K+", divisor: 1_000,     label: "Leads Qualified" },
  { value: 10_000_000,suffix: "M+", divisor: 1_000_000, label: "Customer Conversations" },
  { value: 98,        suffix: "%",  divisor: 1,         label: "Client Satisfaction" },
];

/* ------------------------------------------------------------------ */
/*                          HOOKS                                     */
/* ------------------------------------------------------------------ */

function useReveal<T extends HTMLElement>(ref: React.RefObject<T | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.12 }
    );
    el.querySelectorAll("[data-reveal]").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [ref]);
}

function useCounter(target: number, divisor: number, start: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1400;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(eased * (target / divisor));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, divisor, start]);
  return val;
}

/* ------------------------------------------------------------------ */
/*                          PAGE                                      */
/* ------------------------------------------------------------------ */

function AIShowcasePage() {
  const root = useRef<HTMLDivElement>(null);
  useReveal(root);

  return (
    <div ref={root} className="relative overflow-hidden bg-background text-foreground">
      <PageBackground />
      <Hero />
      <ShowcaseSection />
      <ComparisonSection />
      <DepartmentExplorer />
      <MetricsSection />
      <FinalCTA />
      <style>{revealCss}</style>
    </div>
  );
}

const revealCss = `
[data-reveal]{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease}
[data-reveal].in-view{opacity:1;transform:translateY(0)}
[data-reveal-delay="1"]{transition-delay:.08s}
[data-reveal-delay="2"]{transition-delay:.16s}
[data-reveal-delay="3"]{transition-delay:.24s}
[data-reveal-delay="4"]{transition-delay:.32s}
@keyframes wave { 0%,100%{transform:scaleY(.4)} 50%{transform:scaleY(1)} }
`;

/* ------------------------------------------------------------------ */
/*                         BACKGROUND                                 */
/* ------------------------------------------------------------------ */

function PageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,hsl(var(--primary)/0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      <ParticleNetwork />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*                            HERO                                    */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div data-reveal className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          <Sparkles className="h-3.5 w-3.5" /> AI Solutions Showcase
        </div>
        <h1 data-reveal data-reveal-delay="1" className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
          Practical <span className="text-gradient">AI Solutions</span> Built for
          <br className="hidden md:block" /> Real Business Challenges
        </h1>
        <p data-reveal data-reveal-delay="2" className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Discover intelligent AI solutions designed to automate operations, improve productivity,
          reduce costs, and help businesses grow through practical, measurable innovation.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*                       SHOWCASE (navigator + detail)                */
/* ------------------------------------------------------------------ */

function ShowcaseSection() {
  const [idx, setIdx] = useState(0);
  const active = SOLUTIONS[idx];

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Navigator */}
        <div data-reveal className="glass-strong rounded-2xl border border-white/10 p-2">
          <div className="flex snap-x gap-2 overflow-x-auto scrollbar-none">
            {SOLUTIONS.map((s, i) => {
              const Icon = s.icon;
              const on = i === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setIdx(i)}
                  className={`group flex min-w-[180px] snap-start items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                    on
                      ? "bg-gradient-brand text-primary-foreground shadow-glow"
                      : "text-foreground/80 hover:bg-white/5"
                  }`}
                >
                  <div className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg ${on ? "bg-white/20" : "bg-white/5"}`}>
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0">
                    <div className={`text-[10px] uppercase tracking-widest ${on ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{s.tag}</div>
                    <div className="truncate text-sm font-semibold">{s.short}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail card */}
        <SolutionCard key={active.id} s={active} />
      </div>
    </section>
  );
}

function SolutionCard({ s }: { s: Solution }) {
  const Icon = s.icon;
  return (
    <div className="animate-fade-in mt-8 grid gap-8 rounded-3xl lg:grid-cols-[1.05fr_0.95fr]">
      {/* LEFT */}
      <div className="glass-strong relative overflow-hidden rounded-3xl border border-white/10 p-8 md:p-10">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
            <Icon className="h-3.5 w-3.5" /> {s.tag}
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">{s.heading}</h2>
          <p className="mt-3 text-muted-foreground">{s.overview}</p>

          <div className="mt-8">
            <SubTitle>Business problems solved</SubTitle>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {s.problems.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <SubTitle>Key features</SubTitle>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.features.map((f) => (
                <span key={f} className="glass rounded-full px-3 py-1 text-xs font-medium">{f}</span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <SubTitle>Workflow</SubTitle>
            <Workflow steps={s.workflow} />
          </div>

          <div className="mt-8">
            <SubTitle>Business benefits</SubTitle>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {s.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <SubTitle>Industry applications</SubTitle>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.industries.map((i) => (
                <span key={i} className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs">{i}</span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]"
            >
              {s.cta}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT — mockup */}
      <div className="glass-strong relative overflow-hidden rounded-3xl border border-white/10 p-6 md:p-8">
        <div className="absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
        <Mockup s={s} />
      </div>
    </div>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{children}</div>
  );
}

function Workflow({ steps }: { steps: string[] }) {
  const wRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);
  useEffect(() => {
    const el = wRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        steps.forEach((_, i) => setTimeout(() => setActive(i), 260 * (i + 1)));
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [steps]);

  return (
    <div ref={wRef} className="mt-3 flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <div
            className={`rounded-xl border px-3 py-2 text-xs font-medium transition-all duration-500 ${
              i <= active
                ? "border-primary/40 bg-primary/15 text-foreground shadow-glow"
                : "border-white/10 bg-white/[0.02] text-muted-foreground"
            }`}
          >
            {step}
          </div>
          {i < steps.length - 1 && (
            <ArrowRight className={`h-3.5 w-3.5 transition ${i < active ? "text-primary" : "text-muted-foreground/50"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*                          MOCKUPS                                   */
/* ------------------------------------------------------------------ */

function Mockup({ s }: { s: Solution }) {
  if (s.extra === "kpi") return <InvoiceMockup />;
  if (s.extra === "compare") return <DocCompareMockup />;
  if (s.extra === "whatsapp") return <WhatsAppMockup s={s} />;
  if (s.extra === "waveform") return <VoiceMockup s={s} />;
  return <ChatMockup s={s} />;
}

function ChatShell({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4 shadow-xl backdrop-blur">
      <div className="mb-3 flex items-center gap-2 border-b border-white/5 pb-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="ml-2 text-[11px] font-medium text-muted-foreground">{title}</div>
      </div>
      {children}
    </div>
  );
}

function ChatMockup({ s }: { s: Solution }) {
  const demo = s.demo ?? { user: "How can you help my team?", ai: "I can automate repetitive workflows, answer questions from your docs, and hand off to a human when needed." };
  return (
    <div>
      <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-primary-foreground">
          <s.icon className="h-4 w-4" />
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{s.short}</div>
          <div>Live preview</div>
        </div>
      </div>
      <ChatShell title="AI Assistant · Live">
        <div className="space-y-3">
          <MsgBubble side="user">{demo.user}</MsgBubble>
          <MsgBubble side="ai" icon={<Brain className="h-3.5 w-3.5" />}>{demo.ai}</MsgBubble>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2">
            <input readOnly placeholder="Ask anything…" className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
            <button className="grid h-8 w-8 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </ChatShell>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <MiniStat icon={Clock} label="Avg reply" value="0.8s" />
        <MiniStat icon={ShieldCheck} label="Accuracy" value="97%" />
        <MiniStat icon={TrendingUp} label="Deflection" value="72%" />
      </div>
    </div>
  );
}

function MsgBubble({ side, children, icon }: { side: "user" | "ai"; children: React.ReactNode; icon?: React.ReactNode }) {
  const isUser = side === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${isUser ? "bg-gradient-brand text-primary-foreground" : "border border-white/10 bg-white/[0.04]"}`}>
        {icon && !isUser && <span className="mr-1.5 inline-flex align-[-2px] text-primary">{icon}</span>}
        {children}
      </div>
    </div>
  );
}

function MiniStat({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="glass rounded-xl p-3 text-center">
      <Icon className="mx-auto h-4 w-4 text-primary" />
      <div className="mt-1 text-sm font-semibold">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function InvoiceMockup() {
  const kpis = [
    { label: "Faster Processing", value: "90%", icon: Zap },
    { label: "Less Manual Work",  value: "80%", icon: Cog },
    { label: "Accuracy",          value: "95%", icon: ShieldCheck },
  ];
  return (
    <div>
      <div className="mb-4 text-sm font-semibold">Finance Automation Dashboard</div>
      <div className="grid grid-cols-3 gap-3">
        {kpis.map((k) => (
          <div key={k.label} className="glass rounded-2xl p-4 text-center">
            <k.icon className="mx-auto h-5 w-5 text-primary" />
            <div className="text-gradient mt-2 font-display text-2xl font-bold">{k.value}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4">
        <div className="mb-3 flex items-center justify-between text-xs">
          <div className="font-semibold">Invoices this month</div>
          <div className="text-muted-foreground">Auto-processed</div>
        </div>
        {[
          { v: "INV-2041", a: "$12,480", s: "Approved" },
          { v: "INV-2042", a: "$3,120",  s: "In review" },
          { v: "INV-2043", a: "$28,910", s: "Approved" },
          { v: "INV-2044", a: "$1,540",  s: "Duplicate" },
        ].map((r) => (
          <div key={r.v} className="flex items-center justify-between border-t border-white/5 py-2 text-xs">
            <span className="font-medium">{r.v}</span>
            <span className="text-muted-foreground">{r.a}</span>
            <span className={`rounded-full px-2 py-0.5 text-[10px] ${r.s === "Approved" ? "bg-primary/20 text-primary" : r.s === "Duplicate" ? "bg-red-500/15 text-red-300" : "bg-white/10 text-muted-foreground"}`}>{r.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DocCompareMockup() {
  return (
    <div>
      <div className="mb-4 text-sm font-semibold">Before · After</div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
          <div className="mb-2 flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-muted-foreground">
            <FileText className="h-3.5 w-3.5" /> Original — 84 pages
          </div>
          <div className="space-y-1.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-1.5 rounded bg-white/10" style={{ width: `${60 + ((i * 7) % 40)}%` }} />
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 shadow-glow">
          <div className="mb-2 flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-primary">
            <FileCheck className="h-3.5 w-3.5" /> AI Summary
          </div>
          <ul className="space-y-2 text-xs">
            <li className="flex gap-2"><Check className="h-3.5 w-3.5 flex-shrink-0 text-primary" /> Contract auto-renews annually unless cancelled 30 days prior.</li>
            <li className="flex gap-2"><Check className="h-3.5 w-3.5 flex-shrink-0 text-primary" /> Liability capped at 12 months of fees.</li>
            <li className="flex gap-2"><Check className="h-3.5 w-3.5 flex-shrink-0 text-primary" /> Data processed in-region, SOC 2 compliant.</li>
            <li className="flex gap-2"><Check className="h-3.5 w-3.5 flex-shrink-0 text-primary" /> 3 action items assigned to Legal & Finance.</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <MiniStat icon={Clock} label="Review time" value="-85%" />
        <MiniStat icon={Search} label="Insights" value="24" />
        <MiniStat icon={Upload} label="Formats" value="12+" />
      </div>
    </div>
  );
}

function VoiceMockup({ s }: { s: Solution }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
          <Phone className="h-4.5 w-4.5" />
        </div>
        <div>
          <div className="text-sm font-semibold">Incoming voice call</div>
          <div className="text-xs text-muted-foreground">AI answering…</div>
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
        <Waveform />
        <div className="mt-4 space-y-3">
          <MsgBubble side="user">{s.demo?.user}</MsgBubble>
          <MsgBubble side="ai" icon={<Mic className="h-3.5 w-3.5" />}>{s.demo?.ai}</MsgBubble>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <MiniStat icon={Clock} label="Handle time" value="-42%" />
        <MiniStat icon={Phone} label="Calls / day" value="1.2K" />
        <MiniStat icon={ShieldCheck} label="Uptime" value="24/7" />
      </div>
    </div>
  );
}

function Waveform() {
  return (
    <div className="flex h-14 items-end justify-center gap-1">
      {Array.from({ length: 36 }).map((_, i) => (
        <span
          key={i}
          className="w-1 rounded-full bg-gradient-to-t from-primary/40 to-primary"
          style={{
            height: `${20 + ((i * 13) % 80)}%`,
            animation: `wave 1.2s ease-in-out ${i * 0.05}s infinite`,
            transformOrigin: "bottom",
          }}
        />
      ))}
    </div>
  );
}

function WhatsAppMockup({ s }: { s: Solution }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white">
          <MessageCircle className="h-4.5 w-4.5" />
        </div>
        <div>
          <div className="text-sm font-semibold">Business · WhatsApp</div>
          <div className="text-xs text-green-400">online</div>
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-[#0b1512]/70 p-4">
        <div className="space-y-2">
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 px-3 py-2 text-sm">{s.demo?.user}</div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#075E54] px-3 py-2 text-sm text-white">{s.demo?.ai}</div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#075E54] px-3 py-2 text-sm text-white">
              Here are open slots: Tue 3pm · Wed 11am · Thu 5pm
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <MiniStat icon={Zap} label="Response" value="<3s" />
        <MiniStat icon={TrendingUp} label="Bookings" value="+180%" />
        <MiniStat icon={DollarSign} label="CAC" value="-38%" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*                     COMPARISON TABLE                               */
/* ------------------------------------------------------------------ */

function ComparisonSection() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div data-reveal>
          <SectionHeading
            eyebrow="Compare"
            title="AI Solution Comparison"
            description="Find the right AI solution for your team, ROI, and rollout timeline."
          />
        </div>
        <div data-reveal className="glass-strong mt-10 overflow-hidden rounded-3xl border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[880px] text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03] text-left text-xs uppercase tracking-widest text-muted-foreground">
                  <th className="px-6 py-4">Solution</th>
                  <th className="px-6 py-4">Best For</th>
                  <th className="px-6 py-4">Main Benefit</th>
                  <th className="px-6 py-4">Automation</th>
                  <th className="px-6 py-4">Typical ROI</th>
                  <th className="px-6 py-4">Implementation</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((r) => (
                  <tr key={r.sol} className="border-b border-white/5 transition hover:bg-primary/5">
                    <td className="px-6 py-4 font-semibold">{r.sol}</td>
                    <td className="px-6 py-4 text-muted-foreground">{r.best}</td>
                    <td className="px-6 py-4">{r.benefit}</td>
                    <td className="px-6 py-4"><span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs text-primary">{r.automation}</span></td>
                    <td className="px-6 py-4 font-semibold text-gradient">{r.roi}</td>
                    <td className="px-6 py-4 text-muted-foreground">{r.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*                    DEPARTMENT EXPLORER                             */
/* ------------------------------------------------------------------ */

function DepartmentExplorer() {
  const names = Object.keys(DEPARTMENTS);
  const [dept, setDept] = useState<string>(names[0]);
  const recs = DEPARTMENTS[dept].recs
    .map((id) => SOLUTIONS.find((s) => s.id === id))
    .filter(Boolean) as Solution[];

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div data-reveal>
          <SectionHeading
            eyebrow="Explore by Department"
            title="Find the right AI for your team"
            description="Select a department to instantly see the AI solutions with the biggest impact."
          />
        </div>

        <div data-reveal className="glass-strong mt-10 rounded-3xl border border-white/10 p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            {names.map((n) => {
              const Icon = DEPARTMENTS[n].icon;
              const on = n === dept;
              return (
                <button
                  key={n}
                  onClick={() => setDept(n)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                    on ? "bg-gradient-brand text-primary-foreground shadow-glow" : "glass hover:bg-white/10"
                  }`}
                >
                  <Icon className="h-4 w-4" /> {n}
                </button>
              );
            })}
          </div>

          <div key={dept} className="animate-fade-in mt-8 grid gap-4 md:grid-cols-3">
            {recs.map((s) => (
              <div key={s.id} className="glass group rounded-2xl border border-white/10 p-5 transition hover:-translate-y-1 hover:shadow-glow">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-sm font-semibold">{s.short}</div>
                <p className="mt-1 text-xs text-muted-foreground">{s.overview}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Recommended <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*                        METRICS                                     */
/* ------------------------------------------------------------------ */

function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setStart(true), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative py-20">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div data-reveal>
          <SectionHeading
            eyebrow="Business Impact"
            title="Real outcomes across our AI deployments"
          />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((m) => (
            <MetricCard key={m.label} m={m} start={start} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ m, start }: { m: (typeof METRICS)[number]; start: boolean }) {
  const v = useCounter(m.value, m.divisor, start);
  const display = m.suffix === "%" ? Math.round(v).toString() : v < 10 ? v.toFixed(1) : Math.round(v).toString();
  return (
    <div data-reveal className="glass-strong rounded-2xl border border-white/10 p-6 text-center transition hover:shadow-glow">
      <div className="text-gradient font-display text-4xl font-bold md:text-5xl">
        {display}
        <span className="ml-1 text-2xl">{m.suffix}</span>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*                          FINAL CTA                                 */
/* ------------------------------------------------------------------ */

function FinalCTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div data-reveal className="glass-strong relative overflow-hidden rounded-3xl border border-white/10 p-10 text-center md:p-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,hsl(var(--primary)/0.25),transparent_70%)]" />
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
            <Building2 className="h-3.5 w-3.5" /> Enterprise AI · Ready to deploy
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">Ready to Deploy AI in Your Business?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Whether you need an AI chatbot, employee assistant, lead qualification system, document
            intelligence platform, voice assistant, or WhatsApp automation, we design and build AI
            solutions tailored to your business goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03] hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)]"
            >
              Schedule AI Consultation <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
            >
              <Play className="h-4 w-4" /> Request a Demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-primary/10"
            >
              Discuss Your Use Case
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
