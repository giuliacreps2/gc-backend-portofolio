import imgProfile from "../assets/images/Giulia-Crepaldi-Profilo.png";

const CONTACTS = [
  { icon: "ti-mail", label: "Email", value: "giulia.creps2@gmail.com" },
  { icon: "ti-phone", label: "Telefono", value: "+39 333 3100284" },
  { icon: "ti-map-pin", label: "Posizione", value: "Empoli, Toscana" },
];

const LINKS = [
  {
    icon: "ti-brand-github",
    label: "GitHub",
    value: "https://github.com/giuliacreps2",
  },
  {
    icon: "ti-brand-linkedin",
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/giulia-crepaldi-dev/",
  },
  {
    icon: "ti-brand-github",
    label: "Portfolio",
    value: "https://giuliacreps2.github.io/gc-backend-portofolio/",
  },
];

const LANGUAGES = [
  { flag: "🇮🇹", name: "Italiano", level: "Madrelingua" },
  { flag: "🇬🇧", name: "Inglese", level: "Professionale - B2" },
];

const SOFT_SKILLS = [
  {
    title: "Pensiero analitico",
    desc: "",
  },
  {
    title: "Attenzione al dettaglio",
    desc: "",
  },
  {
    title: "Business oriented",
    desc: "Forte orientamento a metriche, scalabilità e sostenibilità delle scelte tecniche.",
  },
];

const EXPERIENCES = [
  {
    date: "Feb 2026 – Presente",
    location: "Empoli, Italia",
    role: "Backend Developer & Software Architect",
    company: "Lanzi Orto Urbano",
    description:
      "Progettazione e sviluppo dell'infrastruttura digitale aziendale su architettura SaaS scalabile. Modellazione del database PostgreSQL con strutture JSONB per metadati flessibili, implementazione di API REST con autenticazione stateless JWT e sviluppo di moduli per la generazione in stream binario (byte[]).",
  },
  {
    date: "Dic 2021 – Presente",
    location: "Remoto",
    role: "Founder & Product Architect",
    company: "BStudent Academy",
    description:
      "Ideazione e design architetturale di una piattaforma EdTech. Definizione del modello logico dei dati (ERD) per flussi didattici complessi, pianificazione dell'architettura applicativa con Spring Data JPA e strutturazione della roadmap tecnica per l'integrazione di moduli di gamification e sistemi real-time.",
  },
  {
    date: "Gen 2024 – Apr 2026",
    location: "Firenze, Italia",
    role: "Co-Founder & Brand Strategist",
    company: "Godo Creative",
    description:
      "Consulenza strategica orientata alla digitalizzazione dei processi operativi per PMI. Implementazione di sistemi CRM per l'efficientamento dei flussi interni, analisi dei KPI di business, ottimizzazione dei budget e pianificazione della presenza digitale.",
  },
];

const EDUCATION = [
  {
    badge: "💻",
    school: "EPICODE Institute of Technology",
    paragraphs: ["Master Full-Stack AI Developer", "Nov 2025 – Giu 2026"],
  },
  {
    badge: "📐",
    school: "Job Formazione",
    paragraphs: ["Masterclass Graphic Web Design", "2022 – 2023"],
  },
  {
    badge: "✅​",
    school: "Google",
    paragraphs: ["Google Digital Training - ID: 6N8 8C2 PAX", "2020"],
  },
  {
    badge: "🏛️",
    school: "Università di Bologna",
    paragraphs: ["Laurea in Lettere Classiche", "2010 – 2014"],
  },
];

const TECH_STACK = {
  Backend: [
    "Java 17",
    "Spring Boot",
    "Spring Security",
    "Spring Data JPA",
    "JWT",
    "REST API",
    "OOP",
    "Maven",
  ],
  Database: ["PostgreSQL", "SQL", "JSONB", "Query Optimization"],
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  Tools: ["Git", "GitHub", "Agile / Scrum", "Software Architecture"],
};

