import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Stethoscope,
  Landmark,
  ShoppingBag,
  Truck,
  GraduationCap,
  Home,
  Scale,
  UtensilsCrossed,
  Rocket,
  ShoppingCart,
  ChevronDown,
  Sparkles,
  Brain,
  Cloud,
  BarChart3,
  Shield,
  Layers,
  Handshake,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { ParticleNetwork } from "../components/ParticleNetwork";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — AI, Automation & Custom Software | ALStreamTech" },
      { name: "description", content: "Industry-specific AI, automation, cloud, analytics and custom software for healthcare, finance, retail, education, logistics, real estate, legal, restaurants, e-commerce and startups." },
      { property: "og:title", content: "Industries We Serve — ALStreamTech" },
      { property: "og:description", content: "Tailored AI and software solutions across 10+ industries." },
    ],
  }),
  component: Industries,
});

type Industry = {
  key: string;
  name: string;
  icon: any;
  short: string;
  gradient: string;
  challenges: string[];
  solutions: string[];
  ai: string[];
  benefits: string[];
};

const industries: Industry[] = [
  {
    key: "healthcare",
    name: "Healthcare",
    icon: Stethoscope,
    short: "AI patient assistants, medical documentation and healthcare analytics.",
    gradient: "from-sky-500/30 to-cyan-400/10",
    challenges: ["Patient communication", "Appointment management", "Administrative workload", "Medical documentation", "Data management", "Operational efficiency"],
    solutions: ["Patient Support Chatbots", "Appointment Scheduling Systems", "Medical Document Processing", "Healthcare Analytics Dashboards", "Patient Portals", "Internal Healthcare Assistants"],
    ai: ["AI Patient Assistants", "Medical Document Analysis", "Predictive Healthcare Analytics", "Automated Support Systems"],
    benefits: ["Better patient experience", "Reduced administrative workload", "Faster service delivery", "Improved operational visibility"],
  },
  {
    key: "realestate",
    name: "Real Estate",
    icon: Home,
    short: "Lead qualification, property intelligence and CRM automation.",
    gradient: "from-emerald-500/30 to-teal-400/10",
    challenges: ["Lead management", "Property inquiries", "Client communication", "Market analysis"],
    solutions: ["Property Management Platforms", "CRM Systems", "AI Lead Qualification", "Property Recommendation Engines", "Virtual Property Assistants", "Analytics Dashboards"],
    ai: ["AI Lead Scoring", "Virtual Property Assistant", "Market Trend Prediction", "Automated Follow-up"],
    benefits: ["Faster lead conversion", "Better customer engagement", "Improved sales performance"],
  },
  {
    key: "ecommerce",
    name: "E-Commerce",
    icon: ShoppingCart,
    short: "Personalization, recommendations and conversion automation.",
    gradient: "from-fuchsia-500/30 to-pink-400/10",
    challenges: ["Customer engagement", "Product discovery", "Cart abandonment", "Customer support", "Inventory planning"],
    solutions: ["AI Shopping Assistant", "Recommendation Engine", "Inventory Forecasting", "Customer Analytics", "Marketing Automation"],
    ai: ["Personalized Recommendations", "AI Shopping Concierge", "Demand Forecasting", "Automated Retargeting"],
    benefits: ["Higher conversion rates", "Increased sales", "Better customer retention"],
  },
  {
    key: "finance",
    name: "Finance",
    icon: Landmark,
    short: "Risk, compliance and intelligent document automation.",
    gradient: "from-amber-500/30 to-orange-400/10",
    challenges: ["Fraud detection", "Compliance", "Risk management", "Reporting"],
    solutions: ["AI Document Processing", "Risk Platforms", "Financial Dashboards", "Compliance Automation", "AI Customer Support"],
    ai: ["Fraud Detection Models", "AI KYC / AML", "Automated Reporting", "Risk Scoring"],
    benefits: ["Reduced risk", "Better decision-making", "Improved compliance"],
  },
  {
    key: "education",
    name: "Education",
    icon: GraduationCap,
    short: "LMS, AI tutors and student engagement platforms.",
    gradient: "from-indigo-500/30 to-violet-400/10",
    challenges: ["Student engagement", "Personalized learning", "Administrative workload", "Performance tracking"],
    solutions: ["Learning Management Systems", "AI Tutors", "Student Portals", "Performance Dashboards", "Mobile Apps"],
    ai: ["Adaptive Learning", "AI Tutoring Agents", "Automated Grading", "Engagement Analytics"],
    benefits: ["Better learning outcomes", "Reduced administration", "Higher student engagement"],
  },
  {
    key: "logistics",
    name: "Logistics",
    icon: Truck,
    short: "Fleet, routing and shipment intelligence.",
    gradient: "from-blue-500/30 to-sky-400/10",
    challenges: ["Route efficiency", "Delivery visibility", "Fleet operations", "Customer updates"],
    solutions: ["Fleet Management", "Route Optimization", "Shipment Tracking", "Analytics Dashboards", "Customer Portal"],
    ai: ["Route Optimization AI", "ETA Prediction", "Predictive Maintenance", "Automated Dispatch"],
    benefits: ["Lower operational costs", "Better delivery performance", "Improved visibility"],
  },
  {
    key: "retail",
    name: "Retail",
    icon: ShoppingBag,
    short: "Omnichannel retail, loyalty and inventory intelligence.",
    gradient: "from-rose-500/30 to-red-400/10",
    challenges: ["Inventory planning", "Customer loyalty", "In-store operations", "Omnichannel experience"],
    solutions: ["Retail Management Platform", "Inventory System", "Customer Loyalty", "Recommendation Engine", "Mobile Applications"],
    ai: ["Inventory Forecasting", "Personalized Offers", "Foot-traffic Analytics", "Loyalty Intelligence"],
    benefits: ["Increased revenue", "Better inventory planning", "Improved customer satisfaction"],
  },
  {
    key: "legal",
    name: "Legal",
    icon: Scale,
    short: "Contract intelligence, workflows and secure document AI.",
    gradient: "from-yellow-500/30 to-amber-400/10",
    challenges: ["Contract review speed", "Document volume", "Client responsiveness", "Knowledge silos"],
    solutions: ["AI Contract Analysis", "Client Portal", "Legal Workflow Automation", "Document Intelligence", "Knowledge Management"],
    ai: ["Clause Extraction", "Risk Flagging", "Legal Research Assistant", "Automated Summaries"],
    benefits: ["Faster contract review", "Improved productivity", "Better client service"],
  },
  {
    key: "restaurants",
    name: "Restaurants",
    icon: UtensilsCrossed,
    short: "Reservations, online ordering and guest experience AI.",
    gradient: "from-orange-500/30 to-yellow-400/10",
    challenges: ["Reservation management", "Order accuracy", "Customer loyalty", "Operational efficiency"],
    solutions: ["Restaurant Management", "Reservation Platform", "Online Ordering", "Loyalty Programs", "AI Customer Assistant"],
    ai: ["AI Reservation Assistant", "Menu Recommendations", "Loyalty Personalization", "Voice Ordering"],
    benefits: ["Higher customer satisfaction", "Better operational efficiency", "Increased revenue"],
  },
  {
    key: "startups",
    name: "Startups",
    icon: Rocket,
    short: "MVPs, SaaS platforms and AI-native products.",
    gradient: "from-purple-500/30 to-fuchsia-400/10",
    challenges: ["Time-to-market", "Scalability", "Budget constraints", "Product-market fit"],
    solutions: ["MVP Development", "SaaS Platforms", "AI Products", "Startup Dashboards", "Customer Portals"],
    ai: ["Embedded AI Copilots", "Analytics & Insights", "Automation Workflows", "AI-first Features"],
    benefits: ["Faster time-to-market", "Scalable architecture", "Lower development costs"],
  },
];

