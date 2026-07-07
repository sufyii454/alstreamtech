import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, CheckCircle2, Cpu, Building2, TrendingUp, Sparkles } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { getServiceBySlug, services } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found | ALStreamTech" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { service } = loaderData;
    const title = `${service.name} — Services | ALStreamTech`;
    return {
      meta: [
        { title },
        { name: "description", content: service.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: service.summary },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: ServiceNotFound,
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Something went wrong</h1>
      <button
        onClick={() => reset()}
        className="mt-6 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
      >
        Try again
      </button>
    </div>
  ),
});

function ServiceNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-display text-4xl font-bold">Service not found</h1>
      <p className="mt-3 text-muted-foreground">
        The service you're looking for doesn't exist. Explore all of our services below.
      </p>
      <Link
        to="/services"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
      >
        Back to Services <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.name}
        title={
          <>
            {service.tagline.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-gradient">{service.tagline.split(" ").slice(-2).join(" ")}</span>
          </>
        }
        subtitle={service.overview}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
          >
            Schedule Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/services"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
        </div>
        <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="glass-strong flex h-40 w-40 items-center justify-center rounded-3xl shadow-glow">
            <Icon className="h-20 w-20 text-primary" />
          </div>
        </div>
      </PageHero>

      {/* Capabilities & tech */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="What's included"
          title={
            <>
              Core <span className="text-gradient">capabilities & stack</span>
            </>
          }
        />
        <div className="grid gap-6 md:grid-cols-2">
          <DetailBlock title="Key Capabilities" items={service.capabilities} icon={CheckCircle2} />
          <DetailBlock title="Technology Stack" items={service.technologies} icon={Cpu} />
          <DetailBlock title="Industry Applications" items={service.industries} icon={Building2} />
          <DetailBlock title="Common Use Cases" items={service.useCases} icon={Sparkles} />
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Why teams choose us"
          title={
            <>
              Business <span className="text-gradient">benefits</span>
            </>
          }
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {service.benefits.map((b, i) => (
            <div
              key={b.title}
              className="glass-strong group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1"
              style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
              <TrendingUp className="h-6 w-6 text-primary" />
              <div className="mt-3 font-display text-lg font-semibold">{b.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="How we deliver"
          title={
            <>
              A proven <span className="text-gradient">delivery process</span>
            </>
          }
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {service.process.map((p, i) => (
            <div
              key={p.title}
              className="glass relative rounded-2xl p-6"
              style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 80}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand font-display text-sm font-bold text-primary-foreground shadow-glow">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-4 font-display text-lg font-semibold">{p.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Explore more"
          title={
            <>
              Related <span className="text-gradient">services</span>
            </>
          }
        />
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((r) => {
            const RIcon = r.icon;
            return (
              <Link
                key={r.slug}
                to="/services/$slug"
                params={{ slug: r.slug }}
                className="glass-strong group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition group-hover:scale-110">
                  <RIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="mt-4 font-display text-lg font-semibold">{r.name}</div>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{r.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-10 md:p-16">
          <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
          <div className="pointer-events-none absolute -right-32 -bottom-32 h-80 w-80 rounded-full bg-primary-glow/20 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Ready to start your <span className="text-gradient">{service.name}</span> project?
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Talk to our team about your goals, constraints and success metrics — we'll come back with a concrete plan.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
              >
                Schedule Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DetailBlock({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: string[];
  icon: typeof CheckCircle2;
}) {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
        <Icon className="h-4 w-4 text-primary" /> {title}
      </div>
      <ul className="grid gap-2 sm:grid-cols-2">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
