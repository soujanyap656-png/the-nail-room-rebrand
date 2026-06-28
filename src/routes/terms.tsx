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
  { t: "1 · Introduction", d: "Welcome to **Nail Room**. By accessing our website and booking our services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our website." },
  { t: "2 · Services", d: "Nail Room offers a **variety of nail care services**. The details of each service, including pricing and availability, are listed on our website. We reserve the right to modify these offerings at any time." },
  { t: "3 · Appointments & Cancellations", d: "**Booking:** Appointments can be made through our website, by phone, or in person." },
  { t: "4 · Cancellation Policy", d: "We require at least **24 hours' notice** for any appointment cancellations or rescheduling. Cancellations made less than 24 hours in advance may incur a fee." },
  { t: "5 · No-shows", d: "**Failure to show up** for an appointment without prior notice may result in a cancellation fee." },
  { t: "6 · Payment Methods", d: "We accept various forms of payment, including **credit cards, debit cards, and cash**." },
  { t: "7 · Refund Policy", d: "Services and gift certificates are **non-refundable** but may be used for future appointments." },
  { t: "8 · Client Responsibility", d: "Clients are responsible for informing us of any **allergies, sensitivities, or medical conditions** prior to receiving services." },
  { t: "9 · Health & Safety Sanitation", d: "We adhere to **strict hygiene and sanitation protocols** to ensure the safety of our clients and staff." },
  { t: "10 · Privacy Policy", d: "Your privacy is important to us. Please review our **Privacy Policy**, which explains how we collect, use, and protect your personal information." },
  { t: "11 · Limitation of Liability", d: "Nail Room is **not liable** for any indirect, incidental, or consequential damages arising from the use of the services or website." },
  { t: "12 · Changes to Terms", d: "We reserve the right to **modify these terms and conditions** at any time. Any changes will be posted on our website. Continued use of our website and services signifies acceptance of any updated terms." },
  { t: "13 · Governing Law", d: "These terms and conditions are governed by the **laws of India**." },
  { t: "14 · Contact Us", d: "For any questions or concerns regarding these terms, please contact us at **+91 80888 02525**." },
];

function TermsPage() {
  return (
    <SiteLayout>
      <section className="section-pad" style={{ paddingTop: 120, textAlign: "center", paddingBottom: 50 }}>
        <Reveal>
          <Eyebrow>Legal · Effective January 2026</Eyebrow>
          <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
            Terms &amp; <em className="gold-gradient" style={{ fontStyle: "italic" }}>Conditions</em>
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
