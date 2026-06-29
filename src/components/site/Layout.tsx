import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden", background: "#FAF7F2" }}>
      <Header />
      <main style={{ paddingTop: 72 }}>{children}</main>
      <Footer />
    </div>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className="eyebrow" style={dark ? { color: "#C9A456" } : {}}>
      {children}
    </span>
  );
}

export function GoldRule() {
  return <hr className="gold-rule" style={{ margin: "32px auto", maxWidth: 240 }} />;
}

export function GoldDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, margin: "20px 0" }}>
      <span style={{ width: 40, height: 1, background: "linear-gradient(90deg, transparent, #C9A456)", display: "block" }} />
      <span style={{ color: "#C9A456", fontSize: "0.8rem", letterSpacing: "0.2em" }}>✦</span>
      <span style={{ width: 40, height: 1, background: "linear-gradient(90deg, #C9A456, transparent)", display: "block" }} />
    </div>
  );
}

export function Stars() {
  return (
    <div style={{ color: "#C9A456", letterSpacing: "0.2em", fontSize: "1rem" }}>★★★★★</div>
  );
}

export function CardGoldTop() {
  return <div className="card-gold-top" />;
}

export function Particles({ count = 14 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    left: `${5 + Math.random() * 90}%`,
    top: `${Math.random() * 100}%`,
    duration: `${5 + Math.random() * 8}s`,
    delay: `${Math.random() * 6}s`,
    drift: `${(Math.random() - 0.5) * 40}px`,
  }));

  return (
    <>
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            "--duration": p.duration,
            "--delay": p.delay,
            "--drift": p.drift,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
}

export function PageFooterNav({
  nextTo,
  nextLabel,
  teaser,
}: {
  nextTo: string;
  nextLabel: string;
  teaser: string;
}) {
  return (
    <div style={{
      background: "linear-gradient(135deg, #C9A456 0%, #E8CC8A 50%, #C9A456 100%)",
      padding: "70px 5%",
      textAlign: "center",
    }}>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(18,13,6,0.55)", marginBottom: 12, lineHeight: 1 }}>
        Continue Your Journey
      </p>
      <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#120D06", marginBottom: 32, fontWeight: 400, lineHeight: 1.2 }}>
        {teaser}
      </p>
      <Link to={nextTo} className="btn-dark" style={{ marginBottom: 16, display: "inline-flex" }}>
        {nextLabel} →
      </Link>
      <div style={{ marginTop: 16 }}>
        <Link to="/contact" className="btn-dark-outline" style={{ display: "inline-flex" }}>
          Book an Appointment →
        </Link>
      </div>
    </div>
  );
}
