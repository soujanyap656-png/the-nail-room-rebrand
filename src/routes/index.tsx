import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Eyebrow, GoldDivider, Stars, PageFooterNav } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Nail Room — Bangalore's Luxury Nail Atelier" },
      { name: "description", content: "Statement nails, handcrafted by expert artists across four refined Bangalore studios. Manicure, pedicure, art, extensions and more." },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  { name: "Manicure", desc: "Our manicure services include **shaping, buffing, cuticle care, hand massage**, and your choice of **polish or gel application**." },
  { name: "Pedicure", desc: "Treat your feet with our pedicure services, which include a **foot soak, callus removal, nail care**, and a **relaxing massage**." },
  { name: "Acrylic Nails", desc: "For **durable and long-lasting nails**, try our acrylic nail services, which can be **customized to your preference**." },
  { name: "Nail Art", desc: "Add some personality to your nails with our nail art services, which include **hand-painted designs, 3D embellishments, and custom decals**." },
  { name: "Nail Polish", desc: "Choose from a wide range of colors and finishes, including **classic shades, trendy hues**, and **high-shine or matte options**." },
  { name: "Eyelash Extensions", desc: "Enhance your natural lashes with our eyelash extension services, which use **high-quality extensions** and a **professional application technique**." },
  { name: "Facials", desc: "Indulge in our **rejuvenating facial treatments**, designed to **nourish, cleanse, and revive** your skin for a radiant, youthful glow." },
  { name: "Waxing", desc: "Experience **smooth, hair-free skin** with our professional waxing services, tailored for **lasting results**, leaving you feeling radiant and beautifully smooth." },
  { name: "Threading", desc: "Experience **gentle hair removal** with our threading services, perfect for achieving **beautifully shaped eyebrows** and a smooth complexion." },
];

const PRESS = ["Elle", "Fabindia", "Lakmé", "Verve", "Vogue"];

const REVIEWS = [
  { name: "Divya S.", text: "The nail art here is **absolutely stunning**! The artists are so talented and took their time to make sure my nails looked perfect. I've been coming here for **over a year** and I'm always impressed." },
  { name: "Priya M.", text: "Amazing experience! The staff is so **friendly and professional**. My pedicure was **incredibly relaxing** and my nails look beautiful. Will definitely be back!" },
  { name: "Ananya K.", text: "**Best nail salon in Bangalore**! The hygiene standards are excellent and the nail artists are very skilled. I got a gel manicure and it's been **three weeks** and still looks perfect." },
  { name: "Shreya R.", text: "I had my **bridal nails** done here and they were absolutely perfect. The team was so patient and created exactly the design I wanted. **Highly recommend** for any special occasion!" },
];

const IMG_VARIANTS = ["ed-img", "ed-img-rose", "ed-img-noir", "ed-img-velvet", "ed-img", "ed-img-rose"];

