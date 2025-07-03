import React from 'react';

const Footer = () => {
    return (
        <footer className="center">
            <div id="footer-container">
                <span>
                    Copyright &copy; Dariel Mera
                </span>
                <span className="social-media-logo">
                    <a href="https://bocacode.com/candidates/software-engineer/dariel-mera">
                        <img width="30px" height="30px" src="./assets/bc-logo.png" alt="social media logo boca code" />
                    </a>
                </span>
                <span className="social-media-logo">
                    <a href="https://techhubsouthflorida.org/hack-for-inclusion-event/?utm_source=TECH+HUB+SOUTH+FLORIDA&utm_campaign=1a713feb7d-Newsletter_6_NEW9_4_2015_COPY_01&utm_medium=email&utm_term=0_b713bd7972-1a713feb7d-158993226&mc_cid=1a713feb7d&mc_eid=f81c203332">
                        <img width="30px" height="30px" src="./assets/techub-logo.png" alt="social media logo south florida techhub " />
                    </a>
                </span>
                <span className="social-media-logo">
                    <a href="https://github.com/DarielMera">
                        <img width="30px" height="30px" src="./assets/github-logo.png" alt="social media logo github" />
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;