import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, description, center = true }: {
  eyebrow?: string; title: ReactNode; description?: string; center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} mb-14`}>
      {eyebrow && (
        <div className={`glass inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary`}>{eyebrow}</div>
      )}
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-muted-foreground md:text-lg">{description}</p>}
    </div>
  );
}
