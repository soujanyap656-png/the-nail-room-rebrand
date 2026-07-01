import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, GoldDivider, PageFooterNav, Particles } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — The Nail Room Bangalore" },
      { name: "description", content: "Reservation, cancellation, hygiene and conduct terms for visiting The Nail Room studios across Bangalore." },
    ],
  }),
  component: TermsPage,
});

const CLAUSES = [
  {
    t: "1. Introduction",
    d: "Welcome to **The Nail Room**. By accessing our website and booking our services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our services.",
  },
  {
    t: "2. Services",
    d: "The Nail Room offers a **variety of nail care and beauty services** including manicures, pedicures, acrylic nails, nail art, eyelash extensions, facials, waxing, and threading. The details of each service, including pricing and availability, are listed on our website. We reserve the right to modify these offerings at any time.",
  },
  {
    t: "3. Appointments & Bookings",
    d: "Appointments can be made through our **online booking portal**, by phone, or in person at any of our studios. We recommend booking in advance to secure your preferred time slot and nail artist.",
  },
  {
    t: "4. Cancellation Policy",
    d: "We require at least **24 hours' notice** for any appointment cancellations or rescheduling. Cancellations made less than 24 hours in advance may incur a fee of up to 50% of the scheduled service value.",
  },
  {
    t: "5. No-Show Policy",
    d: "**Failure to show up** for an appointment without prior notice may result in a cancellation fee and may require a deposit for future bookings.",
  },
  {
    t: "6. Payment Methods",
    d: "We accept various forms of payment, including **credit cards, debit cards, UPI, and cash** at all our studio locations.",
  },
  {
    t: "7. Refund Policy",
    d: "Services and gift certificates are **non-refundable** but may be used for future appointments or transferred to another person. Prepaid packages are valid for 12 months from the date of purchase.",
  },
  {
    t: "8. Client Responsibility",
    d: "Clients are responsible for informing us of any **allergies, sensitivities, or medical conditions** prior to receiving services. This includes pregnancy, skin conditions, and any recent treatments that may affect nail or skin health.",
  },
  {
    t: "9. Health & Safety",
    d: "We adhere to **strict hygiene and sanitation protocols** to ensure the safety of our clients and staff. All implements are sterilized between clients, and single-use items are disposed of after each use. We reserve the right to refuse service if a client presents with a condition that may compromise health and safety.",
  },
  {
    t: "10. Service Guarantee",
    d: "We stand behind our work. If you experience any issues with your service within **7 days**, please contact us and we will address the concern at no additional charge. This does not cover damage caused by external factors or improper aftercare.",
  },
  {
    t: "11. Limitation of Liability",
    d: "The Nail Room is **not liable** for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the value of the service rendered.",
  },
  {
    t: "12. Intellectual Property",
    d: "All content on this website, including images, text, logos, and designs, is the property of The Nail Room and is protected by intellectual property laws. Unauthorized use is prohibited.",
  },
  {
    t: "13. Changes to Terms",
    d: "We reserve the right to **modify these terms and conditions** at any time. Any changes will be posted on our website with the effective date. Continued use of our services signifies acceptance of any updated terms.",
  },
  {
    t: "14. Governing Law",
    d: "These terms and conditions are governed by the **laws of India**. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore.",
  },
  {
    t: "15. Contact Us",
    d: "For any questions or concerns regarding these terms, please contact us at **hello@nailroombangalore.com** or call **+91 80888 02525**.",
  },
];

function TermsPage() {
  return (
    <SiteLayout>
      {/* ===== HERO ===== */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "clamp(100px, 14vw, 160px)",
          paddingBottom: "clamp(60px, 10vw, 100px)",
          paddingLeft: "5%",
          paddingRight: "5%",
          background: "linear-gradient(135deg, #1A1208 0%, #2A1F12 50%, #1A1208 100%)",
        }}
      >
        <Particles count={10} />
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal>
            <span className="eyebrow" style={{ color: "#C9A456" }}>Legal · Effective January 2026</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 7vw, 5.5rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.0, color: "#FAF7F2" }}>
              Terms &amp;{" "}
              <em className="shimmer-text" style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontStyle: "italic" }}>Conditions.</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "rgba(250,247,242,0.8)", maxWidth: 520, margin: "20px auto 0", lineHeight: 1.85 }}>
              The simple, mutual understandings that protect every guest and every artist across our four studios.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== TERMS CONTENT ===== */}
      <section className="section-pad" style={{ background: "#FAF7F2", paddingTop: 60 }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ display: "grid", gap: 20 }}>
            {CLAUSES.map((c, i) => (
              <Reveal key={c.t} delay={i * 40}>
                <article
                  className="glass-card"
                  style={{
                    padding: "clamp(28px, 4vw, 40px)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div className="card-gold-top" />
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
                      color: "#C9A456",
                      fontWeight: 400,
                      marginBottom: 16,
                    }}
                  >
                    {c.t}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.92rem",
                      color: "#5C4A35",
                      lineHeight: 1.85,
                    }}
                    dangerouslySetInnerHTML={{ __html: c.d.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="section-pad" style={{ background: "#F3EDE4" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow">Questions?</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1A1208", fontWeight: 400, fontStyle: "italic", marginTop: 8 }}>
              We're <em className="gradient-text" style={{ fontFamily: "var(--font-serif)" }}>Here to Help.</em>
            </h2>
            <GoldDivider />
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#5C4A35", lineHeight: 1.85, marginBottom: 28 }}>
              If you have any questions about our terms or policies, our concierge team is happy to assist.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn-primary">
                Contact Us →
              </Link>
              <Link to="/privacy" className="btn-outline-gold">
              Read Privacy Policy
            </Link>
          </div>
          </Reveal>
        </div>
      </section>

      <PageFooterNav nextTo="/privacy" nextLabel="Privacy Policy →" teaser="Understand how we protect and handle your personal information." />
    </SiteLayout>
  );
}
