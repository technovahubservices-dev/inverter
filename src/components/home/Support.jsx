import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Headphones,
  LifeBuoy,
  MessageCircle,
  Wrench,
} from "lucide-react";

const supportCards = [
  {
    icon: Wrench,
    number: "01",
    title: "INSTALLATION",
    description:
      "Get guidance for setting up your VOLTERRA inverter correctly.",
    action: "Installation help",
  },
  {
    icon: LifeBuoy,
    number: "02",
    title: "PRODUCT SUPPORT",
    description:
      "Find help with everyday questions about your VOLTERRA system.",
    action: "Get product help",
  },
  {
    icon: Headphones,
    number: "03",
    title: "EXPERT ASSISTANCE",
    description:
      "Connect with our team when you need more detailed assistance.",
    action: "Talk to support",
  },
];

function Support() {
  return (
    <section className="support-section" id="support">
      <div className="support-glow" />

      <div className="container">
        <motion.div
          className="support-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="section-label support-label">
            <span>06</span>
            SUPPORT
          </div>

          <h2>
            Power shouldn't
            <span>feel complicated.</span>
          </h2>

          <p>
            From installation to everyday questions, we're here
            to help you get the most from your VOLTERRA experience.
          </p>
        </motion.div>

        <div className="support-grid">
          {supportCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                className="support-card"
                key={card.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
              >
                <div className="support-card-top">
                  <span>{card.number}</span>

                  <div className="support-card-icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="support-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>

                <a href="#support" className="support-card-link">
                  {card.action}
                  <ArrowUpRight size={16} />
                </a>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="support-contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <div className="support-contact-icon">
            <MessageCircle size={22} strokeWidth={1.5} />
          </div>

          <div className="support-contact-copy">
            <span>NEED MORE HELP?</span>
            <h3>Let's keep your power moving.</h3>
            <p>
              Our support team is ready to help with your VOLTERRA
              experience.
            </p>
          </div>

          <a
            href="mailto:support@volterra.in"
            className="support-contact-button"
          >
            Contact support
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Support;



