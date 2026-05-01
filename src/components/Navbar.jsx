import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      style={{ display: 'inline-block', cursor: 'pointer' }}
    >
      {children}
    </motion.div>
  );
};

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="navbar"
    >
      <div className="navbar-container">
        <Magnetic>
          <div className="logo">AS.</div>
        </Magnetic>
        <ul className="nav-links">
          <li><Magnetic><a href="#about" className="magnetic">About</a></Magnetic></li>
          <li><Magnetic><a href="#experience" className="magnetic">Experience</a></Magnetic></li>
          <li><Magnetic><a href="#projects" className="magnetic">Projects</a></Magnetic></li>
          <li><Magnetic><a href="#contact" className="magnetic">Contact</a></Magnetic></li>
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
          padding: 0.5rem;
          display: inline-block;
        }
        .nav-links a:hover {
          color: var(--color-text);
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
