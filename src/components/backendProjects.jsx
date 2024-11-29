import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './backendProjects.css';
import backendProjects from '../components/objects/BackendProjects.jsx';

const BackendProjects = ({ logos }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.section
            className="backend-projects-section"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <h2>Backend Projects</h2>
            {backendProjects.map((project) => (
                <motion.div
                    key={project.id}
                    className="backend-project-card"
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <div className="backend-project-info">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div className="technologies">
                            <div className="technologies-logos">
                                {project.technologies.split(', ').map((tech) => (
                                    <img
                                        key={tech}
                                        src={logos[tech]}
                                        alt={tech}
                                        style={{ width: '60px', marginRight: '1rem' }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="project-links">
                            <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                            {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live Site</a>}
                        </div>
                        <h4>API Routes</h4>
                        <ul>
                            {project.apiDetails.map((apiRoute, index) => (
                                <li key={index}>
                                    <strong>{apiRoute.method}</strong> {apiRoute.route}: {apiRoute.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </motion.section>
    );
};

export default BackendProjects;
