import { useState, useEffect } from "react";
import "./Navbar.css";

const links = ["about", "skills", "experience", "projects", "education", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["hero", ...links];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <button className="nav-logo" onClick={() => scrollTo("hero")}>
          V<span>.</span>B
        </button>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l}>
              <button
                className={`nav-btn ${active === l ? "active" : ""}`}
                onClick={() => scrollTo(l)}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        <a href="mailto:bvenkatesh0502@gmail.com" className="nav-cta">
          Hire Me →
        </a>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map((l) => (
            <button key={l} className="mobile-link" onClick={() => scrollTo(l)}>
              {l}
            </button>
          ))}
          <a href="mailto:bvenkatesh0502@gmail.com" className="mobile-cta">
            Hire Me →
          </a>
        </div>
      )}
    </>
  );
}
