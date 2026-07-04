import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  MessageCircle,
  Loader2,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "../components/PageHero";
import { BookConsultation } from "../components/BookConsultation";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AIXIS — Book a Free AI Consultation" },
      {
        name: "description",
        content:
          "Talk to AIXIS about AI, custom software, chatbots, mobile apps, automation and cloud. Book a free consultation — we reply within one business day.",
      },
      { property: "og:title", content: "Contact AIXIS" },
      {
        property: "og:description",
        content: "Let's build something amazing together.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const BRAND = "#15ABE6";

const WHATSAPP_NUMBER = "17325887501"; // digits only
const EMAIL = "info@alstreamtech.com";
const PHONE_DISPLAY = "+1 (732) 588-7501";
const PHONE_TEL = "+17325887501";
const ADDRESS =
  "409 Joyce Kilmer Avenue, Suite 315, New Brunswick, NJ 08901";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

const SERVICES = [
  "AI Development",
  "AI Chatbots",
  "Business Automation",
  "Custom Software",
  "Web Development",
  "Mobile Apps",
  "Cloud & DevOps",
  "Data Analytics",
];

const BUDGETS = [
  "Under $5,000",
  "$5,000–$10,000",
  "$10,000–$25,000",
  "$25,000–$50,000",
  "$50,000+",
];

function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    else if (form.name.trim().length > 100) e.name = "Name is too long";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Enter a valid email";
    if (form.phone && form.phone.length > 30) e.phone = "Phone is too long";
    if (!form.service) e.service = "Choose a service";
    if (!form.budget) e.budget = "Choose a budget";
    if (!form.message.trim()) e.message = "Tell us a bit about your project";
    else if (form.message.trim().length < 10)
      e.message = "Please add a little more detail";
    else if (form.message.length > 2000) e.message = "Message is too long";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      toast.error("Please fix the highlighted fields");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8d4a68ab-4716-4d75-9a9b-e07f8be1467c",
          subject: `New consultation request from ${form.name}`,
          from_name: "AIXIS Website",
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          service: form.service,
          budget: form.budget,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Submission failed");
      setStatus("success");
      setForm(INITIAL);
      toast.success("Thanks — we'll be in touch within one business day.");
    } catch (err) {
      setStatus("error");
      toast.error(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  };


  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Let's build{" "}
            <span className="text-gradient">something amazing</span> together
          </>
        }
        subtitle="Whether you're planning an AI solution, custom software platform, chatbot, mobile application, automation system, or cloud project, we'd love to hear from you."
      >
        <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up">
          <a
            href="#contact-section"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]"
            style={{ background: `linear-gradient(135deg, ${BRAND}, #7C5CFF)` }}
          >
            <Sparkles className="h-4 w-4" />
            Book a Free Consultation
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand)]/40 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-[color:var(--brand)] hover:bg-white/10"
            style={{ ["--brand" as string]: BRAND }}
          >
            <MessageCircle className="h-4 w-4" style={{ color: BRAND }} />
            Chat on WhatsApp
          </a>
        </div>
      </PageHero>

      {/* Two-Column Contact Section */}
      <section
        id="contact-section"
        className="relative overflow-hidden border-t border-white/5 py-24"
      >
        <div className="absolute inset-0 ai-grid opacity-10" />
        <div
          className="absolute -top-40 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
          style={{ background: BRAND }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
            {/* Left: Get in Touch */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div
                className="glass inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest"
                style={{ color: BRAND }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: BRAND }} />
                Get in touch
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
                Let's start a conversation
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Reach out through your preferred channel. Whether you have a question, project, or partnership idea, we're here to help.
              </p>

              <div className="mt-8 grid gap-4">
                <ContactInfoItem
                  icon={Mail}
                  title="Email"
                  value={EMAIL}
                  href={`mailto:${EMAIL}`}
                />
                <ContactInfoItem
                  icon={Phone}
                  title="Phone"
                  value={PHONE_DISPLAY}
                  href={`tel:${PHONE_TEL}`}
                />
                <ContactInfoItem
                  icon={MessageCircle}
                  title="WhatsApp"
                  value="Message us instantly"
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  external
                />
                <ContactInfoItem
                  icon={MapPin}
                  title="Location"
                  value={ADDRESS}
                  href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                  external
                />
                <ContactInfoItem
                  icon={Clock}
                  title="Working Hours"
                  value={
                    <>
                      Monday – Friday
                      <br />
                      9 AM – 6 PM
                    </>
                  }
                />
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="glass-strong relative h-fit rounded-3xl p-6 md:p-10"
              style={{
                boxShadow: `0 20px 60px -20px ${BRAND}33, 0 0 0 1px rgba(255,255,255,0.06) inset`,
              }}
            >
              <div className="mb-6">
                <div
                  className="glass inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest"
                  style={{ color: BRAND }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: BRAND }} />
                  Project Inquiry
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold md:text-3xl">
                  Tell us about your project
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share a few details and we'll come back with next steps, a rough scope, and a realistic timeline.
                </p>
              </div>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div
                    className="mb-5 flex h-20 w-20 items-center justify-center rounded-full"
                    style={{ background: `${BRAND}22` }}
                  >
                    <CheckCircle2 className="h-10 w-10" style={{ color: BRAND }} />
                  </div>
                  <h3 className="font-display text-2xl font-bold md:text-3xl">
                    Message received.
                  </h3>
                  <p className="mt-3 max-w-md text-muted-foreground">
                    Thanks for reaching out — a specialist will get back to you
                    within one business day.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold transition hover:bg-white/10"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field
                      label="Full name"
                      name="name"
                      value={form.name}
                      onChange={(v) => update("name", v)}
                      error={errors.name}
                      required
                    />
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(v) => update("email", v)}
                      error={errors.email}
                      required
                    />
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field
                      label="Phone number"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(v) => update("phone", v)}
                      error={errors.phone}
                    />
                    <Field
                      label="Company name"
                      name="company"
                      value={form.company}
                      onChange={(v) => update("company", v)}
                      error={errors.company}
                    />
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <SelectField
                      label="Service required"
                      name="service"
                      value={form.service}
                      onChange={(v) => update("service", v)}
                      options={SERVICES}
                      placeholder="Select a service"
                      error={errors.service}
                      required
                    />
                    <SelectField
                      label="Budget range"
                      name="budget"
                      value={form.budget}
                      onChange={(v) => update("budget", v)}
                      options={BUDGETS}
                      placeholder="Select a budget"
                      error={errors.budget}
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Project description *
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      maxLength={2000}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-[color:var(--brand)] focus:shadow-[0_0_0_4px_rgba(21,171,230,0.15)]"
                      style={{ ["--brand" as string]: BRAND }}
                      placeholder="Goals, timeline, systems involved, and anything else that will help us understand your project..."
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs font-medium text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="mt-2 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      By submitting this form, you agree to be contacted about your
                      inquiry.
                    </p>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                      style={{
                        background: `linear-gradient(135deg, ${BRAND}, #7C5CFF)`,
                      }}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                          Request Consultation
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <BookConsultation />
    </>
  );
}

