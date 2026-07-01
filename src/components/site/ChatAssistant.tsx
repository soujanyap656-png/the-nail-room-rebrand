import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";

type Msg = { role: "user" | "bot"; text: string; link?: { to: string; label: string } };

const QUICK_REPLIES = [
  "What services do you offer?",
  "How do I book?",
  "Where are your studios?",
  "What are your hours?",
];

const STUDIOS = [
  { name: "Jayanagar", phone: "+91 80888 02525" },
  { name: "Sahakar Nagar", phone: "+91 72041 84033" },
  { name: "Malleshwaram", phone: "+91 99019 62026" },
  { name: "Kammanahalli", phone: "+91 73384 61555" },
];

const SERVICES = [
  "Manicure", "Pedicure", "Acrylic Nails", "Nail Art",
  "Nail Polish", "Eyelash Extensions", "Facials", "Waxing", "Threading",
];

function getResponse(input: string): Msg {
  const q = input.toLowerCase();

  if (/(service|offer|do you|treatment|nail|facial|wax|thread|lash|acrylic|polish|manicure|pedicure)/i.test(q)) {
    return {
      role: "bot",
      text: `We offer nine signature services: ${SERVICES.join(", ")}. Each is performed by certified nail artists using salon-grade products. Explore our gallery to see examples.`,
      link: { to: "/about", label: "View Gallery →" },
    };
  }
  if (/(book|appointment|reserve|schedule|slot)/i.test(q)) {
    return {
      role: "bot",
      text: "You can book through our online portal or by calling your nearest studio directly. I recommend booking in advance to secure your preferred artist.",
      link: { to: "/contact#booking-form", label: "Open Booking Portal →" },
    };
  }
  if (/(studio|location|where|address|branch|near)/i.test(q)) {
    const list = STUDIOS.map((s) => `${s.name} — ${s.phone}`).join("\n");
    return {
      role: "bot",
      text: `We have four studios across Bangalore:\n${list}\nAll studios are open daily.`,
      link: { to: "/contact", label: "View Studio Details →" },
    };
  }
  if (/(hour|time|open|close|when)/i.test(q)) {
    return {
      role: "bot",
      text: "We're open Monday – Sunday, 10:30 AM – 8:30 PM. Walk-ins are welcome, though appointments are recommended for weekends.",
    };
  }
  if (/(price|cost|rate|charge|fee|how much)/i.test(q)) {
    return {
      role: "bot",
      text: "Pricing varies by service and design complexity. Please call your nearest studio for a detailed quote — they'll be happy to help.",
      link: { to: "/contact", label: "Studio Phone Numbers →" },
    };
  }
  if (/(contact|phone|email|reach|call|number)/i.test(q)) {
    return {
      role: "bot",
      text: "You can reach us at hello@nailroombangalore.com or call any studio directly. The Jayanagar studio is our flagship: +91 80888 02525.",
      link: { to: "/contact", label: "All Contact Details →" },
    };
  }
  if (/(cancel|reschedule|policy|refund)/i.test(q)) {
    return {
      role: "bot",
      text: "We require 24 hours' notice for cancellations or rescheduling. Services and gift certificates are non-refundable but transferable.",
      link: { to: "/terms", label: "Full Terms →" },
    };
  }
  if (/(faq|question|help|know)/i.test(q)) {
    return {
      role: "bot",
      text: "I can help with services, booking, studio locations, hours, pricing, and policies. What would you like to know?",
      link: { to: "/faq", label: "Browse All FAQs →" },
    };
  }
  return {
    role: "bot",
    text: "I'd love to help with that! Try asking about our services, studios, hours, or booking. You can also reach us at hello@nailroombangalore.com.",
  };
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Welcome to The Nail Room. How may I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Msg = { role: "user", text: trimmed };
    const botMsg = getResponse(trimmed);
    setMessages((p) => [...p, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1500,
          width: 56,
          height: 56,
          borderRadius: "50%",
          border: "1px solid rgba(201,164,86,0.5)",
          background: "linear-gradient(135deg, #1A1208 0%, #241A0C 100%)",
          color: "#C9A456",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3), 0 0 0 0 rgba(201,164,86,0.4)",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
          animation: !isOpen ? "pulse 2.5s ease-in-out infinite" : "none",
        }}
      >
        {isOpen ? (
          <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>✕</span>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>

      {/* Panel */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: 92,
            right: 24,
            zIndex: 1500,
            width: "min(340px, calc(100vw - 32px))",
            maxHeight: 480,
            display: "flex",
            flexDirection: "column",
            borderRadius: 16,
            overflow: "hidden",
            background: "rgba(18,13,6,0.96)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(201,164,86,0.3)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
            animation: "fadeSlideUp 0.3s ease-out forwards",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "18px 20px",
              borderBottom: "1px solid rgba(201,164,86,0.2)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #C9A456 0%, #E8CC8A 50%, #C9A456 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#120D06",
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "1rem",
                flexShrink: 0,
              }}
            >
              N
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1rem", color: "#FAF7F2", margin: 0, lineHeight: 1.2 }}>
                Nail Room Concierge
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A456", margin: "2px 0 0" }}>
                ✦ Online Now
              </p>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              maxHeight: 320,
              scrollbarWidth: "thin",
            }}
          >
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div
                  style={{
                    maxWidth: "85%",
                    padding: "10px 14px",
                    borderRadius: 12,
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                    background: m.role === "user" ? "rgba(201,164,86,0.15)" : "rgba(255,255,255,0.06)",
                    border: m.role === "user" ? "1px solid rgba(201,164,86,0.3)" : "1px solid rgba(201,164,86,0.12)",
                    color: m.role === "user" ? "#E8CC8A" : "rgba(250,247,242,0.9)",
                  }}
                >
                  {m.text}
                </div>
                {m.link && (
                  <Link
                    to={m.link.to}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#C9A456",
                      marginTop: 4,
                      padding: "4px 0",
                    }}
                  >
                    {m.link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Quick replies (show only at start) */}
            {messages.length <= 2 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr}
                    onClick={() => send(qr)}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#C9A456",
                      background: "transparent",
                      border: "1px solid rgba(201,164,86,0.35)",
                      borderRadius: 100,
                      padding: "6px 12px",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(201,164,86,0.15)";
                      (e.currentTarget as HTMLElement).style.borderColor = "#C9A456";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,164,86,0.35)";
                    }}
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            style={{
              padding: "12px 16px 16px",
              borderTop: "1px solid rgba(201,164,86,0.15)",
              display: "flex",
              gap: 8,
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(201,164,86,0.25)",
                borderRadius: 8,
                padding: "10px 14px",
                fontFamily: "var(--font-body)",
                fontSize: "0.82rem",
                color: "#FAF7F2",
                outline: "none",
                transition: "border-color 0.3s ease",
              }}
              onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "#C9A456"; }}
              onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(201,164,86,0.25)"; }}
            />
            <button
              type="submit"
              aria-label="Send message"
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                border: "none",
                background: "linear-gradient(135deg, #C9A456 0%, #E8CC8A 50%, #C9A456 100%)",
                color: "#120D06",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "opacity 0.2s ease",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
