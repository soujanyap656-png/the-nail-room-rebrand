import { Link } from "@tanstack/react-router";

type Variant = "champagne" | "obsidian";

export function SequentialNav({
  eyebrow = "Continue your journey",
  heading,
  to,
  cta,
  variant = "champagne",
}: {
  eyebrow?: string;
  heading: string;
  to: string;
  cta: string;
  variant?: Variant;
}) {
  const isDark = variant === "obsidian";
  const bg = isDark ? "var(--color-obsidian)" : "var(--color-champagne)";
  const textColor = isDark ? "var(--color-alabaster)" : "var(--color-obsidian)";
  const eyebrowColor = isDark ? "var(--color-champagne)" : "rgba(14,13,12,0.6)";
  const btnClass = isDark ? "btn-primary" : "btn-dark";

  return (
    <section style={{ background: bg }} className="section-pad text-center">
      <div className="max-w-3xl mx-auto">
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: eyebrowColor, fontWeight: 500 }}>
          {eyebrow}
        </span>
        <h2 className="h-display" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: textColor, margin: "20px 0 36px", fontStyle: isDark ? "italic" : "normal" }}>
          {heading}
        </h2>
        <Link to={to} className={btnClass}>
          {cta}
        </Link>
      </div>
    </section>
  );
}
