import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Users, Rocket, Award, Globe, Sparkles } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AIXIS — Our Story, Mission & Team" },
      { name: "description", content: "Meet AIXIS: a team of AI researchers, software engineers, designers and strategists dedicated to building intelligent digital solutions." },
      { property: "og:title", content: "About AIXIS — Our Story, Mission & Team" },
      { property: "og:description", content: "The story, mission, values and people behind AIXIS." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Sparkles, t: "AI-First Thinking", d: "Every project begins with the question: how can intelligence make this better?" },
  { icon: Users, t: "True Partnership", d: "We embed with your team, not just deliver to them." },
  { icon: Award, t: "Craft & Quality", d: "Beautifully engineered software you can build on for years." },
  { icon: Heart, t: "Human-Centered", d: "AI serves people. We keep humans at the center of every product." },
  { icon: Rocket, t: "Move With Speed", d: "Two-week sprints, weekly demos, no ceremony without value." },
  { icon: Globe, t: "Global by Design", d: "Distributed teams building software for a global audience." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Engineers and dreamers building the <span className="text-gradient">next era of software</span></>}
        subtitle="AIXIS is a global AI-first software studio. We help ambitious teams design, build and scale intelligent digital products that move the needle."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading center={false} eyebrow="Our story" title={<>From a small studio to a <span className="text-gradient">global AI partner</span></>} />
            <div className="space-y-4 text-muted-foreground">
              <p>AIXIS was founded on a simple belief: software becomes remarkable when it thinks with you. What started as a boutique engineering studio quickly grew into a full-service AI + software team as clients asked us to do more — from strategy and design to ML models, cloud platforms and long-term support.</p>
              <p>Today we're a distributed team across three continents, delivering everything from AI agents and SaaS platforms to enterprise automation for startups and Fortune 500s alike.</p>
              <p>We're not a big agency. We're a senior team that pairs deeply with yours to ship software that matters.</p>
            </div>
          </div>
          <div className="glass-strong rounded-3xl p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { k: "Founded", v: "2019" },
                { k: "Team size", v: "45+ specialists" },
                { k: "Offices", v: "SF · London · Bengaluru" },
                { k: "Projects", v: "120+ shipped" },
                { k: "Industries", v: "12+" },
                { k: "Retention", v: "92%" },
              ].map(s => (
                <div key={s.k} className="glass rounded-2xl p-5">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.k}</div>
                  <div className="mt-1 font-display text-2xl font-bold text-gradient">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-strong rounded-3xl p-10">
            <Target className="mb-4 h-10 w-10 text-primary" />
            <h3 className="font-display text-2xl font-bold">Our Mission</h3>
            <p className="mt-3 text-muted-foreground">To make every business more intelligent, efficient and human by pairing world-class engineering with practical AI.</p>
          </div>
          <div className="glass-strong rounded-3xl p-10">
            <Eye className="mb-4 h-10 w-10 text-primary" />
            <h3 className="font-display text-2xl font-bold">Our Vision</h3>
            <p className="mt-3 text-muted-foreground">A world where every organization — from startups to enterprises — ships intelligent software that changes their industry.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading eyebrow="Values" title={<>What we <span className="text-gradient">stand for</span></>} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, t, d }) => (
            <div key={t} className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40">
              <Icon className="mb-3 h-7 w-7 text-primary" />
              <div className="font-semibold">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading eyebrow="Team" title={<>Senior specialists, <span className="text-gradient">united by craft</span></>} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "Aarav Mehta", r: "CEO & AI Strategy" },
            { n: "Sophia Chen", r: "Head of Engineering" },
            { n: "Marcus Weber", r: "ML Lead" },
            { n: "Priya Nair", r: "Design Director" },
            { n: "David Okonkwo", r: "Cloud Architect" },
            { n: "Elena Rossi", r: "Product Lead" },
            { n: "Jae-won Park", r: "Mobile Lead" },
            { n: "Lucia Alvarez", r: "Data Science Lead" },
          ].map(p => (
            <div key={p.n} className="glass rounded-2xl p-6 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-brand text-2xl font-bold text-primary-foreground">
                {p.n.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="font-semibold">{p.n}</div>
              <div className="text-xs text-muted-foreground">{p.r}</div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
