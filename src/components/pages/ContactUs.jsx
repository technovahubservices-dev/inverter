import { ArrowLeft, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const phone = form.get("phone");
    const message = form.get("message");

    const subject = encodeURIComponent(
      `VOLTERRA Contact Request - ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:support@volterra.in?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <div className="contact-page-glow contact-page-glow-one" />
      <div className="contact-page-glow contact-page-glow-two" />

      <header className="contact-header">
        <a href="/" className="contact-brand">
          <span className="brand-mark">
            <span />
            <span />
          </span>
          <span>VOLTERRA</span>
        </a>

        <a href="/" className="contact-back">
          <ArrowLeft size={16} />
          Back to home
        </a>
      </header>

      <section className="contact-hero">
        <div className="contact-label">
          <span>06</span>
          CONTACT VOLTERRA
        </div>

        <h1>
          Let's keep
          <br />
          <em>life moving.</em>
        </h1>

        <p>
          Have a question about a VOLTERRA inverter, installation,
          support, or finding the right power solution? Our team is
          here to help.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <div className="contact-info-heading">
            <span>GET IN TOUCH</span>
            <h2>We're here when you need us.</h2>
          </div>

          <div className="contact-info-list">
            <a
              href="mailto:support@volterra.in"
              className="contact-info-card"
            >
              <div className="contact-info-icon">
                <Mail size={20} strokeWidth={1.5} />
              </div>

              <div>
                <span>EMAIL</span>
                <strong>support@volterra.in</strong>
              </div>

              <ArrowUpRight size={18} />
            </a>

            <a
              href="tel:+919999999999"
              className="contact-info-card"
            >
              <div className="contact-info-icon">
                <Phone size={20} strokeWidth={1.5} />
              </div>

              <div>
                <span>PHONE</span>
                <strong>+91 99999 99999</strong>
              </div>

              <ArrowUpRight size={18} />
            </a>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MapPin size={20} strokeWidth={1.5} />
              </div>

              <div>
                <span>LOCATION</span>
                <strong>Puducherry, India</strong>
              </div>
            </div>
          </div>

          <div className="contact-note">
            <span>VOLTERRA SUPPORT</span>
            <p>
              For product enquiries, installation assistance and
              general support, send us a message and our team will
              get back to you.
            </p>
          </div>
        </div>

        <div className="contact-form-wrap">
          <div className="contact-form-top">
            <span>01 / MESSAGE</span>
            <span>VOLTERRA</span>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Your name</span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </label>

            <label>
              <span>Email address</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              <span>Phone number</span>
              <input
                type="tel"
                name="phone"
                placeholder="+91"
              />
            </label>

            <label>
              <span>How can we help?</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us what you need..."
                required
              />
            </label>

            <button type="submit" className="contact-submit">
              {submitted ? "Opening email..." : "Send message"}
              <ArrowUpRight size={18} />
            </button>
          </form>

          <p className="contact-form-disclaimer">
            This temporary form opens your default email application.
          </p>
        </div>
      </section>

      <footer className="contact-footer">
        <span>POWER THAT MOVES LIFE.</span>
        <span>© {new Date().getFullYear()} VOLTERRA</span>
      </footer>
    </main>
  );
}

export default ContactUs;
