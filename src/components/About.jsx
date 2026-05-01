import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Background<span className="gradient-text">.</span></h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Computer Science & Engineering student at Manipal Institute of Technology, passionate about building scalable software systems and high-performance applications.
            </p>
            <p>
              My journey involves working across the stack, from modeling complex relational databases and developing robust RESTful APIs to creating responsive, high-end user interfaces.
            </p>
          </div>
          
          <div className="education-grid">
            <div className="edu-card">
              <h3>Manipal Institute of Technology</h3>
              <p className="edu-degree">B.Tech in Computer Science & Engineering</p>
              <p className="edu-year">2023 – Present</p>
            </div>
            <div className="edu-card">
              <h3>Boscoss PU College</h3>
              <p className="edu-degree">Pre-University</p>
              <p className="edu-year">2021 – 2023</p>
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        .about-text p {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        .education-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .edu-card {
          background: var(--color-bg-secondary);
          padding: 2rem;
          border-radius: 8px;
          border-left: 2px solid var(--color-accent-start);
          transition: transform 0.3s ease;
        }
        .edu-card:hover {
          transform: translateX(10px);
        }
        .edu-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .edu-degree {
          color: var(--color-text-muted);
          font-size: 1.1rem;
        }
        .edu-year {
          margin-top: 1rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-accent-end);
        }
      `}</style>
    </section>
  );
};

export default About;
