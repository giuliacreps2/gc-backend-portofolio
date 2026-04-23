import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavbarDetail = ({ projectTitle }: { projectTitle?: string }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <span className="navbar-logo" onClick={() => navigate("/")}>
        GC <span className="logo-bar" />
      </span>

      {/* Breadcrumb */}
      {projectTitle && (
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-muted)", fontSize: "0.85rem" }}>
          <span
            onClick={() => navigate("/")}
            style={{ cursor: "pointer", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}
          >
            Home
          </span>
          <span style={{ color: "var(--text-faint)" }}>/</span>
          <span
            onClick={() => navigate("/#projects")}
            style={{ cursor: "pointer", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}
          >
            Projects
          </span>
          <span style={{ color: "var(--text-faint)" }}>/</span>
          <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>{projectTitle}</span>
        </div>
      )}

      <button className="btn btn-primary1" onClick={() => navigate("/")}>
        Contact me  <ArrowRight size={15} />
      </button>
    </nav>
  );
};

export default NavbarDetail;