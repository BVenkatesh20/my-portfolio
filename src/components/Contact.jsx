import { useState } from "react";
import { profile } from "../data/data";
import "./Contact.css";

const contactLinks = [
  { icon: "✉️", label: "Email",    value: profile.email,    href: `mailto:${profile.email}` },
  { icon: "💼", label: "LinkedIn", value: "venkatesh20502", href: profile.linkedin },
  { icon: "🐙", label: "GitHub",   value: "venkatesh20502", href: profile.github },
  { icon: "📞", label: "Phone",    value: profile.phone,    href: `tel:${profile.phone}` },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <span className="sec-number">06</span>
        <h2 className="sec-title">Contact</h2>
        <div className="sec-line" />
      </div>

      <div className="contact-grid">
        {/* Left */}
        <div className="contact-left">
          <h3 className="contact-tagline">
            Let's build something
            <br />
            <span className="accent">great together.</span>
          </h3>
          <p className="contact-sub">
            I am currently open to new opportunities. Whether you have a
            project in mind or just want to say hello — my inbox is always open!
          </p>

          <div className="contact-links">
            {contactLinks.map((cl, i) => (
              <a href={cl.href} className="cl-row" key={i} target={cl.label !== "Email" && cl.label !== "Phone" ? "_blank" : undefined} rel="noreferrer">
                <div className="cl-left">
                  <div className="cl-icon">{cl.icon}</div>
                  <div>
                    <div className="cl-label">{cl.label}</div>
                    <div className="cl-value">{cl.value}</div>
                  </div>
                </div>
                <span className="cl-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
