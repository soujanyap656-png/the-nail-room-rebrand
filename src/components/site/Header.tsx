import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about-reviews", label: "About & Reviews" },
  { to: "/gallery-blogs", label: "Gallery & Blogs" },
  { to: "/locations-book", label: "Locations & Book" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 72,
          background: "rgba(248,245,241,0.96)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        className="flex items-center justify-between px-[5%]"
      >
        <Link to="/" className="flex items-center gap-3">
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 300, color: "var(--color-charcoal)" }}>
            The Nail Room
          </span>
          <span style={{ width: 1, height: 18, background: "var(--color-champagne)", opacity: 0.5 }} />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            Bangalore
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="nr-nav-link"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-stone)",
                transition: "color 0.3s ease",
              }}
              activeProps={{ style: { color: "var(--color-champagne)" } }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link to="/locations-book" className="hidden md:inline-flex btn-ghost" style={{ padding: "10px 22px", fontSize: "0.65rem" }}>
          Reserve →
        </Link>

        <button
          aria-label="Open menu"
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(true)}
        >
          <span style={{ width: 22, height: 1, background: "var(--color-champagne)" }} />
          <span style={{ width: 22, height: 1, background: "var(--color-champagne)" }} />
          <span style={{ width: 22, height: 1, background: "var(--color-champagne)" }} />
        </button>
      </header>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--color-obsidian)",
            zIndex: 2000,
            display: "flex",
            flexDirection: "column",
            padding: "32px 6%",
          }}
        >
          <div className="flex items-center justify-between mb-16">
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--color-alabaster)" }}>The Nail Room</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)} style={{ color: "var(--color-champagne)", fontSize: "1.5rem", padding: 8 }}>×</button>
          </div>
          <nav className="flex flex-col gap-8">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.2rem",
                  fontWeight: 300,
                  color: "var(--color-alabaster)",
                }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Link to="/locations-book" onClick={() => setOpen(false)} className="btn-primary" style={{ width: "100%" }}>
              Reserve Your Visit →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
