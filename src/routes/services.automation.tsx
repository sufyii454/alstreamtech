import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Workflow,
  Mail,
  Users,
  FileText,
  Zap,
  ChevronDown,
  CheckCircle2,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  Home,
  GraduationCap,
  ShieldCheck,
  Cpu,
  Layers,
  Rocket,
  Sparkles,
  Cloud,
  Database,
  MessageSquare,
  Settings,
  Send,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { ParticleNetwork } from "../components/ParticleNetwork";

export const Route = createFileRoute("/services/automation")({
  head: () => ({
    meta: [
      { title: "Business Automation — Eliminate Manual Work | ALStreamTech" },
      {
        name: "description",
        content:
          "Intelligent business automation that streamlines workflows, CRM, email, invoices and repetitive tasks — reduce costs, improve accuracy and scale operations.",
      },
      { property: "og:title", content: "Business Automation | ALStreamTech" },
      {
        property: "og:description",
        content:
          "Automate workflows, CRM, email, documents and repetitive tasks with enterprise-grade intelligent automation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AutomationPage,
});

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const solutions = [
  {
    id: "workflow",
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Automate end-to-end business processes across departments and systems.",
    features: [
      "Approval Workflows",
      "Employee Onboarding",
      "Business Process Automation",
      "Multi-Step Workflows",
      "Cross-System Integrations",
      "Automated Notifications",
    ],
    steps: [
      "Request Submitted",
      "Approval Process",
      "Task Assignment",
      "Notification Sent",
      "Completion Confirmation",
    ],
    benefits: [
      "Faster Processes",
      "Reduced Manual Work",
      "Better Visibility",
      "Improved Compliance",
    ],
  },
  {
    id: "email",
    icon: Mail,
    title: "Email Automation",
    desc: "Automatically send notifications, reminders, approvals, follow-ups and marketing communications.",
    features: [
      "Welcome Emails",
      "Customer Follow-Ups",
      "Appointment Reminders",
      "Approval Notifications",
      "Marketing Campaigns",
      "Internal Communications",
    ],
    steps: ["Event Trigger", "Email Generated", "Customer Receives Message", "Action Tracked"],
    benefits: [
      "Increased Engagement",
      "Faster Communication",
      "Better Customer Experience",
    ],
  },
  {
    id: "crm",
    icon: Users,
    title: "CRM Automation",
    desc: "Automate lead management, sales pipelines, customer updates, follow-ups and lifecycle management.",
    features: [
      "Lead Assignment",
      "Lead Scoring",
      "Automated Follow-Ups",
      "Opportunity Tracking",
      "Sales Pipeline Automation",
      "Customer Lifecycle Management",
    ],
    steps: [
      "New Lead",
      "AI Qualification",
      "CRM Updated",
      "Sales Assignment",
      "Follow-Up Scheduled",
    ],
    benefits: [
      "Better Lead Quality",
      "Faster Sales Response",
      "Improved Sales Productivity",
      "Higher Conversion Rates",
    ],
  },
  {
    id: "docs",
    icon: FileText,
    title: "Invoice & Document Automation",
    desc: "Automatically generate, process, approve, classify, extract and manage business documents.",
    features: [
      "Invoice Generation",
      "OCR Data Extraction",
      "Approval Workflows",
      "Contract Processing",
      "Document Classification",
      "Automated Filing",
    ],
    steps: ["Document Uploaded", "Data Extracted", "Validated", "Approved", "Stored"],
    benefits: [
      "Reduced Paperwork",
      "Faster Processing",
      "Higher Accuracy",
      "Better Compliance",
    ],
  },
  {
    id: "tasks",
    icon: Zap,
    title: "Task Automation",
    desc: "Eliminate repetitive work through intelligent task automation and scheduled workflows.",
    features: [
      "Repetitive Task Automation",
      "Automated Reports",
      "Data Synchronization",
      "Scheduled Processes",
      "Internal Task Management",
      "Workflow Triggers",
    ],
    steps: ["Trigger Event", "Task Created", "Automation Executed", "Completion Report"],
    benefits: ["Increased Productivity", "Reduced Human Error", "Faster Execution"],
  },
] as const;

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Patient workflows and approvals.",
    details:
      "Automate patient intake, appointment reminders, insurance approvals, referrals and clinical documentation.",
  },
  {
    icon: Landmark,
    title: "Finance",
    desc: "Invoice processing and compliance automation.",
    details:
      "Automate AP/AR, reconciliation, KYC checks, regulatory reporting and approval hierarchies.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    desc: "Inventory and order automation.",
    details:
      "Automate order routing, inventory sync, restock alerts, promotions and customer notifications.",
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Shipment tracking and warehouse workflows.",
    details:
      "Automate dispatch, tracking updates, warehouse tasks, driver assignments and delivery confirmations.",
  },
  {
    icon: Home,
    title: "Real Estate",
    desc: "Lead management and customer follow-up automation.",
    details:
      "Automate lead capture, drip campaigns, property matching, viewing schedules and contract flows.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Student administration and internal workflow automation.",
    details:
      "Automate admissions, grading workflows, communications, attendance and staff onboarding.",
  },
];

const techStack = [
  {
    label: "Automation Platforms",
    items: ["Microsoft Power Automate", "Zapier", "Make", "UiPath"],
  },
  { label: "CRM Platforms", items: ["Salesforce", "HubSpot", "Zoho CRM"] },
  { label: "Communication", items: ["Email Systems", "WhatsApp", "SMS"] },
  { label: "Cloud Platforms", items: ["AWS", "Azure", "Google Cloud"] },
];

const metrics = [
  { label: "Processes Automated", value: 500, suffix: "+" },
  { label: "Time Saved", value: 70, suffix: "%" },
  { label: "Operational Cost Reduction", value: 60, suffix: "%" },
  { label: "Accuracy Improvement", value: 95, suffix: "%" },
  { label: "Customer Satisfaction", value: 98, suffix: "%" },
];

const whyUs = [
  {
    icon: Settings,
    title: "Custom Automation Solutions",
    desc: "Tailored automations designed around your unique processes, teams and business goals.",
  },
  {
    icon: Layers,
    title: "Enterprise Integrations",
    desc: "Seamlessly connect CRM, ERP, communication tools, databases and legacy systems.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Workflows",
    desc: "Intelligent decision-making, document understanding and adaptive automation.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable Architecture",
    desc: "Enterprise-grade security, role-based controls and cloud-native scalability.",
  },
  {
    icon: Sparkles,
    title: "Ongoing Support",
    desc: "Continuous optimization, monitoring and enhancements post-deployment.",
  },
  {
    icon: Rocket,
    title: "Proven Business Results",
    desc: "Measurable gains in efficiency, accuracy, cost savings and customer satisfaction.",
  },
];

const faqs = [
  {
    q: "What business processes can be automated?",
    a: "Almost any repetitive, rule-based or data-driven process — approvals, onboarding, invoicing, communications, reporting, data entry, CRM updates, document workflows and more.",
  },
  {
    q: "Can automation integrate with our existing software?",
    a: "Yes. We integrate with virtually any modern system via APIs, webhooks, connectors and iPaaS platforms — including CRMs, ERPs, email, databases and custom apps.",
  },
  {
    q: "Do you automate CRM and ERP systems?",
    a: "Absolutely. We automate Salesforce, HubSpot, Zoho, Microsoft Dynamics, SAP, NetSuite and other enterprise platforms end-to-end.",
  },
  {
    q: "Is automation suitable for small businesses?",
    a: "Yes. Small businesses often see the fastest ROI because a few automations can eliminate hours of repetitive daily work.",
  },
  {
    q: "How long does an automation project take?",
    a: "Simple workflows take 1–2 weeks. Mid-sized projects usually run 4–8 weeks. Enterprise-wide automation programs are phased over months with quick early wins.",
  },
  {
    q: "Can automation include AI decision-making?",
    a: "Yes. We combine automation with AI models for classification, extraction, prediction, routing and adaptive workflows.",
  },
  {
    q: "Do you provide support after deployment?",
    a: "Yes. We offer ongoing monitoring, optimization, new-workflow builds and dedicated support plans.",
  },
];

/* ------------------------------------------------------------------ */
/* Hooks                                                                */
/* ------------------------------------------------------------------ */

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <div ref={ref} className="font-display text-4xl font-bold text-gradient md:text-5xl">
      {n}
      {suffix}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

function AutomationPage() {
  return (
    <>
      <AutomationHero />
      <SolutionsOverview />
      <SolutionsDeepDive />
      <IndustriesSection />
      <TechStackSection />
      <MetricsSection />
      <WhyUsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

/* ---------------- Hero ---------------- */

function AutomationHero() {
  return (
    <PageHero
      eyebrow="Business Automation"
      title={
        <>
          Automate Your Business.{" "}
          <span className="text-gradient">Eliminate Manual Work.</span>
        </>
      }
      subtitle="Streamline operations with intelligent automation solutions that connect your business systems, eliminate repetitive tasks, reduce operational costs, improve accuracy and help your team focus on higher-value work."
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
        >
          Book an Automation Consultation <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/contact"
          className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
        >
          Request an Automation Audit
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
        >
          Start Your Automation Project
        </Link>
      </div>
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block">
        <HeroWorkflow />
      </div>
    </PageHero>
  );
}

function HeroWorkflow() {
  const nodes = [
    { label: "Request", icon: Send, x: 50, y: 8 },
    { label: "Engine", icon: Cpu, x: 50, y: 30 },
    { label: "CRM", icon: Users, x: 12, y: 50 },
    { label: "Email", icon: Mail, x: 88, y: 50 },
    { label: "Database", icon: Database, x: 12, y: 78 },
    { label: "Accounting", icon: Landmark, x: 88, y: 78 },
    { label: "Notify", icon: MessageSquare, x: 30, y: 94 },
    { label: "Done", icon: CheckCircle2, x: 70, y: 94 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6],
    [5, 7],
  ];
  return (
    <div className="relative h-[440px] w-[440px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="wg" x1="0" x2="1">
            <stop offset="0" stopColor="#15abe6" />
            <stop offset="1" stopColor="#7bd4f5" />
          </linearGradient>
        </defs>
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="url(#wg)"
            strokeWidth="0.35"
            opacity="0.6"
            strokeDasharray="2 2"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-8"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </line>
        ))}
      </svg>
      {nodes.map(({ label, icon: Icon, x, y }, i) => (
        <div
          key={label}
          className="absolute -translate-x-1/2 -translate-y-1/2 animate-float-slow"
          style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.3}s` }}
        >
          <div className="glass-strong flex flex-col items-center gap-1 rounded-2xl px-3 py-2 shadow-glow">
            <Icon className="h-5 w-5 text-primary" />
            <span className="text-[10px] font-medium">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Solutions Overview ---------------- */

function SolutionsOverview() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Automation Solutions"
        title={
          <>
            End-to-end <span className="text-gradient">automation coverage</span>
          </>
        }
        description="From workflows and CRM to documents and repetitive tasks — intelligent automation across every part of your business."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s, i) => {
          const Icon = s.icon;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group relative overflow-hidden rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2"
              style={{ animation: "fade-up 0.7s ease-out both", animationDelay: `${i * 80}ms` }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-primary/20 opacity-40 transition group-hover:opacity-100" />
              <div className="glass-strong relative flex h-full flex-col rounded-3xl p-6">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition duration-500 group-hover:bg-primary/40" />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow transition group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.benefits.slice(0, 3).map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-foreground/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {b}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Solutions Deep Dive ---------------- */

function SolutionsDeepDive() {
  return (
    <section className="relative border-y border-white/5 bg-black/20">
      <div className="absolute inset-0 ai-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl space-y-24 px-6 py-24">
        {solutions.map((s, idx) => (
          <SolutionBlock key={s.id} solution={s} reverse={idx % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function SolutionBlock({
  solution,
  reverse,
}: {
  solution: (typeof solutions)[number];
  reverse: boolean;
}) {
  const Icon = solution.icon;
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <div
      id={solution.id}
      ref={ref}
      className={`grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      <div>
        <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-widest text-primary">
          <Icon className="h-3.5 w-3.5" /> {solution.title}
        </div>
        <h3 className="mt-4 font-display text-3xl font-bold md:text-4xl">
          {solution.title}
        </h3>
        <p className="mt-3 text-muted-foreground">{solution.desc}</p>
        <div className="mt-6">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Features
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {solution.features.map((f) => (
              <div
                key={f}
                className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {f}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Benefits
          </div>
          <div className="flex flex-wrap gap-2">
            {solution.benefits.map((b) => (
              <span
                key={b}
                className="glass rounded-full px-3 py-1 text-[11px] font-medium text-primary"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-strong relative overflow-hidden rounded-3xl p-6">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
        <div className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Interactive Workflow
        </div>
        <ol className="space-y-3">
          {solution.steps.map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-16px)",
                transition: `all 0.5s ease ${i * 180}ms`,
              }}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-xs font-bold text-primary-foreground shadow-glow">
                {i + 1}
              </div>
              <span className="text-sm">{step}</span>
              {i < solution.steps.length - 1 && (
                <ArrowRight className="ml-auto h-4 w-4 text-primary/60" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ---------------- Industries ---------------- */

function IndustriesSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Industries We Automate"
        title={
          <>
            Automation across <span className="text-gradient">every industry</span>
          </>
        }
        description="Purpose-built automations tailored to the workflows, compliance and systems of your sector."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((it, i) => {
          const Icon = it.icon;
          return (
            <div
              key={it.title}
              className="group relative overflow-hidden rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
              style={{ animation: "fade-up 0.7s ease-out both", animationDelay: `${i * 70}ms` }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-primary/20 opacity-40 transition group-hover:opacity-100" />
              <div className="glass-strong relative flex h-full flex-col rounded-3xl p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow transition group-hover:rotate-6">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                <div className="mt-4 max-h-0 overflow-hidden text-xs text-foreground/70 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  {it.details}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Tech Stack ---------------- */

function TechStackSection() {
  return (
    <section className="relative border-y border-white/5 bg-black/20">
      <div className="absolute inset-0 opacity-40">
        <ParticleNetwork density={30} />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Automation Technology Stack"
          title={
            <>
              Built on the <span className="text-gradient">best-in-class</span> platforms
            </>
          }
          description="We work across leading automation, CRM, communication and cloud ecosystems."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {techStack.map((cat, i) => (
            <div
              key={cat.label}
              className="glass-strong rounded-3xl p-6"
              style={{ animation: "fade-up 0.7s ease-out both", animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-primary">
                <Cloud className="h-4 w-4" /> {cat.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((t, k) => (
                  <span
                    key={t}
                    className="glass animate-float-slow rounded-full px-3 py-1.5 text-xs font-medium text-foreground/90 transition hover:scale-110 hover:bg-primary/10 hover:text-primary hover:shadow-glow"
                    style={{ animationDelay: `${k * 0.3}s` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Metrics ---------------- */

function MetricsSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Business Impact"
        title={
          <>
            Measurable <span className="text-gradient">business outcomes</span>
          </>
        }
      />
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className="glass-strong rounded-3xl p-6 text-center transition hover:-translate-y-1 hover:shadow-glow"
            style={{ animation: "fade-up 0.7s ease-out both", animationDelay: `${i * 90}ms` }}
          >
            <Counter value={m.value} suffix={m.suffix} />
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Why Us ---------------- */

function WhyUsSection() {
  return (
    <section className="relative border-y border-white/5 bg-black/20">
      <div className="absolute inset-0 ai-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Why Automate With Us"
          title={
            <>
              Your trusted <span className="text-gradient">automation partner</span>
            </>
          }
          description="Enterprise-grade expertise, secure architecture and measurable results."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => {
            const Icon = w.icon;
            return (
              <div
                key={w.title}
                className="group glass-strong relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2"
                style={{ animation: "fade-up 0.7s ease-out both", animationDelay: `${i * 80}ms` }}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition duration-500 group-hover:bg-primary/40" />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow transition group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative mx-auto max-w-4xl px-6 py-24">
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Automation <span className="text-gradient">questions answered</span>
          </>
        }
      />
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="glass-strong overflow-hidden rounded-2xl border border-white/10 transition"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/5"
              >
                <span className="text-sm font-semibold md:text-base">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
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

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-60">
        <ParticleNetwork density={40} />
      </div>
      <div className="absolute inset-0 ai-grid opacity-20" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl font-bold md:text-5xl">
          Ready to <span className="text-gradient">Automate Your Business?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Whether you're looking to automate workflows, CRM processes, document management,
          approvals, customer communications or repetitive operational tasks, we can design and
          implement a scalable automation solution tailored to your business.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105 hover:shadow-[0_0_40px_rgba(21,171,230,0.55)]"
          >
            Schedule Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-105 hover:bg-white/10"
          >
            Request Automation Audit
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:scale-105 hover:bg-primary/10"
          >
            Start Automation Project
          </Link>
        </div>
      </div>
    </section>
  );
}
