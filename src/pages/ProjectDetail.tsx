import { useParams, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, ExternalLink, Mail, ChevronRight } from "lucide-react";
import { projects } from "../data/projects";
import NavbarDetail from "../components/NavbarDetails";
import NavbarHome from "../components/NavbarHome";
import Footer from "../components/Footer";

// --- SIDEBAR VOCI ---
const sidebarSections = [
  { id: "overview",     label: "Overview" },
  { id: "problema",      label: "Problema" },
  { id: "solution",     label: "Soluzione" },
  { id: "architecture", label: "Architettura" },
  { id: "data-model",   label: "Data Model (ERD)" },
  { id: "api",          label: "API" },
  { id: "frontend",     label: "Integrazione Frontend" },
  { id: "challenges",   label: "Sfide" },
  { id: "improvements", label: "Implementazioni" },
  { id: "results",      label: "Risultati" },
];

// --- METODO BADGE COLOR ---
const methodColor: Record<string, string> = {
  GET:    "#27c93f",
  POST:   "#58a6ff",
  PUT:    "#ffbd2e",
  DELETE: "#ff5f56",
  PATCH:  "#C800DE",
};

// --- COMPONENTE ---
const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", gap: 16 }}>
        <h2>Progetto non trovato.</h2>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          <ArrowLeft size={16} /> Torna alla home
        </button>
      </div>
    );
  }

  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "var(--bg)", color: "var(--text-secondary)", minHeight: "100vh" }}>

      {/* ── NAVBAR ── */}
     <div className="navbar-spacer" />
      <NavbarHome/>


      {/* ── LAYOUT PRINCIPALE: sidebar + contenuto ── */}
      <div className="page-wrapper1" style={{gridTemplateColumns: "220px 1fr", alignItems: "start", padding: "48px var(--page-padding-x)" }}>


