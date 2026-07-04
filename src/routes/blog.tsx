import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, User, Sparkles, MessageSquare } from "lucide-react";
import { PageHero } from "../components/PageHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights, Innovation & AI Trends | ALStreamTech Blog" },
      { name: "description", content: "Expert insights, industry trends, guides, and real-world applications of AI, automation, software development, and digital transformation." },
      { property: "og:title", content: "ALStreamTech Blog — AI, Automation & Digital Transformation" },
      { property: "og:description", content: "Insights and guides from the ALStreamTech team on AI, automation, and software." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blog,
});

const categories = [
  "All",
  "Artificial Intelligence",
  "Automation",
  "Software Development",
  "Cloud & DevOps",
  "Mobile Apps",
  "Data Analytics",
  "Digital Transformation",
  "Customer Support",
];

const popularTopics = ["AI Automation", "Chatbots", "AI Agents", "Cloud Solutions", "Business Automation"];

const featured = {
  category: "Artificial Intelligence",
  title: "How AI Can Automate Business Operations in 2026",
  author: "ALStreamTech Team",
  date: "July 4, 2026",
  read: "8 min read",
  description:
    "Artificial Intelligence is transforming how businesses operate by automating repetitive tasks, reducing operational costs, and improving overall efficiency. From customer support to workflow management, AI enables companies to scale faster and smarter.",
};

const posts = [
  {
    category: "Artificial Intelligence",
    title: "Benefits of AI Chatbots for Modern Businesses",
    author: "ALStreamTech Team",
    date: "July 2, 2026",
    read: "6 min read",
    summary:
      "AI chatbots help businesses improve customer support, generate leads, automate sales, and provide instant assistance 24/7.",
  },
  {
    category: "Automation",
    title: "AI Agents for Companies: The Future of Smart Workflows",
    author: "ALStreamTech Team",
    date: "June 30, 2026",
    read: "7 min read",
    summary:
      "AI agents are revolutionizing business operations by acting as smart assistants for workflow automation, decision-making, and productivity enhancement.",
  },
  {
    category: "Software Development",
    title: "Custom Software vs Ready-Made Tools",
    author: "ALStreamTech Team",
    date: "June 28, 2026",
    read: "9 min read",
    summary:
      "Choosing between custom software and ready-made tools depends on scalability, budget, and long-term business goals.",
  },
  {
    category: "Artificial Intelligence",
    title: "How Small Businesses Can Use AI",
    author: "ALStreamTech Team",
    date: "June 25, 2026",
    read: "5 min read",
    summary:
      "AI is no longer just for large enterprises. Small businesses can now leverage affordable AI tools for automation, analytics, and customer engagement.",
  },
  {
    category: "Automation",
    title: "Future of AI Automation",
    author: "ALStreamTech Team",
    date: "June 21, 2026",
    read: "8 min read",
    summary:
      "The future of automation lies in autonomous AI systems capable of managing workflows with minimal human intervention.",
  },
  {
    category: "Customer Support",
    title: "AI in Customer Support",
    author: "ALStreamTech Team",
    date: "June 18, 2026",
    read: "6 min read",
    summary:
      "AI-powered support systems are enhancing customer experiences through chatbots, ticket automation, and intelligent response systems.",
  },
];

function CategoryVisual({ label }: { label: string }) {
  return (
    <div className="relative flex h-full w-full items-end p-4 ai-grid bg-gradient-to-br from-primary/40 via-accent/25 to-purple-500/30">
      <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/30 blur-3xl" />
      <div className="glass rounded-full px-3 py-1 text-xs font-semibold text-primary">{label}</div>
    </div>
  );
}

function Blog() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="ALStreamTech Blog"
        title={
          <>
            Insights, Innovation & <span className="text-gradient">AI Trends</span>
          </>
        }
        subtitle="Explore expert insights, industry trends, practical guides, and real-world applications of AI, automation, software development, and digital transformation."
      >
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Popular topics:</span>
          {popularTopics.map((t) => (
            <span
              key={t}
              className="glass rounded-full px-3 py-1.5 text-xs font-medium text-foreground/80 transition hover:border-primary/50 hover:text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Featured Article */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="font-display text-2xl font-bold md:text-3xl">Featured Article</h2>
        </div>
        <article className="glass-strong group relative overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:shadow-glow">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-60" />
          <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
          <div className="relative grid gap-0 lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-[420px]">
              <CategoryVisual label={featured.category} />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><User className="h-3 w-3" /> {featured.author}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {featured.read}</span>
              </div>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-4 text-muted-foreground md:text-lg">{featured.description}</p>
              <Link
                to="/blog"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
              >
                Read Full Article <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* Categories filter */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="mb-6">
          <h2 className="font-display text-2xl font-bold md:text-3xl">Browse by Category</h2>
          <p className="mt-2 text-sm text-muted-foreground">Filter articles by the topics that matter to your business.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={
                "rounded-full px-4 py-2 text-sm font-medium transition " +
                (active === c
                  ? "bg-gradient-brand text-primary-foreground shadow-glow"
                  : "glass text-foreground/80 hover:border-primary/40 hover:text-primary")
              }
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Latest Articles grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">Latest Articles</h2>
            <p className="mt-2 text-sm text-muted-foreground">Fresh perspectives from the ALStreamTech team.</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="glass group relative flex flex-col overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="mb-4 aspect-video overflow-hidden rounded-xl">
                <CategoryVisual label={p.category} />
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><User className="h-3 w-3" /> {p.author}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.read}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug transition group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              <Link to="/blog" className="mt-auto pt-4 text-sm font-semibold text-primary flex items-center gap-1">
                Read article <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative mx-auto my-24 max-w-7xl px-6">
        <div className="glass-strong relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20">
          <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
              Need Help <span className="text-gradient">Implementing These Ideas?</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Turn insights into real business results with AI, automation, and software solutions tailored to your needs.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-4 font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
              >
                <Calendar className="h-5 w-5" /> Schedule Consultation
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="glass group inline-flex items-center gap-2 rounded-2xl px-6 py-4 font-semibold transition hover:bg-white/10"
              >
                <MessageSquare className="h-5 w-5" /> Discuss Your Project
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
