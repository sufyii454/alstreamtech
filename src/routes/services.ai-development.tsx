import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Brain,
  Bot,
  Sparkles,
  LineChart,
  Cpu,
  Database,
  Cloud,
  Code2,
  Layers,
  Zap,
  ShieldCheck,
  Workflow,
  ChevronDown,
  CheckCircle2,
  Rocket,
  Target,
  Users,
  Building2,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Home,
  Truck,
  GraduationCap,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { ParticleNetwork } from "../components/ParticleNetwork";

export const Route = createFileRoute("/services/ai-development")({
  head: () => ({
    meta: [
      { title: "AI Development Services — Custom AI Solutions | ALStreamTech" },
      {
        name: "description",
        content:
          "Build production-grade AI agents, GPT applications, ML models and recommendation engines. End-to-end AI development for enterprises.",
      },
      { property: "og:title", content: "AI Development Services | ALStreamTech" },
      {
        property: "og:description",
        content:
          "Custom AI agents, generative AI, ML models and recommendation engines engineered for measurable business outcomes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AIDevelopmentPage,
});

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const capabilities = [
  { icon: Brain, title: "AI Solutions", desc: "End-to-end AI systems architected for production." },
  { icon: Sparkles, title: "Generative AI", desc: "GPT-powered content, code and reasoning apps." },
  { icon: Workflow, title: "AI Automation", desc: "Intelligent workflows that replace manual work." },
  { icon: Cpu, title: "Machine Learning", desc: "Predictive models trained on your data." },
  { icon: Bot, title: "AI Agents", desc: "Autonomous agents that reason, plan and act." },
  { icon: LineChart, title: "Business Intelligence", desc: "Decision-grade dashboards & insights." },
  { icon: Target, title: "Predictive Analytics", desc: "Forecast demand, churn, risk and revenue." },
];

const services = [
  {
    id: "apps",
    icon: Layers,
    title: "Custom AI Applications",
    desc: "AI-powered software that automates operations, analyzes data and improves decisions.",
    useCases: [
      "Intelligent business platforms",
      "AI-powered dashboards",
      "Smart document systems",
      "Automated business tools",
      "AI-enhanced SaaS platforms",
    ],
    features: [
      "Intelligent decision-making",
      "Natural language interactions",
      "Predictive functionality",
      "Process automation",
      "Data analysis",
    ],
    flow: ["Standard App", "AI Integration", "Intelligent App", "Business Insights"],
  },
  {
    id: "agents",
    icon: Bot,
    title: "Autonomous AI Agents",
    desc: "Agents that independently perform tasks, execute workflows and interact with systems.",
    useCases: [
      "Customer support agents",
      "Sales assistants",
      "Internal employee assistants",
      "Research agents",
      "Operations agents",
      "Workflow agents",
    ],
    features: [
      "Multi-step reasoning",
      "Task execution",
      "System integrations",
      "Workflow automation",
      "Intelligent decision support",
    ],
    flow: ["Email", "AI Agent", "CRM", "Database", "Reporting", "Automation"],
  },
  {
    id: "gpt",
    icon: Sparkles,
    title: "GPT-Powered Solutions",
    desc: "Language-model apps that understand, generate, summarize and analyze information.",
    useCases: [
      "AI assistants",
      "Content generation",
      "Knowledge bases",
      "Customer support systems",
      "Internal business assistants",
      "Search & retrieval platforms",
    ],
    features: [
      "Faster information access",
      "Improved productivity",
      "Enhanced customer engagement",
      "Reduced manual effort",
    ],
    flow: ["Prompt", "LLM", "Grounded Answer"],
  },
  {
    id: "ml",
    icon: Cpu,
    title: "Machine Learning Models",
    desc: "Predictive and analytical models that learn from data and improve outcomes.",
    useCases: [
      "Sales forecasting",
      "Fraud detection",
      "Risk analysis",
      "Demand prediction",
      "Customer segmentation",
      "Predictive maintenance",
    ],
    features: [
      "Data preparation",
      "Model development",
      "Model deployment",
      "Continuous learning",
      "Performance monitoring",
    ],
    flow: ["Data", "Training", "Prediction", "Action"],
  },
  {
    id: "recs",
    icon: Target,
    title: "Recommendation Engines",
    desc: "Personalize experiences and grow engagement with intelligent recommendations.",
    useCases: [
      "E-commerce product recs",
      "Media content recs",
      "Learning recommendations",
      "Treatment recommendations",
      "Financial product recs",
    ],
    features: [
      "Increased engagement",
      "Higher conversions",
      "Better experiences",
      "Improved retention",
    ],
    flow: ["User Activity", "AI Analysis", "Personalization", "Recommendations"],
  },
];

const processSteps = [
  { title: "Discovery", desc: "Understand goals, users and success metrics." },
  { title: "Data Assessment", desc: "Audit sources, quality, gaps and readiness." },
  { title: "Solution Design", desc: "Architect models, integrations and guardrails." },
  { title: "Model Development", desc: "Build, train and iterate on real data." },
  { title: "Testing", desc: "Evals for accuracy, safety, latency and cost." },
  { title: "Deployment", desc: "Production rollout with monitoring & MLOps." },
  { title: "Optimization", desc: "Continuous tuning, retraining and A/B tests." },
  { title: "Support", desc: "24/7 ops, incident response and evolution." },
];

const techGroups = [
  { group: "Generative AI", items: ["OpenAI", "GPT-4o", "Gemini", "Claude"] },
  { group: "AI Frameworks", items: ["LangChain", "LlamaIndex", "TensorFlow", "PyTorch"] },
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript"] },
  { group: "Databases", items: ["PostgreSQL", "Pinecone", "Weaviate", "MongoDB"] },
  { group: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
];

const industryUses = [
  { icon: HeartPulse, name: "Healthcare", items: ["Patient assistants", "Predictive diagnostics"] },
  { icon: Landmark, name: "Finance", items: ["Fraud detection", "Risk modeling"] },
  { icon: ShoppingBag, name: "Retail", items: ["Product recs", "Customer analytics"] },
  { icon: Home, name: "Real Estate", items: ["Market analysis", "Virtual assistants"] },
  { icon: Truck, name: "Logistics", items: ["Route optimization", "Demand forecasting"] },
  { icon: GraduationCap, name: "Education", items: ["AI tutors", "Learning assistants"] },
];

const projects = [
  {
    name: "Aegis Support Copilot",
    industry: "SaaS",
    stack: ["GPT-4o", "LangChain", "Pinecone", "Next.js"],
    challenge: "Rising ticket volume overwhelming L1 support.",
    solution: "RAG-grounded copilot with tool use across CRM and docs.",
    result: "62% deflection, 4.7/5 CSAT, 3× faster response.",
  },
  {
    name: "Northwind Forecast",
    industry: "Retail",
    stack: ["Python", "PyTorch", "Snowflake", "Airflow"],
    challenge: "Demand volatility causing stockouts and overstock.",
    solution: "ML forecasting with SKU-level seasonality models.",
    result: "31% lower stockouts, 18% inventory reduction.",
  },
  {
    name: "Helix Diagnostics",
    industry: "Healthcare",
    stack: ["TensorFlow", "Vision Transformers", "AWS"],
    challenge: "Manual imaging review slowing triage.",
    solution: "Computer vision triage model with clinician-in-loop.",
    result: "5× faster triage, 96% precision on target findings.",
  },
];

const metrics = [
  { value: 100, suffix: "+", label: "AI Features Delivered" },
  { value: 50, suffix: "+", label: "AI Solutions Built" },
  { value: 90, suffix: "%", label: "Process Automation" },
  { value: 70, suffix: "%", label: "Cost Reduction" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
];

const whyUs = [
  { icon: Brain, title: "Deep AI Expertise", desc: "A team living and breathing modern AI systems." },
  { icon: Sparkles, title: "Custom Solutions", desc: "Built to your workflow — never off-the-shelf." },
  { icon: ShieldCheck, title: "Enterprise Security", desc: "Private deploys, audits, SOC2-ready." },
  { icon: Rocket, title: "Scalable Architecture", desc: "From POC to millions of requests." },
  { icon: Users, title: "Long-Term Support", desc: "Partnership beyond launch." },
  { icon: Code2, title: "Modern Stack", desc: "Best-in-class tools and MLOps." },
];

const faqs = [
  {
    q: "How long does an AI development project take?",
    a: "A production-ready POC typically ships in 4–8 weeks. Full deployments range from 3–6 months depending on scope, data readiness and integrations.",
  },
  {
    q: "What industries can benefit from AI?",
    a: "Almost every industry — we've shipped solutions across healthcare, finance, retail, logistics, real estate, education and enterprise SaaS.",
  },
  {
    q: "Can AI integrate with our existing systems?",
    a: "Yes. We integrate with CRMs, ERPs, data warehouses, ticketing systems, custom APIs and legacy databases through secure connectors.",
  },
  {
    q: "How much does an AI project cost?",
    a: "Projects start from a fixed-scope POC and scale with complexity. We provide transparent, milestone-based pricing after a discovery call.",
  },
  {
    q: "What data do you need to build an AI model?",
    a: "It depends on the use case. Some solutions leverage foundation models with little data; others need historical, labeled datasets. We assess this in discovery.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function AIDevelopmentPage() {
  return (
    <>
      <Hero />
      <OverviewSection />
      <ServicesGrid />
      <ProcessSection />
      <TechEcosystem />
      <IndustryUseCases />
      <ProjectShowcase />
      <MetricsSection />
      <WhyUsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <PageHero
      eyebrow="AI Development"
      title={
        <>
          Build intelligent AI solutions that{" "}
          <span className="text-gradient">transform your business</span>
        </>
      }
      subtitle="From AI agents and GPT-powered applications to machine learning platforms and recommendation engines, we develop custom AI solutions that automate processes, enhance decision-making, and unlock new growth opportunities."
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
        >
          Schedule an AI Consultation <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/contact"
          className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
        >
          Discuss Your AI Project
        </Link>
        <Link
          to="/contact"
          className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
        >
          Request a Custom Proposal
        </Link>
      </div>
      <div className="mt-14">
        <AIEcosystemVisual />
      </div>
    </PageHero>
  );
}

function AIEcosystemVisual() {
  const nodes = [
    { icon: Bot, label: "AI Agents", angle: 0 },
    { icon: Cpu, label: "ML Models", angle: 60 },
    { icon: Database, label: "Data Pipelines", angle: 120 },
    { icon: Workflow, label: "Workflows", angle: 180 },
    { icon: LineChart, label: "Analytics", angle: 240 },
    { icon: Cloud, label: "Cloud AI", angle: 300 },
  ];
  return (
    <div className="glass-strong relative mx-auto flex h-[360px] w-full max-w-4xl items-center justify-center overflow-hidden rounded-3xl">
      <div className="pointer-events-none absolute inset-0 ai-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <ParticleNetwork density={40} />
      </div>
      <div className="relative flex h-52 w-52 items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_18s_linear_infinite]" />
        <div className="absolute inset-4 rounded-full border border-primary/20 animate-[spin_28s_linear_infinite_reverse]" />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-brand shadow-glow animate-pulse-glow">
          <Brain className="h-10 w-10 text-primary-foreground" />
        </div>
        {nodes.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180;
          const r = 150;
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;
          const Icon = n.icon;
          return (
            <div
              key={n.label}
              className="absolute flex flex-col items-center gap-1"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                animation: `fade-up 0.6s ease-out both`,
                animationDelay: `${i * 100}ms`,
              }}
            >
              <div className="glass flex h-12 w-12 items-center justify-center rounded-xl">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{n.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Overview                                                            */
/* ------------------------------------------------------------------ */

function OverviewSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="glass inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
            AI Development Overview
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            AI that delivers <span className="text-gradient">real business outcomes</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            We design, build and operate AI systems that solve real problems — cutting costs,
            speeding up decisions and creating new revenue. Every solution is engineered for
            security, scale and measurable ROI.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Automate repetitive work",
              "Faster, better decisions",
              "Elevate customer experience",
              "Reduce operational cost",
              "Unlock new revenue",
              "Future-proof your stack",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="glass group rounded-2xl p-4 transition hover:-translate-y-1 hover:bg-white/5"
                  style={{ animation: "fade-up .5s ease-out both", animationDelay: `${i * 60}ms` }}
                >
                  <Icon className="h-5 w-5 text-primary transition group-hover:scale-110" />
                  <div className="mt-2 text-sm font-semibold">{c.title}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <ArchitectureVisual />
      </div>
    </section>
  );
}

function ArchitectureVisual() {
  const layers = [
    { icon: Users, label: "User Interfaces", tint: "from-primary/30" },
    { icon: Bot, label: "AI Agents & LLMs", tint: "from-primary-glow/40" },
    { icon: Workflow, label: "Orchestration & Tools", tint: "from-primary/30" },
    { icon: Database, label: "Vector & SQL Data", tint: "from-primary-glow/40" },
    { icon: Cloud, label: "Cloud Infrastructure", tint: "from-primary/30" },
  ];
  return (
    <div className="glass-strong relative overflow-hidden rounded-3xl p-6">
      <div className="pointer-events-none absolute inset-0 ai-grid opacity-20" />
      <div className="relative space-y-3">
        {layers.map((l, i) => {
          const Icon = l.icon;
          return (
            <div
              key={l.label}
              className={`glass group flex items-center gap-3 rounded-xl bg-gradient-to-r ${l.tint} to-transparent p-4 transition hover:translate-x-1`}
              style={{ animation: "fade-up .6s ease-out both", animationDelay: `${i * 90}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand shadow-glow">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">{l.label}</div>
                <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full w-1/3 bg-gradient-brand"
                    style={{ animation: `slide-loop 3s ${i * 0.3}s ease-in-out infinite` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <style>{`
        @keyframes slide-loop {
          0% { transform: translateX(-100%); width: 30%; }
          50% { transform: translateX(120%); width: 60%; }
          100% { transform: translateX(300%); width: 30%; }
        }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Services grid                                                       */
/* ------------------------------------------------------------------ */

function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="AI Development Services"
        title={
          <>
            Everything you need to <span className="text-gradient">ship AI</span>
          </>
        }
        description="From custom applications to autonomous agents, ML models and recommendation engines — end-to-end."
      />
      <div className="space-y-16">
        {services.map((s, i) => (
          <ServiceBlock key={s.id} service={s} reverse={i % 2 === 1} index={i} />
        ))}
      </div>
    </section>
  );
}

function ServiceBlock({
  service,
  reverse,
  index,
}: {
  service: (typeof services)[number];
  reverse: boolean;
  index: number;
}) {
  const Icon = service.icon;
  return (
    <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
          <span className="font-mono">{String(index + 1).padStart(2, "0")}</span> Service
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="font-display text-2xl font-bold md:text-3xl">{service.title}</h3>
        </div>
        <p className="mt-3 text-muted-foreground md:text-lg">{service.desc}</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Use Cases</div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {service.useCases.map((u) => (
                <li key={u} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {u}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Key Features</div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
        >
          Discuss this solution <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <FlowVisual steps={service.flow} icon={Icon} />
    </div>
  );
}

function FlowVisual({ steps, icon: Icon }: { steps: string[]; icon: typeof Brain }) {
  return (
    <div className="glass-strong relative overflow-hidden rounded-3xl p-6">
      <div className="pointer-events-none absolute inset-0 ai-grid opacity-20" />
      <div className="relative space-y-3">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <div
              className="glass flex flex-1 items-center gap-3 rounded-xl p-3"
              style={{ animation: `fade-up .5s ease-out both`, animationDelay: `${i * 120}ms` }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-xs font-bold text-primary-foreground">
                {i + 1}
              </div>
              <span className="text-sm font-medium">{s}</span>
              {i === Math.floor(steps.length / 2) && <Icon className="ml-auto h-4 w-4 text-primary animate-pulse" />}
            </div>
            {i < steps.length - 1 && (
              <div className="relative h-6 w-6 shrink-0">
                <ChevronDown className="h-6 w-6 text-primary/60" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

function ProcessSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="How we deliver"
        title={
          <>
            AI development <span className="text-gradient">process</span>
          </>
        }
        description="A proven, transparent process from discovery to long-term support."
      />
      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:block" />
        <div className="grid gap-6 lg:grid-cols-2">
          {processSteps.map((p, i) => (
            <div
              key={p.title}
              className={`glass relative rounded-2xl p-6 ${i % 2 === 1 ? "lg:translate-y-8" : ""}`}
              style={{ animation: "fade-up .6s ease-out both", animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand font-display text-sm font-bold text-primary-foreground shadow-glow">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display text-lg font-semibold">{p.title}</div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Tech Ecosystem                                                      */
/* ------------------------------------------------------------------ */

function TechEcosystem() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Technology Ecosystem"
        title={
          <>
            Modern AI <span className="text-gradient">tech stack</span>
          </>
        }
        description="Best-in-class tools across models, frameworks, data and infrastructure."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {techGroups.map((g, gi) => (
          <div
            key={g.group}
            className="glass-strong rounded-2xl p-6"
            style={{ animation: "fade-up .6s ease-out both", animationDelay: `${gi * 80}ms` }}
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">{g.group}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((t) => (
                <span
                  key={t}
                  className="glass inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium transition hover:-translate-y-0.5 hover:bg-white/10"
                >
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

/* ------------------------------------------------------------------ */
/* Industry Use Cases                                                  */
/* ------------------------------------------------------------------ */

function IndustryUseCases() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Industry Use Cases"
        title={
          <>
            AI applied across <span className="text-gradient">every industry</span>
          </>
        }
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industryUses.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <div
              key={ind.name}
              className="glass-strong group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1"
              style={{ animation: "fade-up .5s ease-out both", animationDelay: `${i * 70}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:scale-110">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="mt-4 font-display text-lg font-semibold">{ind.name}</div>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {ind.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {it}
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

function ProjectShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="AI Project Showcase"
        title={
          <>
            Real AI, <span className="text-gradient">shipped in production</span>
          </>
        }
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={p.name}
            className="glass-strong group relative flex flex-col overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1"
            style={{ animation: "fade-up .6s ease-out both", animationDelay: `${i * 100}ms` }}
          >
            <div className="mb-4 rounded-xl border border-white/10 bg-gradient-to-br from-primary/20 via-primary-glow/10 to-transparent p-4">
              <div className="flex h-24 items-center justify-center rounded-lg bg-black/30 font-mono text-xs text-primary/70">
                <div className="grid grid-cols-8 gap-1">
                  {Array.from({ length: 32 }).map((_, k) => (
                    <div
                      key={k}
                      className="h-2 w-2 rounded-sm bg-primary/40"
                      style={{ animation: `pulse 2s ${k * 0.05}s infinite` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">{p.industry}</div>
            <div className="mt-1 font-display text-lg font-semibold">{p.name}</div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <span key={t} className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div><span className="text-xs font-semibold uppercase text-primary">Challenge:</span> <span className="text-muted-foreground">{p.challenge}</span></div>
              <div><span className="text-xs font-semibold uppercase text-primary">Solution:</span> <span className="text-muted-foreground">{p.solution}</span></div>
              <div><span className="text-xs font-semibold uppercase text-primary">Result:</span> <span className="text-foreground">{p.result}</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Metrics                                                             */
/* ------------------------------------------------------------------ */

function MetricsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="glass-strong relative overflow-hidden rounded-3xl p-10">
        <div className="pointer-events-none absolute inset-0 ai-grid opacity-20" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {metrics.map((m, i) => (
            <Counter key={m.label} value={m.value} suffix={m.suffix} label={m.label} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now() + delay;
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.max(0, Math.min(1, (t - t0) / dur));
            setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, delay]);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold md:text-5xl">
        <span className="text-gradient">{n}{suffix}</span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Why Us                                                              */
/* ------------------------------------------------------------------ */

function WhyUsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Why choose us"
        title={
          <>
            A partner built for <span className="text-gradient">AI innovation</span>
          </>
        }
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {whyUs.map((w, i) => {
          const Icon = w.icon;
          return (
            <div
              key={w.title}
              className="glass-strong group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1"
              style={{ animation: "fade-up .5s ease-out both", animationDelay: `${i * 70}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:scale-110">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="mt-4 font-display text-lg font-semibold">{w.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Frequently asked <span className="text-gradient">questions</span>
          </>
        }
      />
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="glass overflow-hidden rounded-2xl">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */

function FinalCTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24">
      <div className="glass-strong relative overflow-hidden rounded-3xl p-10 md:p-16">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <ParticleNetwork density={30} />
        </div>
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
            <Zap className="h-3 w-3" /> Let's build
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            Ready to build your <span className="text-gradient">AI solution?</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Whether you need AI agents, machine learning models, GPT-powered tools, recommendation systems, or intelligent automation — our team can turn your vision into reality.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
            >
              Schedule a Free AI Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Start Your AI Project
            </Link>
            <Link
              to="/contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Request a Proposal
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
            <Building2 className="h-3.5 w-3.5" /> Trusted by enterprises across healthcare, finance, retail & SaaS
          </div>
        </div>
      </div>
    </section>
  );
}
