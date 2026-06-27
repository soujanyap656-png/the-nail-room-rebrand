import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout, Eyebrow, GoldDivider, PageFooterNav } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — The Nail Room Bangalore" },
      { name: "description", content: "Reserve your visit across Jayanagar, Sahakar Nagar, Malleshwaram and Kammanahalli. Direct lines, locations and a refined booking portal." },
    ],
  }),
  component: ContactPage,
});

const LOCATIONS = [
  { name: "Jayanagar", phone: "+91 80888 02525", map: "https://maps.app.goo.gl/6PYTcrTKPEgDcxPo9" },
  { name: "Sahakar Nagar", phone: "+91 72041 84033", map: "https://maps.app.goo.gl/2FbYPEBibEjcjg849" },
  { name: "Malleshwaram", phone: "+91 99019 62026", map: "https://maps.app.goo.gl/31xzBkRdvfs37Rte8" },
  { name: "Kammanahalli", phone: "+91 73384 61555", map: "https://maps.app.goo.gl/vEpuS4Pi6iHdm4BE8" },
];

const EMAIL = "hello@nailroombangalore.com";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [vals, setVals] = useState<Record<string, string>>({ name: "", email: "", phone: "", loc: "", service: "", date: "", notes: "" });

  const set = (k: string, v: string) => setVals((p) => ({ ...p, [k]: v }));
  const err = (k: string) => touched[k] && !vals[k];

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const required = ["name", "email", "phone", "loc", "service", "date"];
    const t: Record<string, boolean> = {};
    required.forEach((r) => (t[r] = true));
    setTouched(t);
    if (required.every((r) => vals[r])) setSent(true);
  };

  return (
    <SiteLayout>
      <section className="section-pad" style={{ paddingTop: 100, paddingBottom: 50, textAlign: "center" }}>
        <Reveal>
          <Eyebrow>Reserve · Inquire · Visit</Eyebrow>
          <h1 style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}>
            Our <em className="gold-gradient" style={{ fontStyle: "italic" }}>Studios</em>
          </h1>
          <GoldDivider />
          <p style={{ maxWidth: 620, margin: "0 auto" }}>
            Four refined ateliers across Bangalore. Speak with our concierge or reserve through our <strong>private booking portal</strong> below.
          </p>
        </Reveal>
      </section>

      {/* Studio cards */}
      <section style={{ padding: "0 5% 40px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.name} delay={i * 70}>
              <div className="glass-strong" style={{ padding: "28px 22px", height: "100%" }}>
                <p className="eyebrow" style={{ marginBottom: 8 }}>Studio</p>
                <h3 style={{ fontSize: "1.4rem", marginBottom: 12 }}>{l.name}</h3>
                <a
                  href={`tel:${l.phone.replace(/\s/g, "")}`}
                  className="gold-gradient"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 500, display: "block", marginBottom: 14 }}
                >
                  {l.phone}
                </a>
                <a
                  href={l.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-gold-bright)" }}
                >
                  View on Map →
                </a>
              </div>
            </Reveal>
          ))}

          {/* Email card */}
          <Reveal delay={LOCATIONS.length * 70}>
            <div className="glass-strong" style={{ padding: "28px 22px", height: "100%" }}>
              <p className="eyebrow" style={{ marginBottom: 8 }}>Email</p>
              <h3 style={{ fontSize: "1.4rem", marginBottom: 12 }}>Concierge</h3>
              <a
                href={`mailto:${EMAIL}`}
                className="gold-gradient"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 500, display: "block", wordBreak: "break-all" }}
              >
                {EMAIL}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Booking portal */}
      <section className="section-pad" style={{ paddingTop: 60 }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <Reveal>
            <div className="glass-strong" style={{ padding: "56px 32px", position: "relative" }}>
              <div style={{ position: "absolute", top: -1, left: 40, right: 40, height: 2, background: "linear-gradient(90deg, transparent, var(--color-gold-bright), transparent)" }} />

              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <Eyebrow>✦ Private Booking Portal ✦</Eyebrow>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Reserve your <em className="gold-gradient" style={{ fontStyle: "italic" }}>visit</em></h2>
              </div>

              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div className="gold-gradient" style={{ fontFamily: "var(--font-display)", fontSize: "3rem", marginBottom: 16 }}>✦</div>
                  <h3 style={{ fontSize: "1.8rem", marginBottom: 12 }}>Thank you, {vals.name.split(" ")[0]}.</h3>
                  <p>Your reservation has been received. Our concierge will confirm within <strong>two hours</strong>.</p>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="grid md:grid-cols-2 gap-x-6">
                    <div className={`field ${vals.name ? "has-value" : ""}`}>
                      <input id="name" placeholder=" " value={vals.name} onChange={(e) => set("name", e.target.value)} onBlur={() => setTouched({ ...touched, name: true })} />
                      <label htmlFor="name">Full Name</label>
                      {err("name") && <span className="error">Please share your name</span>}
                    </div>
                    <div className={`field ${vals.email ? "has-value" : ""}`}>
                      <input type="email" id="email" placeholder=" " value={vals.email} onChange={(e) => set("email", e.target.value)} onBlur={() => setTouched({ ...touched, email: true })} />
                      <label htmlFor="email">Email</label>
                      {err("email") && <span className="error">Email required</span>}
                    </div>
                    <div className={`field ${vals.phone ? "has-value" : ""}`}>
                      <input id="phone" placeholder=" " value={vals.phone} onChange={(e) => set("phone", e.target.value)} onBlur={() => setTouched({ ...touched, phone: true })} />
                      <label htmlFor="phone">Mobile</label>
                      {err("phone") && <span className="error">Mobile required</span>}
                    </div>
                    <div className={`field ${vals.loc ? "has-value" : ""}`}>
                      <select id="loc" value={vals.loc} onChange={(e) => set("loc", e.target.value)} onBlur={() => setTouched({ ...touched, loc: true })}>
                        <option value="" disabled hidden></option>
                        {LOCATIONS.map((l) => <option key={l.name} value={l.name}>{l.name}</option>)}
                      </select>
                      <label htmlFor="loc">Preferred Studio</label>
                      {err("loc") && <span className="error">Choose a studio</span>}
                    </div>
                    <div className={`field ${vals.service ? "has-value" : ""}`}>
                      <select id="service" value={vals.service} onChange={(e) => set("service", e.target.value)} onBlur={() => setTouched({ ...touched, service: true })}>
                        <option value="" disabled hidden></option>
                        <option>Manicure</option>
                        <option>Pedicure</option>
                        <option>Acrylic Nails</option>
                        <option>Nail Art</option>
                        <option>Nail Polish</option>
                        <option>Eyelash Extensions</option>
                        <option>Facials</option>
                        <option>Waxing</option>
                        <option>Threading</option>
                      </select>
                      <label htmlFor="service">Service</label>
                      {err("service") && <span className="error">Choose a service</span>}
                    </div>
                    <div className={`field ${vals.date ? "has-value" : ""}`}>
                      <input type="date" id="date" placeholder=" " value={vals.date} onChange={(e) => set("date", e.target.value)} onBlur={() => setTouched({ ...touched, date: true })} />
                      <label htmlFor="date">Preferred Date</label>
                      {err("date") && <span className="error">Date required</span>}
                    </div>
                  </div>
                  <div className={`field ${vals.notes ? "has-value" : ""}`}>
                    <textarea id="notes" placeholder=" " value={vals.notes} onChange={(e) => set("notes", e.target.value)} />
                    <label htmlFor="notes">Notes for your artist (optional)</label>
                  </div>

                  <button type="submit" className="btn-gold" style={{ width: "100%", marginTop: 12 }}>
                    ✦ Reserve My Visit →
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <PageFooterNav nextTo="/faq" nextLabel="FAQ" />
    </SiteLayout>
  );
}
