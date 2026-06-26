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
  { t: "1 · What We Collect", d: "We collect only what is necessary to host you well: **name, mobile, email**, preferred studio, service history, and any artist notes you share. No more, no less." },
  { t: "2 · How We Use It", d: "To **confirm reservations**, send appointment reminders, recall your preferences on return visits, and — only if you opt in — share occasional **atelier updates and editorial features**." },
  { t: "3 · Payment Data", d: "Card details are processed exclusively through **PCI-DSS compliant gateways** (Razorpay & Stripe). We never see or store your full card number on our systems." },
  { t: "4 · Imagery & Consent", d: "We photograph completed nail work for our portfolio and social channels. **Faces are never captured** without explicit, written, opt-in consent. You may revoke this at any time." },
  { t: "5 · Data Sharing", d: "We do **not sell** or rent your information. We share only with vetted vendors (SMS, email, payment) bound by confidentiality and the minimum data required to deliver the service." },
  { t: "6 · Data Retention", d: "Active guest records are retained for as long as you remain a client plus **three years**, after which they are securely deleted. Anonymised analytics may be retained indefinitely." },
  { t: "7 · Your Rights", d: "You may request **access, correction or deletion** of your records at any time by writing to privacy@thenailroom.in. We respond within **seven working days**." },
  { t: "8 · Cookies", d: "Our website uses **essential cookies** for functionality and **anonymous analytics** to improve the experience. You may decline non-essential cookies via your browser." },
  { t: "9 · Security", d: "All guest data is stored on **encrypted, India-resident servers** with role-based access controls, monthly access audits and quarterly third-party penetration testing." },
  { t: "10 · Contact the DPO", d: "For any privacy matter, write to our **Data Protection Officer** at privacy@thenailroom.in or call +91 98765 43200 between 10:00 and 18:00 IST, Monday to Friday." },
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
