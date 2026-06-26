import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout, Eyebrow, GoldDivider, PageFooterNav } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us & Gallery — Nail Room Bangalore" },
      { name: "description", content: "About Nail Room — Bangalore's nail art and care studio. Browse our gallery of manicures, pedicures, nail art and more." },
    ],
  }),
  component: AboutGalleryPage,
});

type Cat =
  | "All"
  | "Manicure"
  | "Pedicure"
  | "Acrylic Nails"
  | "Nail Art"
  | "Nail Polish"
  | "Eyelash Extensions"
  | "Facials"
  | "Waxing"
  | "Threading";

const CATS: Cat[] = [
  "All", "Manicure", "Pedicure", "Acrylic Nails", "Nail Art",
  "Nail Polish", "Eyelash Extensions", "Facials", "Waxing", "Threading",
];

// 4 placeholder swatches per category
const SWATCHES = ["ed-img", "ed-img-rose", "ed-img-velvet", "ed-img-noir"];

// Carousel of all categories (a representative image each)
const ALL_IMAGES: { cat: Exclude<Cat, "All">; cls: string }[] = CATS
  .filter((c) => c !== "All")
  .flatMap((c) => SWATCHES.map((cls) => ({ cat: c as Exclude<Cat, "All">, cls })));

function AboutGalleryPage() {
  const [cat, setCat] = useState<Cat>("All");
  const [idx, setIdx] = useState(0);

  // Auto-advance carousel for "All"
  useEffect(() => {
    if (cat !== "All") return;
    const t = setInterval(() => setIdx((i) => (i + 1) % ALL_IMAGES.length), 3200);
    return () => clearInterval(t);
  }, [cat]);

  useEffect(() => { setIdx(0); }, [cat]);

  return (
    <SiteLayout>
      {/* ===== About Us ===== */}
      <section className="section-pad" style={{ paddingTop: 120 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <Eyebrow>About Us</Eyebrow>
              <h1 style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}>
                Our <em className="gold-gradient" style={{ fontStyle: "italic" }}>Story</em>
              </h1>
              <GoldDivider />
            </div>
          </Reveal>

          <Reveal>
            <div className="glass-strong" style={{ padding: "44px 40px" }}>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.85 }}>
                Looking for the best nail art and care services in Bangalore? Look no further than Nail Room! Our team of{" "}
                <strong className="text-amber-200" style={{ color: "var(--color-gold-bright)" }}>skilled and experienced nail artists</strong>{" "}
                is dedicated to providing the{" "}
                <strong className="text-amber-200" style={{ color: "var(--color-gold-bright)" }}>highest quality services</strong>{" "}
                to help you achieve the{" "}
                <strong className="text-amber-200" style={{ color: "var(--color-gold-bright)" }}>perfect nails</strong>.
                We take pride in being the best nail salon in Bangalore and beyond. Our experts use the latest techniques and high-quality products
                to ensure that your nails are healthy, strong, and beautiful. At Nail Room, we understand that your nails are an important part of your overall look,
                which is why we take extra care to ensure that each client's{" "}
                <strong className="text-amber-200" style={{ color: "var(--color-gold-bright)" }}>unique needs are met</strong>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className="section-pad" style={{ paddingTop: 20 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <Eyebrow>Why Nail Room</Eyebrow>
              <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}>
                Why Choose <em className="gold-gradient" style={{ fontStyle: "italic" }}>Nail Room</em>
              </h2>
              <GoldDivider />
            </div>
          </Reveal>

          <Reveal>
            <div className="glass-strong" style={{ padding: "44px 40px" }}>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.85 }}>
                Discover the{" "}
                <strong className="text-amber-200" style={{ color: "var(--color-gold-bright)" }}>latest trends and designs</strong>{" "}
                in nail art at Nail Room. Our expert nail artists are here to help you achieve your dream nails.
                We only use{" "}
                <strong className="text-amber-200" style={{ color: "var(--color-gold-bright)" }}>highest quality products</strong>{" "}
                and techniques for a{" "}
                <strong className="text-amber-200" style={{ color: "var(--color-gold-bright)" }}>long-lasting finish</strong>.
                Come visit us at Nail Room and leave with{" "}
                <strong className="text-amber-200" style={{ color: "var(--color-gold-bright)" }}>beautiful, healthy nails</strong>{" "}
                that you'll love to show off.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Gallery ===== */}
      <section className="section-pad">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <Eyebrow>The Gallery</Eyebrow>
              <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
                A <em className="gold-gradient" style={{ fontStyle: "italic" }}>curated</em> archive
              </h2>
              <GoldDivider />
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 48 }}>
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={cat === c ? "btn-gold" : "btn-ghost-gold"}
                  style={{ padding: "10px 18px", fontSize: "0.68rem" }}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          {cat === "All" ? (
            <Reveal>
              <div
                className="glass-strong"
                style={{ padding: 18, position: "relative", overflow: "hidden" }}
              >
                <div
                  style={{
                    display: "flex",
                    transition: "transform 0.7s cubic-bezier(.6,.2,.2,1)",
                    transform: `translateX(-${idx * 100}%)`,
                  }}
                >
                  {ALL_IMAGES.map((g, i) => (
                    <div key={i} style={{ flex: "0 0 100%", padding: 6 }}>
                      <div
                        className={g.cls}
                        style={{
                          aspectRatio: "16 / 9",
                          borderRadius: 8,
                          border: "1px solid rgba(230,199,112,0.3)",
                          boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 16 }}>
                  {ALL_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      aria-label={`Slide ${i + 1}`}
                      style={{
                        width: i === idx ? 28 : 8, height: 4, borderRadius: 2,
                        background: i === idx ? "var(--color-gold-bright)" : "rgba(230,199,112,0.3)",
                        transition: "all 0.4s ease", border: 0,
                      }}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {SWATCHES.map((cls, i) => (
                  <div
                    key={i}
                    className={`${cls} lift-img`}
                    style={{
                      aspectRatio: "1 / 1",
                      borderRadius: 8,
                      border: "1px solid rgba(230,199,112,0.3)",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                    }}
                  />
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <PageFooterNav nextTo="/contact" nextLabel="Contact" />
    </SiteLayout>
  );
}
