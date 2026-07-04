import { createFileRoute } from "@tanstack/react-router";
import { Brain, Rocket, ShieldCheck, Clock, Sparkles, HeartHandshake, Zap, Layers } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose ALStreamTech — Your AI Software Partner" },
      { name: "description", content: "Discover why leading teams choose ALStreamTech: AI-first thinking, end-to-end delivery, enterprise-grade security, and long-term partnership." },
      { property: "og:title", content: "Why Choose ALStreamTech" },
      { property: "og:description", content: "AI-first, end-to-end, enterprise-grade software development partnership." },
    ],
  }),
  component: WhyUs,
});

const features = [
  { icon: Brain, t: "AI-First Approach", d: "AI isn't an add-on. It's woven into strategy, product, and code from day one — so every solution ships smarter." },
  { icon: Layers, t: "End-to-End Expertise", d: "One team owns strategy, design, engineering, ML, DevOps and analytics. No hand-offs, no gaps." },
  { icon: ShieldCheck, t: "Enterprise-Grade Security", d: "Secure by design: encryption, auth, SOC 2 practices, and rigorous code review on every project." },
  { icon: Rocket, t: "Faster Time-to-Market", d: "Reusable AI accelerators, proven architectures, and 2-week sprints get you shipping quickly." },
  { icon: Clock, t: "Long-Term Support", d: "We don't disappear after launch. Ongoing improvement, monitoring, and evolution are built in." },
  { icon: HeartHandshake, t: "True Partnership", d: "Weekly demos, transparent Slack, roadmaps you own. We work as an extension of your team." },
  { icon: Sparkles, t: "Innovation Baked In", d: "Access to a research team constantly evaluating new models, tools and techniques for your stack." },
  { icon: Zap, t: "Automation Mindset", d: "Wherever possible we replace repetitive work with intelligent automation so your team focuses on value." },
];

const stats = [
  { v: "50+", l: "Projects Delivered" },
  { v: "100+", l: "AI Solutions" },
  { v: "98%", l: "Client Satisfaction" },
  { v: "92%", l: "Client Retention" },
];

function WhyUs() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title={<>Not just <span className="text-gradient">developers</span> — your AI transformation partner</>}
        subtitle="Modern engineering. Practical AI. Long-term partnership. Here's what makes ALStreamTech the team teams keep coming back to."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, t, d }) => (
            <div key={t} className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="font-display text-lg font-semibold">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="glass-strong grid grid-cols-2 gap-6 rounded-3xl p-10 md:grid-cols-4">
          {stats.map(s => (
            <div key={s.l} className="text-center">
              <div className="font-display text-5xl font-bold text-gradient">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading eyebrow="Compared" title={<>Traditional agencies vs. <span className="text-gradient">ALStreamTech</span></>} />
        <div className="glass-strong overflow-hidden rounded-3xl">
          <div className="grid grid-cols-3 border-b border-white/10 bg-white/5">
            <div className="p-5 text-sm font-semibold text-muted-foreground">Capability</div>
            <div className="p-5 text-sm font-semibold text-muted-foreground">Traditional</div>
            <div className="p-5 text-sm font-semibold text-primary">ALStreamTech</div>
          </div>
          {[
            ["AI expertise", "Bolt-on team or subcontracted", "In-house ML & AI research"],
            ["Team structure", "Fragmented hand-offs", "One integrated team"],
            ["Speed to launch", "3–6 months minimum", "MVPs in weeks with accelerators"],
            ["Ongoing support", "Ends at launch", "Long-term roadmap + monitoring"],
            ["Security posture", "Basic best-practice", "Enterprise-grade by default"],
          ].map((row) => (
            <div key={row[0]} className="grid grid-cols-3 border-b border-white/5 last:border-0">
              <div className="p-5 text-sm">{row[0]}</div>
              <div className="p-5 text-sm text-muted-foreground">{row[1]}</div>
              <div className="p-5 text-sm text-primary">{row[2]}</div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
