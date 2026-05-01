import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">GET IN TOUCH</h2>
            <div className="gradient-line"></div>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <p className="contact-desc">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="info-items">
                <div className="info-item">
                  <FiMail className="info-icon" />
                  <a href="mailto:arthikshetty4@gmail.com">arthikshetty4@gmail.com</a>
                </div>
                <div className="info-item">
                  <FiPhone className="info-icon" />
                  <span>+91 8217073190</span>
                </div>
                <div className="info-item">
                  <FiMapPin className="info-icon" />
                  <span>Puttur, Karnataka, India</span>
                </div>
              </div>
              
              <div className="social-links">
                <a href="https://github.com/ARTHIKMIT" target="_blank" rel="noreferrer" className="social-link">
                  <FiGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/arthik-shetty-b55621315" target="_blank" rel="noreferrer" className="social-link">
                  <FiLinkedin size={24} />
                </a>
              </div>
            </div>
            
            <div className="contact-form-placeholder">
              <h3>Send a Message</h3>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Name" className="form-input" />
                <input type="email" placeholder="Email" className="form-input" />
                <textarea placeholder="Message" rows="5" className="form-input"></textarea>
                <button type="submit" className="form-submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        .contact-container {
          margin-top: 4rem;
        }
        .contact-header {
          margin-bottom: 4rem;
        }
        .contact-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .gradient-line {
          height: 4px;
          width: 100%;
          background: linear-gradient(90deg, var(--color-accent-start), var(--color-accent-mid), var(--color-accent-end));
          margin-top: 1rem;
        }
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
          }
        }
        .contact-desc {
          font-size: 1.2rem;
          color: var(--color-text-muted);
          margin-bottom: 3rem;
        }
        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.1rem;
        }
        .info-icon {
          color: var(--color-accent-start);
        }
        .info-item a {
          transition: color 0.3s;
        }
        .info-item a:hover {
          color: var(--color-accent-mid);
        }
        .social-links {
          display: flex;
          gap: 1.5rem;
        }
        .social-link {
          background: rgba(255,255,255,0.05);
          padding: 1rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s, transform 0.3s;
        }
        .social-link:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-3px);
        }
        
        .contact-form-placeholder h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .form-input {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 1rem;
          border-radius: 8px;
          color: var(--color-text);
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-accent-start);
        }
        .form-submit {
          background: var(--color-text);
          color: var(--color-bg);
          border: none;
          padding: 1rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s, opacity 0.3s;
          margin-top: 1rem;
        }
        .form-submit:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Contact;
