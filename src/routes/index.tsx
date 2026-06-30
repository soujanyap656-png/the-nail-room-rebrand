import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { SiteLayout, GoldDivider, Stars, PageFooterNav, Particles } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/files_10795511-2026-06-30T10-38-51-766Z-2666d7e6f967f90d474f618f05c4734e.jpg";
import img_manicure1 from "@/assets/c612e651df488d64a48ce23eda24ce18.jpg.asset.json";
import img_manicure2 from "@/assets/8b16ce6e0c96ffe6d6a5b61f3124313e.jpg.asset.json";
import img_manicure3 from "@/assets/9cf2a71738b3eedb94727905b550a3a6.jpg.asset.json";
import img_pedicure1 from "@/assets/156b33ce3f1b839cb9a2561e1211df0e.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Nail Room — Bangalore's Luxury Nail Atelier" },
      { name: "description", content: "Four nail studios across Bangalore. Handcrafted nail art, clinical precision, and an atmosphere designed for the discerning client." },
    ],
  }),
  component: HomePage,
});

const SUPA = "https://i.supaimg.com/77f14c10-c47c-4ac2-b1f1-85f1d4a953d5";

export const SERVICES: Array<{
  name: string;
  eyebrow: string;
  desc: string;
  imgs: string[];
}> = [
  {
    name: "Manicure",
    eyebrow: "The Classic",
    desc: "Our manicure services include shaping, buffing, cuticle care, hand massage, and your choice of polish or gel application.",
    imgs: [img_manicure1.url, img_manicure2.url, img_manicure3.url],
  },
  {
    name: "Pedicure",
    eyebrow: "The Ritual",
    desc: "Treat your feet with our pedicure services, which include a foot soak, callus removal, nail care, and a relaxing massage.",
    imgs: [
      img_pedicure1.url,
      `${SUPA}/e7c96d54-d3bd-4d5e-99d8-7eb1762f6e7f.jpg`,
      `${SUPA}/94bc0b53-de76-41ea-a9c5-f8177c232034.jpg`,
    ],
  },
  {
    name: "Acrylic Nails",
    eyebrow: "The Extension",
    desc: "For durable and long-lasting nails, try our acrylic nail services, which can be customized to your preference.",
    imgs: [
      `${SUPA}/a866b3d0-752b-4582-b850-a03b9eda0561.jpg`,
      `${SUPA}/afba4bd6-e550-411d-a409-8cb7d14b9e2a.jpg`,
      `${SUPA}/e16ded63-8a39-4a21-b9f4-893b8975e136.jpg`,
      `${SUPA}/8a5ae85f-d436-44c0-806b-930a1c4f7988.jpg`,
    ],
  },
  {
    name: "Nail Art",
    eyebrow: "The Signature",
    desc: "Add personality to your nails with our nail art services: hand-painted designs, 3D embellishments, and custom decals.",
    imgs: [
      `${SUPA}/1a32cc58-3e98-4f94-8966-77e55bdb9a23.jpg`,
      `${SUPA}/3220b467-6713-47bf-93f7-4c1cbd9af0ec.jpg`,
      `${SUPA}/7c07a081-8659-45aa-bdbb-0bff62db5c79.jpg`,
      `${SUPA}/3058ca27-0151-4b1d-ac1b-f9ea5896ebc9.jpg`,
    ],
  },
  {
    name: "Nail Polish",
    eyebrow: "The Classic Finish",
    desc: "Choose from a wide range of colors and finishes, including classic shades, trendy hues, and high-shine or matte options.",
    imgs: [
      `${SUPA}/05206169-0c66-4695-8350-85345d6df07a.jpg`,
      `${SUPA}/c481fd7d-868a-4bbc-a936-417e8c6b73a9.jpg`,
      `${SUPA}/2c9aa00a-362d-4578-b14a-9168cb8ee68c.jpg`,
    ],
  },
  {
    name: "Eyelash Extensions",
    eyebrow: "Beyond the Nails",
    desc: "Enhance your natural lashes with our eyelash extension services, using high-quality extensions and a professional application technique.",
    imgs: [
      `${SUPA}/ffd760c5-cb6c-4698-a9b4-1819cf1a2807.jpg`,
      `${SUPA}/5c3f741b-374b-401a-b2e1-5e4dbf405042.jpg`,
      `${SUPA}/31f6d5a8-3123-4fa6-81f3-144d9d352a79.jpg`,
      `${SUPA}/1edb796c-f2d5-4c7d-95f3-c39870c26392.jpg`,
    ],
  },
  {
    name: "Facials",
    eyebrow: "The Glow",
    desc: "Indulge in our rejuvenating facial treatments, designed to nourish, cleanse, and revive your skin for a radiant, youthful glow.",
    imgs: [
      `${SUPA}/2d8210a1-1cb3-49c2-b7e6-4ddad1686f13.jpg`,
      `${SUPA}/85f44d98-c1e2-4a91-8c4a-ed96d2929c4e.jpg`,
      `${SUPA}/99edfcce-a526-4e2d-8844-56e43f1d889c.jpg`,
      `${SUPA}/a4f441d8-92c1-461d-9cb7-6c97dedf700d.jpg`,
    ],
  },
  {
    name: "Waxing",
    eyebrow: "The Finish",
    desc: "Experience smooth, hair-free skin with our professional waxing services, tailored for lasting results, leaving you feeling radiant and beautifully smooth.",
    imgs: [
      `${SUPA}/38bd4c8b-c471-4923-ab4e-f2b05ed6a0a4.jpg`,
      `${SUPA}/d13a2359-8a0d-4819-80e3-d096a988f7fa.jpg`,
      `${SUPA}/8a9a656f-5d6b-417e-aa1a-85d51d5357a3.jpg`,
      `${SUPA}/737f4685-9008-4ae8-96d2-3129c92e8855.jpg`,
    ],
  },
  {
    name: "Threading",
    eyebrow: "The Detail",
    desc: "Experience gentle hair removal with our threading services, perfect for achieving beautifully shaped eyebrows and a smooth complexion.",
    imgs: [
      `${SUPA}/dc3fa75a-ea90-4f7e-9181-08defcfe65be.jpg`,
      `${SUPA}/e3fa08c6-b6f8-4c61-9ea5-b102230b9e11.jpg`,
      `${SUPA}/a2ecd12e-114c-49b4-a80a-1aafa05953cb.jpg`,
      `${SUPA}/df9e3a21-cf03-4a27-bad3-1b1cba32225f.jpg`,
    ],
  },
];

