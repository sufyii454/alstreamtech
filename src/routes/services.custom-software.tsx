import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Building2,
  Cloud,
  Layers,
  Code2,
  Database,
  Server,
  Smartphone,
  Globe,
  Users,
  BarChart3,
  Briefcase,
  ShieldCheck,
  Sparkles,
  Rocket,
  Wrench,
  Cpu,
  Workflow,
  LineChart,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  Home,
  GraduationCap,
  Factory,
  Zap,
  Settings,
  FileText,
  Bell,
  Network,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { ParticleNetwork } from "../components/ParticleNetwork";

export const Route = createFileRoute("/services/custom-software")({
  head: () => ({
    meta: [
      {
        title:
          "Custom Software Development — Scalable Business Platforms | ALStreamTech",
      },
      {
        name: "description",
        content:
          "Custom software development for enterprise platforms, SaaS products, CRM, ERP-style systems, admin dashboards and customer portals — designed around your business.",
      },
      {
        property: "og:title",
        content: "Custom Software Development | ALStreamTech",
      },
      {
        property: "og:description",
        content:
          "We design, build and support scalable, secure custom software tailored to your business processes and long-term growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CustomSoftwarePage,
});

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const solutions = [
  {
    id: "business-platforms",
    icon: Building2,
    title: "Business Platforms",
    desc: "Custom internal business systems built around your unique operational workflows.",
    features: [
      "Internal Business Systems",
      "Customer Portals",
      "Employee Portals",
      "Operations Management",
      "Workflow Management",
      "Reporting Systems",
    ],
    steps: [
      "Business Operations",
      "Custom Platform",
      "Automation",
      "Reporting",
      "Business Growth",
    ],
    benefits: [
      "Centralized Operations",
      "Improved Efficiency",
      "Better Visibility",
      "Scalable Processes",
    ],
  },
  {
    id: "saas",
    icon: Cloud,
    title: "SaaS Products",
    desc: "Cloud-based subscription software for businesses and customers, built to scale globally.",
    features: [
      "Subscription-Based Platforms",
      "Multi-Tenant Architecture",
      "User Management",
      "Secure Authentication",
      "Payment Integration",
      "Analytics Dashboards",
      "Customer Self-Service",
    ],
    steps: [
      "User Registration",
      "Subscription",
      "Platform Access",
      "Usage Analytics",
      "Business Growth",
    ],
    benefits: [
      "Recurring Revenue",
      "Scalable Cloud Architecture",
      "Global Accessibility",
      "Faster Product Growth",
    ],
  },
  {
    id: "dashboards",
    icon: BarChart3,
    title: "Admin Dashboards",
    desc: "Centralized dashboards with analytics, reporting, KPIs and management tools.",
    features: [
      "Real-Time Reporting",
      "KPI Monitoring",
      "User Management",
      "Business Analytics",
      "Operational Insights",
      "Custom Reports",
    ],
    steps: ["Charts", "Reports", "Metrics", "Alerts", "User Controls"],
    benefits: [
      "Better Decision Making",
      "Increased Visibility",
      "Centralized Management",
      "Real-Time Monitoring",
    ],
  },
  {
    id: "crm",
    icon: Users,
    title: "CRM Systems",
    desc: "Customer relationship management software tailored to your specific business processes.",
    features: [
      "Lead Management",
      "Customer Management",
      "Sales Pipelines",
      "Contact Tracking",
      "Follow-Up Management",
      "Customer Analytics",
    ],
    steps: [
      "Lead Captured",
      "Lead Assigned",
      "Follow-Up",
      "Opportunity Created",
      "Customer Won",
    ],
    benefits: [
      "Better Customer Relationships",
      "Improved Sales Performance",
      "Organized Customer Data",
      "Higher Conversion Rates",
    ],
  },
  {
    id: "erp",
    icon: Briefcase,
    title: "ERP-Style Systems",
    desc: "Enterprise software connecting finance, operations, inventory, HR and reporting in one platform.",
    features: [
      "Finance Management",
      "Inventory Management",
      "Procurement",
      "Human Resources",
      "Operations Management",
      "Reporting",
    ],
    steps: ["Orders", "Inventory", "Finance", "Operations", "Reports"],
    benefits: [
      "Unified Business Processes",
      "Reduced Data Duplication",
      "Improved Operational Efficiency",
      "Better Organizational Visibility",
    ],
  },
] as const;

const processSteps = [
  {
    icon: Sparkles,
    title: "Discovery",
    desc: "Business goals, stakeholders, workflows and success metrics.",
    deliverables: ["Requirements", "Success KPIs", "Stakeholder Map"],
  },
  {
    icon: FileText,
    title: "Planning",
    desc: "Scope, roadmap, milestones and delivery plan.",
    deliverables: ["Roadmap", "Backlog", "Timeline"],
  },
  {
    icon: Layers,
    title: "Architecture",
    desc: "System design, data models, integrations and cloud blueprint.",
    deliverables: ["Architecture Diagrams", "Data Model", "Integration Plan"],
  },
  {
    icon: Sparkles,
    title: "UI/UX Design",
    desc: "Wireframes, design system and interactive prototypes.",
    deliverables: ["Wireframes", "Design System", "Prototypes"],
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Iterative delivery with working software every sprint.",
    deliverables: ["Working Software", "APIs", "Integrations"],
  },
  {
    icon: ShieldCheck,
    title: "Testing",
    desc: "QA, automated tests, security and performance validation.",
    deliverables: ["Test Coverage", "Security Review", "Performance Report"],
  },
  {
    icon: Rocket,
    title: "Deployment",
    desc: "Cloud deployment, CI/CD, monitoring and go-live support.",
    deliverables: ["Production Release", "CI/CD Pipelines", "Monitoring"],
  },
  {
    icon: Wrench,
    title: "Support",
    desc: "Long-term maintenance, enhancements and evolution.",
    deliverables: ["SLA Support", "Enhancements", "Roadmap Evolution"],
  },
];

const techStack = [
  { label: "Frontend", items: ["React", "Next.js", "Angular"] },
  { label: "Backend", items: ["Node.js", "Python", ".NET", "Java"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { label: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
  { label: "DevOps", items: ["Docker", "Kubernetes", "Terraform"] },
];

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Systems that streamline clinical and administrative workflows.",
    details: [
      "Patient Management Systems",
      "Hospital Dashboards",
      "Appointment Platforms",
    ],
  },
  {
    icon: Landmark,
    title: "Finance",
    desc: "Secure, compliant platforms for financial operations.",
    details: [
      "Financial Dashboards",
      "Compliance Systems",
      "Loan Management Software",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    desc: "Software that powers modern retail and commerce.",
    details: [
      "Inventory Platforms",
      "POS Systems",
      "Customer Loyalty Solutions",
    ],
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Platforms to manage fleets, warehouses and deliveries.",
    details: [
      "Fleet Management",
      "Warehouse Systems",
      "Delivery Tracking",
    ],
  },
  {
    icon: Home,
    title: "Real Estate",
    desc: "Software for property, sales and tenant management.",
    details: [
      "Property Management",
      "Sales CRMs",
      "Tenant Portals",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Digital platforms for institutions and learners.",
    details: [
      "Learning Management Systems",
      "Student Portals",
      "Admissions Platforms",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Systems for production, quality and supply chain.",
    details: [
      "Production Tracking",
      "Quality Management",
      "Supply Chain Systems",
    ],
  },
  {
    icon: Rocket,
    title: "Startups",
    desc: "MVPs and scalable platforms for fast-growing teams.",
    details: [
      "MVP Development",
      "SaaS Platforms",
      "Investor Dashboards",
    ],
  },
];

const projects = [
  {
    name: "Unified Operations Platform",
    industry: "Logistics",
    challenge:
      "Disconnected tools slowing down fleet, warehouse and delivery operations.",
    solution:
      "A custom operations platform unifying dispatch, warehouse and tracking with real-time dashboards.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    results: [
      "40% faster dispatch",
      "25% lower ops cost",
      "Single source of truth",
    ],
  },
  {
    name: "Multi-Tenant SaaS Suite",
    industry: "SaaS",
    challenge:
      "Legacy product could not scale to new customer segments or geographies.",
    solution:
      "Re-architected as a modern multi-tenant SaaS with granular RBAC, billing and analytics.",
    stack: ["Next.js", "Python", "PostgreSQL", "Azure"],
    results: [
      "3x active users",
      "Global rollout",
      "New recurring revenue lines",
    ],
  },
  {
    name: "Enterprise CRM Platform",
    industry: "Finance",
    challenge:
      "Fragmented lead pipelines and manual reporting across regional teams.",
    solution:
      "Custom CRM with pipelines, automation, KPI dashboards and integrations to core banking systems.",
    stack: ["Angular", ".NET", "SQL Server", "Azure"],
    results: [
      "2x conversion rate",
      "60% less manual work",
      "Real-time revenue visibility",
    ],
  },
  {
    name: "ERP-Style Business Suite",
    industry: "Manufacturing",
    challenge:
      "Finance, inventory and operations running on disconnected spreadsheets.",
    solution:
      "Integrated ERP-style platform unifying finance, inventory, HR and reporting in one system.",
    stack: ["React", "Java", "PostgreSQL", "Kubernetes"],
    results: [
      "Unified processes",
      "Reduced errors",
      "Company-wide visibility",
    ],
  },
];

const metrics = [
  { label: "Platforms Built", value: 100, suffix: "+" },
  { label: "Active Users Supported", value: 1, suffix: "M+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Industries Served", value: 20, suffix: "+" },
  { label: "Projects Delivered", value: 100, suffix: "+" },
];

const whyUs = [
  {
    icon: Briefcase,
    title: "Business-Focused Development",
    desc: "We start with business outcomes and design software that drives them.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Cloud-native, modular systems built to scale with your business.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Secure-by-design engineering, role-based access and compliance-ready.",
  },
  {
    icon: Cpu,
    title: "Modern Technology Stack",
    desc: "Leading frameworks, cloud platforms and best-in-class tooling.",
  },
  {
    icon: Network,
    title: "Seamless Integrations",
    desc: "Connect CRMs, ERPs, payment systems, APIs and legacy platforms.",
  },
  {
    icon: Wrench,
    title: "Long-Term Support",
    desc: "Ongoing maintenance, optimization and continuous product evolution.",
  },
];

const faqs = [
  {
    q: "How much does custom software development cost?",
    a: "Cost depends on scope, complexity and integrations. Simple platforms may start in the low five figures, while enterprise-grade systems scale accordingly. We provide a transparent proposal after discovery.",
  },
  {
    q: "How long does development usually take?",
    a: "MVPs typically ship in 6–12 weeks. Mid-size platforms take 3–6 months. Enterprise systems are delivered in phases with early releases and continuous iteration.",
  },
  {
    q: "Can the software integrate with our existing systems?",
    a: "Yes. We integrate with CRMs, ERPs, payment platforms, databases, legacy systems and third-party APIs via secure, well-documented interfaces.",
  },
  {
    q: "Can AI features be added in the future?",
    a: "Absolutely. Our architectures are AI-ready — we can integrate LLMs, predictive models, recommendations and intelligent automation whenever you're ready.",
  },
  {
    q: "Is the software scalable?",
    a: "Yes. We design cloud-native, modular systems that scale horizontally, support high concurrency and grow with your users and data.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We offer maintenance, monitoring, enhancements and dedicated support plans tailored to your operational needs.",
  },
  {
    q: "Will we own the source code?",
    a: "Yes. You own the source code, data, IP and roadmap. We deliver clean, documented and maintainable software with full handover.",
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

function CustomSoftwarePage() {
  return (
    <>
      <SoftwareHero />
      <SolutionsOverview />
      <SolutionsDeepDive />
      <ProcessSection />
      <TechStackSection />
      <IndustriesSection />
      <ProjectsSection />
      <MetricsSection />
      <WhyUsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

/* ---------------- Hero ---------------- */

function SoftwareHero() {
  return (
    <PageHero
      eyebrow="Custom Software Development"
      title={
        <>
          Custom Software Built{" "}
          <span className="text-gradient">Around Your Business</span>
        </>
      }
      subtitle="Design and develop scalable software solutions tailored to your business processes, operational needs and long-term growth. From business platforms to enterprise applications, we build software that adapts to your business — not the other way around."
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
        >
          Discuss Your Project <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/contact"
          className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
        >
          Request a Proposal
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
        >
          Schedule Consultation
        </Link>
      </div>
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block">
        <HeroEcosystem />
      </div>
    </PageHero>
  );
}

function HeroEcosystem() {
  const nodes = [
    { label: "Users", icon: Users, x: 50, y: 8 },
    { label: "Web", icon: Globe, x: 12, y: 30 },
    { label: "Mobile", icon: Smartphone, x: 88, y: 30 },
    { label: "APIs", icon: Network, x: 50, y: 45 },
    { label: "Backend", icon: Server, x: 20, y: 65 },
    { label: "Database", icon: Database, x: 80, y: 65 },
    { label: "Cloud", icon: Cloud, x: 50, y: 85 },
    { label: "Business", icon: Briefcase, x: 15, y: 92 },
    { label: "Systems", icon: Workflow, x: 85, y: 92 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [3, 4],
    [3, 5],
    [4, 6],
    [5, 6],
    [6, 7],
    [6, 8],
  ];
  return (
    <div className="relative h-[460px] w-[460px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="cs-hg" x1="0" x2="1">
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
            stroke="url(#cs-hg)"
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
        eyebrow="Software Solutions"
        title={
          <>
            End-to-end <span className="text-gradient">custom software</span>
          </>
        }
        description="From internal business platforms and SaaS products to CRM, ERP and analytics dashboards — built around your workflows."
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
        {solution.id === "dashboards" ? (
          <DashboardPreview />
        ) : (
          <ol className="space-y-3">
            {solution.steps.map((step, i) => (
              <li
                key={step}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
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
        )}
      </div>
    </div>
  );
}

function DashboardPreview() {
  const bars = [45, 70, 55, 85, 62, 92, 74];
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Revenue", value: "$1.2M", icon: LineChart },
          { label: "Users", value: "24.8k", icon: Users },
          { label: "Uptime", value: "99.9%", icon: ShieldCheck },
        ].map(({ label, value, icon: Icon }, i) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/5 p-3"
            style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 120}ms` }}
          >
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
              <Icon className="h-3.5 w-3.5 text-primary" /> {label}
            </div>
            <div className="mt-1 font-display text-lg font-bold text-gradient">
              {value}
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>Performance</span>
          <span className="inline-flex items-center gap-1 text-primary">
            <Bell className="h-3 w-3" /> Live
          </span>
        </div>
        <div className="flex h-24 items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary"
              style={{
                height: `${h}%`,
                animation: "fade-up 0.8s ease-out both",
                animationDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Process ---------------- */

function ProcessSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Development Process"
        title={
          <>
            A proven path from <span className="text-gradient">idea to production</span>
          </>
        }
        description="A structured, transparent process that de-risks delivery and drives measurable business outcomes."
      />
      <ol className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((s, i) => {
          const Icon = s.icon;
          const active = hovered === i;
          return (
            <li
              key={s.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative overflow-hidden rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-1"
              style={{ animation: "fade-up 0.7s ease-out both", animationDelay: `${i * 90}ms` }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-primary/20 opacity-40 transition group-hover:opacity-100" />
              <div className="glass-strong relative flex h-full flex-col rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow transition group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="glass rounded-full px-2 py-0.5 text-[10px] font-semibold text-primary">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                <div
                  className="grid transition-all duration-500"
                  style={{ gridTemplateRows: active ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="mt-3 border-t border-white/10 pt-3">
                      <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                        Deliverables
                      </div>
                      <ul className="space-y-1">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-center gap-2 text-[11px] text-foreground/80">
                            <CheckCircle2 className="h-3 w-3 text-primary" /> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
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
          eyebrow="Technology Stack"
          title={
            <>
              Modern <span className="text-gradient">engineering foundations</span>
            </>
          }
          description="Best-in-class frameworks, databases, cloud platforms and DevOps tooling."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {techStack.map((cat, i) => (
            <div
              key={cat.label}
              className="glass-strong rounded-3xl p-6"
              style={{ animation: "fade-up 0.7s ease-out both", animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-primary">
                <Code2 className="h-4 w-4" /> {cat.label}
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

/* ---------------- Industries ---------------- */

function IndustriesSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Industries Served"
        title={
          <>
            Custom software across <span className="text-gradient">every industry</span>
          </>
        }
        description="Purpose-built platforms tailored to the workflows and compliance needs of your sector."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:max-h-48 group-hover:opacity-100">
                  <ul className="space-y-1.5">
                    {it.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-[11px] text-foreground/80">
                        <CheckCircle2 className="h-3 w-3 text-primary" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */

function ProjectsSection() {
  return (
    <section className="relative border-y border-white/5 bg-black/20">
      <div className="absolute inset-0 ai-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Project Showcase"
          title={
            <>
              Custom software, <span className="text-gradient">real impact</span>
            </>
          }
          description="Selected engagements delivering measurable business outcomes."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className="group relative overflow-hidden rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2"
              style={{ animation: "fade-up 0.7s ease-out both", animationDelay: `${i * 90}ms` }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-primary/20 opacity-40 transition group-hover:opacity-100" />
              <div className="glass-strong relative flex h-full flex-col rounded-3xl p-6">
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl transition duration-500 group-hover:bg-primary/40" />
                <div className="flex items-center justify-between">
                  <span className="glass rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                    {p.industry}
                  </span>
                  <Sparkles className="h-4 w-4 text-primary/60" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{p.name}</h3>

                <div className="mt-5 space-y-3 text-sm">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Challenge
                    </div>
                    <p className="mt-1 text-foreground/80">{p.challenge}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Solution
                    </div>
                    <p className="mt-1 text-foreground/80">{p.solution}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="glass rounded-full px-2.5 py-1 text-[11px] font-medium text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Results
                  </div>
                  <ul className="space-y-1">
                    {p.results.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-xs text-foreground/80">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {r}
                      </li>
                    ))}
                  </ul>
                </div>
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
            Measurable <span className="text-gradient">outcomes at scale</span>
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
          eyebrow="Why Choose Us"
          title={
            <>
              Your trusted <span className="text-gradient">software development partner</span>
            </>
          }
          description="Enterprise-grade engineering, secure architecture and long-term support."
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
            Custom software <span className="text-gradient">questions answered</span>
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
          Let's Build Software That{" "}
          <span className="text-gradient">Fits Your Business</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          From business platforms and SaaS products to CRM systems, ERP solutions, customer portals
          and enterprise applications, we build secure, scalable software tailored to your business
          goals and future growth.
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
            Request Proposal
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:scale-105 hover:bg-primary/10"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
