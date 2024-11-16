import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import celuYendo from '../components/imgs/celuYendo.png'
import './ProjectDetails.css';
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
const ProjectDetails = ({ projects }) => {
    const { id } = useParams(); // Extraer el parámetro "id" de la URL
    const project = projects.find((p) => p.id === parseInt(id, 10)); // Convertir "id" a número


    if (!project) {
        return (
            <div>Project not found</div>
        )
    }

    return (
        <div className="project-details">
            <motion.h1
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >Project overview</motion.h1>
            <h2>Description</h2>
            <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={'project-description'}
            >

                <div className="project-details-info">
                    <h3>{project.name}</h3>
                    {project.details.length > 0 && (
                        project.details.map((detail, index) => (
                            <p key={index}>{detail}</p> // Usa un 'key' único para cada elemento
                        ))
                    )}
                    <p>
                    </p>
                    <div className="technologies">
                        {project.technologies.split(', ').map((tech) => (
                            <img key={tech} src={logos[tech]} alt={tech} style={{ width: '60px', marginRight: '1rem' }} />
                        ))}
                    </div>
                    <div className="project-links">
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live Site</a>}
                    </div>

                </div>
                <motion.div
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <img src={project.vertImg} alt="" />
                </motion.div>


            </motion.div>
        </div>
    )
}

export default ProjectDetails;