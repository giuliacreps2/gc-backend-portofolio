import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

type NavLink = { label: string; id: string };

const navLinks: NavLink[] = [
  { label: "Home", id: "hero" },
  { label: "Progetti", id: "progetti" },
  { label: "Stack Tecnico", id: "stack" },
  { label: "Formazione", id: "formazione" },
  { label: "Contatti", id: "contatti" },
];

const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const NavbarHome = () => {
  const navigate = useNavigate();
  const [isGhost, setisGhost] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const about = document.getElementById("about");

      if (!hero || !about) return;

      const heroRect = hero.getBoundingClientRect();
      const aboutRect = about.getBoundingClientRect();

      if (heroRect.bottom > 60 || aboutRect.top <= 60) {
        setisGhost(true);
      } else {
        setisGhost(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <span className="navbar-logo">
        GC <span className="logo-bar" />
      </span>

      <div className="navbar-links">
        {navLinks.map((link, i) => (
          <button
            key={link.label}
            className={`nav-link${i === 0 ? " active" : ""}`}
            onClick={() => scrollToId(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>

      <a
        href="mailto:giulia.creps2@gmail.com"
        className={`btn ${isGhost ? "btn-ghost" : "btn-primary1"}`}
        style={{ transition: "all 0.3s ease" }}
        onClick={() => navigate("/")}
      >
        Contattami <ArrowRight size={15} />
      </a>
    </nav>
  );
};

export default NavbarHome;
