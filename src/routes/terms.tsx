import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Eyebrow, GoldDivider, PageFooterNav } from "@/components/site/Layout";
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
  { t: "1 · Reservations", d: "All appointments are **confirmed by our concierge** within two hours of booking. A valid mobile number is required; reservations remain provisional until confirmation is received." },
  { t: "2 · Cancellations & No-Shows", d: "Cancellations made **24 hours or more** before your appointment are free of charge. Within 24 hours, a **50% retention fee** applies. No-shows are billed in full to the saved payment method." },
  { t: "3 · Late Arrivals", d: "A grace period of **10 minutes** is held. Beyond this, your service may be **shortened or rescheduled** at the artist's discretion to protect the experience of subsequent guests." },
  { t: "4 · Pricing & Payment", d: "Prices are displayed in **Indian Rupees**, inclusive of GST. We accept all major cards, UPI and cash. Gift vouchers and packages are **non-refundable** but transferable." },
  { t: "5 · Service Guarantee", d: "Should any **gel or extension** service chip or lift within **5 days**, we will repair the affected nail without charge. Damage from improper aftercare is not covered." },
  { t: "6 · Health & Hygiene", d: "Guests with **fungal infections, open wounds or contagious conditions** must reschedule. We reserve the right to refuse service where guest or artist safety is at risk." },
  { t: "7 · Children & Guests", d: "Children under **12** are welcome only with a confirmed booking. Additional companions cannot be accommodated in treatment areas due to space and safety." },
  { t: "8 · Conduct", d: "We maintain a **calm, respectful atmosphere**. Abusive or disruptive behaviour toward staff or guests will result in **immediate dismissal** with no refund." },
  { t: "9 · Imagery & Press", d: "We may photograph completed work for portfolio and editorial use. Faces and identifying features are **never captured** without explicit written consent." },
  { t: "10 · Amendments", d: "These terms may be **updated periodically**. The version published on this website at the time of your booking is the version that governs your visit." },
];

function TermsPage() {
  return (
    <SiteLayout>
      <section className="section-pad" style={{ paddingTop: 120, textAlign: "center", paddingBottom: 50 }}>
        <Reveal>
          <Eyebrow>Legal · Effective January 2026</Eyebrow>
          <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
            Terms of <em className="gold-gradient" style={{ fontStyle: "italic" }}>Service</em>
          </h1>
          <GoldDivider />
          <p style={{ maxWidth: 620, margin: "0 auto" }}>
            The simple, mutual understandings that protect every guest and every artist within our four studios.
          </p>
        </Reveal>
      </section>

      <section className="section-pad" style={{ paddingTop: 20 }}>
        <div style={{ maxWidth: 980, margin: "0 auto", display: "grid", gap: 24 }}>
          {CLAUSES.map((c, i) => (
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

      <PageFooterNav nextTo="/privacy" nextLabel="Privacy Policy" />
    </SiteLayout>
  );
}
