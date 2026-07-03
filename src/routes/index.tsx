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
            <HeroVisual />
          </div>
        </div>

        {/* Client marquee */}
        <div className="relative mt-6 border-y border-white/5 bg-background/40 py-6 backdrop-blur">
          <div className="mb-3 text-center text-xs uppercase tracking-widest text-muted-foreground">Trusted by teams building the future</div>
          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee gap-16 px-6 opacity-70">
              {[...Array(2)].flatMap((_, i) =>
                ["OpenAI", "Anthropic", "AWS", "Google Cloud", "Microsoft Azure", "NVIDIA", "Databricks", "Snowflake", "Vercel", "Stripe"].map(n => (
                  <span key={n + i} className="font-display text-lg font-semibold text-foreground/50">{n}</span>
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

function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-xl">
      {/* Orbits */}
      <div className="absolute inset-0 animate-[spin_40s_linear_infinite] rounded-full border border-white/10" />
      <div className="absolute inset-6 animate-[spin_25s_linear_infinite_reverse] rounded-full border border-primary/20" />
      <div className="absolute inset-12 animate-[spin_18s_linear_infinite] rounded-full border border-accent/20" />
      {/* Core sphere */}
      <div className="absolute inset-1/4 animate-pulse-glow rounded-full bg-gradient-brand blur-2xl opacity-70" />
      <div className="glass-strong absolute inset-1/3 flex items-center justify-center rounded-full">
        <Brain className="h-16 w-16 text-primary drop-shadow-[0_0_20px_rgba(21,171,230,0.8)]" />
      </div>
      {/* Floating chips */}
      {[
        { t: "GPT-4", x: "10%", y: "8%" },
        { t: "Claude", x: "78%", y: "12%" },
        { t: "TensorFlow", x: "4%", y: "70%" },
        { t: "LangChain", x: "82%", y: "72%" },
        { t: "Kubernetes", x: "48%", y: "0%" },
        { t: "AWS", x: "50%", y: "94%" },
      ].map((c, i) => (
        <div key={c.t} className="glass animate-float-slow absolute rounded-xl px-3 py-1.5 text-xs font-semibold text-primary" style={{ left: c.x, top: c.y, animationDelay: `${i * 0.4}s` }}>
          {c.t}
        </div>
      ))}
    </div>
  );
}
