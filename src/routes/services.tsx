import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Eyebrow, Hairline } from "@/components/site/Layout";
import { SequentialNav } from "@/components/site/SequentialNav";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — The Nail Room Bangalore" },
      { name: "description", content: "Our curated menu of nail and beauty treatments: manicure, pedicure, acrylics, hand-painted nail art, lash extensions and more." },
      { property: "og:title", content: "Services — The Nail Room" },
      { property: "og:description", content: "Every service, considered. A curation, not a menu." },
    ],
  }),
  component: ServicesPage,
});

const treatments = [
  { eyebrow: "The Classic", name: "Manicure", body: "The foundation of everything we do. Your nails are shaped with precision, cuticles refined, hands massaged, and finished with your chosen polish — from barely-there sheers to statement lacquers. This is the service that keeps clients returning every two weeks.", detail: "Duration: 45–60 min  ·  Finish: Polish or Gel", art: "ed-img-rose" },
  { eyebrow: "The Ritual", name: "Pedicure", body: "A full foot ritual that goes beyond polish. A long warm soak, meticulous callus work, nail reshaping, a deeply relaxing massage, and a flawless colour finish. Your feet deserve exactly this.", detail: "Duration: 60–75 min  ·  Finish: Polish, Gel, or Bare", art: "ed-img-ivory" },
  { eyebrow: "The Extension", name: "Acrylic Nails", body: "For length, drama, and complete structural strength. Our acrylic applications are sculpted by hand — never rushed, never thick — and customised to your preferred shape, length, and finish. The result: nails that photograph like jewelry.", detail: "Duration: 90–120 min  ·  Customisable: Shape, Length, Colour, Art", art: "ed-img-noir" },
  { eyebrow: "The Signature", name: "Nail Art", body: "Bring a reference. Bring an idea. Bring nothing at all. Our nail artists work from inspiration or intuition to create designs that are unmistakably yours — hand-painted florals, geometric precision, 3D embellishments, chrome effects, and beyond.", detail: "Duration: Varies by design  ·  Consult available", art: "ed-img-ivory" },
  { eyebrow: "The Classic Finish", name: "Nail Polish", body: "Sometimes simplicity is the most sophisticated choice. A perfectly applied coat of high-pigment nail lacquer in any shade from our curated collection — buffed, shaped, and pristine.", detail: "Duration: 30–45 min", art: "ed-img-rose" },
  { eyebrow: "Beyond the Nails", name: "Eyelash Extensions", body: "Because complete beauty is in every detail. Our lash artists apply individual extensions with surgical precision — choosing curl, length, and density to complement your eye shape and lifestyle, not to overpower it.", detail: "Duration: 90–120 min  ·  Styles: Natural, Cat Eye, Dramatic", art: "ed-img-dark" },
  { eyebrow: "The Glow", name: "Facials", body: "Skin that glows is the ultimate accessory. Our facial treatments are designed around your skin type — deeply cleansing, brightening, and calming — with clinical-grade products that work between visits.", detail: "Duration: 60 min  ·  Skin type consultation included", art: "ed-img" },
  { eyebrow: "The Finish", name: "Waxing & Threading", body: "Immaculate grooming, delivered with a gentle hand. Our waxing and threading services are fast, precise, and designed to keep you smooth and shaped between appointments.", detail: "Duration: 15–45 min depending on service", art: "ed-img-ivory" },
];

const addOns = ["Nail Gems", "Gold Foil Accents", "Nail Wraps", "Cuticle Oil Ritual", "Paraffin Wax Immersion"];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="section-pad text-center" style={{ background: "var(--color-alabaster)", minHeight: "45vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Reveal><Eyebrow>Page 2 of 5 — The Services Collection</Eyebrow></Reveal>
        <Reveal delay={120}>
          <h1 className="h-display" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
            Every Service.<br /><em style={{ fontStyle: "italic" }}>Considered.</em>
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <p style={{ maxWidth: 560, margin: "32px auto 0" }}>
            We don't offer a menu. We offer a curation. Each treatment below has been refined to deliver results that are visible, lasting, and worth every moment.
          </p>
        </Reveal>
      </section>

      <Hairline />

      <section className="section-pad" style={{ background: "var(--color-alabaster)" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal><div className="text-center mb-20"><Eyebrow>Our Treatments</Eyebrow></div></Reveal>
          <div className="flex flex-col gap-32">
            {treatments.map((t, i) => {
              const reverse = i % 2 === 1;
              return (
                <Reveal key={t.name}>
                  <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center ${reverse ? "md:[direction:rtl]" : ""}`}>
                    <div className={`md:col-span-5 ${t.art}`} style={{ aspectRatio: "4/5", direction: "ltr" }} />
                    <div className="md:col-span-6 md:col-start-7" style={{ direction: "ltr" }}>
                      <Eyebrow>{t.eyebrow}</Eyebrow>
                      <h3 className="h-display" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", marginBottom: 20 }}>{t.name}</h3>
                      <p style={{ fontSize: "1rem", marginBottom: 24 }}>{t.body}</p>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--color-stone)", marginBottom: 28, letterSpacing: "0.05em" }}>{t.detail}</div>
                      <Link to="/locations-book" style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-champagne)", borderBottom: "1px solid currentColor", paddingBottom: 4 }}>
                        Reserve This Treatment →
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Hairline />

      <section className="section-pad text-center" style={{ background: "var(--color-blush-veil)" }}>
        <div className="max-w-5xl mx-auto">
          <Reveal><Eyebrow>Elevate Your Visit</Eyebrow></Reveal>
          <Reveal delay={100}><h2 className="h-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>The finishing touches.</h2></Reveal>
          <Reveal delay={200}><p style={{ marginTop: 16, marginBottom: 48 }}>Add any of the following to any treatment to make your appointment extraordinary.</p></Reveal>
          <Reveal delay={300}>
            <div className="flex flex-wrap justify-center gap-3">
              {addOns.map((a) => (
                <span key={a} style={{ border: "1px solid var(--color-champagne)", padding: "12px 24px", borderRadius: 2, fontFamily: "var(--font-sans)", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-charcoal)" }}>{a}</span>
              ))}
            </div>
          </Reveal>
          <p style={{ marginTop: 32, fontStyle: "italic", fontSize: "0.8rem" }}>All add-ons are discussed during your booking. No hidden charges.</p>
        </div>
      </section>

      <SequentialNav
        heading="Hear from the clients who've been through our doors."
        to="/about-reviews"
        cta="Page 3: Read Client Experiences & Testimonials →"
      />
    </SiteLayout>
  );
}
