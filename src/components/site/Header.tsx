import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About & Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
  { to: "/terms", label: "Terms" },
  { to: "/privacy", label: "Privacy" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0, zIndex: 1000,
          background: "rgba(26,10,46,0.92)",
          backdropFilter: "blur(18px) saturate(160%)",
          borderBottom: "1px solid rgba(201,168,76,0.25)",
        }}
      >
        <div
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 16, padding: "0 clamp(16px, 4vw, 40px)", height: 64,
          }}
        >
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 400 }} className="gold-gradient">
              The Nail Room
            </span>
          </Link>

          <nav className="nav-strip" style={{ flex: 1, justifyContent: "center" }}>
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--color-mist)",
                  whiteSpace: "nowrap",
                  transition: "color 0.3s ease",
                }}
                activeProps={{ style: { color: "var(--color-gold-bright)" } }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <Link to="/contact" className="btn-ghost-gold shrink-0" style={{ padding: "8px 16px", fontSize: "0.6rem" }}>
            Reserve →
          </Link>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            style={{
              display: "none",
              background: "transparent",
              border: "1px solid rgba(201,168,76,0.4)",
              color: "var(--color-gold-bright)",
              width: 42, height: 42, borderRadius: 4,
              fontSize: "1.4rem", cursor: "pointer",
            }}
            className="mobile-burger"
          >☰</button>
        </div>
      </header>

      <div className={`mobile-backdrop ${open ? "open" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`mobile-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          style={{
            position: "absolute", top: 18, right: 18,
            background: "transparent", border: "1px solid rgba(201,168,76,0.4)",
            color: "var(--color-gold-bright)", width: 38, height: 38, borderRadius: 4,
            fontSize: "1.2rem", cursor: "pointer",
          }}
        >✕</button>
        <span className="gold-gradient" style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", marginBottom: 32 }}>
          The Nail Room
        </span>
        <nav style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-display)", fontSize: "1.5rem",
                color: "var(--color-ivory)", letterSpacing: "0.04em",
              }}
              activeProps={{ style: { color: "var(--color-gold-bright)", fontStyle: "italic" } }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </aside>

      <style>{`
        @media (max-width: 768px) {
          .mobile-burger { display: inline-flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </>
  );
}
