import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about-reviews", label: "About & Reviews" },
  { to: "/gallery-blogs", label: "Gallery & Blogs" },
  { to: "/locations-book", label: "Locations & Book" },
] as const;

const services = ["Manicure", "Pedicure", "Acrylic Nails", "Nail Art", "Nail Polish", "Eyelash Extensions"];

const studios = [
  { name: "Malleshwaram", phone: "+91 98450 11221" },
  { name: "Jayanagar", phone: "+91 98450 22331" },
  { name: "Sahakar Nagar", phone: "+91 98450 33441" },
  { name: "Kammanahalli", phone: "+91 98450 44551" },
];

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-champagne)", fontWeight: 500, marginBottom: 24 }}>
    {children}
  </h4>
);

export function Footer() {
  return (
    <footer style={{ background: "var(--color-obsidian)", color: "var(--color-stone)" }}>
      <div className="section-pad" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 300, color: "var(--color-alabaster)", marginBottom: 8 }}>
              The Nail Room
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--color-stone)", marginBottom: 24 }}>
              Bangalore's Luxury Nail Atelier.
            </p>
            <div className="flex gap-5" style={{ color: "var(--color-champagne)" }}>
              <a href="#" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg></a>
              <a href="#" aria-label="WhatsApp"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M21 11.5a8.4 8.4 0 0 1-12.7 7.2L3 21l2.3-5.3A8.4 8.4 0 1 1 21 11.5z"/></svg></a>
            </div>
          </div>

          <div>
            <Heading>Navigate</Heading>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-stone)" }} className="hover:!text-[color:var(--color-alabaster)] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Heading>Services</Heading>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s} style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-stone)" }}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <Heading>Our Studios</Heading>
            <ul className="flex flex-col gap-4">
              {studios.map((s) => (
                <li key={s.name}>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-alabaster)" }}>{s.name}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--color-champagne)" }}>{s.phone}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ height: 1, background: "var(--color-champagne)", opacity: 0.2, margin: "48px 0 24px" }} />

        <div className="flex flex-col md:flex-row justify-between gap-3 max-w-7xl mx-auto">
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", color: "var(--color-stone)" }}>
            © 2026 The Nail Room. All Rights Reserved.
          </span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", color: "var(--color-stone)" }}>
            Terms &amp; Conditions  ·  Privacy Policy
          </span>
        </div>
      </div>
    </footer>
  );
}
