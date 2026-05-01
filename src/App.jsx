import React from 'react';
import { ReactLenis } from 'lenis/react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <ReactLenis root>
      <div className="noise-overlay"></div>
      <CustomCursor />
      <div className="app-container">
        <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Arthik Shetty. All rights reserved.</p>
      </footer>

      <style>{`
        .app-container {
          width: 100%;
          min-height: 100vh;
        }
        .footer {
          padding: 2rem;
          text-align: center;
          color: var(--color-text-muted);
          border-top: 1px solid rgba(255,255,255,0.05);
          margin-top: 4rem;
        }
      `}</style>
    </div>
    </ReactLenis>
  );
}

export default App;
