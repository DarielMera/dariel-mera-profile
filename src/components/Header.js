import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header id="menu">
            <nav>
                <ul>
                    <li><Link to="hero" smooth={true} duration={500}><span className="material-symbols-outlined">home</span></Link></li>
                    <li><Link to="resume" smooth={true} duration={500}>Resume</Link></li>
                    <li><Link to="about" smooth={true} duration={500}>About me</Link></li>
                    <li><Link to="project-presentation-container" smooth={true} duration={500}>Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;