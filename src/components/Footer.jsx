import React from 'react';
import githubSVG from '../assets/github.svg';
import linkedinSVG from '../assets/linkedin.svg';
import whatsappSVG from '../assets/Whatsapp.svg';

const Footer = () => {
    return (
        <footer>
            <p>Valentin F. Carlomagno</p>
            <ul>
                <li><a href="https://github.com/FdezCarlomagno/" target='_blank'><img src={githubSVG} alt="" /></a></li>
                <li><a href="https://www.linkedin.com/in/valentin-f-carlomagno-10683b338/" target='_blank'><img src={linkedinSVG} alt="" /></a></li>
                <li>
                    <a
                        href="https://wa.me/5492494244354"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={whatsappSVG} alt="WhatsApp" />
                    </a>
                </li>

            </ul>
        </footer>
    )
}

export default Footer;