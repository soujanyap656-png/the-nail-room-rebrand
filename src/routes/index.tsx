import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Eyebrow, GoldDivider, Stars, PageFooterNav } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Nail Room — Bangalore's Luxury Nail Atelier" },
      { name: "description", content: "Statement nails, handcrafted by expert artists across four refined Bangalore studios. Gel, extensions, art and pedicure rituals." },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  { name: "Signature Gel Manicure", price: "₹ 1,800", time: "60 min", desc: "A flawless, mirror-finish gel applied by our **expert artists** for a chip-free wear of up to **three weeks**." },
  { name: "Russian E-File Manicure", price: "₹ 2,600", time: "90 min", desc: "Precision **cuticle work** with rotary e-file for a clean, sculpted appearance favoured by **editorial clients**." },
  { name: "Hand-Painted Nail Art", price: "₹ 2,400+", time: "75 min", desc: "Bespoke **micro-painting** by trained artists — florals, abstract, chrome and **couture motifs**." },
  { name: "Gel Extensions", price: "₹ 3,200", time: "120 min", desc: "Featherlight **soft-gel tips** sculpted to your nail bed for a **natural, runway-ready** length." },
  { name: "Builder Gel Overlay", price: "₹ 2,200", time: "75 min", desc: "Reinforced **structural overlay** that protects natural nails while delivering a **flawless surface**." },
  { name: "Luxury Spa Pedicure", price: "₹ 2,400", time: "75 min", desc: "Warm milk soak, **exfoliation ritual**, and a relaxing massage with **French-pressed oils**." },
  { name: "Paraffin Hand Ritual", price: "₹ 1,600", time: "45 min", desc: "Deep-conditioning **paraffin wax treatment** to soften and brighten hands for **visible radiance**." },
  { name: "Chrome & Cat-Eye", price: "₹ 2,800", time: "90 min", desc: "Premium **chrome pigments** and magnetic gels for that **luminous mirror finish** seen on the runway." },
  { name: "Soak-Off & Reset", price: "₹ 900", time: "30 min", desc: "Gentle, **non-abrasive removal** with a hydrating reset — the **healthiest reset** for your natural nails." },
];

const PRESS = ["VOGUE", "ELLE", "Harper's BAZAAR", "GRAZIA", "FEMINA", "L'OFFICIEL", "COSMOPOLITAN"];

const REVIEWS = [
  { name: "Anaisha Mehra", title: "Founder, Studio West", text: "The most precise manicure I've had in Bangalore. **Genuinely luxurious** — every detail considered, from the warm towels to the **artist's eye for shape**." },
  { name: "Riya Krishnan", title: "Editor, Lifestyle Quarterly", text: "Their **chrome work** is unrivalled. I fly down from Mumbai every six weeks because no one else **comes close**." },
  { name: "Priya Venkatesh", title: "Architect", text: "I've been a client for three years. The **hygiene standards** are clinical and the **art is breathtaking** — bookings every time." },
  { name: "Tara Iyer", title: "Bride, 2026", text: "Booked them for my wedding party of eight. **Flawless execution**, on time, and **every guest** was thrilled with their look." },
  { name: "Niharika S.", title: "Tech Founder", text: "The Russian manicure here is **the gold standard**. Cuticles stay clean for **four full weeks** — astonishing." },
];

