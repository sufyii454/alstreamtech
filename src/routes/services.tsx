import { createFileRoute } from "@tanstack/react-router";
import {
  Brain, Bot, Zap, Cloud, Code2, Smartphone, BarChart3, ShieldCheck,
  Sparkles, Building2, Stethoscope, Landmark, ShoppingBag, Truck, GraduationCap,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AI Development, Custom Software & Automation | AIXIS" },
      { name: "description", content: "Eight core services: AI development, custom software, web & mobile apps, chatbots, automation, cloud & DevOps, data analytics, AI integration." },
      { property: "og:title", content: "AIXIS Services" },
      { property: "og:description", content: "AI-powered software services from strategy to deployment." },
    ],
  }),
  component: Services,
});

type Service = {
  slug: string;
  icon: typeof Brain;
  name: string;
  overview: string;
  benefits: string[];
  technologies: string[];
  industries: string[];
};

const services: Service[] = [
  {
    slug: "ai-development",
    icon: Brain,
    name: "AI Development",
    overview: "Custom machine learning models, generative AI applications, computer vision, and predictive systems tailored to your business.",
    benefits: ["Automate complex decision-making", "Unlock insights from unstructured data", "Personalize experiences at scale", "Ship AI features 3× faster"],
    technologies: ["PyTorch", "TensorFlow", "OpenAI", "Anthropic", "Hugging Face", "LangChain", "Vector DBs", "Python"],
    industries: ["Healthcare", "Finance", "Retail", "Manufacturing"],
  },
  {
    slug: "custom-software",
    icon: Code2,
    name: "Custom Software Development",
    overview: "Bespoke enterprise platforms, SaaS products and internal tools engineered for your unique workflows.",
    benefits: ["Perfect-fit workflows", "Scalable architecture", "Own your IP", "Integrates with everything"],
    technologies: ["React", "Angular", "Node.js", ".NET", "Java", "PostgreSQL", "GraphQL"],
    industries: ["Enterprise", "SaaS", "Logistics", "Real Estate"],
  },
  {
    slug: "web-applications",
    icon: Sparkles,
    name: "Web Applications",
    overview: "Progressive web apps, customer portals, SaaS products, enterprise dashboards and booking systems.",
    benefits: ["Lightning-fast performance", "Beautiful UX", "SEO-friendly", "Global scale"],
    technologies: ["React", "Next.js", "Vue", "Node.js", "Vercel", "AWS", "TypeScript"],
    industries: ["SaaS", "Retail", "Media", "Education"],
  },
  {
    slug: "mobile-apps",
    icon: Smartphone,
    name: "Mobile App Development",
    overview: "Native and cross-platform mobile apps for iOS and Android — consumer, enterprise, and everything between.",
    benefits: ["One codebase, both platforms", "Native performance", "Offline-first", "App-store ready"],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
    industries: ["Consumer", "Fintech", "Health", "Enterprise"],
  },
  {
    slug: "chatbots",
    icon: Bot,
    name: "AI Chatbots & Agents",
    overview: "Conversational AI assistants and autonomous agents that handle support, sales, onboarding and complex workflows 24/7.",
    benefits: ["24/7 instant response", "Multilingual", "Reduces support cost 40–70%", "Learns from every interaction"],
    technologies: ["OpenAI", "Claude", "LangChain", "Pinecone", "Twilio", "Slack API"],
    industries: ["Ecommerce", "SaaS", "Banking", "Telecom"],
  },
  {
    slug: "automation",
    icon: Zap,
    name: "Business Process Automation",
    overview: "Intelligent automation that removes repetitive manual work across sales, ops, finance and support.",
    benefits: ["Save thousands of hours", "Eliminate errors", "Faster cycle times", "Real-time visibility"],
    technologies: ["n8n", "Zapier", "Temporal", "Airflow", "Python", "REST/GraphQL APIs"],
    industries: ["Operations", "Finance", "HR", "Logistics"],
  },
  {
    slug: "cloud-devops",
    icon: Cloud,
    name: "Cloud & DevOps",
    overview: "Cloud-native architecture, CI/CD, infrastructure-as-code, monitoring and reliability engineering.",
    benefits: ["Elastic scaling", "Deploy multiple times a day", "99.9%+ uptime", "Predictable costs"],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Docker", "Jenkins", "GitHub Actions"],
    industries: ["Enterprise", "SaaS", "Fintech", "Streaming"],
  },
  {
    slug: "data-analytics",
    icon: BarChart3,
    name: "Data & Analytics",
    overview: "Modern data platforms, BI dashboards, warehousing, predictive analytics, and KPI monitoring.",
    benefits: ["One source of truth", "Real-time insights", "Predictive forecasting", "Self-serve BI"],
    technologies: ["Snowflake", "BigQuery", "dbt", "Airbyte", "Looker", "Tableau", "Python"],
    industries: ["Retail", "Finance", "Media", "Healthcare"],
  },
];

