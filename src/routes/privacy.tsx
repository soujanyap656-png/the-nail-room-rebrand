import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Eyebrow, GoldDivider, PageFooterNav } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Nail Room Bangalore" },
      { name: "description", content: "How Nail Room collects, uses and protects client information." },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  { t: "1 · Introduction", d: "Nail Room is committed to protecting the privacy and security of our clients' information." },
  { t: "2 · Information Collection", d: "We collect information directly from the Client (name, contact info, health concerns) during bookings. We may collect certain information automatically when you visit our website." },
  { t: "3 · Use of Information", d: "The information is used to: Provide and improve services. Manage appointments. Communicate with clients about services or updates." },
  { t: "4 · Sharing of Information", d: "We do not sell or rent client information to third parties. Information may be shared with service providers or law enforcement if required by law." },
  { t: "5 · Data Security", d: "We implement appropriate measures to protect the security of personal information." },
  { t: "6 · Your Rights", d: "Clients have the right to request access, corrections, or deletion of their personal information." },
  { t: "7 · Contact Us", d: "For questions regarding this Privacy Policy, please contact us at +91 80888 02525." },
];

function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="section-pad" style={{ paddingTop: 120, textAlign: "center", paddingBottom: 50 }}>
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
            Privacy <em className="gold-gradient" style={{ fontStyle: "italic" }}>Policy</em>
          </h1>
          <GoldDivider />
        </Reveal>
      </section>

      <section className="section-pad" style={{ paddingTop: 10 }}>
        <div style={{ maxWidth: 980, margin: "0 auto", display: "grid", gap: 24 }}>
          {SECTIONS.map((c, i) => (
            <Reveal key={c.t} delay={i * 40}>
              <article className="glass-strong" style={{ padding: "32px 32px" }}>
                <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: 14 }}>
                  <span className="gold-gradient" style={{ fontStyle: "italic" }}>{c.t}</span>
                </h2>
                <p style={{ fontSize: "0.98rem", lineHeight: 1.8 }}>{c.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <PageFooterNav nextTo="/" nextLabel="Return to Home" />
    </SiteLayout>
  );
}
