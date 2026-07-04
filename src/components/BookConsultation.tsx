import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  Globe,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Lightbulb,
  Target,
  Rocket,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";

const BRAND = "#15ABE6";

const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const MEETING_TYPES = [
  { id: "discovery", label: "Discovery Call", desc: "Intro conversation about your goals", icon: Sparkles },
  { id: "ai", label: "AI Consultation", desc: "Explore AI opportunities for your business", icon: Lightbulb },
  { id: "technical", label: "Technical Consultation", desc: "Architecture, stack & feasibility", icon: Target },
  { id: "planning", label: "Project Planning Session", desc: "Scope, roadmap & timeline", icon: Rocket },
];

const TIMEZONES = ["EST", "PST", "IST", "UTC", "CET", "GMT"];

const BENEFITS = [
  { icon: Sparkles, title: "Free Consultation", desc: "No cost, no obligation — just clarity." },
  { icon: Lightbulb, title: "Expert Guidance", desc: "Talk directly with senior AI & software experts." },
  { icon: Target, title: "Tailored Solutions", desc: "Recommendations mapped to your goals." },
  { icon: Rocket, title: "Strategic Planning", desc: "Leave with a clear next step and roadmap." },
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export function BookConsultation() {
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [meetingType, setMeetingType] = useState<string>("discovery");
  const [timezone, setTimezone] = useState<string>("EST");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstWeekday = new Date(viewYear, viewMonth, 1).getDay();
  const canGoPrev =
    viewYear > today.getFullYear() ||
    (viewYear === today.getFullYear() && viewMonth > today.getMonth());

  const goPrev = () => {
    if (!canGoPrev) return;
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  };
  const goNext = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  };

  const cells: Array<Date | null> = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(viewYear, viewMonth, d));

  const onBook = async () => {
    if (!selectedDate) return toast.error("Please select a date");
    if (!selectedTime) return toast.error("Please select a time slot");
    if (!meetingType) return toast.error("Please choose a meeting type");
    if (!timezone) return toast.error("Please select a timezone");
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  };

  const reset = () => {
    setSelectedDate(null);
    setSelectedTime("");
    setStatus("idle");
  };

  const selectedType = MEETING_TYPES.find((m) => m.id === meetingType);

  return (
    <section
      id="book-consultation"
      className="relative overflow-hidden border-t border-white/5 py-24"
      style={{ ["--brand" as string]: BRAND }}
    >
      <div className="absolute inset-0 ai-grid opacity-10" />
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
            Choose a convenient date, time, and meeting type to connect with our team and discuss your project requirements.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
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
                    className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-[color:var(--brand)]/60 hover:bg-white/[0.06]"
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

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="glass-strong relative rounded-3xl p-6 md:p-8"
            style={{
              boxShadow: `0 20px 60px -20px ${BRAND}33, 0 0 0 1px rgba(255,255,255,0.06) inset`,
            }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div
                  className="mb-5 flex h-20 w-20 items-center justify-center rounded-full"
                  style={{ background: `${BRAND}22` }}
                >
                  <CheckCircle2 className="h-10 w-10" style={{ color: BRAND }} />
                </div>
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  Consultation Scheduled
                </h3>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Your consultation has been scheduled successfully. Our team will contact you shortly.
                </p>
                <div className="mt-6 grid w-full max-w-md gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 text-left text-sm">
                  <Row label="Meeting" value={selectedType?.label ?? ""} />
                  <Row
                    label="Date"
                    value={selectedDate?.toLocaleDateString(undefined, {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }) ?? ""}
                  />
                  <Row label="Time" value={`${selectedTime} (${timezone})`} />
                </div>
                <button
                  onClick={reset}
                  className="mt-8 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold transition hover:bg-white/10"
                >
                  Book another consultation
                </button>
              </div>
            ) : (
              <>
                {/* Meeting type */}
                <div>
                  <Label icon={Sparkles}>Meeting Type</Label>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {MEETING_TYPES.map((m) => {
                      const active = meetingType === m.id;
                      return (
                        <button
                          type="button"
                          key={m.id}
                          onClick={() => setMeetingType(m.id)}
                          className="group relative rounded-2xl border p-4 text-left transition-all"
                          style={{
                            borderColor: active ? BRAND : "rgba(255,255,255,0.1)",
                            background: active ? `${BRAND}14` : "rgba(255,255,255,0.03)",
                            boxShadow: active ? `0 10px 30px -15px ${BRAND}` : undefined,
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="flex h-9 w-9 items-center justify-center rounded-lg transition-transform group-hover:scale-110"
                              style={{ background: `${BRAND}1F` }}
                            >
                              <m.icon className="h-4 w-4" style={{ color: BRAND }} />
                            </div>
                            <div className="text-sm font-semibold">{m.label}</div>
                          </div>
                          <p className="mt-2 text-xs text-muted-foreground">{m.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Calendar */}
                <div className="mt-8">
                  <Label icon={CalendarIcon}>Select a Date</Label>
                  <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={goPrev}
                        disabled={!canGoPrev}
                        className="rounded-lg border border-white/10 p-2 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <div className="text-sm font-semibold">
                        {MONTHS[viewMonth]} {viewYear}
                      </div>
                      <button
                        type="button"
                        onClick={goNext}
                        className="rounded-lg border border-white/10 p-2 transition hover:bg-white/10"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 grid grid-cols-7 gap-1.5 text-center text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {WEEKDAYS.map((d, i) => <div key={i}>{d}</div>)}
                    </div>
                    <div className="mt-2 grid grid-cols-7 gap-1.5">
                      {cells.map((date, i) => {
                        if (!date) return <div key={i} />;
                        const isPast = date < today;
                        const isSelected = selectedDate && sameDay(date, selectedDate);
                        const isToday = sameDay(date, today);
                        return (
                          <button
                            key={i}
                            type="button"
                            disabled={isPast}
                            onClick={() => setSelectedDate(date)}
                            className="relative aspect-square rounded-lg text-sm font-medium transition-all disabled:cursor-not-allowed disabled:opacity-30"
                            style={{
                              background: isSelected ? BRAND : "rgba(255,255,255,0.04)",
                              color: isSelected ? "#fff" : undefined,
                              border: isToday && !isSelected ? `1px solid ${BRAND}80` : "1px solid transparent",
                              boxShadow: isSelected ? `0 8px 20px -10px ${BRAND}` : undefined,
                            }}
                            onMouseEnter={(e) => {
                              if (!isSelected && !isPast) e.currentTarget.style.background = `${BRAND}22`;
                            }}
                            onMouseLeave={(e) => {
                              if (!isSelected && !isPast) e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                            }}
                          >
                            {date.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Time slots */}
                <div className="mt-8">
                  <Label icon={Clock}>Available Time Slots</Label>
                  {!selectedDate ? (
                    <p className="mt-3 rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-4 py-6 text-center text-xs text-muted-foreground">
                      Select a date to see available times
                    </p>
                  ) : (
                    <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                      {TIME_SLOTS.map((t) => {
                        const active = selectedTime === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTime(t)}
                            className="rounded-xl border px-3 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5"
                            style={{
                              borderColor: active ? BRAND : "rgba(255,255,255,0.1)",
                              background: active ? BRAND : "rgba(255,255,255,0.04)",
                              color: active ? "#fff" : undefined,
                              boxShadow: active ? `0 10px 25px -12px ${BRAND}` : undefined,
                            }}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Timezone */}
                <div className="mt-8">
                  <Label icon={Globe}>Time Zone</Label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {TIMEZONES.map((tz) => {
                      const active = timezone === tz;
                      return (
                        <button
                          key={tz}
                          type="button"
                          onClick={() => setTimezone(tz)}
                          className="rounded-full border px-4 py-1.5 text-xs font-semibold transition-all"
                          style={{
                            borderColor: active ? BRAND : "rgba(255,255,255,0.1)",
                            background: active ? `${BRAND}1F` : "rgba(255,255,255,0.03)",
                            color: active ? BRAND : undefined,
                          }}
                        >
                          {tz}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">
                    We'll confirm your booking by email within minutes.
                  </p>
                  <button
                    type="button"
                    onClick={onBook}
                    disabled={status === "loading"}
                    className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                    style={{ background: `linear-gradient(135deg, ${BRAND}, #7C5CFF)` }}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Booking...
                      </>
                    ) : (
                      <>
                        <CalendarIcon className="h-4 w-4" />
                        Book Consultation
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Label({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      <Icon className="h-3.5 w-3.5" style={{ color: BRAND }} />
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <span className="text-sm font-semibold">{value}</span>
    </div>
  );
}
