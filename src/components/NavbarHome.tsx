import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const navLinks = [
  "#Home",
  "#Progetti",
  "#Stack Tecnico",
  "#Formazione",
  "#Contatti",
];

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
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className={`nav-link${i === 0 ? " active" : ""}`}
          >
            {link}
          </a>
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
