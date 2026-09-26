import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";

function Footer() {
  const scrollToSection = (id) => {
    const target = document.querySelector(id);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="volterra-footer">
      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">
            <button
              type="button"
              className="footer-logo"
              onClick={() => window.scrollTo({
                top: 0,
                behavior: "smooth",
              })}
            >
              VOLTERRA
            </button>

            <p>
              Power that moves life.
              <br />
              Designed for everyday continuity.
            </p>

            <a
              href="mailto:support@volterra.in"
              className="footer-email"
            >
              support@volterra.in
              <ArrowUpRight size={15} />
            </a>
          </div>


          <div className="footer-links-column">
            <span className="footer-column-title">
              EXPLORE
            </span>

            <button
              type="button"
              onClick={() => scrollToSection("#about")}
            >
              About Volterra
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("#products")}
            >
              Our Products
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("#technology")}
            >
              Technology
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("#how-it-works")}
            >
              How It Works
            </button>
          </div>


          <div className="footer-links-column">
            <span className="footer-column-title">
              SUPPORT
            </span>

            <button
              type="button"
              onClick={() => scrollToSection("#support")}
            >
              Product Support
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("#support")}
            >
              Installation
            </button>

            <a href={import.meta.env.BASE_URL + "contact"}>
              Contact Us
              <ArrowUpRight size={14} />
            </a>

            <a href="mailto:support@volterra.in">
              Email Support
            </a>
          </div>


          <div className="footer-links-column">
            <span className="footer-column-title">
              FOLLOW
            </span>

            <a href="#" aria-label="Instagram">
              Instagram
              <Instagram size={14} />
            </a>

            <a href="#" aria-label="LinkedIn">
              LinkedIn
              <Linkedin size={14} />
            </a>

            <a href="mailto:support@volterra.in">
              Email
              <Mail size={14} />
            </a>
          </div>

        </div>


        <div className="footer-statement">
          <span>VOLTERRA</span>

          <h2>
            POWER THAT
            <br />
            MOVES LIFE.
          </h2>

          <ArrowUpRight className="footer-statement-arrow" size={30} />
        </div>


        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} VOLTERRA.
            All rights reserved.
          </span>

          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

          <span>
            POWER / TECHNOLOGY / CONTINUITY
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;


