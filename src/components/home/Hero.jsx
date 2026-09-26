import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Play,
  Zap,
} from "lucide-react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={import.meta.env.BASE_URL + "images/hero/hero-poster.jpg"}
        >
          <source
            src={import.meta.env.BASE_URL + "videos/hero/hero.mp4"}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="hero-overlay" />
      <div className="hero-grid" />

      <motion.div
        className="hero-glow hero-glow-one"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="hero-glow hero-glow-two"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container hero-content">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <span className="live-dot" />
          INTELLIGENT INVERTER TECHNOLOGY
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.85,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          POWER
          <span>DOESN'T WAIT.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.1,
            duration: 0.8,
          }}
        >
          Advanced inverter technology engineered to keep
          your home powered when the grid goes down.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.3,
            duration: 0.8,
          }}
        >
          <a href="#products" className="hero-primary-button">
            Explore Inverters
            <ArrowUpRight size={18} />
          </a>

          <button type="button" className="hero-video-button" onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}>
            <span className="play-icon">
              <Play size={14} fill="currentColor" />
            </span>

            See how it works
          </button>
        </motion.div>
      </div>

      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
      >
        <div className="hero-status">
          <Zap size={16} />
          <span>POWER BACKUP</span>
          <strong>READY</strong>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO DISCOVER</span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </div>

        <div className="hero-index">
          <span>01</span>
          <span>/</span>
          <span>06</span>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;





