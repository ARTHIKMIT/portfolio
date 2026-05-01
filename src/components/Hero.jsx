import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="hero-title">
            ARTHIK <br /> SHETTY
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hero-subtitle"
        >
          <span className="gradient-text">SOFTWARE ENGINEER</span>
          <p className="hero-description">
            Building scalable, full-stack systems and high-end digital experiences.
            Based in India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="scroll-indicator"
        >
          <ArrowDown size={24} className="animate-bounce" />
        </motion.div>
      </div>

      <style>{`
        .hero {
          height: 100vh;
          width: 100vw;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0.4;
          z-index: 1;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(17,17,17,0.3) 0%, rgba(17,17,17,1) 100%);
          z-index: 2;
        }
        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          max-width: 800px;
          padding: 0 2rem;
        }
        .hero-title {
          font-size: clamp(4rem, 10vw, 8rem);
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.04em;
          margin-bottom: 2rem;
        }
        .hero-subtitle {
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0.2em;
        }
        .hero-description {
          margin-top: 1.5rem;
          color: var(--color-text-muted);
          font-weight: 400;
          letter-spacing: normal;
          font-size: 1.1rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--color-text-muted);
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
