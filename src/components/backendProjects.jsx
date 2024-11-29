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
            description: `This project provides a RESTful API to manage guitars and categories in a database. The API allows CRUD operations on guitar and category resources, as well as obtaining a user token. Used PHP, MySQL and Thunderclient`,
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
            description: `This project is a Painting Management API built using Node.js, Express.js and MySQL. The API provides endpoints to manage paintings, including user authentication with JWT. It supports CRUD operations for paintings, user authentication, and query-based filtering for fetching data. Used Node.js, Express.js, MySQL, Thunderclient`,
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
        },
        {
            id: 6,
            name: "E-Commerce Backend",
            description: "This project is a comprehensive backend implementation for an e-commerce platform. It mimics the functionality of a real-world e-commerce system, providing user authentication, role-based access control, product management, cart management, and more. Used Node.js, Express.js, MySQL and for unitary testing used Supertest and Jest.",
            img: "",
            repo: "https://github.com/FdezCarlomagno/e-commerce-API-demo",
            live: false,
            technologies: "Node.js, Express.js, MySQL, Thunderclient",
            apiDetails: [
                { route: "/users/token", method: "POST", description: "Retrieves a JWT token for user authentication (login)." },
                { route: "/users/register", method: "POST", description: "Registers a new user and stores their information in the database." },
                { route: "/users/profile", method: "GET", description: "Retrieves the logged-in user's profile information." },
                { route: "/users/profile", method: "PUT", description: "Allows the logged-in user to update their profile information (nickname or email)." },
                { route: "/users/profile", method: "DELETE", description: "Allows the logged-in user to delete their own account." },
                { route: "/users", method: "GET", description: "Retrieves a list of all users in the database (admin-only)." },
                { route: "/users/promote/:userId", method: "PUT", description: "Promotes a regular user to admin (admin-only)." },
                { route: "/users/:userId", method: "GET", description: "Retrieves information about a specific user by their ID (admin-only)." },
                { route: "/products", method: "GET", description: "Retrieves all products in the database." },
                { route: "/products/:product_id", method: "GET", description: "Retrieves details about a single product by its ID." },
                { route: "/products", method: "POST", description: "Allows an admin to add a new product to the database (admin-only)." },
                { route: "/products/:product_id", method: "DELETE", description: "Allows an admin to delete a product by its ID (admin-only)." },
                { route: "/products/:product_id", method: "PUT", description: "Allows an admin to update the details of an existing product (admin-only)." },
                { route: "/cart", method: "GET", description: "Retrieves the authenticated user's active cart, if one exists." },
                { route: "/cart/addToCart", method: "POST", description: "Adds a product to the user's cart. Creates a new cart if one doesn’t already exist." },
                { route: "/cart/products", method: "GET", description: "Retrieves all the products in the user's active cart." },
                { route: "/cart/products", method: "PUT", description: "Updates the quantity of a specific product in the user's cart." },
                { route: "/cart/products", method: "DELETE", description: "Removes a specific product from the user's cart." }
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
