import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Eyebrow, Hairline, Stars } from "@/components/site/Layout";
import { SequentialNav } from "@/components/site/SequentialNav";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Nail Room — Bangalore's Luxury Nail Atelier" },
      { name: "description", content: "Four studios across Bangalore. Handcrafted nail art, clinical precision, and an atmosphere designed to make you feel entirely seen." },
      { property: "og:title", content: "The Nail Room — Bangalore" },
      { property: "og:description", content: "Where nails become your finest detail." },
    ],
  }),
  component: HomePage,
});

const press = ["Vogue", "Elle", "Verve", "Lakmé", "Fabindia"];

const philosophy = [
  {
    title: "Curated Materials",
    body: "We work exclusively with salon-grade gel systems, dermatologist-approved acetones, and single-use implements — so every visit is as clean as it is beautiful.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M16 4 L28 16 L16 28 L4 16 Z" />
        <path d="M16 4 L10 16 L16 28 M16 4 L22 16 L16 28 M4 16 H28" />
      </svg>
    ),
  },
  {
    title: "Artist-Level Craft",
    body: "Our nail artists don't follow trends — they interpret them. Each set is treated as a composition, balanced for your hand shape, skin tone, and personal aesthetic.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M6 26 C10 20, 14 14, 22 8" />
        <path d="M22 8 L26 6 L24 10 Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "A Ritual, Not a Task",
    body: "From the moment you arrive, the environment is designed for one thing: to make you feel that this hour belongs entirely to you.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M16 6 C12 14, 12 18, 16 26 C20 18, 20 14, 16 6 Z" />
        <path d="M8 18 C12 20, 14 22, 16 26 M24 18 C20 20, 18 22, 16 26" />
      </svg>
    ),
  },
];

const services = [
  { name: "Gel Manicure", desc: "Sheer glazed rose on perfectly oval nails.", art: "ed-img-rose" },
  { name: "Nail Art", desc: "Hand-painted gold florals on ivory.", art: "ed-img-ivory" },
  { name: "Acrylic Extensions", desc: "Sculpted stiletto in matte onyx.", art: "ed-img-noir" },
  { name: "Pedicure Ritual", desc: "A 75-minute restoration for tired feet.", art: "ed-img" },
];

const reviews = [
  { q: "I've visited nail salons across Bangalore and nothing compares to the level of detail here. My gel manicure lasted four weeks without a single chip.", name: "Anshika S., Malleshwaram" },
  { q: "The studio is so calm and clean — I didn't want to leave. The nail art they created from my reference photo was even better than the original.", name: "Nandini V., Jayanagar" },
  { q: "I came in for a simple pedicure and left feeling completely restored. The products, the touch, the attention — it's in a different league.", name: "Rashmi R., Sahakar Nagar" },
];

