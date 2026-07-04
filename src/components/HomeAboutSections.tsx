import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Brain, Code2, Workflow, Rocket, Cloud, Database, Bot, Smartphone, Globe, ShieldCheck,
  ArrowRight, ArrowLeft, Sparkles, Target, Eye, Layers, Heart, Building2, ShoppingBag,
  Truck, GraduationCap, Home, Factory, Store, Lightbulb, CheckCircle2, TrendingUp, Users,
} from "lucide-react";

/* ---------------- Section 1 — Who We Are ---------------- */

const expertiseCards = [
  { icon: Brain, title: "Artificial Intelligence", desc: "Custom AI solutions designed to automate processes, improve efficiency, and drive business growth." },
  { icon: Code2, title: "Software Engineering", desc: "Scalable web, mobile, and enterprise applications built using modern technologies." },
  { icon: Workflow, title: "Business Automation", desc: "Streamlining operations through intelligent workflows and automation platforms." },
  { icon: Rocket, title: "Digital Transformation", desc: "Helping organizations modernize systems, processes, and customer experiences." },
];

const introBlocks = [
  { icon: Sparkles, title: "Who we are", text: "A senior team of AI engineers, product designers, and cloud architects." },
  { icon: Target, title: "What we do", text: "We ship AI-powered software, automations, and digital platforms end-to-end." },
  { icon: Heart, title: "Why we exist", text: "To turn cutting-edge AI into measurable, real-world business outcomes." },
  { icon: Lightbulb, title: "What sets us apart", text: "AI-first strategy, enterprise engineering, and long-term partnership." },
];

const whoStats = [
  { v: "50+", l: "Projects" },
  { v: "100+", l: "AI Solutions" },
  { v: "12+", l: "Industries" },
  { v: "98%", l: "Satisfaction" },
];

