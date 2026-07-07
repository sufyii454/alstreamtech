import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Search,
  Map,
  Palette,
  Code2,
  Brain,
  ShieldCheck,
  Rocket,
  LifeBuoy,
  ChevronDown,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Zap,
  Lock,
  TestTube,
  Handshake,
  Target,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { ParticleNetwork } from "../components/ParticleNetwork";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — From Idea to Intelligent Solution | ALStreamTech" },
      { name: "description", content: "A structured, transparent methodology for delivering AI and software projects — discovery, planning, design, development, AI integration, testing, launch and support." },
      { property: "og:title", content: "Our Process — ALStreamTech" },
      { property: "og:description", content: "How we turn ideas into intelligent digital solutions." },
    ],
  }),
  component: Process;
});

type Phase = {
  key: string;
  n: number;
  title: string;
  icon: any;
  badge: string;
  visual: string;
  deliverables: string[];
  flow?: string[];
  extra?: { label: string; items: string[] };
  emphasis?: boolean;
};

const phases: Phase[] = [
  {
    key: "discovery",
    n: 1,
    title: "Discovery",
    icon: Search,
    badge: "Week 1–2",
    visual: "Understanding your business, goals and opportunities.",
    deliverables: ["Business Requirement Gathering", "Stakeholder Meetings", "Problem Identification", "Opportunity Assessment", "Competitor Analysis", "AI Suitability Evaluation", "Technical Feasibility Review"],
    extra: { label: "Client Collaboration", items: ["Meetings", "Workshops", "Discovery Sessions", "Consultation Calls"] },
  },
  {
    key: "planning",
    n: 2,
    title: "Planning",
    icon: Map,
    badge: "Week 2–3",
    visual: "Strategic roadmap, architecture and sprint plan.",
    deliverables: ["Project Roadmap", "Architecture Planning", "Technology Selection", "Resource Allocation", "Risk Assessment", "Timeline Creation", "Sprint Planning"],
    flow: ["Goals", "Milestones", "Resources", "Execution Plan"],
  },
  {
    key: "design",
    n: 3,
    title: "UI/UX Design",
    icon: Palette,
    badge: "Week 3–5",
    visual: "Wireframes evolve into polished, accessible interfaces.",
    deliverables: ["User Research", "Wireframes", "User Flows", "Interactive Prototypes", "Design System", "Responsive Layouts", "Accessibility Review"],
    flow: ["Wireframe", "Prototype", "Final Design"],
  },
  {
    key: "development",
    n: 4,
    title: "Development",
    icon: Code2,
    badge: "Week 5–12",
    visual: "Code compiles into shippable modules.",
    deliverables: ["Frontend Development", "Backend Development", "Database Architecture", "API Integrations", "Security Implementation", "Performance Optimization"],
    extra: { label: "Technologies", items: ["React", "Node.js", "Python", "PostgreSQL", "AWS", "Azure"] },
  },
  {
    key: "ai",
    n: 5,
    title: "AI Integration",
    icon: Brain,
    badge: "Integrated During Development",
    visual: "Neural intelligence woven into every workflow.",
    deliverables: ["AI Model Integration", "Chatbot Implementation", "Machine Learning Deployment", "Data Processing Pipelines", "AI Workflow Automation", "Predictive Analytics"],
    flow: ["Application", "AI Processing", "Business Insights", "Automation", "Results"],
    extra: { label: "Technologies", items: ["OpenAI GPT", "Gemini", "LangChain", "Claude", "Machine Learning Models"] },
    emphasis: true,
  },
  {
    key: "testing",
    n: 6,
    title: "Testing",
    icon: ShieldCheck,
    badge: "Week 10–13",
    visual: "Quality gates catch issues before production.",
    deliverables: ["Functional Testing", "Performance Testing", "Security Testing", "AI Accuracy Validation", "User Acceptance Testing", "Cross-Device Testing"],
    flow: ["Tests Passed", "Issues Fixed", "Quality Verified", "Ready for Launch"],
  },
  {
    key: "launch",
    n: 7,
    title: "Launch",
    icon: Rocket,
    badge: "Week 12–14",
    visual: "Production deployment with full observability.",
    deliverables: ["Production Deployment", "Cloud Configuration", "Security Validation", "Performance Monitoring", "User Onboarding", "Go-Live Support"],
    flow: ["Users", "Application", "Cloud", "Database", "Monitoring"],
  },
  {
    key: "support",
    n: 8,
    title: "Support",
    icon: LifeBuoy,
    badge: "Ongoing",
    visual: "Continuous monitoring, improvements and growth.",
    deliverables: ["Maintenance", "Security Monitoring", "AI Improvements", "Feature Enhancements", "Technical Support", "Performance Optimization"],
    flow: ["Launch", "Monitoring", "Optimization", "Growth", "Continuous Improvement"],
  },
];

