import "./Footer.css";

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-logo">
        V<span>.</span>B
      </div>
      <div className="footer-copy">
        © 2026 Venkatesh B — Full Stack Developer
      </div>
      <div className="footer-links">
        <button onClick={() => scrollTo("hero")}>Top</button>
        <button onClick={() => scrollTo("projects")}>Projects</button>
        <a href="mailto:bvenkatesh0502@gmail.com">Email</a>
        <a href="https://github.com/venkatesh20502" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  );
}
