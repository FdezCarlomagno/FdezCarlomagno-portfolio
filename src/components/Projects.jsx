import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BackendProjects from './backendProjects';
import { Link } from 'react-router-dom';
import projects from './objects/ProjectsJSON';

// Importamos los logos
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/javascript.svg';
import phpLogo from '../assets/php.svg';
import cssLogo from '../assets/css.svg';
import htmlLogo from '../assets/html.svg';
import gitLogo from '../assets/git.svg';
import tailwindLogo from '../assets/tailwind.svg';
import bootstrapLogo from '../assets/bootstrap.svg';
import mySQLlogo from '../assets/mySQL.svg';
import thunderclientLogo from '../assets/thunderclient.svg';

const logos = {
    "React.js": reactLogo,
    "Javascript": viteLogo,
    "PHP": phpLogo,
    "CSS": cssLogo,
    "HTML": htmlLogo,
    "Git": gitLogo,
    "Tailwind CSS": tailwindLogo,
    "Bootstrap": bootstrapLogo,
    "MySQL": mySQLlogo,
    "Thunderclient": thunderclientLogo
};

const Card = ({ project }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Solo activa la animación una vez
        threshold: 0.2, // Activa cuando el 20% del componente es visible
    });

    return (
        <motion.div
            ref={ref}
            className="card"
            initial={{ opacity: 0, y: 50, x: 100 }}
            animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <img src={project.img} alt={project.name} />
            <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description.split(' ').slice(0, 20).join(' ')}...</p>
                <p>
                    <div className="technologies">
                        {project.technologies.split(', ').map((tech) => (
                            <img key={tech} src={logos[tech]} alt={tech} style={{ width: '60px', marginRight: '1rem' }} className='technologies' />
                        ))}
                    </div>
                </p>
                <div className="project-links">
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live Site</a>}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const { ref, inView } = useInView({
        triggerOnce: true, // Solo activa la animación una vez
        threshold: 0.2, // Activa cuando el 20% del componente es visible
    });

    return (
        <section className='projects-section'>
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                My Projects
            </motion.h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                   <Link to={`projects/${project.id}`} className='link' key={index}><Card key={index} project={project} /></Link>
                ))}
            </div>
                <BackendProjects logos={logos}/>
        </section>
    );
};

export default Projects;
