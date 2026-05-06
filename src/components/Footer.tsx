import { GitCommitIcon, GitGraph, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">

        <span className="navbar-logo">
          GC
          <span className="logo-bar" />
        </span>

        <p className="footer-copy">
          © 2026 Giulia Crepaldi. All rights reserved.
        </p>

        <div className="footer-socials">
          {[
            { href: "https://github.com/giuliacreps2", icon: <FontAwesomeIcon icon={faGithub} size="lg" style={{color: "rgb(255, 255, 255, 0.75)",}} />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/giulia-crepaldi-bstudent/", icon: <FontAwesomeIcon icon={faLinkedinIn} size="lg" style={{color: "rgba(255, 255, 255, 0.75)",}} />, label: "LinkedIn" },
            { href: "mailto:giulia.creps2@gmail.com", icon: <Mail size={18} style={{color: "rgba(255, 255, 255, 0.75)",}}/>, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="social-link"
            >
              {icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;