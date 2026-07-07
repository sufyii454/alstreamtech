import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Quote, Star, ChevronLeft, ChevronRight, Play, X, ArrowRight,
  Sparkles, ShieldCheck, Handshake, Rocket, Headphones, CheckCircle2,
  Building2, HeartPulse, ShoppingBag, Landmark, Home, GraduationCap, Truck, Factory,
  TrendingUp, Users, Award, Layers, Globe2, Clock,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials & Success Stories — ALStreamTech" },
      { name: "description", content: "Discover how ALStreamTech's AI, automation and custom software solutions have delivered measurable business results across industries." },
      { property: "og:title", content: "ALStreamTech — Client Success Stories" },
      { property: "og:description", content: "Trusted by businesses building the future with AI, automation and enterprise software." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Testimonials,
});

// ------- Data
const CATEGORIES = [
  "All", "AI Development", "Automation", "Custom Software",
  "Web Development", "Mobile Development", "Cloud & DevOps", "Analytics",
] as const;
type Category = (typeof CATEGORIES)[number];

type Testimonial = {
  name: string; role: string; company: string; industry: string;
  category: Exclude<Category, "All">; project: string; quote: string;
  results: string[]; rating: number;
};

const TESTIMONIALS: Testimonial[] = [
  { name: "Aiden Park", role: "Head of CX", company: "BrightCart", industry: "E-Commerce", category: "AI Development", project: "AI Customer Support Chatbot",
    quote: "Our support team was overwhelmed with repetitive customer inquiries. The AI chatbot now handles thousands of conversations every month while significantly improving customer satisfaction.",
    results: ["70% Support Automation", "24/7 Support", "Faster Responses"], rating: 5 },
  { name: "Priya Natarajan", role: "VP Operations", company: "Vaultline Capital", industry: "Finance", category: "Automation", project: "AI Document Automation",
    quote: "The document processing platform eliminated countless hours of manual work. Tasks that once required a large team are now completed automatically with exceptional accuracy.",
    results: ["90% Faster Processing", "Reduced Errors", "Increased Efficiency"], rating: 5 },
  { name: "Dr. Elena Costa", role: "COO", company: "MediBridge Health", industry: "Healthcare", category: "Automation", project: "Business Process Automation",
    quote: "The automation platform streamlined our internal workflows and dramatically improved collaboration across departments.",
    results: ["Improved Productivity", "Reduced Manual Tasks", "Better Visibility"], rating: 5 },
  { name: "Marcus Delaney", role: "CTO", company: "PortLine Freight", industry: "Logistics", category: "Custom Software", project: "Operations Management Platform",
    quote: "We needed software built around our business rather than changing our workflow to fit existing tools. The solution exceeded our expectations.",
    results: ["Improved Operations", "Centralized Systems", "Better Reporting"], rating: 5 },
  { name: "Sophie Laurent", role: "Head of Insights", company: "Northline Retail", industry: "Retail", category: "Analytics", project: "Business Intelligence Dashboard",
    quote: "The predictive analytics platform gave us insights we never had before. Forecasting is now significantly more accurate.",
    results: ["Better Forecasting", "Improved Planning", "Revenue Visibility"], rating: 5 },
  { name: "Julia Weston", role: "VP Support", company: "NimbusOps", industry: "SaaS", category: "AI Development", project: "AI Support Agent",
    quote: "ALStreamTech didn't just build our product — they became an extension of our team. Our AI support agent went live in 6 weeks and cut ticket volume by 68%.",
    results: ["68% Ticket Reduction", "6-Week Launch", "Higher CSAT"], rating: 5 },
  { name: "Ingrid Hoffmann", role: "Plant Director", company: "Sylvan Manufacturing", industry: "Manufacturing", category: "AI Development", project: "AI Defect Detection",
    quote: "They understood manufacturing before we finished the intro call. Our defect detection model has been running flawlessly for a year.",
    results: ["99.2% Accuracy", "Zero Downtime", "Lower Waste"], rating: 5 },
  { name: "Dr. Ravi Menon", role: "CEO", company: "MedBridge Telehealth", industry: "Healthcare", category: "Mobile Development", project: "Telehealth Mobile App",
    quote: "Our telehealth app is now our biggest growth channel. 4.9 stars, 350k monthly users, and rolling out to two new countries next quarter.",
    results: ["350k MAU", "4.9★ Rating", "2 New Markets"], rating: 5 },
  { name: "Nolan Fischer", role: "VP Engineering", company: "Cloudspire", industry: "SaaS", category: "Cloud & DevOps", project: "Multi-region Kubernetes Platform",
    quote: "They migrated our monolith to a multi-region Kubernetes platform with zero downtime. Deploy time dropped from hours to minutes.",
    results: ["10× Faster Deploys", "99.99% Uptime", "40% Infra Savings"], rating: 5 },
  { name: "Camila Duarte", role: "Marketing Director", company: "Habitare Homes", industry: "Real Estate", category: "Web Development", project: "AI-Powered Listing Portal",
    quote: "The new listing portal is fast, beautiful, and converts. Lead volume tripled in the first three months.",
    results: ["3× Leads", "58% Faster LCP", "SEO Boost"], rating: 5 },
];

