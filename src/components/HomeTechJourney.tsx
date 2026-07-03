import { motion } from "motion/react";
import {
  Sparkles, Brain, Code2, Server, Cloud, Wrench, Search, Lightbulb,
  Hammer, Zap, Rocket, TrendingUp, Bot, Building2, Smartphone, Layers,
} from "lucide-react";

/* ---------------- Section 1 — Technology Showcase ---------------- */

const techCategories = [
  { icon: Brain, name: "AI", items: ["OpenAI", "Gemini", "Claude", "LangChain"] },
  { icon: Code2, name: "Frontend", items: ["React", "Next.js", "Angular"] },
  { icon: Server, name: "Backend", items: ["Node.js", "Python", ".NET"] },
  { icon: Cloud, name: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
  { icon: Wrench, name: "DevOps", items: ["Docker", "Kubernetes", "Jenkins"] },
];

function TechBadge({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.12, rotate: 2, y: -4 }}
      className="glass-strong group cursor-default rounded-2xl border border-primary/25 px-4 py-2 text-sm font-semibold text-foreground/90 shadow-[0_4px_20px_rgba(21,171,230,0.15)] transition-all duration-300 hover:border-primary/70 hover:text-primary hover:shadow-[0_0_25px_rgba(21,171,230,0.55)]"
    >
      <span className="relative">{label}</span>
    </motion.div>
  );
}

function TechShowcase() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 ai-grid opacity-[0.08]" />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Tech Stack
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
            Technologies Powering <span className="text-gradient">Intelligent Solutions</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            We leverage cutting-edge technologies across AI, frontend, backend, cloud, and DevOps to
            build scalable, secure, and future-ready digital solutions.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map(({ icon: Icon, name, items }, ci) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="glass group relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:border-primary/50 hover:shadow-glow"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition group-hover:opacity-100" />
              <div className="relative mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="font-display text-xl font-semibold">{name}</div>
              </div>
              <div className="relative flex flex-wrap gap-2.5">
                {items.map((t, i) => (
                  <TechBadge key={t} label={t} delay={ci * 0.05 + i * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 2 — Journey Timeline ---------------- */

const stages = [
  { icon: Search, title: "Discovery", desc: "Deep-dive into your business, users and technical landscape." },
  { icon: Lightbulb, title: "Innovation", desc: "Ideating AI-first solutions with proven design patterns." },
  { icon: Hammer, title: "Development", desc: "Engineering scalable, secure, high-performance systems." },
  { icon: Zap, title: "Automation", desc: "Embedding intelligent automation across workflows." },
  { icon: Rocket, title: "Transformation", desc: "Rolling out digital change with adoption and enablement." },
  { icon: TrendingUp, title: "Growth", desc: "Continuous optimization to compound business outcomes." },
];

function JourneyTimeline() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Layered background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(21,171,230,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 ai-grid opacity-[0.06]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="glass inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
            Our Journey
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            From <span className="text-gradient">discovery</span> to sustained growth
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            A proven six-stage journey we run with every client — designed for measurable transformation.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical connection line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-16">
            {stages.map(({ icon: Icon, title, desc }, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.05 * i }}
                  className={`relative grid grid-cols-[40px_1fr] items-start gap-5 md:grid-cols-2 md:gap-10 ${isRight ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  {/* Node column (mobile) / spacer + node (desktop) */}
                  <div className={`relative md:h-full ${isRight ? "md:flex md:justify-start" : "md:flex md:justify-end"}`}>
                    {/* Desktop-side card */}
                    <motion.div
                      whileHover={{ y: -6 }}
                      className={`hidden md:block glass-strong w-full max-w-md rounded-2xl border border-primary/20 p-6 transition hover:border-primary/60 hover:shadow-glow ${isRight ? "" : "md:text-right"}`}
                    >
                      <div className={`mb-3 flex items-center gap-3 ${isRight ? "" : "md:flex-row-reverse"}`}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="font-display text-lg font-semibold">{title}</div>
                      </div>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </motion.div>
                  </div>

                  {/* Center node */}
                  <div className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1], boxShadow: [
                        "0 0 0 0 rgba(21,171,230,0.6)",
                        "0 0 0 12px rgba(21,171,230,0)",
                        "0 0 0 0 rgba(21,171,230,0)",
                      ] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2 }}
                      className="h-4 w-4 rounded-full bg-gradient-brand shadow-[0_0_15px_#15abe6]"
                    />
                  </div>

                  {/* Mobile / opposite column content */}
                  <div className={`md:hidden`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="glass-strong rounded-2xl border border-primary/20 p-5 transition hover:border-primary/60 hover:shadow-glow"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="font-display text-base font-semibold">{title}</div>
                      </div>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </motion.div>
                  </div>

                  {/* Desktop empty column filler (opposite side) */}
                  <div className="hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — Floating Achievement Cards ---------------- */

const achievements = [
  { icon: Brain, title: "AI Solutions", desc: "Custom LLMs, agents, and machine learning platforms." },
  { icon: Cloud, title: "Cloud Expertise", desc: "AWS, Azure, and GCP architects and DevOps leaders." },
  { icon: Building2, title: "Enterprise Software", desc: "Scalable enterprise-grade systems and platforms." },
  { icon: Zap, title: "Automation Specialists", desc: "Intelligent workflows that eliminate repetitive work." },
  { icon: Smartphone, title: "Mobile Applications", desc: "High-performance iOS and Android product teams." },
  { icon: Layers, title: "Custom Platforms", desc: "Bespoke digital platforms tailored to your business." },
];

function FloatingAchievements() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(21,171,230,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(21,171,230,0.1),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 ai-grid opacity-[0.05]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="glass inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
            Achievements
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            Capabilities that <span className="text-gradient">set us apart</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -10 }}
              className="glass-strong group relative overflow-hidden rounded-3xl border border-primary/20 p-7 shadow-[0_10px_40px_rgba(21,171,230,0.1)] transition-all duration-500 hover:border-primary/60 hover:shadow-glow"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                className="relative"
              >
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-primary/15 opacity-40 blur-3xl transition group-hover:opacity-100" />
                <motion.div
                  animate={{ boxShadow: [
                    "0 0 20px rgba(21,171,230,0.35)",
                    "0 0 35px rgba(21,171,230,0.6)",
                    "0 0 20px rgba(21,171,230,0.35)",
                  ] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.15 }}
                  className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand"
                >
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </motion.div>
                <div className="relative font-display text-lg font-semibold">{title}</div>
                <p className="relative mt-2 text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Exported composed sections ---------------- */

export function HomeTechJourney() {
  return (
    <>
      <TechShowcase />
      <JourneyTimeline />
      <FloatingAchievements />
    </>
  );
}