function HomePage() {
  return (
    <SiteLayout>
      {/* ============ HERO ============ */}
      <section
        style={{
          position: "relative", minHeight: "92vh",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "80px 5% 120px", overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=2000&q=80"
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -2 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(7,4,15,0.55) 0%, rgba(7,4,15,0.88) 100%)", zIndex: -1 }} />

        <div style={{ maxWidth: 1200, textAlign: "center" }}>
          <Reveal><Eyebrow>✦ Est. 2018 · Bangalore</Eyebrow></Reveal>
          <Reveal delay={120}>
            <h1 style={{ fontSize: "clamp(3rem, 9vw, 8rem)", marginBottom: 24, fontWeight: 300, lineHeight: 0.95 }}>
              <span className="gold-gradient">The Nail Room</span>
            </h1>
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.4rem, 3vw, 2.2rem)", color: "var(--color-ivory)", marginBottom: 28 }}>
              The Art of the <span className="gold-gradient">Statement</span> Nail
            </p>
          </Reveal>
          <Reveal delay={240}>
            <GoldDivider />
            <p style={{ maxWidth: 640, margin: "0 auto 40px", fontSize: "1rem", color: "var(--color-ivory)", opacity: 0.88 }}>
              Bangalore's most <strong>refined nail atelier</strong>. Four studios. Handcrafted artistry. A <strong>clinical-precision experience</strong> designed for the discerning.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn-gold">Reserve a Visit →</Link>
              <Link to="/about" hash="about-us" className="btn-ghost-gold">Our Story</Link>
            </div>
          </Reveal>

          <div style={{ marginTop: 56, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.35em", color: "var(--color-gold)", textTransform: "uppercase" }}>Scroll</span>
            <div className="scroll-line" />
          </div>
        </div>
      </section>

      {/* ============ AS SEEN IN — MARQUEE ============ */}
      <section style={{ padding: "48px 5%" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <Reveal>
            <div className="glass" style={{ padding: "28px 20px" }}>
              <p className="eyebrow" style={{ textAlign: "center", display: "block", marginBottom: 18 }}>✦ We Are Featured In ✦</p>
              <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}>
                <div className="marquee-track">
                  {[...PRESS, ...PRESS, ...PRESS].map((p, i) => (
                    <span key={i} className="gold-gradient" style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 400, whiteSpace: "nowrap", letterSpacing: "0.05em" }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Staggered dance formation */}
              <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
                <div style={{ display: "flex", gap: 40, flexWrap: "wrap", justifyContent: "center" }}>
                  {PRESS.slice(0, 3).map((p) => (
                    <span key={p} style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "0.95rem", letterSpacing: "0.18em", color: "var(--color-gold-bright)" }}>{p}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 40, flexWrap: "wrap", justifyContent: "center" }}>
                  {PRESS.slice(3).map((p) => (
                    <span key={p} style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "0.95rem", letterSpacing: "0.18em", color: "var(--color-gold-bright)" }}>{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section-pad" id="services">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Eyebrow>The Atelier Menu</Eyebrow>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                Services We <em className="gold-gradient" style={{ fontStyle: "italic" }}>Offer</em>
              </h2>
              <GoldDivider />
            </div>
          </Reveal>

          <div style={{ display: "grid", gap: 32 }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.name}>
                <article className="glass-strong" style={{ padding: "32px 28px" }}>
                  <div style={{ marginBottom: 18 }}>
                    <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "0.95rem" }}>Service {String(i + 1).padStart(2, "0")}</span>
                    <h3 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginTop: 4 }}>{s.name}</h3>
                  </div>

                  <p
                    style={{ marginBottom: 24, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: s.desc.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                  />

                  <div className="h-scroll">
                    {IMG_VARIANTS.map((cls, k) => (
                      <div
                        key={k}
                        className={cls}
                        style={{ aspectRatio: "4 / 5", borderRadius: 4, border: "1px solid rgba(230,199,112,0.2)" }}
                      />
                    ))}
                  </div>

                  <div style={{ marginTop: 24, textAlign: "center" }}>
                    <Link to="/contact" className="btn-ghost-gold">Book {s.name} →</Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ATELIER HOURS STRIP ============ */}
      <section style={{ padding: "20px 5% 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div
              className="glass-strong"
              style={{
                padding: "18px 28px",
                display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 16,
                textAlign: "center",
              }}
            >
              <span className="eyebrow" style={{ margin: 0 }}>✦ Atelier Hours</span>
              <span style={{ width: 1, height: 18, background: "rgba(230,199,112,0.4)" }} />
              <span className="gold-gradient" style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", letterSpacing: "0.05em" }}>
                Open Daily · 10:00 AM – 09:00 PM
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section className="section-pad" style={{ paddingTop: 40 }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <Eyebrow>★★★★★ · Google Reviews</Eyebrow>
              <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
                In their <em className="gold-gradient" style={{ fontStyle: "italic" }}>own words</em>
              </h2>
              <GoldDivider />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
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
                  <div style={{ color: "var(--color-gold-bright)", fontWeight: 500, fontSize: "0.9rem" }}>{r.name}</div>
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