const INDUSTRIES = [
  { key: "Healthcare", icon: HeartPulse },
  { key: "Finance", icon: Landmark },
  { key: "Retail", icon: ShoppingBag },
  { key: "Real Estate", icon: Home },
  { key: "Education", icon: GraduationCap },
  { key: "Logistics", icon: Truck },
  { key: "Manufacturing", icon: Factory },
] as const;

const STATS = [
  { label: "Projects Delivered", value: 100, suffix: "+", icon: Rocket },
  { label: "Happy Clients", value: 75, suffix: "+", icon: Users },
  { label: "Client Retention", value: 95, suffix: "%", icon: ShieldCheck },
  { label: "Average Rating", value: 4.9, suffix: "/5", icon: Star, decimals: 1 },
  { label: "Long-Term Partnerships", value: 50, suffix: "+", icon: Handshake },
  { label: "Industries Served", value: 20, suffix: "+", icon: Globe2 },
] as const;

const LOGOS = [
  "NovaTech", "BrightCart", "Vaultline", "MediBridge", "PortLine",
  "Northline", "NimbusOps", "Sylvan", "Cloudspire", "Habitare",
  "Aetheris", "Kairon", "Quorum", "Lumen", "Verdant",
];

const TIMELINE = [
  { title: "Challenge", desc: "Discover business goals, pain points and constraints.", icon: Sparkles },
  { title: "Strategy", desc: "Design the right AI, data and product architecture.", icon: Layers },
  { title: "Development", desc: "Build with senior engineers and rapid iteration.", icon: Rocket },
  { title: "Implementation", desc: "Deploy, integrate and train your teams end-to-end.", icon: ShieldCheck },
  { title: "Business Results", desc: "Measure, optimize and scale for compounding ROI.", icon: TrendingUp },
] as const;

const REVIEW_PLATFORMS = [
  { name: "Google Reviews", rating: "4.9/5", count: "180+ reviews" },
  { name: "Clutch", rating: "5.0/5", count: "42 verified reviews" },
  { name: "LinkedIn", rating: "Excellent", count: "120+ recommendations" },
  { name: "Trustpilot", rating: "4.8/5", count: "60+ reviews" },
];

const TRUST_BADGES = [
  "Trusted by Growing Businesses", "Enterprise-Grade Solutions", "Proven AI Experts",
  "Long-Term Partnerships", "Dedicated Support", "Reliable Project Delivery",
];

// ------- Utils
function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el || seen) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(el); return () => io.disconnect();
  }, [seen]);
  return { ref, seen };
}

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const { ref, seen } = useInView<HTMLSpanElement>();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const dur = 1400; const start = performance.now(); let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick); return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>;
}

function Avatar({ name, size = 56 }: { name: string; size?: number }) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2);
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full bg-gradient-brand font-bold text-primary-foreground shadow-glow"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials}
    </div>
  );
}

