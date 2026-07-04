import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Selected AI & Software Work | ALStreamTech" },
      { name: "description", content: "A visual portfolio of AI and software projects delivered by ALStreamTech across industries." },
      { property: "og:title", content: "ALStreamTech Portfolio" },
      { property: "og:description", content: "Selected work." },
    ],
  }),
  component: Portfolio,
});

const items = [
  { t: "NimbusOps Support Agent", c: "SaaS · AI Chatbot", g: "from-primary/50 to-accent/40" },
  { t: "Sylvan Marketplace", c: "Marketplace · Custom SaaS", g: "from-accent/40 to-fuchsia-500/30" },
  { t: "Northline Defect Vision", c: "Manufacturing · Computer Vision", g: "from-cyan-400/40 to-primary/40" },
  { t: "MedBridge Telehealth", c: "Healthcare · Mobile", g: "from-emerald-400/40 to-primary/40" },
  { t: "PortLine Automation", c: "Logistics · Automation", g: "from-primary/40 to-indigo-500/30" },
  { t: "Aria Content Studio", c: "Media · Generative AI", g: "from-purple-500/40 to-primary/40" },
];

function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Selected work from the <span className="text-gradient">ALStreamTech studio</span></>}
        subtitle="A visual walk through projects across industries. Every one built by a senior, integrated team."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(it => (
            <a key={it.t} href="/case-studies" className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
              <div className={`absolute inset-0 bg-gradient-to-br ${it.g} ai-grid`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="text-xs uppercase tracking-widest text-primary">{it.c}</div>
                <div className="mt-2 font-display text-2xl font-bold">{it.t}</div>
                <div className="mt-3 flex items-center gap-1 text-sm text-foreground/80">
                  View case study <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