export default function CVGiuliaCrepaldi() {
  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        @import url('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css');

        @media print {
          body { background: white; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          @page { size: A4; margin: 0; }
          .no-print { display: none !important; }
          .cv-outer { background: white !important; padding: 0 !important; }
          .cv-wrap { width: 100%; max-width: 100%; }
        }

        .cv-wrap {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 210px 1fr;
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
        }

        .cv-sidebar {
          background: #ffffff;
          border-right: 0.5px solid #e2e8f0;
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .cv-main {
          padding: 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 26px;
          background: #ffffff;
        }

        .avatar {
          width: 56px; height: 56px; border-radius: 50%;
          background: #EEEDFE; display: flex; align-items: center;
          justify-content: center; font-size: 16px; font-weight: 600;
          color: #3C3489; flex-shrink: 0;
        }

        .divider { border: none; border-top: 0.5px solid #e2e8f0; margin: 0; }

        .section-label {
          font-size: 10px; font-weight: 600; color: #94a3b8;
          text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px;
        }

        .section-label1 {
          font-size: 10px; font-weight: 600; color: #94a3b8;
          text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; line-height: 0.6em;
        }

        .contact-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 11px; }

        .contact-icon {
          width: 26px; height: 26px; border-radius: 50%; background: #EEEDFE;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; color: #534AB7; font-size: 12px;
        }

        .contact-label { font-size: 9.5px; color: #94a3b8; display: block; }
        .contact-value { font-size: 10.5px; color: #1e293b; font-weight: 500; line-height: 1.4; word-break: break-word; }

        .skill-dot { width: 6px; height: 6px; border-radius: 50%; background: #7F77DD; flex-shrink: 0; margin-top: 5px; }
        .skill-title { font-size: 11px; font-weight: 600; color: #1e293b; margin: 0 0 2px 0; }
        .skill-desc { font-size: 10px; color: #64748b; line-height: 1.4; }

        .section-title {
          font-size: 13px; font-weight: 600; color: #0f172a;
          margin: 0 0 14px 0; letter-spacing: -0.01em;
          padding-bottom: 6px; border-bottom: 0.5px solid #e2e8f0;
        }

        .profile-text { font-size: 10px; line-height: 1.7; color: #475569; margin: 0; }

        .timeline { position: relative; padding-left: 18px; border-left: 0.5px solid #cbd5e1; }

        .timeline-item { position: relative; margin-bottom: 20px; padding-left: 14px; }

        .timeline-dot {
          position: absolute; left: -24px; top: 4px;
          width: 8px; height: 8px; border-radius: 50%;
          background: #7F77DD; border: 2px solid #ffffff;
          box-shadow: 0 0 0 1px #7F77DD;
        }

        .timeline-meta {
          font-size: 10px; color: #94a3b8; margin-bottom: 4px;
          display: flex; gap: 10px; flex-wrap: wrap; align-items: center;
        }

        .timeline-role { font-size: 12px; font-weight: 700; color: #0f172a; margin: 0 0 1px 0; }
        .timeline-company { font-size: 10px; font-weight: 600; color: #534AB7; text-transform: uppercase; letter-spacing: 0.04em; margin: 0 0 5px 0; }
        .timeline-desc { font-size: 10px; line-height: 1.6; color: #475569; margin: 0 0 6px 0; }

        .stack-mini { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 4px; }
        .stack-mini-tag { font-size: 9px; font-weight: 500; color: #534AB7; background: #EEEDFE; border-radius: 4px; padding: 2px 6px; }

        .edu-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }

        .edu-card {
          background: #ffffff; border: 0.5px solid #e2e8f0;
          border-radius: 10px; padding: 10px;
          display: flex; flex-direction: column; gap: 3px;
        }

        .edu-badge {
          width: 24px; height: 24px; border-radius: 5px; background: #EEEDFE;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; margin-bottom: 3px;
        }

        .edu-school { font-size: 9.5px; font-weight: 700; color: #0f172a; }
        .edu-para { font-size: 9px; color: #64748b; line-height: 1.3; margin: 0; }

        .tech-section { margin-bottom: 10px; }
        .tech-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px }
        .tech-category { font-size: 9.5px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 5px; }
        .tags { display: flex; flex-wrap: wrap; gap: 5px; }
        .tag { font-size: 10px; font-weight: 500; color: #534AB7; background: #EEEDFE; border-radius: 5px; padding: 3px 8px; }

        .privacy { font-size: 7.5px; color: #94a3b8; text-align: right; padding-top: 6px; margin-top: 4px; }
      `,
        }}
      />

      <div
        className="no-print"
        style={{ maxWidth: 880, margin: "0 auto 12px", textAlign: "right" }}
      >
        <button
          onClick={() => window.print()}
          style={{
            fontSize: 12,
            padding: "6px 14px",
            cursor: "pointer",
            borderRadius: 6,
            border: "0.5px solid #cbd5e1",
            background: "#f8fafc",
            color: "#334155",
            fontFamily: "inherit",
          }}
        >
          🖨️ Stampa / Salva PDF
        </button>
      </div>

      <div className="cv-wrap">
        {/* SIDEBAR */}
        <aside className="cv-sidebar">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div className="avatar">
              <img src={imgProfile} />
            </div>
            <div>
              <h1
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  margin: "0 0 3px",
                  color: "#0f172a",
                  letterSpacing: "-0.01em",
                }}
              >
                Giulia Crepaldi
              </h1>
              <p
                style={{
                  fontSize: 10,
                  color: "#534AB7",
                  margin: 0,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Backend Developer
              </p>
            </div>
          </div>

          <hr className="divider" />

          <div>
            <div className="section-label">Contatti</div>
            {CONTACTS.map((c, i) => (
              <div key={i} className="contact-item">
                <div className="contact-icon">
                  <i className={`ti ${c.icon}`} aria-hidden="true" />
                </div>
                <div>
                  <span className="contact-label">{c.label}</span>
                  {c.label === "Telefono" ? (
                    <a href={`tel:${c.value}`} className="contact-value">
                      {c.value}
                    </a>
                  ) : (
                    <span className="contact-value">{c.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <hr className="divider" />

          <div>
            <div className="section-label1">Links</div>
            {LINKS.map((l, i) => (
              <div key={i} className="contact-item">
                <div className="contact-icon">
                  <i className={`ti ${l.icon}`} aria-hidden="true" />
                </div>
                <div>
                  <span className="contact-label">{l.label}</span>
                  <a href={l.value}>
                    <span className="contact-value">{l.value}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <hr className="divider" />

          <div>
            <div className="section-label">Lingue</div>
            {LANGUAGES.map((l, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <span style={{ fontSize: 16, lineHeight: 1 }}>{l.flag}</span>
                <div>
                  <div
                    style={{ fontSize: 11, fontWeight: 600, color: "#1e293b" }}
                  >
                    {l.name}
                  </div>
                  <div style={{ fontSize: 9.5, color: "#94a3b8" }}>
                    {l.level}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr className="divider" />

          <div>
            <div className="section-label">Soft Skills</div>
            {SOFT_SKILLS.map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  marginBottom: 11,
                }}
              >
                <div className="skill-dot" />
                <div>
                  <div className="skill-title">{s.title}</div>
                  <div className="skill-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="privacy">
            Autorizzo il trattamento dei miei dati personali presenti nel
            curriculum vitae ai sensi del D.lgs. 101/2018 e dell'art. 13 del
            GDPR (Regolamento UE 2016/679).
          </div>
        </aside>

        {/* MAIN */}
        <main className="cv-main">
          {/* Profilo */}
          <section>
            <div className="section-title">Profilo</div>
            <p className="profile-text">
              Backend Developer con stack Java 17 / Spring Boot e PostgreSQL.
              Progetto API REST e architetture backend con attenzione alla
              scalabilità e alla performance. Il mio percorso — dagli studi
              classici alla strategia digitale allo sviluppo software — mi porta
              a ragionare prima sui flussi, poi sull'implementazione. Cerco un
              contesto strutturato con figure senior.
            </p>
          </section>

          {/* Experience */}
          <section>
            <div className="section-title">Esperienze</div>
            <div className="timeline">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-meta">
                    <span>{exp.date}</span>
                    <span
                      style={{ display: "flex", alignItems: "center", gap: 3 }}
                    >
                      <i
                        className="ti ti-map-pin"
                        style={{ fontSize: 10 }}
                        aria-hidden="true"
                      />
                      {exp.location}
                    </span>
                  </div>
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-company">{exp.company}</div>
                  <p className="timeline-desc">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <div className="section-title">Istruzione e Formazione</div>
            <div className="edu-grid">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="edu-card">
                  <div className="edu-badge">{edu.badge}</div>
                  <div className="edu-school">{edu.school}</div>
                  {edu.paragraphs.map((p, idx) => (
                    <p key={idx} className="edu-para">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <div className="section-title">Tech Stack</div>
            <div className="tech-grid">
              {Object.entries(TECH_STACK).map(([cat, items]) => (
                <div
                  key={cat}
                  className="tech-section"
                  style={
                    cat === "Frontend"
                      ? { gridColumnStart: 2, gridRowStart: 1 }
                      : undefined
                  }
                >
                  <div className="tech-category">{cat}</div>
                  <div className="tags">
                    {items.map((t, i) => (
                      <span key={i} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
