import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Eyebrow, GoldDivider, Stars, PageFooterNav } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import img1 from "@/assets/1782536277899.png.asset.json";
import img2 from "@/assets/8b16ce6e0c96ffe6d6a5b61f3124313e.jpg.asset.json";
import img3 from "@/assets/c612e651df488d64a48ce23eda24ce18.jpg.asset.json";
import img4 from "@/assets/9cf2a71738b3eedb94727905b550a3a6.jpg.asset.json";
import img5 from "@/assets/c2f07de27711656d461e7ec8079371bd.jpg.asset.json";
import img6 from "@/assets/156b33ce3f1b839cb9a2561e1211df0e.jpg.asset.json";
import img7 from "@/assets/71d24d6938f16b2e7d8e444f4018e2d3.jpg.asset.json";
import img8 from "@/assets/008e9bedd3186f89b89a2d37fbe3316b.jpg.asset.json";
import img9 from "@/assets/334977a2195a3d43013ca3ee4b469cbb.jpg.asset.json";
import img10 from "@/assets/5dec88141837babd14a5cd4aa4e8f67f.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Nail Room — Bangalore's Luxury Nail Atelier" },
      { name: "description", content: "Statement nails, handcrafted by expert artists across four refined Bangalore studios. Manicure, pedicure, art, extensions and more." },
    ],
  }),
  component: HomePage,
});

const SUPA = "https://i.supaimg.com/77f14c10-c47c-4ac2-b1f1-85f1d4a953d5";

export const SERVICES = [
  {
    name: "Manicure",
    desc: "Our manicure services include **shaping, buffing, cuticle care, hand massage**, and your choice of **polish or gel application**.",
    imgs: [img2.url, img3.url, img4.url, `${SUPA}/8a5ae85f-d436-44c0-806b-930a1c4f7988.jpg`],
  },
  {
    name: "Pedicure",
    desc: "Treat your feet with our pedicure services, which include a **foot soak, callus removal, nail care**, and a **relaxing massage**.",
    imgs: [img5.url, img6.url, img7.url, `${SUPA}/05206169-0c66-4695-8350-85345d6df07a.jpg`],
  },
  {
    name: "Acrylic Nails",
    desc: "For **durable and long-lasting nails**, try our acrylic nail services, which can be **customized to your preference**.",
    imgs: [img8.url, img9.url, img10.url, `${SUPA}/8a5ae85f-d436-44c0-806b-930a1c4f7988.jpg`],
  },
  {
    name: "Nail Art",
    desc: "Add some personality to your nails with our nail art services, which include **hand-painted designs, 3D embellishments, and custom decals**.",
    imgs: [
      "https://i.pinimg.com/736x/77/3f/89/773f8973a3a1f4f0e9e8d1a2b3c4e5f6.jpg",
      "https://i.pinimg.com/736x/88/4f/9a/884f9a84b4b2f5f1f0f9e2b3c4d5e6f7.jpg",
      "https://i.pinimg.com/736x/99/5f/ab/995fab95c5c3f6f2f1f0f3c4d5e6f7a8.jpg",
      "https://i.pinimg.com/736x/aa/6f/bc/aa6fbca6d6d4f7f3f2f1f4d5e6f7a8b9.jpg",
    ],
  },
  {
    name: "Nail Polish",
    desc: "Choose from a wide range of colors and finishes, including **classic shades, trendy hues**, and **high-shine or matte options**.",
    imgs: [
      `${SUPA}/05206169-0c66-4695-8350-85345d6df07a.jpg`,
      `${SUPA}/c481fd7d-868a-4bbc-a936-417e8c6b73a9.jpg`,
      `${SUPA}/2c9aa00a-362d-4578-b14a-9168cb8ee68c.jpg`,
      img1.url,
    ],
  },
  {
    name: "Eyelash Extensions",
    desc: "Enhance your natural lashes with our eyelash extension services, which use **high-quality extensions** and a **professional application technique**.",
    imgs: [
      `${SUPA}/ffd760c5-cb6c-4698-a9b4-1819cf1a2807.jpg`,
      `${SUPA}/5c3f741b-374b-401a-b2e1-5e4dbf405042.jpg`,
      `${SUPA}/31f6d5a8-3123-4fa6-81f3-144d9d352a79.jpg`,
      `${SUPA}/1edb796c-f2d5-4c7d-95f3-c39870c26392.jpg`,
    ],
  },
  {
    name: "Facials",
    desc: "Indulge in our **rejuvenating facial treatments**, designed to **nourish, cleanse, and revive** your skin for a radiant, youthful glow.",
    imgs: [
      `${SUPA}/2d8210a1-1cb3-49c2-b7e6-4ddad1686f13.jpg`,
      `${SUPA}/85f44d98-c1e2-4a91-8c4a-ed96d2929c4e.jpg`,
      `${SUPA}/99edfcce-a526-4e2d-8844-56e43f1d889c.jpg`,
      `${SUPA}/a4f441d8-92c1-461d-9cb7-6c97dedf700d.jpg`,
    ],
  },
  {
    name: "Waxing",
    desc: "Experience **smooth, hair-free skin** with our professional waxing services, tailored for **lasting results**, leaving you feeling radiant and beautifully smooth.",
    imgs: [
      `${SUPA}/38bd4c8b-c471-4923-ab4e-f2b05ed6a0a4.jpg`,
      `${SUPA}/d13a2359-8a0d-4819-80e3-d096a988f7fa.jpg`,
      `${SUPA}/8a9a656f-5d6b-417e-aa1a-85d51d5357a3.jpg`,
      `${SUPA}/737f4685-9008-4ae8-96d2-3129c92e8855.jpg`,
    ],
  },
  {
    name: "Threading",
    desc: "Experience **gentle hair removal** with our threading services, perfect for achieving **beautifully shaped eyebrows** and a smooth complexion.",
    imgs: [
      `${SUPA}/dc3fa75a-ea90-4f7e-9181-08defcfe65be.jpg`,
      `${SUPA}/e3fa08c6-b6f8-4c61-9ea5-b102230b9e11.jpg`,
      `${SUPA}/a2ecd12e-114c-49b4-a80a-1aafa05953cb.jpg`,
      `${SUPA}/df9e3a21-cf03-4a27-bad3-1b1cba32225f.jpg`,
    ],
  },
];

