import { ArrowRight, ExternalLink, Code2, Database, ShieldCheck } from "lucide-react";

// --- DATI ---

const codeLines = [
  { num: 1,  tokens: [{ t: "@RestController",            c: "annotation" }] },
  { num: 2,  tokens: [{ t: '@RequestMapping("/api/orders")', c: "annotation" }] },
  { num: 3,  tokens: [{ t: "public ", c: "keyword" }, { t: "class ", c: "keyword" }, { t: "OrderController", c: "class" }, { t: " {", c: "plain" }] },
  { num: 4,  tokens: [] },
  { num: 5,  tokens: [{ t: "    private final ", c: "keyword" }, { t: "OrderService", c: "class" }, { t: " orderService;", c: "plain" }] },
  { num: 6,  tokens: [] },
  { num: 7,  tokens: [{ t: '    @GetMapping("/{id}")', c: "annotation" }] },
  { num: 8,  tokens: [{ t: "    public ", c: "keyword" }, { t: "ResponseEntity", c: "class" }, { t: "<", c: "plain" }, { t: "OrderDto", c: "class" }, { t: "> getOrder(", c: "plain" }] },
  { num: 9,  tokens: [{ t: "        @PathVariable ", c: "annotation" }, { t: "Long", c: "class" }, { t: " id) {", c: "plain" }] },
  { num: 10, tokens: [{ t: "        return ", c: "keyword" }, { t: "ResponseEntity", c: "class" }, { t: ".ok(orderService.", c: "plain" }] },
  { num: 11, tokens: [{ t: "                getOrderById(id));", c: "plain" }] },
  { num: 12, tokens: [{ t: "    }", c: "plain" }] },
  { num: 13, tokens: [{ t: "}", c: "plain" }] },
];

const colorMap: Record<string, string> = {
  annotation: "var(--accent)",
  keyword:    "var(--blue)",
  class:      "var(--blue-light)",
  plain:      "var(--text-secondary)",
};

const techStack = [
  { name: "Java",        icon: "☕" },
  { name: "Spring", icon: "🌱" },
  { name: "PostgreSQL",  icon: "🐘" },
  { name: "REST API",    icon: "{}" },
  { name: "React",      icon: "🌐​" },
  { name: "Typescript",      icon: "🟦​​" },
  { name: "Git",         icon: "🔶" },
];

const features = [
  { title: "API FIRST",         description: "Progetto e sviluppo API RESTful con attenzione a usabilità e scalabilità.", Icon: Code2 },
  { title: "DATA DRIVEN",       description: "Modello database relazionali e scrivo query ottimizzate.",                    Icon: Database },
  { title: "SECURE & RELIABLE", description: "Autenticazione, autorizzazione e validazione dei dati come standard di progetto.",               Icon: ShieldCheck },
];



// --- COMPONENTE ---

const Hero = () => {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text-secondary)", minHeight: "100vh" }}>

      <main className="page-wrapper">
        <div className="navbar-spacer" />

        {/* ── HERO ── */}
        <section id="hero" className="hero-grid section" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}>

          {/* Colonna sinistra */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

            <div>
              <p style={{
                fontFamily: "monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                paddingBottom: "14px",
                position: "relative",
              }}>
                HI, I'M GIULIA
                <span style={{
                  position: "absolute", bottom: 0, left: 0,
                  width: "32px", height: "2px",
                  background: "var(--accent)", borderRadius: "2px",
                }} />
              </p>

              <h1 style={{ marginTop: "28px", fontWeight: 800, letterSpacing: "-0.03em" }}>
                Backend Developer
                <br />
                <span style={{
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--accent)",
                }}>
                  Java &amp; Spring
                </span>
                <span style={{ color: "var(--text-primary)" }}> .</span>
              </h1>
            </div>

            <p style={{ fontSize: "1.05rem", maxWidth: "440px" }}>
             Sviluppo API REST, modello database relazionali e costruisco logiche backend pensate per restare chiare e pronte ad evolvere.
            </p>

            <p style={{
              borderLeft: "3px solid var(--accent)",
              paddingLeft: "16px",
              fontSize: "0.9rem",
              color: "var(--text-muted)",
            }}>
              Focus su{" "}
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>architetture pulite, sostenibili</span>
              {" "}e{" "}
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>scalabili</span>.
            </p>

            <div className="hero-buttons" style={{ display: "flex", gap: "16px", flexWrap: "wrap", paddingTop: "8px" }}>
              <a href={`#${"progetti"}`} className="btn btn-primary">
                Guarda i progetti <ArrowRight size={17} />
              </a>
              <a href="https://github.com/giuliacreps2" className="btn btn-secondary">
                GitHub <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* Colonna destra — Code Window */}
          <div style={{ display: "flex", justifyContent: "flex-end", position: "relative", overflow: "hidden" }}>
            {/* Glow decorativi */}
            <div style={{
              position: "absolute", top: -30, right: -30,
              width: 180, height: 180, borderRadius: "50%",
              background: "radial-gradient(circle, var(--accent-glow), transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: -20, left: -20,
              width: 120, height: 120, borderRadius: "50%",
              background: "radial-gradient(circle, var(--blue-glow), transparent 70%)",
              pointerEvents: "none",
            }} />

            <div className="code-window">
              <div className="code-header">
                <div className="traffic-dot" style={{ background: "#ff5f56" }} />
                <div className="traffic-dot" style={{ background: "#ffbd2e" }} />
                <div className="traffic-dot" style={{ background: "#27c93f" }} />
                <span className="filename">OrderController.java</span>
              </div>
              <div className="code-body">
                {codeLines.map((line) => (
                  <div key={line.num} className={`code-line${line.num === 8 ? " highlighted" : ""}`}>
                    <span className="line-num">{line.num}</span>
                    <span>
                      {line.tokens.map((tok, i) => (
                        <span key={i} style={{ color: colorMap[tok.c] || "var(--text-secondary)" }}>
                          {tok.t}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section style={{ marginBottom: "60px" }} id="stack-tecnico">
          <div className="tech-bar">
            <span className="label">Stack Tecnico</span>
            <div className="tech-bar-divider" />
            <div className="tech-badges">
              {techStack.map((tech) => (
                <div key={tech.name} className="tech-badge">
                  <span style={{ fontSize: "1.1rem" }}>{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section style={{ marginBottom: "60px" }}>
          <div className="features-container">
            <div className="features-grid">
              {features.map(({ title, description, Icon }) => (
                <div key={title} className="feature-card">
                  <div className="icon-wrap">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {title}
                  </h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Hero;