// ------- Sections
function FeaturedStory() {
  const results = ["70% Support Automation", "24/7 Customer Service", "Faster Response Times", "Reduced Operational Costs"];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-12 animate-fade-up">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_1.6fr]">
          <div className="flex flex-col items-start gap-5">
            <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Featured Success Story
            </div>
            <Avatar name="Sarah Mitchell" size={96} />
            <div>
              <div className="text-xl font-semibold">Sarah Mitchell</div>
              <div className="text-sm text-muted-foreground">CEO, NovaTech Solutions</div>
            </div>
            <div className="glass inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs">
              <Building2 className="h-4 w-4 text-primary" /> Enterprise SaaS
            </div>
            <div className="glass mt-2 flex w-full items-center justify-between rounded-2xl px-4 py-3">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Company</span>
              <span className="font-display text-lg">NovaTech</span>
            </div>
          </div>

          <div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>
            <Quote className="mt-4 h-10 w-10 text-primary/60" />
            <blockquote className="mt-2 font-display text-2xl leading-snug md:text-3xl">
              "The AI automation platform completely transformed our customer support operations.
              Response times improved dramatically, support costs decreased, and our customers now
              receive assistance 24/7. The team delivered exactly what was promised and continues
              supporting our growth."
            </blockquote>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="glass rounded-2xl p-4">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Project</div>
                <div className="mt-1 font-semibold">AI Customer Support Platform</div>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Challenge</div>
                <div className="mt-1 font-semibold">Scaling support 24/7 without ballooning cost</div>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Solution</div>
                <div className="mt-1 font-semibold">LLM agent with human handoff & analytics</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {results.map(r => (
                <span
                  key={r}
                  className="glass group inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:border-primary/70 hover:shadow-glow"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary transition group-hover:scale-110" />
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
      <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/15 blur-3xl opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-center justify-between">
        <span className="glass inline-flex rounded-full px-3 py-1 text-[11px] uppercase tracking-widest text-primary">{t.category}</span>
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
        </div>
      </div>
      <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{t.industry} · {t.project}</div>
      <Quote className="mt-3 h-6 w-6 text-primary/60" />
      <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
      <div className="mt-4 flex flex-wrap gap-2">
        {t.results.slice(0, 3).map(r => (
          <span key={r} className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs text-primary">{r}</span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
        <Avatar name={t.name} size={44} />
        <div>
          <div className="text-sm font-semibold">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role} · {t.company}</div>
        </div>
      </div>
    </article>
  );
}

function CarouselSection() {
  const [category, setCategory] = useState<Category>("All");
  const filtered = useMemo(
    () => TESTIMONIALS.filter(t => category === "All" || t.category === category),
    [category],
  );
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(3);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPerView(w >= 1280 ? 3 : w >= 768 ? 2 : 1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const pages = Math.max(1, Math.ceil(filtered.length / perView));
  useEffect(() => { setPage(0); }, [category, perView]);
  useEffect(() => {
    if (paused || pages <= 1) return;
    const id = setInterval(() => setPage(p => (p + 1) % pages), 5000);
    return () => clearInterval(id);
  }, [pages, paused]);

  const start = page * perView;
  const items = filtered.slice(start, start + perView);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
            Explore stories
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Filter by <span className="text-gradient">expertise</span></h2>
        </div>
        <div className="flex gap-2">
          <button aria-label="Previous" onClick={() => setPage(p => (p - 1 + pages) % pages)} className="glass grid h-11 w-11 place-items-center rounded-full transition hover:border-primary/60 hover:shadow-glow">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button aria-label="Next" onClick={() => setPage(p => (p + 1) % pages)} className="glass grid h-11 w-11 place-items-center rounded-full transition hover:border-primary/60 hover:shadow-glow">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {CATEGORIES.map(c => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              category === c
                ? "border-primary bg-gradient-brand text-primary-foreground shadow-glow"
                : "border-white/10 bg-white/[0.03] text-foreground/80 hover:border-primary/40 hover:text-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {items.map((t, i) => (
          <div key={`${page}-${t.name}`} className="animate-fade-up" style={{ animationDelay: `${i * 90}ms` }}>
            <Card t={t} />
          </div>
        ))}
      </div>

      {pages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all ${i === page ? "w-8 bg-primary shadow-glow" : "w-2 bg-white/25 hover:bg-white/50"}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function VideoTestimonials() {
  const videos = [
    { name: "Sarah Mitchell", company: "NovaTech Solutions", category: "AI Development", desc: "How NovaTech automated 70% of support with an AI agent." },
    { name: "Marcus Delaney", company: "PortLine Freight", category: "Custom Software", desc: "Building an operations platform that scaled globally." },
    { name: "Dr. Ravi Menon", company: "MedBridge Telehealth", category: "Mobile Development", desc: "Launching a telehealth app used by 350k patients." },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">Video Stories</div>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
          Hear Directly From <span className="text-gradient">Our Clients</span>
        </h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {videos.map((v, i) => (
          <button
            key={v.name}
            onClick={() => setOpenIdx(i)}
            className="glass group relative overflow-hidden rounded-3xl text-left transition duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
          >
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-accent/20 transition duration-700 group-hover:scale-110" />
              <div className="ai-grid absolute inset-0 opacity-30" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="glass-strong grid h-20 w-20 place-items-center rounded-full transition duration-500 group-hover:scale-110 group-hover:shadow-glow">
                  <Play className="h-8 w-8 translate-x-0.5 fill-primary text-primary" />
                </div>
              </div>
              <div className="absolute left-4 top-4">
                <span className="glass rounded-full px-3 py-1 text-[11px] uppercase tracking-widest text-primary">{v.category}</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3">
                <Avatar name={v.name} size={40} />
                <div>
                  <div className="text-sm font-semibold">{v.name}</div>
                  <div className="text-xs text-muted-foreground">{v.company}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {openIdx !== null && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-background/80 p-6 backdrop-blur-md animate-fade-up" onClick={() => setOpenIdx(null)}>
          <div className="glass-strong relative w-full max-w-3xl overflow-hidden rounded-3xl" onClick={e => e.stopPropagation()}>
            <button aria-label="Close" onClick={() => setOpenIdx(null)} className="glass absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full">
              <X className="h-4 w-4" />
            </button>
            <div className="relative aspect-video bg-black/60">
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <div className="glass-strong mx-auto grid h-20 w-20 place-items-center rounded-full shadow-glow">
                    <Play className="h-8 w-8 translate-x-0.5 fill-primary text-primary" />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">Video player placeholder</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-lg font-semibold">{videos[openIdx].name} · {videos[openIdx].company}</div>
              <p className="mt-2 text-sm text-muted-foreground">{videos[openIdx].desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">By the numbers</div>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Client Success <span className="text-gradient">Metrics</span></h2>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {STATS.map(s => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="glass group rounded-3xl p-6 text-center transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-4 font-display text-3xl font-bold text-gradient">
                <Counter to={s.value} suffix={s.suffix} decimals={"decimals" in s ? s.decimals : 0} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function LogoWall() {
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">Trusted worldwide</div>
        <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">Working with ambitious teams across industries</h2>
      </div>
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {doubled.map((name, i) => (
            <div key={`${name}-${i}`} className="glass flex h-16 w-40 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold uppercase tracking-widest text-muted-foreground transition hover:scale-105 hover:text-primary">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">How success happens</div>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">The <span className="text-gradient">Success Journey</span></h2>
      </div>
      <div className="relative mt-12">
        <div className="pointer-events-none absolute left-6 right-6 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent md:block" />
        <div className="grid gap-6 md:grid-cols-5">
          {TIMELINE.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="glass rounded-3xl p-5 text-center animate-fade-up" style={{ animationDelay: `${i * 120}ms` }}>
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-4 text-xs uppercase tracking-widest text-primary">Step {i + 1}</div>
                <div className="mt-1 font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustrySelector() {
  const [ind, setInd] = useState<string>("Healthcare");
  const items = useMemo(() => TESTIMONIALS.filter(t => t.industry === ind), [ind]);
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">By industry</div>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Success across <span className="text-gradient">every sector</span></h2>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {INDUSTRIES.map(({ key, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setInd(key)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
              ind === key
                ? "border-primary bg-gradient-brand text-primary-foreground shadow-glow"
                : "border-white/10 bg-white/[0.03] hover:border-primary/40 hover:text-primary"
            }`}
          >
            <Icon className="h-4 w-4" /> {key}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.length === 0 ? (
          <div className="glass col-span-full rounded-3xl p-10 text-center text-muted-foreground">
            More {ind} stories publishing soon. <a href="/contact" className="text-primary underline underline-offset-4">Talk to us</a>.
          </div>
        ) : items.map((t, i) => (
          <div key={t.name} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
            <Card t={t} />
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="glass-strong rounded-3xl p-8">
          <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">Why teams choose us</div>
          <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">Enterprise-grade <span className="text-gradient">trust signals</span></h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {TRUST_BADGES.map((b, i) => (
              <div key={b} className="glass flex items-center gap-3 rounded-2xl px-4 py-3 animate-fade-up" style={{ animationDelay: `${i * 90}ms` }}>
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-strong rounded-3xl p-8">
          <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">Reviews</div>
          <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">Verified across <span className="text-gradient">platforms</span></h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {REVIEW_PLATFORMS.map(p => (
              <div key={p.name} className="glass group flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-glow">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                  <Award className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold">{p.name}</div>
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-primary" />)}
                    <span className="ml-1 text-xs text-foreground">{p.rating}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{p.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative mx-auto my-16 max-w-7xl px-6">
      <div className="glass-strong relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center">
        <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative">
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Your story starts here
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            Ready to Join Our <span className="text-gradient">Success Stories?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Discover how AI, automation, and custom software solutions can help your business achieve measurable growth and long-term success.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="/contact" className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-4 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03] animate-pulse-glow">
              <Clock className="h-5 w-5" /> Schedule a Free Consultation
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="/contact" className="glass group inline-flex items-center gap-2 rounded-2xl px-6 py-4 font-semibold transition hover:bg-white/10">
              <Headphones className="h-5 w-5 text-primary" /> Discuss Your Project
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="/contact" className="group inline-flex items-center gap-2 rounded-2xl border border-primary/50 px-6 py-4 font-semibold text-primary transition hover:bg-primary/10 hover:shadow-glow">
              Get a Custom Proposal
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Client Testimonials"
        title={<>Trusted by Businesses <span className="text-gradient">Building the Future</span></>}
        subtitle="See how our clients have transformed their businesses through AI-powered solutions, intelligent automation, custom software development, cloud innovation, and digital transformation."
      />
      <FeaturedStory />
      <CarouselSection />
      <StatsSection />
      <LogoWall />
      <Timeline />
      <IndustrySelector />
      <TrustSection />
      <FinalCTA />
    </>
  );
}
