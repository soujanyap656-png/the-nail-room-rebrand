import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <main style={{ paddingTop: 76 }}>{children}</main>
      <Footer />
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function Hairline() {
  return <hr className="hairline" />;
}

export function GoldDivider() {
  return (
    <div className="gold-divider" aria-hidden="true">
      <span style={{ width: 40, height: 1, background: "var(--color-gold)", opacity: 0.4 }} />
      <span style={{ fontSize: "0.9rem", letterSpacing: "0.2em" }}>✦</span>
      <span style={{ width: 40, height: 1, background: "var(--color-gold)", opacity: 0.4 }} />
    </div>
  );
}

export function Stars() {
  return (
    <div style={{ color: "var(--color-gold-bright)", letterSpacing: "0.25em", fontSize: "0.95rem", marginBottom: 16 }}>
      ★★★★★
    </div>
  );
}

/**
 * Strict end-of-page block:
 *  1. Massive Next Page button
 *  2. Book Appointment secondary CTA
 */
export function PageFooterNav({
  nextTo,
  nextLabel,
}: {
  nextTo: string;
  nextLabel: string;
}) {
  return (
    <section className="section-pad" style={{ paddingTop: 40 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Link
          to={nextTo}
          className="btn-gold"
          style={{
            width: "100%",
            padding: "32px 24px",
            fontSize: "1rem",
            letterSpacing: "0.3em",
            borderRadius: 6,
          }}
        >
          Next Page: {nextLabel} →
        </Link>

        <div style={{ marginTop: 22, textAlign: "center" }}>
          <Link
            to="/contact"
            className="btn-ghost-gold"
            style={{ minWidth: 280, padding: "18px 36px" }}
          >
            ✦ Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
