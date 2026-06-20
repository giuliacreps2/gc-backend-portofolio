import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import giuliaLinkIn from "../assets/images/Giulia-Crepaldi-Profilo.png";
import { Link } from "react-router-dom";

// --- DATI ---

const education = [
  { title: "Epicode", desc: "Full Stack Developer", note: "Focus backend" },
  { title: "JobFormazione", desc: "Grafica, UI & UX", note: "Design mindset" },
  {
    title: "Google x UnionCamere",
    desc: "Crescere in Digitale",
    note: "Marketing",
  },
  {
    title: "Università di Bologna",
    desc: "Lettere Classiche",
    note: "Struttura e analisi",
  },
];

const skills = [
  {
    title: "Core",
    items: ["Backend Architecture", "API Design", "Data Modeling"],
  },
  {
    title: "Tech",
    items: ["Java / Spring Boot", "PostgreSQL / MongoDB", "JWT / Security"],
  },
  { title: "Experience", items: ["E-commerce", "E-learning", "RBAC systems"] },
  {
    title: "Plus",
    items: ["UX awareness", "Marketing mindset", "Content structure"],
  },
];

// --- COMPONENTE ---

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="section" id="formazione">
      <div
        className="page-wrapper"
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        {/* ── ABOUT ME + BACKGROUND ── */}
        <div
          className="about-grid"
          style={{
            border: "1.5px solid var(--border)",
            borderRadius: "var(--radius-xl)",
            background: "var(--bg-surface)",
            padding: "32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* SINISTRA: About */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "var(--bg-elevated)",
                border: "1.5px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <img style={{ width: "250px" }} src={giuliaLinkIn} />
              {/*<User size={36} strokeWidth={1} style={{ color: "var(--text-faint)" }} />*/}
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Chi sono</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.75 }}>
                    Il mio percorso unisce l'approccio analitico degli studi
                    classici a una forte inclinazione per l'organizzazione e la
                    struttura logica dei dati. Per anni ho lavorato come
                    freelance occupandomi di UI/UX, progettazione grafica e
                    strategia digitale. Questa esperienza mi ha permesso di
                    sviluppare una profonda comprensione di come un prodotto
                    debba essere strutturato e comunicato per funzionare
                    concretamente sul mercato.
                  </p>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.75 }}>
                    Con il tempo, ho sentito il bisogno di andare oltre
                    l'interfaccia visiva per scendere alla radice dei sistemi,
                    dove i dati si collegano e le regole del dominio prendono
                    forma. Spostarsi su Java e Spring Boot è stato l'approdo
                    naturale per assecondare la mia capacità di scomporre
                    problemi complessi, normalizzare i flussi e cercare la
                    pulizia nell'architettura del codice.
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.75,
                      marginBottom: "2.2rem",
                    }}
                  >
                    Dalle mie esperienze precedenti porto con me un forte
                    orientamento al risultato: non programmo per puro esercizio
                    teorico, ma perché amo vedere software che funziona davvero,
                    portando conversioni e metriche stabili. Dopo aver gestito i
                    miei progetti in autonomia, oggi cerco l'inserimento in un
                    reparto tecnico strutturato, mossa dal desiderio di
                    collaborare, confrontarmi e crescere insieme a un team
                    affiatato.
                  </p>
                </div>
              </div>

              {/* ── SKILL BUTTON ── */}
              <div>
                <button
                  className="btn btn-primary1"
                  style={{ marginBottom: "2.2rem" }}
                  onClick={() => setOpen(true)}
                >
                  Approfondisci le competenze
                </button>
              </div>
            </div>
          </div>

          {/* DESTRA: Timeline Background */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              position: "relative",
            }}
          >
            <h4 style={{ fontSize: "1.1rem", fontWeight: 600 }}>Percorso</h4>

            {/* Linea verticale */}
            <div
              style={{
                position: "absolute",
                left: "6px",
                top: "42px",
                bottom: "0",
                width: "1px",
                background: "var(--border)",
              }}
            />

            {education.map((item, i) => {
              //const isFirst = i === education.length -1;

              return (
                <div key={i} style={{ display: "flex", gap: "12px" }}>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      border: "2px solid var(--accent-hover)",
                      marginTop: "6px",
                      background: "var(--bg-surface)",
                      flexShrink: 0,
                      zIndex: 2,
                    }}
                  />
                  <div>
                    <p style={{ fontWeight: 600 }}>{item.title}</p>
                    <p style={{ fontSize: "0.85rem" }}>{item.desc}</p>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {item.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── POPUP SKILLS ──*/}
        {open && (
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999,
              padding: "20px",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: "720px",
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-xl)",
                border: "1.5px solid var(--border)",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700 }}>
                Skill System
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                }}
              >
                {skills.map(({ title, items }) => (
                  <div key={title}>
                    <h5
                      style={{
                        fontWeight: 600,
                        marginBottom: "8px",
                        color: "var(--text-primary)",
                      }}
                    >
                      {title}
                    </h5>
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      {items.map((item) => (
                        <li
                          key={item}
                          style={{
                            fontSize: "0.9rem",
                            display: "flex",
                            gap: "8px",
                          }}
                        >
                          <span style={{ color: "var(--accent)" }}>→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button
                  className="btn btn-secondary"
                  onClick={() => setOpen(false)}
                >
                  Chiudi
                </button>
                <Link to="/cv" className="btn btn-primary">
                  Visualizza il CV
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ── CTA ── */}
        <div
          style={{
            border: "1.5px solid var(--border)",
            borderRadius: "var(--radius-xl)",
            background: "var(--bg-surface)",
            padding: "28px 32px",
            marginTop: "10px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "var(--radius-md)",
                background: "var(--bg-elevated)",
                border: "1.5px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Mail
                size={26}
                strokeWidth={1.5}
                style={{ color: "var(--text-muted)" }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              id="contatti"
            >
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                Cerchi una backend developer?
              </h3>
              <p style={{ fontSize: "0.875rem" }}>
                Sono disponibile per nuove opportunità lavorative.
              </p>
            </div>
          </div>

          <a
            href="mailto:giulia.creps2@gmail.com"
            className="btn btn-primary"
            style={{ flexShrink: 0 }}
          >
            Scrivimi <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
