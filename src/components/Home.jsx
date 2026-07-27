import { stats } from "../data/data";
import "./Home.css";

export default function Home() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero">
      <div className="hero-grid" />

      <div className="hero-content">

        <div className="hero-tag">
          <span className="tag-line" />
          Available for work
        </div>

        <h1 className="hero-name">
          Venkatesh <span className="accent">B.</span>
        </h1>

        <div className="hero-role">Full Stack Developer</div>

        <p className="hero-desc">
          Full Stack Developer specializing in modern web application
          development with <strong>React.js</strong>, <strong>Node.js</strong>,
          <strong>Express.js</strong>, and <strong>MongoDB</strong>.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo("projects")}>
            View Projects →
          </button>
          <button className="btn-secondary" onClick={() => scrollTo("contact")}>
            Get In Touch
          </button>
        </div>

        <div className="hero-stats-row">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

      </div>

      <div className="scroll-hint">
        <span className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  );
}