const comparison = industries.map((i) => ({
  industry: i.name,
  challenge: i.challenges[0],
  ai: i.ai[0],
  outcome: i.benefits[0],
}));

const caseStudies = [
  { industry: "Healthcare", title: "AI Patient Concierge for Multi-Clinic Network", challenge: "Manual appointment handling overloaded front desks.", solution: "Deployed an AI patient assistant across web + WhatsApp.", tech: ["React", "Node.js", "OpenAI", "Twilio"], ai: ["Intent Classification", "Auto-Scheduling"], results: ["-63% call volume", "+41% booking rate"] },
  { industry: "Finance", title: "Intelligent Document Processing for Lender", challenge: "3-day turnaround for loan document review.", solution: "Automated extraction + risk scoring pipeline.", tech: ["Python", "LangChain", "Azure"], ai: ["OCR", "LLM Extraction", "Risk Scoring"], results: ["Review in <15 min", "99.2% accuracy"] },
  { industry: "E-Commerce", title: "Personalization Engine for DTC Brand", challenge: "Flat conversion despite growing traffic.", solution: "Real-time recommendations + AI concierge.", tech: ["Next.js", "Vector DB", "OpenAI"], ai: ["Semantic Search", "Recommendations"], results: ["+28% AOV", "+19% conversion"] },
  { industry: "Logistics", title: "Fleet Optimization Platform", challenge: "Rising fuel + late delivery penalties.", solution: "Route AI + live tracking + customer portal.", tech: ["React", "Python", "AWS", "Mapbox"], ai: ["Route Optimization", "ETA Prediction"], results: ["-22% fuel cost", "+34% on-time delivery"] },
  { industry: "Legal", title: "Contract Intelligence for Corporate Firm", challenge: "Attorneys spent 40% of time on contract review.", solution: "Clause extraction + risk flagging assistant.", tech: ["Python", "LangChain", "Azure"], ai: ["Clause Extraction", "Risk Flagging"], results: ["6x faster review", "-35% costs"] },
  { industry: "Startups", title: "AI-Native SaaS MVP in 8 Weeks", challenge: "Founders needed to validate quickly.", solution: "Full-stack MVP with embedded AI copilot.", tech: ["React", "Node.js", "OpenAI", "Supabase"], ai: ["AI Copilot", "Auto-Insights"], results: ["Launched in 8 wks", "First 100 users"] },
];

