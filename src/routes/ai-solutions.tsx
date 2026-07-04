import { createFileRoute } from "@tanstack/react-router";
import { Brain, Bot, MessageSquare, Cog, Eye, Sparkles, Zap, LineChart, ShieldCheck } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/ai-solutions")({
  head: () => ({
    meta: [
      { title: "AI Solutions & Showcase — Agents, Chatbots, Vision | ALStreamTech" },
      { name: "description", content: "Explore five AI solutions and seven live AI showcases: agents, chatbots, generative AI, computer vision, predictive analytics and more." },
      { property: "og:title", content: "AI Solutions" },
      { property: "og:description", content: "Practical, production-ready AI solutions and showcases." },
    ],
  }),
  component: AISolutions,
});

const solutions = [
  { icon: Brain, t: "Generative AI Applications", d: "Content, code, image and audio generation with strict guardrails and brand tuning." },
  { icon: Bot, t: "Autonomous AI Agents", d: "Multi-step agents that plan, use tools and complete tasks across your systems." },
  { icon: MessageSquare, t: "Conversational AI & Chatbots", d: "Support, sales and workflow bots grounded on your knowledge base." },
  { icon: Eye, t: "Computer Vision", d: "Detection, classification and OCR for real-time visual intelligence." },
  { icon: LineChart, t: "Predictive & Decision Intelligence", d: "Forecasting, scoring and recommendations that drive smarter decisions." },
];

const showcases = [
  { icon: Bot, t: "Support Agent Demo", d: "Live GPT-4 agent grounded on knowledge base with human hand-off." },
  { icon: MessageSquare, t: "Sales Qualifier Bot", d: "Qualifies leads, books meetings, syncs to CRM automatically." },
  { icon: Cog, t: "Workflow Automation Agent", d: "Triggers on new lead → updates CRM → sends email → creates task." },
  { icon: Eye, t: "Visual Defect Detector", d: "Real-time CNN inference identifying manufacturing defects." },
  { icon: Sparkles, t: "Content Studio", d: "Generative content with brand voice, tone and legal guardrails." },
  { icon: LineChart, t: "Churn Predictor", d: "ML model scoring churn risk in real time inside the CRM." },
  { icon: Zap, t: "Doc Intelligence", d: "OCR + LLM pipeline extracting structured data from contracts and invoices." },
];

function AISolutions() {
  return (
    <>
      <PageHero
        eyebrow="AI Solutions"
        title={<>Practical AI, <span className="text-gradient">production ready.</span></>}
        subtitle="Five solution families, seven live showcases. Every one built to run in production with security, monitoring and human-in-the-loop from day one."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Solutions" title={<>Five AI capabilities <span className="text-gradient">we deliver</span></>} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ icon: Icon, t, d }) => (
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
        <SectionHeading eyebrow="Showcase" title={<>Seven AI showcases <span className="text-gradient">you can try</span></>} description="Interactive demos we ship for prospects — a taste of what's possible for your team." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {showcases.map(({ icon: Icon, t, d }, i) => (
            <div key={t} className="glass-strong group relative overflow-hidden rounded-2xl p-6">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/30 blur-3xl transition group-hover:bg-primary/50" />
              <div className="relative">
                <div className="text-xs font-mono text-primary">0{i + 1} / 07</div>
                <Icon className="mt-4 h-8 w-8 text-primary drop-shadow-[0_0_12px_rgba(21,171,230,0.7)]" />
                <div className="mt-4 font-display text-lg font-semibold">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                <button className="mt-4 rounded-full glass px-4 py-1.5 text-xs font-semibold hover:bg-white/10">Request demo</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="glass-strong flex flex-col items-start gap-4 rounded-3xl p-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <ShieldCheck className="h-10 w-10 text-primary" />
            <div>
              <div className="font-display text-xl font-semibold">Responsible AI, by default</div>
              <p className="text-sm text-muted-foreground">Grounded models, prompt injection defenses, PII redaction, audit logs and human review.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