export const HERO_BG = img1.url;

const PRESS = ["Elle", "Fabindia", "Lakmé", "Verve", "Vogue"];

const REVIEWS = [
  { name: "Divya S.", text: "The nail art here is **absolutely stunning**! The artists are so talented and took their time to make sure my nails looked perfect. I've been coming here for **over a year** and I'm always impressed." },
  { name: "Priya M.", text: "Amazing experience! The staff is so **friendly and professional**. My pedicure was **incredibly relaxing** and my nails look beautiful. Will definitely be back!" },
  { name: "Ananya K.", text: "**Best nail salon in Bangalore**! The hygiene standards are excellent and the nail artists are very skilled. I got a gel manicure and it's been **three weeks** and still looks perfect." },
  { name: "Shreya R.", text: "I had my **bridal nails** done here and they were absolutely perfect. The team was so patient and created exactly the design I wanted. **Highly recommend** for any special occasion!" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* ============ HERO BANNER ============ */}
      <section
        style={{
          position: "relative",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "clamp(5rem, 10vw, 8rem) 5% clamp(4rem, 8vw, 7rem)",
          overflow: "hidden",
        }}
      >
        <img
          src={HERO_BG}
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -2 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(20, 8, 40, 0.55)", zIndex: -1 }} />

        <div style={{ maxWidth: 1200, textAlign: "center" }}>
          <Reveal><Eyebrow>✦ Bangalore's Nail Atelier</Eyebrow></Reveal>
          <Reveal delay={120}>
            <h1 style={{ fontSize: "clamp(3rem, 9vw, 8rem)", marginBottom: 20, fontWeight: 300, lineHeight: 0.95 }}>
              <span className="gold-gradient">Nail Room</span>
            </h1>
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.3rem, 3vw, 2rem)", color: "var(--color-ivory)", marginBottom: 28 }}>
              The Art of the <span className="gold-gradient">Statement</span> Nail
            </p>
          </Reveal>
          <Reveal delay={240}>
            <GoldDivider />
          </Reveal>
          <Reveal delay={360}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
              <Link to="/contact" className="btn-gold">Book Appointment →</Link>
              <Link to="/about" hash="about-us" className="btn-ghost-gold">About Us</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ AS SEEN IN ============ */}
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section-pad" id="services" style={{ paddingTop: 60 }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
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
                    {s.imgs.map((src, k) => (
                      <div
                        key={k}
                        style={{
                          aspectRatio: "4 / 5",
                          borderRadius: 4,
                          border: "1px solid rgba(201,168,76,0.25)",
                          backgroundImage: `url("${src}")`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundColor: "#2D1B4E",
                        }}
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

      {/* ============ ATELIER HOURS BOX ============ */}
      <section style={{ padding: "20px 5% 60px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                background: "#2D1B4E",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: 8,
                padding: "32px 28px",
                textAlign: "center",
                boxShadow: "0 30px 80px rgba(20,8,40,0.4)",
              }}
            >
              <p className="eyebrow" style={{ marginBottom: 22 }}>✦ Atelier Hours ✦</p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: 12,
                  alignItems: "center",
                  marginBottom: 24,
                }}
                className="hours-grid"
              >
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--color-ivory)" }}>
                  Monday – Sunday
                </div>
                <div className="gold-gradient" style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", letterSpacing: "0.04em" }}>
                  10:30 AM – 8:30 PM
                </div>
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--color-mist)", marginBottom: 6 }}>
                Walk-ins welcome. <strong>Appointments recommended.</strong>
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--color-mist)", opacity: 0.8 }}>
                Working hours may vary on public holidays.
              </p>
            </div>
          </Reveal>
        </div>
        <style>{`
          @media (min-width: 640px) {
            .hours-grid { grid-template-columns: 1fr auto 1fr !important; text-align: left; }
            .hours-grid > div:first-child { text-align: right; }
            .hours-grid > div:last-child { text-align: left; }
          }
        `}</style>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