const deliverablesSummary = [
  { phase: "Discovery", item: "Requirements Document", icon: FileText },
  { phase: "Planning", item: "Project Roadmap", icon: Map },
  { phase: "Design", item: "UI/UX Prototype", icon: Palette },
  { phase: "Development", item: "Working Application", icon: Code2 },
  { phase: "AI Integration", item: "Intelligent Features", icon: Brain },
  { phase: "Testing", item: "Quality Assurance Report", icon: TestTube },
  { phase: "Launch", item: "Production Deployment", icon: Rocket },
  { phase: "Support", item: "Continuous Improvements", icon: LifeBuoy },
];

const collab = [
  { phase: "Discovery", level: "High Involvement" },
  { phase: "Planning", level: "Medium Involvement" },
  { phase: "Design", level: "Review & Feedback" },
  { phase: "Development", level: "Weekly Progress Updates" },
  { phase: "Testing", level: "User Acceptance Testing" },
  { phase: "Launch", level: "Go-Live Approval" },
  { phase: "Support", level: "Long-Term Partnership" },
];

const metrics = [
  { value: 95, suffix: "%", label: "On-Time Delivery" },
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Availability" },
];

const whyProcess = [
  { icon: MessageSquare, title: "Transparent Communication", desc: "Weekly demos, shared dashboards, always-open Slack." },
  { icon: Zap, title: "Agile Development", desc: "Two-week sprints with continuous delivery." },
  { icon: Brain, title: "AI-First Approach", desc: "Intelligence engineered in from day one." },
  { icon: Lock, title: "Security by Design", desc: "Zero-trust, encryption and compliance built-in." },
  { icon: TestTube, title: "Continuous Testing", desc: "Automated quality gates on every commit." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "We stay engaged well after go-live." },
];

const faqs = [
  { q: "How long does a typical project take?", a: "Most projects run 8–14 weeks depending on scope. MVPs can ship in 4–6 weeks; enterprise platforms may span several quarters." },
  { q: "Can requirements change during development?", a: "Yes — our agile process embraces change. New requirements are prioritized in the next sprint without derailing the roadmap." },
  { q: "How involved will our team be?", a: "You'll be highly involved in Discovery and Design, and receive weekly demos during Development, Testing and Launch." },
  { q: "Do you use Agile development?", a: "Yes — two-week sprints, sprint reviews, retrospectives and continuous delivery are standard." },
  { q: "Can AI be added to an existing application?", a: "Absolutely. We integrate AI into existing systems via APIs, embedded services or side-car architectures." },
  { q: "What happens after launch?", a: "We provide monitoring, optimization, security patches, feature enhancements and continuous AI improvements." },
  { q: "Do you provide ongoing support?", a: "Yes — SLA-backed support with 24/7 monitoring and dedicated engineers." },
];

// ---------------- Hero ----------------

