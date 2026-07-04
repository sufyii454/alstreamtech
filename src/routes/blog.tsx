import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, User, Sparkles, MessageSquare } from "lucide-react";
import { PageHero } from "../components/PageHero";
import featuredImg from "../assets/blog-ai-automate.jpg.asset.json";
import chatbotsImg from "../assets/blog-chatbots.jpg.asset.json";
import agentsImg from "../assets/blog-ai-agents-companies.png.asset.json";
import customImg from "../assets/blog-custom-vs-ready.png.asset.json";
import smallBizImg from "../assets/blog-small-business-ai.png.asset.json";
import futureImg from "../assets/blog-future-ai-automation.png.asset.json";
import supportImg from "../assets/blog-ai-customer-support.png.asset.json";

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
    image: chatbotsImg.url,
    summary:
      "AI chatbots help businesses improve customer support, generate leads, automate sales, and provide instant assistance 24/7.",
  },
  {
    category: "Automation",
    title: "AI Agents for Companies: The Future of Smart Workflows",
    author: "ALStreamTech Team",
    date: "June 30, 2026",
    read: "7 min read",
    image: agentsImg.url,
    summary:
      "AI agents are revolutionizing business operations by acting as smart assistants for workflow automation, decision-making, and productivity enhancement.",
  },
  {
    category: "Software Development",
    title: "Custom Software vs Ready-Made Tools",
    author: "ALStreamTech Team",
    date: "June 28, 2026",
    read: "9 min read",
    image: customImg.url,
    summary:
      "Choosing between custom software and ready-made tools depends on scalability, budget, and long-term business goals.",
  },
  {
    category: "Artificial Intelligence",
    title: "How Small Businesses Can Use AI",
    author: "ALStreamTech Team",
    date: "June 25, 2026",
    read: "5 min read",
    image: smallBizImg.url,
    summary:
      "AI is no longer just for large enterprises. Small businesses can now leverage affordable AI tools for automation, analytics, and customer engagement.",
  },
  {
    category: "Automation",
    title: "Future of AI Automation",
    author: "ALStreamTech Team",
    date: "June 21, 2026",
    read: "8 min read",
    image: futureImg.url,
    summary:
      "The future of automation lies in autonomous AI systems capable of managing workflows with minimal human intervention.",
  },
  {
    category: "Customer Support",
    title: "AI in Customer Support",
    author: "ALStreamTech Team",
    date: "June 18, 2026",
    read: "6 min read",
    image: supportImg.url,
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
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 shadow-glow">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-widest text-primary">Featured</span>
            <h2 className="font-display text-2xl font-bold md:text-3xl">Editor's Pick</h2>
          </div>
        </div>

        <article className="glass-strong group relative overflow-hidden rounded-3xl border border-border/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-60" />
          <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />

          <div className="relative grid gap-0 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-t-3xl bg-surface p-4 lg:rounded-l-3xl lg:rounded-tr-none">
              <div className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 lg:h-[420px]">
                <img
                  src={featuredImg.url}
                  alt={featured.title}
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="absolute left-7 top-7 glass rounded-full px-3 py-1 text-xs font-semibold text-primary">
                {featured.category}
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" /> {featured.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {featured.read}
                </span>
              </div>

              <h3 className="mt-5 font-display text-3xl font-bold leading-tight md:text-4xl">
                {featured.title}
              </h3>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                {featured.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/blog"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
                >
                  Read Full Article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <span className="text-xs text-muted-foreground">Premium insights for forward-thinking leaders</span>
              </div>
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
              <div className="relative mb-4 h-[280px] overflow-hidden rounded-2xl bg-[#0D1628] p-2">
                <img src={p.image} alt={p.title} className="h-full w-full object-contain transition duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute left-3 top-3 glass rounded-full px-3 py-1 text-xs font-semibold text-primary">{p.category}</div>
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
