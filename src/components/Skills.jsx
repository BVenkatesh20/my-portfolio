import { skills } from "../data/data";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <span className="sec-number">02</span>
        <h2 className="sec-title">Skills</h2>
        <div className="sec-line" />
      </div>

      <div className="skills-grid">
        {skills.map((cat, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-icon">{cat.icon}</div>
            <h3 className="skill-cat">{cat.title}</h3>
            <div className="skill-tags">
              {cat.tags.map((tag, j) => (
                <span className="skill-tag" key={j}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
