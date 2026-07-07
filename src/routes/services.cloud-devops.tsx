import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Cloud,
  Server,
  Database,
  Cpu,
  ShieldCheck,
  Rocket,
  Sparkles,
  Gauge,
  Activity,
  GitBranch,
  Boxes,
  Network,
  Layers,
  Wrench,
  FileText,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  GraduationCap,
  Zap,
  BarChart3,
  Lock,
  RefreshCw,
} from "lucide-react";

import { SectionHeading } from "../components/SectionHeading";
import { ParticleNetwork } from "../components/ParticleNetwork";

export const Route = createFileRoute("/services/cloud-devops")({
  head: () => ({
    meta: [
      {
        title:
          "Cloud & DevOps — AWS, Azure, CI/CD, Monitoring & Scaling | ALStreamTech",
      },
      {
        name: "description",
        content:
          "Cloud architecture, CI/CD automation, infrastructure-as-code, monitoring and 24/7 SRE across AWS, Azure and Google Cloud — secure, cost-optimized and scalable.",
      },
      { property: "og:title", content: "Cloud & DevOps | ALStreamTech" },
      {
        property: "og:description",
        content:
          "Modern cloud infrastructure and DevOps automation engineered for reliability, performance, security and scale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CloudDevOpsPage,
});

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

type Solution = {
  id: string;
  icon: typeof Cloud;
  title: string;
  desc: string;
  features: readonly string[];
  steps: readonly string[];
  benefits: readonly string[];
};

const solutions: readonly Solution[] = [
  {
    id: "aws-azure",
    icon: Cloud,
    title: "AWS & Azure Setup",
    desc: "Design and deploy secure cloud environments tailored to business requirements.",
    features: [
      "Cloud Architecture Design",
      "Environment Setup",
      "Virtual Networks",
      "Identity & Access Management",
      "Security Configuration",
      "Disaster Recovery Planning",
    ],
    steps: ["Business Application", "Cloud Infrastructure", "Security Layer", "Monitoring", "Scalability"],
    benefits: ["Secure Cloud Foundation", "Reduced Operational Overhead", "Improved Reliability"],
  },
  {
    id: "cicd",
    icon: GitBranch,
    title: "CI/CD Pipelines",
    desc: "Automate software delivery and deployment workflows end-to-end.",
    features: [
      "Build Automation",
      "Automated Testing",
      "Continuous Integration",
      "Continuous Deployment",
      "Release Management",
      "Infrastructure Automation",
    ],
    steps: ["Code Commit", "Build", "Testing", "Security Checks", "Deployment", "Monitoring"],
    benefits: ["Faster Releases", "Reduced Deployment Errors", "Improved Development Efficiency"],
  },
  {
    id: "hosting",
    icon: Server,
    title: "Hosting & Infrastructure",
    desc: "Reliable cloud hosting optimized for performance, scalability and security.",
    features: [
      "Application Hosting",
      "Database Hosting",
      "Load Balancing",
      "Backup Solutions",
      "Infrastructure Optimization",
      "Disaster Recovery",
    ],
    steps: ["Users", "Load Balancer", "Application Servers", "Database", "Monitoring"],
    benefits: ["High Availability", "Better Performance", "Reliable Operations"],
  },
  {
    id: "monitoring",
    icon: Activity,
    title: "Monitoring & Observability",
    desc: "Real-time monitoring, alerting, analytics and full infrastructure visibility.",
    features: [
      "Application Monitoring",
      "Infrastructure Monitoring",
      "Log Management",
      "Performance Tracking",
      "Incident Alerting",
      "Reporting Dashboards",
    ],
    steps: ["Metrics In", "Aggregation", "Dashboards", "Alerts", "Incident Response"],
    benefits: ["Faster Issue Detection", "Improved Uptime", "Better Operational Visibility"],
  },
  {
    id: "scaling",
    icon: RefreshCw,
    title: "Auto Scaling & High Availability",
    desc: "Infrastructure that scales with demand while maintaining maximum uptime.",
    features: [
      "Auto Scaling",
      "High Availability Architecture",
      "Traffic Management",
      "Performance Optimization",
      "Multi-Region Deployment",
      "Capacity Planning",
    ],
    steps: ["Traffic Increase", "Auto Scaling", "Load Distribution", "Performance Maintained", "User Satisfaction"],
    benefits: ["Business Continuity", "Better User Experience", "Cost Optimization"],
  },
] as const;

const processSteps = [
  { icon: Sparkles, title: "Assessment", desc: "Current state, risks and opportunities.", deliverables: ["Audit", "Risk Map", "Roadmap"] },
  { icon: FileText, title: "Architecture Design", desc: "Landing zone, networks, security and cost model.", deliverables: ["HLD", "LLD", "Cost Model"] },
  { icon: Server, title: "Infrastructure Setup", desc: "Provision environments with IaC and guardrails.", deliverables: ["Landing Zone", "IaC Modules", "Guardrails"] },
  { icon: GitBranch, title: "Automation", desc: "CI/CD pipelines, IaC and release automation.", deliverables: ["Pipelines", "IaC", "Release Plan"] },
  { icon: Rocket, title: "Deployment", desc: "Zero-downtime rollouts with blue/green & canary.", deliverables: ["Blue/Green", "Canary", "Rollbacks"] },
  { icon: Activity, title: "Monitoring", desc: "Metrics, logs, traces and alerting.", deliverables: ["Dashboards", "Alerts", "SLOs"] },
  { icon: Gauge, title: "Optimization", desc: "Cost, performance and reliability tuning.", deliverables: ["Cost Report", "Perf Tuning", "SRE Actions"] },
  { icon: Wrench, title: "Support", desc: "24/7 SRE, on-call and continuous improvement.", deliverables: ["SLA Support", "On-Call", "Continuous Ops"] },
];

const techStack = [
  {
    label: "Cloud Platforms",
    items: [
      { name: "AWS", use: "Full-service enterprise cloud" },
      { name: "Azure", use: "Enterprise & Microsoft ecosystem" },
      { name: "Google Cloud", use: "Data, AI and global infra" },
    ],
  },
  {
    label: "Containers",
    items: [
      { name: "Docker", use: "Portable container runtime" },
      { name: "Kubernetes", use: "Container orchestration at scale" },
    ],
  },
  {
    label: "Infrastructure as Code",
    items: [
      { name: "Terraform", use: "Multi-cloud IaC" },
      { name: "CloudFormation", use: "AWS-native IaC" },
    ],
  },
  {
    label: "CI/CD",
    items: [
      { name: "Jenkins", use: "Enterprise CI/CD automation" },
      { name: "GitHub Actions", use: "Native GitHub pipelines" },
      { name: "GitLab CI", use: "Integrated DevOps platform" },
    ],
  },
  {
    label: "Monitoring",
    items: [
      { name: "Datadog", use: "Unified observability platform" },
      { name: "Grafana", use: "Metrics visualization" },
      { name: "Prometheus", use: "Time-series metrics" },
      { name: "ELK Stack", use: "Logs, search and analytics" },
    ],
  },
];

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Secure, compliant cloud environments for clinical workloads.",
    details: ["Secure Cloud Infrastructure", "HIPAA-ready Environments", "Disaster Recovery"],
  },
  {
    icon: Landmark,
    title: "Finance",
    desc: "Compliance-ready hosting and high-availability platforms.",
    details: ["Compliance Infrastructure", "Secure Cloud Hosting", "High Availability"],
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    desc: "Scalable e-commerce hosting engineered for peak demand.",
    details: ["Scalable E-Commerce Hosting", "Auto Scaling", "Performance Optimization"],
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Reliable operational infrastructure for real-time systems.",
    details: ["Operational Infrastructure", "Fleet Systems", "High Availability"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Cloud hosting for learning platforms and student portals.",
    details: ["Learning Platforms", "Student Portals", "Cloud Hosting"],
  },
  {
    icon: Rocket,
    title: "Startups",
    desc: "Cloud-native foundations engineered for rapid growth.",
    details: ["Cloud-Native Architecture", "Scalable Infrastructure", "Rapid Deployment"],
  },
];

const projects = [
  {
    name: "Multi-Region SaaS Platform",
    industry: "SaaS",
    challenge: "Legacy single-region hosting couldn't handle global traffic.",
    solution: "Kubernetes multi-region deployment with global load balancing.",
    stack: ["AWS", "Kubernetes", "Terraform", "Datadog"],
    outcome: ["99.99% uptime", "3x traffic capacity", "-40% latency"],
  },
  {
    name: "Enterprise Cloud Migration",
    industry: "Finance",
    challenge: "On-prem infrastructure blocking growth and compliance.",
    solution: "Phased migration to Azure with zero downtime and compliance guardrails.",
    stack: ["Azure", "Terraform", "GitHub Actions", "ELK"],
    outcome: ["Zero downtime", "SOC2 ready", "-35% infra cost"],
  },
  {
    name: "Retail Auto-Scaling",
    industry: "Retail",
    challenge: "Peak-season traffic surges caused outages and revenue loss.",
    solution: "Auto-scaling clusters with CDN and blue/green deployments.",
    stack: ["AWS", "Kubernetes", "Grafana", "Prometheus"],
    outcome: ["10x peak capacity", "+55% conversion", "Zero outages"],
  },
  {
    name: "DevOps Transformation",
    industry: "Logistics",
    challenge: "Manual releases slowed delivery to production.",
    solution: "CI/CD pipelines, IaC and observability across environments.",
    stack: ["GitLab CI", "Terraform", "Docker", "Datadog"],
    outcome: ["10x faster releases", "-80% deploy errors", "Full visibility"],
  },
  {
    name: "HIPAA Cloud Foundation",
    industry: "Healthcare",
    challenge: "Needed a compliant cloud baseline for clinical apps.",
    solution: "Landing zone with encryption, IAM, logging and DR.",
    stack: ["AWS", "Terraform", "CloudWatch", "KMS"],
    outcome: ["HIPAA-ready", "Audit-ready logs", "Rapid onboarding"],
  },
];

const metrics = [
  { label: "Cloud Environments Managed", value: 100, suffix: "+" },
  { label: "Deployments Automated", value: 1000, suffix: "+" },
  { label: "Infrastructure Uptime", value: 99.9, suffix: "%" },
  { label: "Performance Improvement", value: 80, suffix: "%" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

const faqs = [
  {
    q: "AWS or Azure — which is right for us?",
    a: "It depends on your workload, ecosystem and compliance needs. We help you pick the right platform (AWS, Azure or GCP) — or a multi-cloud strategy — based on your business goals, not vendor preference.",
  },
  {
    q: "How much does cloud migration cost?",
    a: "Migration cost depends on workload complexity, data volume and target architecture. We start with a fixed-price assessment that outlines effort, timeline and expected TCO savings before committing to a program.",
  },
  {
    q: "Can you manage our existing infrastructure?",
    a: "Yes. We take over existing AWS, Azure or GCP environments, harden security, add observability, introduce IaC/CI-CD and provide 24/7 SRE support.",
  },
  {
    q: "How do you ensure security and compliance?",
    a: "Every environment ships with least-privilege IAM, encryption at rest and in transit, network segmentation, secrets management, audit logging and baselines for SOC2, HIPAA or ISO where applicable.",
  },
  {
    q: "Do you provide ongoing monitoring and support?",
    a: "Yes. We offer 24/7 monitoring, on-call SRE, incident response, cost optimization and continuous improvement — with clear SLOs and SLAs.",
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
    const isDecimal = !Number.isInteger(value);
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = value * eased;
      setN(isDecimal ? Math.round(cur * 10) / 10 : Math.round(cur));
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

function CloudDevOpsPage() {
  return (
    <>
      <CloudHero />
      <SolutionsOverview />
      <SolutionsDeepDive />
      <ProcessSection />
      <MonitoringDashboardSection />
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

function CloudHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 opacity-70"><ParticleNetwork density={45} /></div>
      <div className="absolute inset-0 ai-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
          <div className="min-w-0">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary animate-fade-up">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Cloud & DevOps
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight animate-fade-up sm:text-5xl lg:text-6xl xl:text-7xl">
              Cloud Infrastructure Built for{" "}
              <span className="text-gradient">Performance, Reliability & Scale</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground animate-fade-up sm:text-lg">
              Accelerate innovation with secure cloud environments, automated deployments, scalable infrastructure and modern DevOps practices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
              >
                Schedule Cloud Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                Request Infrastructure Assessment
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                Start Your Cloud Project
              </Link>
            </div>
          </div>
          <div className="pointer-events-none hidden justify-self-end lg:block">
            <CloudEcosystem />
          </div>
        </div>
      </div>
    </section>
  );
}

function CloudEcosystem() {
  const nodes = [
    { Icon: Cloud, x: 50, y: 12, label: "Cloud" },
    { Icon: Server, x: 15, y: 40, label: "App" },
    { Icon: Database, x: 85, y: 40, label: "DB" },
    { Icon: GitBranch, x: 22, y: 78, label: "CI/CD" },
    { Icon: Activity, x: 78, y: 78, label: "Monitor" },
    { Icon: ShieldCheck, x: 50, y: 55, label: "Secure" },
  ];
  return (
    <div className="relative h-[440px] w-[460px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="cg" x1="0" x2="1">
            <stop offset="0" stopColor="#15abe6" />
            <stop offset="1" stopColor="#7bd4f5" />
          </linearGradient>
        </defs>
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => (
            <line
              key={`${i}-${j}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#cg)"
              strokeWidth="0.25"
              opacity="0.35"
            />
          )),
        )}
        <circle cx="50" cy="55" r="20" fill="none" stroke="#15abe6" strokeWidth="0.3" opacity="0.4" className="animate-pulse-glow" />
        <circle cx="50" cy="55" r="30" fill="none" stroke="#15abe6" strokeWidth="0.2" opacity="0.25" />
      </svg>
      {nodes.map(({ Icon, x, y, label }, i) => (
        <div
          key={label}
          className="absolute -translate-x-1/2 -translate-y-1/2 animate-float-slow"
          style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.5}s` }}
        >
          <div className="glass-strong flex h-14 w-14 items-center justify-center rounded-2xl shadow-glow">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="mt-1 text-center text-[10px] uppercase tracking-widest text-primary/80">{label}</div>
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
        eyebrow="Cloud & DevOps Solutions"
        title={
          <>
            End-to-end <span className="text-gradient">cloud & delivery</span>
          </>
        }
        description="Architect, automate, monitor and scale — across every layer of your infrastructure."
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

function SolutionBlock({ solution, reverse }: { solution: Solution; reverse: boolean }) {
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
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Services</div>
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
          Interactive Workflow
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
      </div>
    </div>
  );
}

/* ---------------- Process ---------------- */

function ProcessSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="DevOps Process"
        title={
          <>
            A proven <span className="text-gradient">cloud & DevOps</span> playbook
          </>
        }
        description="From assessment to long-term operations — every step engineered for reliability."
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
    </section>
  );
}

/* ---------------- Monitoring Dashboard ---------------- */

function MonitoringDashboardSection() {
  const bars = [45, 62, 51, 78, 64, 88, 72, 90];
  return (
    <section className="relative border-y border-white/5 bg-black/20">
      <div className="absolute inset-0 ai-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Observability"
          title={
            <>
              Real-time <span className="text-gradient">infrastructure visibility</span>
            </>
          }
          description="Unified metrics, logs and traces across every environment and service."
        />
        <div className="glass-strong relative overflow-hidden rounded-3xl p-6 md:p-8">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { label: "CPU Usage", value: "42%", icon: Cpu },
              { label: "Memory", value: "6.8 GB", icon: Boxes },
              { label: "Response Time", value: "128 ms", icon: Zap },
              { label: "Uptime", value: "99.99%", icon: ShieldCheck },
            ].map((k, i) => {
              const Icon = k.icon;
              return (
                <div
                  key={k.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 70}ms` }}
                >
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <Icon className="h-3.5 w-3.5 text-primary" /> {k.label}
                  </div>
                  <div className="mt-2 font-display text-2xl font-bold text-gradient">{k.value}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                  <BarChart3 className="h-3.5 w-3.5" /> Traffic (last 24h)
                </div>
                <span className="text-[10px] text-muted-foreground">Live</span>
              </div>
              <div className="mt-4 flex h-32 items-end gap-1.5">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary"
                    style={{ height: `${h}%`, animation: "fade-up 0.8s ease-out both", animationDelay: `${i * 80}ms` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Activity className="h-3.5 w-3.5" /> Alerts
              </div>
              <ul className="mt-3 space-y-2">
                {[
                  { s: "ok", t: "All services healthy" },
                  { s: "warn", t: "Cache hit rate below threshold" },
                  { s: "ok", t: "Nightly backup completed" },
                  { s: "ok", t: "Deployment #2143 successful" },
                ].map((a, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        a.s === "ok" ? "bg-primary" : "bg-yellow-400"
                      } animate-pulse`}
                    />
                    <span className="text-foreground/80">{a.t}</span>
                  </li>
                ))}
              </ul>
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
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Technology Stack"
        title={
          <>
            A modern, <span className="text-gradient">battle-tested</span> cloud stack
          </>
        }
        description="Best-in-class platforms and DevOps tools across every layer."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group, gi) => (
          <div
            key={group.label}
            className="glass-strong rounded-2xl p-5"
            style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${gi * 80}ms` }}
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <Network className="h-3.5 w-3.5" /> {group.label}
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
    </section>
  );
}

/* ---------------- Industries ---------------- */

function IndustriesSection() {
  return (
    <section className="relative border-y border-white/5 bg-black/20">
      <div className="absolute inset-0 ai-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Industries We Support"
          title={
            <>
              Cloud solutions for <span className="text-gradient">every industry</span>
            </>
          }
          description="Domain-aware infrastructure engineered to real-world requirements."
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
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */

function ProjectsSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Cloud Success Stories"
        title={
          <>
            Infrastructure that <span className="text-gradient">delivered results</span>
          </>
        }
        description="Selected cloud and DevOps programs we've architected and operated."
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
              <Cloud className="h-4 w-4 text-primary/70" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{p.name}</h3>

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
    </section>
  );
}

/* ---------------- Metrics ---------------- */

function MetricsSection() {
  return (
    <section className="relative border-y border-white/5 bg-black/20">
      <div className="absolute inset-0 ai-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Business Impact"
          title={
            <>
              Real numbers. <span className="text-gradient">Real results.</span>
            </>
          }
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
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
              Let's modernize
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
              Modernize Your Infrastructure with <span className="text-gradient">Cloud & DevOps</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              From cloud setup and CI/CD automation to monitoring and scaling, we help businesses build reliable, secure and high-performing infrastructure.
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
                Request Cloud Assessment
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                Start Your Cloud Project
              </Link>
            </div>
          </div>
          <div className="relative mx-auto hidden h-[280px] w-[280px] lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-strong flex h-24 w-24 items-center justify-center rounded-3xl shadow-glow">
                <Cloud className="h-10 w-10 text-primary" />
              </div>
            </div>
            {[
              { Icon: Server, x: 8, y: 20 },
              { Icon: Database, x: 82, y: 20 },
              { Icon: GitBranch, x: 5, y: 72 },
              { Icon: Activity, x: 82, y: 72 },
              { Icon: Lock, x: 45, y: 90 },
              { Icon: Layers, x: 45, y: 2 },
            ].map(({ Icon, x, y }, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 animate-float-slow"
                style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.4}s` }}
              >
                <div className="glass flex h-10 w-10 items-center justify-center rounded-xl">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
