import { ArrowRight, User, Mail } from "lucide-react";



// --- COMPONENTE ---

const About = () => {
  return (
    <section className="section" id="about">
      <div className="page-wrapper" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

      
        {/* ── ABOUT ME ── */}
        <div style={{
          border: "1.5px solid var(--border)",
          borderRadius: "var(--radius-xl)",
          background: "var(--bg-surface)",
          padding: "32px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          gap: "28px",
        }}>
          {/* Avatar */}
          <div style={{
            width: "80px", height: "80px",
            borderRadius: "50%",
            background: "var(--bg-elevated)",
            border: "1.5px solid var(--border)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <User size={36} strokeWidth={1} style={{ color: "var(--text-faint)" }} />
          </div>

          {/* Testo */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }}>About me</h3>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "560px" }}>
              Vengo da un background creativo, ma ho scelto il backend perché amo dare struttura
              e ordine alla complessità. Mi piace progettare sistemi solidi, pensare ai dati e scrivere
              logica chiara che risolve problemi reali.
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "560px" }}>
              Attualmente sto completando un percorso full-stack con forte focus backend,
              lavorando su progetti reali per consolidare le mie competenze.
            </p>
          </div>
        </div>

        {/* ── CTA ── */}
        
        <div  
         style={{
          border: "1.5px solid var(--border)",
          borderRadius: "var(--radius-xl)",
          background: "var(--bg-surface)",
          padding: "28px 32px",
          marginTop: "30px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}>
          {/* Icona + testo */}
          <div style={{ display: "flex",flexWrap: "wrap", alignItems: "center", gap: "24px" }}>
            <div style={{
              width: "64px", height: "64px",
              borderRadius: "var(--radius-md)",
              background: "var(--bg-elevated)",
              border: "1.5px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <Mail size={26} strokeWidth={1.5} style={{ color: "var(--text-muted)" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                Looking for a backend developer?
              </h3>
              <p style={{ fontSize: "0.875rem" }}>
                Sono disponibile per nuove opportunità lavorative.
              </p>
            </div>
          </div>

          {/* Bottone */}
           <div className="hero-buttons">
          <button className="btn btn-primary" style={{ flexShrink: 0 }}>
            Get in touch <ArrowRight size={16} />
          </button> 
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;