import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone, Mail, MapPin, Clock, Linkedin, Twitter, Github,
  Menu, X, ChevronDown, Sparkles, Brain, Bot, Zap, Cloud, Code2,
  Smartphone, BarChart3, Rocket, Building2, Stethoscope, Landmark,
  ShoppingBag, Truck, GraduationCap,
} from "lucide-react";
import logoAsset from "@/assets/logo.jpeg.asset.json";
import { site } from "@/lib/site";

type ServiceDef = {
  slug: string;
  name: string;
  icon: typeof Brain;
  overview: string;
  benefits: string[];
  technologies: string[];
  industries: { label: string; icon: typeof Building2 }[];
};

const services: ServiceDef[] = [
  {
    slug: "ai-development", name: "AI Development", icon: Brain,
    overview: "Custom ML models, generative AI apps, computer vision & predictive systems.",
    benefits: ["Automate decisions", "Insights from unstructured data", "Personalization at scale", "Ship AI 3× faster"],
    technologies: ["PyTorch", "TensorFlow", "OpenAI", "Anthropic", "LangChain", "Vector DBs"],
    industries: [
      { label: "Healthcare", icon: Stethoscope }, { label: "Finance", icon: Landmark },
      { label: "Retail", icon: ShoppingBag }, { label: "Manufacturing", icon: Building2 },
    ],
  },
  {
    slug: "custom-software", name: "Custom Software", icon: Code2,
    overview: "Bespoke enterprise platforms, SaaS products & internal tools.",
    benefits: ["Perfect-fit workflows", "Scalable architecture", "Own your IP", "Integrates with everything"],
    technologies: ["React", "Node.js", ".NET", "Java", "PostgreSQL", "GraphQL"],
    industries: [
      { label: "Enterprise", icon: Building2 }, { label: "SaaS", icon: Sparkles },
      { label: "Logistics", icon: Truck }, { label: "Real Estate", icon: Building2 },
    ],
  },
  {
    slug: "web-applications", name: "Web Applications", icon: Sparkles,
    overview: "PWAs, portals, SaaS products & enterprise dashboards.",
    benefits: ["Blazing performance", "Beautiful UX", "SEO-ready", "Global scale"],
    technologies: ["React", "Next.js", "Vue", "TypeScript", "AWS", "Vercel"],
    industries: [
      { label: "SaaS", icon: Sparkles }, { label: "Retail", icon: ShoppingBag },
      { label: "Media", icon: Sparkles }, { label: "Education", icon: GraduationCap },
    ],
  },
  {
    slug: "mobile-apps", name: "Mobile Apps", icon: Smartphone,
    overview: "Native & cross-platform iOS / Android apps for every use case.",
    benefits: ["One codebase", "Native performance", "Offline-first", "App-store ready"],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
    industries: [
      { label: "Consumer", icon: ShoppingBag }, { label: "Fintech", icon: Landmark },
      { label: "Health", icon: Stethoscope }, { label: "Enterprise", icon: Building2 },
    ],
  },
  {
    slug: "chatbots", name: "AI Chatbots", icon: Bot,
    overview: "Conversational AI & autonomous agents for support, sales & ops.",
    benefits: ["24/7 response", "Multilingual", "40–70% lower support cost", "Learns continuously"],
    technologies: ["OpenAI", "Claude", "LangChain", "Pinecone", "Twilio"],
    industries: [
      { label: "Ecommerce", icon: ShoppingBag }, { label: "SaaS", icon: Sparkles },
      { label: "Banking", icon: Landmark }, { label: "Telecom", icon: Sparkles },
    ],
  },
  {
    slug: "automation", name: "Business Automation", icon: Zap,
    overview: "Intelligent automation across sales, ops, finance & support.",
    benefits: ["Save thousands of hours", "Zero errors", "Faster cycles", "Real-time visibility"],
    technologies: ["n8n", "Zapier", "Temporal", "Airflow", "Python"],
    industries: [
      { label: "Operations", icon: Zap }, { label: "Finance", icon: Landmark },
      { label: "HR", icon: Sparkles }, { label: "Logistics", icon: Truck },
    ],
  },
  {
    slug: "cloud-devops", name: "Cloud & DevOps", icon: Cloud,
    overview: "Cloud-native architecture, CI/CD, IaC, monitoring & SRE.",
    benefits: ["Elastic scaling", "Deploy daily", "99.9%+ uptime", "Predictable cost"],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Docker"],
    industries: [
      { label: "Enterprise", icon: Building2 }, { label: "SaaS", icon: Sparkles },
      { label: "Fintech", icon: Landmark }, { label: "Streaming", icon: Sparkles },
    ],
  },
  {
    slug: "data-analytics", name: "Data & Analytics", icon: BarChart3,
    overview: "Modern data platforms, BI, warehousing & predictive analytics.",
    benefits: ["One source of truth", "Real-time insights", "Forecasting", "Self-serve BI"],
    technologies: ["Snowflake", "BigQuery", "dbt", "Looker", "Tableau"],
    industries: [
      { label: "Retail", icon: ShoppingBag }, { label: "Finance", icon: Landmark },
      { label: "Media", icon: Sparkles }, { label: "Healthcare", icon: Stethoscope },
    ],
  },
];

