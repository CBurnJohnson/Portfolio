import React from 'react';

import Navbar from '../components/layout/Navbar';
import Resume from "../static/Cole's-Resume.pdf";

const resume = () => {
    return (
        <div className="container">
            <Navbar />

            <div className="resume-container">
                <embed src={Resume} width="800px" height="2100px" />
            </div>
        </div>
    );
};

export default resume;
