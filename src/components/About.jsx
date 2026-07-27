import { profile } from "../data/data";
import "./About.css";

const details = [
  { key: "Status", value: "Open to Work", special: "status" },
  { key: "Location", value: profile.location },
  { key: "Experience", value: "1.5 Years" },
  { key: "Role", value: "Full Stack Developer" },
  { key: "Stack", value: "MERN Stack" },
  { key: "Email", value: profile.email },
  { key: "LinkedIn", value: "linkedin.com/in/venkatesh20502" },
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
        {/* Left - Content */}
        <div className="about-text">
          <p>
            I'm a <strong>Full Stack Developer</strong> with{" "}
            <span className="hl">1.5 years of professional experience</span>{" "}
            in building modern web applications using the MERN Stack. I have
            experience developing responsive user interfaces, integrating REST
            APIs, and building scalable backend services with a focus on
            performance and maintainability.
          </p>

          <p>
            At <strong>Sentinix Tech Solutions</strong>, I worked as part of a
            development team on enterprise web applications including{" "}
            <strong>NIX POS</strong>,{" "}
            <strong>NIX Temple Tech</strong>, and{" "}
            <strong>Kanora – Billing & Quotation Management System</strong>. My
            contributions included developing frontend and backend modules,
            integrating REST APIs, implementing business requirements, and
            building features for billing, booking management, inventory
            tracking, quotation and invoice processing, GST calculation,
            reporting, and role-based authentication.
          </p>

          <p>
            I enjoy collaborating with teams, writing clean and maintainable
            code, and building reliable web applications that solve real-world
            business problems. I am currently open to new opportunities where I
            can contribute, learn new technologies, and continue growing as a
            Full Stack Developer.
          </p>

          <div className="about-actions">
            <a
              href={`mailto:${profile.email}`}
              className="about-btn"
            >
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

        {/* Right - Details */}
        <div className="about-details">
          {details.map((detail, index) => (
            <div className="detail-row" key={index}>
              <span className="detail-key">{detail.key}</span>

              {detail.special === "status" ? (
                <span className="detail-value status">
                  <span className="dot" />
                  {detail.value}
                </span>
              ) : (
                <span className="detail-value">{detail.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}