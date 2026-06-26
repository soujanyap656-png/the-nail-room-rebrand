import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, Eyebrow, GoldDivider, PageFooterNav } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — The Nail Room Bangalore" },
      { name: "description", content: "Answers to the most-asked questions on hygiene, longevity, custom art, pricing, group bookings and walk-in policy." },
    ],
  }),
  component: FAQPage,
});

const FAQ = [
  { q: "How long does a gel manicure last?", a: "Our **signature gel** lasts **two to three weeks** without chipping when paired with our recommended cuticle oil and aftercare routine — many guests stretch to a full month." },
  { q: "Do you use sterilised tools?", a: "Always. Every implement is **autoclaved**, every file and buffer is **single-use**, and our entire workflow follows **hospital-grade hygiene protocols** audited monthly." },
  { q: "Can I bring a reference photo for custom art?", a: "Absolutely — we encourage it. Our artists love **bespoke commissions** and will recreate or reinterpret your reference into a one-of-one design within your appointment time." },
  { q: "Are walk-ins accepted?", a: "We are a **reservation-first atelier** to protect each guest's experience. We do hold a small number of walk-in slots daily — call your nearest studio for same-day availability." },
  { q: "Do you offer bridal or group bookings?", a: "Yes. Our **bridal concierge** handles parties of **4 to 20 guests**, with private studio buy-outs available for full-day experiences across all four locations." },
  { q: "What is your cancellation policy?", a: "Cancellations are free up to **24 hours before** your reservation. Within 24 hours a **50% retention fee** applies; no-shows are charged in full." },
  { q: "Do you carry vegan or 10-free polish?", a: "Our entire polish library is **vegan, cruelty-free and 10-free**. We stock OPI, Essie, Manucurist Green Flash and select Korean indie brands as standard." },
  { q: "How early should I arrive?", a: "Please arrive **10 minutes early** so our concierge can settle you with a beverage, review your service, and begin your appointment on time." },
  { q: "Can I bring my child to the studio?", a: "We adore little visitors but, to preserve the calm atmosphere, **children under 12** are welcome only with a confirmed kids' manicure booking." },
  { q: "How do I care for gel extensions at home?", a: "Apply **cuticle oil twice daily**, avoid prying or biting, wear gloves for housework, and book a **fill every 2 to 3 weeks** to maintain structural integrity." },
];

function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <SiteLayout>
      <section className="section-pad" style={{ paddingTop: 120, textAlign: "center", paddingBottom: 60 }}>
        <Reveal>
          <Eyebrow>Frequently Asked</Eyebrow>
          <h1 style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}>
            Your <em className="gold-gradient" style={{ fontStyle: "italic" }}>questions</em>, answered
          </h1>
          <GoldDivider />
          <p style={{ maxWidth: 620, margin: "0 auto" }}>
            Everything you might wish to know before your first visit — and a few details our most <strong>devoted regulars</strong> still ask.
          </p>
        </Reveal>
      </section>

      <section className="section-pad" style={{ paddingTop: 20 }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          {FAQ.map((f, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={f.q}>
                <div className="acc-item" style={open ? { borderColor: "rgba(230,199,112,0.55)", boxShadow: "0 20px 50px rgba(230,199,112,0.1)" } : {}}>
                  <button className="acc-btn" onClick={() => setOpenIdx(open ? null : i)} aria-expanded={open}>
                    <span>
                      <span className="gold-gradient" style={{ fontStyle: "italic", marginRight: 14 }}>{String(i + 1).padStart(2, "0")}</span>
                      {f.q}
                    </span>
                    <span className="acc-icon" style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                  </button>
                  <div className="acc-panel" style={{ maxHeight: open ? 360 : 0 }}>
                    <div
                      className="acc-panel-inner"
                      dangerouslySetInnerHTML={{ __html: f.a.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <PageFooterNav nextTo="/terms" nextLabel="Terms of Service" />
    </SiteLayout>
  );
}
