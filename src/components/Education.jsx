import { education } from "../data/data";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="section-header">
        <span className="sec-number">05</span>
        <h2 className="sec-title">Education</h2>
        <div className="sec-line" />
      </div>

      <div className="edu-grid">
        {education.map((edu, i) => (
          <div className="edu-card" key={i}>
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-field">{edu.level}</div>
            <div className="edu-college">{edu.college}</div>
            <div className="edu-uni">{edu.university}</div>
            <div className="edu-meta">
              <span className="edu-year">{edu.year}</span>
              <span className="edu-cgpa">{edu.cgpa} CGPA</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