<NavbarDetail/>
        {/* ── SIDEBAR ── */}
        <aside style={{ position: "sticky", top: "calc(var(--nav-height) + 24px)" }}>
          <nav className="nav-details" style={{flexDirection: "column", gap: "4px" }}>
            {sidebarSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  background: "none", border: "none", cursor: "pointer",
                  color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: 500,
                  padding: "8px 12px", borderRadius: "var(--radius-sm)",
                  textAlign: "left", transition: "color 0.2s, background 0.2s",
                  fontFamily: "inherit",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-elevated)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                  (e.currentTarget as HTMLElement).style.background = "none";
                }}
              >
                <ChevronRight size={13} style={{ color: "var(--accent)", flexShrink: 0 }} />
                {s.label}
              </button>
            ))}
          </nav>
        </aside>
    

        {/* ── CONTENUTO PRINCIPALE ── */}
        <main style={{ display: "flex", flexDirection: "column", gap: "64px", minWidth: 0 }}>

          {/* HEADER */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h1 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              {project.title}
            </h1>
            <p style={{ fontSize: "1.05rem", maxWidth: "600px" }}>{project.shortDescription}</p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                GitHub <ExternalLink size={15} />
              </a>
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Live Demo <ArrowRight size={15} />
                </a>
              )}
            </div>
          </div>

          {/* ── OVERVIEW ── */}
          <div id="overview" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <SectionTitle>Overview</SectionTitle>
            <p style={{ lineHeight: 1.85, whiteSpace: "pre-line" }}>{project.overview}</p>
          </div>

          {/* ── PROBLEMa ── */}
          <div id="problema" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <SectionTitle>Problema</SectionTitle>
            <p style={{ lineHeight: 1.85 }}>{project.problem}</p>
          </div>

          {/* ── SOLUTION ── */}
          <div id="solution" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <SectionTitle>Soluzione</SectionTitle>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {project.solution.map((s, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--accent)", marginTop: "2px", flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── ARCHITECTURE ── */}
          <div id="architecture" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <SectionTitle>Architettura</SectionTitle>

            {/* System Flow */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <SubTitle>System Flow</SubTitle>
              <div style={{
                display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px",
                background: "var(--bg-surface)", border: "1.5px solid var(--border)",
                borderRadius: "var(--radius-lg)", padding: "20px 24px",
              }}>
                {project.architecture.systemFlow.map((step, i) => (
                  <div key={step} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{
                      padding: "6px 14px", borderRadius: "var(--radius-sm)",
                      background: "var(--bg-elevated)", border: "1.5px solid var(--border)",
                      fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)",
                    }}>
                      {step}
                    </span>
                    {i < project.architecture.systemFlow.length - 1 && (
                      <span style={{ color: "var(--accent)", fontWeight: 700 }}>→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── DATA MODEL (ERD) ── */}
          <div id="data-model" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <SectionTitle>Data Model (ERD)</SectionTitle>

            {/* Immagine ERD */}
            <div style={{
              width: "100%", minHeight: "240px",
              background: "var(--bg-surface)", border: "1.5px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {project.architecture.erdImage
                ? <img src={project.architecture.erdImage} alt="ERD" style={{ width: "100%", borderRadius: "var(--radius-lg)" }} />
                : <span style={{ color: "var(--text-faint)", fontSize: "0.85rem" }}>ERD image — coming soon</span>
              }
            </div>

            {/* Data decisions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <SubTitle>Data decisions</SubTitle>
              <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {project.architecture.dataDecisions.map((d, i) => (
                  <li key={i} style={{ display: "flex", gap: "10px", fontSize: "0.9rem", lineHeight: 1.7 }}>
                    <span style={{ color: "var(--blue)", flexShrink: 0 }}>—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── API ── */}
          <div id="api" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <SectionTitle>API</SectionTitle>
            {project.apiEndpoints.map((endpoint, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <SubTitle>Esempi di endpoint</SubTitle>

                {/* Endpoint badge */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  background: "var(--bg-surface)", border: "1.5px solid var(--border)",
                  borderRadius: "var(--radius-md)", padding: "12px 16px",
                }}>
                  <span style={{
                    padding: "3px 10px", borderRadius: "var(--radius-sm)",
                    background: methodColor[endpoint.method] + "22",
                    color: methodColor[endpoint.method],
                    fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em",
                    flexShrink: 0,
                  }}>
                    {endpoint.method}
                  </span>
                  <code style={{ fontSize: "0.88rem", color: "var(--text-primary)", fontFamily: "monospace" }}>
                    {endpoint.path}
                  </code>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginLeft: "auto" }}>
                    {endpoint.description}
                  </span>
                </div>

                {/* Code block */}
                <div style={{
                  background: "var(--bg-surface)", border: "1.5px solid var(--border)",
                  borderRadius: "var(--radius-lg)", overflow: "hidden",
                }}>
                  <div style={{
                    background: "var(--bg-elevated)", borderBottom: "1px solid var(--border)",
                    padding: "10px 16px", display: "flex", gap: "6px",
                  }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f56" }} />
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }} />
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#27c93f" }} />
                    <span style={{ marginLeft: 8, fontSize: "0.72rem", color: "var(--text-faint)", fontFamily: "monospace" }}>
                      response.json
                    </span>
                  </div>
                  <pre style={{
                    padding: "20px", fontFamily: "monospace", fontSize: "0.82rem",
                    lineHeight: 1.75, color: "var(--text-secondary)", overflowX: "auto",
                    margin: 0,
                  }}>
                    {endpoint.responseExample}
                  </pre>
                </div>
              </div>
            ))}
          </div>

          {/* ── FRONTEND INTEGRATION ── */}
          {project.frontendIntegration && (
            <div id="frontend" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <SectionTitle>Integrazione Frontend</SectionTitle>
              <SubTitle>Login flow</SubTitle>

              {/* Screenshot placeholder */}
              <div style={{
                width: "100%", minHeight: "200px",
                background: "var(--bg-surface)", border: "1.5px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {project.frontendIntegration.loginImage
                  ? <img src={project.frontendIntegration.loginImage} alt="Login UI" style={{ width: "100%", borderRadius: "var(--radius-lg)" }} />
                  : <span style={{ color: "var(--text-faint)", fontSize: "0.85rem" }}>Login UI screenshot — coming soon</span>
                }
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <SubTitle>Come si connette</SubTitle>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.75 }}>{project.frontendIntegration.description}</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
                  {project.frontendIntegration.howItConnects.map((step, i) => (
                    <li key={i} style={{ display: "flex", gap: "10px", fontSize: "0.9rem", lineHeight: 1.7 }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0, fontWeight: 700 }}>{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ── CHALLENGES ── */}
          <div id="challenges" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <SectionTitle>Sfide</SectionTitle>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {project.challenges.map((c, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }}>→</span>
                  <span style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── IMPROVEMENTS ── */}
          <div id="improvements" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <SectionTitle>Implementazioni</SectionTitle>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {project.improvements.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--blue)", flexShrink: 0, marginTop: "2px" }}>—</span>
                  <span style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RESULTS ── */}
          <div id="results" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <SectionTitle>Risultati</SectionTitle>
            <p style={{ fontSize: "0.95rem", marginBottom: "8px" }}>Questo progetto dimostra:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {project.results.map((r, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0, fontWeight: 700 }}>✓</span>
                  <span style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CTA ── */}
          <div style={{
            border: "1.5px solid var(--border)",
            borderRadius: "var(--radius-xl)",
            background: "var(--bg-surface)",
            padding: "28px 32px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px" }}>
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
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700 }}>Ti è piaciuto il progetto?</h3>
                <p style={{ fontSize: "0.875rem" }}>Sono disponibile per nuove opportunità lavorative.</p>
              </div>
            </div>
            <a href="mailto:giulia.creps2@gmail.com" className="btn btn-primary" style={{ flexShrink: 0 }}>
              Scrivimi <ArrowRight size={16} />
            </a>
          </div>
 <Footer/>
        </main>
      </div>
    </div>
   
  );
};

// --- SUB-COMPONENTI TIPOGRAFIA ---

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{
    fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)",
    letterSpacing: "-0.02em", paddingBottom: "12px",
    borderBottom: "1px solid var(--border-subtle)",
  }}>
    {children}
  </h2>
);

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{
    fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)",
    letterSpacing: "0.01em",
  }}>
    {children}
  </h3>
);

export default ProjectDetail;