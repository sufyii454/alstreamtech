import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative mx-auto my-24 max-w-7xl px-6">
      <div className="glass-strong relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20">
        <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
              Ready to contact
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
              Ready to Build the <span className="text-gradient">Future with AI?</span>{" "}
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Discuss your project with our experts and discover how intelligent software can transform your business.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              to="/contact"
              className="group flex items-center justify-between rounded-2xl bg-gradient-brand px-6 py-5 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]"
            >
              <span className="flex items-center gap-3">
                <Calendar className="h-5 w-5" /> Book a Free Consultation
              </span>
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="glass group flex items-center justify-between rounded-2xl px-6 py-5 font-semibold transition hover:bg-white/10"
            >
              <span>Explore Our Services </span>
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