function AINetworkVisual() {
  const nodes = [
    { label: "AI", x: 50, y: 50, r: 0 },
    { label: "Cloud", x: 50, y: 10, r: 1 },
    { label: "Data", x: 88, y: 32, r: 1 },
    { label: "Automation", x: 82, y: 78, r: 1 },
    { label: "Mobile", x: 50, y: 92, r: 1 },
    { label: "Web", x: 18, y: 78, r: 1 },
    { label: "Security", x: 12, y: 32, r: 1 },
  ];
  const center = nodes[0];
  return (
    <div className="relative aspect-square w-full max-w-[560px] mx-auto">
      <div className="absolute inset-0 rounded-full blur-3xl opacity-50" style={{ background: "radial-gradient(circle, rgba(21,171,230,0.55), transparent 65%)" }} />
      <div className="absolute inset-6 rounded-full border border-primary/20" />
      <div className="absolute inset-16 rounded-full border border-primary/10" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="linegrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#15abe6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#15abe6" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {nodes.slice(1).map((n, i) => (
          <line
            key={i}
            x1={center.x} y1={center.y} x2={n.x} y2={n.y}
            stroke="url(#linegrad)" strokeWidth="0.35"
            strokeDasharray="1 1.2"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
          </line>
        ))}
      </svg>

      {nodes.map((n, i) => (
        <motion.div
          key={n.label}
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border ${
            n.r === 0
              ? "border-primary/60 bg-gradient-brand text-primary-foreground shadow-glow px-5 py-3 font-display font-bold text-lg"
              : "glass-strong border-primary/25 px-3 py-1.5 text-xs font-semibold"
          }`}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
        >
          {n.label}
          {n.r !== 0 && (
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#15abe6]" />
          )}
        </motion.div>
      ))}

      {/* Floating tech chips */}
      {[
        { label: "OpenAI", x: -6, y: 6 },
        { label: "Python", x: 96, y: 4 },
        { label: "AWS", x: -8, y: 55 },
        { label: "Azure", x: 100, y: 55 },
        { label: "React", x: 12, y: 100 },
        { label: "Node.js", x: 78, y: 102 },
        { label: "Kubernetes", x: 45, y: -6 },
      ].map((c, i) => (
        <motion.div
          key={c.label}
          className="absolute glass rounded-lg px-2.5 py-1 text-[10px] font-mono text-primary border border-primary/30"
          style={{ left: `${c.x}%`, top: `${c.y}%`, transform: "translate(-50%, -50%)" }}
          animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        >
          {c.label}
        </motion.div>
      ))}
    </div>
  );
}

function WhoWeAre() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute inset-0 ai-grid opacity-[0.08]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Who We Are
            </div>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Building <span className="text-gradient">Intelligent Digital Solutions</span> for the Future
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We help businesses accelerate growth through AI development, software engineering,
              intelligent automation, and digital transformation solutions designed for the future.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {introBlocks.map(({ icon: Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  className="glass group rounded-2xl p-4 transition hover:border-primary/40"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary transition group-hover:scale-110" />
                    <span className="text-sm font-semibold">{title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-4 gap-3">
              {whoStats.map(s => (
                <div key={s.l} className="glass rounded-xl p-3 text-center">
                  <div className="font-display text-xl font-bold text-gradient md:text-2xl">{s.v}</div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>

            <Link to="/about" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:scale-105">
              Discover Our Story <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <AINetworkVisual />
          </motion.div>
        </div>

        {/* Expertise cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {expertiseCards.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:animate-pulse-glow">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="font-display text-lg font-semibold">{title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 2 — Mission ---------------- */

function Mission() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(21,171,230,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="glass-strong relative overflow-hidden rounded-3xl p-10 text-center md:p-16"
          style={{
            background:
              "linear-gradient(160deg, rgba(21,171,230,0.14), rgba(255,255,255,0.03) 60%, rgba(21,171,230,0.08))",
            boxShadow: "0 0 80px rgba(21,171,230,0.25), inset 0 0 40px rgba(21,171,230,0.08)",
          }}
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
          <div className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
            <Target className="h-3.5 w-3.5" /> Our Mission
          </div>
          <h2 className="relative mt-6 font-display text-2xl font-bold leading-tight md:text-4xl">
            "Our mission is to empower businesses through{" "}
            <span className="text-gradient">intelligent software, AI innovation,</span> and automation
            solutions that create measurable business impact."
          </h2>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            {["AI Innovation", "Measurable Impact", "Business Empowerment"].map(t => (
              <span key={t} className="glass rounded-full border border-primary/25 px-4 py-1.5 text-xs font-semibold text-primary">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — Vision ---------------- */

const visionPoints = [
  { icon: Rocket, title: "Future-focused Innovation", text: "Constantly exploring emerging AI, cloud, and data frontiers." },
  { icon: Brain, title: "AI-Driven Transformation", text: "Embedding intelligence into every layer of the business." },
  { icon: Users, title: "Long-Term Partnerships", text: "We stay with clients well beyond launch — evolving together." },
  { icon: Globe, title: "Global Impact", text: "Delivering measurable outcomes across industries worldwide." },
];

function Vision() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 ai-grid opacity-[0.06]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
              <Eye className="h-3.5 w-3.5" /> Our Vision
            </div>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
              Shaping a <span className="text-gradient">smarter, connected</span> tomorrow
            </h2>
            <p className="mt-5 text-muted-foreground md:text-lg">
              To be the trusted global partner every ambitious business turns to when transforming
              through AI, intelligent software, and next-generation digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {visionPoints.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                whileHover={{ y: -6 }}
                className="glass-strong group relative overflow-hidden rounded-2xl p-6 transition hover:border-primary/50 hover:shadow-glow"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ background: "linear-gradient(160deg, rgba(21,171,230,0.12), transparent 70%)" }} />
                <div className="relative mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="relative font-display text-lg font-semibold">{title}</div>
                <p className="relative mt-2 text-sm text-muted-foreground">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 4 — Why Clients Choose Us ---------------- */

const whyCards = [
  { icon: Brain, title: "AI-First Approach", desc: "We design solutions with intelligence built into every layer." },
  { icon: TrendingUp, title: "Business-Focused Solutions", desc: "Technology aligned with measurable business outcomes." },
  { icon: Layers, title: "End-to-End Delivery", desc: "From concept to deployment and support." },
  { icon: Rocket, title: "Scalable Architecture", desc: "Built for future growth and expansion." },
  { icon: ShieldCheck, title: "Enterprise Security", desc: "Secure development practices and compliance standards." },
  { icon: Users, title: "Long-Term Partnership", desc: "Ongoing support and innovation after project launch." },
];

function WhyClients() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(21,171,230,0.14),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="glass inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
            Why Choose Us
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            Why clients choose <span className="text-gradient">ALStream Tech</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Six reasons teams trust us to design, build, and scale their most important products.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyCards.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition group-hover:opacity-100" />
              <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="relative font-display text-lg font-semibold">{title}</div>
              <p className="relative mt-2 text-sm text-muted-foreground">{desc}</p>
              <CheckCircle2 className="relative mt-4 h-4 w-4 text-primary opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 5 — Industries We Impact ---------------- */

const industries = [
  { icon: Heart, title: "Healthcare", desc: "AI diagnostics, patient platforms, and clinical workflows." },
  { icon: Building2, title: "Finance", desc: "Risk models, fraud detection, and intelligent trading tools." },
  { icon: ShoppingBag, title: "Retail", desc: "Personalization, inventory AI, and omnichannel commerce." },
  { icon: Truck, title: "Logistics", desc: "Route optimization, tracking, and predictive supply chain." },
  { icon: GraduationCap, title: "Education", desc: "Adaptive learning, LMS platforms, and AI tutors." },
  { icon: Home, title: "Real Estate", desc: "Property intelligence, CRMs, and virtual experiences." },
  { icon: Factory, title: "Manufacturing", desc: "IoT, predictive maintenance, and smart factory systems." },
  { icon: Store, title: "E-commerce", desc: "Recommendation engines, checkout AI, and storefronts." },
  { icon: Rocket, title: "Startups", desc: "MVPs, AI-first products, and rapid scale engineering." },
];

function IndustriesSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  useEffect(() => {
    if (paused) return;
    const el = trackRef.current;
    if (!el) return;
    const id = setInterval(() => {
      if (!el) return;
      const nearEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      if (nearEnd) el.scrollTo({ left: 0, behavior: "smooth" });
      else el.scrollBy({ left: 320, behavior: "smooth" });
    }, 3500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 ai-grid opacity-[0.06]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="glass inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
              Industries
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
              Industries <span className="text-gradient">we impact</span>
            </h2>
            <p className="mt-3 text-muted-foreground md:text-lg">
              Tailored AI and software solutions across every industry we serve.
            </p>
          </div>
          <div className="flex gap-2">
            <button aria-label="Previous" onClick={() => scrollBy(-1)} className="glass grid h-11 w-11 place-items-center rounded-full transition hover:border-primary/50 hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button aria-label="Next" onClick={() => scrollBy(1)} className="glass grid h-11 w-11 place-items-center rounded-full transition hover:border-primary/50 hover:text-primary">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {industries.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ y: -8 }}
              className="glass group relative min-w-[260px] max-w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl p-6 transition hover:border-primary/50 hover:shadow-glow sm:min-w-[300px]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
              <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 transition group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <div className="relative font-display text-lg font-semibold">{title}</div>
              <p className="relative mt-2 text-sm text-muted-foreground">{desc}</p>
              <div className="relative mt-4 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition group-hover:opacity-100">
                Explore <ArrowRight className="h-3 w-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Export composed sections ---------------- */

export function HomeAboutSections() {
  return (
    <>
      <WhoWeAre />
      <Mission />
      <Vision />
      <WhyClients />
      <IndustriesSlider />
    </>
  );
}
