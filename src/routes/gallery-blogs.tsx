import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout, Eyebrow, Hairline } from "@/components/site/Layout";
import { SequentialNav } from "@/components/site/SequentialNav";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/gallery-blogs")({
  head: () => ({
    meta: [
      { title: "Gallery & Journal — The Nail Room Bangalore" },
      { name: "description", content: "Browse our hand-picked nail art gallery and editorial beauty dispatches from The Nail Room's artists." },
      { property: "og:title", content: "Gallery & Journal — The Nail Room" },
      { property: "og:description", content: "Nail art that makes you want." },
    ],
  }),
  component: GalleryPage,
});

const FILTERS = ["All", "Gel Manicure", "Nail Art", "Extensions", "Seasonal"] as const;

const items = [
  { tag: "Gel Manicure", art: "ed-img-rose", caption: "Chrome rose-gold mirror finish" },
  { tag: "Nail Art", art: "ed-img-ivory", caption: "Hand-painted daisies on sheer pink" },
  { tag: "Extensions", art: "ed-img-noir", caption: "Emerald matte coffin" },
  { tag: "Gel Manicure", art: "ed-img-rose", caption: "Nude-to-wine ombré, golden hour" },
  { tag: "Nail Art", art: "ed-img-ivory", caption: "Champagne-gold reverse French" },
  { tag: "Nail Art", art: "ed-img", caption: "Pressed flowers in clear gloss" },
  { tag: "Nail Art", art: "ed-img-dark", caption: "Sharp black geometry on ivory" },
  { tag: "Nail Art", art: "ed-img-rose", caption: "Watercolour roses, dusty pink & sage" },
  { tag: "Nail Art", art: "ed-img-noir", caption: "Pearl base, hand-painted galaxy accent" },
  { tag: "Extensions", art: "ed-img-noir", caption: "Matte stiletto with glitter accent" },
  { tag: "Seasonal", art: "ed-img", caption: "Coral summer pedicure on stone" },
  { tag: "Seasonal", art: "ed-img-ivory", caption: "Tonal browns, four-hand fan" },
];

const posts = [
  { cat: "Trend Report", title: "The Nail Art Movements Dominating 2026", date: "June 2026", teaser: "From the quiet luxury nail to maximalist chrome floral — we break down the aesthetics driving every appointment request this season.", art: "ed-img-rose" },
  { cat: "Nail Care", title: "How to Keep Your Gel Manicure Pristine for Four Weeks", date: "May 2026", teaser: "Our lead nail artist shares the five at-home habits that separate a two-week gel from a four-week one.", art: "ed-img-ivory" },
  { cat: "Seasonal Edit", title: "Office-Appropriate Nails That Still Feel Like You", date: "April 2026", teaser: "Elegant doesn't have to mean boring. We've curated 12 nail looks that pass any dress code while staying unmistakably personal.", art: "ed-img" },
];

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const filtered = useMemo(() => filter === "All" ? items : items.filter((i) => i.tag === filter), [filter]);

  return (
    <SiteLayout>
      <section className="section-pad text-center" style={{ background: "var(--color-alabaster)", minHeight: "35vh" }}>
        <Reveal><Eyebrow>Page 4 of 5 — Gallery & Blogs</Eyebrow></Reveal>
        <Reveal delay={120}>
          <h1 className="h-display" style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}>
            Visual Desire.<br /><em style={{ fontStyle: "italic" }}>Nail art that makes you want.</em>
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <p style={{ marginTop: 28, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            Browse our gallery for your next appointment inspiration. Then read our editorial beauty dispatches below.
          </p>
        </Reveal>
      </section>

      <section className="section-pad" style={{ background: "var(--color-obsidian)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Reveal><Eyebrow color="var(--color-champagne)">The Gallery</Eyebrow></Reveal>
            <Reveal delay={100}><h2 className="h-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--color-alabaster)" }}>Every set we've ever loved.</h2></Reveal>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-14">
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom: `2px solid ${active ? "var(--color-champagne)" : "transparent"}`,
                    padding: "8px 2px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: active ? "var(--color-champagne)" : "var(--color-stone)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((it, i) => (
              <Reveal key={`${filter}-${i}`} delay={(i % 6) * 60}>
                <div className={`${it.art} relative group cursor-pointer`} style={{ aspectRatio: i % 3 === 1 ? "3/4" : "1/1" }}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "rgba(14,13,12,0.55)" }}>
                    <div className="text-center px-4">
                      <div style={{ color: "var(--color-champagne)", fontSize: "2rem", fontWeight: 300, marginBottom: 8 }}>+</div>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-alabaster)" }}>{it.caption}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <p style={{ color: "var(--color-stone)" }}>
              Follow our daily work on Instagram —{" "}
              <a href="#" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--color-champagne)" }}>@thenailroom.bangalore</a>
            </p>
          </div>
        </div>
      </section>

      <Hairline />

      <section className="section-pad" style={{ background: "var(--color-blush-veil)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal><Eyebrow>The Journal</Eyebrow></Reveal>
            <Reveal delay={100}><h2 className="h-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 16 }}>Beauty dispatches from The Nail Room.</h2></Reveal>
            <Reveal delay={200}><p>Our artists write about what they love — the trends, the techniques, and the ideas worth knowing.</p></Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <article className="lift-card" style={{ background: "var(--color-parchment)", overflow: "hidden" }}>
                  <div className={p.art} style={{ aspectRatio: "4/3" }} />
                  <div style={{ padding: 28 }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-champagne)", fontWeight: 500 }}>{p.cat}</span>
                    <h3 className="h-display" style={{ fontSize: "1.5rem", margin: "14px 0 10px", lineHeight: 1.25 }}>{p.title}</h3>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "var(--color-stone)", marginBottom: 14 }}>{p.date}</div>
                    <p style={{ fontSize: "0.85rem", marginBottom: 18 }}>{p.teaser}</p>
                    <a href="#" style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-champagne)", borderBottom: "1px solid currentColor", paddingBottom: 2 }}>Read the full piece →</a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SequentialNav
        heading="Find your nearest studio and secure your date."
        to="/locations-book"
        cta="Page 5: Find a Studio & Secure Your Booking Date →"
      />
    </SiteLayout>
  );
}
