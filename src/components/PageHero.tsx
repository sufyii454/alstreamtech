import { ParticleNetwork } from "./ParticleNetwork";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: {
  eyebrow?: string; title: ReactNode; subtitle?: string; children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 opacity-70"><ParticleNetwork density={45} /></div>
      <div className="absolute inset-0 ai-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        {eyebrow && (
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary animate-fade-up">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> {eyebrow}
          </div>
        )}
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
          {title}
        </h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
