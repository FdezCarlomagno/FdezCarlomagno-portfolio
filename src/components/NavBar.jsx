import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNav(false); // Hide NavBar on scroll down
            } else {
                setShowNav(true); // Show NavBar on scroll up
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Function to handle smooth scroll
    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <motion.div
            className='container-nav' 
            initial={{ y: 0 }}
            animate={{ y: showNav ? 0 : -100 }}
            transition={{ duration: 0.5 }}
        >
            <h1><Link to={'/'}><a onClick={() => handleScrollToSection("home")}>VFC</a></Link></h1>
            <nav>
                <ul>
                    <li><Link to={'/'}><a onClick={() => handleScrollToSection("home")}>Home</a></Link></li>
                    <li><Link to={'/'}><a onClick={() => handleScrollToSection("projects")}>Projects</a></Link></li>
                    <li><Link to={'/'}><a onClick={() => handleScrollToSection("about")}>About</a></Link></li>
                </ul>
            </nav>
        </motion.div>
    );
};

export default NavBar;
