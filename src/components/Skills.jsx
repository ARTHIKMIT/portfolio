import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: "Languages", items: ["Java", "C", "C++", "Python", "SQL"] },
  { category: "Web Technologies", items: ["HTML", "CSS", "Node.js", "Express.js", "Django", "React (Vite)"] },
  { category: "Tools & Databases", items: ["PostgreSQL", "MySQL", "Git", "Prisma"] },
  { category: "Core Competencies", items: ["Problem Solving", "Team Leadership", "Communication"] }
];

const achievements = [
  "State-Level Karate Champion",
  "Represented institution in State-Level Kabaddi Tournament",
  "Organized Taluk-Level Karate Championship"
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="skills-achievements-container">
          <div className="skills-section">
            <h2 className="section-title">Skills<span className="gradient-text">.</span></h2>
            <div className="skills-grid">
              {skillsData.map((skillGroup, index) => (
                <div key={index} className="skill-group">
                  <h3>{skillGroup.category}</h3>
                  <div className="skill-tags">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="achievements-section">
            <h2 className="section-title">Achievements<span className="gradient-text">.</span></h2>
            <ul className="achievements-list">
              {achievements.map((achievement, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="achievement-bullet"></span>
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <style>{`
        .skills-achievements-container {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 4rem;
        }
        @media (max-width: 900px) {
          .skills-achievements-container {
            grid-template-columns: 1fr;
          }
        }
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        @media (max-width: 600px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
        .skill-group h3 {
          font-size: 1.1rem;
          color: var(--color-accent-start);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .skill-tag {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--color-text);
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.9rem;
          transition: background 0.3s;
        }
        .skill-tag:hover {
          background: rgba(255,255,255,0.1);
        }
        
        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .achievements-list li {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          line-height: 1.5;
        }
        .achievement-bullet {
          margin-top: 6px;
          width: 8px;
          height: 8px;
          background: var(--color-accent-end);
          border-radius: 50%;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};

export default Skills;