const WHY_STEPS = [
  { n: "I", t: "Consultation", d: "A private **15-minute conversation** with your artist to align on shape, finish and tone." },
  { n: "II", t: "Hygiene Ritual", d: "Sterilised tools, **single-use files**, and clinical-grade barriers for every guest." },
  { n: "III", t: "Sculpting", d: "Russian e-file precision or classic shaping, executed by **trained specialists**." },
  { n: "IV", t: "Artistry", d: "Hand-painted, chromed or sculpted — **bespoke artistry**, never templated." },
  { n: "V", t: "Send-off", d: "Cuticle oil, hand massage, and a **complimentary espresso** before you leave." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* ============ HERO ============ */}
      <section
        style={{
          position: "relative", minHeight: "100vh",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "120px 5% 80px", overflow: "hidden",
        }}
      >
        <div className="ed-img-velvet" style={{ position: "absolute", inset: 0, zIndex: -1 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(7,4,15,0.55) 0%, rgba(7,4,15,0.85) 100%)", zIndex: -1 }} />

        <div style={{ maxWidth: 1200, textAlign: "center" }}>
          <Reveal>
            <Eyebrow>✦ Est. 2018 · Bangalore</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", marginBottom: 32, fontWeight: 300, lineHeight: 0.95 }}>
              The Art of the<br />
              <em className="gold-gradient" style={{ fontStyle: "italic", fontWeight: 400 }}>Statement</em>{" "}
              <span className="gold-gradient">Nail</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <GoldDivider />
            <p style={{ maxWidth: 640, margin: "0 auto 48px", fontSize: "1.05rem", color: "var(--color-ivory)", opacity: 0.85 }}>
              Bangalore's most <strong>refined nail atelier</strong>. Four studios.
              Handcrafted artistry. A <strong>clinical-precision experience</strong> designed for the discerning.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn-gold">Reserve a Visit →</Link>
              <Link to="/about" className="btn-ghost-gold">Our Story</Link>
            </div>
          </Reveal>

          <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.35em", color: "var(--color-gold)", textTransform: "uppercase" }}>Scroll</span>
            <div className="scroll-line" />
          </div>
        </div>
      </section>

      {/* ============ AS SEEN IN — MARQUEE ============ */}
      <section className="section-pad" style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <Reveal>
            <div className="glass" style={{ padding: "36px 24px" }}>
              <p className="eyebrow" style={{ textAlign: "center", display: "block" }}>✦ As Seen In ✦</p>
              <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}>
                <div className="marquee-track">
                  {[...PRESS, ...PRESS].map((p, i) => (
                    <span key={i} className="gold-gradient" style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 400, whiteSpace: "nowrap", letterSpacing: "0.05em" }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES — 9 BOXED CAROUSELS ============ */}
      <section className="section-pad" id="services">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <Eyebrow>Services We Offer</Eyebrow>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                The <em className="gold-gradient" style={{ fontStyle: "italic" }}>Atelier</em> Menu
              </h2>
              <GoldDivider />
              <p style={{ maxWidth: 640, margin: "0 auto" }}>
                Nine signature rituals, each delivered with the <strong>highest quality</strong> products and the <strong>most experienced hands</strong> in the city.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gap: 32 }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.name}>
                <article className="glass-strong" style={{ padding: "32px 28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24, flexWrap: "wrap", marginBottom: 20 }}>
                    <div>
                      <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "0.95rem" }}>Service {String(i + 1).padStart(2, "0")}</span>
                      <h3 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginTop: 4 }}>{s.name}</h3>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div className="gold-gradient" style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 400 }}>{s.price}</div>
                      <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-mist)" }}>{s.time}</div>
                    </div>
                  </div>

                  <p
                    style={{ marginBottom: 24, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: s.desc.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                  />

                  <div className="h-scroll">
                    {[0, 1, 2, 3, 4].map((k) => (
                      <div
                        key={k}
                        className={k % 2 === 0 ? "ed-img" : "ed-img-rose"}
                        style={{ aspectRatio: "4 / 5", borderRadius: 4, border: "1px solid rgba(230,199,112,0.2)" }}
                      />
                    ))}
                  </div>

                  <div style={{ marginTop: 24, textAlign: "center" }}>
                    <Link to="/contact" className="btn-ghost-gold">Book {s.name.split(" ")[0]} →</Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY NAIL ROOM — 5 STEP TIMELINE ============ */}
      <section className="section-pad">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Eyebrow>Why The Nail Room</Eyebrow>
              <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
                A <em className="gold-gradient" style={{ fontStyle: "italic" }}>five-act</em> ritual
              </h2>
              <GoldDivider />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-6">
            {WHY_STEPS.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <div className="glass" style={{ padding: "32px 24px", height: "100%" }}>
                  <div className="gold-gradient" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "2.6rem", marginBottom: 12 }}>{s.n}</div>
                  <h4 style={{ fontSize: "1.3rem", marginBottom: 12 }}>{s.t}</h4>
                  <p
                    style={{ fontSize: "0.88rem", lineHeight: 1.75 }}
                    dangerouslySetInnerHTML={{ __html: s.d.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section-pad">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Eyebrow>★★★★★ · 4.9 across 1,200+ reviews</Eyebrow>
              <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
                In their <em className="gold-gradient" style={{ fontStyle: "italic" }}>own words</em>
              </h2>
              <GoldDivider />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 60}>
                <div className="glass-strong" style={{ padding: "30px 26px", height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <div
                      style={{
                        width: 38, height: 38, borderRadius: "50%",
                        background: "linear-gradient(135deg, #4285F4 0%, #EA4335 100%)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#fff", fontWeight: 600, fontFamily: "var(--font-sans)",
                      }}
                    >G</div>
                    <Stars />
                  </div>
                  <p
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontStyle: "italic", color: "var(--color-ivory)", lineHeight: 1.65, marginBottom: 20 }}
                    dangerouslySetInnerHTML={{ __html: `"${r.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}"` }}
                  />
                  <hr className="hairline" style={{ marginBottom: 14 }} />
                  <div style={{ fontSize: "0.85rem" }}>
                    <div style={{ color: "var(--color-gold-bright)", fontWeight: 500 }}>{r.name}</div>
                    <div style={{ color: "var(--color-mist)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 2 }}>{r.title}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageFooterNav nextTo="/about" nextLabel="About & Gallery" />
    </SiteLayout>
  );
}
