import { profile } from "../data/data";
import "./About.css";

const details = [
  { key: "Status",     value: "Open to Work",              special: "status" },
  { key: "Location",   value: profile.location },
  { key: "Experience", value: "1 Year" },
  { key: "Role",       value: "Full Stack Developer" },
  { key: "Stack",      value: "MERN Stack" },
  { key: "Email",      value: profile.email },
  { key: "LinkedIn",   value: "venkatesh20502" },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <span className="sec-number">01</span>
        <h2 className="sec-title">About Me</h2>
        <div className="sec-line" />
      </div>

      <div className="about-grid">
        {/* Left — Text */}
        <div className="about-text">
          <p>
            I am a <strong>Full Stack Developer</strong> with{" "}
            <span className="hl">1 year of experience</span> building
            production-ready web applications. I work across the entire stack —
            from designing REST APIs to crafting responsive UIs.
          </p>
          <p>
            Currently at <strong>Sentinix Tech Solutions</strong>, I have built
            a complete <strong>POS billing system</strong> with order management,
            payment integration, stock tracking and sales reports. I have also
            contributed to a <strong>Temple Management System</strong> handling
            bookings and admin operations.
          </p>
          <p>
            I am passionate about writing clean, maintainable code and building
            systems that solve real problems. Currently looking for new
            opportunities to grow and work on larger scale projects.
          </p>

          <div className="about-actions">
            <a href="mailto:bvenkatesh0502@gmail.com" className="about-btn">
              Email Me →
            </a>
            <a
              href="https://linkedin.com/in/venkatesh20502"
              target="_blank"
              rel="noreferrer"
              className="about-btn-outline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right — Details */}
        <div className="about-details">
          {details.map((d, i) => (
            <div className="detail-row" key={i}>
              <span className="detail-key">{d.key}</span>
              {d.special === "status" ? (
                <span className="detail-value status">
                  <span className="dot" />
                  {d.value}
                </span>
              ) : (
                <span className="detail-value">{d.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
