import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, Eyebrow, GoldDivider, PageFooterNav } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — The Nail Room Bangalore" },
      { name: "description", content: "Answers to the most-asked questions about services, bookings, artists, products and policies at Nail Room." },
    ],
  }),
  component: FAQPage,
});

const FAQ = [
  {
    q: "What nail art services does Nail Room offer?",
    a: "Nail Room offers a **diverse selection of nail art services** to cater to every style and occasion. Our offerings include **classic manicures, sparkle and chrome polish, elegant bridal nail designs**, and unique creative nail art. Additionally, we provide **nail extensions, overlays, and tip repairs** to enhance and maintain your nails.",
  },
  {
    q: "How do I book an appointment at Nail Room?",
    a: "To ensure you receive the best possible service, we recommend **scheduling an appointment in advance**. You can easily book your nail art session **online or by phone**. This helps us guarantee availability and allocate the right time for your service.",
  },
  {
    q: "Can I request a specific nail artist?",
    a: "You can **request a specific nail artist** at Nail Room based on their availability. We will do our best to accommodate your preference, but please note that it is **subject to scheduling**.",
  },
  {
    q: "What products does Nail Room use?",
    a: "Nail Room is committed to using only the **highest quality and safest products** for all nail art services. Our products are carefully selected to ensure **compatibility with natural nails**, and we continuously update our inventory to meet the **latest industry standards**.",
  },
  {
    q: "What is Nail Room's cancellation and rescheduling policy?",
    a: "We require at least **24 hours' notice** for any appointment cancellations or rescheduling. Cancellations made less than 24 hours in advance may incur a fee. **Failure to show up** for an appointment without prior notice may result in a cancellation fee. For further information, please contact the salon directly.",
  },
  {
    q: "Are there any design limitations for nail art?",
    a: "At Nail Room, we strive to accommodate a **broad spectrum of nail art designs**. However, we reserve the right to decline any designs that are **offensive or violate legal guidelines**. Our goal is to provide creative and professional nail art while maintaining a **respectful and safe environment**.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept various forms of payment, including **credit cards, debit cards, and cash**. Services and gift certificates are **non-refundable** but may be used for future appointments.",
  },
  {
    q: "Are walk-in appointments available?",
    a: "**Walk-ins are welcome.** However, appointments are recommended to guarantee your **preferred time slot and nail artist**.",
  },
];

function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <SiteLayout>
      <section className="section-pad" style={{ paddingTop: 100, textAlign: "center", paddingBottom: 50 }}>
        <Reveal>
          <Eyebrow>Frequently Asked</Eyebrow>
          <h1 style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}>
            Your <em className="gold-gradient" style={{ fontStyle: "italic" }}>questions</em>, answered
          </h1>
          <GoldDivider />
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
                  <div className="acc-panel" style={{ maxHeight: open ? 500 : 0 }}>
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
