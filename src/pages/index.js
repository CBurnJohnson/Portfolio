import React from 'react';
import '../styles/styles.scss';

// Component Imports
import ParticlesContainer from '../components/banner/ParticlesContainer';
import Navbar from '../components/layout/Navbar';

const IndexPage = () => (
    <div>
        <div className='container'>
            <Navbar />
            <div className='banner'>
                <h1 className='banner-header'>Cole Johnson</h1>
                <ParticlesContainer />
            </div>
        </div>
    </div>
);

export default IndexPage;
