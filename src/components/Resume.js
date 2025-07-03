import React from 'react';

const Resume = () => {
    return (
        <section id="resume">
            <div id="resume-title-container">
                <span id="resume-title">Resume</span>
            </div>
            <div id="img-download_button-container">
                <span id="resume-pic-container">
                    <a href="./assets/Dariel_Mera_Resume.pdf" download="Dariel_Mera_Resume.pdf">
                        <img title="click to download pdf" src="./assets/Dariel_Mera_Resume_Preview_Pic.png"
                            alt="Dariel Mera resume picture" width="200px" height="300px" loading="lazy" />
                    </a>
                </span>
                <div id="download-container">
                    <a id="download" href="./assets/Dariel_Mera_Resume.pdf" download="Dariel_Mera_Resume.pdf">
                        <span className="material-symbols-outlined">
                            download
                        </span>
                        <span id="download-title">Download Resume</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;