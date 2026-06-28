import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Eyebrow, GoldDivider, PageFooterNav } from "@/components/site/Layout";
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
  { t: "Introduction", d: "**Nail Room** is committed to protecting the privacy and security of our clients' information. This Privacy Policy outlines the **types of information** we collect from our clients, how we use it, and the **steps we take** to ensure it is protected." },
  { t: "1 · Information Collection", d: "We collect information from our clients in the following ways:<br/><br/>**Directly from the Client:** Information such as **name, contact information, and health-related concerns** are collected during appointment bookings, consultations, or service provision.<br/><br/>**Automatically when you visit our website:** We may collect certain information automatically through **cookies or analytics tools**, including but not limited to IP address, device type, and browsing behavior." },
  { t: "2 · Use of Information", d: "The information we collect is used to:<br/><br/>• **Provide, personalize, and improve** our services.<br/>• Manage appointments, including **reminders and cancellations**.<br/>• Communicate with clients about their services, promotions, or updates to our policies.<br/>• Ensure a **safe and customized service experience**, especially concerning health-related concerns." },
  { t: "3 · Sharing of Information", d: "We **do not sell or rent** client information to third parties. Information may be shared with:<br/><br/>• **Service providers** who perform functions on our behalf (e.g., appointment booking software).<br/>• **Law enforcement** or other government agencies, if required by law or in good faith belief that such action is necessary to comply with legal obligations." },
  { t: "4 · Data Security", d: "We implement **appropriate technical and organizational measures** to protect the security of our clients' personal information from unauthorized access, use, alteration, or destruction." },
  { t: "5 · Your Rights", d: "Clients have the right to:<br/><br/>• Request **access** to the personal information we hold about them.<br/>• Request **corrections** to any inaccurate or incomplete information.<br/>• Request **deletion** of their personal information, subject to certain exceptions.<br/>• **Opt-out** of receiving marketing communications from us." },
  { t: "6 · Changes to This Privacy Policy", d: "We may **update this Privacy Policy** from time to time. Any changes will be posted on our website or communicated through our usual communication channels with clients." },
  { t: "7 · Contact Us", d: "For any questions or concerns regarding this Privacy Policy or your personal information, please contact us at **+91 80888 02525**." },
  { t: "8 · Acceptance of This Policy", d: "By accessing our services, you **acknowledge and agree** to the terms of this Privacy Policy." },
];

function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="section-pad" style={{ paddingTop: 120, textAlign: "center", paddingBottom: 50 }}>
        <Reveal>
          <Eyebrow>Legal · Effective January 2026</Eyebrow>
          <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
            Privacy <em className="gold-gradient" style={{ fontStyle: "italic" }}>Policy</em>
          </h1>
          <GoldDivider />
          <p style={{ maxWidth: 620, margin: "0 auto" }}>
            Your trust is the foundation of our atelier. Here is precisely how we earn and keep it.
          </p>
        </Reveal>
      </section>

      <section className="section-pad" style={{ paddingTop: 20 }}>
        <div style={{ maxWidth: 980, margin: "0 auto", display: "grid", gap: 24 }}>
          {SECTIONS.map((c, i) => (
            <Reveal key={c.t} delay={i * 40}>
              <article className="glass" style={{ padding: "32px 32px" }}>
                <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: 14 }}>
                  <span className="gold-gradient" style={{ fontStyle: "italic" }}>{c.t}</span>
                </h2>
                <p
                  style={{ fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: c.d.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <PageFooterNav nextTo="/" nextLabel="Return to Home" />
    </SiteLayout>
  );
}
