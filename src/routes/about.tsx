import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { SiteLayout, GoldDivider, PageFooterNav, Particles } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import img_about from "@/assets/1782536277899.png.asset.json";
import img_studio1 from "@/assets/008e9bedd3186f89b89a2d37fbe3316b.jpg.asset.json";
import img_studio2 from "@/assets/334977a2195a3d43013ca3ee4b469cbb.jpg.asset.json";
import img_studio3 from "@/assets/5dec88141837babd14a5cd4aa4e8f67f.jpg.asset.json";
import img_studio4 from "@/assets/71d24d6938f16b2e7d8e444f4018e2d3.jpg.asset.json";
import img_studio5 from "@/assets/c2f07de27711656d461e7ec8079371bd.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Gallery — The Nail Room Bangalore" },
      { name: "description", content: "Discover our story, our craft, and explore a curated gallery of nail art across all services at The Nail Room." },
    ],
  }),
  component: AboutGalleryPage,
});

const SUPA = "https://i.supaimg.com/77f14c10-c47c-4ac2-b1f1-85f1d4a953d5";

const GALLERY_IMAGES = [
  { src: img_studio1.url, cat: "Manicure" },
  { src: img_studio2.url, cat: "Pedicure" },
  { src: img_studio3.url, cat: "Acrylic Nails" },
  { src: img_studio4.url, cat: "Nail Art" },
  { src: img_studio5.url, cat: "Nail Art" },
  { src: `${SUPA}/1a32cc58-3e98-4f94-8966-77e55bdb9a23.jpg`, cat: "Nail Art" },
  { src: `${SUPA}/a866b3d0-752b-4582-b850-a03b9eda0561.jpg`, cat: "Acrylic Nails" },
  { src: `${SUPA}/ff98258c-1f8a-4d7f-b9b2-2b6f5c4d8e0a.jpg`, cat: "Manicure" },
  { src: `${SUPA}/3220b467-6713-47bf-93f7-4c1cbd9af0ec.jpg`, cat: "Nail Art" },
  { src: `${SUPA}/7c07a081-8659-45aa-bdbb-0bff62db5c79.jpg`, cat: "Nail Art" },
  { src: `${SUPA}/3058ca27-0151-4b1d-ac1b-f9ea5896ebc9.jpg`, cat: "Nail Polish" },
  { src: `${SUPA}/ffd760c5-cb6c-4698-a9b4-1819cf1a2807.jpg`, cat: "Eyelash Extensions" },
  { src: `${SUPA}/2d8210a1-1cb3-49c2-b7e6-4ddad1686f13.jpg`, cat: "Facials" },
  { src: `${SUPA}/38bd4c8b-c471-4923-ab4e-f2b05ed6a0a4.jpg`, cat: "Waxing" },
  { src: `${SUPA}/dc3fa75a-ea90-4f7e-9181-08defcfe65be.jpg`, cat: "Threading" },
  { src: `${SUPA}/05206169-0c66-4695-8350-85345d6df07a.jpg`, cat: "Nail Polish" },
  { src: `${SUPA}/c481fd7d-868a-4bbc-a936-417e8c6b73a9.jpg`, cat: "Nail Polish" },
  { src: `${SUPA}/85f44d98-c1e2-4a91-8c4a-ed96d2929c4e.jpg`, cat: "Facials" },
];

type Cat = "All" | "Manicure" | "Pedicure" | "Acrylic Nails" | "Nail Art" | "Nail Polish" | "Eyelash Extensions" | "Facials" | "Waxing" | "Threading";
const CATS: Cat[] = ["All", "Manicure", "Pedicure", "Acrylic Nails", "Nail Art", "Nail Polish", "Eyelash Extensions", "Facials", "Waxing", "Threading"];

const PILLARS = [
  { icon: "✦", title: "Hygiene First", body: "Single-use files, medical-grade sterilization, and hospital-standard protocols. Your safety is our non-negotiable foundation." },
  { icon: "◆", title: "Premium Products", body: "We use only salon-grade gel systems, dermatologist-approved formulas, and luxury brands proven to last." },
  { icon: "✎", title: "Artistry", body: "Our nail artists are trained in design theory and can translate any mood board, reference, or idea into wearable art." },
  { icon: "☆", title: "Ambience", body: "From the music to the lighting, every touchpoint is orchestrated to make you feel you've stepped out of the city." },
];

