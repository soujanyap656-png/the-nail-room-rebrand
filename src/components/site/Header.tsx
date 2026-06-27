import { Link } from "@tanstack/react-router";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About & Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
  { to: "/terms", label: "Terms" },
  { to: "/privacy", label: "Privacy" },
] as const;

export function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, zIndex: 1000,
        background: "rgba(7,4,15,0.85)",
        backdropFilter: "blur(18px) saturate(160%)",
        borderBottom: "1px solid rgba(230,199,112,0.25)",
      }}
    >
      <div className="flex items-center justify-between gap-4 px-[5%]" style={{ height: 64 }}>
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 400 }} className="gold-gradient">
            The Nail Room
          </span>
        </Link>
        <Link to="/contact" className="btn-ghost-gold shrink-0" style={{ padding: "8px 16px", fontSize: "0.6rem" }}>
          Reserve →
        </Link>
      </div>
      <nav
        className="nav-strip px-[5%]"
        style={{
          borderTop: "1px solid rgba(230,199,112,0.15)",
          padding: "10px 5%",
          justifyContent: "center",
        }}
      >
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
    </header>
  );
}
