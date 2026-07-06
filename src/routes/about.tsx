import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Target, Eye, Heart, Users, Rocket, Award, Globe, Sparkles,
  Brain, Cloud, Smartphone, BarChart3, Building2, Cpu, Workflow,
  Code2, Database, Layers, ShieldCheck, GitBranch, Server,
  HeartHandshake, Lightbulb, GraduationCap, HandshakeIcon,
  Stethoscope, Landmark, ShoppingBag, Home as HomeIcon, Truck,
  Factory, Zap, Check, ArrowRight, Calendar, Linkedin, Network,
  MapPin, TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ParticleNetwork } from "../components/ParticleNetwork";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ALStreamTech — AI-First Software & Enterprise Innovation" },
      {
        name: "description",
        content:
          "ALStreamTech builds intelligent digital solutions — AI, automation, cloud, and enterprise software — for businesses ready to scale with modern technology.",
      },
      { property: "og:title", content: "About ALStreamTech — AI-First Software & Enterprise Innovation" },
      { property: "og:description", content: "Meet the team, mission, technologies and industries powering ALStreamTech." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

/* ---------------- Hero visual: animated AI brain / neural core ---------------- */
function AICore() {
  return (
    <div className="relative aspect-square w-full max-w-lg mx-auto">
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="absolute inset-6 rounded-full border border-primary/30 animate-[spin_28s_linear_infinite]" />
      <div className="absolute inset-16 rounded-full border border-primary/20 animate-[spin_18s_linear_infinite_reverse]" />
      <div className="absolute inset-28 rounded-full border border-primary/40" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4ec6f0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#15abe6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="line" x1="0" x2="1">
            <stop offset="0%" stopColor="#15abe6" stopOpacity="0" />
            <stop offset="50%" stopColor="#4ec6f0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#15abe6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="70" fill="url(#core)" />
        {Array.from({ length: 14 }).map((_, i) => {
          const a = (i / 14) * Math.PI * 2;
          const x = 200 + Math.cos(a) * 150;
          const y = 200 + Math.sin(a) * 150;
          return (
            <g key={i}>
              <line x1="200" y1="200" x2={x} y2={y} stroke="url(#line)" strokeWidth="1" />
              <circle cx={x} cy={y} r="4" fill="#4ec6f0">
                <animate attributeName="r" values="3;6;3" dur={`${2 + (i % 5) * 0.4}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </svg>
      {/* Floating tech icons */}
      {[
        { Icon: Brain, top: "6%", left: "44%", d: "0s" },
        { Icon: Cloud, top: "40%", left: "-4%", d: "0.6s" },
        { Icon: Cpu, top: "44%", left: "94%", d: "1.2s" },
        { Icon: Database, top: "84%", left: "18%", d: "1.8s" },
        { Icon: Workflow, top: "84%", left: "68%", d: "2.4s" },
      ].map(({ Icon, top, left, d }, i) => (
        <div
          key={i}
          className="glass absolute flex h-12 w-12 items-center justify-center rounded-2xl shadow-glow animate-float-slow"
          style={{ top, left, animationDelay: d }}
        >
          <Icon className="h-6 w-6 text-primary" />
        </div>
      ))}
    </div>
  );
}

/* ---------------- Animated counter ---------------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - start) / 1400);
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      io.disconnect();
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ---------------- Data ---------------- */
const capabilities = [
  { icon: Brain, t: "AI Solutions", c: "from-sky-500/30 to-blue-600/10" },
  { icon: Workflow, t: "Automation", c: "from-cyan-500/30 to-sky-600/10" },
  { icon: Cloud, t: "Cloud", c: "from-blue-500/30 to-indigo-600/10" },
  { icon: Smartphone, t: "Mobile Apps", c: "from-sky-400/30 to-cyan-600/10" },
  { icon: BarChart3, t: "Analytics", c: "from-teal-500/30 to-sky-600/10" },
  { icon: Building2, t: "Enterprise", c: "from-indigo-500/30 to-blue-600/10" },
];

const expertiseGroups = [
  {
    title: "Artificial Intelligence",
    items: [
      ["Machine Learning", 95], ["Generative AI", 92], ["NLP", 88], ["AI Agents", 90],
    ] as [string, number][],
  },
  {
    title: "Software Development",
    items: [
      ["Web Applications", 96], ["Enterprise Software", 92], ["SaaS Platforms", 94],
    ] as [string, number][],
  },
  {
    title: "Cloud & DevOps",
    items: [
      ["AWS", 93], ["Azure", 90], ["Kubernetes", 88], ["CI/CD", 91],
    ] as [string, number][],
  },
  {
    title: "Data & Analytics",
    items: [
      ["Business Intelligence", 90], ["Predictive Analytics", 88], ["Reporting", 92],
    ] as [string, number][],
  },
];

const techStack = [
  { cat: "AI & Machine Learning", items: ["OpenAI", "Gemini", "Claude", "LangChain", "TensorFlow"] },
  { cat: "Frontend", items: ["React", "Next.js", "Angular", "Vue.js"] },
  { cat: "Backend", items: ["Node.js", "Python", ".NET", "Java"] },
  { cat: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
  { cat: "DevOps", items: ["Docker", "Kubernetes", "Terraform", "Jenkins"] },
  { cat: "Databases", items: ["PostgreSQL", "MongoDB", "SQL Server", "Redis"] },
];

const industries = [
  { icon: Stethoscope, t: "Healthcare", d: "AI diagnostics, patient portals, automation" },
  { icon: Landmark, t: "Finance", d: "Analytics, compliance, automation" },
  { icon: ShoppingBag, t: "Retail", d: "AI recommendations, eCommerce" },
  { icon: HomeIcon, t: "Real Estate", d: "Property management, AI insights" },
  { icon: Truck, t: "Logistics", d: "Tracking, workflow automation" },
  { icon: GraduationCap, t: "Education", d: "Learning platforms, AI tutors" },
  { icon: Factory, t: "Manufacturing", d: "Predictive maintenance, analytics" },
  { icon: Rocket, t: "Startups", d: "MVP development, AI innovation" },
];

const values = [
  { icon: Lightbulb, t: "Innovation", d: "Always exploring new technologies to unlock new value." },
  { icon: Award, t: "Excellence", d: "Delivering premium, high-quality solutions end-to-end." },
  { icon: Eye, t: "Transparency", d: "Open communication and collaborative delivery." },
  { icon: ShieldCheck, t: "Integrity", d: "Building lasting trust through honest partnership." },
  { icon: HeartHandshake, t: "Customer Success", d: "Your success is the only metric that matters." },
  { icon: GraduationCap, t: "Continuous Learning", d: "Constantly adapting to evolving AI and tech." },
];

const partnerReasons = [
  { icon: Brain, t: "AI Expertise", d: "In-house ML researchers and applied AI engineers." },
  { icon: Code2, t: "Software Engineering Excellence", d: "Senior teams shipping production-grade code." },
  { icon: Building2, t: "Enterprise Solutions", d: "Battle-tested architectures for regulated industries." },
  { icon: Layers, t: "Scalable Architecture", d: "Designed to grow from MVP to global scale." },
  { icon: ShieldCheck, t: "Security First", d: "SOC 2 practices, encryption, and hardened auth." },
  { icon: HandshakeIcon, t: "Long-Term Support", d: "Monitoring, iteration and roadmap — well beyond launch." },
];

const team = [
  { n: "Aarav Mehta", r: "CEO & AI Strategy", bio: "12+ yrs building AI products", skills: ["AI Strategy", "GTM"] },
  { n: "Sophia Chen", r: "Head of Engineering", bio: "Ex-FAANG platform engineer", skills: ["Systems", "Cloud"] },
  { n: "Marcus Weber", r: "ML Lead", bio: "PhD in ML, published researcher", skills: ["LLMs", "MLOps"] },
  { n: "Priya Nair", r: "Design Director", bio: "Design leader for AI SaaS", skills: ["UX", "Design Systems"] },
  { n: "David Okonkwo", r: "Cloud Architect", bio: "AWS/Azure certified architect", skills: ["AWS", "K8s"] },
  { n: "Elena Rossi", r: "Product Lead", bio: "Shipped 40+ SaaS products", skills: ["Product", "Growth"] },
  { n: "Jae-won Park", r: "Mobile Lead", bio: "React Native & iOS specialist", skills: ["iOS", "RN"] },
  { n: "Lucia Alvarez", r: "Data Science Lead", bio: "Predictive analytics expert", skills: ["Python", "BI"] },
];

const worldNodes = [
  { x: 22, y: 42, label: "San Francisco" },
  { x: 30, y: 38, label: "New York" },
  { x: 48, y: 34, label: "London" },
  { x: 52, y: 40, label: "Berlin" },
  { x: 56, y: 46, label: "Dubai" },
  { x: 68, y: 52, label: "Bengaluru" },
  { x: 78, y: 48, label: "Singapore" },
  { x: 84, y: 62, label: "Sydney" },
];

/* ---------------- Page ---------------- */
function About() {
  // Mouse parallax for hero
  const heroRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      setParallax({ x, y });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-80"><ParticleNetwork density={60} /></div>
        <div className="absolute inset-0 ai-grid opacity-25" />
        <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary animate-fade-up">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> About ALStreamTech
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
              Building Intelligent{" "}
              <span className="text-gradient">Digital Solutions</span> for the Future
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up">
              We help businesses use AI and modern software to automate operations, improve customer experiences,
              optimize workflows, and create scalable digital products that drive growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up">
              <a
                href="#team"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-3.5 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]"
              >
                <Users className="h-5 w-5" /> Meet Our Team
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <Link
                to="/services"
                className="glass group inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-semibold transition hover:bg-white/10"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div
            style={{
              transform: `translate3d(${parallax.x * 14}px, ${parallax.y * 14}px, 0)`,
              transition: "transform 200ms ease-out",
            }}
          >
            <AICore />
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
          </div>
        </div>
      </section>

      {/* ============ WHO WE ARE ============ */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Who We Are"
              title={<>An AI-first team building the <span className="text-gradient">next generation of software</span></>}
            />
            <div className="space-y-4 text-muted-foreground">
              <p>
                ALStreamTech is a global AI &amp; software company specializing in <span className="text-foreground font-medium">AI development, software engineering, business automation, digital transformation, enterprise solutions,</span> and <span className="text-foreground font-medium">cloud technologies</span>.
              </p>
              <p>
                We exist to help ambitious organizations turn intelligence into leverage — shipping products and platforms that think, adapt and scale with their business.
              </p>
              <p>
                From strategy and design to ML models, cloud platforms and long-term support, one senior team owns every layer of the outcome.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { v: 120, s: "+", l: "Projects" },
                { v: 45, s: "+", l: "Specialists" },
                { v: 12, s: "+", l: "Industries" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-2xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-gradient">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
            <div className="glass-strong relative grid grid-cols-2 gap-4 rounded-[2rem] p-6">
              {capabilities.map(({ icon: Icon, t, c }, i) => (
                <div
                  key={t}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${c} p-5 transition duration-500 hover:-translate-y-1 hover:rotate-[0.5deg] hover:border-primary/50 hover:shadow-glow animate-float-slow`}
                  style={{ animationDelay: `${i * 0.3}s`, animationDuration: `${6 + i}s` }}
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <Icon className="mb-3 h-7 w-7 text-primary" />
                  <div className="font-semibold">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ OUR STORY (kept, refined) ============ */}
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/5 to-transparent" />
        <SectionHeading
          eyebrow="Our Story"
          title={<>From a small studio to a <span className="text-gradient">global AI partner</span></>}
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:block" />
          {[
            { y: "2019", t: "Founded as a boutique engineering studio", d: "A small senior team focused on beautifully engineered software." },
            { y: "2021", t: "Expanded into AI & ML services", d: "Built an in-house ML practice as clients asked us to do more." },
            { y: "2023", t: "Enterprise partnerships & platforms", d: "Delivering AI platforms for Fortune 500 and category-leading startups." },
            { y: "2025", t: "Global distributed team", d: "45+ specialists across SF, London and Bengaluru shipping worldwide." },
          ].map((m, i) => (
            <div key={m.y} className="relative mb-8 pl-0 md:pl-16">
              <div className="absolute left-2 top-2 hidden h-4 w-4 rounded-full bg-primary shadow-glow md:block" style={{ animationDelay: `${i * 0.2}s` }} />
              <div className="glass rounded-2xl p-6 transition hover:border-primary/40">
                <div className="text-xs uppercase tracking-widest text-primary">{m.y}</div>
                <div className="mt-1 font-display text-lg font-semibold">{m.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ MISSION & VISION ============ */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Mission */}
          <div className="glass-strong group relative overflow-hidden rounded-3xl p-10 transition hover:-translate-y-1">
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
            <div className="relative">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow animate-[spin_18s_linear_infinite]">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-3xl font-bold">Our Mission</h3>
              <p className="mt-3 text-muted-foreground">
                Empowering businesses through intelligent technology solutions, AI innovation, automation and scalable software systems.
              </p>
              <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-2/3 bg-gradient-brand shadow-glow" />
              </div>
            </div>
          </div>
          {/* Vision */}
          <div className="glass-strong group relative overflow-hidden rounded-3xl p-10 transition hover:-translate-y-1">
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/30 blur-3xl animate-pulse-glow" />
            <div className="relative">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow">
                <Globe className="h-8 w-8 text-primary-foreground animate-[spin_20s_linear_infinite]" />
              </div>
              <h3 className="font-display text-3xl font-bold">Our Vision</h3>
              <p className="mt-3 text-muted-foreground">
                Building a future where businesses leverage AI and modern technology to unlock limitless opportunities, efficiency and innovation.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["AI", "Cloud", "Automation", "Scale"].map((t) => (
                  <span key={t} className="glass rounded-full px-3 py-1 text-xs text-primary">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section id="team" className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="Team"
          title={<>Meet the Experts <span className="text-gradient">Behind the Innovation</span></>}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((p) => (
            <div key={p.n} className="glass group relative overflow-hidden rounded-2xl p-6 text-center transition hover:-translate-y-1 hover:border-primary/40">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-brand text-2xl font-bold text-primary-foreground shadow-glow">
                {p.n.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="relative font-semibold">{p.n}</div>
              <div className="relative text-xs text-muted-foreground">{p.r}</div>
              <div className="relative mt-3 flex flex-wrap justify-center gap-1">
                {p.skills.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground">{s}</span>
                ))}
              </div>
              <div className="relative mt-3 max-h-0 overflow-hidden text-xs text-muted-foreground transition-all duration-500 group-hover:max-h-24">
                <p>{p.bio}</p>
              </div>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="relative mt-3 inline-flex items-center gap-1 text-xs text-primary hover:underline"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
            </div>
          ))}
        </div>

        {/* Expertise showcase */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {expertiseGroups.map((g) => (
            <div key={g.title} className="glass-strong rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <div className="font-display text-lg font-semibold">{g.title}</div>
              </div>
              <div className="space-y-3">
                {g.items.map(([label, pct]) => (
                  <div key={label}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span>{label}</span>
                      <span className="text-muted-foreground">{pct}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-brand shadow-glow transition-all duration-1000"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ TECHNOLOGIES ============ */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="Technologies"
          title={<>Modern Technologies for <span className="text-gradient">Modern Solutions</span></>}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((g) => (
            <div key={g.cat} className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40">
              <div className="mb-4 flex items-center gap-2 text-primary">
                <Server className="h-4 w-4" />
                <div className="text-xs uppercase tracking-widest">{g.cat}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span
                    key={t}
                    className="group relative cursor-default rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm transition hover:border-primary/50 hover:bg-primary/10 hover:shadow-glow"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="Industries"
          title={<>Industry Expertise That <span className="text-gradient">Delivers Results</span></>}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ icon: Icon, t, d }) => (
            <div key={t} className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
              <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/25" />
              <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="relative font-display text-lg font-semibold">{t}</div>
              <p className="relative mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="Values"
          title={<>The Values That <span className="text-gradient">Drive Everything We Do</span></>}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, t, d }) => (
            <div key={t} className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="relative font-display text-lg font-semibold">{t}</div>
              <p className="relative mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ GLOBAL REACH ============ */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="Global Reach"
          title={<>Serving Businesses <span className="text-gradient">Worldwide</span></>}
        />
        <div className="glass-strong relative overflow-hidden rounded-3xl p-6 md:p-10">
          <div className="relative aspect-[2/1] w-full">
            <div className="ai-grid absolute inset-0 rounded-2xl opacity-40" />
            <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="conn" x1="0" x2="1">
                  <stop offset="0%" stopColor="#15abe6" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#4ec6f0" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#15abe6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {worldNodes.map((a, i) =>
                worldNodes.slice(i + 1).map((b, j) => (
                  <line key={`${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="url(#conn)" strokeWidth="0.15" />
                ))
              )}
              {worldNodes.map((n, i) => (
                <g key={n.label}>
                  <circle cx={n.x} cy={n.y} r="1.4" fill="#4ec6f0">
                    <animate attributeName="r" values="1;2.2;1" dur={`${2 + (i % 4) * 0.5}s`} repeatCount="indefinite" />
                  </circle>
                  <circle cx={n.x} cy={n.y} r="0.6" fill="#fff" />
                </g>
              ))}
            </svg>
            {worldNodes.map((n) => (
              <div
                key={n.label}
                className="absolute -translate-x-1/2 -translate-y-full text-[10px] text-muted-foreground"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                <MapPin className="mx-auto h-3 w-3 text-primary" />
                <span className="whitespace-nowrap">{n.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { l: "Countries", v: 25 },
              { l: "Cities", v: 40 },
              { l: "Clients", v: 120 },
              { l: "Regions", v: 6 },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4 text-center">
                <div className="font-display text-2xl font-bold text-gradient">
                  <Counter to={s.v} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WORK CULTURE ============ */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="Culture"
          title={<>How We <span className="text-gradient">Work Together</span></>}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Users, t: "Team Collaboration", d: "Cross-functional pods pairing tightly with your team." },
            { icon: Lightbulb, t: "Innovation Workshops", d: "Weekly deep-dives into new models and techniques." },
            { icon: Workflow, t: "Project Planning", d: "Clear roadmaps, 2-week sprints, weekly demos." },
            { icon: GitBranch, t: "Development Process", d: "Code review, CI/CD, and observability by default." },
            { icon: GraduationCap, t: "Learning Culture", d: "Continuous learning budgets and research time." },
            { icon: Network, t: "Distributed by Design", d: "Async-first, global team, always shipping." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition group-hover:opacity-100" />
              <Icon className="relative mb-3 h-7 w-7 text-primary" />
              <div className="relative font-display text-lg font-semibold">{t}</div>
              <p className="relative mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ WHY PARTNER ============ */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="Why Partner With Us"
          title={<>Why Businesses <span className="text-gradient">Choose ALStreamTech</span></>}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partnerReasons.map(({ icon: Icon, t, d }) => (
            <div key={t} className="glass-strong group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="font-display text-lg font-semibold">{t}</div>
              </div>
              <p className="text-sm text-muted-foreground">{d}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-primary">
                <Check className="h-4 w-4" /> Built into every engagement
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative mx-auto my-24 max-w-7xl px-6">
        <div className="glass-strong relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-40"><ParticleNetwork density={40} /></div>
          <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-pulse-glow" />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
                Let&apos;s build together
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
                Ready to Build the <span className="text-gradient">Future With AI?</span>
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Let&apos;s discuss how intelligent software, AI solutions and automation can help your business grow and innovate.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-3.5 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]"
                >
                  <Calendar className="h-5 w-5" /> Schedule a Consultation
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="glass group inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-semibold transition hover:bg-white/10"
                >
                  Discuss Your Project
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-3.5 font-semibold transition hover:bg-white/5"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-sm">
                <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-30 blur-3xl animate-pulse-glow" />
                <div className="absolute inset-6 rounded-full border border-primary/30 animate-[spin_22s_linear_infinite]" />
                <div className="absolute inset-14 rounded-full border border-primary/20 animate-[spin_16s_linear_infinite_reverse]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass-strong flex h-24 w-24 items-center justify-center rounded-3xl shadow-glow">
                    <Zap className="h-10 w-10 text-primary" />
                  </div>
                </div>
                {[TrendingUp, Brain, Cloud, Sparkles].map((I, i) => {
                  const a = (i / 4) * Math.PI * 2;
                  const x = 50 + Math.cos(a) * 40;
                  const y = 50 + Math.sin(a) * 40;
                  return (
                    <div
                      key={i}
                      className="glass absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl animate-float-slow"
                      style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.4}s` }}
                    >
                      <I className="h-5 w-5 text-primary" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
