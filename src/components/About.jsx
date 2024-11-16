import React from 'react';
import Yo from './imgs/yo.jpeg';
import CV from '../assets/resume.svg'
import curriculum from '../assets/curriculum.pdf';
import { motion } from 'framer-motion';


const About = () => {
    return (
        <section className='about'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                About Me
            </motion.h2>

            <motion.section
                className="about-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="img-about"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                >
                    <img src={Yo} alt="Valentin" />
                </motion.div>

                <motion.div
                    className='about-info'
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <p>
                        I am a <strong>trainee programmer</strong> with a strong desire to learn and adapt to the needs of the business environment.
                    </p>
                    <p>
                        I consider myself an efficient, creative, and productive person, always focused on problem-solving and continuous improvement.
                    </p>
                    <p>
                        I have knowledge of languages such as Java, JavaScript, PHP and mySQL as well as experience with frameworks like React, Bootstrap and Tailwind.
                    </p>
                    <p>
                        I am seeking opportunities that will allow me to grow in the software development field and contribute to the success of innovative projects.
                    </p>

                </motion.div>
            </motion.section>
            <div className="resume">
                    <button><p><a href={curriculum} download={'curriculum.pdf'}>Download CV <img src={CV} alt="" /></a></p></button>
                </div>
        </section>
    )
}

export default About;
