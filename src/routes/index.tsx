import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Eyebrow, GoldDivider, Stars, PageFooterNav } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero-nails.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nail Room — Bangalore's Luxury Nail Atelier" },
      { name: "description", content: "Nail Room — The Art of the Statement Nail. Manicure, pedicure, nail art, extensions, eyelash, facials and more across Bangalore." },
    ],
  }),
  component: HomePage,
});

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

const PRESS = ["VOGUE", "ELLE", "VERVE", "LAKMÉ", "FABINDIA"];

const REVIEWS = [
  { name: "Riya das", text: "Service is worth paying for and the people are very friendly and guiding!!! Must visit..if you need perfection and excellence craftsmanship 💅" },
  { name: "Manali Deorukhkar", text: "The service at Nail Room is really good and their nail art was beautiful. The services are very decently priced too. Thank you for such amazing nails." },
  { name: "Gauri Rajesh", text: "Cute place , great service .. all of them are really sweet . Loved the final nails .❤️❤️" },
  { name: "Rashmi R", text: "Sweet folks that did an excellent job. Highly recommend" },
  { name: "nandini v", text: "Good service, price compared to other nail salon is much affordable,great work,happy with the results" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* ============ HERO ============ */}
      <section
        style={{
          position: "relative",
          minHeight: "60vh",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "80px 5%", overflow: "hidden",
        }}
      >
        <img
          src={heroImg}
          alt="Luxury manicured nails on silk"
          width={1920}
          height={1280}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -2 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(7,4,15,0.35) 0%, rgba(7,4,15,0.55) 100%)", zIndex: -1 }} />

        <div
          className="glass"
          style={{
            maxWidth: 900, textAlign: "center",
            padding: "40px 32px",
            background: "rgba(7,4,15,0.45)",
            border: "1px solid rgba(230,199,112,0.35)",
            borderRadius: 14,
            boxShadow: "0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(230,199,112,0.1) inset",
          }}
        >
          <Reveal>
            <Eyebrow>✦ Bangalore's Nail Atelier ✦</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1
              className="gold-gradient"
              style={{
                fontSize: "clamp(3.5rem, 11vw, 8rem)",
                margin: "16px 0 18px",
                fontWeight: 400, lineHeight: 0.95,
                fontFamily: "var(--font-display)",
              }}
            >
              Nail Room
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p style={{ fontSize: "clamp(1.05rem, 2.4vw, 1.5rem)", fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--color-ivory)" }}>
              The Art of the <span className="gold-gradient">Statement Nail</span>.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <GoldDivider />
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 8 }}>
              <Link to="/contact" className="btn-gold">Book Appointment →</Link>
              <Link to="/about" className="btn-ghost-gold">About Us</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ AS SEEN IN ============ */}
      <section className="section-pad" style={{ paddingTop: 60, paddingBottom: 40 }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <Reveal>
            <div className="glass-strong" style={{ padding: "36px 24px", border: "1px solid rgba(230,199,112,0.4)" }}>
              <p className="eyebrow" style={{ textAlign: "center", display: "block", marginBottom: 18 }}>✦ We Are Featured In ✦</p>
              <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}>
                <div className="marquee-track">
                  {[...PRESS, ...PRESS, ...PRESS].map((p, i) => (
                    <span key={i} className="gold-gradient" style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 400, whiteSpace: "nowrap", letterSpacing: "0.08em" }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Static staggered formation: 3 top, 2 bottom centered */}
              <div style={{ marginTop: 36, display: "grid", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
                  {["VOGUE", "ELLE", "VERVE"].map((p) => (
                    <div key={p} className="glass" style={{ padding: "18px 10px", textAlign: "center", border: "1px solid rgba(230,199,112,0.3)" }}>
                      <span className="gold-gradient" style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem" }}>{p}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr 1fr", gap: 14 }}>
                  <div />
                  {["LAKMÉ", "FABINDIA"].map((p) => (
                    <div key={p} className="glass" style={{ padding: "18px 10px", textAlign: "center", border: "1px solid rgba(230,199,112,0.3)" }}>
                      <span className="gold-gradient" style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem" }}>{p}</span>
                    </div>
                  ))}
                  <div />
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
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <Eyebrow>Services We Offer</Eyebrow>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                Our <em className="gold-gradient" style={{ fontStyle: "italic" }}>Services</em>
              </h2>
              <GoldDivider />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s} delay={(i % 3) * 80}>
                <article className="glass-strong" style={{ padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "0.95rem" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 style={{ fontSize: "1.8rem", marginTop: 4, marginBottom: 20 }}>{s}</h3>
                  <div
                    className={i % 3 === 0 ? "ed-img" : i % 3 === 1 ? "ed-img-rose" : "ed-img-velvet"}
                    style={{ aspectRatio: "4 / 3", borderRadius: 6, border: "1px solid rgba(230,199,112,0.25)", marginBottom: 22 }}
                  />
                  <div style={{ marginTop: "auto", textAlign: "center" }}>
                    <Link to="/contact" className="btn-ghost-gold" style={{ width: "100%", display: "inline-block" }}>
                      Book {s} →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ATELIER HOURS ============ */}
      <section className="section-pad" style={{ paddingTop: 40 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div
              className="glass-strong"
              style={{
                padding: "44px 36px", textAlign: "center",
                border: "1px solid rgba(230,199,112,0.45)",
                boxShadow: "0 20px 60px rgba(230,199,112,0.12)",
              }}
            >
              <Eyebrow>✦ Atelier Hours ✦</Eyebrow>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginTop: 8 }}>
                Open Daily <em className="gold-gradient" style={{ fontStyle: "italic" }}>10:00 AM – 9:00 PM</em>
              </h2>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section-pad">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <Eyebrow>Google Reviews</Eyebrow>
              <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
                In their <em className="gold-gradient" style={{ fontStyle: "italic" }}>own words</em>
              </h2>
              <GoldDivider />
            </div>
          </Reveal>

          <div className="h-scroll" style={{ paddingBottom: 24 }}>
            {REVIEWS.map((r) => (
              <div key={r.name} className="glass-strong" style={{ padding: "28px 24px", minWidth: 300 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <div
                    aria-label="Google"
                    style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 700, fontFamily: "var(--font-sans)", fontSize: "1.1rem",
                      backgroundImage: "conic-gradient(from 0deg, #4285F4, #34A853, #FBBC05, #EA4335, #4285F4)",
                      WebkitMaskImage: "radial-gradient(circle, transparent 8px, #000 9px)",
                      maskImage: "radial-gradient(circle, transparent 8px, #000 9px)",
                    }}
                  >
                    <span style={{
                      WebkitMask: "none", color: "transparent",
                      background: "linear-gradient(135deg, #4285F4, #EA4335)",
                      WebkitBackgroundClip: "text", backgroundClip: "text",
                    }}>G</span>
                  </div>
                  <Stars />
                </div>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontStyle: "italic", color: "var(--color-ivory)", lineHeight: 1.6, marginBottom: 18 }}>
                  “{r.text}”
                </p>
                <hr className="hairline" style={{ marginBottom: 12 }} />
                <div style={{ color: "var(--color-gold-bright)", fontWeight: 500, fontSize: "0.92rem" }}>{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageFooterNav nextTo="/about" nextLabel="About Us & Gallery" />
    </SiteLayout>
  );
}
