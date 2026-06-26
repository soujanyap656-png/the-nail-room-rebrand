import { Link } from "@tanstack/react-router";

const LOCATIONS = [
  { name: "Malleshwaram", phone: "+91 98765 43210" },
  { name: "Jayanagar", phone: "+91 98765 43211" },
  { name: "Sahakar Nagar", phone: "+91 98765 43212" },
  { name: "Kammanahalli", phone: "+91 98765 43213" },
];

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
                <span style={{ fontSize: "0.78rem" }}>{l.phone}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul style={{ display: "grid", gap: 10, fontSize: "0.85rem" }}>
            <li><Link to="/">Home & Services</Link></li>
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
            Mon — Sat · <strong>10:00 — 20:00</strong><br />
            Sunday · <strong>11:00 — 19:00</strong>
          </p>
          <p className="eyebrow" style={{ marginTop: 24 }}>Follow</p>
          <div style={{ display: "flex", gap: 12, color: "var(--color-gold-bright)", fontSize: "0.85rem", letterSpacing: "0.2em" }}>
            <a>IG</a><span style={{ opacity: 0.4 }}>·</span><a>FB</a><span style={{ opacity: 0.4 }}>·</span><a>YT</a>
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
