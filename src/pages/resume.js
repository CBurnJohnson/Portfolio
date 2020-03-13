import React from 'react';

import Navbar from '../components/layout/Navbar';
import Resume from "../static/Cole's-Resume.pdf";

const resume = () => {
    return (
        <div className="container">
            <Navbar />

            <div className="resume-container">
                <h2>My Resume</h2>
                <embed src={Resume} />
            </div>
        </div>
    );
};

export default resume;