type MegaTab = "overview" | "benefits" | "technologies" | "industries";
const megaTabs: { key: MegaTab; label: string }[] = [
  { key: "overview", label: "Quick Overview" },
  { key: "benefits", label: "Key Benefits" },
  { key: "technologies", label: "Technologies" },
  { key: "industries", label: "Industry Applications" },
];

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/why-us", label: "Why Us" },
  { to: "/services", label: "Services", mega: true },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/ai-solutions", label: "AI Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/process", label: "Process" },
  { to: "/blog", label: "Blog" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeService, setActiveService] = useState(services[0].slug);
  const [tab, setTab] = useState<MegaTab>("overview");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const service = services.find(s => s.slug === activeService) ?? services[0];

  return (
    <header className="sticky top-0 z-50">
      {/* Top icon bar */}
      <div className="hidden border-b border-white/5 bg-background/80 backdrop-blur md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phoneHref}`} className="flex items-center gap-2 transition hover:text-primary">
              <Phone className="h-3.5 w-3.5 text-primary" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition hover:text-primary">
              <Mail className="h-3.5 w-3.5 text-primary" /> {site.email}
            </a>
            <span className="hidden items-center gap-2 xl:flex">
              <MapPin className="h-3.5 w-3.5 text-primary" /> {site.addressShort}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-primary" /> {site.hours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="transition hover:text-primary"><Linkedin className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="Twitter" className="transition hover:text-primary"><Twitter className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="GitHub" className="transition hover:text-primary"><Github className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`transition-all ${scrolled ? "bg-background/90 shadow-elegant" : "bg-background/60"} backdrop-blur-xl border-b border-white/5`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset.url} alt={site.legal} className="h-10 w-auto rounded-md" />
            <div className="hidden leading-tight sm:block">
              <div className="font-display text-lg font-bold tracking-tight">AL STREAM TECH</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{site.tagline}</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map(item => (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={item.mega ? openMega : undefined}
                onMouseLeave={item.mega ? scheduleClose : undefined}
              >
                <Link
                  to={item.to}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-foreground/80 transition hover:bg-white/5 hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                  {item.mega && <ChevronDown className={`h-3.5 w-3.5 transition-transform ${megaOpen ? "rotate-180" : ""}`} />}
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105 md:inline-block"
            >
              Book a Consultation
            </Link>
            <button className="rounded-md p-2 lg:hidden" onClick={() => setOpen(v => !v)} aria-label="Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mega menu panel (full width) */}
        {megaOpen && (
          <div
            className="absolute inset-x-0 top-full hidden lg:block"
            onMouseEnter={openMega}
            onMouseLeave={scheduleClose}
          >
            <div className="mx-auto max-w-7xl px-6 pb-6">
              <div className="glass-strong overflow-hidden rounded-2xl border border-white/10 shadow-elegant">
                <div className="grid lg:grid-cols-[280px_1fr]">
                  {/* Left rail: service list */}
                  <div className="border-r border-white/5 bg-background/40 p-3">
                    <div className="mb-2 px-3 pt-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Our Services
                    </div>
                    <ul className="space-y-0.5">
                      {services.map(s => {
                        const Icon = s.icon;
                        const active = s.slug === activeService;
                        return (
                          <li key={s.slug}>
                            <button
                              onMouseEnter={() => setActiveService(s.slug)}
                              onFocus={() => setActiveService(s.slug)}
                              onClick={() => { setMegaOpen(false); window.location.href = `/services#${s.slug}`; }}
                              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                                active
                                  ? "bg-primary/15 text-primary"
                                  : "text-foreground/80 hover:bg-white/5"
                              }`}
                            >
                              <span className={`flex h-8 w-8 items-center justify-center rounded-md ${active ? "bg-gradient-brand text-primary-foreground" : "bg-white/5"}`}>
                                <Icon className="h-4 w-4" />
                              </span>
                              <span className="font-medium">{s.name}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Right: tabs + content */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand shadow-glow">
                          <service.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-display text-lg font-bold leading-tight">{service.name}</div>
                          <div className="text-xs text-muted-foreground">Explore this service</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {megaTabs.map(t => (
                          <button
                            key={t.key}
                            onMouseEnter={() => setTab(t.key)}
                            onClick={() => setTab(t.key)}
                            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                              tab === t.key
                                ? "bg-gradient-brand text-primary-foreground shadow-glow"
                                : "bg-white/5 text-foreground/70 hover:bg-white/10"
                            }`}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 min-h-[160px] rounded-xl bg-white/5 p-5">
                      {tab === "overview" && (
                        <p className="text-sm leading-relaxed text-muted-foreground">{service.overview}</p>
                      )}
                      {tab === "benefits" && (
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {service.benefits.map(b => (
                            <li key={b} className="flex items-start gap-2 text-sm">
                              <Rocket className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b}
                            </li>
                          ))}
                        </ul>
                      )}
                      {tab === "technologies" && (
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map(t => (
                            <span key={t} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                      {tab === "industries" && (
                        <div className="grid gap-2 sm:grid-cols-2">
                          {service.industries.map(ind => {
                            const I = ind.icon;
                            return (
                              <div key={ind.label} className="flex items-center gap-3 rounded-lg bg-background/40 p-2.5">
                                <I className="h-4 w-4 text-primary" />
                                <span className="text-sm">{ind.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs">
                      <a href={`/services#${service.slug}`} className="font-semibold text-primary hover:underline">
                        View full details →
                      </a>
                      <Link to="/contact" className="rounded-full bg-white/5 px-4 py-1.5 font-semibold text-foreground hover:bg-white/10">
                        Talk to an expert
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-white/5 bg-background/95 px-6 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {nav.map(item => (
                <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm hover:bg-white/5 hover:text-primary">
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-white/5 pt-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary" /> {site.phone}</div>
                <div className="mt-1 flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-primary" /> {site.email}</div>
                <div className="mt-1 flex items-start gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 text-primary" /> {site.addressShort}</div>
              </div>
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 rounded-full bg-gradient-brand px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground">
                Book a Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
