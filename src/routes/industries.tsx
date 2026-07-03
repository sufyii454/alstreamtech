import { createFileRoute } from "@tanstack/react-router";
import { Stethoscope, Landmark, ShoppingBag, Truck, GraduationCap, Building2, Home, Factory, Plane, Film, Zap, Scale } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — AI & Software | AIXIS" },
      { name: "description", content: "AI-powered software for healthcare, finance, retail, logistics, education, real estate, manufacturing and more." },
      { property: "og:title", content: "Industries — AIXIS" },
      { property: "og:description", content: "Deep expertise across 12+ industries." },
    ],
  }),
  component: Industries,
});

const industries = [
  { icon: Stethoscope, t: "Healthcare", d: "Telehealth, patient portals, HIPAA-grade AI, clinical decision support." },
  { icon: Landmark, t: "Finance & Banking", d: "Risk models, KYC/AML, fraud detection, wealth platforms." },
  { icon: ShoppingBag, t: "Retail & Ecommerce", d: "Recommenders, price optimization, personalized storefronts." },
  { icon: Truck, t: "Logistics & Supply Chain", d: "Route optimization, demand forecasting, order-to-cash automation." },
  { icon: GraduationCap, t: "Education", d: "LMS platforms, adaptive learning, AI tutors, admin automation." },
  { icon: Home, t: "Real Estate", d: "Listing platforms, valuation models, tenant portals." },
  { icon: Factory, t: "Manufacturing", d: "Predictive maintenance, computer vision QA, MES integrations." },
  { icon: Plane, t: "Travel & Hospitality", d: "Booking platforms, dynamic pricing, guest AI assistants." },
  { icon: Film, t: "Media & Entertainment", d: "Content platforms, generative AI studios, recommendation engines." },
  { icon: Zap, t: "Energy & Utilities", d: "IoT dashboards, grid analytics, sustainability reporting." },
  { icon: Scale, t: "Legal", d: "Contract intelligence, e-discovery, secure document workflows." },
  { icon: Building2, t: "Enterprise & SaaS", d: "Internal tools, workflow platforms, embedded analytics." },
];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Deep expertise across <span className="text-gradient">12+ industries</span></>}
        subtitle="We speak your industry's language — regulations, workflows, systems and users. Software that lands on day one."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon: Icon, t, d }) => (
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

      <CTASection />
    </>
  );
}
