import { Link } from "@tanstack/react-router";

const LOCATIONS = [
  { name: "Jayanagar", phone: "+91 80888 02525" },
  { name: "Sahakar Nagar", phone: "+91 72041 84033" },
  { name: "Malleshwaram", phone: "+91 99019 62026" },
  { name: "Kammanahalli", phone: "+91 73384 61555" },
];

function IconInstagram() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4z" />
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 7.2c-.3-1.2-1.2-2.1-2.4-2.4C18.4 4.3 12 4.3 12 4.3s-6.4 0-8.6.5C2.2 5.1 1.3 6 1 7.2.5 9.4.5 12 .5 12s0 2.6.5 4.8c.3 1.2 1.2 2.1 2.4 2.4 2.2.5 8.6.5 8.6.5s6.4 0 8.6-.5c1.2-.3 2.1-1.2 2.4-2.4.5-2.2.5-4.8.5-4.8s0-2.6-.5-4.8zM9.8 15.5V8.5l5.9 3.5-5.9 3.5z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #07040F 0%, #0B0716 100%)",
        borderTop: "1px solid rgba(230,199,112,0.25)",
        color: "var(--color-mist)",
        padding: "80px 5% 32px",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }} className="grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="gold-gradient" style={{ fontSize: "1.6rem", marginBottom: 16 }}>Nail Room</h3>
          <p style={{ fontSize: "0.88rem" }}>
            Bangalore's <strong style={{ color: "var(--color-gold-bright)" }}>nail atelier</strong>, crafting handcrafted nail art across <strong style={{ color: "var(--color-gold-bright)" }}>four locations</strong>.
          </p>
        </div>

        <div>
          <p className="eyebrow">Studios</p>
          <ul style={{ display: "grid", gap: 10, fontSize: "0.85rem" }}>
            {LOCATIONS.map((l) => (
              <li key={l.name}>
                <span style={{ color: "var(--color-gold-bright)" }}>{l.name}</span>
                <br />
                <a href={`tel:${l.phone.replace(/\s/g, "")}`} style={{ fontSize: "0.78rem" }}>{l.phone}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul style={{ display: "grid", gap: 10, fontSize: "0.85rem" }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Atelier Hours</p>
          <p style={{ fontSize: "0.85rem" }}>
            Mon–Sun · <strong style={{ color: "var(--color-gold-bright)" }}>10:00 AM – 9:00 PM</strong>
          </p>
          <p className="eyebrow" style={{ marginTop: 24 }}>Follow</p>
          <div style={{ display: "flex", gap: 16, color: "var(--color-gold-bright)", alignItems: "center" }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ display: "inline-flex" }}><IconInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ display: "inline-flex" }}><IconFacebook /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ display: "inline-flex" }}><IconYouTube /></a>
          </div>
        </div>
      </div>

      <hr className="hairline" style={{ margin: "56px auto 24px", maxWidth: 1400 }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-mist)" }}>
        <span>© 2026 Nail Room · Bangalore</span>
        <span>Crafted with <span style={{ color: "var(--color-gold-bright)" }}>✦</span> for the discerning</span>
      </div>
    </footer>
  );
}
