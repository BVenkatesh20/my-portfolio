import { experience } from "../data/data";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <span className="sec-number">03</span>
        <h2 className="sec-title">Experience</h2>
        <div className="sec-line" />
      </div>

      <div className="exp-list">
        {experience.map((exp, i) => (
          <div className="exp-item" key={i}>
            {/* Left Meta */}
            <div className="exp-meta">
              <div className="exp-period">{exp.period}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-location">{exp.location}</div>
            </div>

            {/* Right Content */}
            <div className="exp-content">
              <h3 className="exp-role">{exp.role}</h3>

              <ul className="exp-points">
                {exp.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>

              <div className="exp-tags">
                {exp.tags.map((tag, j) => (
                  <span className="exp-tag" key={j}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
