import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './backendProjects.css';

const BackendProjects = ({ logos }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const backendProjects = [
        {
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
                { route: '/user/token', method: 'GET', description: 'Generates and returns an authentication token for the user' },
            ]
        },
        {
            id: 5,
            name: 'Painting Management API 🎨',
            description: `This project is a Painting Management API built using Node.js, Express.js and MySQL. The API provides endpoints to manage paintings, including user authentication with JWT. It supports CRUD operations for paintings, user authentication, and query-based filtering for fetching data.`,
            img: '',
            repo: 'https://github.com/FdezCarlomagno/Node.js-API.git',
            live: false,
            technologies: 'Node.js, Express.js, MySQL, Thunderclient',
            apiDetails: [
                { route: '/api/paintings', method: 'GET', description: 'Retrieves the list of all paintings with optional filtering (sold, price, name)' },
                { route: '/api/paintings/:id', method: 'GET', description: 'Retrieves details of a specific painting by its ID' },
                { route: '/api/paintings', method: 'POST', description: 'Adds a new painting to the collection (authentication required)' },
                { route: '/api/paintings/:id', method: 'PUT', description: 'Updates a specific painting (authentication required)' },
                { route: '/api/paintings/:id', method: 'DELETE', description: 'Deletes a specific painting (authentication required)' },
                { route: '/api/users/token', method: 'POST', description: 'Generates and returns a JWT for authentication' },
            ]
        }
    ];


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
