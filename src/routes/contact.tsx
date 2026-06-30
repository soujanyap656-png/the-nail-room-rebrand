import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent, useEffect } from "react";
import { SiteLayout, GoldDivider, PageFooterNav, Particles } from "@/components/site/Layout";
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

const STUDIOS = [
  {
    name: "Jayanagar",
    phone: "+91 80888 02525",
    tel: "+918088802525",
    map: "https://maps.app.goo.gl/6PYTcrTKPEgDcxPo9",
    address: "4th Block, 100 Feet Road",
  },
  {
    name: "Sahakar Nagar",
    phone: "+91 72041 84033",
    tel: "+917204184033",
    map: "https://maps.app.goo.gl/2FbYPEBibEjcjg849",
    address: "Near Kodava Samaja",
  },
  {
    name: "Malleshwaram",
    phone: "+91 99019 62026",
    tel: "+919901962026",
    map: "https://maps.app.goo.gl/31xzBkRdvfs37Rte8",
    address: "Sampige Road",
  },
  {
    name: "Kammanahalli",
    phone: "+91 73384 61555",
    tel: "+917338461555",
    map: "https://maps.app.goo.gl/vEpuS4Pi6iHdm4BE8",
    address: "Near St. Germain's",
  },
];

const EMAIL = "hello@nailroombangalore.com";

const SERVICES = [
  "Manicure",
  "Pedicure",
  "Acrylic Nails",
  "Nail Art",
  "Nail Polish",
  "Eyelash Extensions",
  "Facials",
  "Waxing",
  "Threading",
];

type FormStatus = "idle" | "loading" | "success" | "error";

