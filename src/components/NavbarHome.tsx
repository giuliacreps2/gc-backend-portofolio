import { ArrowRight } from "lucide-react";

const navLinks = ["Home", "Projects", "Tech Stack", "About", "Contact"];

const NavbarHome = () => {
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

      <button className="btn btn-ghost">
        Contact me <ArrowRight size={15} />
      </button>
    </nav>
  );
};

export default NavbarHome;