import React from 'react';
import '../styles/styles.scss';

// Component Imports
import Image from '../components/image';
import ParticlesContainer from '../components/banner/ParticlesContainer';
import Navbar from '../components/layout/Navbar';

const IndexPage = () => (
    <>
        <Navbar />
        <div className='banner'>
            <ParticlesContainer />
        </div>
    </>
);

export default IndexPage;
