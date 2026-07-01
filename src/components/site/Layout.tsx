import type { ReactNode, CSSProperties } from "react";
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
  const particles = Array.from({ length: count }, () => ({
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
          } as CSSProperties}
        />
      ))}
    </>
  );
}

export const TOTAL_PAGES = 6;

export function PageFooterNav({
  nextTo,
  nextLabel,
  teaser,
  pageIndex,
}: {
  nextTo: string;
  nextLabel: string;
  teaser: string;
  pageIndex: number;
}) {
  const num = String(pageIndex).padStart(2, "0");
  const total = String(TOTAL_PAGES).padStart(2, "0");
  return (
    <div style={{
      background: "linear-gradient(135deg, #C9A456 0%, #E8CC8A 50%, #C9A456 100%)",
      padding: "70px 5%",
      textAlign: "center",
    }}>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(18,13,6,0.55)", marginBottom: 8, lineHeight: 1 }}>
        Continue Your Journey · {num} / {total}
      </p>
      <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#120D06", marginBottom: 28, fontWeight: 400, lineHeight: 1.2 }}>
        {teaser}
      </p>
      <Link to={nextTo} className="btn-dark" style={{ marginBottom: 14, display: "inline-flex" }}>
        {nextLabel} →
      </Link>
      <div style={{ marginTop: 12 }}>
        <Link to="/contact" hash="booking-form" className="btn-dark-outline" style={{ display: "inline-flex" }}>
          Book an Appointment →
        </Link>
      </div>
    </div>
  );
}

/**
 * Shared hero shell — tightened rhythm and slightly smaller headline
 * used across all pages except the Home hero (which has its own image treatment).
 */
export function PageHero({
  eyebrow,
  headline,
  headlineAccent,
  subheading,
  background,
  overlay = "linear-gradient(135deg, rgba(18,13,6,0.72) 0%, rgba(26,18,8,0.55) 50%, rgba(18,13,6,0.85) 100%)",
  video,
}: {
  eyebrow: string;
  headline: ReactNode;
  headlineAccent?: ReactNode;
  subheading?: ReactNode;
  background?: string;
  overlay?: string;
  video?: string;
}) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(72px, 10vw, 120px)",
        paddingBottom: "clamp(48px, 7vw, 80px)",
        paddingLeft: "5%",
        paddingRight: "5%",
        background: background ? undefined : "linear-gradient(135deg, #1A1208 0%, #2A1F12 50%, #1A1208 100%)",
      }}
    >
      {video && (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -2 }}
        />
      )}
      {background && !video && (
        <img
          src={background}
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -2 }}
        />
      )}
      {(background || video) && (
        <div style={{ position: "absolute", inset: 0, background: overlay, zIndex: -1 }} />
      )}
      <Particles count={8} />
      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <span className="eyebrow" style={{ color: "#C9A456", marginBottom: 12 }}>{eyebrow}</span>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5.5vw, 4.4rem)",
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: 1.05,
          color: "#FAF7F2",
          margin: "0 0 14px",
        }}>
          {headline}
          {headlineAccent && (
            <>
              {" "}
              <em className="shimmer-text" style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontStyle: "italic" }}>{headlineAccent}</em>
            </>
          )}
        </h1>
        {subheading && (
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.94rem", color: "rgba(250,247,242,0.85)", maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
}
