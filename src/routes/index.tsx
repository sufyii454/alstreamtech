import { motion } from "motion/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Calendar, Sparkles, Brain, Bot, Zap, Cloud, Code2, Smartphone,
  BarChart3, ShieldCheck, Rocket, Users, Award, CheckCircle2,
} from "lucide-react";
import { ParticleNetwork } from "../components/ParticleNetwork";
import { RotatingText } from "../components/RotatingText";
import { CTASection } from "../components/CTASection";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/")({ component: Home });

const trustIndicators = [
  { icon: Award, label: "50+ Projects Delivered" },
  { icon: Brain, label: "AI & Software Experts" },
  { icon: ShieldCheck, label: "Enterprise-Grade Solutions" },
  { icon: Rocket, label: "End-to-End Development" },
];

const services = [
  { icon: Brain, title: "AI Development", desc: "Custom ML models, LLM apps, generative AI, and agents built for real business outcomes." },
  { icon: Code2, title: "Custom Software", desc: "Bespoke platforms and enterprise applications tailored to your workflows." },
  { icon: Smartphone, title: "Web & Mobile Apps", desc: "Fast, scalable, delightful apps across iOS, Android and the web." },
  { icon: Bot, title: "AI Chatbots & Agents", desc: "Conversational AI that handles support, sales, and complex workflows 24/7." },
  { icon: Zap, title: "Business Automation", desc: "Replace repetitive work with intelligent automation across your entire stack." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Infrastructure that scales — AWS, Azure, GCP, Kubernetes and Terraform." },
  { icon: BarChart3, title: "Data & Analytics", desc: "Turn data into insight with warehouses, dashboards, and predictive analytics." },
  { icon: ShieldCheck, title: "AI Integration", desc: "Weave AI into your existing systems securely and reliably." },
];

const stats = [
  { v: "50+", l: "Projects Delivered" },
  { v: "100+", l: "AI Solutions Shipped" },
  { v: "98%", l: "Client Satisfaction" },
  { v: "12+", l: "Industries Served" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-64px)] overflow-hidden">
        <div className="absolute inset-0 opacity-80"><ParticleNetwork density={80} /></div>
        <div className="absolute inset-0 ai-grid opacity-25" />
        <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-20 md:pt-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary animate-fade-up">
              <Sparkles className="h-3.5 w-3.5" /> AI-Powered Software Development
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
              Build Smarter Software <br />
              Powered by <span className="text-gradient">Artificial Intelligence</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground animate-fade-up">
              We design and develop AI-powered software, intelligent automation systems, custom web
              applications, mobile solutions and enterprise platforms that help businesses scale faster
              and operate smarter.
            </p>
            <div className="mt-6 text-xl md:text-2xl">
              <RotatingText
                prefix="We build"
                words={["AI Agents", "AI Chatbots", "SaaS Platforms", "Enterprise Apps", "Mobile Apps", "Automation Systems"]}
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="group flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-semibold text-primary-foreground shadow-glow transition hover:scale-105">
                <Calendar className="h-4 w-4" /> Book a Free Consultation
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="glass rounded-full px-6 py-3.5 font-semibold transition hover:bg-white/10">
                View Our Services
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {trustIndicators.map(({ icon: Icon, label }) => (
                <div key={label} className="glass flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs">
                  <Icon className="h-4 w-4 shrink-0 text-primary" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:block">
            <AISphere />
          </div>
        </div>

        {/* Client marquee */}
        <div className="relative mt-6 border-y border-white/5 bg-background/40 py-6 backdrop-blur">
          <div className="mb-3 text-center text-xs uppercase tracking-widest text-muted-foreground">Trusted by teams building the future</div>
          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee gap-16 px-6 opacity-70">
              {[...Array(2)].flatMap((_, i) =>
                ["OpenAI", "Anthropic", "AWS", "Google Cloud", "Microsoft Azure", "NVIDIA", "Databricks", "Snowflake", "Vercel", "Stripe"].map(n => (
                <span key={n + i} className="font-display text-lg font-semibold text-foreground/50 transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_10px_rgba(21,171,230,0.85)] cursor-default">{n}</span>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="glass-strong grid grid-cols-2 gap-6 rounded-3xl p-10 md:grid-cols-4">
          {stats.map(s => (
            <div key={s.l} className="text-center">
              <div className="font-display text-4xl font-bold text-gradient md:text-5xl">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="What we do"
          title={<>Full-stack expertise, <span className="text-gradient">AI at the core</span></>}
          description="Eight core services covering everything from ideation to deployment, and beyond."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:animate-pulse-glow">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="font-display text-lg font-semibold">{title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition group-hover:opacity-100">
                Learn more <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10">
            Explore all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why us teaser */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading center={false} eyebrow="Why choose us" title={<>The strategic partner for <span className="text-gradient">AI transformation</span></>} description="We combine deep engineering with AI-first thinking to deliver measurable outcomes — not just deliverables." />
            <ul className="space-y-3">
              {[
                "AI-first product strategy across every engagement",
                "End-to-end teams: design, engineering, ML, DevOps",
                "Enterprise-grade security and scalability by default",
                "Long-term support beyond launch",
              ].map(f => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link to="/why-us" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              See why teams choose AIXIS <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="glass-strong rounded-3xl p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Users, k: "Senior team", v: "10+ years avg" },
                { icon: Brain, k: "AI models", v: "GPT, Claude, Llama, custom" },
                { icon: ShieldCheck, k: "Security", v: "SOC 2 practices" },
                { icon: Rocket, k: "Delivery", v: "Agile, 2-week sprints" },
              ].map(({ icon: Icon, k, v }) => (
                <div key={k} className="glass rounded-2xl p-5">
                  <Icon className="mb-3 h-6 w-6 text-primary" />
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{k}</div>
                  <div className="mt-1 font-semibold">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function AISphere() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.22 295 / 0.7), oklch(0.78 0.18 200 / 0.3) 50%, transparent 70%)",
        }}
      />
      {/* Rotating rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border"
          style={{
            borderColor: i === 0 ? "oklch(0.78 0.18 200 / 0.4)" : i === 1 ? "oklch(0.7 0.22 295 / 0.35)" : "oklch(0.7 0.27 330 / 0.3)",
            transform: `scale(${1 - i * 0.13})`,
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i === 0 ? "oklch(0.82 0.16 200)" : i === 1 ? "oklch(0.7 0.22 295)" : "oklch(0.78 0.25 330)",
              boxShadow: "0 0 12px currentColor",
              top: "-4px",
              left: "50%",
            }}
          />
        </motion.div>
      ))}
      {/* Core sphere */}
      <motion.div
        className="absolute inset-[18%] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, oklch(0.9 0.1 200), oklch(0.55 0.25 295) 45%, oklch(0.25 0.15 285) 75%, oklch(0.15 0.08 275))",
          boxShadow: "0 0 80px oklch(0.7 0.22 295 / 0.6), inset 0 0 60px oklch(0.4 0.2 250 / 0.5)",
        }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Inner grid lines simulate neural mesh */}
        <div
          className="absolute inset-0 rounded-full opacity-30 mix-blend-screen"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent 0 14px, oklch(0.9 0.1 200 / 0.3) 14px 15px), repeating-linear-gradient(90deg, transparent 0 14px, oklch(0.9 0.1 200 / 0.3) 14px 15px)",
          }}
        />
      </motion.div>
      {/* Floating tech chips */}
      {[
        { label: "GPT", angle: 20, r: 46 },
        { label: "ML", angle: 120, r: 50 },
        { label: "{ }", angle: 210, r: 45 },
        { label: "AI", angle: 310, r: 48 },
      ].map((c, i) => {
        const rad = (c.angle * Math.PI) / 180;
        const x = 50 + Math.cos(rad) * c.r;
        const y = 50 + Math.sin(rad) * c.r;
        return (
          <motion.div
            key={c.label}
            className="absolute glass-strong rounded-xl px-3 py-1.5 text-xs font-mono text-accent"
            style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          >
            {c.label}
          </motion.div>
        );
      })}
    </div>
  );
}
