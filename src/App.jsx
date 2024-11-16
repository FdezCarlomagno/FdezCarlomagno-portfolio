import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import projects from './components/objects/ProjectsJSON';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/javascript.svg';
import phpLogo from './assets/php.svg';
import cssLogo from './assets/css.svg';
import htmlLogo from './assets/html.svg';
import gitLogo from './assets/git.svg';
import mySQLlogo from './assets/mySQL.svg';
import JavaLogo from './assets/java.svg';
import Footer from './components/Footer';
import tailwindLogo from './assets/tailwind.svg';
import video3 from './assets/bg5.mp4';
import Contact from './components/Contact.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import NavBar from './components/NavBar';
import Projects from './components/Projects';
import About from './components/About';
import ProjectDetails from './pages/ProjectDetails'; // Importa tu componente dinámico
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const toggleMute = () => {
    setIsMuted((prevState) => !prevState);
  };

  const logos = [
    { src: reactLogo, alt: 'React' },
    { src: viteLogo, alt: 'JavaScript' },
    { src: phpLogo, alt: 'PHP' },
    { src: htmlLogo, alt: 'HTML' },
    { src: cssLogo, alt: 'CSS' },
    { src: gitLogo, alt: 'Git' },
    { src: mySQLlogo, alt: 'mySQL' },
    { src: JavaLogo, alt: 'Java' },
    { src: tailwindLogo, alt: 'Tailwind' }
  ];

  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <NavBar />
      <button
          className="mute-button"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute Video' : 'Mute Video'}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
      <div className="video-background">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onCanPlayThrough={handleVideoLoad}
          id="background-video"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
  
      <Routes>
        <Route
          path="/"
          element={
            <>
              {isVideoLoaded && (
                <div>
                  <div className="main-content">
                    <motion.h3
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="subtitle"
                    >
                      WEB DEVELOPER
                    </motion.h3>
                    <motion.h1
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="main-title"
                    >
                      Valentin F. Carlomagno
                    </motion.h1>
                    <motion.div className="svg-container">
                      {logos.map((logo, index) => (
                        <motion.div
                          key={logo.alt}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.3, duration: 0.6 }}
                          className="svg"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img src={logo.src} alt={logo.alt} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                  <div className="about-container" id="about">
                    <About />
                  </div>
                  <div className="projects" id="projects">
                    <Projects />
                  </div>
                </div>
              )}
            </>
          }
        />
        <Route path="/projects/:id" element={<ProjectDetails projects={projects} />} />
      </Routes>
      <Contact></Contact>
      <Footer />
    </Router>
  );
}

export default App;
