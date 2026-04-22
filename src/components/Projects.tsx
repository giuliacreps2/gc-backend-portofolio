import { ArrowRight, ExternalLink } from "lucide-react";
import imgProgetto1 from '../assets/images/Screenshot1.png';
import imgProgetto2 from '../assets/images/Screenshot2.png'
import imgProgetto3 from '../assets/images/Screenshot3.png'
// --- DATI ---

const projects = [
  {
    title: "Order Management System",
    description: "REST API per la gestione degli ordini con ruoli utente e autenticazione JWT.",
    tags: ["☕Java", "🌱Spring Boot", "🐘PostgreSQL"],
    caseStudyUrl: "#",
    githubUrl: "#",
    image: imgProgetto1,
  },
  {
    title: "Task Manager API",
    description: "API per la gestione delle attività con utenti, scadenze e priorità.",
    tags: ["☕Java", "🌱Spring Boot", "🐘MongoDB"],
    caseStudyUrl: "#",
    githubUrl: "#",
    image: imgProgetto2,
  },
  {
    title: "Auth Service",
    description: "Servizio di autenticazione con JWT, refresh token e gestione ruoli.",
    tags: ["☕Java", "🌱Spring Security", "🐘PostgreSQL"],
    caseStudyUrl: "#",
    githubUrl: "#",
    image: imgProgetto3,
  },
];

// --- COMPONENTE ---

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="page-wrapper">

        {/* Titolo sezione */}
        <div className="section-header">
          <h2>Projects</h2>
          <p>Alcuni dei progetti che ho realizzato.</p>
        </div>

        {/* Container con bordo*/}
        <div style={{
          border: "1.5px solid var(--border)",
          borderRadius: "var(--radius-xl)",
          background: "var(--bg-surface)",
          padding: "32px",
        }}>

          {/* Grid delle card */}
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card">

                {/* Immagine / Placeholder */}
                <div className="project-card-image placeholder">
                  {project.image
                    ? <img src={project.image} alt={project.title} />
                    : (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--text-faint)" }}>
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    )
                  }
                </div>

                {/* Body */}
                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>

                  {/* Tags */}
                  <div className="project-card-tags" style={{ marginTop: "8px" }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-badge1">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Footer con link */}
                <div className="project-card-footer">
                  <a href={project.caseStudyUrl} className="btn-ghost1" style={{
                    transition: "gap 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.gap = "10px")}
                    onMouseLeave={e => (e.currentTarget.style.gap = "6px")}
                  >
                    Case study <ArrowRight size={15} />
                  </a>

                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                   className="btn-ghost1"
                  >
                    GitHub <ExternalLink size={14} />
                  </a>
                </div>

              </div>
            ))}
          </div>

          {/* Bottone View all projects */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
            <button className="btn btn-secondary">
              View all projects <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;