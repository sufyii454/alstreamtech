import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Calendar } from "lucide-react";
import { PageHero } from "../components/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AIXIS — Book a Free Consultation" },
      { name: "description", content: "Book a free 30-minute strategy call with AIXIS. Discuss your AI, software or automation project with our team." },
      { property: "og:title", content: "Contact AIXIS" },
      { property: "og:description", content: "Let's build together." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={<>Let's build <span className="text-gradient">something intelligent</span></>}
        subtitle="Tell us about your project. We'll get back within one business day with next steps."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            {[
              { icon: Mail, t: "Email", v: "info@alstreamtech.com" },
              { icon: Phone, t: "Phone", v: "+1 (732) 588-7501" },
              { icon: MapPin, t: "Office", v: "409 Joyce Kilmer Avenue, Suite 315, New Brunswick, NJ 08901" },
              { icon: Calendar, t: "Availability", v: "Mon–Fri · 9am – 7pm local" },
            ].map(({ icon: Icon, t, v }) => (
              <div key={t} className="glass rounded-2xl p-6">
                <Icon className="mb-3 h-6 w-6 text-primary" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{t}</div>
                <div className="mt-1 font-semibold">{v}</div>
              </div>
            ))}
            <div className="glass-strong rounded-2xl p-6">
              <MessageSquare className="mb-3 h-6 w-6 text-primary" />
              <div className="font-display text-lg font-semibold">Prefer a live chat?</div>
              <p className="mt-1 text-sm text-muted-foreground">Ping our AI receptionist any time — it can book a call directly with the right specialist.</p>
              <button className="mt-4 rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow">Launch chat</button>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="glass-strong rounded-3xl p-8 md:p-10"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="mb-4 h-16 w-16 text-primary" />
                <h3 className="font-display text-2xl font-bold">Thanks — we've got it.</h3>
                <p className="mt-2 text-muted-foreground">Our team will be in touch within one business day.</p>
              </div>
            ) : (
              <div className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Work email" name="email" type="email" required />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Company" name="company" />
                  <Field label="Phone" name="phone" />
                </div>
                <Select label="How can we help?" name="topic" options={["AI Development", "Custom Software", "Web Application", "Mobile App", "AI Chatbot", "Automation", "Cloud & DevOps", "Data & Analytics", "Not sure yet"]} />
                <Select label="Budget range" name="budget" options={["Under $25k", "$25k–$75k", "$75k–$200k", "$200k+", "Not sure"]} />
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tell us about your project</label>
                  <textarea name="message" rows={5} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Goals, timeline, systems involved, anything relevant..." />
                </div>
                <button type="submit" className="group flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]">
                  <Send className="h-4 w-4" /> Send message
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}{required && " *"}</label>
      <input name={name} type={type} required={required} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" />
    </div>
  );
}
function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <select name={name} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary">
        {options.map(o => <option key={o} value={o} className="bg-background">{o}</option>)}
      </select>
    </div>
  );
}
