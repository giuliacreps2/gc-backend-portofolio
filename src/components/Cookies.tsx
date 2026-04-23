import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  // Al mount controlla se l'utente ha già accettato
  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", bottom: "24px", left: "50%",
      transform: "translateX(-50%)",
      zIndex: 999,
      background: "var(--text-faint)",
      border: "1.5px solid var(--border)",
      borderRadius: "var(--radius-xl)",
      padding: "16px 24px",
      display: "flex", alignItems: "center", gap: "16px",
      flexWrap: "wrap",
      boxShadow: "var(--shadow-lg)",
      maxWidth: "560px", width: "calc(100% - 48px)",
    }}>
      <p style={{ fontSize: "0.85rem", flex: 1, minWidth: "200px" }}>
        Questo sito usa cookie tecnici per migliorare l'esperienza. 🍪
      </p>
      <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
        <button className="btn btn-ghost" onClick={handleDecline}>
          Rifiuta
        </button>
        <button className="btn btn-primary" onClick={handleAccept}>
          Accetta
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;