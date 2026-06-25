import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Eyebrow, Hairline, Stars } from "@/components/site/Layout";
import { SequentialNav } from "@/components/site/SequentialNav";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about-reviews")({
  head: () => ({
    meta: [
      { title: "About & Reviews — The Nail Room Bangalore" },
      { name: "description", content: "Meet the artists behind The Nail Room and read 551 verified five-star reviews from our Bangalore clients." },
      { property: "og:title", content: "About & Reviews — The Nail Room" },
      { property: "og:description", content: "Crafted by people. Trusted by clients." },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Priya M.", title: "Lead Nail Artist, Malleshwaram", spec: "Speciality: Gel Sculpture & Micro-detail Art" },
  { name: "Sneha K.", title: "Senior Artist, Jayanagar", spec: "Speciality: Acrylic Extensions & Ombré" },
  { name: "Divya R.", title: "Nail Art Director", spec: "Speciality: Hand-painted Editorial & 3D Design" },
];

const pillars = [
  { title: "Clinical Hygiene", body: "Every implement is sterilised before use. Every surface is sanitised between clients. We have never, and will never, cut corners on the health of our clients." },
  { title: "Premium Materials Only", body: "We source our gels, acrylics, polishes, and skincare products exclusively from professional-grade, dermatologist-tested brands. Nothing off a retail shelf. Ever." },
  { title: "Your Vision, Delivered", body: "We listen before we create. Bring a reference photo, a mood board, or just a feeling — our artists will translate it into something wearable and exactly you." },
  { title: "Lasting Results", body: "Our gel manicures are engineered to last. Our extensions are sculpted for strength. We don't book you back for repairs — we book you back because you want to return." },
];

const reviews = [
  { q: "I've been a client for two years now. The consistency is remarkable — every single appointment my nails look exactly how I imagined them, sometimes even better.", n: "Meera T., Malleshwaram" },
  { q: "Came in for acrylic extensions before a wedding. Left with something I genuinely didn't want to take off. Received more compliments on my nails that day than on my outfit.", n: "Shreya B., Jayanagar" },
  { q: "The studio is so different from other salons. It's quiet, it smells incredible, and nobody rushes you. I feel like an entirely different person when I leave.", n: "Ananya K., Sahakar Nagar" },
  { q: "My nail artist at Kammanahalli is an absolute genius. I show her a vague Pinterest image and she interprets it into something that suits me perfectly.", n: "Kavita M., Kammanahalli" },
  { q: "I have sensitive skin and was always nervous about gel removals. They were so careful and gentle — my nails came out healthier than they went in.", n: "Pooja R., Malleshwaram" },
  { q: "Every visit feels like a small luxury holiday. The prices are fair for what you get. This is genuinely the best nail studio in Bangalore.", n: "Ritu S., Jayanagar" },
  { q: "Booked a group appointment for six people before my birthday. They handled everything flawlessly. All six of us had different nail art requests and all six were executed beautifully.", n: "Prachi D., Sahakar Nagar" },
  { q: "I'm extremely particular about nail shape. Not one artist has ever gotten it wrong here. They listen, they measure, and they deliver.", n: "Swati N., Malleshwaram" },
  { q: "The lash extension service is worth the drive across the city. My stylist understood exactly what I wanted without me having to explain twice.", n: "Lavanya P., Kammanahalli" },
];

function AboutPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="ed-img-noir relative" style={{ minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center", marginTop: -72, paddingTop: 72 }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(14,13,12,0.65), rgba(14,13,12,0.45))" }} />
        <div className="relative text-center px-6">
          <Reveal><Eyebrow color="var(--color-champagne)">Page 3 of 5 — About & Reviews</Eyebrow></Reveal>
          <Reveal delay={120}>
            <h1 className="h-display" style={{ fontSize: "clamp(2.6rem, 7vw, 5.2rem)", color: "var(--color-alabaster)" }}>
              Crafted by People.<br /><em style={{ fontStyle: "italic" }}>Trusted by Clients.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="section-pad" style={{ background: "var(--color-alabaster)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal><div className="ed-img-ivory" style={{ aspectRatio: "4/5" }} /></Reveal>
          <Reveal delay={150}>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="h-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginBottom: 28, lineHeight: 1.15 }}>
              We started with one belief: that nails are <em>never</em> just nails.
            </h2>
            <p style={{ marginBottom: 18 }}>The Nail Room was built for the client who notices the difference between a nail artist and a nail technician. Between a studio that rushes and one that listens. Between a finish that lasts two weeks and one that lasts four.</p>
            <p style={{ marginBottom: 18 }}>Across our four Bangalore studios — in Malleshwaram, Jayanagar, Sahakar Nagar, and Kammanahalli — we've held to a single standard: every person who sits in our chair leaves feeling more beautiful and more themselves than when they arrived.</p>
            <p>We use no shortcuts. We turn no client away without a thorough consultation. And we treat every appointment — whether it's a single coat of polish or a full set of sculpted extensions — as if it's the only thing we're doing today. Because for you, it is.</p>
          </Reveal>
        </div>
      </section>

      <Hairline />

      {/* TEAM */}
      <section className="section-pad" style={{ background: "var(--color-blush-veil)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal><Eyebrow>The Artists</Eyebrow></Reveal>
            <Reveal delay={100}><h2 className="h-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 16 }}>The hands behind your nails.</h2></Reveal>
            <Reveal delay={200}><p>Each member of our team is trained in advanced nail artistry and held to our standard before they ever touch a client's hand.</p></Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 120}>
                <div className="ed-img-ivory" style={{ aspectRatio: "3/4" }} />
                <div style={{ paddingTop: 24 }}>
                  <h3 className="h-display" style={{ fontSize: "1.4rem", fontStyle: "italic" }}>{m.name}</h3>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-stone)", marginTop: 8 }}>{m.title}</div>
                  <p style={{ marginTop: 12, fontSize: "0.85rem" }}>{m.spec}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section-pad" style={{ background: "var(--color-obsidian)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Reveal><Eyebrow color="var(--color-champagne)">Our Non-Negotiables</Eyebrow></Reveal>
            <Reveal delay={100}><h2 className="h-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--color-alabaster)" }}>Four pillars. Zero compromises.</h2></Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div style={{ borderTop: "1px solid var(--color-champagne)", paddingTop: 24 }}>
                  <h3 className="h-display" style={{ fontSize: "1.5rem", color: "var(--color-alabaster)", marginBottom: 14 }}>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-pad" style={{ background: "var(--color-alabaster)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Reveal><Eyebrow>Client Love</Eyebrow></Reveal>
            <Reveal delay={100}><h2 className="h-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>551 Google reviews. Read what they said.</h2></Reveal>
            <Reveal delay={200}>
              <div style={{ marginTop: 32, fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "var(--color-champagne)" }}>5.0 ★</div>
              <p style={{ fontSize: "0.8rem" }}>Average rating across 551 verified Google reviews.</p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <Reveal key={i} delay={(i % 3) * 80}>
                <div style={{ background: "var(--color-parchment)", padding: 32, boxShadow: "0 2px 12px rgba(0,0,0,0.03)", height: "100%" }}>
                  <Stars />
                  <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-charcoal)", lineHeight: 1.6, marginBottom: 20 }}>"{r.q}"</p>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-stone)" }}>— {r.n}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SequentialNav
        heading="See the nail art that's inspiring Bangalore right now."
        to="/gallery-blogs"
        cta="Page 4: View Our Live Nail Art Gallery & Trends →"
      />
    </SiteLayout>
  );
}
