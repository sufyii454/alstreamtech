import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  BarChart3,
  LineChart,
  PieChart,
  Database,
  Brain,
  Sparkles,
  Rocket,
  ShieldCheck,
  Gauge,
  Layers,
  FileText,
  Workflow,
  Filter,
  TrendingUp,
  Activity,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Home,
  Truck,
  GraduationCap,
  Wrench,
  Cpu,
  Cloud,
  Lightbulb,
} from "lucide-react";

import { SectionHeading } from "../components/SectionHeading";
import { ParticleNetwork } from "../components/ParticleNetwork";

export const Route = createFileRoute("/services/data-analytics")({
  head: () => ({
    meta: [
      {
        title:
          "Data & Analytics — Dashboards, BI, AI Insights & Data Pipelines | ALStreamTech",
      },
      {
        name: "description",
        content:
          "Executive dashboards, automated reporting, AI-powered analytics and scalable data pipelines that turn business data into decisions.",
      },
      { property: "og:title", content: "Data & Analytics | ALStreamTech" },
      {
        property: "og:description",
        content:
          "Modern analytics platforms, BI dashboards, AI insights and data pipelines engineered for enterprise decision-making.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DataAnalyticsPage,
});

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

type Solution = {
  id: string;
  icon: typeof BarChart3;
  title: string;
  desc: string;
  features: readonly string[];
  steps: readonly string[];
  benefits: readonly string[];
};

const solutions: readonly Solution[] = [
  {
    id: "dashboards",
    icon: BarChart3,
    title: "Dashboard Solutions",
    desc: "Real-time visibility into business performance through interactive, customizable dashboards.",
    features: [
      "Executive Dashboards",
      "Operational Dashboards",
      "Sales Dashboards",
      "Financial Dashboards",
      "Customer Analytics Dashboards",
      "Performance Monitoring Dashboards",
    ],
    steps: ["Data Sources", "Data Processing", "Dashboard", "Business Insights"],
    benefits: [
      "Real-Time Visibility",
      "Faster Decision-Making",
      "Improved Performance Tracking",
      "Centralized Business Insights",
    ],
  },
  {
    id: "reports",
    icon: FileText,
    title: "Automated Reporting",
    desc: "Automated reporting systems that deliver accurate business insights and eliminate manual work.",
    features: [
      "Automated Reports",
      "Scheduled Reporting",
      "Executive Summaries",
      "Financial Reporting",
      "Operational Reporting",
      "Compliance Reporting",
    ],
    steps: ["Data Collection", "Validation", "Report Generation", "Distribution", "Decision Making"],
    benefits: [
      "Reduced Manual Reporting",
      "Consistent Reporting Standards",
      "Improved Accuracy",
      "Significant Time Savings",
    ],
  },
  {
    id: "ai-insights",
    icon: Brain,
    title: "AI Insights",
    desc: "Use AI to uncover patterns, predict outcomes and support strategic decision-making.",
    features: [
      "Predictive Analytics",
      "Trend Analysis",
      "Customer Behavior Insights",
      "Sales Forecasting",
      "Risk Analysis",
      "Business Recommendations",
    ],
    steps: ["Business Data", "AI Analysis", "Pattern Detection", "Predictions", "Recommendations"],
    benefits: [
      "Better Forecasting",
      "Smarter Business Decisions",
      "Risk Reduction",
      "Growth Opportunities",
    ],
  },
  {
    id: "pipelines",
    icon: Workflow,
    title: "Data Pipelines",
    desc: "Collect, process, transform and deliver data efficiently across every business system.",
    features: [
      "Data Integration",
      "ETL / ELT Processes",
      "Data Transformation",
      "Data Warehousing",
      "Real-Time Processing",
      "API Integrations",
    ],
    steps: ["Data Sources", "Extraction", "Transformation", "Validation", "Storage", "Analytics"],
    benefits: [
      "Reliable Data Flow",
      "Centralized Data Management",
      "Faster Analytics",
      "Improved Data Quality",
    ],
  },
] as const;

const biCards = [
  { icon: Landmark, title: "Executive Reporting", desc: "Board-ready summaries and strategic KPIs." },
  { icon: TrendingUp, title: "KPI Tracking", desc: "Track the metrics that move the business." },
  { icon: Activity, title: "Operational Intelligence", desc: "Live insight into daily operations." },
  { icon: Gauge, title: "Performance Measurement", desc: "Benchmarks, goals and continuous progress." },
  { icon: Lightbulb, title: "Strategic Planning", desc: "Scenario modeling and long-term planning." },
  { icon: Layers, title: "Departmental Analytics", desc: "Analytics tailored per team and function." },
];

const processSteps = [
  { icon: Sparkles, title: "Discovery", desc: "Business goals, KPIs and stakeholder alignment.", deliverables: ["KPI Map", "Stakeholders", "Success Metrics"] },
  { icon: Database, title: "Data Assessment", desc: "Source inventory, quality and gap analysis.", deliverables: ["Source Inventory", "Quality Audit", "Gap Analysis"] },
  { icon: FileText, title: "Architecture Design", desc: "Warehouse, lakehouse and semantic layer design.", deliverables: ["Data Model", "Semantic Layer", "Blueprint"] },
  { icon: Workflow, title: "Data Integration", desc: "ETL/ELT pipelines and API integrations.", deliverables: ["Pipelines", "Connectors", "Automation"] },
  { icon: BarChart3, title: "Dashboard Development", desc: "Interactive dashboards and KPI reports.", deliverables: ["Dashboards", "Reports", "Alerts"] },
  { icon: ShieldCheck, title: "Testing", desc: "Data validation, QA and security testing.", deliverables: ["QA Report", "Data Tests", "Security Review"] },
  { icon: Rocket, title: "Deployment", desc: "Rollout, training and change management.", deliverables: ["Go-Live", "Training", "Adoption Plan"] },
  { icon: Wrench, title: "Optimization & Support", desc: "Tuning, enhancements and long-term support.", deliverables: ["Perf Tuning", "Enhancements", "SLA Support"] },
];

const techStack = [
  {
    label: "Business Intelligence",
    items: [
      { name: "Power BI", use: "Enterprise BI & reporting" },
      { name: "Tableau", use: "Interactive visual analytics" },
      { name: "Looker", use: "Modeled analytics platform" },
    ],
  },
  {
    label: "Data Engineering",
    items: [
      { name: "Python", use: "ETL, ML & data workflows" },
      { name: "SQL", use: "Data querying & modeling" },
      { name: "Apache Airflow", use: "Pipeline orchestration" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", use: "Reliable relational storage" },
      { name: "MySQL", use: "Popular OLTP database" },
      { name: "SQL Server", use: "Enterprise data platform" },
      { name: "Snowflake", use: "Cloud data warehouse" },
    ],
  },
  {
    label: "Cloud Analytics",
    items: [
      { name: "AWS Analytics", use: "Redshift, Glue, Athena" },
      { name: "Azure Data Services", use: "Synapse, Fabric, ADF" },
      { name: "Google BigQuery", use: "Serverless data warehouse" },
    ],
  },
  {
    label: "AI & Machine Learning",
    items: [
      { name: "OpenAI", use: "Generative AI & insights" },
      { name: "TensorFlow", use: "Deep learning models" },
      { name: "PyTorch", use: "Flexible ML research & prod" },
    ],
  },
];

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Patient analytics, operational reporting and clinical dashboards.",
    details: ["Patient Analytics", "Operational Reporting", "Healthcare Performance Dashboards"],
  },
  {
    icon: Landmark,
    title: "Finance",
    desc: "Risk analysis, forecasting and compliance reporting.",
    details: ["Risk Analysis", "Financial Forecasting", "Compliance Reporting"],
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    desc: "Sales, inventory and customer behavior insights.",
    details: ["Sales Analytics", "Inventory Reporting", "Customer Behavior Insights"],
  },
  {
    icon: Home,
    title: "Real Estate",
    desc: "Property performance dashboards and market intelligence.",
    details: ["Property Performance", "Market Intelligence", "Portfolio Dashboards"],
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Fleet tracking, operational metrics and route analytics.",
    details: ["Fleet Tracking", "Operational Metrics", "Route Analytics"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Student performance analytics and institutional reporting.",
    details: ["Student Performance", "Institutional Reporting", "Learning Analytics"],
  },
];

const projects = [
  {
    name: "Executive Reporting Platform",
    industry: "Enterprise",
    challenge: "Fragmented KPIs across departments hid the real business picture.",
    solution: "Unified data warehouse + executive dashboard with drilldowns.",
    stack: ["Snowflake", "Power BI", "Airflow"],
    outcome: ["Single source of truth", "Faster board reviews", "Higher decision velocity"],
  },
  {
    name: "Sales Analytics Dashboard",
    industry: "SaaS",
    challenge: "Sales team lacked pipeline visibility and forecast accuracy.",
    solution: "Real-time sales dashboards with predictive forecasting.",
    stack: ["Tableau", "Python", "PostgreSQL"],
    outcome: ["+30% forecast accuracy", "+22% win rate", "Live pipeline visibility"],
  },
  {
    name: "AI Forecasting System",
    industry: "Retail",
    challenge: "Manual demand planning caused overstock and stockouts.",
    solution: "ML-powered demand forecasting integrated into planning tools.",
    stack: ["Python", "PyTorch", "BigQuery"],
    outcome: ["-40% stockouts", "-25% inventory cost", "Higher margins"],
  },
  {
    name: "Customer Insights Platform",
    industry: "Consumer",
    challenge: "Customer behavior data was scattered and underused.",
    solution: "Unified customer data platform with segmentation and cohort analytics.",
    stack: ["Snowflake", "Looker", "dbt"],
    outcome: ["Personalized campaigns", "+35% engagement", "Data-driven CX"],
  },
  {
    name: "Financial Reporting Solution",
    industry: "Finance",
    challenge: "Regulatory reporting was manual, slow and error-prone.",
    solution: "Automated financial reporting with governed data models.",
    stack: ["Azure Synapse", "Power BI", "SQL Server"],
    outcome: ["Audit-ready reports", "-80% report time", "Reduced compliance risk"],
  },
];

const metrics = [
  { label: "Dashboards Delivered", value: 100, suffix: "+" },
  { label: "Reports Automated", value: 1000, suffix: "+" },
  { label: "Data Sources Integrated", value: 500, suffix: "+" },
  { label: "Forecast Accuracy Improvement", value: 85, suffix: "%" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Industries Served", value: 20, suffix: "+" },
];

const faqs = [
  {
    q: "What dashboard tools do you use?",
    a: "We build with Power BI, Tableau, Looker and custom web dashboards using React/D3 — chosen based on your ecosystem, users and scale.",
  },
  {
    q: "Can dashboards connect to our existing systems?",
    a: "Yes. We integrate with CRMs, ERPs, databases, SaaS platforms, spreadsheets and custom APIs to bring every data source into one place.",
  },
  {
    q: "How often can reports be generated?",
    a: "Reports can be scheduled hourly, daily, weekly or monthly — or generated in real time based on live data streams and triggers.",
  },
  {
    q: "Can AI provide predictions and recommendations?",
    a: "Absolutely. We build predictive models for forecasting, churn, demand and risk — and layer generative AI for narrative insights and next-best-action recommendations.",
  },
  {
    q: "Can you build custom analytics platforms?",
    a: "Yes. Beyond BI tools, we design and build custom analytics platforms with tailored data models, dashboards and workflows for your business.",
  },
  {
    q: "How secure is our business data?",
    a: "Every solution ships with encryption, role-based access, row-level security, audit logging and compliance baselines (SOC2, HIPAA, ISO) where required.",
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

function DataAnalyticsPage() {
  return (
    <>
      <AnalyticsHero />
      <SolutionsOverview />
      <SolutionsDeepDive />
      <BusinessIntelligenceSection />
      <ProcessSection />
      <InteractiveDemoSection />
      <TechStackSection />
      <IndustriesSection />
      <ProjectsSection />
      <MetricsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

/* ---------------- Hero ---------------- */

function AnalyticsHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 opacity-70"><ParticleNetwork density={45} /></div>
      <div className="absolute inset-0 ai-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
          <div className="min-w-0">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary animate-fade-up">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Data & Analytics
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight animate-fade-up sm:text-5xl lg:text-6xl xl:text-7xl">
              Turn Data Into <span className="text-gradient">Decisions</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground animate-fade-up sm:text-lg">
              Transform your business data into meaningful insights with powerful dashboards, automated reporting, AI-driven analytics and scalable data pipelines.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
              >
                Schedule Analytics Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                Request Data Assessment
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                Start Your Analytics Project
              </Link>
            </div>
          </div>
          <div className="pointer-events-none hidden justify-self-end lg:block">
            <ExecutiveDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveBars({ seed = 0, count = 10 }: { seed?: number; count?: number }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1400);
    return () => clearInterval(id);
  }, []);
  const bars = useMemo(
    () => Array.from({ length: count }, (_, i) => 30 + ((Math.sin((i + tick + seed) * 0.9) + 1) / 2) * 65),
    [count, tick, seed],
  );
  return (
    <div className="flex h-24 items-end gap-1.5">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary transition-[height] duration-700"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function LiveLine({ seed = 0 }: { seed?: number }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1600);
    return () => clearInterval(id);
  }, []);
  const points = useMemo(() => {
    const n = 12;
    return Array.from({ length: n }, (_, i) => {
      const y = 55 - ((Math.sin((i + tick + seed) * 0.7) + 1) / 2) * 40;
      return `${(i / (n - 1)) * 100},${y}`;
    }).join(" ");
  }, [tick, seed]);
  return (
    <svg viewBox="0 0 100 60" className="h-24 w-full">
      <defs>
        <linearGradient id="lg1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#15abe6" stopOpacity="0.6" />
          <stop offset="1" stopColor="#15abe6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={points}
        fill="none"
        stroke="#15abe6"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-700"
      />
      <polygon
        points={`${points} 100,60 0,60`}
        fill="url(#lg1)"
        className="transition-all duration-700"
      />
    </svg>
  );
}

function ExecutiveDashboard() {
  return (
    <div className="relative h-[460px] w-[520px]">
      <div className="glass-strong absolute inset-0 rounded-3xl border border-white/10 p-4 shadow-glow">
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Executive Dashboard</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <Filter className="h-3 w-3" /> Q4 · Live
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { l: "Revenue", v: "$4.82M", d: "+12%" },
            { l: "Active Users", v: "128k", d: "+8%" },
            { l: "Conversion", v: "3.9%", d: "+0.4pp" },
          ].map((k) => (
            <div key={k.l} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k.l}</div>
              <div className="mt-1 font-display text-lg font-bold text-gradient">{k.v}</div>
              <div className="text-[10px] text-primary">{k.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="inline-flex items-center gap-1"><BarChart3 className="h-3 w-3 text-primary" /> Traffic</span>
              <span className="text-primary">Live</span>
            </div>
            <div className="mt-2"><LiveBars /></div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="inline-flex items-center gap-1"><LineChart className="h-3 w-3 text-primary" /> Revenue</span>
              <span className="text-primary">Trend</span>
            </div>
            <div className="mt-2"><LiveLine /></div>
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-white/10 bg-gradient-to-br from-primary/15 to-transparent p-3">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary">
            <Brain className="h-3 w-3" /> AI Insight
          </div>
          <p className="mt-1 text-xs text-foreground/85">
            Enterprise segment revenue is trending +18% MoM. Reallocating 12% of paid budget to LinkedIn could add ~$140k next quarter.
          </p>
        </div>
      </div>

      <div
        className="glass absolute -right-3 top-6 flex items-center gap-1 rounded-full px-2 py-1 text-[10px] text-primary animate-float-slow"
        style={{ animationDelay: "0.3s" }}
      >
        <PieChart className="h-3 w-3" /> Segments
      </div>
      <div
        className="glass absolute -left-3 bottom-16 flex items-center gap-1 rounded-full px-2 py-1 text-[10px] text-primary animate-float-slow"
        style={{ animationDelay: "0.9s" }}
      >
        <TrendingUp className="h-3 w-3" /> Forecast
      </div>
    </div>
  );
}

/* ---------------- Solutions Overview ---------------- */

function SolutionsOverview() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Data & Analytics Solutions"
        title={
          <>
            End-to-end <span className="text-gradient">analytics platforms</span>
          </>
        }
        description="Dashboards, reporting, AI insights and data pipelines — engineered as one."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-2">
                  {i % 2 === 0 ? <LiveBars seed={i} count={8} /> : <LiveLine seed={i} />}
                </div>
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
          <SolutionBlock key={s.id} solution={s} index={idx} reverse={idx % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function SolutionBlock({
  solution,
  index,
  reverse,
}: {
  solution: Solution;
  index: number;
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
        <h3 className="mt-4 font-display text-3xl font-bold md:text-4xl">{solution.title}</h3>
        <p className="mt-3 text-muted-foreground">{solution.desc}</p>

        <div className="mt-6">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Features</div>
          <div className="grid gap-2 sm:grid-cols-2">
            {solution.features.map((f) => (
              <div key={f} className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {f}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Benefits</div>
          <div className="flex flex-wrap gap-2">
            {solution.benefits.map((b) => (
              <span key={b} className="glass rounded-full px-3 py-1 text-[11px] font-medium text-primary">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-strong relative overflow-hidden rounded-3xl p-6">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
        <div className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {solution.id === "ai-insights" ? "AI Workflow" : "Interactive Workflow"}
        </div>
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
              {i < solution.steps.length - 1 && <ArrowRight className="ml-auto h-4 w-4 text-primary/60" />}
            </li>
          ))}
        </ol>
        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3">
          {solution.id === "ai-insights" ? (
            <div className="flex items-start gap-2 text-xs">
              <Brain className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-foreground/85">
                AI detected a 22% seasonal uptick in enterprise renewals. Recommended: expand success capacity by 15% next quarter.
              </p>
            </div>
          ) : index % 2 === 0 ? (
            <LiveBars seed={index + 3} />
          ) : (
            <LiveLine seed={index + 3} />
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Business Intelligence ---------------- */

function BusinessIntelligenceSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Business Intelligence"
        title={
          <>
            A <span className="text-gradient">data-driven</span> operating model
          </>
        }
        description="Intelligence delivered to every layer of the business — from executives to the front line."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {biCards.map((c, i) => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className="group glass-strong relative overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1"
              style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 70}ms` }}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition group-hover:bg-primary/40" />
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold">{c.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {["Improved Visibility", "Data-Driven Culture", "Faster Decision-Making", "Better Business Outcomes"].map((b) => (
          <span key={b} className="glass rounded-full px-3 py-1 text-[11px] font-medium text-primary">
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */

function ProcessSection() {
  return (
    <section className="relative border-y border-white/5 bg-black/20">
      <div className="absolute inset-0 ai-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Our Process"
          title={
            <>
              A proven <span className="text-gradient">analytics delivery</span> playbook
            </>
          }
          description="From discovery to long-term support — engineered for quality, adoption and impact."
        />
        <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => {
            const Icon = p.icon;
            return (
              <li
                key={p.title}
                className="group glass-strong relative overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1"
                style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 70}ms` }}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition group-hover:bg-primary/40" />
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-xs font-bold text-primary-foreground shadow-glow">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{p.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.deliverables.map((d) => (
                    <span key={d} className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-foreground/80">
                      {d}
                    </span>
                  ))}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Interactive Demo ---------------- */

const demoViews = [
  {
    id: "sales",
    label: "Sales",
    kpis: [
      { l: "Revenue", v: "$1.28M", d: "+14%" },
      { l: "Pipeline", v: "$3.4M", d: "+9%" },
      { l: "Win Rate", v: "32%", d: "+3pp" },
    ],
    insight: "Enterprise deals are closing 18% faster this month — consider expanding SDR coverage.",
  },
  {
    id: "marketing",
    label: "Marketing",
    kpis: [
      { l: "MQLs", v: "4,210", d: "+22%" },
      { l: "CAC", v: "$142", d: "-8%" },
      { l: "ROAS", v: "4.6x", d: "+0.6x" },
    ],
    insight: "Paid social is outperforming search by 2.1x — reallocate 15% of budget to sustain growth.",
  },
  {
    id: "ops",
    label: "Operations",
    kpis: [
      { l: "Uptime", v: "99.98%", d: "+0.02pp" },
      { l: "Cycle Time", v: "3.2h", d: "-12%" },
      { l: "SLA Met", v: "97%", d: "+2pp" },
    ],
    insight: "Region APAC shows a spike in support tickets — investigate app performance in that zone.",
  },
];

function InteractiveDemoSection() {
  const [view, setView] = useState(demoViews[0].id);
  const active = demoViews.find((v) => v.id === view)!;
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Interactive Demo"
        title={
          <>
            Explore a <span className="text-gradient">live analytics</span> experience
          </>
        }
        description="Switch views, filter data and see AI-generated recommendations in action."
      />
      <div className="glass-strong relative overflow-hidden rounded-3xl p-5 md:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex flex-wrap gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            {demoViews.map((v) => (
              <button
                key={v.id}
                onClick={() => setView(v.id)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  view === v.id
                    ? "bg-gradient-brand text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
            <Filter className="h-3 w-3" /> Last 30 Days · Live
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {active.kpis.map((k) => (
            <div key={k.l} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k.l}</div>
              <div className="mt-1 font-display text-2xl font-bold text-gradient">{k.v}</div>
              <div className="text-[10px] text-primary">{k.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="inline-flex items-center gap-1"><BarChart3 className="h-3.5 w-3.5" /> Performance</span>
              <span className="text-[10px] text-muted-foreground">Live</span>
            </div>
            <LiveBars seed={active.id.length} count={14} />
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-primary/15 to-transparent p-4">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary">
              <Brain className="h-3.5 w-3.5" /> AI Recommendation
            </div>
            <p className="mt-2 text-sm text-foreground/85">{active.insight}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Trend detected", "Opportunity", "Action ready"].map((t) => (
                <span key={t} className="glass rounded-full px-2 py-0.5 text-[10px] font-medium text-primary">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Tech Stack ---------------- */

function TechStackSection() {
  return (
    <section className="relative border-y border-white/5 bg-black/20">
      <div className="absolute inset-0 ai-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Technology Stack"
          title={
            <>
              A modern, <span className="text-gradient">battle-tested</span> analytics stack
            </>
          }
          description="Best-in-class BI, data engineering, cloud analytics and AI platforms."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, gi) => (
            <div
              key={group.label}
              className="glass-strong rounded-2xl p-5"
              style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${gi * 80}ms` }}
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Cpu className="h-3.5 w-3.5" /> {group.label}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((it) => (
                  <span
                    key={it.name}
                    title={it.use}
                    className="group relative cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                  >
                    {it.name}
                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-black/80 px-2 py-1 text-[10px] text-foreground shadow-glow group-hover:block">
                      {it.use}
                    </span>
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
        eyebrow="Industry Analytics Solutions"
        title={
          <>
            Analytics tailored to <span className="text-gradient">every industry</span>
          </>
        }
        description="Domain-aware dashboards, reporting and AI insights."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <div
              key={ind.title}
              className="group glass-strong relative overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1"
              style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 70}ms` }}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition group-hover:bg-primary/40" />
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold">{ind.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{ind.desc}</p>
              <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                <ul className="space-y-1.5">
                  {ind.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-foreground/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {d}
                    </li>
                  ))}
                </ul>
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
          eyebrow="Analytics Project Showcase"
          title={
            <>
              Analytics that <span className="text-gradient">moved the needle</span>
            </>
          }
          description="Selected analytics platforms we've designed, built and scaled."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className="group glass-strong relative overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1"
              style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 70}ms` }}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl transition group-hover:bg-primary/40" />
              <div className="flex items-center justify-between">
                <span className="glass rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                  {p.industry}
                </span>
                <BarChart3 className="h-4 w-4 text-primary/70" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{p.name}</h3>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-2">
                {i % 2 === 0 ? <LiveBars seed={i + 7} count={10} /> : <LiveLine seed={i + 7} />}
              </div>

              <div className="mt-3 space-y-2 text-xs">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Challenge</div>
                  <p className="mt-1 text-foreground/80">{p.challenge}</p>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Solution</div>
                  <p className="mt-1 text-foreground/80">{p.solution}</p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-foreground/80">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.outcome.map((r) => (
                  <span key={r} className="glass rounded-full px-2 py-0.5 text-[10px] font-medium text-primary">
                    {r}
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
            Real numbers. <span className="text-gradient">Real results.</span>
          </>
        }
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className="glass-strong rounded-2xl p-6 text-center"
            style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 80}ms` }}
          >
            <Counter value={m.value} suffix={m.suffix} />
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative border-y border-white/5 bg-black/20">
      <div className="absolute inset-0 ai-grid opacity-10" />
      <div className="relative mx-auto max-w-4xl px-6 py-24">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Common <span className="text-gradient">questions</span>
            </>
          }
        />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="glass-strong block w-full rounded-2xl p-5 text-left transition hover:bg-white/5"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden text-sm text-muted-foreground">{f.a}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section className="relative mx-auto my-24 max-w-7xl px-6">
      <div className="glass-strong relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20">
        <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
              Let's unlock it
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
              Unlock the Power of <span className="text-gradient">Your Data</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              From dashboards and automated reports to AI-powered insights and scalable data pipelines, we help businesses turn information into competitive advantage.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
              >
                Schedule Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                Request Data Assessment
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                Start Your Analytics Project
              </Link>
            </div>
          </div>
          <div className="relative mx-auto hidden h-[280px] w-[320px] lg:block">
            <div className="glass-strong absolute inset-0 rounded-2xl border border-white/10 p-4 shadow-glow">
              <div className="flex items-center justify-between pb-2 text-[10px] uppercase tracking-widest text-primary">
                <span>Executive View</span>
                <Cloud className="h-3 w-3" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { l: "Rev", v: "$4.8M" },
                  { l: "Users", v: "128k" },
                  { l: "CVR", v: "3.9%" },
                ].map((k) => (
                  <div key={k.l} className="rounded-lg border border-white/10 bg-white/5 p-2 text-center">
                    <div className="text-[9px] uppercase text-muted-foreground">{k.l}</div>
                    <div className="text-sm font-bold text-gradient">{k.v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-2">
                <LiveLine />
              </div>
              <div className="mt-2 rounded-lg border border-white/10 bg-gradient-to-br from-primary/15 to-transparent p-2 text-[10px] text-foreground/85">
                <span className="inline-flex items-center gap-1 text-primary"><Brain className="h-3 w-3" /> AI:</span>{" "}
                Growth trending +14% MoM.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
