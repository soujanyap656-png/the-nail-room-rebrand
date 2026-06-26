import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Eyebrow, GoldDivider, PageFooterNav } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Nail Room Bangalore" },
      { name: "description", content: "Terms and conditions for using Nail Room services and website." },
    ],
  }),
  component: TermsPage,
});

const CLAUSES = [
  { t: "1 · Introduction", d: "Welcome to Nail Room. By accessing our website and booking our services, you agree to comply with and be bound by the following terms." },
  { t: "2 · Services", d: "Nail Room offers a variety of nail care services. The details, including pricing and availability, are listed on our website." },
  { t: "3 · Appointments & Cancellations", d: "Booking: Appointments can be made through our website, by phone, or in person. Cancellation Policy: We require at least 24 hours' notice for cancellations. Cancellations made less than 24 hours in advance may incur a fee. No-shows: Failure to show up without prior notice may result in a fee." },
  { t: "4 · Payments", d: "We accept various forms of payment, including credit cards, debit cards, and cash. Services and gift certificates are non-refundable." },
  { t: "5 · Health & Safety", d: "Clients are responsible for informing us of any allergies or medical conditions. We adhere to strict hygiene and sanitation protocols." },
  { t: "6 · Privacy Policy", d: "Your privacy is important to us. Please review our Privacy Policy." },
  { t: "7 · Limitation of Liability", d: "Nail Room is not liable for any indirect, incidental, or consequential damages arising from the use of the services." },
  { t: "8 · Governing Law", d: "These terms and conditions are governed by the laws of India." },
  { t: "9 · Contact Us", d: "For any questions, please contact us at +91 80888 02525." },
];

function TermsPage() {
  return (
    <SiteLayout>
      <section className="section-pad" style={{ paddingTop: 120, textAlign: "center", paddingBottom: 50 }}>
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
            Terms & <em className="gold-gradient" style={{ fontStyle: "italic" }}>Conditions</em>
          </h1>
          <GoldDivider />
        </Reveal>
      </section>

      <section className="section-pad" style={{ paddingTop: 10 }}>
        <div style={{ maxWidth: 980, margin: "0 auto", display: "grid", gap: 24 }}>
          {CLAUSES.map((c, i) => (
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

      <PageFooterNav nextTo="/privacy" nextLabel="Privacy Policy" />
    </SiteLayout>
  );
}
