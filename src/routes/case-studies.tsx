import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, TrendingUp } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — AI & Software Projects | AIXIS" },
      { name: "description", content: "Explore six real-world projects: AI agents, SaaS platforms, automation systems and mobile apps built by AIXIS." },
      { property: "og:title", content: "AIXIS Case Studies" },
      { property: "og:description", content: "Real projects, measurable outcomes." },
    ],
  }),
  component: CaseStudies,
});

const projects = [
  {
    tag: "AI Chatbot",
    title: "24/7 support agent for a global SaaS",
    client: "NimbusOps",
    industry: "SaaS · B2B",
    challenge: "Support team overwhelmed by tier-1 tickets, response times slipping past 12 hours.",
    solution: "Built a GPT-4 powered agent grounded on their docs and CRM, with human hand-off for complex issues.",
    results: [["68%", "tickets auto-resolved"], ["9 min", "avg response"], ["$1.4M", "annual savings"]],
    color: "from-primary/40 to-accent/40",
  },
  {
    tag: "Custom SaaS",
    title: "Marketplace platform serving 200k+ users",
    client: "Sylvan Market",
    industry: "Marketplace",
    challenge: "Legacy platform couldn't scale beyond 20k users; monolith blocked feature velocity.",
    solution: "Re-platformed on a modular Next.js + Node microservice stack with AI-powered search & recommendations.",
    results: [["10×", "user growth"], ["2s", "page load"], ["+43%", "conversion"]],
    color: "from-accent/40 to-primary/40",
  },
  {
    tag: "Computer Vision",
    title: "Real-time defect detection on production line",
    client: "Northline Manufacturing",
    industry: "Manufacturing",
    challenge: "Manual QA missed 8% of defects; expensive recalls impacting margins.",
    solution: "Deployed a custom CNN model on edge devices with a live dashboard for QA leads.",
    results: [["99.2%", "detection accuracy"], ["4×", "faster QA"], ["–$3M", "recall costs"]],
    color: "from-primary/30 to-purple-500/30",
  },
  {
    tag: "Mobile App",
    title: "Telehealth app for a national provider",
    client: "MedBridge",
    industry: "Healthcare",
    challenge: "Fragmented patient experience across web, phone and multiple clinics.",
    solution: "Cross-platform Flutter app with AI symptom triage, video visits and provider handoff.",
    results: [["4.9★", "app store rating"], ["350k", "monthly users"], ["–52%", "no-shows"]],
    color: "from-emerald-400/30 to-primary/30",
  },
  {
    tag: "Automation",
    title: "Order-to-cash automation for a logistics leader",
    client: "PortLine Freight",
    industry: "Logistics",
    challenge: "Order intake, invoicing and CRM updates handled manually across 6 tools.",
    solution: "Built an event-driven automation layer connecting SAP, Salesforce, DocuSign and NetSuite.",
    results: [["90%", "manual work removed"], ["3 days → 4 hours", "cycle time"], ["100%", "audit compliance"]],
    color: "from-primary/40 to-cyan-400/30",
  },
  {
    tag: "Generative AI",
    title: "AI content studio for a global media brand",
    client: "Aria Media",
    industry: "Media",
    challenge: "Editorial team needed to scale personalized content across 30+ markets.",
    solution: "Built an internal generative AI studio for briefs, drafts, translations and image generation with editorial guardrails.",
    results: [["12×", "content velocity"], ["30", "markets served"], ["–70%", "production cost"]],
    color: "from-fuchsia-400/30 to-primary/30",
  },
];

function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={<>Real projects. <span className="text-gradient">Measurable outcomes.</span></>}
        subtitle="Six recent engagements across SaaS, healthcare, manufacturing, logistics and media."
      />

      <section className="mx-auto max-w-7xl space-y-8 px-6 py-24">
        {projects.map((p, i) => (
          <article key={p.title} className="glass-strong group relative overflow-hidden rounded-3xl p-8 md:p-12 transition hover:border-primary/40">
            <div className={`pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br ${p.color} blur-3xl opacity-40`} />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-start">
              <div>
                <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">{p.tag}</div>
                <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">0{i + 1} — {p.industry}</div>
                <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">{p.title}</h3>
                <div className="mt-1 text-sm text-muted-foreground">Client · {p.client}</div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">Challenge</div>
                  <p className="mt-1 text-muted-foreground">{p.challenge}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">Solution</div>
                  <p className="mt-1 text-muted-foreground">{p.solution}</p>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {p.results.map(([v, l]) => (
                    <div key={l} className="glass rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center gap-1 font-display text-xl font-bold text-gradient md:text-2xl">
                        <TrendingUp className="h-4 w-4 text-primary" /> {v}
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <CTASection />
    </>
  );
}
