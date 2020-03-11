import React from 'react';
import '../styles/styles.scss';

import Navbar from '../components/layout/Navbar';
import ActiveProject from '../components/projects/ActiveProject';
import ProjectsNav from '../components/projects/ProjectsNav';

const projects = () => {
    return (
        <div className='container'>
            <Navbar />

            <div className='projects-grid'>
                <ActiveProject />
                <ProjectsNav />
            </div>
        </div>
    );
};

export default projects;
