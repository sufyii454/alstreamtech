import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Bot,
  MessageSquare,
  Sparkles,
  Zap,
  ShieldCheck,
  Workflow,
  Database,
  Cloud,
  Cpu,
  Users,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Home,
  Truck,
  GraduationCap,
  Scale,
  Hotel,
  Globe,
  Smartphone,
  Headphones,
  UserCog,
  Target,
  LineChart,
  CheckCircle2,
  ChevronDown,
  Rocket,
  Layers,
  Mail,
  Calendar,
  BookOpen,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { ParticleNetwork } from "../components/ParticleNetwork";

export const Route = createFileRoute("/services/chatbots")({
  head: () => ({
    meta: [
      { title: "AI Chatbot Development — Intelligent Chatbots That Work 24/7 | ALStreamTech" },
      {
        name: "description",
        content:
          "Design, build and deploy intelligent AI chatbots for websites, WhatsApp, customer support, internal teams and lead generation. Enterprise-grade, secure and scalable.",
      },
      { property: "og:title", content: "AI Chatbot Development | ALStreamTech" },
      {
        property: "og:description",
        content:
          "AI-powered chatbots that automate customer support, generate qualified leads and streamline operations across every channel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChatbotsPage,
});

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const solutions = [
  {
    id: "website",
    icon: Globe,
    title: "Website Chatbot",
    desc: "Automate visitor interactions, answer FAQs, recommend services, schedule consultations and increase conversions.",
    benefits: [
      "Better visitor engagement",
      "Faster responses",
      "Higher conversion rates",
      "Reduced support workload",
    ],
    flow: ["Visitor", "AI Chatbot", "Answer / Action", "Meeting Booked"],
  },
  {
    id: "whatsapp",
    icon: MessageSquare,
    title: "WhatsApp Chatbot",
    desc: "Automate customer conversations through WhatsApp Business with instant replies, bookings and notifications.",
    benefits: [
      "Instant replies 24/7",
      "Appointment booking",
      "Order tracking",
      "Automated notifications",
      "Lead qualification",
    ],
    flow: ["Customer Message", "AI Analysis", "Business Action", "Customer Satisfaction"],
  },
  {
    id: "support",
    icon: Headphones,
    title: "Customer Support Bot",
    desc: "Automate customer service with FAQ automation, ticket routing, multi-language support and human handoff.",
    benefits: [
      "FAQ automation",
      "Ticket creation & routing",
      "Multi-language support",
      "Knowledge base search",
      "Seamless human handoff",
    ],
    flow: ["Customer", "AI Support Bot", "Knowledge Base", "Resolution / Handoff"],
  },
  {
    id: "internal",
    icon: UserCog,
    title: "Internal Company Assistant",
    desc: "Help employees instantly access HR, IT, policies, SOPs and internal knowledge with an AI assistant.",
    benefits: [
      "HR & IT self-service",
      "Policy lookup",
      "Knowledge search",
      "Workflow guidance",
      "Faster onboarding",
    ],
    flow: ["Employee", "AI Assistant", "Company Knowledge", "Instant Answer"],
  },
  {
    id: "lead",
    icon: Target,
    title: "Lead Generation Chatbot",
    desc: "Automate sales conversations — qualify visitors, score leads, schedule meetings and sync with your CRM.",
    benefits: [
      "More qualified leads",
      "Faster response times",
      "Improved conversion",
      "End-to-end sales automation",
    ],
    flow: ["Visitor", "AI Qualification", "Lead Score", "Meeting Scheduled", "CRM Updated"],
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Natural Language Understanding",
    desc: "Human-like conversations powered by state-of-the-art LLMs.",
  },
  {
    icon: Layers,
    title: "Multi-Channel Support",
    desc: "Website, WhatsApp, Messenger, mobile apps and internal systems.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base Integration",
    desc: "Grounded answers from PDFs, policies, SOPs and internal docs.",
  },
  {
    icon: Database,
    title: "CRM Integration",
    desc: "Salesforce, HubSpot, Zoho, Microsoft Dynamics and custom CRMs.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Send emails, update CRM, create tickets, schedule meetings, trigger approvals.",
  },
  {
    icon: LineChart,
    title: "Analytics & Reporting",
    desc: "Conversations, CSAT, accuracy, conversion rate and engagement.",
  },
];

const processSteps = [
  { title: "Discovery", desc: "Understand goals, users and success metrics." },
  { title: "Conversation Design", desc: "Craft flows, personas, tone and edge cases." },
  { title: "Knowledge Integration", desc: "Connect docs, databases and internal systems." },
  { title: "AI Development", desc: "Build the model, guardrails and integrations." },
  { title: "Testing", desc: "Evals for accuracy, safety, latency and cost." },
  { title: "Deployment", desc: "Launch across web, WhatsApp and internal channels." },
  { title: "Optimization", desc: "Continuous tuning based on real conversations." },
  { title: "Support", desc: "24/7 ops, monitoring and incident response." },
];

const techGroups = [
  { group: "AI Models", items: ["OpenAI GPT", "Gemini", "Claude"] },
  { group: "Frameworks", items: ["LangChain", "LlamaIndex"] },
  { group: "Channels", items: ["WhatsApp Business API", "Web Widgets", "Messenger", "Slack"] },
  { group: "Integrations", items: ["Salesforce", "HubSpot", "Zoho", "Microsoft Dynamics", "ERP"] },
  { group: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
];

const industryUses = [
  { icon: HeartPulse, name: "Healthcare", items: ["Patient support assistants", "Appointment booking"] },
  { icon: Landmark, name: "Finance", items: ["Customer service automation", "KYC assistants"] },
  { icon: ShoppingBag, name: "Retail", items: ["Product recommendations", "Order tracking bots"] },
  { icon: Home, name: "Real Estate", items: ["Property inquiry bots", "Lead qualification"] },
  { icon: GraduationCap, name: "Education", items: ["Student assistants", "Admissions bots"] },
  { icon: Truck, name: "Logistics", items: ["Shipment tracking", "Delivery updates"] },
  { icon: Hotel, name: "Hospitality", items: ["Reservation assistants", "Guest concierge"] },
  { icon: Scale, name: "Legal", items: ["Document assistants", "Client intake bots"] },
];

const projects = [
  {
    name: "Nova Care Concierge",
    industry: "Healthcare",
    stack: ["GPT-4o", "LangChain", "WhatsApp API", "FHIR"],
    challenge: "Patient support team overwhelmed by appointment and prescription queries.",
    solution: "WhatsApp AI assistant grounded in clinic knowledge with EHR integration.",
    features: ["24/7 patient support", "Appointment booking", "Prescription reminders"],
    results: "68% deflection, 4.8/5 CSAT, 5× faster response.",
  },
  {
    name: "Vertex Retail Bot",
    industry: "E-commerce",
    stack: ["Claude", "Pinecone", "Shopify", "Next.js"],
    challenge: "Cart abandonment and low conversion on complex catalogs.",
    solution: "Website chatbot with personalized recommendations and live order tracking.",
    features: ["Product recs", "Order tracking", "Multi-language"],
    results: "+42% conversion, 28% AOV lift, 3× engagement.",
  },
  {
    name: "Helios Support Copilot",
    industry: "SaaS",
    stack: ["OpenAI", "LangChain", "Zendesk", "Snowflake"],
    challenge: "Rising L1 ticket volume overwhelming the support team.",
    solution: "RAG-grounded support bot with ticket routing and human handoff.",
    features: ["FAQ automation", "Ticket routing", "Analytics"],
    results: "70% deflection, 90% faster first response.",
  },
  {
    name: "Orion HR Assistant",
    industry: "Enterprise",
    stack: ["Gemini", "LlamaIndex", "SharePoint", "Slack"],
    challenge: "Employees waiting days for HR/IT answers.",
    solution: "Internal AI assistant grounded in company policies and SOPs.",
    features: ["HR & IT self-service", "Policy search", "Onboarding flows"],
    results: "80% self-service rate, 60% fewer tickets.",
  },
];

const metrics = [
  { value: 1, suffix: "M+", label: "Conversations Automated" },
  { value: 70, suffix: "%", label: "Support Cost Reduction" },
  { value: 90, suffix: "%", label: "Response Time Improvement" },
  { value: 50, suffix: "%", label: "Lead Conversion Increase" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
];

const whyUs = [
  { icon: Bot, title: "AI Chatbot Specialists", desc: "A team focused exclusively on conversational AI." },
  { icon: Sparkles, title: "Custom-Built Solutions", desc: "Tailored to your brand, workflows and channels." },
  { icon: ShieldCheck, title: "Enterprise Security", desc: "Private deploys, SOC2-ready, data isolation." },
  { icon: Workflow, title: "Seamless Integrations", desc: "CRM, ERP, help desk, calendar and email." },
  { icon: Rocket, title: "Scalable Architecture", desc: "From one channel to millions of conversations." },
  { icon: Users, title: "Ongoing Support", desc: "Long-term partnership, tuning and evolution." },
];

const faqs = [
  {
    q: "How much does an AI chatbot cost?",
    a: "Projects start from a fixed-scope pilot and scale with complexity, channels and integrations. We provide transparent, milestone-based pricing after a short discovery call.",
  },
  {
    q: "Can the chatbot integrate with WhatsApp?",
    a: "Yes. We build on the official WhatsApp Business API with verified sender profiles, message templates and full compliance.",
  },
  {
    q: "Can it learn from our company documents?",
    a: "Absolutely. We ground the chatbot in your PDFs, policies, SOPs and internal knowledge using retrieval-augmented generation (RAG) — with citations.",
  },
  {
    q: "Can it integrate with our CRM?",
    a: "Yes — Salesforce, HubSpot, Zoho, Microsoft Dynamics and custom CRMs via secure APIs. Leads, tickets and conversations sync automatically.",
  },
  {
    q: "Can customers speak with a human if needed?",
    a: "Yes. We design smooth human handoff with full conversation context, availability routing and fallback rules.",
  },
  {
    q: "How long does chatbot development take?",
    a: "A production-ready pilot typically ships in 2–4 weeks. Full multi-channel deployments range from 6–12 weeks depending on scope and integrations.",
  },
  {
    q: "Can the chatbot support multiple languages?",
    a: "Yes. Modern LLMs handle 50+ languages natively, and we can tune tone and terminology per market.",
  },
  {
    q: "Do you provide ongoing maintenance?",
    a: "Yes. We offer continuous monitoring, prompt & knowledge base tuning, model upgrades and 24/7 incident response.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function ChatbotsPage() {
  return (
    <>
      <Hero />
      <OverviewSection />
      <SolutionsGrid />
      <FeaturesSection />
      <ProcessTimeline />
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
      eyebrow="AI Chatbot Development"
      title={
        <>
          Intelligent AI chatbots that{" "}
          <span className="text-gradient">work 24/7</span>
        </>
      }
      subtitle="Build AI-powered chatbots that automate customer support, generate qualified leads, answer questions and streamline operations across websites, WhatsApp, mobile apps and internal systems."
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
        >
          Book a Chatbot Consultation <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/contact"
          className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
        >
          Request a Live Demo
        </Link>
        <Link
          to="/contact"
          className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
        >
          Start Your Chatbot Project
        </Link>
      </div>
      <div className="mt-14">
        <HeroChatVisual />
      </div>
    </PageHero>
  );
}

function HeroChatVisual() {
  const messages = [
    { role: "user", text: "Can you help me book a demo?" },
    { role: "bot", text: "Absolutely! What day works best for you this week?" },
    { role: "user", text: "Thursday afternoon works." },
    { role: "bot", text: "Booked ✅ Thursday 3:00 PM. Calendar invite sent." },
  ];
  const flowNodes = [
    { icon: Users, label: "Customer" },
    { icon: Bot, label: "AI Chatbot" },
    { icon: Database, label: "CRM" },
    { icon: BookOpen, label: "Knowledge" },
    { icon: Workflow, label: "Business System" },
    { icon: CheckCircle2, label: "Automated Response" },
  ];
  return (
    <div className="glass-strong relative mx-auto grid w-full max-w-5xl gap-6 overflow-hidden rounded-3xl p-6 lg:grid-cols-2">
      <div className="pointer-events-none absolute inset-0 ai-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <ParticleNetwork density={35} />
      </div>

      {/* Chat panel */}
      <div className="glass relative flex h-[340px] flex-col rounded-2xl p-4">
        <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand shadow-glow">
            <Bot className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <div className="text-sm font-semibold">AI Assistant</div>
            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Online · Instant replies
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-2 overflow-hidden">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              style={{ animation: "fade-up .5s ease-out both", animationDelay: `${i * 500}ms` }}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs ${
                  m.role === "user"
                    ? "bg-gradient-brand text-primary-foreground"
                    : "glass text-foreground"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div
            className="flex justify-start"
            style={{ animation: "fade-up .5s ease-out both", animationDelay: `2200ms` }}
          >
            <div className="glass flex items-center gap-1 rounded-2xl px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce" />
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:120ms]" />
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:240ms]" />
            </div>
          </div>
        </div>
      </div>

      {/* Workflow panel */}
      <div className="relative flex h-[340px] flex-col justify-between rounded-2xl">
        <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-primary">
          Real-time Automation
        </div>
        <div className="relative flex-1 space-y-2">
          {flowNodes.map((n, i) => {
            const Icon = n.icon;
            return (
              <div
                key={n.label}
                className="glass group flex items-center gap-3 rounded-xl p-3 transition hover:translate-x-1"
                style={{ animation: "fade-up .5s ease-out both", animationDelay: `${i * 120}ms` }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand shadow-glow">
                  <Icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="flex-1 text-xs font-semibold">{n.label}</div>
                <div className="h-1 w-16 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full w-1/3 bg-gradient-brand"
                    style={{ animation: `flow-slide 2.4s ${i * 0.2}s ease-in-out infinite` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes flow-slide {
          0% { transform: translateX(-100%); width: 30%; }
          50% { transform: translateX(120%); width: 60%; }
          100% { transform: translateX(300%); width: 30%; }
        }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Overview                                                            */
/* ------------------------------------------------------------------ */

function OverviewSection() {
  const benefits = [
    "Automate repetitive conversations",
    "Reduce support workload",
    "Increase sales & conversions",
    "Improve customer experience",
    "Operate 24/7 across channels",
    "Integrate with existing systems",
  ];
  const arch = [
    { icon: MessageSquare, label: "Customer Question" },
    { icon: Sparkles, label: "Natural Language Understanding" },
    { icon: BookOpen, label: "Knowledge Search" },
    { icon: Cpu, label: "AI Reasoning" },
    { icon: Bot, label: "Automated Response" },
    { icon: Workflow, label: "Business Action" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="glass inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
            Chatbot Overview
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            Conversational AI that <span className="text-gradient">drives real outcomes</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            AI chatbots let your business talk to every customer, every hour — instantly. From
            support and sales to internal operations, they cut costs, lift satisfaction and unlock
            new revenue without adding headcount.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-strong relative overflow-hidden rounded-3xl p-6">
          <div className="pointer-events-none absolute inset-0 ai-grid opacity-20" />
          <div className="relative space-y-3">
            {arch.map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.label}
                  className="glass group flex items-center gap-3 rounded-xl p-4 transition hover:translate-x-1"
                  style={{ animation: "fade-up .6s ease-out both", animationDelay: `${i * 90}ms` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand shadow-glow">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{a.label}</div>
                    <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full w-1/3 bg-gradient-brand"
                        style={{ animation: `flow-slide 3s ${i * 0.3}s ease-in-out infinite` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Solutions grid                                                      */
/* ------------------------------------------------------------------ */

function SolutionsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Chatbot Solutions"
        title={
          <>
            The right chatbot for <span className="text-gradient">every channel</span>
          </>
        }
        description="From website widgets and WhatsApp assistants to internal copilots and lead-gen bots — one team, every use case."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.id}
              className="glass group relative flex flex-col overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:bg-white/5"
              style={{ animation: "fade-up .6s ease-out both", animationDelay: `${i * 80}ms` }}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
              <div className="relative flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
              </div>
              <p className="relative mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="relative mt-4 space-y-1.5">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /> {b}
                  </li>
                ))}
              </ul>
              <div className="relative mt-5 flex flex-wrap items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.flow.map((f, idx) => (
                  <span key={f} className="flex items-center gap-1.5">
                    <span className="glass rounded-full px-2 py-0.5 text-[10px] font-medium text-primary">
                      {f}
                    </span>
                    {idx < s.flow.length - 1 && <ArrowRight className="h-3 w-3 text-primary/60" />}
                  </span>
                ))}
              </div>
              <Link
                to="/contact"
                className="relative mt-auto pt-5 text-left"
              >
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Features                                                            */
/* ------------------------------------------------------------------ */

function FeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Premium Features"
        title={
          <>
            Enterprise-grade <span className="text-gradient">chatbot capabilities</span>
          </>
        }
        description="Every chatbot ships with the features enterprises actually need — grounded answers, integrations, guardrails and analytics."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="glass group relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:bg-white/5"
              style={{ animation: "fade-up .6s ease-out both", animationDelay: `${i * 70}ms` }}
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/25" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:scale-110">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="relative mt-4 font-display text-lg font-bold">{f.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Process timeline                                                    */
/* ------------------------------------------------------------------ */

function ProcessTimeline() {
  const [active, setActive] = useState(0);
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Our Process"
        title={
          <>
            From idea to launch — <span className="text-gradient">in 8 clear phases</span>
          </>
        }
        description="A proven delivery process refined across dozens of chatbot deployments."
      />
      <div className="glass-strong relative overflow-hidden rounded-3xl p-6 md:p-8">
        <div className="pointer-events-none absolute inset-0 ai-grid opacity-20" />
        <div className="relative grid gap-3 md:grid-cols-4 lg:grid-cols-8">
          {processSteps.map((s, i) => (
            <button
              key={s.title}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`glass group flex flex-col items-start rounded-2xl p-4 text-left transition ${
                active === i ? "bg-primary/10 ring-1 ring-primary/40" : "hover:bg-white/5"
              }`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-xs font-bold text-primary-foreground shadow-glow">
                {i + 1}
              </div>
              <div className="mt-3 text-sm font-semibold">{s.title}</div>
              <div
                className={`mt-1 overflow-hidden text-xs text-muted-foreground transition-all ${
                  active === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {s.desc}
              </div>
            </button>
          ))}
        </div>
        <div className="relative mt-6 h-1 overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full bg-gradient-brand transition-all duration-500"
            style={{ width: `${((active + 1) / processSteps.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Tech ecosystem                                                      */
/* ------------------------------------------------------------------ */

function TechEcosystem() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Technology Stack"
        title={
          <>
            The best-in-class <span className="text-gradient">chatbot stack</span>
          </>
        }
        description="Model-agnostic architecture across leading AI providers, frameworks, channels and cloud platforms."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {techGroups.map((g, i) => (
          <div
            key={g.group}
            className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:bg-white/5"
            style={{ animation: "fade-up .6s ease-out both", animationDelay: `${i * 80}ms` }}
          >
            <div className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-primary">
              {g.group}
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((t) => (
                <span
                  key={t}
                  className="glass rounded-full px-3 py-1 text-xs font-medium text-foreground/90 transition hover:bg-primary/10 hover:text-primary hover:shadow-glow"
                  style={{ animation: "fade-up .5s ease-out both" }}
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
/* Industries                                                          */
/* ------------------------------------------------------------------ */

function IndustryUseCases() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Industries We Support"
        title={
          <>
            Chatbots for <span className="text-gradient">every industry</span>
          </>
        }
        description="Domain-tuned conversational AI for the industries we know best."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {industryUses.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <div
              key={ind.name}
              className="glass group relative overflow-hidden rounded-3xl p-5 transition hover:-translate-y-1 hover:bg-white/5"
              style={{ animation: "fade-up .5s ease-out both", animationDelay: `${i * 60}ms` }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/25" />
              <div className="relative flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand shadow-glow">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-base font-bold">{ind.name}</h3>
              </div>
              <ul className="relative mt-3 space-y-1.5 text-xs text-muted-foreground">
                {ind.items.map((it) => (
                  <li key={it} className="flex items-start gap-1.5">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Project showcase                                                    */
/* ------------------------------------------------------------------ */

function ProjectShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Project Showcase"
        title={
          <>
            Real chatbots, <span className="text-gradient">real results</span>
          </>
        }
        description="A snapshot of chatbot solutions we've shipped across industries."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={p.name}
            className="glass group relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:bg-white/5"
            style={{ animation: "fade-up .6s ease-out both", animationDelay: `${i * 80}ms` }}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/25" />
            <div className="relative flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <div className="mt-1 text-xs uppercase tracking-widest text-primary">{p.industry}</div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>
            <div className="relative mt-4 grid gap-3 text-xs">
              <div>
                <span className="font-semibold text-foreground/80">Challenge: </span>
                <span className="text-muted-foreground">{p.challenge}</span>
              </div>
              <div>
                <span className="font-semibold text-foreground/80">Solution: </span>
                <span className="text-muted-foreground">{p.solution}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.features.map((f) => (
                  <span key={f} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-foreground/80">
                    {f}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span key={t} className="glass rounded-full px-2.5 py-1 text-[11px] font-medium text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative mt-5 rounded-2xl border border-primary/20 bg-primary/5 p-3 text-sm font-semibold text-primary">
              📈 {p.results}
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
      <SectionHeading
        eyebrow="Business Impact"
        title={
          <>
            The numbers our chatbots <span className="text-gradient">deliver</span>
          </>
        }
        description="Aggregated impact across production chatbot deployments."
      />
      <div className="glass-strong relative overflow-hidden rounded-3xl p-8">
        <div className="pointer-events-none absolute inset-0 ai-grid opacity-20" />
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((m, i) => (
            <MetricItem key={m.label} value={m.value} suffix={m.suffix} label={m.label} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricItem({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          setTimeout(() => {
            const duration = 1200;
            const start = performance.now();
            const step = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              setCount(Math.round(value * (0.2 + 0.8 * p * (2 - p))));
              if (p < 1) requestAnimationFrame(step);
              else setCount(value);
            };
            requestAnimationFrame(step);
          }, delay);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold md:text-5xl">
        <span className="text-gradient">
          {count}
          {suffix}
        </span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Why us                                                              */
/* ------------------------------------------------------------------ */

function WhyUsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Why Choose Us"
        title={
          <>
            Your trusted <span className="text-gradient">chatbot partner</span>
          </>
        }
        description="Specialists in conversational AI — from design to deployment to long-term evolution."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyUs.map((w, i) => {
          const Icon = w.icon;
          return (
            <div
              key={w.title}
              className="glass group relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:bg-white/5"
              style={{ animation: "fade-up .5s ease-out both", animationDelay: `${i * 60}ms` }}
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/25" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:scale-110">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="relative mt-4 font-display text-lg font-bold">{w.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{w.desc}</p>
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
            Answers to <span className="text-gradient">common questions</span>
          </>
        }
      />
      <div className="mt-8 space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="glass overflow-hidden rounded-2xl">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/5"
            >
              <span className="text-sm font-semibold md:text-base">{f.q}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-primary transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ${
                open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */

function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="glass-strong relative overflow-hidden rounded-3xl p-10 md:p-16">
        <div className="pointer-events-none absolute inset-0 ai-grid opacity-20" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="glass inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
              Ready to Launch
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
              Ready to automate conversations with{" "}
              <span className="text-gradient">AI?</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Whether you need a website chatbot, WhatsApp assistant, customer support bot,
              internal employee assistant or lead generation chatbot — we'll design and build a
              secure, scalable solution tailored to your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                Book a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                Request a Chatbot Demo
              </Link>
              <Link
                to="/contact"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                Start Your Project
              </Link>
            </div>
          </div>
          <FinalCTAVisual />
        </div>
      </div>
    </section>
  );
}

function FinalCTAVisual() {
  const nodes = [
    { icon: MessageSquare, label: "Chat" },
    { icon: Database, label: "CRM" },
    { icon: Mail, label: "Email" },
    { icon: Calendar, label: "Calendar" },
    { icon: Workflow, label: "Workflows" },
    { icon: Cloud, label: "Cloud" },
  ];
  return (
    <div className="glass-strong relative h-[300px] overflow-hidden rounded-3xl sm:h-[360px]">
      <div className="pointer-events-none absolute inset-0 ai-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <ParticleNetwork density={30} />
      </div>
      <div className="relative flex h-full items-center justify-center">
        <div className="relative flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48">
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_18s_linear_infinite]" />
          <div className="absolute inset-6 rounded-full border border-primary/20 animate-[spin_26s_linear_infinite_reverse]" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand shadow-glow animate-pulse-glow sm:h-20 sm:w-20">
            <Bot className="h-8 w-8 text-primary-foreground sm:h-9 sm:w-9" />
          </div>
          {nodes.map((n, i) => {
            const angle = (i / nodes.length) * 360;
            const rad = (angle * Math.PI) / 180;
            const r = 110;
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
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <div className="glass flex h-9 w-9 items-center justify-center rounded-xl sm:h-10 sm:w-10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {n.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
