import { createFileRoute } from "@tanstack/react-router";
import { Compass, PenTool, LayoutGrid, Code2, TestTube2, Rocket, LifeBuoy, TrendingUp } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — 8 Phases from Idea to Growth | ALStreamTech" },
      { name: "description", content: "Discovery, strategy, design, development, testing, deployment, support and growth — ALStreamTech's proven 8-phase delivery process." },
      { property: "og:title", content: "ALStreamTech Process" },
      { property: "og:description", content: "Eight phases from idea to growth." },
    ],
  }),
  component: Process,
});

const phases = [
  { icon: Compass, t: "Discovery", d: "Deep-dive workshops. We map goals, users, constraints and success metrics." },
  { icon: PenTool, t: "Strategy", d: "Roadmap, architecture, AI opportunities, and phased delivery plan." },
  { icon: LayoutGrid, t: "Design", d: "UX flows, product design, prototypes validated with real users." },
  { icon: Code2, t: "Development", d: "Two-week sprints, weekly demos, transparent Slack and roadmaps." },
  { icon: TestTube2, t: "Testing", d: "Automated + manual QA, security review, load testing, AI model evals." },
  { icon: Rocket, t: "Deployment", d: "CI/CD, infrastructure-as-code, observability from day one." },
  { icon: LifeBuoy, t: "Support", d: "24/7 monitoring, incident response, and continuous improvement." },
  { icon: TrendingUp, t: "Growth", d: "Analytics-led iteration and new AI capabilities as your product scales." },
];

function Process() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title={<>Eight phases from <span className="text-gradient">idea to growth</span></>}
        subtitle="A repeatable process built around transparency, speed, and long-term ownership of what we ship together."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative">
          <div className="pointer-events-none absolute left-8 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />
          <div className="space-y-10">
            {phases.map(({ icon: Icon, t, d }, i) => (
              <div key={t} className={`relative flex flex-col gap-6 md:flex-row md:items-center ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow md:absolute md:left-1/2 md:-translate-x-1/2">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className={`glass-strong ml-24 flex-1 rounded-2xl p-6 md:ml-0 md:max-w-md ${i % 2 ? "md:mr-[calc(50%+3rem)]" : "md:ml-[calc(50%+3rem)]"}`}>
                  <div className="text-xs font-mono uppercase tracking-widest text-primary">Phase 0{i + 1}</div>
                  <div className="mt-1 font-display text-xl font-semibold">{t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
