import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="navbar"
    >
      <div className="navbar-container">
        <div className="logo">AS.</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: rgba(17, 17, 17, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: -0.05em;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-muted);
          transition: color 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .nav-links a:hover {
          color: var(--color-text);
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
