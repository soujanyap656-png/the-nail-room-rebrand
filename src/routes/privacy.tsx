import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, GoldDivider, PageFooterNav, Particles } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — The Nail Room Bangalore" },
      { name: "description", content: "How The Nail Room collects, stores, and protects guest information across reservations, communications and imagery." },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  {
    t: "Introduction",
    d: "**The Nail Room** is committed to protecting the privacy and security of our clients' information. This Privacy Policy outlines the **types of information** we collect from our clients, how we use it, and the **steps we take** to ensure it is protected. Your trust is the foundation of our atelier.",
  },
  {
    t: "1. Information Collection",
    d: "We collect information from our clients in the following ways:<br/><br/>**Directly from the Client:** Information such as **name, contact information, and health-related concerns** are collected during appointment bookings, consultations, or service provision.<br/><br/>**Automatically when you visit our website:** We may collect certain information automatically through **cookies or analytics tools**, including but not limited to IP address, device type, and browsing behavior.",
  },
  {
    t: "2. Use of Information",
    d: "The information we collect is used to:<br/><br/>• **Provide, personalize, and improve** our services.<br/>• Manage appointments, including **reminders and confirmations**.<br/>• Communicate with clients about their services, promotions, or updates to our policies.<br/>• Ensure a **safe and customized service experience**, especially concerning health-related concerns.<br/>• Maintain our **client loyalty program** and personalize future recommendations.",
  },
  {
    t: "3. Sharing of Information",
    d: "We **do not sell or rent** client information to third parties. Information may be shared with:<br/><br/>• **Service providers** who perform functions on our behalf (e.g., appointment booking software, payment processors).<br/>• **Law enforcement** or other government agencies, if required by law or in good faith belief that such action is necessary to comply with legal obligations.<br/><br/>All third-party partners are bound by confidentiality agreements.",
  },
  {
    t: "4. Data Security",
    d: "We implement **appropriate technical and organizational measures** to protect the security of our clients' personal information from unauthorized access, use, alteration, or destruction. This includes encrypted storage, secure payment processing, and restricted access protocols within our studios.",
  },
  {
    t: "5. Data Retention",
    d: "We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. Client records are typically retained for **a minimum of 3 years** to ensure continuity of service and support.",
  },
  {
    t: "6. Your Rights",
    d: "Clients have the right to:<br/><br/>• Request **access** to the personal information we hold about them.<br/>• Request **corrections** to any inaccurate or incomplete information.<br/>• Request **deletion** of their personal information, subject to certain exceptions.<br/>• **Opt-out** of receiving marketing communications from us at any time.<br/><br/>To exercise these rights, please contact us at **hello@nailroombangalore.com**.",
  },
  {
    t: "7. Photography & Imagery",
    d: "On occasion, we may photograph nail art created by our artists for **portfolio and marketing purposes**. By consenting to service, you acknowledge that photos of your hands/nails may be used on our website and social media channels. If you wish to **opt-out**, please inform your artist before the service.",
  },
  {
    t: "8. Changes to This Privacy Policy",
    d: "We may **update this Privacy Policy** from time to time. Any changes will be posted on our website with the effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.",
  },
  {
    t: "9. Contact Us",
    d: "For any questions or concerns regarding this Privacy Policy or your personal information, please contact us at:<br/><br/>**Email:** hello@nailroombangalore.com<br/>**Phone:** +91 80888 02525<br/>**Address:** The Nail Room, Jayanagar, Bangalore",
  },
  {
    t: "10. Acceptance of This Policy",
    d: "By accessing our services, booking appointments, or using our website, you **acknowledge and agree** to the terms of this Privacy Policy. If you do not agree with any part of this policy, please do not use our services.",
  },
];

function PrivacyPage() {
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
              Privacy{" "}
              <em className="shimmer-text" style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontStyle: "italic" }}>Policy.</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "rgba(250,247,242,0.8)", maxWidth: 520, margin: "20px auto 0", lineHeight: 1.85 }}>
              Your trust is the foundation of our atelier. Here is precisely how we earn and keep it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== PRIVACY CONTENT ===== */}
      <section className="section-pad" style={{ background: "#FAF7F2", paddingTop: 60 }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ display: "grid", gap: 20 }}>
            {SECTIONS.map((s, i) => (
              <Reveal key={s.t} delay={i * 40}>
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
                    {s.t}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.92rem",
                      color: "#5C4A35",
                      lineHeight: 1.85,
                    }}
                    dangerouslySetInnerHTML={{ __html: s.d.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <PageFooterNav nextTo="/" nextLabel="Return Home →" teaser={"Begin your journey at The Nail Room."} pageIndex={1} />
    </SiteLayout>
  );
}