const industryIcons: Record<string, typeof Brain> = {
  Healthcare: Stethoscope, Finance: Landmark, Retail: ShoppingBag, Manufacturing: Building2,
  Enterprise: Building2, SaaS: Sparkles, Logistics: Truck, "Real Estate": Building2,
  Education: GraduationCap, Media: Sparkles, Consumer: ShoppingBag, Fintech: Landmark,
  Health: Stethoscope, Ecommerce: ShoppingBag, Banking: Landmark, Telecom: Sparkles,
  Operations: Zap, HR: Sparkles, Streaming: Sparkles,
};

type Tab = "overview" | "benefits" | "technologies" | "industries";

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Eight services. <span className="text-gradient">One integrated team.</span></>}
        subtitle="From AI development to cloud infrastructure — everything you need to build, ship and scale intelligent software."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 space-y-16">
        {services.map((s, i) => <ServiceBlock key={s.slug} service={s} reverse={i % 2 === 1} />)}
      </section>

      <CTASection />
    </>
  );
}

function ServiceBlock({ service, reverse }: { service: Service; reverse: boolean }) {
  const [tab, setTab] = useState<Tab>("overview");
  const Icon = service.icon;
  const tabs: { key: Tab; label: string }[] = [
    { key: "overview", label: "Quick Overview" },
    { key: "benefits", label: "Key Benefits" },
    { key: "technologies", label: "Technologies" },
    { key: "industries", label: "Industry Applications" },
  ];

  return (
    <div id={service.slug} className="scroll-mt-32">
      <div className={`glass-strong grid gap-8 rounded-3xl p-8 md:p-12 lg:grid-cols-[1fr_1.3fr] lg:items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div>
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow">
            <Icon className="h-7 w-7 text-primary-foreground" />
          </div>
          <h2 className="font-display text-3xl font-bold md:text-4xl">{service.name}</h2>
          <p className="mt-4 text-muted-foreground">{service.overview}</p>
          <a href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Discuss this service <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {tabs.map(t => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${tab === t.key ? "bg-gradient-brand text-primary-foreground shadow-glow" : "glass hover:bg-white/10"}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="glass mt-4 min-h-[220px] rounded-2xl p-6">
            {tab === "overview" && <p className="text-muted-foreground">{service.overview}</p>}
            {tab === "benefits" && (
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.benefits.map(b => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b}
                  </li>
                ))}
              </ul>
            )}
            {tab === "technologies" && (
              <div className="flex flex-wrap gap-2">
                {service.technologies.map(t => (
                  <span key={t} className="glass rounded-full px-3 py-1.5 text-xs font-medium text-primary">{t}</span>
                ))}
              </div>
            )}
            {tab === "industries" && (
              <div className="grid gap-3 sm:grid-cols-2">
                {service.industries.map(ind => {
                  const I = industryIcons[ind] ?? Building2;
                  return (
                    <div key={ind} className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                      <I className="h-5 w-5 text-primary" /> <span className="text-sm">{ind}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
