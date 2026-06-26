import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, Eyebrow, GoldDivider, PageFooterNav } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Gallery — The Nail Room Bangalore" },
      { name: "description", content: "Meet Bangalore's most awarded nail artists and explore our masonry gallery of signature work — gel, art, extensions, pedicure." },
    ],
  }),
  component: AboutGalleryPage,
});

const TEAM = [
  { name: "Aanya Rao", role: "Founder · Lead Artist", bio: "Trained in **Moscow & Seoul**, Aanya brought Russian e-file precision to Bangalore in 2018." },
  { name: "Kavya Suresh", role: "Head of Art", bio: "Featured in **Vogue India** for her hand-painted floral micro-art and **couture chrome work**." },
  { name: "Meher Bhat", role: "Senior Specialist", bio: "Six-time award winner at the **Asia Nail Cup** with mastery in **soft-gel sculpting**." },
];

type Cat = "All" | "Manicure" | "Pedicure" | "Art" | "Extensions" | "Chrome";
const GALLERY: { cat: Exclude<Cat, "All">; cls: string }[] = [
  { cat: "Manicure", cls: "ed-img" },
  { cat: "Art", cls: "ed-img-rose" },
  { cat: "Chrome", cls: "ed-img-noir" },
  { cat: "Extensions", cls: "ed-img-velvet" },
  { cat: "Pedicure", cls: "ed-img" },
  { cat: "Art", cls: "ed-img-velvet" },
  { cat: "Manicure", cls: "ed-img-rose" },
  { cat: "Chrome", cls: "ed-img" },
  { cat: "Pedicure", cls: "ed-img-noir" },
  { cat: "Extensions", cls: "ed-img-rose" },
  { cat: "Art", cls: "ed-img" },
  { cat: "Manicure", cls: "ed-img-velvet" },
  { cat: "Chrome", cls: "ed-img-rose" },
  { cat: "Pedicure", cls: "ed-img-velvet" },
  { cat: "Extensions", cls: "ed-img-noir" },
  { cat: "Art", cls: "ed-img-rose" },
];

const HEIGHTS = [320, 420, 280, 360, 460, 300, 380, 340, 420, 300, 360, 440, 300, 380, 320, 400];

function AboutGalleryPage() {
  const [cat, setCat] = useState<Cat>("All");
  const cats: Cat[] = ["All", "Manicure", "Pedicure", "Art", "Extensions", "Chrome"];
  const filtered = GALLERY.map((g, i) => ({ ...g, i })).filter((g) => cat === "All" || g.cat === cat);

  return (
    <SiteLayout>
      {/* ===== Magazine hero ===== */}
      <section className="section-pad" style={{ paddingTop: 120 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 80 }}>
              <Eyebrow>Our Story</Eyebrow>
              <h1 style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
                Eight years of <em className="gold-gradient" style={{ fontStyle: "italic" }}>quiet</em> obsession
              </h1>
              <GoldDivider />
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <Reveal>
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="ed-img" style={{ aspectRatio: "3 / 4", borderRadius: 4, marginTop: 32 }} />
                <div className="ed-img-rose" style={{ aspectRatio: "3 / 4", borderRadius: 4 }} />
                <div className="ed-img-velvet" style={{ aspectRatio: "4 / 3", borderRadius: 4, gridColumn: "span 2" }} />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="lg:col-span-7 lg:pl-12">
                <div className="glass-strong" style={{ padding: "40px 36px" }}>
                  <p className="eyebrow">Atelier Manifesto</p>
                  <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 24 }}>
                    Built for the <em className="gold-gradient" style={{ fontStyle: "italic" }}>discerning</em>.
                  </h2>
                  <p style={{ marginBottom: 20 }}>
                    The Nail Room began in <strong>2018</strong>, in a single sunlit room above a Malleshwaram bakery — opened by Aanya Rao, returning home from <strong>Moscow's most exacting nail academy</strong>.
                  </p>
                  <p style={{ marginBottom: 20 }}>
                    Today, across <strong>four refined studios</strong>, we deliver a level of <strong>clinical hygiene</strong> and <strong>hand-artistry</strong> the city had never before seen. No templates. No rushing. <strong>Only craft.</strong>
                  </p>
                  <p>
                    Every guest is welcomed with warm towels, a curated playlist, and the unhurried attention of a <strong>trained specialist</strong> — never an apprentice.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Team ===== */}
      <section className="section-pad">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Eyebrow>The Artists</Eyebrow>
              <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
                Hands you can <em className="gold-gradient" style={{ fontStyle: "italic" }}>trust</em>
              </h2>
              <GoldDivider />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <div className="glass-strong" style={{ padding: 0, overflow: "hidden" }}>
                  <div className={i === 1 ? "ed-img-rose" : "ed-img"} style={{ aspectRatio: "4 / 5" }} />
                  <div style={{ padding: 28 }}>
                    <h3 style={{ fontSize: "1.7rem", marginBottom: 4 }}>{m.name}</h3>
                    <p style={{ color: "var(--color-gold-bright)", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 16 }}>{m.role}</p>
                    <p
                      style={{ fontSize: "0.9rem" }}
                      dangerouslySetInnerHTML={{ __html: m.bio.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Gallery — masonry with filters ===== */}
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
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 48 }}>
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={cat === c ? "btn-gold" : "btn-ghost-gold"}
                  style={{ padding: "12px 22px", fontSize: "0.7rem" }}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div style={{ columnCount: 1, columnGap: 16 }} className="md:[column-count:2] lg:[column-count:3] xl:[column-count:4]">
            {filtered.map((g) => (
              <div key={g.i} style={{ breakInside: "avoid", marginBottom: 16 }}>
                <div
                  className={`${g.cls} lift-img`}
                  style={{
                    height: HEIGHTS[g.i],
                    borderRadius: 6,
                    border: "1px solid rgba(230,199,112,0.22)",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                    transition: "transform 0.5s ease, box-shadow 0.5s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 30px 80px rgba(230,199,112,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(0,0,0,0.4)";
                  }}
                />
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-gold)", marginTop: 8 }}>{g.cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageFooterNav nextTo="/contact" nextLabel="Contact" />
    </SiteLayout>
  );
}
