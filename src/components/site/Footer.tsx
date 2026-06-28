import { Link } from "@tanstack/react-router";

const LOCATIONS = [
  { name: "Jayanagar", phone: "+91 80888 02525" },
  { name: "Sahakar Nagar", phone: "+91 72041 84033" },
  { name: "Malleshwaram", phone: "+91 99019 62026" },
  { name: "Kammanahalli", phone: "+91 73384 61555" },
];

function IGIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
    </svg>
  );
}
function FBIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.5-1.5h1.4V5c-.7-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3V11H7v3h2.7v7h3.8z" />
    </svg>
  );
}
function YTIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 7.2c-.3-1.1-1.1-1.9-2.1-2.2C19 4.5 12 4.5 12 4.5s-7 0-8.9.5C2.1 5.3 1.3 6.1 1 7.2.5 9.1.5 12 .5 12s0 2.9.5 4.8c.3 1.1 1.1 1.9 2.1 2.2 1.9.5 8.9.5 8.9.5s7 0 8.9-.5c1-.3 1.8-1.1 2.1-2.2.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #1A0A2E 0%, #1A0A2E 100%)",
        borderTop: "1px solid rgba(201,168,76,0.25)",
        color: "var(--color-mist)",
        padding: "80px 5% 32px",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }} className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="gold-gradient" style={{ fontSize: "1.6rem", marginBottom: 16 }}>The Nail Room</h3>
          <p style={{ fontSize: "0.88rem" }}>
            Bangalore's <strong>luxury nail atelier</strong>, crafting handcrafted nail art with <strong>clinical precision</strong> across four refined locations.
          </p>
        </div>

        <div>
          <p className="eyebrow">Studios</p>
          <ul style={{ display: "grid", gap: 10, fontSize: "0.85rem" }}>
            {LOCATIONS.map((l) => (
              <li key={l.name}>
                <span style={{ color: "var(--color-gold-bright)" }}>{l.name}</span>
                <br />
                <a href={`tel:${l.phone.replace(/\s+/g, "")}`} style={{ fontSize: "0.78rem", color: "var(--color-mist)" }}>
                  {l.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul style={{ display: "grid", gap: 10, fontSize: "0.85rem" }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About & Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Atelier Hours</p>
          <p style={{ fontSize: "0.85rem" }}>
            <strong>Open Daily 10:00 AM – 09:00 PM</strong>
          </p>
          <p className="eyebrow" style={{ marginTop: 24 }}>Follow</p>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="https://instagram.com/nailroomindia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon"><IGIcon /></a>
            <a href="https://www.facebook.com/nailroomindia/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon"><FBIcon /></a>
            <a href="https://www.youtube.com/@nailroomindia" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon"><YTIcon /></a>
          </div>
        </div>
      </div>

      <hr className="hairline" style={{ margin: "56px auto 24px", maxWidth: 1400 }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-mist)" }}>
        <span>© 2026 The Nail Room · Bangalore</span>
        <span>Crafted with <span style={{ color: "var(--color-gold-bright)" }}>✦</span> for the discerning</span>
      </div>
    </footer>
  );
}
