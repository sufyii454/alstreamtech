import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Brain, Puzzle, TrendingUp, Shield, Rocket, HeartHandshake,
  Cpu, Cloud, BarChart3, Smartphone, Code2, Workflow,
  ArrowRight, Calendar, MessageSquare, FileText, Check, X,
  Sparkles,
} from "lucide-react";
import { ParticleNetwork } from "../components/ParticleNetwork";
import whyusHero from "../assets/whyus/whyus-hero.jpg.asset.json";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose ALStreamTech — AI-First Software Partner" },
      { name: "description", content: "AI-first development, custom-built solutions, enterprise security, and long-term partnership. Discover why businesses trust ALStreamTech to build their digital future." },
      { property: "og:title", content: "Why Choose ALStreamTech" },
      { property: "og:description", content: "An AI-first software partner built for enterprise scale, security, and long-term growth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyUs,
});

/* ------------------------------- Data ------------------------------- */

const ORBIT = [
  { icon: Cpu, label: "AI Development", tip: "LLMs, agents, ML pipelines" },
  { icon: Workflow, label: "Automation", tip: "Intelligent workflow automation" },
  { icon: Cloud, label: "Cloud", tip: "AWS, Azure, GCP architectures" },
  { icon: BarChart3, label: "Analytics", tip: "Data platforms & insights" },
  { icon: Smartphone, label: "Mobile Apps", tip: "iOS, Android, cross-platform" },
  { icon: Code2, label: "Software Engineering", tip: "Scalable, maintainable code" },
];

const VALUE_CARDS = [
  {
    icon: Brain,
    title: "AI-First Development Strategy",
    desc: "AI-powered business solutions, intelligent automation, generative AI and machine learning woven into every layer of your product.",
    accent: "from-primary/30 to-fuchsia-500/20",
  },
  {
    icon: Puzzle,
    title: "Built Specifically for Your Business",
    desc: "Custom software, tailored AI systems, bespoke automation and industry-specific dashboards — no generic templates.",
    accent: "from-cyan-400/25 to-primary/20",
  },
  {
    icon: TrendingUp,
    title: "Designed to Scale with Growth",
    desc: "From startup MVP to enterprise workloads — architected for user traffic, data growth and global deployment.",
    accent: "from-primary/25 to-violet-500/20",
  },
  {
    icon: Shield,
    title: "Security Built Into Every Layer",
    desc: "Secure coding, encryption, authentication, access control and compliance-ready cloud security by default.",
    accent: "from-emerald-400/20 to-primary/25",
  },
  {
    icon: Rocket,
    title: "Accelerated Project Delivery",
    desc: "Agile sprints, rapid prototyping, CI/CD pipelines and continuous testing get you shipping in weeks, not quarters.",
    accent: "from-primary/25 to-amber-400/20",
  },
  {
    icon: HeartHandshake,
    title: "Partnership Beyond Launch",
    desc: "Ongoing maintenance, monitoring, enhancements and technical support — we grow with your product.",
    accent: "from-fuchsia-500/20 to-primary/25",
  },
];

const STATS = [
  { v: 100, suffix: "+", l: "Projects Completed" },
  { v: 50, suffix: "+", l: "AI Solutions Delivered" },
  { v: 98, suffix: "%", l: "Client Satisfaction" },
  { v: 24, suffix: "h", l: "Support Response" },
  { v: 20, suffix: "+", l: "Industries Served" },
  { v: 15, suffix: "+", l: "Technology Experts" },
];

const PROCESS = ["Discovery", "Strategy", "Design", "Development", "Testing", "Deployment", "Support"];

const COMPARISON = [
  { t: "Generic Solutions", u: "Custom AI-Powered Solutions" },
  { t: "Manual Processes", u: "Automation-Driven Development" },
  { t: "Basic Support", u: "Long-Term Technology Partnership" },
  { t: "Limited Scalability", u: "Built for Scale" },
  { t: "Reactive Development", u: "Business-Centric Innovation" },
];

const TECHS = ["OpenAI", "Gemini", "AWS", "Azure", "React", "Node.js", "Docker", "Kubernetes", "PostgreSQL"];

const ACHIEVEMENTS = [
  "Enterprise Solutions",
  "AI Automation Experts",
  "Cloud Specialists",
  "Mobile App Experts",
  "Software Architects",
  "Data Analytics Professionals",
];

