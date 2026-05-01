import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Staggered text variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const letterVars = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { ease: [0.215, 0.61, 0.355, 1], duration: 0.8 }
    }
  };

  const name = "ARTHIK SHETTY";

  return (
    <section className="hero" id="home" ref={ref}>
      <motion.div 
        className="hero-bg" 
        style={{ 
          backgroundImage: `url(${heroBg})`,
          y: backgroundY 
        }}
      ></motion.div>
      <div className="hero-overlay"></div>
      
      <motion.div className="hero-content" style={{ y: textY }}>
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
        >
          <h1 className="hero-title">
            {name.split("").map((letter, index) => (
              letter === " " ? <br key={index} /> : 
              <motion.span key={index} variants={letterVars} style={{ display: 'inline-block' }}>
                {letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hero-subtitle"
        >
          <span className="gradient-text magnetic">SOFTWARE ENGINEER</span>
          <p className="hero-description">
            Building scalable, full-stack systems and high-end digital experiences.
            Based in India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="scroll-indicator"
        >
          <ArrowDown size={24} className="animate-bounce magnetic" />
        </motion.div>
      </motion.div>

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
          top: -20%;
          left: -10%;
          width: 120%;
          height: 140%;
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
          overflow: hidden;
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
