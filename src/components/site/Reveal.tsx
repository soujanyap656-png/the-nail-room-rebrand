import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, delay = 0, as: As = "div", className = "", style }: { children: ReactNode; delay?: number; as?: any; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As ref={ref as any} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </As>
  );
}
