import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './backendProjects.css';

const BackendProjects = ({ logos }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const backendProject = {
        id: 4,
        name: 'Guitars API 🎸',
        description: `This project provides a RESTful API to manage guitars and categories in a database. The API allows CRUD operations on guitar and category resources, as well as obtaining a user token.`,
        img: '',
        repo: 'https://github.com/FdezCarlomagno/tp_web2_apiRest.git',
        live: false,
        technologies: 'PHP, MySQL, Thunderclient',
        apiDetails: [
            { route: '/guitarras', method: 'GET', description: 'Retrieves the list of all guitars' },
            { route: '/guitarras/:categoria', method: 'GET', description: 'Retrieves all guitars of a specific category' },
            { route: '/guitarras/guitarra/:id', method: 'GET', description: 'Retrieves a specific guitar by its id' },
            { route: '/guitarras', method: 'POST', description: 'Adds a new guitar to the collection' },
            { route: '/guitarras/guitarra/:id', method: 'PUT', description: 'Updates a specific guitar' },
            { route: '/guitarras/guitarra/:id', method: 'DELETE', description: 'Deletes a specific guitar' },
            { route: '/categorias', method: 'GET', description: 'Retrieves the list of all guitar categories' },
            { route: '/user/token', method: 'GET', description: 'Generates and returns an authentication token for the user' }
        ]
    };
    

    return (
        <motion.section
            className='backend-projects-section'
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <h2>Backend Projects</h2>
            <motion.div
                className='backend-project-card'
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <div className='backend-project-info'>
                    <h3>{backendProject.name}</h3>
                    <p>{backendProject.description}</p>
                    <div className='technologies'>
                        <div className="technologies-logos">
                            {backendProject.technologies.split(', ').map((tech) => (
                                <img
                                    key={tech}
                                    src={logos[tech]}
                                    alt={tech}
                                    style={{ width: '60px', marginRight: '1rem' }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='project-links'>
                        <a href={backendProject.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        {backendProject.live && <a href={backendProject.live} target="_blank" rel="noopener noreferrer">Live Site</a>}
                    </div>
                    <h4>API Routes</h4>
                    <ul>
                        {backendProject.apiDetails.map((apiRoute, index) => (
                            <li key={index}>
                                <strong>{apiRoute.method}</strong> {apiRoute.route}: {apiRoute.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default BackendProjects;
