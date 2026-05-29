import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { img, packages } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Tembo Safaris Tanzania" },
      { name: "description", content: "Get in touch to plan your Tanzania safari. WhatsApp, email and Arusha office details." },
      { property: "og:title", content: "Contact Tembo Safaris" },
      { property: "og:description", content: "Plan your Tanzania safari with our local team." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", travelers: "2", safari: packages[0].slug, budget: "2000-5000", message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    toast.success("Thank you! We'll reply within 24 hours with a personalized quote.");
    setForm({ ...form, name: "", email: "", phone: "", message: "" });
  };

  const set = <K extends keyof typeof form>(k: K, v: string) => setForm({ ...form, [k]: v });

  return (
    <>
      <PageHero
        image={img.luxuryLodge}
        eyebrow="Plan Your Trip"
        title="Let's design your Tanzania."
        subtitle="Tell us your dreams — we reply within 24 hours with a tailored quote."
      />

      <section className="py-20 container-x grid lg:grid-cols-3 gap-12">
        <aside className="space-y-8">
          <div>
            <h3 className="font-display text-2xl">Get in touch</h3>
            <p className="mt-2 text-sm text-muted-foreground">Our Arusha team responds in English and Swahili.</p>
          </div>
          {[
            { icon: MapPin, label: "Office", value: "Boma Road, Arusha, Tanzania" },
            { icon: Phone, label: "Call", value: "+255 754 000 000" },
            { icon: Mail, label: "Email", value: "hello@tembosafaris.co.tz" },
            { icon: MessageCircle, label: "WhatsApp", value: "+255 754 000 000" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-4">
              <div className="h-11 w-11 rounded-full bg-[var(--gold)]/20 flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4 text-[var(--sunset)]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="font-medium">{value}</div>
              </div>
            </div>
          ))}
          <div className="aspect-video rounded-2xl overflow-hidden border border-border">
            <iframe title="Map" src="https://maps.google.com/maps?q=Arusha,Tanzania&t=&z=12&ie=UTF8&iwloc=&output=embed" className="w-full h-full border-0" loading="lazy" />
          </div>
        </aside>

        <form onSubmit={submit} className="lg:col-span-2 bg-card border border-border rounded-2xl p-8 md:p-10 space-y-6 shadow-[var(--shadow-card)]">
          <div>
            <h3 className="font-display text-3xl">Request a personalized quote</h3>
            <p className="mt-2 text-sm text-muted-foreground">No obligation, no pressure. Just a real human reply.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Full name *">
              <input required value={form.name} onChange={(e) => set("name", e.target.value)} className={inputCls} />
            </Field>
            <Field label="Email *">
              <input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputCls} />
            </Field>
            <Field label="Phone (WhatsApp preferred)">
              <input value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputCls} />
            </Field>
            <Field label="Preferred date">
              <input type="date" value={form.date} onChange={(e) => set("date", e.target.value)} className={inputCls} />
            </Field>
            <Field label="Travelers">
              <select value={form.travelers} onChange={(e) => set("travelers", e.target.value)} className={inputCls}>
                {["1", "2", "3", "4", "5", "6+"].map((n) => <option key={n}>{n}</option>)}
              </select>
            </Field>
            <Field label="Budget per person (USD)">
              <select value={form.budget} onChange={(e) => set("budget", e.target.value)} className={inputCls}>
                <option value="under-1500">Under $1,500</option>
                <option value="1500-3000">$1,500 – $3,000</option>
                <option value="2000-5000">$2,000 – $5,000</option>
                <option value="5000-10000">$5,000 – $10,000</option>
                <option value="luxury">Luxury · No limit</option>
              </select>
            </Field>
            <Field label="Safari interest" className="md:col-span-2">
              <select value={form.safari} onChange={(e) => set("safari", e.target.value)} className={inputCls}>
                {packages.map((p) => <option key={p.slug} value={p.slug}>{p.title}</option>)}
                <option value="custom">Something custom — surprise me</option>
              </select>
            </Field>
            <Field label="Tell us about your dream trip" className="md:col-span-2">
              <textarea rows={5} value={form.message} onChange={(e) => set("message", e.target.value)} className={inputCls} placeholder="Honeymoon? Family? Photography focus? Anything we should know..." />
            </Field>
          </div>

          <Button type="submit" size="lg" className="w-full bg-[var(--sunset)] hover:bg-[var(--sunset)]/90 text-white rounded-full h-14 text-base">
            Send My Inquiry
          </Button>
          <p className="text-xs text-center text-muted-foreground">By submitting you agree to our privacy policy. We never share your details.</p>
        </form>
      </section>
    </>
  );
}

const inputCls = "w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-[var(--sunset)]/40 focus:border-[var(--sunset)] transition-colors text-sm";

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}