function ProcessOrbit() {
  const nodes = phases.map(p => ({ label: p.title, icon: p.icon }));
  const R = 42;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-[12%] rounded-full border border-primary/20" />
      <div className="absolute inset-[26%] rounded-full border border-white/5" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((_, i) => {
          const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(a) * R;
          const y = 50 + Math.sin(a) * R;
          return <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="url(#pg)" strokeWidth="0.3" opacity="0.6" />;
        })}
        <defs>
          <linearGradient id="pg" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(21,171,230,0.8)" />
            <stop offset="100%" stopColor="rgba(124,92,255,0.4)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-brand shadow-glow">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
          <Target className="relative h-10 w-10 text-primary-foreground" />
        </div>
        <div className="mt-2 text-[10px] uppercase tracking-widest text-primary">Project Vision</div>
      </div>

      {nodes.map((n, i) => {
        const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(a) * R;
        const y = 50 + Math.sin(a) * R;
        const Icon = n.icon;
        return (
          <div
            key={n.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%`, animation: `floatY 6s ease-in-out ${i * 0.3}s infinite` }}
          >
            <div className="glass flex items-center gap-1.5 whitespace-nowrap rounded-full border border-primary/20 px-3 py-1.5 text-[11px] font-medium shadow-glow backdrop-blur-xl">
              <Icon className="h-3.5 w-3.5 text-primary" />
              {n.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ---------------- Timeline ----------------

function ProcessTimeline() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = Number((e.target as HTMLElement).dataset.idx);
          setActive((cur) => Math.max(cur, idx + 1));
        }
      });
    }, { threshold: 0.4 });
    stepRefs.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* vertical rail */}
      <div className="absolute left-6 top-0 h-full w-0.5 bg-white/10 md:left-1/2 md:-translate-x-1/2">
        <div
          className="w-full bg-gradient-to-b from-primary via-primary/70 to-purple-500 transition-all duration-700"
          style={{ height: `${(active / phases.length) * 100}%` }}
        />
      </div>

      <div className="space-y-10">
        {phases.map((p, i) => {
          const Icon = p.icon;
          const side = i % 2 === 0;
          const isActive = i < active;
          const isOpen = expanded === i;
          return (
            <div
              key={p.key}
              ref={(el) => (stepRefs.current[i] = el)}
              data-idx={i}
              className={`relative grid gap-6 md:grid-cols-2 ${side ? "" : "md:[&>*:first-child]:order-2"}`}
            >
              {/* node marker */}
              <div className="absolute left-6 top-6 -translate-x-1/2 md:left-1/2">
                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                    isActive
                      ? "border-primary bg-gradient-brand text-primary-foreground shadow-glow"
                      : "border-white/15 bg-black/60 text-muted-foreground"
                  } ${p.emphasis ? "ring-2 ring-purple-500/40" : ""}`}
                >
                  {isActive && <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />}
                  <Icon className="relative h-5 w-5" />
                </div>
              </div>

              {/* card */}
              <div className={`ml-16 md:ml-0 ${side ? "md:pr-16" : "md:pl-16"}`}>
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className={`w-full text-left glass rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow ${
                    p.emphasis
                      ? "border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-primary/5 to-transparent"
                      : "border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-primary">Phase {p.n}</div>
                      <div className="mt-1 font-display text-xl font-semibold">{p.title}</div>
                    </div>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                      {p.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{p.visual}</p>

                  <div className={`grid transition-all duration-500 ease-out ${isOpen ? "mt-5 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="space-y-4 border-t border-white/10 pt-4">
                        <div>
                          <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-primary">Deliverables</div>
                          <ul className="grid grid-cols-1 gap-1 text-xs text-foreground/80 sm:grid-cols-2">
                            {p.deliverables.map((d) => (
                              <li key={d} className="flex items-start gap-1.5">
                                <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {p.flow && (
                          <div>
                            <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-primary">Workflow</div>
                            <div className="flex flex-wrap items-center gap-1.5">
                              {p.flow.map((s, si) => (
                                <div key={s} className="flex items-center gap-1.5">
                                  <div
                                    className="rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px]"
                                    style={{ animation: `pulseNode 3s ease-in-out ${si * 0.4}s infinite` }}
                                  >
                                    {s}
                                  </div>
                                  {si < p.flow!.length - 1 && <ArrowRight className="h-3 w-3 text-primary/60" />}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {p.extra && (
                          <div>
                            <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-primary">{p.extra.label}</div>
                            <div className="flex flex-wrap gap-1.5">
                              {p.extra.items.map((t) => (
                                <span
                                  key={t}
                                  className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[10px] backdrop-blur"
                                  style={{ animation: `floatY 4s ease-in-out infinite` }}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-1 text-xs text-primary">
                    {isOpen ? "Hide details" : "View details"}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>
              </div>

              {/* spacer col */}
              <div className="hidden md:block" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------------- Bits ----------------

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

// ---------------- Page ----------------

function Process() {
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
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Our Process
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              From Idea to <span className="text-gradient">Intelligent Digital Solution</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Every successful AI and software project begins with a structured process. Our proven methodology ensures quality, transparency, scalability, security, and measurable business outcomes from discovery to long-term support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PremiumButton variant="primary" to="/contact">Start Your Project</PremiumButton>
              <PremiumButton variant="secondary" to="/contact">Schedule Consultation</PremiumButton>
              <PremiumButton variant="outline" to="/contact">Discuss Your Requirements</PremiumButton>
            </div>
          </div>
          <div className="animate-fade-up">
            <ProcessOrbit />
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Interactive Process Timeline"
          title={<>Eight phases from <span className="text-gradient">idea to impact</span></>}
          description="Scroll to activate each phase. Click any step for full deliverables and workflow."
        />
        <ProcessTimeline />
      </section>

      {/* DELIVERABLES SUMMARY */}
      <section className="relative border-y border-white/5 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Deliverables Summary"
            title={<>What you receive at <span className="text-gradient">every phase</span></>}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliverablesSummary.map((d, i) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.phase}
                  className="group glass rounded-2xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow animate-fade-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:scale-110">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-primary">{d.phase}</div>
                  <div className="mt-1 font-display text-base font-semibold">{d.item}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Client Collaboration"
          title={<>Partnership at <span className="text-gradient">every step</span></>}
        />
        <div className="glass rounded-2xl border border-white/10 p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-7">
            {collab.map((c, i) => (
              <div key={c.phase} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-primary-foreground shadow-glow">
                    {i + 1}
                  </div>
                  <div className="mt-3 text-sm font-semibold">{c.phase}</div>
                  <div className="mt-1 flex items-start gap-1 text-xs text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                    <span>{c.level}</span>
                  </div>
                </div>
                {i < collab.length - 1 && (
                  <div className="absolute right-0 top-5 hidden h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-primary/50 to-transparent md:block" style={{ left: "50%" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="relative border-y border-white/5 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Success Metrics"
            title={<>A track record you can <span className="text-gradient">trust</span></>}
          />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="glass rounded-2xl border border-white/10 p-6 text-center">
                <Counter value={m.value} suffix={m.suffix} />
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUR PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Why Our Process Works"
          title={<>Built for <span className="text-gradient">enterprise outcomes</span></>}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyProcess.map((w) => {
            const Icon = w.icon;
            return (
              <div key={w.title} className="group glass rounded-2xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:scale-110">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="font-display text-lg font-semibold">{w.title}</div>
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
            eyebrow="FAQ"
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
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary animate-fade-up">
            <Sparkles className="h-3 w-3" /> Ready to begin
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl animate-fade-up">
            Let's Turn Your Idea into <span className="text-gradient">Reality</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
            Whether you're building an AI platform, business application, intelligent automation system, or customer-facing product, our proven process ensures successful delivery from concept to launch — and continuous improvement beyond.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PremiumButton variant="primary" to="/contact">Start Your Project</PremiumButton>
            <PremiumButton variant="secondary" to="/contact">Schedule a Consultation</PremiumButton>
            <PremiumButton variant="outline" to="/contact">Discuss Your Requirements</PremiumButton>
          </div>
        </div>
      </section>
    </>
  );
}
