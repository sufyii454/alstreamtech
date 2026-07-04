import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — AI, Software & Digital Transformation | ALStreamTech" },
      { name: "description", content: "Insights on AI, software architecture, product strategy and digital transformation from the ALStreamTech team." },
      { property: "og:title", content: "ALStreamTech Blog" },
      { property: "og:description", content: "Ideas from the ALStreamTech team." },
    ],
  }),
  component: Blog,
});

const posts = [
  { tag: "AI Agents", t: "Building production-ready AI agents: patterns that actually work", d: "Six architectural patterns we use to keep agentic systems reliable, cheap and observable.", date: "Jun 12, 2026", read: "9 min" },
  { tag: "Engineering", t: "Beyond RAG: hybrid retrieval architectures for enterprise LLMs", d: "Vector search alone isn't enough. Here's how to combine keyword, semantic and graph retrieval.", date: "Jun 04, 2026", read: "12 min" },
  { tag: "Product", t: "The AI adoption playbook for mid-market SaaS", d: "A step-by-step framework we use with founders shipping AI features in weeks, not quarters.", date: "May 28, 2026", read: "7 min" },
  { tag: "Design", t: "Designing UIs for AI: the new interaction primitives", d: "What we've learned designing chat, generative, and agentic interfaces at scale.", date: "May 18, 2026", read: "8 min" },
  { tag: "Case Study", t: "How we cut a client's support cost by 68% in 6 weeks", d: "A behind-the-scenes look at our agent build for NimbusOps.", date: "May 03, 2026", read: "10 min" },
  { tag: "Cloud", t: "Kubernetes for AI workloads: what we've learned", d: "GPU scheduling, cost control, and rollout strategies for production ML services.", date: "Apr 22, 2026", read: "11 min" },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Ideas from the <span className="text-gradient">ALStreamTech team</span></>}
        subtitle="Field notes on AI, engineering, product strategy and digital transformation — written by the people building it."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <article key={p.t} className="glass group relative flex flex-col overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40">
              <div className="mb-4 aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-primary/30 via-accent/30 to-purple-500/20 ai-grid">
                <div className="flex h-full items-end p-4">
                  <div className="glass rounded-full px-3 py-1 text-xs font-semibold text-primary">{p.tag}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.read} read</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              <Link to="/blog" className="mt-auto pt-4 text-sm font-semibold text-primary flex items-center gap-1">
                Read article <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