const REVIEWS = [
  { name: "Divya S.", text: "The nail art here is absolutely stunning! The artists are so talented and took their time to make sure my nails looked perfect. I've been coming here for over a year and I'm always impressed." },
  { name: "Priya M.", text: "Amazing experience! The staff is so friendly and professional. My pedicure was incredibly relaxing and my nails look beautiful. Will definitely be back!" },
  { name: "Ananya K.", text: "Best nail salon in Bangalore! The hygiene standards are excellent and the nail artists are very skilled. I got a gel manicure and it's been three weeks and still looks perfect." },
  { name: "Shreya R.", text: "I had my bridal nails done here and they were absolutely perfect. The team was so patient and created exactly the design I wanted. Highly recommend for any special occasion!" },
];

const PRESS = ["Elle", "Fabindia", "Lakmé", "Verve", "Vogue"];

function ServiceCarousel({ imgs }: { imgs: string[] }) {
  const [idx, setIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const goTo = (i: number) => {
    setIdx(i);
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement;
    if (child) el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const itemWidth = (el.children[0] as HTMLElement)?.offsetWidth ?? 1;
    setIdx(Math.round(scrollLeft / (itemWidth + 12)));
  };

  return (
    <div>
      <div ref={scrollRef} className="h-scroll" onScroll={handleScroll}>
        {imgs.map((src, k) => (
          <div
            key={k}
            style={{
              aspectRatio: "4 / 5",
              borderRadius: 8,
              border: "1px solid rgba(201,164,86,0.2)",
              backgroundImage: `url("${src}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#F3EDE4",
            }}
          />
        ))}
      </div>
      {imgs.length > 1 && (
        <div className="carousel-dots">
          {imgs.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === idx ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function AtelierHoursCard() {
  return (
    <div
      className="dark-card"
      style={{
        padding: "40px 48px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        animation: "fadeSlideUp 0.7s ease-out forwards",
      }}
    >
      <div className="card-gold-top" />
      {/* Animated pulsing dot */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#C9A456",
          animation: "pulse 2s ease-in-out infinite",
        }}
      />
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#C9A456", marginBottom: 16 }}>
        ✦ Atelier Hours ✦
      </p>
      <div style={{ display: "flex", gap: 20, alignItems: "center", justifyContent: "center", marginBottom: 16, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "rgba(250,247,242,0.85)" }}>Monday – Sunday</span>
        <span style={{ width: 1, height: 24, background: "rgba(201,164,86,0.4)" }} />
        <span style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "1.1rem", color: "#C9A456" }}>10:30 AM – 8:30 PM</span>
      </div>
      <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.85rem", color: "rgba(250,247,242,0.6)", marginBottom: 4 }}>
        Walk-ins welcome. Appointments recommended.
      </p>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "rgba(250,247,242,0.45)" }}>
        Working hours may vary on public holidays.
      </p>
    </div>
  );
}

function HomePage() {
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
        }}
      >
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -2 }}
          loading="eager"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(18,13,6,0.75) 0%, rgba(18,13,6,0.35) 40%, rgba(18,13,6,0.85) 100%)", zIndex: -1 }} />
        <Particles count={12} />

        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal>
            <span className="eyebrow" style={{ color: "#C9A456", marginBottom: 12, display: "block" }}>Bangalore's Nail Atelier</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 6vw, 5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.05,
              marginBottom: 16,
              color: "#FAF7F2"
            }}>
              The Art of the{" "}
              <em className="shimmer-text" style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontStyle: "italic" }}>Statement</em>{" "}
              Nail.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.92rem",
              color: "rgba(250,247,242,0.85)",
              maxWidth: 480,
              margin: "0 auto 24px",
              lineHeight: 1.8
            }}>
              Four studios across Bangalore. One uncompromising standard. Handcrafted nail art, clinical precision, and an atmosphere designed to make you feel entirely seen.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact#booking-form" className="btn-primary">Book Appointment</Link>
              <Link to="/about" className="btn-ghost">About Us →</Link>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(201,164,86,0.4), transparent)", maxWidth: 200, margin: "28px auto 0" }} />
          </Reveal>
        </div>
      </section>

      {/* ===== AS FEATURED IN ===== */}
      <section style={{ background: "#EDE5D8", padding: "52px 5%", borderTop: "1px solid rgba(201,164,86,0.18)", borderBottom: "1px solid rgba(201,164,86,0.18)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Label row */}
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "center", marginBottom: 32 }}>
              <div style={{ flex: 1, maxWidth: 180, height: 1, background: "linear-gradient(90deg, transparent, #C9A456)" }} />
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                letterSpacing: "0.52em",
                textTransform: "uppercase",
                color: "#8B7355",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}>
                As Seen In
              </p>
              <div style={{ flex: 1, maxWidth: 180, height: 1, background: "linear-gradient(90deg, #C9A456, transparent)" }} />
            </div>
          </Reveal>

          {/* Static name grid — primary display */}
          <Reveal delay={80}>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "clamp(24px, 5vw, 64px)",
              flexWrap: "wrap",
              padding: "20px 0",
              borderTop: "1px solid rgba(201,164,86,0.25)",
              borderBottom: "1px solid rgba(201,164,86,0.25)",
            }}>
              {PRESS.map((p) => (
                <span
                  key={p}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)",
                    color: "#3D2E1C",
                    letterSpacing: "0.04em",
                    fontWeight: 400,
                    opacity: 0.85,
                    transition: "opacity 0.25s ease, color 0.25s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                    (e.currentTarget as HTMLElement).style.color = "#C9A456";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "0.85";
                    (e.currentTarget as HTMLElement).style.color = "#3D2E1C";
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Scrolling marquee below — secondary, decorative */}
          <Reveal delay={160}>
            <div style={{
              marginTop: 20,
              overflow: "hidden",
              maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
            }}>
              <div className="marquee-track" style={{ gap: "clamp(32px, 6vw, 80px)" }}>
                {[...PRESS, ...PRESS, ...PRESS, ...PRESS].map((p, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.45em",
                      textTransform: "uppercase",
                      color: "#A89880",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section-pad" id="services" style={{ background: "#FAF7F2" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="eyebrow">What We Create</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", color: "#1A1208", fontWeight: 400 }}>
                Services{" "}
                <em className="gradient-text" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300 }}>
                  We Offer.
                </em>
              </h2>
              <GoldDivider />
              <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.92rem", color: "#5C4A35", maxWidth: 460, margin: "0 auto" }}>
                From quiet classics to bold editorial nail art — every treatment is executed to last.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gap: 24 }}>
            {SERVICES.map((s) => (
              <Reveal key={s.name}>
                <article
                  className="glass-card"
                  style={{ padding: "clamp(28px, 4vw, 48px)", transition: "transform 0.4s cubic-bezier(0.25,0.1,0.25,1), box-shadow 0.4s cubic-bezier(0.25,0.1,0.25,1)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 60px rgba(90,60,20,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  <div className="card-gold-top" />
                  <div style={{ marginBottom: 20 }}>
                    <span className="eyebrow">{s.eyebrow}</span>
                    <h3 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.4rem, 2.8vw, 2rem)", color: "#1A1208", marginTop: 4, fontWeight: 400 }}>
                      <em className="gradient-text">{s.name}</em>
                    </h3>
                  </div>

                  <p style={{ marginBottom: 24, fontSize: "0.9rem", color: "#5C4A35", lineHeight: 1.85, fontFamily: "var(--font-body)" }}>
                    {s.desc}
                  </p>

                  <ServiceCarousel imgs={s.imgs} />

                  <div style={{ marginTop: 28, textAlign: "center" }}>
                    <Link to="/contact#booking-form" className="btn-outline-gold">
                      Book {s.name} →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR PROMISE (after services per Edit 3) ===== */}
      <section className="section-pad" style={{ background: "#1A1208" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="eyebrow">Our Promise</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#FAF7F2", fontWeight: 400 }}>
                What Sets Our{" "}
                <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, color: "#C9A456" }}>
                  Standard Apart.
                </em>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "◆",
                title: "Curated Materials",
                body: "We work exclusively with salon-grade gel systems, dermatologist-approved products, and single-use implements — so every visit is as clean as it is beautiful.",
              },
              {
                icon: "✎",
                title: "Artist-Level Craft",
                body: "Our nail artists don't follow trends — they interpret them. Each set is treated as a composition, balanced for your hand shape, skin tone, and personal aesthetic.",
              },
              {
                icon: "✿",
                title: "A Ritual, Not a Task",
                body: "From the moment you arrive, the environment is designed for one thing: to make you feel that this hour belongs entirely to you.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 120}>
                <div className="dark-card" style={{ padding: "36px 28px", height: "100%" }}>
                  <div className="card-gold-top" />
                  <div style={{ fontSize: 28, marginBottom: 14, color: "#C9A456" }}>{c.icon}</div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "1.35rem", color: "#C9A456", marginBottom: 10 }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(250,247,242,0.7)", lineHeight: 1.8 }}>
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ATELIER HOURS (enhanced per Edit 4) ===== */}
      <section style={{ background: "#F3EDE4", padding: "32px 5% 80px" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <Reveal>
            <AtelierHoursCard />
          </Reveal>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="section-pad" style={{ background: "#1A1208" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="eyebrow">Client Voices</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#FAF7F2", fontWeight: 400 }}>
                What Our{" "}
                <em className="shimmer-text" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300 }}>
                  Clients Say.
                </em>
              </h2>
              <GoldDivider />
              <div style={{ marginTop: 12 }}>
                <span className="gradient-text" style={{ fontFamily: "var(--font-serif)", fontSize: "2.8rem", fontWeight: 400 }}>5.0</span>
                {" "}
                <span style={{ color: "#C9A456", fontSize: "1.1rem" }}>★★★★★</span>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "rgba(250,247,242,0.55)", marginTop: 4 }}>
                  Rated 5.0 across 551 verified Google reviews
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <div className="dark-card" style={{ padding: "32px 28px", height: "100%" }}>
                  <div className="card-gold-top" />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                    <Stars />
                    <span style={{
                      background: "linear-gradient(135deg, #4285F4 0%, #EA4335 50%, #FBBC05 75%, #34A853 100%)",
                      borderRadius: "50%",
                      width: 24,
                      height: 24,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.68rem",
                    }}>
                      G
                    </span>
                  </div>
                  <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "#FAF7F2", lineHeight: 1.75, marginBottom: 18 }}>
                    "{r.text}"
                  </p>
                  <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(201,164,86,0.3), transparent)", marginBottom: 12 }} />
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A456" }}>
                    — {r.name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageFooterNav
        nextTo="/about"
        nextLabel="Explore About & Gallery →"
        teaser="Discover the story and craft behind our studios."
        pageNumber={1}
        totalPages={6}
      />
    </SiteLayout>
  );
}