function ContactInfoItem({
  icon: Icon,
  title,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  value: React.ReactNode;
  href?: string;
  external?: boolean;
}) {
  const cardClass =
    "group relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[color:var(--brand)]/60 hover:bg-white/[0.06] hover:shadow-[0_10px_40px_-10px_rgba(21,171,230,0.5)]";
  const content = (
    <>
      <div
        className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ background: BRAND }}
      />
      <div
        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${BRAND}1F` }}
      >
        <Icon className="h-5 w-5" style={{ color: BRAND }} />
      </div>
      <div className="relative min-w-0">
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {title}
        </div>
        <div className="mt-1 text-sm font-medium leading-relaxed text-foreground break-words">
          {value}
        </div>
      </div>
    </>
  );
  if (!href) {
    return (
      <div className={cardClass} style={{ ["--brand" as string]: BRAND }}>
        {content}
      </div>
    );
  }
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cardClass}
      style={{ ["--brand" as string]: BRAND }}
    >
      {content}
    </a>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  error,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
        {required && " *"}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-[color:var(--brand)] focus:shadow-[0_0_0_4px_rgba(21,171,230,0.15)]"
        style={{ ["--brand" as string]: BRAND }}
        aria-invalid={!!error}
      />
      {error && (
        <p className="mt-1.5 text-xs font-medium text-destructive">{error}</p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  error,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
        {required && " *"}
      </label>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand)] focus:shadow-[0_0_0_4px_rgba(21,171,230,0.15)]"
        style={{ ["--brand" as string]: BRAND }}
        aria-invalid={!!error}
      >
        <option value="" className="bg-background">
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-background">
            {o}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1.5 text-xs font-medium text-destructive">{error}</p>
      )}
    </div>
  );
}
