import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Management Intern",
    company: "COPO, MIT Manipal",
    year: "2025",
    description: [
      "Structured academic outcome data to improve tracking of course and program outcomes.",
      "Reduced manual effort in reporting workflows through process optimization."
    ]
  },
  {
    role: "Task Phase Member",
    company: "Aero MIT Manipal",
    year: "2024",
    description: [
      "Collaborated in a team-based engineering environment under strict deadlines."
    ]
  },
  {
    role: "Organizing Committee Member",
    company: "Karate Championship",
    year: "2018",
    description: [
      "Managed event coordination and participant logistics."
    ]
  }
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Experience<span className="gradient-text">.</span></h2>
        
        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="exp-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="exp-year">{exp.year}</div>
              <div className="exp-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <ul>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        .exp-timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        .exp-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 1px;
          height: 100%;
          background: rgba(255,255,255,0.1);
        }
        .exp-item {
          display: flex;
          margin-bottom: 4rem;
          position: relative;
        }
        .exp-year {
          width: 120px;
          flex-shrink: 0;
          font-weight: 700;
          color: var(--color-accent-mid);
          padding-left: 2rem;
          position: relative;
        }
        .exp-year::before {
          content: '';
          position: absolute;
          left: -4px;
          top: 6px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--color-accent-start);
          box-shadow: 0 0 10px var(--color-accent-start);
        }
        .exp-content {
          flex-grow: 1;
        }
        .exp-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }
        .exp-content h4 {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          margin-bottom: 1rem;
          font-weight: 400;
        }
        .exp-content ul {
          color: var(--color-text-muted);
          list-style: disc;
          padding-left: 1.2rem;
        }
        .exp-content li {
          margin-bottom: 0.5rem;
        }
        @media (max-width: 600px) {
          .exp-item {
            flex-direction: column;
          }
          .exp-year {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
