import React from 'react';
import '../styles/styles.scss';

// Component Imports
import ParticlesContainer from '../components/banner/ParticlesContainer';
import Navbar from '../components/layout/Navbar';
import Typewriter from 'typewriter-effect';

const IndexPage = () => (
    <div className='container'>
        <Navbar />
        <div className='banner'>
            <h1 className='banner-header'>
                <Typewriter
                    options={{
                        cursor: '_',
                        wrapperClassName: 'banner-text'
                    }}
                    onInit={typewriter => {
                        typewriter
                            .typeString('Cole Johnson')

                            .start();
                    }}
                />
                <Typewriter
                    options={{
                        cursor: '_',
                        wrapperClassName: 'banner-text mobile-banner-text',
                        cursorClassName:
                            'mobile-banner-cursor Typewriter__cursor'
                    }}
                    onInit={typewriter => {
                        typewriter
                            .pauseFor(2000)
                            .typeString('Full Stack Developer')
                            .start();
                    }}
                />
            </h1>
            <ParticlesContainer />
        </div>
    </div>
);

export default IndexPage;