const gallery = ["ed-img-ivory", "ed-img-rose", "ed-img-noir", "ed-img", "ed-img-dark", "ed-img-rose"];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="ed-img-noir relative" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", marginTop: -72, paddingTop: 72 }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(14,13,12,0.55) 0%, rgba(14,13,12,0.25) 60%, rgba(14,13,12,0.65) 100%)" }} />
        <div className="relative text-center px-6" style={{ maxWidth: 820 }}>
          <Reveal>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--color-champagne)", fontWeight: 500 }}>
              Bangalore's Luxury Nail Atelier
            </span>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="h-display" style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", color: "#FAFAF7", marginTop: 24, lineHeight: 1 }}>
              Where Nails Become<br />
              Your <em style={{ fontStyle: "italic" }}>Finest</em> Detail.
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <p style={{ color: "rgba(250,250,247,0.8)", maxWidth: 520, margin: "32px auto 0", lineHeight: 1.8 }}>
              Four studios across Bangalore. One uncompromising standard. Handcrafted nail art, clinical precision, and an atmosphere designed to make you feel entirely seen.
            </p>
          </Reveal>
          <Reveal delay={700}>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link to="/locations-book" className="btn-primary">Reserve Your Visit</Link>
              <Link to="/gallery-blogs" className="btn-ghost" style={{ borderColor: "rgba(250,250,247,0.5)", color: "#FAFAF7" }}>View Our Work</Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="scroll-line" />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.55rem", letterSpacing: "0.3em", color: "rgba(201,168,124,0.6)" }}>SCROLL</span>
        </div>
      </section>

      {/* AS FEATURED IN */}
      <section className="section-pad text-center" style={{ background: "var(--color-alabaster)" }}>
        <Reveal><Eyebrow>As Featured In</Eyebrow></Reveal>
        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6 mt-4">
            {press.map((p) => (
              <span key={p} style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--color-stone)", opacity: 0.4, transition: "opacity 0.4s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}>
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <Hairline />

      {/* PHILOSOPHY */}
      <section className="section-pad" style={{ background: "var(--color-blush-veil)" }}>
        <div className="max-w-6xl mx-auto text-center">
          <Reveal><Eyebrow>Our Promise</Eyebrow></Reveal>
          <Reveal delay={100}><h2 className="h-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 64 }}>Three commitments. Held without exception.</h2></Reveal>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div style={{ color: "var(--color-champagne)" }}>{p.icon}</div>
                <h3 className="h-display" style={{ fontSize: "1.6rem", margin: "20px 0 12px" }}>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Hairline />

      {/* SERVICES PREVIEW */}
      <section className="section-pad" style={{ background: "var(--color-alabaster)" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal><Eyebrow>What We Create</Eyebrow></Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <h2 className="h-display" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>Every treatment,<br />a transformation.</h2>
              <p style={{ maxWidth: 380 }}>Explore our signature services — from quiet classics to bold editorial nail art.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={i * 100}>
                <div className="lift-card overflow-hidden" style={{ background: "var(--color-parchment)" }}>
                  <div className={s.art} style={{ aspectRatio: "3/4" }} />
                  <div style={{ padding: 24 }}>
                    <h3 className="h-display" style={{ fontSize: "1.35rem", marginBottom: 8 }}>{s.name}</h3>
                    <p style={{ fontSize: "0.8rem", marginBottom: 16 }}>{s.desc}</p>
                    <Link to="/services" style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-champagne)" }}>
                      Discover →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/services" style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-champagne)", borderBottom: "1px solid currentColor", paddingBottom: 4 }}>
              See All Services →
            </Link>
          </div>
        </div>
      </section>

      <Hairline />

      {/* SOCIAL PROOF */}
      <section className="section-pad" style={{ background: "var(--color-blush-veil)" }}>
        <div className="max-w-7xl mx-auto text-center">
          <Reveal><Eyebrow>Client Voices</Eyebrow></Reveal>
          <Reveal delay={100}><h2 className="h-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 64 }}>551 clients. One consistent word: <em>exceptional</em>.</h2></Reveal>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <div style={{ background: "var(--color-parchment)", padding: 40, boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                  <Stars />
                  <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--color-charcoal)", lineHeight: 1.6, marginBottom: 24 }}>
                    "{r.q}"
                  </p>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-stone)" }}>
                    — {r.name}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p style={{ marginTop: 40, fontSize: "0.75rem" }}>Rated 5.0 on Google · 551 verified reviews</p>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="section-pad" style={{ background: "var(--color-obsidian)" }}>
        <div className="max-w-7xl mx-auto text-center">
          <Reveal><Eyebrow>Recent Work</Eyebrow></Reveal>
          <Reveal delay={100}><h2 className="h-display" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#F8F5F1", marginBottom: 56 }}>Art you'll want to wear.</h2></Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={`${g} relative group cursor-pointer`} style={{ aspectRatio: "1/1" }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center" style={{ background: "rgba(14,13,12,0.55)" }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-champagne)" }}>
                      {["Nail Art", "Gel Manicure", "Extensions", "Pedicure", "Editorial", "Seasonal"][i]}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/gallery-blogs" className="btn-ghost">Enter the Full Gallery →</Link>
          </div>
        </div>
      </section>

      <SequentialNav
        heading="Ready to see what's possible for your nails?"
        to="/services"
        cta="Page 2: Explore Our Luxury Services Menu →"
      />
    </SiteLayout>
  );
}