/* ---------------------------- Utilities ---------------------------- */

function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current || inView) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect(); }
    }, options ?? { threshold: 0.25 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [inView, options]);
  return { ref, inView };
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <div ref={ref} className="font-display text-5xl font-bold text-gradient md:text-6xl">
      {val}{suffix}
    </div>
  );
}

/* ------------------------ AI Intelligence Core ---------------------- */

function AICore() {
  const [hover, setHover] = useState<number | null>(null);
  const radius = 44; // percent-ish
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* outer rings */}
      <div className="absolute inset-0 rounded-full border border-primary/20 animate-[whyus-spin_40s_linear_infinite]" />
      <div className="absolute inset-[8%] rounded-full border border-primary/15 animate-[whyus-spin-rev_60s_linear_infinite]" />
      <div className="absolute inset-[18%] rounded-full border border-primary/10" />

      {/* connection lines (SVG) */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
        {ORBIT.map((_, i) => {
          const a = (i / ORBIT.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(a) * radius;
          const y = 50 + Math.sin(a) * radius;
          return (
            <line key={i} x1="50" y1="50" x2={x} y2={y}
              stroke="rgba(21,171,230,0.25)" strokeWidth="0.3" strokeDasharray="1 2" />
          );
        })}
      </svg>

      {/* core sphere */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid h-28 w-28 place-items-center rounded-full bg-gradient-brand shadow-glow animate-pulse-glow md:h-32 md:w-32">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
          <Sparkles className="relative h-10 w-10 text-primary-foreground" />
        </div>
        <div className="mt-3 text-center text-xs uppercase tracking-widest text-primary/80">AI Core</div>
      </div>

      {/* orbiting items */}
      {ORBIT.map((o, i) => {
        const a = (i / ORBIT.length) * 360;
        const Icon = o.icon;
        return (
          <div
            key={o.label}
            className="absolute left-1/2 top-1/2 h-0 w-0 animate-[whyus-spin_40s_linear_infinite]"
            style={{ transform: `rotate(${a}deg) translateX(min(44%,220px))` }}
          >
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 animate-[whyus-spin-rev_40s_linear_infinite]"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              <div className="group relative flex flex-col items-center">
                <div className="grid h-12 w-12 place-items-center rounded-xl glass-strong shadow-glow transition group-hover:scale-110 group-hover:border-primary/60">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="mt-2 whitespace-nowrap text-[11px] font-medium text-foreground/90">{o.label}</div>
                {hover === i && (
                  <div className="absolute -bottom-9 z-10 whitespace-nowrap rounded-lg glass-strong px-3 py-1.5 text-[11px] text-muted-foreground shadow-glow">
                    {o.tip}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* soft particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/60"
            style={{
              left: `${(i * 83) % 100}%`,
              top: `${(i * 47) % 100}%`,
              animation: `whyus-float ${5 + (i % 5)}s ease-in-out ${i * 0.3}s infinite`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- Page ------------------------------ */

function WhyUs() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-70"><ParticleNetwork density={45} /></div>
        <div className="absolute inset-0 ai-grid opacity-20" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary animate-fade-up">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Why Choose Us
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-6xl animate-fade-up">
              Why Businesses Trust Us to Build Their <span className="text-gradient">Digital Future</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground animate-fade-up">
              We combine AI innovation with custom software expertise and a business-first mindset — delivering
              reliable projects, long-term partnerships, and scalable digital transformation your team can grow into.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]">
                Schedule a Free Consultation <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="glass inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold transition hover:bg-white/10">
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <AICore />
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="glass inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">Our Advantage</div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            Six reasons teams choose <span className="text-gradient">ALStreamTech</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Everything below is built into every engagement — not sold as an upgrade.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {VALUE_CARDS.map(({ icon: Icon, title, desc, accent }, i) => (
            <div
              key={title}
              className="whyus-card group relative overflow-hidden rounded-2xl glass p-6 transition duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className={`pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br ${accent} opacity-0 blur-2xl transition duration-500 group-hover:opacity-100`} />
              <div className="relative">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand shadow-glow transition group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="font-display text-lg font-semibold">{title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="glass-strong grid grid-cols-2 gap-8 rounded-3xl p-10 md:grid-cols-3 lg:grid-cols-6">
          {STATS.map(s => (
            <div key={s.l} className="text-center">
              <Counter to={s.v} suffix={s.suffix} />
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="glass inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">Our Process</div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            A modern path from <span className="text-gradient">idea to impact</span>
          </h2>
        </div>

        <ProcessTimeline />
      </section>

      {/* COMPARISON */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="glass inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">Compared</div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            Traditional agency <span className="text-muted-foreground">vs.</span> <span className="text-gradient">Our AI-First Agency</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5"><X className="h-5 w-5 text-muted-foreground" /></div>
              <div className="font-display text-xl font-semibold text-muted-foreground">Traditional Agency</div>
            </div>
            <ul className="space-y-3">
              {COMPARISON.map(r => (
                <li key={r.t} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/80" /> {r.t}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-glow">
            <div className="pointer-events-none absolute -top-24 -right-24 h-60 w-60 rounded-full bg-primary/25 blur-3xl" />
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand"><Sparkles className="h-5 w-5 text-primary-foreground" /></div>
              <div className="font-display text-xl font-semibold text-gradient">Our AI-First Agency</div>
            </div>
            <ul className="space-y-3">
              {COMPARISON.map(r => (
                <li key={r.u} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {r.u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TECH TRUST BANNER */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="glass-strong rounded-3xl p-10">
          <div className="mb-8 text-center text-xs uppercase tracking-widest text-muted-foreground">Built with the technologies enterprises trust</div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {TECHS.map((t, i) => (
              <div
                key={t}
                className="glass group flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
                style={{ animation: `whyus-float ${5 + (i % 4)}s ease-in-out ${i * 0.2}s infinite` }}
              >
                <span className="h-2 w-2 rounded-full bg-primary group-hover:animate-pulse" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="glass inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">Client Success</div>
          <h2 className="mt-4 font-display text-2xl font-bold md:text-4xl">Recognized expertise across the stack</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={a}
              className="glass flex items-center gap-3 rounded-2xl px-5 py-4 transition hover:border-primary/50 hover:shadow-glow"
              style={{ animation: `whyus-float ${6 + (i % 3)}s ease-in-out ${i * 0.25}s infinite` }}
            >
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand shadow-glow">
                <Check className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium">{a}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative mx-auto my-24 max-w-7xl px-6">
        <div className="glass-strong relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20">
          <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative text-center">
            <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
              Ready to Build Something <span className="text-gradient">Extraordinary?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Partner with a team that combines AI innovation, software engineering expertise, and long-term
              business support to deliver impactful digital solutions tailored to your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-3.5 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]">
                <Calendar className="h-4 w-4" /> Schedule a Free Consultation
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="glass group inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-semibold transition hover:bg-white/10">
                <MessageSquare className="h-4 w-4" /> Discuss Your Project
              </Link>
              <Link to="/contact" className="glass group inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-semibold transition hover:bg-white/10">
                <FileText className="h-4 w-4" /> Get a Custom Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProcessTimeline() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  return (
    <div ref={ref} className="glass-strong relative rounded-3xl p-8 md:p-12">
      <div className="relative">
        {/* Track */}
        <div className="absolute left-0 right-0 top-6 h-px bg-white/10 md:top-7" />
        <div
          className="absolute left-0 top-6 h-px bg-gradient-to-r from-primary via-primary-glow to-primary shadow-glow transition-all duration-[2000ms] ease-out md:top-7"
          style={{ width: inView ? "100%" : "0%" }}
        />
        <ol className="relative grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7">
          {PROCESS.map((step, i) => (
            <li key={step} className="group flex flex-col items-center text-center">
              <div
                className="relative grid h-12 w-12 place-items-center rounded-full border border-primary/40 bg-background transition duration-500 group-hover:scale-110 md:h-14 md:w-14"
                style={{
                  boxShadow: inView ? "0 0 30px rgba(21,171,230,0.5)" : "none",
                  background: inView ? "linear-gradient(135deg,#15abe6,#0e7fb0)" : undefined,
                  transitionDelay: `${i * 180}ms`,
                }}
              >
                <span className="font-display text-sm font-bold text-primary-foreground">{i + 1}</span>
              </div>
              <div className="mt-3 text-sm font-semibold">{step}</div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
