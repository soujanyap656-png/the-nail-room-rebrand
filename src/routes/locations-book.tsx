import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout, Eyebrow, Hairline } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/locations-book")({
  head: () => ({
    meta: [
      { title: "Locations & Booking — The Nail Room Bangalore" },
      { name: "description", content: "Find your nearest Nail Room studio in Malleshwaram, Jayanagar, Sahakar Nagar or Kammanahalli and book your appointment in under two minutes." },
      { property: "og:title", content: "Locations & Booking — The Nail Room" },
      { property: "og:description", content: "Your chair is waiting." },
    ],
  }),
  component: LocationsPage,
});

const studios = [
  { name: "Malleshwaram", address: "12, Sampige Road, 8th Cross, Malleshwaram, Bengaluru 560003", phone: "+91 98450 11221" },
  { name: "Jayanagar", address: "204, 11th Main Road, 4th Block, Jayanagar, Bengaluru 560011", phone: "+91 98450 22331" },
  { name: "Sahakar Nagar", address: "A-19, 2nd Block, Sahakar Nagar, Bengaluru 560092", phone: "+91 98450 33441" },
  { name: "Kammanahalli", address: "388, 80 Feet Road, HRBR Layout, Kammanahalli, Bengaluru 560084", phone: "+91 98450 44551" },
];

const services = ["Manicure", "Pedicure", "Acrylic Nails", "Nail Art", "Nail Polish", "Eyelash Extensions", "Facials", "Waxing & Threading"];

const faqs = [
  { q: "How early should I arrive for my appointment?", a: "We recommend arriving five minutes before your scheduled time. This allows us to begin your consultation, understand your vision, and have your station fully prepared when you're ready." },
  { q: "Do you accept walk-in clients?", a: "We welcome walk-ins subject to availability, but we strongly recommend booking in advance — particularly on weekends and for nail art or extension appointments, which require dedicated artist time." },
  { q: "I have a reference photo. How do I share it?", a: "You can paste a link or describe it in the 'Share Your Inspiration' field when booking, or simply bring your phone to the appointment. Our artists love a strong reference." },
  { q: "How long does a gel manicure typically last?", a: "Our gel applications are designed to last three to four weeks without chipping. Longevity depends on aftercare — we'll give you a brief guide at the end of your appointment." },
  { q: "What is your cancellation policy?", a: "We ask for 24 hours' notice for any cancellations or rescheduling. This allows us to offer your slot to another client. For group bookings of four or more, 48 hours is required." },
  { q: "Are your products safe for sensitive skin or during pregnancy?", a: "We offer gel-free and low-chemical service options for clients with skin sensitivities or who are pregnant. Please mention this in your booking notes and our team will prepare accordingly." },
];

type FormState = {
  name: string; phone: string; email: string; studio: string; service: string; date: string; time: string; notes: string;
};
const initial: FormState = { name: "", phone: "", email: "", studio: "", service: "", date: "", time: "", notes: "" };

function LocationsPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [k]: e.target.value });

  const validateField = (k: keyof FormState) => {
    const v = form[k];
    const msgs: Partial<Record<keyof FormState, string>> = {
      name: "Please add your name so we can address you properly.",
      phone: "We'll need your phone number to confirm your booking.",
      studio: "Tell us which studio you'd like to visit.",
      service: "Choose the service you'd like to book.",
      date: "Pick a preferred date so we can hold your slot.",
      time: "Let us know a preferred time of day.",
    };
    if (!v && msgs[k]) setErrors((p) => ({ ...p, [k]: msgs[k] }));
    else setErrors((p) => { const n = { ...p }; delete n[k]; return n; });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    (["name", "phone", "studio", "service", "date", "time"] as const).forEach(validateField);
    if (form.name && form.phone && form.studio && form.service && form.date && form.time) {
      setSubmitted(true);
    }
  };

  return (
    <SiteLayout>
      <section className="section-pad text-center" style={{ background: "var(--color-alabaster)", minHeight: "40vh" }}>
        <Reveal><Eyebrow>Page 5 of 5 — Locations & Booking</Eyebrow></Reveal>
        <Reveal delay={120}><h1 className="h-display" style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}>Your chair is <em style={{ fontStyle: "italic" }}>waiting.</em></h1></Reveal>
        <Reveal delay={300}>
          <p style={{ marginTop: 28, maxWidth: 580, marginLeft: "auto", marginRight: "auto" }}>
            Four studios across Bangalore. One seamless booking experience. Select your preferred location and service below, and we'll confirm your appointment within two hours.
          </p>
        </Reveal>
      </section>

      <Hairline />

      <section className="section-pad" style={{ background: "var(--color-blush-veil)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Reveal><Eyebrow>Our Studios</Eyebrow></Reveal>
            <Reveal delay={100}><h2 className="h-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Find your nearest Nail Room.</h2></Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studios.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <div style={{ background: "var(--color-parchment)", padding: 36, borderTop: "2px solid var(--color-champagne)", height: "100%" }}>
                  <h3 className="h-display" style={{ fontSize: "1.4rem", marginBottom: 16 }}>{s.name}</h3>
                  <p style={{ fontSize: "0.8rem", marginBottom: 16 }}>{s.address}</p>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-champagne)", marginBottom: 6 }}>{s.phone}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--color-stone)", marginBottom: 20 }}>Mon–Sun · 10am – 8pm</div>
                  <a href="#" style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-champagne)", borderBottom: "1px solid currentColor", paddingBottom: 2 }}>Get Directions →</a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <div style={{ marginTop: 56, height: 380, border: "1px solid var(--color-champagne)", background: "linear-gradient(135deg, #E8D5B7 0%, #F2EBE6 50%, #C9A87C 100%)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.5 }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--color-charcoal)", fontSize: "1.2rem" }}>Interactive map · 4 studios across Bangalore</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BOOKING */}
      <section className="section-pad" style={{ background: "var(--color-alabaster)" }}>
        <div className="text-center mb-16">
          <Reveal><Eyebrow>Reserve Your Visit</Eyebrow></Reveal>
          <Reveal delay={100}><h2 className="h-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Book in under two minutes.</h2></Reveal>
          <Reveal delay={200}><p style={{ marginTop: 16, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>No account required. No payment upfront. We'll confirm your appointment via WhatsApp or call within 2 hours of your request.</p></Reveal>
        </div>

        <Reveal>
          <div style={{ maxWidth: 640, margin: "0 auto", background: "var(--color-parchment)", padding: "clamp(28px, 5vw, 56px)" }}>
            {/* Stepper */}
            <div className="flex items-center justify-between mb-10" style={{ gap: 12 }}>
              {[
                { n: "01", l: "Details", active: true },
                { n: "02", l: "Schedule", active: false },
                { n: "03", l: "Confirm", active: false },
              ].map((s, i) => (
                <div key={s.n} className="flex items-center" style={{ flex: i === 2 ? "0 0 auto" : 1 }}>
                  <div className="flex flex-col items-center" style={{ minWidth: 70 }}>
                    <div style={{
                      width: 14, height: 14, borderRadius: "50%",
                      background: s.active ? "var(--color-champagne)" : "transparent",
                      border: "1px solid var(--color-champagne)",
                    }} />
                    <span style={{ marginTop: 8, fontFamily: "var(--font-sans)", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: s.active ? "var(--color-champagne)" : "var(--color-stone)" }}>
                      {s.n} — {s.l}
                    </span>
                  </div>
                  {i < 2 && <div style={{ flex: 1, height: 1, background: "var(--color-champagne)", opacity: 0.4, margin: "0 8px", marginBottom: 18 }} />}
                </div>
              ))}
            </div>

            {submitted ? (
              <div className="text-center" style={{ padding: "40px 0" }}>
                <div style={{ color: "var(--color-champagne)", fontSize: "2rem", marginBottom: 16 }}>✓</div>
                <h3 className="h-display" style={{ fontSize: "1.8rem", marginBottom: 12 }}>Booking received.</h3>
                <p>We'll be in touch on WhatsApp within two hours to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <Field id="name" label="Your Name" value={form.name} onChange={set("name")} onBlur={() => validateField("name")} error={errors.name} />
                <Field id="phone" label="Phone Number  ·  +91" value={form.phone} onChange={set("phone")} onBlur={() => validateField("phone")} error={errors.phone} type="tel" />
                <Field id="email" label="Email Address (optional)" value={form.email} onChange={set("email")} type="email" />

                <SelectField id="studio" label="Preferred Studio" value={form.studio} onChange={set("studio")} onBlur={() => validateField("studio")} error={errors.studio}
                  options={studios.map((s) => s.name)} />
                <SelectField id="service" label="Select Your Service" value={form.service} onChange={set("service")} onBlur={() => validateField("service")} error={errors.service}
                  options={services} />

                <div className="grid sm:grid-cols-2 gap-6">
                  <Field id="date" label="Preferred Date" value={form.date} onChange={set("date")} onBlur={() => validateField("date")} error={errors.date} type="date" />
                  <Field id="time" label="Preferred Time" value={form.time} onChange={set("time")} onBlur={() => validateField("time")} error={errors.time} type="time" />
                </div>

                <TextAreaField id="notes" label="Share Your Inspiration" value={form.notes} onChange={set("notes")}
                  placeholder="Optional — paste a Pinterest link, describe a vibe, or mention a reference photo you love." />

                <button type="submit" style={{
                  width: "100%", padding: 18, marginTop: 12,
                  background: "var(--color-charcoal)", color: "var(--color-alabaster)",
                  border: "none", borderRadius: 2,
                  fontFamily: "var(--font-sans)", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500,
                  cursor: "pointer", transition: "all 0.3s ease",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-champagne)"; e.currentTarget.style.color = "var(--color-obsidian)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "var(--color-charcoal)"; e.currentTarget.style.color = "var(--color-alabaster)"; }}
                >
                  Confirm My Booking →
                </button>
                <p style={{ marginTop: 18, fontSize: "0.75rem", fontStyle: "italic" }}>
                  We do not charge deposits for new clients from the website. Deposits may be requested for group bookings only.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: "var(--color-blush-veil)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Reveal><Eyebrow>Common Questions</Eyebrow></Reveal>
            <Reveal delay={100}><h2 className="h-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Before you arrive.</h2></Reveal>
          </div>
          <div>
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="acc-item">
                  <button className="acc-btn" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}>
                    <span>{f.q}</span>
                    <span className="acc-icon" style={{ transform: open ? "rotate(45deg)" : "none" }}>+</span>
                  </button>
                  <div className="acc-panel" style={{ maxHeight: open ? 400 : 0 }}>
                    <div className="acc-panel-inner">{f.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL SEQUENTIAL */}
      <section className="section-pad text-center" style={{ background: "var(--color-obsidian)" }}>
        <div className="max-w-3xl mx-auto">
          <Eyebrow color="var(--color-champagne)">You've Seen Everything</Eyebrow>
          <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 2.8rem)", color: "var(--color-alabaster)", fontStyle: "italic", margin: "20px 0 24px" }}>
            Thank you for taking the time to know us.
          </h2>
          <p style={{ marginBottom: 40, fontSize: "0.95rem" }}>
            We'd love to welcome you into one of our studios. Your first appointment is the beginning of something you'll look forward to every few weeks.
          </p>
          <Link to="/" className="btn-primary">← Return to Main Lounge (Home)</Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ id, label, value, onChange, onBlur, error, type = "text" }: { id: string; label: string; value: string; onChange: any; onBlur?: any; error?: string; type?: string }) {
  return (
    <div className={`field ${value ? "has-value" : ""}`}>
      <input id={id} type={type} value={value} onChange={onChange} onBlur={onBlur} placeholder=" " aria-label={label} aria-invalid={!!error} />
      <label htmlFor={id}>{label}</label>
      {error && <span className="error">{error}</span>}
    </div>
  );
}

function SelectField({ id, label, value, onChange, onBlur, error, options }: { id: string; label: string; value: string; onChange: any; onBlur?: any; error?: string; options: string[] }) {
  return (
    <div className={`field ${value ? "has-value" : ""}`}>
      <select id={id} value={value} onChange={onChange} onBlur={onBlur} aria-label={label} aria-invalid={!!error}
        style={{ backgroundImage: "linear-gradient(45deg, transparent 50%, var(--color-champagne) 50%), linear-gradient(135deg, var(--color-champagne) 50%, transparent 50%)",
                 backgroundPosition: "calc(100% - 14px) 18px, calc(100% - 8px) 18px",
                 backgroundSize: "6px 6px, 6px 6px", backgroundRepeat: "no-repeat", paddingRight: 28 }}>
        <option value="" disabled hidden></option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <label htmlFor={id}>{label}</label>
      {error && <span className="error">{error}</span>}
    </div>
  );
}

function TextAreaField({ id, label, value, onChange, placeholder }: { id: string; label: string; value: string; onChange: any; placeholder?: string }) {
  return (
    <div className={`field ${value ? "has-value" : ""}`}>
      <textarea id={id} rows={3} value={value} onChange={onChange} placeholder={placeholder || " "} aria-label={label} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
