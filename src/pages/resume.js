import React from 'react';
import '../styles/styles.scss';
import Navbar from '../components/layout/Navbar';
import Resume from "../static/Cole's-Resume.pdf";
import BackgroundParticles from '../components/contact/BackgroundParticles';

const resume = () => {
    return (
        <>
            <div id='background-particles'>
                <BackgroundParticles />
            </div>

            <div className='container resume'>
                <Navbar />

                <div className='resume-container'>
                    <h2>My Resume</h2>
                    <embed src={Resume} />
                </div>
            </div>
        </>
    );
};

export default resume;
