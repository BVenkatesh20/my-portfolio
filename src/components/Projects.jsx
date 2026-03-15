import { projects } from "../data/data";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <span className="sec-number">04</span>
        <h2 className="sec-title">Projects</h2>
        <div className="sec-line" />
      </div>

      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div
            className={`project-card ${proj.featured ? "featured" : ""}`}
            key={i}
          >
            {/* Featured Badge */}
            {proj.featured && (
              <div className="featured-badge">Featured Project</div>
            )}

            <div className="proj-inner">
              <div className="proj-left">
                <div className="proj-number">
                  {proj.id} — {proj.type}
                </div>
                <h3 className="proj-title">{proj.title}</h3>
                <p className="proj-desc">{proj.desc}</p>

                <ul className="proj-features">
                  {proj.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="proj-right">
                <div className="proj-tech">
                  {proj.tech.map((t, j) => (
                    <span className="tech-badge" key={j}>{t}</span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
