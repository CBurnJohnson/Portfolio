import React from 'react';
import '../styles/styles.scss';
import SiteMetaTags from '../components/utils/SiteMetaTags';
import Navbar from '../components/layout/Navbar';
import ActiveProject from '../components/projects/ActiveProject';
import ProjectsNav from '../components/projects/ProjectsNav';

const projects = () => {
    return (
        <>
            <SiteMetaTags />
            <div className='container'>
                <Navbar />

                <div className='projects-grid'>
                    <ActiveProject />
                    <ProjectsNav />
                </div>
            </div>
        </>
    );
};

export default projects;