function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [vals, setVals] = useState<Record<string, string>>({
    name: "",
    email: "",
    phone: "",
    loc: "",
    service: "",
    date: "",
    notes: "",
  });

  // Scroll to booking form if hash is present
  useEffect(() => {
    if (window.location.hash === "#booking-form") {
      const el = document.getElementById("booking-form");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, []);

  const set = (k: string, v: string) => setVals((p) => ({ ...p, [k]: v }));
  const err = (k: string) => touched[k] && !vals[k];

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const required = ["name", "email", "phone", "loc", "service", "date"];
    const t: Record<string, boolean> = {};
    required.forEach((r) => (t[r] = true));
    setTouched(t);
    if (!required.every((r) => vals[r])) return;

    // Simulate API call - replace with actual API later
    setStatus("loading");

    // Simulated delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate success (replace with actual API response handling)
    // For demo: 90% success rate
    const success = Math.random() > 0.1;
    setStatus(success ? "success" : "error");
  };

  return (
    <SiteLayout>
      {/* ===== HERO ===== */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "clamp(80px, 12vw, 140px)",
          paddingBottom: "clamp(60px, 10vw, 120px)",
          paddingLeft: "5%",
          paddingRight: "5%",
          background: "linear-gradient(135deg, #1A1208 0%, #2A1F12 50%, #1A1208 100%)",
        }}
      >
        <Particles count={10} />
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal>
            <span className="eyebrow" style={{ color: "#C9A456", marginBottom: 10, display: "block" }}>Reserve · Inquire · Visit</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 6vw, 4.5rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.0, color: "#FAF7F2" }}>
              Our{" "}
              <em className="shimmer-text" style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontStyle: "italic" }}>Studios.</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", color: "rgba(250,247,242,0.8)", maxWidth: 480, margin: "16px auto 0", lineHeight: 1.85 }}>
              Four ateliers across Bangalore. One uncompromising standard. Speak with our concierge or reserve through our booking portal.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== STUDIO CARDS ===== */}
      <section className="section-pad" style={{ paddingTop: 56, background: "#FAF7F2" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STUDIOS.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <div
                  className="glass-card"
                  style={{
                    padding: "32px 24px",
                    height: "100%",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.4s cubic-bezier(0.25,0.1,0.25,1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div className="card-gold-top" />
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A456", marginBottom: 8 }}>
                    ✦ Studio ✦
                  </p>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "1.4rem", color: "#C9A456", marginBottom: 12 }}>
                    {s.name}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "#5C4A35", marginBottom: 16, lineHeight: 1.6 }}>
                    {s.address}
                  </p>
                  <a
                    href={`tel:${s.tel}`}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "1.15rem",
                      color: "#1A1208",
                      display: "block",
                      marginBottom: 16,
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A456")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1208")}
                  >
                    {s.phone}
                  </a>
                  {/* Secondary button - outlined charcoal */}
                  <a
                    href={s.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      color: "#1A1208",
                      background: "transparent",
                      border: "1px solid rgba(26,18,8,0.3)",
                      padding: "10px 18px",
                      borderRadius: 100,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#1A1208";
                      (e.currentTarget as HTMLElement).style.color = "#FAF7F2";
                      (e.currentTarget as HTMLElement).style.borderColor = "#1A1208";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#1A1208";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,18,8,0.3)";
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    View on Map →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EMAIL & HOURS - Tertiary style for email ===== */}
      <section style={{ background: "#F3EDE4", padding: "40px 5%" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 32,
                padding: "32px 40px",
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(12px)",
                borderRadius: 12,
                border: "1px solid rgba(201,164,86,0.2)",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A456", marginBottom: 8 }}>
                  Email Concierge
                </p>
                {/* Tertiary - ghost/text-link style */}
                <a
                  href={`mailto:${EMAIL}`}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "1.05rem",
                    color: "#A89880",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A456")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#A89880")}
                >
                  {EMAIL}
                </a>
              </div>
              <div style={{ width: 1, background: "rgba(201,164,86,0.25)" }} />
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A456", marginBottom: 8 }}>
                  Atelier Hours
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#1A1208" }}>
                  Monday – Sunday
                  <br />
                  <strong>10:30 AM – 8:30 PM</strong>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== BOOKING PORTAL ===== */}
      <section className="section-pad" id="booking-form" style={{ background: "#FAF7F2", scrollMarginTop: 100 }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <Reveal>
            <div
              className="glass-card"
              style={{
                padding: "clamp(36px, 5vw, 56px) clamp(24px, 4vw, 40px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div className="card-gold-top" />

              <div style={{ textAlign: "center", marginBottom: 36 }}>
                <span className="eyebrow">✦ Private Booking Portal ✦</span>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "#1A1208", fontWeight: 400, fontStyle: "italic", marginTop: 8 }}>
                  Reserve Your{" "}
                  <em className="gradient-text" style={{ fontFamily: "var(--font-serif)" }}>Visit</em>
                </h2>
                <GoldDivider />
              </div>

              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: 16, color: "#C9A456" }}>✓</div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "1.8rem", color: "#C9A456", marginBottom: 12 }}>
                    Request Sent
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#5C4A35", lineHeight: 1.8 }}>
                    Thank you, {vals.name.split(" ")[0]}. Your reservation has been received. Our concierge will confirm within <strong>two hours</strong>.
                  </p>
                  <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(201,164,86,0.3), transparent)", margin: "32px 0" }} />
                  <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.88rem", color: "#A89880" }}>
                    Need immediate assistance? Call your nearest studio directly.
                  </p>
                </div>
              ) : status === "error" ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: 16, color: "#B5695A" }}>⚠</div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "1.6rem", color: "#B5695A", marginBottom: 12 }}>
                    Something went wrong
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#5C4A35", lineHeight: 1.8, marginBottom: 24 }}>
                    We couldn't submit your request. Please try again or call us directly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      color: "#B5695A",
                      background: "transparent",
                      border: "1px solid #B5695A",
                      padding: "12px 28px",
                      borderRadius: 100,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#B5695A";
                      (e.currentTarget as HTMLElement).style.color = "#FAF7F2";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#B5695A";
                    }}
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                    <div className={`field ${vals.name ? "has-value" : ""}`}>
                      <input id="name" placeholder=" " value={vals.name} onChange={(e) => set("name", e.target.value)} onBlur={() => setTouched({ ...touched, name: true })} />
                      <label htmlFor="name">Full Name</label>
                      {err("name") && <span className="field-error">Please share your name</span>}
                    </div>
                    <div className={`field ${vals.email ? "has-value" : ""}`}>
                      <input type="email" id="email" placeholder=" " value={vals.email} onChange={(e) => set("email", e.target.value)} onBlur={() => setTouched({ ...touched, email: true })} />
                      <label htmlFor="email">Email</label>
                      {err("email") && <span className="field-error">Email required</span>}
                    </div>
                    <div className={`field ${vals.phone ? "has-value" : ""}`}>
                      <input id="phone" placeholder=" " value={vals.phone} onChange={(e) => set("phone", e.target.value)} onBlur={() => setTouched({ ...touched, phone: true })} />
                      <label htmlFor="phone">Mobile</label>
                      {err("phone") && <span className="field-error">Mobile required</span>}
                    </div>
                    <div className={`field ${vals.loc ? "has-value" : ""}`}>
                      <select id="loc" value={vals.loc} onChange={(e) => set("loc", e.target.value)} onBlur={() => setTouched({ ...touched, loc: true })}>
                        <option value="" disabled hidden></option>
                        {STUDIOS.map((s) => (
                          <option key={s.name} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="loc">Preferred Studio</label>
                      {err("loc") && <span className="field-error">Choose a studio</span>}
                    </div>
                    <div className={`field ${vals.service ? "has-value" : ""}`}>
                      <select id="service" value={vals.service} onChange={(e) => set("service", e.target.value)} onBlur={() => setTouched({ ...touched, service: true })}>
                        <option value="" disabled hidden></option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="service">Service</label>
                      {err("service") && <span className="field-error">Choose a service</span>}
                    </div>
                    <div className={`field ${vals.date ? "has-value" : ""}`}>
                      <input type="date" id="date" placeholder=" " value={vals.date} onChange={(e) => set("date", e.target.value)} onBlur={() => setTouched({ ...touched, date: true })} />
                      <label htmlFor="date">Preferred Date</label>
                      {err("date") && <span className="field-error">Date required</span>}
                    </div>
                  </div>
                  <div className={`field ${vals.notes ? "has-value" : ""}`} style={{ marginTop: 20 }}>
                    <textarea id="notes" placeholder=" " value={vals.notes} onChange={(e) => set("notes", e.target.value)} rows={3} />
                    <label htmlFor="notes">Notes for your artist (optional)</label>
                  </div>

                  {/* Primary button with loading state */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    style={{
                      width: "100%",
                      marginTop: 24,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      background: status === "loading" ? "rgba(201,164,86,0.7)" : "linear-gradient(135deg, #C9A456 0%, #E8CC8A 50%, #C9A456 100%)",
                      color: "#120D06",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      padding: "18px 44px",
                      borderRadius: 100,
                      border: "none",
                      cursor: status === "loading" ? "wait" : "pointer",
                      transition: "all 0.3s ease",
                      opacity: status === "loading" ? 0.8 : 1,
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <span
                          style={{
                            width: 16,
                            height: 16,
                            border: "2px solid rgba(18,13,6,0.3)",
                            borderTopColor: "#120D06",
                            borderRadius: "50%",
                            animation: "spin-slow 0.8s linear infinite",
                          }}
                        />
                        Sending your request...
                      </>
                    ) : (
                      "✦ Reserve My Visit →"
                    )}
                  </button>

                  <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.78rem", color: "#A89880", textAlign: "center", marginTop: 16 }}>
                    By submitting, you agree to our{" "}
                    <Link to="/terms" style={{ color: "#C9A456" }}>
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" style={{ color: "#C9A456" }}>
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <PageFooterNav nextTo="/faq" nextLabel="Visit FAQ →" teaser="Have questions? Find answers to common inquiries." pageNumber={3} totalPages={6} />
    </SiteLayout>
  );
}
