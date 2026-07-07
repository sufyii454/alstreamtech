import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles, ArrowRight, Bot, Brain, Cpu, Cloud, Database, Layers,
  MessageSquare, LineChart, ShieldCheck, Zap, Check, Play,
} from "lucide-react";
import { ParticleNetwork } from "../components/ParticleNetwork";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/ai-solution-showcase")({
  head: () => ({
    meta: [
      { title: "AI Solution Showcase — Real AI Products in Action | ALStreamTech" },
      { name: "description", content: "Explore our AI Solution Showcase: live examples of enterprise-grade AI copilots, agents, automations and analytics solutions built by ALStreamTech." },
      { property: "og:title", content: "AI Solution Showcase — ALStreamTech" },
      { property: "og:description", content: "See our AI copilots, agents, and automation platforms in action across industries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AIShowcase,
});

const SHOWCASE = [
  {
    icon: MessageSquare,
    tag: "Conversational AI",
    title: "Enterprise Support Copilot",
    desc: "A multilingual AI agent that resolves 70% of tier-1 support tickets, integrates with your CRM, and hands off complex cases to humans with full context.",
    metrics: [
      { label: "Deflection", value: "72%" },
      { label: "CSAT", value: "4.8/5" },
      { label: "Cost saved", value: "$1.2M/yr" },
    ],
    features: ["RAG over knowledge base", "CRM & ticketing integrations", "Live agent handoff", "24/7 multilingual coverage"],
  },
  {
    icon: Brain,
    tag: "Agentic AI",
    title: "Autonomous Sales Research Agent",
    desc: "An agent that researches prospects, drafts personalized outreach, updates the CRM, and books meetings — running on your data, on your rules.",
    metrics: [
      { label: "Reply rate", value: "3.4x" },
      { label: "Meetings/mo", value: "+180%" },
      { label: "SDR hours saved", value: "22/wk" },
    ],
    features: ["Prospect enrichment", "Personalized sequences", "CRM sync (HubSpot/Salesforce)", "Guardrails & approvals"],
  },
  {
    icon: LineChart,
    tag: "Predictive Analytics",
    title: "Revenue Forecasting Platform",
    desc: "Time-series forecasting with explainable drivers, scenario modeling, and Slack/Teams alerts — giving finance teams confidence in every board number.",
    metrics: [
      { label: "Forecast accuracy", value: "94%" },
      { label: "Cycle time", value: "-65%" },
      { label: "Adoption", value: "12 BUs" },
    ],
    features: ["Explainable ML models", "Scenario simulation", "Anomaly detection", "Executive dashboards"],
  },
  {
    icon: Layers,
    tag: "Document AI",
    title: "Intelligent Document Processing",
    desc: "Extract, classify, and validate data from invoices, contracts, and forms with human-in-the-loop review and full audit trails.",
    metrics: [
      { label: "Straight-through", value: "88%" },
      { label: "Accuracy", value: "99.2%" },
      { label: "Processing time", value: "-80%" },
    ],
    features: ["OCR + LLM extraction", "Schema validation", "Reviewer console", "SOC 2-ready audit logs"],
  },
  {
    icon: ShieldCheck,
    tag: "Risk & Compliance",
    title: "AI Compliance Monitor",
    desc: "Continuously monitors transactions and communications for policy violations, with tunable thresholds and regulator-ready reporting.",
    metrics: [
      { label: "False positives", value: "-58%" },
      { label: "Alerts triaged", value: "3.1M+" },
      { label: "Audit readiness", value: "100%" },
    ],
    features: ["Policy rule engine", "LLM-assisted review", "Case management", "Regulatory reporting"],
  },
  {
    icon: Bot,
    tag: "Vertical AI",
    title: "Clinical Workflow Assistant",
    desc: "HIPAA-compliant assistant that drafts clinical notes, summarizes patient history, and surfaces care-plan recommendations from EHR data.",
    metrics: [
      { label: "Charting time", value: "-45%" },
      { label: "Provider NPS", value: "+62" },
      { label: "EHR integrations", value: "6" },
    ],
    features: ["Ambient scribe", "EHR-native workflows", "PHI safeguards", "Care-plan suggestions"],
  },
];

const STACK = [
  { icon: Brain, title: "LLMs & Foundation Models", desc: "GPT, Claude, Gemini, Llama, and fine-tuned open-source models." },
  { icon: Database, title: "Vector & Knowledge Stores", desc: "Pinecone, Weaviate, pgvector for retrieval-augmented generation." },
  { icon: Cpu, title: "MLOps & Orchestration", desc: "LangChain, LlamaIndex, Airflow, and custom agent frameworks." },
  { icon: Cloud, title: "Cloud & Edge Deployment", desc: "AWS, Azure, GCP with private VPC and on-prem options." },
];

const OUTCOMES = [
  { value: "50+", label: "AI solutions deployed" },
  { value: "94%", label: "Client retention" },
  { value: "$40M+", label: "Client value generated" },
  { value: "12x", label: "Avg. ROI in year one" },
];

function AIShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate-fade-in")),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const active = SHOWCASE[activeIdx];

  return (
    <div ref={sectionRef} className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10">
          <ParticleNetwork />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        </div>
        <div className="mx-auto max-w-6xl px-6 text-center" data-reveal>
          <div className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" /> AI Solution Showcase
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
            <span className="text-gradient">Real AI Products.</span>
            <br />
            Real Business Impact.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A curated showcase of enterprise-grade AI copilots, autonomous agents, and analytics platforms
            ALStreamTech has designed, deployed, and scaled for global teams.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
            >
              Book a live demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/case-studies"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              <Play className="h-4 w-4" /> View case studies
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive showcase */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Featured Solutions"
            title="Explore our AI in action"
            description="Click a solution to see architecture, features, and measurable outcomes."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr]">
            {/* Tabs */}
            <div className="flex flex-row gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {SHOWCASE.map((s, i) => {
                const Icon = s.icon;
                const active = i === activeIdx;
                return (
                  <button
                    key={s.title}
                    onClick={() => setActiveIdx(i)}
                    className={`group flex min-w-[240px] items-center gap-3 rounded-2xl border p-4 text-left transition lg:min-w-0 ${
                      active
                        ? "border-primary/40 bg-primary/10 shadow-glow"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                    }`}
                  >
                    <div className={`grid h-10 w-10 place-items-center rounded-xl ${active ? "bg-gradient-brand text-primary-foreground" : "bg-white/5 text-primary"}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.tag}</div>
                      <div className="text-sm font-semibold">{s.title}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detail panel */}
            <div key={active.title} className="glass-strong animate-fade-in rounded-3xl border border-white/10 p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">{active.tag}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">{active.title}</h3>
              <p className="mt-3 max-w-2xl text-muted-foreground">{active.desc}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {active.metrics.map((m) => (
                  <div key={m.label} className="glass rounded-2xl p-5 text-center">
                    <div className="text-gradient font-display text-2xl font-bold">{m.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key capabilities</div>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {active.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow">
                  Request a demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/ai-solutions" className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
                  Explore AI Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Built on a Modern AI Stack"
            title="Enterprise-ready by design"
            description="Every solution is engineered with production-grade tools, security, and observability."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STACK.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} data-reveal className="glass rounded-2xl p-6 transition hover:shadow-glow">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-semibold">{s.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glass-strong rounded-3xl border border-white/10 p-10 md:p-14">
            <div className="grid gap-8 md:grid-cols-4">
              {OUTCOMES.map((o) => (
                <div key={o.label} className="text-center">
                  <div className="text-gradient font-display text-4xl font-bold md:text-5xl">{o.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{o.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6 text-center" data-reveal>
          <div className="glass-strong rounded-3xl border border-white/10 p-10 md:p-14">
            <Zap className="mx-auto h-8 w-8 text-primary" />
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Ready to see your AI solution?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Book a 30-minute strategy call and we'll map the highest-ROI AI opportunities in your business.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Book a strategy call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
