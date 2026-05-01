import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "InvoiceWala",
    subtitle: "GST Invoice & Payment Tracker (SaaS)",
    description: "A full-stack multi-tenant system for Indian freelancers to generate GST-compliant invoices and track payments.",
    tech: ["React (Vite)", "Node.js", "Express", "PostgreSQL", "Prisma"],
    features: [
      "JWT-based authentication and secure routes",
      "Normalized relational database schema",
      "PDF invoice generation via pdfkit",
      "Automated email reminders using Nodemailer"
    ]
  },
  {
    title: "WIZDESK",
    subtitle: "Scalable Team Collaboration Platform",
    description: "A full-stack task management system with role-based workflows and approval pipelines.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    features: [
      "Role-based workflows (Leader/Member)",
      "Secure authentication & authorization",
      "Real-time task updates & optimized backend operations"
    ]
  },
  {
    title: "Hospital Management System",
    subtitle: "Database-driven patient record manager",
    description: "Developed a robust system to manage patient records and appointments efficiently.",
    tech: ["MySQL", "PHP", "HTML", "CSS"],
    features: []
  },
  {
    title: "Agriculture Management System",
    subtitle: "Desktop Application",
    description: "Built a Java-based application for managing comprehensive agricultural data.",
    tech: ["Java", "JavaFX"],
    features: []
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Projects<span className="gradient-text">.</span></h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <FiGithub size={20} className="icon-link" />
                  <FiExternalLink size={20} className="icon-link" />
                </div>
              </div>
              <h4>{project.subtitle}</h4>
              <p className="project-desc">{project.description}</p>
              
              {project.features.length > 0 && (
                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
        .project-card {
          background: var(--color-bg-secondary);
          border-radius: 12px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(255,255,255,0.05);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,255,255,0.2);
        }
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .project-header h3 {
          font-size: 1.5rem;
        }
        .project-links {
          display: flex;
          gap: 1rem;
        }
        .icon-link {
          color: var(--color-text-muted);
          cursor: pointer;
          transition: color 0.3s;
        }
        .icon-link:hover {
          color: var(--color-text);
        }
        .project-card h4 {
          color: var(--color-accent-start);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .project-desc {
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }
        .project-features {
          list-style: circle;
          padding-left: 1.2rem;
          color: #bbb;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .project-features li {
          margin-bottom: 0.4rem;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }
        .tech-tag {
          background: rgba(255,255,255,0.05);
          color: var(--color-text-muted);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default Projects;
