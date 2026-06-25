import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ background: "var(--color-alabaster)", minHeight: "100vh" }}>
      <Header />
      <main style={{ paddingTop: 72 }}>{children}</main>
      <Footer />
    </div>
  );
}

export function Eyebrow({ children, color = "var(--color-champagne)" }: { children: ReactNode; color?: string }) {
  return (
    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color, fontWeight: 500, display: "inline-block", marginBottom: 20 }}>
      {children}
    </span>
  );
}

export function Hairline() {
  return <hr className="hairline" style={{ border: 0 }} />;
}

export function Stars() {
  return (
    <div style={{ color: "var(--color-champagne)", letterSpacing: "0.2em", fontSize: "0.85rem", marginBottom: 16 }}>
      ★★★★★
    </div>
  );
}
