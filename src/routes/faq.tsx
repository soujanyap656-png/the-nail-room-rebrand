import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, GoldDivider, PageFooterNav, Particles } from "@/components/site/Layout";
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
    q: "What nail art services does The Nail Room offer?",
    a: "We offer a diverse selection of nail art services to cater to every style and occasion. Our offerings include **classic manicures, sparkle and chrome polish, elegant bridal nail designs**, and unique creative nail art. Additionally, we provide **nail extensions, overlays, and tip repairs** to enhance and maintain your nails.",
  },
  {
    q: "How do I book an appointment?",
    a: "To ensure you receive the best possible service, we recommend **scheduling an appointment in advance**. You can easily book through our **online booking portal** or by calling your nearest studio directly. This helps us guarantee availability and allocate the right time for your service.",
  },
  {
    q: "Can I request a specific nail artist?",
    a: "You can absolutely **request a specific nail artist** based on their availability. We will do our best to accommodate your preference. If your preferred artist is unavailable, we can recommend another from our trained team who matches your style.",
  },
  {
    q: "What products does The Nail Room use?",
    a: "We are committed to using only the **highest quality and safest products** for all nail art services. Our products are carefully selected to ensure **compatibility with natural nails**, and we continuously update our inventory to meet the **latest industry standards**.",
  },
  {
    q: "What is your cancellation and rescheduling policy?",
    a: "We require at least **24 hours' notice** for any appointment cancellations or rescheduling. Cancellations made less than 24 hours in advance may incur a fee. **Failure to show up** without prior notice may result in a cancellation fee. For further information, please contact your studio directly.",
  },
  {
    q: "Are there any design limitations for nail art?",
    a: "We strive to accommodate a **broad spectrum of nail art designs**. However, we reserve the right to decline any designs that are **offensive or violate legal guidelines**. Our goal is to provide creative and professional nail art while maintaining a **respectful and safe environment**.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept **credit cards, debit cards, UPI, and cash**. Services and gift certificates are **non-refundable** but may be used for future appointments.",
  },
  {
    q: "Are walk-in appointments available?",
    a: "**Walk-ins are welcome** at all our studios. However, appointments are recommended to guarantee your **preferred time slot and nail artist**, especially on weekends and festive seasons.",
  },
];

function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <SiteLayout>
      {/* ===== HERO ===== */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "clamp(60px, 9vw, 110px)",
          paddingBottom: "clamp(60px, 10vw, 120px)",
          paddingLeft: "5%",
          paddingRight: "5%",
          background: "linear-gradient(135deg, #1A1208 0%, #2A1F12 50%, #1A1208 100%)",
        }}
      >
        <Particles count={10} />
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal>
            <span className="eyebrow" style={{ color: "#C9A456", marginBottom: 10, display: "block" }}>Frequently Asked</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.7rem, 5vw, 3.8rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.0, color: "#FAF7F2" }}>
              Your{" "}
              <em className="shimmer-text" style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontStyle: "italic" }}>Questions,</em>
              <br />
              Answered.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", color: "rgba(250,247,242,0.8)", maxWidth: 440, margin: "10px auto 0", lineHeight: 1.85 }}>
              Everything you need to know before your visit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ ACCORDION ===== */}
      <section className="section-pad" style={{ background: "#FAF7F2", paddingTop: 56 }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          {FAQ.map((f, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <div
                  style={{
                    background: open ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)",
                    backdropFilter: "blur(16px)",
                    borderRadius: 12,
                    border: open ? "1px solid rgba(201,164,86,0.5)" : "1px solid rgba(201,164,86,0.15)",
                    marginBottom: 12,
                    overflow: "hidden",
                    boxShadow: open ? "0 8px 32px rgba(90,60,20,0.1)" : "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    aria-expanded={open}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 16,
                      padding: "26px 28px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "0.85rem",
                          color: "#C9A456",
                          fontWeight: 400,
                          minWidth: 28,
                          flexShrink: 0,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontStyle: "italic",
                          fontSize: "clamp(1rem, 2vw, 1.25rem)",
                          color: "#1A1208",
                          fontWeight: 400,
                          lineHeight: 1.4,
                        }}
                      >
                        {f.q}
                      </span>
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.4rem",
                        color: "#C9A456",
                        transition: "transform 0.3s ease",
                        transform: open ? "rotate(45deg)" : "rotate(0)",
                        flexShrink: 0,
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: open ? 400 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.4s ease",
                    }}
                  >
                    <div style={{ padding: "0 28px 26px", paddingLeft: 70 }}>
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9rem",
                          color: "#5C4A35",
                          lineHeight: 1.85,
                        }}
                        dangerouslySetInnerHTML={{ __html: f.a.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <PageFooterNav nextTo="/terms" nextLabel="Terms of Service →" teaser="Review our policies, guarantees, and service terms." pageNumber={4} totalPages={6} />
    </SiteLayout>
  );
}