const techStack = [
  { group: "Artificial Intelligence", items: ["OpenAI", "Gemini", "LangChain"] },
  { group: "Development", items: ["React", "Node.js", "Python"] },
  { group: "Cloud", items: ["AWS", "Azure"] },
  { group: "Analytics", items: ["Power BI", "Tableau"] },
];

const metrics = [
  { label: "Industries Served", value: 20, suffix: "+" },
  { label: "Projects Delivered", value: 100, suffix: "+" },
  { label: "AI Solutions Built", value: 50, suffix: "+" },
  { label: "Businesses Supported", value: 75, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

const whyUs = [
  { icon: Sparkles, title: "Industry Expertise", desc: "Deep domain knowledge across 10+ sectors." },
  { icon: Brain, title: "AI Innovation", desc: "Applied AI that solves real business challenges." },
  { icon: Layers, title: "Custom Solutions", desc: "Built for your workflows, not off-the-shelf." },
  { icon: Cloud, title: "Scalable Architecture", desc: "Cloud-native systems that grow with you." },
  { icon: Shield, title: "Security & Compliance", desc: "HIPAA, SOC 2, GDPR-ready engineering." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "We ship, iterate and grow with your team." },
];

const faqs = [
  { q: "Do you specialize in specific industries?", a: "Yes — we have dedicated practice areas across healthcare, finance, retail, logistics, education, legal, real estate, restaurants, e-commerce and startups." },
  { q: "Can solutions be customized for our business?", a: "Absolutely. Every engagement starts with a discovery workshop to tailor the architecture, models and UX to your exact workflows." },
  { q: "Can AI integrate with our existing systems?", a: "Yes. We integrate with CRMs, ERPs, EHRs, data warehouses, messaging platforms and custom APIs — securely and at scale." },
  { q: "Do you support compliance requirements?", a: "We build for HIPAA, SOC 2, GDPR, PCI-DSS and other regulatory frameworks depending on the industry." },
  { q: "Can you build industry-specific software?", a: "Yes — from MVPs to enterprise platforms, we design and build vertical software with AI at the core." },
];

// ---------- Hero Ecosystem ----------
function IndustryEcosystem() {
  const nodes = [
    "Healthcare", "Finance", "Retail", "Education", "Real Estate",
    "Logistics", "Legal", "Restaurants", "Startups", "E-Commerce",
  ];
  const R = 42; // percent radius
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[260px] px-2 sm:max-w-[420px] sm:px-0 md:max-w-[520px]">
      {/* rings */}
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-[10%] rounded-full border border-primary/20" />
      <div className="absolute inset-[24%] rounded-full border border-white/5" />

      {/* connection lines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((_, i) => {
          const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(a) * R;
          const y = 50 + Math.sin(a) * R;
          return (
            <line
              key={i}
              x1="50" y1="50" x2={x} y2={y}
              stroke="url(#g)" strokeWidth="0.3" opacity="0.6"
            />
          );
        })}
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(21,171,230,0.8)" />
            <stop offset="100%" stopColor="rgba(124,92,255,0.4)" />
          </linearGradient>
        </defs>
      </svg>

      {/* center core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-brand shadow-glow">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
          <Cpu className="relative h-10 w-10 text-primary-foreground" />
        </div>
        <div className="mt-2 text-center text-[10px] uppercase tracking-widest text-primary">AI Core</div>
      </div>

      {/* nodes */}
      {nodes.map((n, i) => {
        const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(a) * R;
        const y = 50 + Math.sin(a) * R;
        return (
          <div
            key={n}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%`, animation: `float 6s ease-in-out ${i * 0.3}s infinite` }}
          >
            <div className="glass flex items-center gap-1 rounded-full border border-primary/20 px-2 py-1 text-[9px] font-medium shadow-glow backdrop-blur-xl sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-[11px]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              {n}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ---------- Industry Card ----------
function IndustryCard({ ind }: { ind: Industry }) {
  const [open, setOpen] = useState(false);
  const Icon = ind.icon;
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${ind.gradient} backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow`}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/40 via-transparent to-purple-500/40 blur-md" />
      </div>
      <div className="relative p-6">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-white/10 p-2 text-muted-foreground transition hover:border-primary/40 hover:text-primary"
            aria-label="Toggle details"
          >
            <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold">{ind.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{ind.short}</p>

        <div
          className={`grid transition-all duration-500 ease-out ${open ? "mt-5 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            <div className="space-y-4 border-t border-white/10 pt-4">
              <DetailBlock label="Industry Challenges" items={ind.challenges} />
              <DetailBlock label="AI Opportunities" items={ind.ai} />
              <DetailBlock label="Recommended Solutions" items={ind.solutions} />
              <DetailBlock label="Business Outcomes" items={ind.benefits} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-primary">{label}</div>
      <ul className="grid grid-cols-1 gap-1 text-xs text-foreground/80 sm:grid-cols-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-1.5">
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------- Counter ----------
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

// ---------- Buttons ----------
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

// ---------- FAQ ----------
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => (
        <div key={f.q} className="glass overflow-hidden rounded-2xl border border-white/10 transition hover:border-primary/30">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
          >
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

function Industries() {
  return (
    <>
      <style>{`
        @keyframes float {
          0%,100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-6px); }
        }
        @keyframes floatBadge {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-70"><ParticleNetwork density={55} /></div>
        <div className="absolute inset-0 ai-grid opacity-20" />
        <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Industries We Serve
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Industry-Specific <span className="text-gradient">AI & Software</span> Solutions
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Helping organizations across healthcare, finance, retail, education, logistics, real estate, legal services, restaurants, startups, and more leverage AI, automation, cloud technologies, analytics, and custom software to improve efficiency, enhance customer experiences, and accelerate business growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PremiumButton variant="primary" to="/contact">Explore Industry Solutions</PremiumButton>
              <PremiumButton variant="secondary" to="/contact">Schedule Consultation</PremiumButton>
              <PremiumButton variant="outline" to="/contact">Discuss Your Industry Needs</PremiumButton>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <IndustryEcosystem />
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Industries Overview"
          title={<>Tailored solutions for <span className="text-gradient">every industry</span></>}
          description="Click any industry to explore challenges, AI opportunities, recommended solutions, and business outcomes."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <div key={ind.key} style={{ animationDelay: `${i * 60}ms` }} className="animate-fade-up">
              <IndustryCard ind={ind} />
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="relative border-y border-white/5 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Solutions Comparison"
            title={<>Industry challenges, mapped to <span className="text-gradient">AI outcomes</span></>}
          />
          <div className="glass overflow-hidden rounded-2xl border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-white/5 text-xs uppercase tracking-widest text-primary">
                  <tr>
                    <th className="px-5 py-4">Industry</th>
                    <th className="px-5 py-4">Main Challenge</th>
                    <th className="px-5 py-4">AI Solution</th>
                    <th className="px-5 py-4">Business Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((r) => (
                    <tr key={r.industry} className="border-t border-white/5 transition hover:bg-primary/5">
                      <td className="px-5 py-4 font-medium">{r.industry}</td>
                      <td className="px-5 py-4 text-muted-foreground">{r.challenge}</td>
                      <td className="px-5 py-4">{r.ai}</td>
                      <td className="px-5 py-4 text-muted-foreground">{r.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Featured Case Studies"
          title={<>Real results across <span className="text-gradient">industries</span></>}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c, i) => (
            <div
              key={c.title}
              className="group glass relative overflow-hidden rounded-2xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent">
                <div className="text-xs uppercase tracking-widest text-primary/80">{c.industry}</div>
              </div>
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><span className="text-primary">Challenge:</span> <span className="text-muted-foreground">{c.challenge}</span></p>
                <p><span className="text-primary">Solution:</span> <span className="text-muted-foreground">{c.solution}</span></p>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-foreground/80">{t}</span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.ai.map((t) => (
                  <span key={t} className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] text-primary">{t}</span>
                ))}
              </div>
              <div className="mt-4 border-t border-white/10 pt-3">
                <div className="mb-1 text-[10px] uppercase tracking-widest text-primary">Business Results</div>
                <ul className="space-y-1 text-sm text-foreground/90">
                  {c.results.map((r) => <li key={r}>• {r}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY SHOWCASE */}
      <section className="relative border-y border-white/5 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Technology Showcase"
            title={<>Built with the <span className="text-gradient">best-in-class stack</span></>}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((g, gi) => (
              <div key={g.group} className="glass rounded-2xl border border-white/10 p-6">
                <div className="mb-4 text-xs uppercase tracking-widest text-primary">{g.group}</div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((t, i) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
                      style={{ animation: `floatBadge 4s ease-in-out ${(gi + i) * 0.4}s infinite` }}
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

      {/* METRICS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="By The Numbers"
          title={<>Impact across <span className="text-gradient">industries</span></>}
        />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {metrics.map((m) => (
            <div key={m.label} className="glass rounded-2xl border border-white/10 p-6 text-center">
              <Counter value={m.value} suffix={m.suffix} />
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="relative border-y border-white/5 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={<>A partner built for <span className="text-gradient">enterprise AI</span></>}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => {
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
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Frequently asked <span className="text-gradient">questions</span></>}
        />
        <FAQ />
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-60"><ParticleNetwork density={40} /></div>
        <div className="absolute inset-0 ai-grid opacity-20" />
        <div className="absolute left-1/4 top-1/2 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl animate-fade-up">
            Let's Build Solutions for <span className="text-gradient">Your Industry</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
            Whether you're in healthcare, finance, retail, logistics, education, legal services, real estate, restaurants, e-commerce, or a growing startup, we can help you leverage AI and modern technology to solve real business challenges and achieve measurable growth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PremiumButton variant="primary" to="/contact">Schedule Consultation</PremiumButton>
            <PremiumButton variant="secondary" to="/contact">Discuss Your Industry Needs</PremiumButton>
            <PremiumButton variant="outline" to="/contact">Request Proposal</PremiumButton>
          </div>
        </div>
      </section>
    </>
  );
}
