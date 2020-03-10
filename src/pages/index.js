import React from 'react';
import '../styles/styles.scss';

// Component Imports
import Image from '../components/image';
import ParticlesContainer from '../components/banner/ParticlesContainer';
import Navbar from '../components/layout/Navbar';
import ProjectContainer from '../components/projects/ProjectContainer';

const IndexPage = () => (
    <div className='container'>
        <Navbar />
        <div className='banner'>
            <ParticlesContainer />
        </div>
        <div className='projects-section' id='projects'>
            <ProjectContainer />
        </div>
    </div>
);

export default IndexPage;
