import { Link } from "@tanstack/react-router";

const STUDIOS = [
  { name: "Jayanagar", phone: "+91 80888 02525", tel: "+918088802525" },
  { name: "Sahakar Nagar", phone: "+91 72041 84033", tel: "+917204184033" },
  { name: "Malleshwaram", phone: "+91 99019 62026", tel: "+919901962026" },
  { name: "Kammanahalli", phone: "+91 73384 61555", tel: "+917338461555" },
];

const SERVICES = [
  "Manicure", "Pedicure", "Acrylic Nails", "Nail Art",
  "Nail Polish", "Eyelash Extensions", "Facials", "Waxing", "Threading",
];

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About & Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
  { to: "/terms", label: "Terms" },
  { to: "/privacy", label: "Privacy" },
] as const;

function IGIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
    </svg>
  );
}
function FBIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.5-1.5h1.4V5c-.7-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3V11H7v3h2.7v7h3.8z" />
    </svg>
  );
}
function YTIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 7.2c-.3-1.1-1.1-1.9-2.1-2.2C19 4.5 12 4.5 12 4.5s-7 0-8.9.5C2.1 5.3 1.3 6.1 1 7.2.5 9.1.5 12 .5 12s0 2.9.5 4.8c.3 1.1 1.1 1.9 2.1 2.2 1.9.5 8.9.5 8.9.5s7 0 8.9-.5c1-.3 1.8-1.1 2.1-2.2.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}

const footerLinkStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: "0.82rem",
  color: "#A89880",
  marginBottom: 10,
  transition: "color 0.3s ease",
};

export function Footer() {
  return (
    <footer style={{ background: "#120D06", color: "#A89880" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #C9A456, transparent)" }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 5% 0" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Brand */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.8rem", color: "#FAF7F2", marginBottom: 10 }}>
              The <span className="shimmer-text">Nail</span> Room
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.82rem", color: "#A89880", marginBottom: 12, lineHeight: 1.6 }}>
              Bangalore's Luxury Nail Atelier.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A456", marginBottom: 16 }}>
              Open Daily · 10:30 AM – 8:30 PM
            </p>
            <div style={{ height: 1, background: "linear-gradient(90deg, #C9A456, transparent)", marginBottom: 20 }} />
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://instagram.com/nailroomindia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                <IGIcon />
              </a>
              <a href="https://www.facebook.com/nailroomindia/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                <FBIcon />
              </a>
              <a href="https://www.youtube.com/@nailroomindia" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">
                <YTIcon />
              </a>
            </div>
          </div>

          {/* Column 2 — Navigate */}
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A456", marginBottom: 20 }}>
              Navigate
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} style={footerLinkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FAF7F2")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#A89880")}
                  >
                    › {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A456", marginBottom: 20 }}>
              Services
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link to="/contact#booking-form" style={footerLinkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FAF7F2")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#A89880")}
                  >
                    › {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Studios */}
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A456", marginBottom: 20 }}>
              Our Studios
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {STUDIOS.map((s) => (
                <li key={s.name} style={{ marginBottom: 16 }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "#FAF7F2", display: "block", marginBottom: 2 }}>
                    {s.name}
                  </span>
                  <a href={`tel:${s.tel}`} style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "#C9A456" }}>
                    {s.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "40px 5% 32px" }}>
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #C9A456, transparent)", marginBottom: 24 }} />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880" }}>
            © 2026 The Nail Room. All Rights Reserved.
          </span>
          <span style={{ display: "flex", gap: 16 }}>
            <Link to="/terms" style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880" }}>Terms</Link>
            <Link to="/privacy" style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880" }}>Privacy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
