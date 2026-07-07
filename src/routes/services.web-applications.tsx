import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Globe,
  Layers,
  Code2,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Tablet,
  ShoppingCart,
  Rocket,
  Sparkles,
  ShieldCheck,
  Cpu,
  Gauge,
  Search,
  Lock,
  KeyRound,
  Server,
  HardDrive,
  Users,
  Briefcase,
  Building2,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  Home,
  GraduationCap,
  Wrench,
  FileText,
  BarChart3,
  Zap,
  Workflow,
  CreditCard,
  Bell,
} from "lucide-react";

import { SectionHeading } from "../components/SectionHeading";
import { ParticleNetwork } from "../components/ParticleNetwork";

export const Route = createFileRoute("/services/web-applications")({
  head: () => ({
    meta: [
      {
        title:
          "Web Applications & Websites — High-Performance Digital Experiences | ALStreamTech",
      },
      {
        name: "description",
        content:
          "Business websites, web applications, landing pages, e-commerce and customer portals built for performance, SEO, security and scale.",
      },
      { property: "og:title", content: "Web Applications & Websites | ALStreamTech" },
      {
        property: "og:description",
        content:
          "Modern websites and web apps engineered for growth — from business sites and portals to SaaS platforms and e-commerce.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WebApplicationsPage,
});

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const solutions = [
  {
    id: "business-websites",
    icon: Globe,
    title: "Business Websites",
    desc: "Professional websites that establish credibility, showcase services and generate leads.",
    features: [
      "Corporate Websites",
      "Company Profile Websites",
      "Service-Based Business Websites",
      "Professional Portfolio Websites",
      "Multi-Page Websites",
      "SEO-Optimized Structure",
    ],
    elements: [
      "Modern UI/UX",
      "Mobile Responsiveness",
      "Fast Loading Speed",
      "Contact Forms",
      "Analytics Integration",
      "Conversion-Focused Design",
    ],
    benefits: [
      "Strong Online Presence",
      "Increased Credibility",
      "More Leads & Inquiries",
      "Better Customer Engagement",
    ],
  },
  {
    id: "web-apps",
    icon: Layers,
    title: "Web Applications",
    desc: "Custom web-based software designed around business workflows and operations.",
    features: [
      "SaaS Platforms",
      "Internal Business Systems",
      "Booking Systems",
      "Management Dashboards",
      "Workflow Applications",
      "Custom Business Tools",
    ],
    steps: [
      "User Login",
      "Dashboard Access",
      "Business Operations",
      "Reports & Analytics",
      "Automation",
    ],
    benefits: [
      "Streamlined Operations",
      "Improved Productivity",
      "Centralized Business Management",
    ],
  },
  {
    id: "landing-pages",
    icon: Rocket,
    title: "Landing Pages",
    desc: "High-converting landing pages focused on marketing campaigns, lead generation and sales.",
    features: [
      "Product Launch Pages",
      "Marketing Campaign Pages",
      "Lead Generation Pages",
      "Event Registration Pages",
      "Service Promotion Pages",
      "Conversion-Focused Layouts",
    ],
    elements: [
      "Clear CTAs",
      "Lead Capture Forms",
      "Testimonials",
      "Trust Indicators",
      "Performance Optimization",
    ],
    benefits: [
      "Higher Conversion Rates",
      "Better Marketing Performance",
      "Increased Lead Generation",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    desc: "Online stores designed to maximize sales, customer experience and operational efficiency.",
    features: [
      "Product Catalogs",
      "Shopping Cart",
      "Secure Checkout",
      "Payment Integrations",
      "Order Management",
      "Inventory Management",
    ],
    steps: [
      "Product Discovery",
      "Add to Cart",
      "Secure Checkout",
      "Order Processing",
      "Customer Notifications",
    ],
    integrations: ["Stripe", "PayPal", "Shopify", "WooCommerce", "Shipping Providers"],
    benefits: [
      "Increased Online Sales",
      "Better Customer Experience",
      "Scalable Online Business",
    ],
  },
  {
    id: "portals",
    icon: KeyRound,
    title: "Customer & Business Portals",
    desc: "Secure portals giving customers, employees, vendors and partners personalized access.",
    features: [
      "Customer Portals",
      "Employee Portals",
      "Vendor Portals",
      "Partner Portals",
      "Membership Platforms",
      "Secure Document Access",
    ],
    steps: [
      "User Login",
      "Secure Authentication",
      "Personal Dashboard",
      "Services & Resources",
      "Support & Communication",
    ],
    benefits: [
      "Improved Customer Experience",
      "Reduced Support Workload",
      "Secure Information Access",
    ],
  },
] as const;

const processSteps = [
  {
    icon: Sparkles,
    title: "Discovery",
    desc: "Goals, audience, competitors and success metrics.",
    deliverables: ["Requirements", "KPIs", "Audience Insights"],
  },
  {
    icon: FileText,
    title: "Planning",
    desc: "Sitemap, content strategy, scope and roadmap.",
    deliverables: ["Sitemap", "Content Plan", "Roadmap"],
  },
  {
    icon: Sparkles,
    title: "UI/UX Design",
    desc: "Wireframes, design system and prototypes.",
    deliverables: ["Wireframes", "Design System", "Prototypes"],
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Frontend, backend, integrations and CMS.",
    deliverables: ["Frontend", "APIs", "CMS Integration"],
  },
  {
    icon: ShieldCheck,
    title: "Testing",
    desc: "QA, accessibility, cross-device and security testing.",
    deliverables: ["QA Report", "Accessibility Audit", "Security Review"],
  },
  {
    icon: Rocket,
    title: "Deployment",
    desc: "Cloud hosting, CDN, DNS and go-live.",
    deliverables: ["Production Release", "CDN Setup", "Monitoring"],
  },
  {
    icon: Gauge,
    title: "Optimization",
    desc: "Performance, Core Web Vitals, SEO and conversion tuning.",
    deliverables: ["Perf Report", "SEO Audit", "CRO Improvements"],
  },
  {
    icon: Wrench,
    title: "Support",
    desc: "Maintenance, enhancements and evolution.",
    deliverables: ["SLA Support", "Enhancements", "Roadmap Updates"],
  },
];

const uxHighlights = [
  { icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect across every device and screen size." },
  { icon: Sparkles, title: "Modern User Interfaces", desc: "Design systems, motion and micro-interactions." },
  { icon: ShieldCheck, title: "Accessibility Standards", desc: "WCAG-compliant, semantic and inclusive UX." },
  { icon: Smartphone, title: "Mobile-First Development", desc: "Optimized for mobile users from the ground up." },
  { icon: Workflow, title: "User Journey Optimization", desc: "Flows engineered for engagement and conversion." },
  { icon: Gauge, title: "Performance-Focused Design", desc: "Fast, lightweight, Core Web Vitals ready." },
];

const techStack = [
  {
    label: "Frontend",
    items: [
      { name: "React", use: "Component-driven UIs" },
      { name: "Next.js", use: "SSR & SEO-friendly apps" },
      { name: "Angular", use: "Enterprise web apps" },
      { name: "Vue.js", use: "Lightweight interactive UIs" },
      { name: "HTML5", use: "Semantic structure" },
      { name: "CSS3", use: "Modern styling" },
      { name: "Tailwind CSS", use: "Utility-first design systems" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", use: "APIs & real-time services" },
      { name: "Python", use: "APIs & AI integrations" },
      { name: ".NET", use: "Enterprise backends" },
      { name: "PHP", use: "CMS & e-commerce" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", use: "Relational data at scale" },
      { name: "MySQL", use: "Reliable relational storage" },
      { name: "MongoDB", use: "Flexible document storage" },
    ],
  },
  {
    label: "Cloud & Hosting",
    items: [
      { name: "AWS", use: "Scalable cloud hosting" },
      { name: "Azure", use: "Enterprise cloud" },
      { name: "Google Cloud", use: "Global infrastructure" },
      { name: "Vercel", use: "Edge-optimized frontends" },
    ],
  },
];

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Patient portals, booking sites and clinic web apps.",
    details: ["Patient Portals", "Appointment Booking", "Clinic Websites"],
  },
  {
    icon: Landmark,
    title: "Finance",
    desc: "Secure client portals, dashboards and marketing sites.",
    details: ["Client Portals", "Financial Dashboards", "Corporate Sites"],
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    desc: "E-commerce stores, catalogs and loyalty platforms.",
    details: ["E-Commerce Stores", "Product Catalogs", "Loyalty Portals"],
  },
  {
    icon: Home,
    title: "Real Estate",
    desc: "Listing sites, agent portals and lead-gen platforms.",
    details: ["Property Listings", "Agent Portals", "Lead-Gen Sites"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Learning platforms, student portals and school sites.",
    details: ["LMS Platforms", "Student Portals", "Institution Websites"],
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Tracking portals, dashboards and operations tools.",
    details: ["Tracking Portals", "Ops Dashboards", "Vendor Portals"],
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    desc: "Corporate sites, client portals and booking apps.",
    details: ["Corporate Websites", "Client Portals", "Booking Systems"],
  },
];

const projects = [
  {
    name: "Enterprise SaaS Platform",
    industry: "SaaS",
    features: ["Multi-tenant workspace", "Billing & subscriptions", "Analytics dashboards"],
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    results: ["3x active users", "40% faster load", "Global rollout"],
    device: "desktop" as const,
  },
  {
    name: "Modern E-Commerce Store",
    industry: "Retail",
    features: ["Custom checkout", "Loyalty program", "Inventory sync"],
    stack: ["Next.js", "Stripe", "Shopify", "Vercel"],
    results: ["+55% conversion", "99+ Lighthouse", "Scaled Black Friday"],
    device: "mobile" as const,
  },
  {
    name: "Corporate Website Redesign",
    industry: "Professional Services",
    features: ["CMS-driven pages", "Multi-language", "Lead capture"],
    stack: ["React", "Tailwind CSS", "Node.js", "Azure"],
    results: ["+70% inbound leads", "Top-3 SEO", "Higher engagement"],
    device: "desktop" as const,
  },
  {
    name: "Customer Portal",
    industry: "Finance",
    features: ["Secure auth", "Document vault", "Support workflows"],
    stack: ["Angular", ".NET", "SQL Server", "Azure"],
    results: ["-40% support load", "Higher CSAT", "Bank-grade security"],
    device: "tablet" as const,
  },
  {
    name: "High-Converting Landing Page",
    industry: "Marketing",
    features: ["A/B testing", "Lead capture", "Analytics"],
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    results: ["+180% conversions", "Sub-second loads", "Optimized funnels"],
    device: "mobile" as const,
  },
  {
    name: "Booking Web App",
    industry: "Healthcare",
    features: ["Realtime slots", "Notifications", "Admin dashboard"],
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    results: ["-60% no-shows", "24/7 booking", "Streamlined ops"],
    device: "tablet" as const,
  },
];

const perfItems = [
  { icon: Gauge, title: "Fast Loading Speeds", desc: "Optimized delivery, edge caching and lean bundles." },
  { icon: Search, title: "SEO Optimization", desc: "Semantic markup, structured data and technical SEO." },
  { icon: Zap, title: "Core Web Vitals Compliance", desc: "Great LCP, INP and CLS out of the box." },
  { icon: Sparkles, title: "Image Optimization", desc: "Modern formats, responsive images and lazy loading." },
  { icon: Cloud, title: "Caching Strategies", desc: "CDN, edge caching and smart cache invalidation." },
];

const secItems = [
  { icon: Lock, title: "SSL Certificates", desc: "HTTPS everywhere with modern TLS." },
  { icon: KeyRound, title: "Secure Authentication", desc: "SSO, MFA and hardened auth flows." },
  { icon: ShieldCheck, title: "Data Protection", desc: "Encryption at rest and in transit." },
  { icon: Bell, title: "Security Monitoring", desc: "Continuous monitoring and alerting." },
  { icon: HardDrive, title: "Backup Solutions", desc: "Automated backups and disaster recovery." },
];

const metrics = [
  { label: "Websites Delivered", value: 100, suffix: "+" },
  { label: "Web Applications Built", value: 50, suffix: "+" },
  { label: "Average Performance Score", value: 95, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Industries Served", value: 20, suffix: "+" },
];

const faqs = [
  {
    q: "How long does a website project take?",
    a: "Landing pages typically ship in 2–3 weeks. Business websites take 4–8 weeks. Complex web apps and portals are delivered in phases over 2–6 months.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. We modernize existing sites with new UI/UX, improved performance, better SEO and updated tech, while preserving your brand and content equity.",
  },
  {
    q: "Do you provide hosting and maintenance?",
    a: "Yes. We offer managed hosting on AWS, Azure, Google Cloud or Vercel plus ongoing maintenance, monitoring and support plans.",
  },
  {
    q: "Can AI features be integrated into websites?",
    a: "Absolutely. We integrate AI chatbots, personalization, search, recommendations, content generation and intelligent automation.",
  },
  {
    q: "Can websites connect to CRM systems?",
    a: "Yes. We integrate with Salesforce, HubSpot, Zoho and custom CRMs — plus payment, marketing and analytics tools via APIs.",
  },
  {
    q: "Are websites mobile-friendly and SEO optimized?",
    a: "Every site we ship is mobile-first, fully responsive, accessibility-aware and built to meet modern SEO and Core Web Vitals standards.",
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

function WebApplicationsPage() {
  return (
    <>
      <WebHero />
      <SolutionsOverview />
      <SolutionsDeepDive />
      <ProcessSection />
      <UXSection />
      <TechStackSection />
      <IndustriesSection />
      <ProjectsSection />
      <PerformanceSecuritySection />
      <MetricsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

/* ---------------- Hero ---------------- */

function WebHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 opacity-70"><ParticleNetwork density={45} /></div>
      <div className="absolute inset-0 ai-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
          <div className="min-w-0">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary animate-fade-up">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Web Applications & Websites
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight animate-fade-up sm:text-5xl lg:text-6xl xl:text-7xl">
              Modern Websites & Web Apps That{" "}
              <span className="text-gradient">Drive Business Growth</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground animate-fade-up sm:text-lg">
              From business websites and landing pages to enterprise web applications and customer portals, we create high-performance digital experiences designed to engage users and deliver results.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
              >
                Request a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                Discuss Your Website Project
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                Get a Custom Quote
              </Link>
            </div>
          </div>
          <div className="pointer-events-none hidden justify-self-end lg:block">
            <ResponsiveShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}

function ResponsiveShowcase() {
  return (
    <div className="relative h-[440px] w-[520px]">
      {/* Desktop mockup */}
      <div
        className="glass-strong absolute left-0 top-4 w-[380px] rounded-2xl border border-white/10 p-3 shadow-glow animate-float-slow"
        style={{ animationDelay: "0s" }}
      >
        <div className="flex items-center gap-1.5 pb-2">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-green-400/70" />
          <span className="ml-2 flex-1 rounded bg-white/5 px-2 py-0.5 text-[9px] text-muted-foreground">
            https://yourbusiness.com
          </span>
        </div>
        <div className="space-y-2 rounded-lg bg-gradient-to-b from-primary/10 to-transparent p-3">
          <div className="h-3 w-1/2 rounded bg-primary/60 animate-pulse" />
          <div className="h-2 w-3/4 rounded bg-white/20" />
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="h-14 rounded bg-white/10" />
            <div className="h-14 rounded bg-primary/30 animate-pulse" />
            <div className="h-14 rounded bg-white/10" />
          </div>
          <div className="h-8 rounded bg-white/5" />
        </div>
      </div>

      {/* Tablet mockup */}
      <div
        className="glass-strong absolute bottom-6 left-24 w-[190px] rounded-xl border border-white/10 p-2 shadow-glow animate-float-slow"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="space-y-1.5 rounded-md bg-gradient-to-b from-primary/10 to-transparent p-2">
          <div className="h-2 w-2/3 rounded bg-primary/60 animate-pulse" />
          <div className="h-1.5 w-full rounded bg-white/20" />
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            <div className="h-8 rounded bg-white/10" />
            <div className="h-8 rounded bg-primary/30" />
          </div>
        </div>
      </div>

      {/* Mobile mockup */}
      <div
        className="glass-strong absolute bottom-2 right-4 h-[220px] w-[110px] rounded-2xl border border-white/10 p-1.5 shadow-glow animate-float-slow"
        style={{ animationDelay: "1.4s" }}
      >
        <div className="h-full w-full space-y-1.5 rounded-xl bg-gradient-to-b from-primary/15 to-transparent p-1.5">
          <div className="h-2 w-3/4 rounded bg-primary/60 animate-pulse" />
          <div className="h-1.5 w-1/2 rounded bg-white/20" />
          <div className="h-8 rounded bg-white/10" />
          <div className="h-8 rounded bg-primary/30 animate-pulse" />
          <div className="h-8 rounded bg-white/10" />
        </div>
      </div>

      {/* Floating device badges */}
      <div
        className="absolute right-0 top-2 flex items-center gap-1 rounded-full glass px-2 py-1 text-[10px] text-primary animate-float-slow"
        style={{ animationDelay: "0.4s" }}
      >
        <Monitor className="h-3 w-3" /> Desktop
      </div>
      <div
        className="absolute left-0 bottom-24 flex items-center gap-1 rounded-full glass px-2 py-1 text-[10px] text-primary animate-float-slow"
        style={{ animationDelay: "1s" }}
      >
        <Tablet className="h-3 w-3" /> Tablet
      </div>
      <div
        className="absolute right-32 top-56 flex items-center gap-1 rounded-full glass px-2 py-1 text-[10px] text-primary animate-float-slow"
        style={{ animationDelay: "1.6s" }}
      >
        <Smartphone className="h-3 w-3" /> Mobile
      </div>
    </div>
  );
}

/* ---------------- Solutions Overview ---------------- */

function SolutionsOverview() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Web Development Solutions"
        title={
          <>
            End-to-end <span className="text-gradient">web experiences</span>
          </>
        }
        description="From marketing sites and landing pages to complex web apps, e-commerce and secure portals."
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
  const steps = "steps" in solution ? solution.steps : undefined;
  const elements = "elements" in solution ? solution.elements : undefined;
  const integrations = "integrations" in solution ? solution.integrations : undefined;

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
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Features
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {solution.features.map((f) => (
              <div key={f} className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {f}
              </div>
            ))}
          </div>
        </div>

        {elements && (
          <div className="mt-6">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Key Elements
            </div>
            <div className="flex flex-wrap gap-2">
              {elements.map((e) => (
                <span key={e} className="glass rounded-full px-3 py-1 text-[11px] font-medium text-primary">
                  {e}
                </span>
              ))}
            </div>
          </div>
        )}

        {integrations && (
          <div className="mt-6">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Integrations
            </div>
            <div className="flex flex-wrap gap-2">
              {integrations.map((it) => (
                <span key={it} className="glass rounded-full px-3 py-1 text-[11px] font-medium text-primary">
                  {it}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Benefits
          </div>
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
        {solution.id === "business-websites" ? (
          <BusinessSitePreview />
        ) : solution.id === "landing-pages" ? (
          <LandingPagePreview />
        ) : solution.id === "ecommerce" ? (
          <EcommercePreview />
        ) : solution.id === "portals" ? (
          <PortalPreview />
        ) : steps ? (
          <div>
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Interactive Workflow
            </div>
            <ol className="space-y-3">
              {steps.map((step, i) => (
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
                  {i < steps.length - 1 && <ArrowRight className="ml-auto h-4 w-4 text-primary/60" />}
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-3">
      <div className="flex items-center gap-1.5 pb-2">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-green-400/70" />
        <span className="ml-2 flex-1 rounded bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground">
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

function BusinessSitePreview() {
  return (
    <BrowserFrame url="https://yourbusiness.com">
      <div className="space-y-3 rounded-lg bg-gradient-to-b from-primary/10 to-transparent p-3">
        <div className="flex items-center justify-between">
          <div className="h-3 w-24 rounded bg-primary/60 animate-pulse" />
          <div className="flex gap-1.5">
            <div className="h-2 w-8 rounded bg-white/20" />
            <div className="h-2 w-8 rounded bg-white/20" />
            <div className="h-2 w-8 rounded bg-white/20" />
          </div>
        </div>
        <div className="h-4 w-3/4 rounded bg-white/30" />
        <div className="h-2 w-full rounded bg-white/10" />
        <div className="h-2 w-5/6 rounded bg-white/10" />
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="h-16 rounded bg-white/10" />
          <div className="h-16 rounded bg-primary/30 animate-pulse" />
          <div className="h-16 rounded bg-white/10" />
        </div>
        <div className="h-8 w-32 rounded bg-gradient-brand shadow-glow" />
      </div>
    </BrowserFrame>
  );
}

function LandingPagePreview() {
  return (
    <BrowserFrame url="https://campaign.yourbusiness.com">
      <div className="space-y-3 rounded-lg bg-gradient-to-b from-primary/10 to-transparent p-3">
        <div className="mx-auto h-3 w-2/3 rounded bg-primary/60 animate-pulse" />
        <div className="mx-auto h-2 w-1/2 rounded bg-white/20" />
        <div className="grid grid-cols-2 gap-2 pt-2">
          <div className="space-y-1.5">
            <div className="h-2 w-full rounded bg-white/20" />
            <div className="h-2 w-3/4 rounded bg-white/10" />
            <div className="h-8 w-28 rounded bg-gradient-brand shadow-glow" />
          </div>
          <div className="space-y-1.5 rounded-lg border border-white/10 bg-white/5 p-2">
            <div className="h-2 w-full rounded bg-white/20" />
            <div className="h-6 rounded bg-white/10" />
            <div className="h-6 rounded bg-white/10" />
            <div className="h-6 rounded bg-primary/40 animate-pulse" />
          </div>
        </div>
        <div className="flex items-center justify-around pt-1 text-[9px] text-primary/80">
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="h-3 w-3" /> Trusted
          </span>
          <span className="inline-flex items-center gap-1">
            <Sparkles className="h-3 w-3" /> Rated 4.9
          </span>
          <span className="inline-flex items-center gap-1">
            <Users className="h-3 w-3" /> 10k+ users
          </span>
        </div>
      </div>
    </BrowserFrame>
  );
}

function EcommercePreview() {
  return (
    <BrowserFrame url="https://shop.yourbusiness.com">
      <div className="space-y-3 rounded-lg bg-gradient-to-b from-primary/10 to-transparent p-3">
        <div className="flex items-center justify-between">
          <div className="h-3 w-20 rounded bg-primary/60" />
          <ShoppingCart className="h-4 w-4 text-primary" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-1 rounded-lg border border-white/10 bg-white/5 p-1.5">
              <div className="h-12 rounded bg-white/10" />
              <div className="h-1.5 w-3/4 rounded bg-white/30" />
              <div className="h-1.5 w-1/2 rounded bg-primary/60" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-2">
          <span className="text-[10px] text-muted-foreground">Subtotal</span>
          <span className="text-[10px] font-semibold text-primary">$124.00</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[10px] text-primary/80">
            <CreditCard className="h-3 w-3" /> Stripe · PayPal
          </div>
          <div className="h-7 w-28 rounded bg-gradient-brand shadow-glow" />
        </div>
      </div>
    </BrowserFrame>
  );
}

function PortalPreview() {
  return (
    <BrowserFrame url="https://portal.yourbusiness.com">
      <div className="space-y-3 rounded-lg bg-gradient-to-b from-primary/10 to-transparent p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-brand" />
            <div className="h-2 w-16 rounded bg-white/30" />
          </div>
          <Lock className="h-4 w-4 text-primary" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 space-y-1.5 rounded-lg border border-white/10 bg-white/5 p-2">
            <div className="h-2 w-full rounded bg-white/20" />
            <div className="h-2 w-3/4 rounded bg-white/10" />
            <div className="h-2 w-2/3 rounded bg-white/10" />
            <div className="h-2 w-3/4 rounded bg-primary/50" />
          </div>
          <div className="col-span-2 space-y-1.5 rounded-lg border border-white/10 bg-white/5 p-2">
            <div className="h-2 w-1/2 rounded bg-white/30" />
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-10 rounded bg-white/10" />
              <div className="h-10 rounded bg-primary/30 animate-pulse" />
            </div>
            <div className="h-8 rounded bg-white/10" />
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ---------------- Process ---------------- */

function ProcessSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Web Development Process"
        title={
          <>
            From concept to <span className="text-gradient">launch & beyond</span>
          </>
        }
        description="A structured process that delivers polished, high-performance websites — on time and on brand."
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
                <div className="grid transition-all duration-500" style={{ gridTemplateRows: active ? "1fr" : "0fr" }}>
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

/* ---------------- UX Section ---------------- */

function UXSection() {
  return (
    <section className="relative border-y border-white/5 bg-black/20">
      <div className="absolute inset-0 ai-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Design & User Experience"
          title={
            <>
              UX built for <span className="text-gradient">engagement & conversion</span>
            </>
          }
          description="Modern, accessible, mobile-first design that feels premium on every device."
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            {uxHighlights.map((u, i) => {
              const Icon = u.icon;
              return (
                <div
                  key={u.title}
                  className="glass-strong group relative overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1"
                  style={{ animation: "fade-up 0.7s ease-out both", animationDelay: `${i * 70}ms` }}
                >
                  <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition duration-500 group-hover:bg-primary/40" />
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:rotate-6">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold">{u.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{u.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="glass-strong relative overflow-hidden rounded-3xl p-6">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Before → After
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Before</div>
                <div className="rounded-xl border border-white/10 bg-black/30 p-3 opacity-70 grayscale">
                  <div className="space-y-1.5">
                    <div className="h-2 w-1/2 rounded bg-white/20" />
                    <div className="h-2 w-3/4 rounded bg-white/10" />
                    <div className="h-16 rounded bg-white/10" />
                    <div className="h-6 w-24 rounded bg-white/20" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-[10px] uppercase tracking-widest text-primary">After</div>
                <div className="rounded-xl border border-white/10 bg-gradient-to-b from-primary/10 to-transparent p-3">
                  <div className="space-y-1.5">
                    <div className="h-2 w-2/3 rounded bg-primary/60 animate-pulse" />
                    <div className="h-2 w-full rounded bg-white/30" />
                    <div className="h-16 rounded bg-primary/20" />
                    <div className="h-6 w-28 rounded bg-gradient-brand shadow-glow" />
                  </div>
                </div>
              </div>
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
      <div className="absolute inset-0 opacity-40">
        <ParticleNetwork density={30} />
      </div>
      <div className="relative">
        <SectionHeading
          eyebrow="Technology Stack"
          title={
            <>
              Built on <span className="text-gradient">modern web technologies</span>
            </>
          }
          description="Best-in-class frameworks, backends, databases and cloud platforms."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                    key={t.name}
                    title={t.use}
                    className="glass group relative animate-float-slow rounded-full px-3 py-1.5 text-xs font-medium text-foreground/90 transition hover:scale-110 hover:bg-primary/10 hover:text-primary hover:shadow-glow"
                    style={{ animationDelay: `${k * 0.3}s` }}
                  >
                    {t.name}
                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-black/80 px-2 py-1 text-[10px] font-normal text-foreground/80 shadow-lg group-hover:block">
                      {t.use}
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
    <section className="relative border-y border-white/5 bg-black/20">
      <div className="absolute inset-0 ai-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Industries We Serve"
          title={
            <>
              Web solutions across <span className="text-gradient">every industry</span>
            </>
          }
          description="Purpose-built websites and web apps tailored to your sector."
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
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */

function ProjectsSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Project Showcase"
        title={
          <>
            Websites & web apps <span className="text-gradient">that perform</span>
          </>
        }
        description="Selected projects delivering measurable business outcomes."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={p.name}
            className="group relative overflow-hidden rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2"
            style={{ animation: "fade-up 0.7s ease-out both", animationDelay: `${i * 90}ms` }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-primary/20 opacity-40 transition group-hover:opacity-100" />
            <div className="glass-strong relative flex h-full flex-col rounded-3xl p-5">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl transition duration-500 group-hover:bg-primary/40" />

              <ProjectDevicePreview device={p.device} />

              <div className="mt-4 flex items-center justify-between">
                <span className="glass rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                  {p.industry}
                </span>
                {p.device === "desktop" ? (
                  <Monitor className="h-4 w-4 text-primary/60" />
                ) : p.device === "tablet" ? (
                  <Tablet className="h-4 w-4 text-primary/60" />
                ) : (
                  <Smartphone className="h-4 w-4 text-primary/60" />
                )}
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold">{p.name}</h3>

              <div className="mt-3">
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Features
                </div>
                <ul className="space-y-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-3">
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="glass rounded-full px-2.5 py-1 text-[11px] font-medium text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Results
                </div>
                <ul className="space-y-1">
                  {p.results.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-xs text-foreground/80">
                      <Sparkles className="h-3.5 w-3.5 text-primary" /> {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectDevicePreview({ device }: { device: "desktop" | "tablet" | "mobile" }) {
  if (device === "mobile") {
    return (
      <div className="mx-auto h-40 w-24 rounded-2xl border border-white/10 bg-black/40 p-1.5">
        <div className="h-full w-full space-y-1.5 rounded-xl bg-gradient-to-b from-primary/15 to-transparent p-1.5">
          <div className="h-2 w-3/4 rounded bg-primary/60 animate-pulse" />
          <div className="h-1.5 w-1/2 rounded bg-white/20" />
          <div className="h-6 rounded bg-white/10" />
          <div className="h-6 rounded bg-primary/30 animate-pulse" />
        </div>
      </div>
    );
  }
  if (device === "tablet") {
    return (
      <div className="mx-auto h-32 w-48 rounded-xl border border-white/10 bg-black/40 p-2">
        <div className="h-full w-full space-y-1.5 rounded-md bg-gradient-to-b from-primary/10 to-transparent p-2">
          <div className="h-2 w-2/3 rounded bg-primary/60 animate-pulse" />
          <div className="h-1.5 w-full rounded bg-white/20" />
          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-8 rounded bg-white/10" />
            <div className="h-8 rounded bg-primary/30" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-2">
      <div className="flex items-center gap-1 pb-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
      </div>
      <div className="space-y-1.5 rounded-md bg-gradient-to-b from-primary/10 to-transparent p-2">
        <div className="h-2 w-2/3 rounded bg-primary/60 animate-pulse" />
        <div className="grid grid-cols-3 gap-1.5">
          <div className="h-8 rounded bg-white/10" />
          <div className="h-8 rounded bg-primary/30" />
          <div className="h-8 rounded bg-white/10" />
        </div>
        <div className="h-4 w-20 rounded bg-gradient-brand shadow-glow" />
      </div>
    </div>
  );
}

/* ---------------- Performance & Security ---------------- */

function PerformanceSecuritySection() {
  return (
    <section className="relative border-y border-white/5 bg-black/20">
      <div className="absolute inset-0 ai-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Performance & Security"
          title={
            <>
              Fast, secure and <span className="text-gradient">built to scale</span>
            </>
          }
          description="Every site we ship meets modern performance, SEO and security standards."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-6">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-primary">
              <Gauge className="h-4 w-4" /> Performance
            </div>
            <div className="mt-4 grid gap-3">
              {perfItems.map((it, i) => {
                const Icon = it.icon;
                return (
                  <div
                    key={it.title}
                    className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:-translate-y-0.5"
                    style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 90}ms` }}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:rotate-6">
                      <Icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{it.title}</div>
                      <div className="text-xs text-muted-foreground">{it.desc}</div>
                    </div>
                  </div>
                );
              })}
              <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                {[
                  { l: "LCP", v: "1.2s" },
                  { l: "INP", v: "80ms" },
                  { l: "CLS", v: "0.02" },
                ].map((m) => (
                  <div key={m.l} className="glass rounded-xl p-2">
                    <div className="font-display text-lg font-bold text-gradient">{m.v}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-strong relative overflow-hidden rounded-3xl p-6">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-primary">
              <ShieldCheck className="h-4 w-4" /> Security
            </div>
            <div className="mt-4 grid gap-3">
              {secItems.map((it, i) => {
                const Icon = it.icon;
                return (
                  <div
                    key={it.title}
                    className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:-translate-y-0.5"
                    style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 90}ms` }}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:rotate-6">
                      <Icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{it.title}</div>
                      <div className="text-xs text-muted-foreground">{it.desc}</div>
                    </div>
                  </div>
                );
              })}
              <div className="mt-2 flex flex-wrap gap-2">
                {["SSL/TLS", "SSO/MFA", "OWASP", "GDPR-ready", "Automated Backups"].map((b) => (
                  <span key={b} className="glass rounded-full px-3 py-1 text-[11px] font-medium text-primary">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
            Web experiences <span className="text-gradient">that deliver</span>
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
    <section className="relative mx-auto max-w-4xl px-6 py-24">
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Web project <span className="text-gradient">questions answered</span>
          </>
        }
      />
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="glass-strong overflow-hidden rounded-2xl border border-white/10 transition">
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
              <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
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
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              Ready to Build Your Next{" "}
              <span className="text-gradient">Digital Experience?</span>
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Whether you need a business website, web application, e-commerce platform, landing
              page or secure portal, we can design and develop a solution tailored to your business
              goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
                Request a Quote
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:scale-105 hover:bg-primary/10"
              >
                Start Your Project
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ResponsiveShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
