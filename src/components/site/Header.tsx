import { Link, useRouterState } from "@tanstack/react-router";
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
  const [scrolled, setScrolled] = useState(false);
  const router = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [router.location.pathname]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0, zIndex: 1000,
          background: "rgba(18,13,6,0.88)",
          backdropFilter: "blur(16px) saturate(180%)",
          borderBottom: "1px solid rgba(201,164,86,0.2)",
          height: scrolled ? 56 : 72,
          transition: "height 0.3s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            padding: "0 clamp(16px, 4vw, 40px)",
            height: "100%",
          }}
        >
          {/* Wordmark */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, textDecoration: "none" }}>
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: scrolled ? "1.1rem" : "1.3rem",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#FAF7F2",
              transition: "font-size 0.3s ease",
            }}>
              The <span className="shimmer-text">Nail</span> Room
            </span>
            <span style={{ width: 1, height: 14, background: "rgba(201,164,86,0.4)", display: "inline-block" }} />
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.55rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#A89880",
            }}>
              Bangalore
            </span>
          </Link>

          {/* Desktop nav */}
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
                  color: "rgba(250,247,242,0.7)",
                  whiteSpace: "nowrap",
                  transition: "color 0.3s ease",
                  padding: "4px 0",
                }}
                activeProps={{ style: { color: "#C9A456" } }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Reserve CTA */}
          <Link
            to="/contact"
            className="hide-mobile"
            style={{
              flexShrink: 0,
              fontFamily: "var(--font-sans)",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C9A456",
              border: "1px solid #C9A456",
              padding: "8px 20px",
              borderRadius: 100,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #C9A456 0%, #E8CC8A 50%, #C9A456 100%)";
              (e.currentTarget as HTMLElement).style.color = "#120D06";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#C9A456";
            }}
          >
            Reserve →
          </Link>

          {/* Burger */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            style={{
              display: "none",
              background: "transparent",
              border: "1px solid rgba(201,164,86,0.5)",
              color: "#C9A456",
              width: 40, height: 40,
              borderRadius: 6,
              cursor: "pointer",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              padding: 8,
            }}
            className="mobile-burger"
          >
            <span style={{ display: "block", width: 18, height: 1, background: "#C9A456" }} />
            <span style={{ display: "block", width: 14, height: 1, background: "#C9A456" }} />
            <span style={{ display: "block", width: 18, height: 1, background: "#C9A456" }} />
          </button>
        </div>
      </header>

      <div className={`mobile-backdrop ${open ? "open" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`mobile-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          style={{
            position: "absolute", top: 20, right: 20,
            background: "transparent",
            border: "1px solid rgba(201,164,86,0.4)",
            color: "#C9A456",
            width: 38, height: 38,
            borderRadius: 6,
            fontSize: "1.1rem",
            cursor: "pointer",
          }}
        >✕</button>

        <span style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "1.5rem",
          color: "#FAF7F2",
          marginBottom: 40,
          display: "block",
        }}>
          The <span className="shimmer-text">Nail</span> Room
        </span>

        <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "2rem",
                color: "rgba(250,247,242,0.85)",
                padding: "10px 0",
                borderBottom: "1px solid rgba(201,164,86,0.12)",
                transition: "color 0.3s ease",
              }}
              activeProps={{ style: { color: "#C9A456", fontStyle: "italic" } }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="btn-primary"
          style={{ marginTop: "auto", textAlign: "center" }}
        >
          Reserve Your Visit →
        </Link>
      </aside>

      <style>{`
        @media (max-width: 768px) {
          .mobile-burger { display: flex !important; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
