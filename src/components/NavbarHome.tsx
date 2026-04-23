import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = ["Home", "Projects", "Tech Stack", "About", "Contact"];

const NavbarHome = () => {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 420 );
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
          <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className={`nav-link${i === 0 ? " active" : ""}`}>
            {link}
          </a>
        ))}
      </div>

 <a href="mailto:giulia.creps2@gmail.com"
        className={`btn ${scrolled ?"btn-primary1" :  "btn-ghost" }`} >
        Contact me <ArrowRight size={15} />
      </a>
    </nav>
  );
};

export default NavbarHome;