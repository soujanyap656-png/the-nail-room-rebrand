import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, Eyebrow, GoldDivider, PageFooterNav } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Gallery — The Nail Room Bangalore" },
      { name: "description", content: "Best nail art studio & salon in Bangalore. Explore our story, why-choose-us, and a curated gallery across all our services." },
    ],
  }),
  component: AboutGalleryPage,
});

type Cat = "All" | "Manicure" | "Pedicure" | "Acrylic Nails" | "Nail Art" | "Nail Polish" | "Eyelash Extensions" | "Facials" | "Waxing" | "Threading";

const IMG_CLASSES = ["ed-img", "ed-img-rose", "ed-img-noir", "ed-img-velvet"];

const CATS: Cat[] = ["All", "Manicure", "Pedicure", "Acrylic Nails", "Nail Art", "Nail Polish", "Eyelash Extensions", "Facials", "Waxing", "Threading"];

function AboutGalleryPage() {
  const [cat, setCat] = useState<Cat>("All");

  // All view = 4 imgs × 9 categories carousel
  const allImages = CATS.slice(1).flatMap((c) =>
    [0, 1, 2, 3].map((i) => ({ key: `${c}-${i}`, cls: IMG_CLASSES[(i + c.length) % IMG_CLASSES.length] })),
  );

  return (
    <SiteLayout>
      {/* ===== ABOUT US ===== */}
      <section id="about-us" className="section-pad" style={{ paddingTop: 100, scrollMarginTop: 110 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <Eyebrow>About Us</Eyebrow>
              <h1 style={{ fontSize: "clamp(2.6rem, 6vw, 4.6rem)" }}>
                Best Nail Art Studio &amp; <em className="gold-gradient" style={{ fontStyle: "italic" }}>Salon</em> in Bangalore
              </h1>
              <GoldDivider />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-strong" style={{ padding: "40px 32px" }}>
              <p style={{ marginBottom: 18 }}>
                Looking for the <strong>best nail art and care services in Bangalore</strong>? Look no further than Nail Room! Our team of <strong>skilled and experienced nail artists</strong> is dedicated to providing the highest quality services to help you achieve the perfect nails. We take pride in being the <strong>best nail salon in Bangalore</strong> and beyond, offering a wide range of services including <strong>manicure, pedicure, acrylic nails, nail art</strong>, and more. Our experts use the latest techniques and high-quality products to ensure that your nails are <strong>healthy, strong, and beautiful</strong>.
              </p>
              <p style={{ marginBottom: 18 }}>
                At Nail Room, we understand that your nails are an important part of your overall look, which is why we take extra care to ensure that each client's <strong>unique needs are met</strong>. Our talented nail artists are always up-to-date with the <strong>latest trends and techniques</strong> in the industry, ensuring that you always receive the best service.
              </p>
              <p style={{ marginBottom: 18 }}>
                With locations in <strong>Jayanagar, Sahakar Nagar, Malleshwaram, and Kammanahalli</strong>, we bring <strong>premium nail care</strong> closer to you. Whether you're looking for the <strong>best nail art</strong>, the finest <strong>manicure and pedicure</strong>, or just a relaxing experience, Nail Room has got you covered.
              </p>
              <p>
                <strong>Book an appointment with us today</strong> and experience the best in nail care and art services in Bangalore and beyond!
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== WHY CHOOSE NAIL ROOM ===== */}
      <section className="section-pad" style={{ paddingTop: 40 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <Eyebrow>Why The Nail Room</Eyebrow>
              <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
                Why <em className="gold-gradient" style={{ fontStyle: "italic" }}>Choose</em> Nail Room?
              </h2>
              <GoldDivider />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-strong" style={{ padding: "40px 32px" }}>
              <p style={{ marginBottom: 24 }}>
                Our team of <strong>experienced nail artists</strong> are dedicated to providing you with the <strong>ultimate nail spa experience</strong>, using only the <strong>highest quality products</strong> and techniques. Whether you're looking for classic nail treatments or the <strong>latest in nail art trends</strong>, we've got you covered.
              </p>
              <ul style={{ display: "grid", gap: 14, listStyle: "none", padding: 0 }}>
                {[
                  "Discover the **latest trends and designs** in nail art at Nail Room.",
                  "Our **expert nail artists** are here to help you achieve your dream nails.",
                  "We only use the **highest quality products** and techniques for a **long-lasting finish**.",
                  "Come visit us at Nail Room and leave with **beautiful, healthy nails** that you'll love to show off.",
                ].map((b) => (
                  <li key={b} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--color-gold-bright)", fontFamily: "var(--font-display)", fontSize: "1.2rem", lineHeight: 1 }}>✦</span>
                    <span
                      style={{ color: "var(--color-mist)", fontSize: "0.95rem", lineHeight: 1.7 }}
                      dangerouslySetInnerHTML={{ __html: b.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="section-pad">
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <Eyebrow>The Gallery</Eyebrow>
              <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
                A <em className="gold-gradient" style={{ fontStyle: "italic" }}>curated</em> archive
              </h2>
              <GoldDivider />
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 40 }}>
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={cat === c ? "btn-gold" : "btn-ghost-gold"}
                  style={{ padding: "10px 18px", fontSize: "0.62rem" }}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          {cat === "All" ? (
            <div className="h-scroll">
              {allImages.map((img) => (
                <div
                  key={img.key}
                  className={img.cls}
                  style={{
                    aspectRatio: "4 / 5",
                    borderRadius: 6,
                    border: "1px solid rgba(230,199,112,0.22)",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                  }}
                />
              ))}
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 900, margin: "0 auto" }}>
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={IMG_CLASSES[i]}
                  style={{
                    aspectRatio: "1 / 1",
                    borderRadius: 6,
                    border: "1px solid rgba(230,199,112,0.22)",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <PageFooterNav nextTo="/contact" nextLabel="Contact" />
    </SiteLayout>
  );
}
