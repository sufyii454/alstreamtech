import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials — AIXIS" },
      { name: "description", content: "Hear from clients who partnered with AIXIS to build AI-powered software, automation and digital platforms." },
      { property: "og:title", content: "AIXIS Testimonials" },
      { property: "og:description", content: "What our clients say." },
    ],
  }),
  component: Testimonials,
});

const items = [
  { q: "AIXIS didn't just build our product — they became an extension of our team. Our AI support agent went live in 6 weeks and cut ticket volume by 68%.", n: "Julia Weston", r: "VP Support, NimbusOps" },
  { q: "The best engineering partner we've worked with. Senior team, brutally honest advice, and shipped exactly what our roadmap needed.", n: "Marcus Delaney", r: "CTO, Sylvan Market" },
  { q: "They understood manufacturing before we finished the intro call. Our defect detection model has been running flawlessly for a year.", n: "Ingrid Hoffmann", r: "COO, Northline Manufacturing" },
  { q: "Our telehealth app is now our biggest growth channel. 4.9 stars, 350k monthly users, and rolling out to two new countries next quarter.", n: "Dr. Ravi Menon", r: "CEO, MedBridge" },
  { q: "We automated a 6-tool order-to-cash process in under 90 days. Cycle time went from 3 days to 4 hours. Massive ROI.", n: "Sophie Laurent", r: "Head of Ops, PortLine Freight" },
];

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Client Voices"
        title={<>Trusted by teams <span className="text-gradient">shipping intelligent software</span></>}
        subtitle="Five stories from clients who partnered with AIXIS."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((t, i) => (
            <figure key={t.n} className={`glass-strong relative overflow-hidden rounded-3xl p-8 ${i === 0 ? "md:col-span-2" : ""}`}>
              <Quote className="mb-4 h-10 w-10 text-primary opacity-60" />
              <blockquote className={`font-display leading-snug ${i === 0 ? "text-2xl md:text-3xl" : "text-lg"}`}>
                "{t.q}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand font-bold text-primary-foreground">
                  {t.n.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold">{t.n}</div>
                  <div className="text-sm text-muted-foreground">{t.r}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
