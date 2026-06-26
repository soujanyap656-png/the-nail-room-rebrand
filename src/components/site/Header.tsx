import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
  { to: "/terms", label: "Terms" },
  { to: "/privacy", label: "Privacy" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0, zIndex: 1000, height: 76,
          background: "rgba(7,4,15,0.82)",
          backdropFilter: "blur(18px) saturate(160%)",
          borderBottom: "1px solid rgba(230,199,112,0.28)",
        }}
        className="flex items-center justify-between px-[5%]"
      >
        <Link to="/" className="flex items-center gap-3">
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.55rem", fontWeight: 400 }} className="gold-gradient">
            Nail Room
          </span>
          <span style={{ width: 1, height: 20, background: "var(--color-gold)", opacity: 0.55 }} />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--color-mist)" }}>
            Bangalore
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-amber-200"
              style={{
                fontFamily: "var(--font-sans)", fontSize: "0.78rem",
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "var(--color-ivory)", fontWeight: 400,
                transition: "color 0.3s ease",
              }}
              activeProps={{ style: { color: "var(--color-gold-bright)" } }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden lg:inline-flex btn-ghost-gold" style={{ padding: "10px 22px", fontSize: "0.65rem" }}>
          Book →
        </Link>

        <button
          aria-label="Open menu"
          className="lg:hidden flex flex-col gap-[6px] p-2"
          onClick={() => setOpen(true)}
        >
          <span style={{ width: 24, height: 1, background: "var(--color-gold-bright)" }} />
          <span style={{ width: 24, height: 1, background: "var(--color-gold-bright)" }} />
          <span style={{ width: 24, height: 1, background: "var(--color-gold-bright)" }} />
        </button>
      </header>

      {open && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 2000,
            background: "linear-gradient(160deg, #07040F 0%, #1A0F2E 100%)",
            display: "flex", flexDirection: "column", padding: "32px 6%",
          }}
        >
          <div className="flex items-center justify-between mb-12">
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem" }} className="gold-gradient">Nail Room</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)} style={{ color: "var(--color-gold-bright)", fontSize: "1.8rem", padding: 8 }}>×</button>
          </div>
          <nav className="flex flex-col gap-6">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem", fontWeight: 400,
                  color: "var(--color-ivory)",
                  borderBottom: "1px solid rgba(230,199,112,0.15)",
                  paddingBottom: 12,
                }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-8">
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold" style={{ width: "100%" }}>
              Book Appointment →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
