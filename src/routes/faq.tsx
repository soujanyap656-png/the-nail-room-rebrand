import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, Eyebrow, GoldDivider, PageFooterNav } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Nail Room Bangalore" },
      { name: "description", content: "Frequently asked questions about Nail Room's services, bookings, artists, products and policies." },
    ],
  }),
  component: FAQPage,
});

const FAQ = [
  {
    q: "What nail art services does Nail Room offer?",
    a: "Nail Room offers a diverse selection of nail art services. Our offerings include classic manicures, sparkle and chrome polish, elegant bridal nail designs, and unique creative nail art. Additionally, we provide nail extensions, overlays, and tip repairs.",
  },
  {
    q: "How do I book an appointment?",
    a: "We recommend scheduling an appointment in advance. You can easily book your nail art session online or by phone.",
  },
  {
    q: "Can I request a specific nail artist?",
    a: "You can request a specific nail artist based on their availability. We will do our best to accommodate your preference.",
  },
  {
    q: "What products does Nail Room use? Are they safe?",
    a: "Nail Room is committed to using only the highest quality and safest products. Our products are carefully selected to ensure compatibility with natural nails.",
  },
  {
    q: "What are Nail Room's cancellation and rescheduling policies?",
    a: "Please refer to our website or contact the salon directly. We require at least 24 hours' notice.",
  },
  {
    q: "Are there any design limitations?",
    a: "We strive to accommodate a broad spectrum of designs. However, we reserve the right to decline any designs that are offensive or violate legal guidelines.",
  },
];

function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <SiteLayout>
      <section className="section-pad" style={{ paddingTop: 120, textAlign: "center", paddingBottom: 50 }}>
        <Reveal>
          <Eyebrow>Frequently Asked</Eyebrow>
          <h1 style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}>
            Your <em className="gold-gradient" style={{ fontStyle: "italic" }}>Questions</em>, answered
          </h1>
          <GoldDivider />
        </Reveal>
      </section>

      <section className="section-pad" style={{ paddingTop: 10 }}>
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
                  <div className="acc-panel" style={{ maxHeight: open ? 500 : 0 }}>
                    <div className="acc-panel-inner">{f.a}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <PageFooterNav nextTo="/terms" nextLabel="Terms & Conditions" />
    </SiteLayout>
  );
}
