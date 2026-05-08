import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const NavbarDetail = ({ projectTitle }: { projectTitle?: string }) => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px"
      }
    );
    const target = document.getElementById("results");
    if(target){
      observer.observe(target);
    }

    return() => observer.disconnect();
  }, []);

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

        <a href="mailto:giulia.creps2@gmail.com" className={isIntersecting ? "btn btn-ghost" : "btn btn-primary1"}>
        Contattami  <ArrowRight size={15} />
      </a>
    </nav>
  );
};

export default NavbarDetail;