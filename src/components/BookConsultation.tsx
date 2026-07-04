import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Lightbulb, Target, Rocket, Clock, CalendarDays } from "lucide-react";

const BRAND = "#15ABE6";
const CALENDLY_URL = "https://calendly.com/rahathsufiya6/30min";
const CALENDLY_EMBED = `${CALENDLY_URL}?hide_gdpr_banner=1&hide_landing_page_details=1&background_color=0b1220&text_color=ffffff&primary_color=15ABE6`;

const BENEFITS = [
  { icon: Sparkles, title: "Free Consultation", desc: "No cost, no obligation — just clarity." },
  { icon: Lightbulb, title: "Expert Guidance", desc: "Talk directly with senior AI & software experts." },
  { icon: Target, title: "Tailored Solutions", desc: "Recommendations mapped to your goals." },
  { icon: Rocket, title: "Strategic Planning", desc: "Leave with a clear next step and roadmap." },
];

export function BookConsultation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Preconnect for faster iframe load
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://calendly.com";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section
      id="book-consultation"
      className="relative overflow-hidden border-t border-white/5 py-24"
      style={{ ["--brand" as string]: BRAND }}
    >
      <div className="absolute inset-0 ai-grid opacity-10" />
      <div
        className="absolute -top-40 -left-20 h-96 w-[36rem] rounded-full opacity-20 blur-[120px]"
        style={{ background: BRAND }}
      />
      <div
        className="absolute -bottom-40 right-0 h-96 w-[36rem] rounded-full opacity-20 blur-[120px]"
        style={{ background: BRAND }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <div
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest"
            style={{ color: BRAND }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: BRAND }} />
            Book Consultation
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            Schedule a Meeting With <span className="text-gradient">Our Experts</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Choose a convenient date and time to connect with our team and discuss your project requirements.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <div className="glass-strong rounded-3xl p-8">
              <h3 className="font-display text-2xl font-bold">Why book a call?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A 30-minute session with our team to explore what's possible — no sales pitch, just answers.
              </p>
              <div className="mt-6 grid gap-4">
                {BENEFITS.map((b, i) => (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:-translate-y-0.5 hover:border-[color:var(--brand)]/60 hover:bg-white/[0.06]"
                    style={{ boxShadow: "0 0 0 0 rgba(21,171,230,0)" }}
                    whileHover={{ boxShadow: `0 12px 30px -18px ${BRAND}` }}
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                      style={{ background: `${BRAND}1F` }}
                    >
                      <b.icon className="h-5 w-5" style={{ color: BRAND }} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{b.title}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{b.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div
              className="glass rounded-3xl p-6"
              style={{ boxShadow: `0 10px 40px -20px ${BRAND}66` }}
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <Clock className="h-3.5 w-3.5" style={{ color: BRAND }} />
                What to expect
              </div>
              <p className="mt-3 text-sm text-foreground/90">
                30-minute video call · Personalized recommendations · Follow-up summary with next steps.
              </p>
            </div>
          </motion.div>

          {/* Right — Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              ref={containerRef}
              className="glass-strong relative overflow-hidden rounded-[24px] p-2 sm:p-3"
              style={{
                border: `1px solid rgba(21,171,230,0.3)`,
                boxShadow: `0 30px 80px -30px ${BRAND}66, 0 0 0 1px rgba(255,255,255,0.05) inset`,
              }}
            >
              {/* header bar */}
              <div className="flex items-center justify-between px-4 pt-3 pb-2">
                <div className="flex items-center gap-2">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ background: `${BRAND}1F` }}
                  >
                    <CalendarDays className="h-4 w-4" style={{ color: BRAND }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Pick a time that works</div>
                    <div className="text-[11px] text-muted-foreground">Powered by Calendly · 30 min</div>
                  </div>
                </div>
                <span
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-widest"
                  style={{ color: BRAND }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: BRAND }} />
                  Live availability
                </span>
              </div>

              {/* iframe wrapper */}
              <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#0b1220]">
                {!loaded && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#0b1220]">
                    <div className="flex flex-col items-center gap-3">
                      <div
                        className="h-10 w-10 animate-spin rounded-full border-2 border-white/10"
                        style={{ borderTopColor: BRAND }}
                      />
                      <p className="text-xs text-muted-foreground">Loading calendar…</p>
                    </div>
                  </div>
                )}
                <iframe
                  title="Schedule a consultation"
                  src={CALENDLY_EMBED}
                  onLoad={() => setLoaded(true)}
                  className="block h-[720px] w-full sm:h-[760px]"
                  style={{ border: "none", background: "transparent" }}
                  loading="lazy"
                />
              </div>

              {/* soft inner glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[24px]"
                style={{
                  boxShadow: `inset 0 0 60px -20px ${BRAND}33`,
                }}
              />
            </div>

            {/* fallback link */}
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Trouble seeing the calendar?{" "}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline-offset-4 hover:underline"
                style={{ color: BRAND }}
              >
                Open booking page →
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