function GalleryMasonry({ images }: { images: typeof GALLERY_IMAGES }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 16,
      }}
    >
      {images.map((img, i) => (
        <div
          key={`${img.src}-${i}`}
          style={{
            aspectRatio: i % 5 === 0 ? "3 / 4" : "4 / 5",
            borderRadius: 8,
            border: "1px solid rgba(201,164,86,0.2)",
            backgroundImage: `url("${img.src}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#F3EDE4",
            transition: "transform 0.5s cubic-bezier(0.25,0.1,0.25,1)",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          }}
        />
      ))}
    </div>
  );
}

function AboutGalleryPage() {
  const [cat, setCat] = useState<Cat>("All");

  const filtered = cat === "All" ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.cat === cat);

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
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 30%, rgba(201,164,86,0.08) 0%, transparent 60%)", zIndex: 0 }} />
        <Particles count={10} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal>
            <span className="eyebrow" style={{ color: "#C9A456", marginBottom: 10, display: "block" }}>Our Story</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 6vw, 4.5rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.05, color: "#FAF7F2" }}>
              Crafted by People.{" "}
              <em className="shimmer-text" style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontStyle: "italic" }}>Trusted by Bangalore.</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", color: "rgba(250,247,242,0.8)", maxWidth: 500, margin: "16px auto 0", lineHeight: 1.85 }}>
              From a single studio in Jayanagar to four ateliers across Bangalore, our journey has been driven by an unwavering obsession with craft.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== ABOUT US ===== */}
      <section className="section-pad" style={{ background: "#FAF7F2" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div
                style={{
                  borderRadius: 12,
                  border: "1px solid rgba(201,164,86,0.25)",
                  overflow: "hidden",
                  boxShadow: "0 16px 48px rgba(90,60,20,0.1)",
                }}
              >
                <img
                  src={img_about.url}
                  alt="Inside The Nail Room studio"
                  style={{ width: "100%", height: "auto", display: "block" }}
                  loading="eager"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <span className="eyebrow">About Us</span>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#1A1208", fontWeight: 400, fontStyle: "italic", marginBottom: 20 }}>
                  The <em className="gradient-text" style={{ fontFamily: "var(--font-serif)" }}>Nail</em> Room Story.
                </h2>
                <GoldDivider />
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#5C4A35", lineHeight: 1.9, marginBottom: 18 }}>
                  What began as a vision to bring world-class nail artistry to Bangalore has become a destination for discerning clients across the city. At The Nail Room, we believe nails are not an accessory — they are a form of self-expression.
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#5C4A35", lineHeight: 1.9, marginBottom: 18 }}>
                  Our team of trained professionals approaches each nail as a canvas, balancing your personal style with technical excellence. From minimalist French tips to intricate 3D nail art, we treat every appointment as an opportunity to create something meaningful.
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#5C4A35", lineHeight: 1.9 }}>
                  With studios in <strong>Jayanagar, Sahakar Nagar, Malleshwaram, and Kammanahalli</strong>, we bring luxury nail care closer to you.
                </p>
                <Reveal delay={200}>
                  <Link to="/contact#booking-form" className="btn-primary" style={{ marginTop: 24, display: "inline-flex" }}>
                    Book Appointment →
                  </Link>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="section-pad" style={{ background: "#F3EDE4" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="eyebrow">Why Choose Us</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "#1A1208", fontWeight: 400, fontStyle: "italic" }}>
                Why <em className="gradient-text" style={{ fontFamily: "var(--font-serif)" }}>Bangalore</em> Trusts Us.
              </h2>
              <GoldDivider />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "♛",
                title: "550+ Five-Star Reviews",
                body: "A consistent 5.0 rating across Google reflects the trust our clients place in us — and the experience we deliver every single time.",
              },
              {
                icon: "◈",
                title: "Four Studios Across Bangalore",
                body: "From Jayanagar to Kammanahalli, we bring the same uncompromising standard to every neighborhood we serve.",
              },
              {
                icon: "✦",
                title: "Certified Nail Artists",
                body: "Every artist on our team undergoes rigorous training and continuous education in the latest techniques and trends.",
              },
              {
                icon: "☆",
                title: "Luxury Products Only",
                body: "We work exclusively with salon-grade gel systems, single-use implements, and dermatologist-approved formulas.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div
                  className="glass-card"
                  style={{
                    padding: "36px 32px",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div className="card-gold-top" />
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <span style={{ fontSize: 28, color: "#C9A456", lineHeight: 1 }}>{c.icon}</span>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "1.25rem", color: "#C9A456", marginBottom: 10 }}>
                        {c.title}
                      </h3>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "#5C4A35", lineHeight: 1.75 }}>
                        {c.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE NAIL ROOM STANDARD ===== */}
      <section className="section-pad" style={{ background: "#1A1208" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="eyebrow">The Standard</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "#FAF7F2", fontWeight: 400, fontStyle: "italic" }}>
                The Nail Room{" "}
                <em className="shimmer-text" style={{ fontFamily: "var(--font-serif)" }}>Standard.</em>
              </h2>
              <GoldDivider />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="dark-card" style={{ padding: "36px 28px", height: "100%", textAlign: "center" }}>
                  <div className="card-gold-top" />
                  <div style={{ fontSize: 32, marginBottom: 16, color: "#C9A456" }}>{p.icon}</div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "1.15rem", color: "#C9A456", marginBottom: 12 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "rgba(250,247,242,0.7)", lineHeight: 1.75 }}>
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div style={{ textAlign: "center", marginTop: 56 }}>
              <Link to="/contact#booking-form" className="btn-primary">
                Experience the Standard →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="section-pad" style={{ background: "#FAF7F2" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="eyebrow">The Gallery</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#1A1208", fontWeight: 400, fontStyle: "italic" }}>
                A <em className="gradient-text" style={{ fontFamily: "var(--font-serif)" }}>Curated</em> Archive.
              </h2>
              <GoldDivider />
              <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.92rem", color: "#5C4A35", maxWidth: 480, margin: "8px auto 0" }}>
                Explore our portfolio of nail art across styles, shapes, and services.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 40 }}>
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`filter-tab ${cat === c ? "active" : ""}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <GalleryMasonry images={filtered} />
          </Reveal>

          <Reveal delay={300}>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <Link to="/contact#booking-form" className="btn-outline-gold">
                Book Your Session →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <PageFooterNav
        nextTo="/contact"
        nextLabel="Book Appointment"
        teaser="Ready to experience Bangalore's finest nail atelier?"
        pageNumber={2}
        totalPages={6}
      />
    </SiteLayout>
  );
}
