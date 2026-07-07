import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Smartphone,
  Apple,
  Layers,
  Code2,

  Cloud,
  Rocket,
  Sparkles,
  ShieldCheck,
  Gauge,
  Bell,
  CreditCard,
  MessageCircle,
  MapPin,
  BarChart3,
  Brain,
  WifiOff,

  Wrench,
  FileText,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Home,
  Truck,
  GraduationCap,
  Fingerprint,
  Cpu,
} from "lucide-react";

import { SectionHeading } from "../components/SectionHeading";
import { ParticleNetwork } from "../components/ParticleNetwork";

export const Route = createFileRoute("/services/mobile-apps")({
  head: () => ({
    meta: [
      {
        title:
          "Mobile App Development — Android, iOS & Cross-Platform Apps | ALStreamTech",
      },
      {
        name: "description",
        content:
          "Custom mobile app development for Android, iOS and cross-platform. Scalable, secure, high-performance apps that engage users and drive business growth.",
      },
      { property: "og:title", content: "Mobile App Development | ALStreamTech" },
      {
        property: "og:description",
        content:
          "Premium Android, iOS and cross-platform mobile apps engineered for performance, security and exceptional user experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MobileAppsPage,
});

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const solutions = [
  {
    id: "android",
    icon: Smartphone,
    title: "Android App Development",
    desc: "Custom Android applications optimized for performance, security and user experience.",
    features: [
      "Native Android Apps",
      "Business Applications",
      "Customer-Facing Apps",
      "Enterprise Mobility Solutions",
      "E-Commerce Mobile Apps",
      "Utility Applications",
    ],
    steps: ["User Login", "Dashboard", "Business Features", "Notifications", "Analytics"],
    benefits: [
      "High Performance",
      "Android Ecosystem Integration",
      "Secure Architecture",
      "Scalable Design",
    ],
  },
  {
    id: "ios",
    icon: Apple,
    title: "iOS App Development",
    desc: "Premium iPhone and iPad apps built to Apple's latest design and performance standards.",
    features: [
      "Native iPhone Apps",
      "iPad Applications",
      "Business Solutions",
      "Subscription-Based Apps",
      "Customer Engagement Apps",
      "Premium User Experiences",
    ],
    steps: ["App Launch", "User Interaction", "Secure Transactions", "Real-Time Updates"],
    benefits: [
      "Optimized Performance",
      "Apple Ecosystem Integration",
      "Exceptional User Experience",
      "Enterprise Readiness",
    ],
  },
  {
    id: "cross-platform",
    icon: Layers,
    title: "Cross-Platform Development",
    desc: "Single-codebase mobile apps that run seamlessly on Android and iOS, reducing time and cost.",
    features: [
      "Single Codebase",
      "Faster Development",
      "Reduced Maintenance",
      "Shared Business Logic",
      "Consistent User Experience",
      "Faster Deployment",
    ],
    technologies: ["Flutter", "React Native"],
    benefits: [
      "Lower Development Costs",
      "Faster Time-to-Market",
      "Simultaneous Android & iOS Releases",
    ],
  },
] as const;

const appFeatures = [
  { icon: Fingerprint, title: "User Authentication", desc: "Secure sign-in, biometrics, SSO and MFA." },
  { icon: Bell, title: "Push Notifications", desc: "Targeted, real-time engagement across devices." },
  { icon: CreditCard, title: "Payment Integration", desc: "Stripe, Apple Pay, Google Pay and in-app purchases." },
  { icon: MessageCircle, title: "Real-Time Messaging", desc: "Chat, presence and instant communication." },
  { icon: MapPin, title: "Location Services", desc: "Maps, geofencing and location-aware experiences." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Behavioral analytics and actionable dashboards." },
  { icon: Brain, title: "AI Integration", desc: "On-device and cloud AI for smarter mobile apps." },
  { icon: WifiOff, title: "Offline Support", desc: "Robust sync, caching and conflict resolution." },
];

const processSteps = [
  { icon: Sparkles, title: "Discovery", desc: "Goals, users, platforms and success metrics.", deliverables: ["Requirements", "KPIs", "Platform Strategy"] },
  { icon: FileText, title: "Planning", desc: "Scope, architecture, roadmap and estimates.", deliverables: ["Scope", "Roadmap", "Architecture"] },
  { icon: Sparkles, title: "UI/UX Design", desc: "Wireframes, prototypes and mobile design system.", deliverables: ["Wireframes", "Prototypes", "Design System"] },
  { icon: Code2, title: "Development", desc: "Native modules, APIs, integrations and offline sync.", deliverables: ["Native Code", "APIs", "Integrations"] },
  { icon: ShieldCheck, title: "Testing", desc: "QA, device labs, security and performance tests.", deliverables: ["QA Report", "Device Coverage", "Security Review"] },
  { icon: Rocket, title: "App Store Deployment", desc: "Play Store & App Store submissions handled end-to-end.", deliverables: ["Play Store", "App Store", "Release Notes"] },
  { icon: Gauge, title: "Optimization", desc: "Performance, crash analytics and user engagement.", deliverables: ["Perf Tuning", "Crash Fixes", "A/B Tests"] },
  { icon: Wrench, title: "Support", desc: "Updates, maintenance and feature evolution.", deliverables: ["SLA Support", "Enhancements", "Roadmap"] },
];

const uxStages = [
  { title: "Wireframes", desc: "Low-fidelity layouts mapping every screen and flow." },
  { title: "Interactive Prototypes", desc: "Clickable prototypes to validate flows early." },
  { title: "Final App Screens", desc: "High-fidelity UI aligned with your brand." },
  { title: "User Journey Maps", desc: "End-to-end flows optimized for engagement." },
];

const techStack = [
  {
    label: "Mobile Development",
    items: [
      { name: "Flutter", use: "Cross-platform apps with a single codebase" },
      { name: "React Native", use: "JS-powered cross-platform mobile" },
      { name: "Kotlin", use: "Modern native Android development" },
      { name: "Swift", use: "Native iOS & iPadOS apps" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", use: "APIs & real-time services" },
      { name: "Python", use: "APIs, ML & data services" },
      { name: ".NET", use: "Enterprise-grade backends" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", use: "Reliable relational storage" },
      { name: "Firebase", use: "Realtime sync & mobile services" },
      { name: "MongoDB", use: "Flexible document storage" },
    ],
  },
  {
    label: "Cloud Platforms",
    items: [
      { name: "AWS", use: "Scalable mobile backends" },
      { name: "Azure", use: "Enterprise-grade cloud" },
      { name: "Google Cloud", use: "Global mobile infrastructure" },
    ],
  },
];

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Patient engagement and clinical mobile solutions.",
    details: ["Patient Apps", "Appointment Booking", "Medical Portals"],
  },
  {
    icon: Landmark,
    title: "Finance",
    desc: "Secure mobile banking and money management.",
    details: ["Banking Apps", "Financial Management", "Secure Payments"],
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    desc: "Mobile commerce and customer loyalty apps.",
    details: ["Shopping Apps", "Loyalty Programs", "Mobile Commerce"],
  },
  {
    icon: Home,
    title: "Real Estate",
    desc: "Property discovery and client management apps.",
    details: ["Property Management", "Client Apps", "Virtual Tours"],
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Fleet, tracking and driver mobile solutions.",
    details: ["Fleet Management", "Shipment Tracking", "Driver Applications"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Learning platforms and student engagement apps.",
    details: ["Learning Platforms", "Student Portals", "Training Apps"],
  },
];

const projects = [
  {
    name: "Consumer Fitness App",
    industry: "Health & Wellness",
    features: ["Workout tracking", "Wearable sync", "Community feed"],
    stack: ["Flutter", "Node.js", "Firebase"],
    results: ["500k+ downloads", "4.8★ rating", "40% DAU growth"],
    device: "ios" as const,
  },
  {
    name: "Mobile Banking App",
    industry: "Finance",
    features: ["Biometric auth", "Instant transfers", "Card controls"],
    stack: ["Swift", "Kotlin", ".NET", "AWS"],
    results: ["Bank-grade security", "-35% support load", "99.99% uptime"],
    device: "android" as const,
  },
  {
    name: "Retail Loyalty App",
    industry: "Retail",
    features: ["Rewards wallet", "In-store scan", "Personalized offers"],
    stack: ["React Native", "Node.js", "PostgreSQL"],
    results: ["+55% repeat visits", "+30% AOV", "Loyalty scale"],
    device: "ios" as const,
  },
  {
    name: "Fleet Management App",
    industry: "Logistics",
    features: ["Live tracking", "Route optimization", "Driver workflows"],
    stack: ["Flutter", "Python", "Google Cloud"],
    results: ["-25% fuel cost", "Real-time visibility", "Faster deliveries"],
    device: "android" as const,
  },
  {
    name: "Telehealth Patient App",
    industry: "Healthcare",
    features: ["Video visits", "e-Prescriptions", "Records access"],
    stack: ["React Native", "Node.js", "AWS"],
    results: ["HIPAA compliant", "-60% no-shows", "24/7 access"],
    device: "ios" as const,
  },
  {
    name: "Learning Companion App",
    industry: "Education",
    features: ["Course library", "Offline mode", "Progress tracking"],
    stack: ["Flutter", "Firebase"],
    results: ["+3x engagement", "Offline-first", "Global rollout"],
    device: "android" as const,
  },
];

const metrics = [
  { label: "Mobile Apps Delivered", value: 50, suffix: "+" },
  { label: "Active Users Supported", value: 1, suffix: "M+" },
  { label: "App Store Deployments", value: 100, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Industries Served", value: 20, suffix: "+" },
];

const faqs = [
  {
    q: "How long does mobile app development take?",
    a: "MVPs typically ship in 8–12 weeks. Full-featured production apps take 3–6 months. Enterprise mobile platforms are delivered in phases with continuous releases.",
  },
  {
    q: "Native vs cross-platform apps — which is right for me?",
    a: "Native (Swift/Kotlin) is best for performance-critical apps and deep OS integration. Cross-platform (Flutter/React Native) is ideal when speed-to-market, shared logic and lower cost matter — often the right default for most business apps.",
  },
  {
    q: "Can AI features be added to the app?",
    a: "Yes. We integrate on-device AI, generative AI, recommendations, computer vision, voice and personalization — powered by leading models and APIs.",
  },
  {
    q: "Can the app integrate with existing systems?",
    a: "Absolutely. We integrate with CRMs, ERPs, payment gateways, analytics platforms, custom APIs and legacy backends over secure APIs.",
  },
  {
    q: "Do you provide maintenance and updates?",
    a: "Yes. We offer post-launch support, OS updates, feature enhancements, performance tuning and 24/7 monitoring plans.",
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

function MobileAppsPage() {
  return (
    <>
      <MobileHero />
      <SolutionsOverview />
      <SolutionsDeepDive />
      <FeaturesSection />
      <ProcessSection />
      <UXSection />
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

function MobileHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 opacity-70"><ParticleNetwork density={45} /></div>
      <div className="absolute inset-0 ai-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
          <div className="min-w-0">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary animate-fade-up">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Mobile App Development
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight animate-fade-up sm:text-5xl lg:text-6xl xl:text-7xl">
              Build Powerful Mobile Apps That{" "}
              <span className="text-gradient">Users Love</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground animate-fade-up sm:text-lg">
              From Android and iOS applications to cross-platform solutions, we design and develop mobile apps that deliver exceptional user experiences and measurable business value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
              >
                Start Your Mobile App Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                Request a Free Consultation
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
            <PhoneShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({
  tone = "primary",
  label,
  className = "",
  delay = "0s",
}: {
  tone?: "primary" | "accent";
  label: string;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`glass-strong rounded-[2.2rem] border border-white/10 p-2 shadow-glow animate-float-slow ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-gradient-to-b from-primary/20 via-background to-background p-2">
        <div className="mx-auto mt-1 h-1 w-10 rounded-full bg-white/20" />
        <div className="mt-3 space-y-2">
          <div className="h-2.5 w-2/3 rounded bg-primary/60 animate-pulse" />
          <div className="h-1.5 w-1/2 rounded bg-white/20" />
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <div className={`h-10 rounded-lg ${tone === "primary" ? "bg-primary/30" : "bg-white/10"} animate-pulse`} />
            <div className="h-10 rounded-lg bg-white/10" />
            <div className="h-10 rounded-lg bg-white/10" />
            <div className={`h-10 rounded-lg ${tone === "primary" ? "bg-white/10" : "bg-primary/30"} animate-pulse`} />
          </div>
          <div className="h-6 rounded bg-white/5" />
          <div className="h-6 rounded bg-gradient-brand shadow-glow" />
        </div>
        <div className="absolute bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-white/30" />
      </div>
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full glass px-2 py-0.5 text-[9px] text-primary">
        {label}
      </div>
    </div>
  );
}

function PhoneShowcase() {
  return (
    <div className="relative h-[460px] w-[440px]">
      <div className="relative left-6 top-4">
        <PhoneMockup tone="primary" label="iOS" className="h-[380px] w-[190px] rotate-[-6deg]" delay="0s" />
      </div>
      <div className="absolute right-4 top-14">
        <PhoneMockup tone="accent" label="Android" className="h-[380px] w-[190px] rotate-[6deg]" delay="0.8s" />
      </div>
      <div
        className="absolute right-0 bottom-6 flex items-center gap-1 rounded-full glass px-2 py-1 text-[10px] text-primary animate-float-slow"
        style={{ animationDelay: "1s" }}
      >
        <Smartphone className="h-3 w-3" /> Cross-Platform Ready
      </div>
      <div
        className="absolute left-0 top-24 flex items-center gap-1 rounded-full glass px-2 py-1 text-[10px] text-primary animate-float-slow"
        style={{ animationDelay: "0.4s" }}
      >
        <Sparkles className="h-3 w-3" /> Native UX
      </div>
    </div>
  );
}

/* ---------------- Solutions Overview ---------------- */

function SolutionsOverview() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Mobile App Solutions"
        title={
          <>
            End-to-end <span className="text-gradient">mobile experiences</span>
          </>
        }
        description="Android, iOS and cross-platform apps engineered for scale, security and delight."
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
  const steps = "steps" in solution ? (solution as { steps: readonly string[] }).steps : undefined;
  const technologies =
    "technologies" in solution ? (solution as { technologies: readonly string[] }).technologies : undefined;

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

        {technologies && (
          <div className="mt-6">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Technologies</div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((t) => (
                <span key={t} className="glass rounded-full px-3 py-1 text-[11px] font-medium text-primary">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

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
        {steps ? (
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
        ) : (
          <CrossPlatformPreview />
        )}
      </div>
    </div>
  );
}

function CrossPlatformPreview() {
  return (
    <div>
      <div className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        Single Codebase → Android + iOS
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <PhoneMockup tone="primary" label="iOS" className="h-[260px] w-full" delay="0s" />
        </div>
        <div className="relative">
          <PhoneMockup tone="accent" label="Android" className="h-[260px] w-full" delay="0.6s" />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {["Flutter", "React Native", "Shared Logic", "One Team"].map((t) => (
          <span key={t} className="glass rounded-full px-3 py-1 text-[11px] font-medium text-primary">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Features ---------------- */

function FeaturesSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Mobile App Features"
        title={
          <>
            Everything a modern app <span className="text-gradient">needs</span>
          </>
        }
        description="Business-ready capabilities built into every mobile experience we ship."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {appFeatures.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl p-[1px] transition hover:-translate-y-1"
              style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 60}ms` }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-primary/20 opacity-40 transition group-hover:opacity-100" />
              <div className="glass-strong relative h-full rounded-2xl p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          );
        })}
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
              A proven <span className="text-gradient">mobile delivery</span> playbook
            </>
          }
          description="From discovery to launch and beyond — every step engineered for quality and speed."
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

/* ---------------- UX Showcase ---------------- */

function UXSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="UI / UX Showcase"
        title={
          <>
            From wireframe to <span className="text-gradient">delightful UX</span>
          </>
        }
        description="Interactive design flow that turns ideas into polished mobile experiences."
      />
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <ol className="space-y-4">
          {uxStages.map((s, i) => (
            <li
              key={s.title}
              className="glass-strong flex items-start gap-4 rounded-2xl p-5"
              style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 80}ms` }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-xs font-bold text-primary-foreground shadow-glow">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
              {i < uxStages.length - 1 && (
                <ChevronDown className="ml-auto hidden h-4 w-4 shrink-0 text-primary/60 lg:block" />
              )}
            </li>
          ))}
        </ol>
        <div className="mx-auto hidden lg:block">
          <div className="relative h-[420px] w-[220px]">
            <PhoneMockup tone="primary" label="Preview" className="h-full w-full" delay="0s" />
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
              A modern, <span className="text-gradient">battle-tested</span> mobile stack
            </>
          }
          description="Best-in-class frameworks, backends, databases and cloud platforms."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
        eyebrow="Industries We Serve"
        title={
          <>
            Mobile solutions for <span className="text-gradient">every industry</span>
          </>
        }
        description="Domain-aware apps that solve real problems for real users."
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
          eyebrow="Mobile App Portfolio"
          title={
            <>
              Apps shipped, <span className="text-gradient">users delighted</span>
            </>
          }
          description="A selection of mobile products we've designed, built and scaled."
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
                <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[10px] text-muted-foreground">
                  {p.device === "ios" ? <Apple className="h-3 w-3" /> : <Smartphone className="h-3 w-3" />}
                  {p.device === "ios" ? "iOS" : "Android"}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{p.name}</h3>

              <div className="mt-4 flex justify-center">
                <div className="relative h-[180px] w-[110px]">
                  <PhoneMockup
                    tone={p.device === "ios" ? "primary" : "accent"}
                    label={p.device === "ios" ? "iOS" : "Android"}
                    className="h-full w-full"
                    delay={`${i * 0.2}s`}
                  />
                </div>
              </div>

              <div className="mt-4">
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Features</div>
                <ul className="space-y-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                      <CheckCircle2 className="h-3 w-3 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-foreground/80">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.results.map((r) => (
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
              Let's build it
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
              Bring Your Mobile App Idea to <span className="text-gradient">Life</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Whether you need an Android app, iOS app, or cross-platform solution, we can build a scalable mobile experience tailored to your business goals.
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
                Start App Development
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                Request Proposal
              </Link>
            </div>
          </div>
          <div className="relative mx-auto h-[300px] w-[280px]">
            <div className="absolute left-0 top-4">
              <PhoneMockup tone="primary" label="iOS" className="h-[260px] w-[130px] rotate-[-6deg]" delay="0s" />
            </div>
            <div className="absolute right-0 top-10">
              <PhoneMockup tone="accent" label="Android" className="h-[260px] w-[130px] rotate-[6deg]" delay="0.6s" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
