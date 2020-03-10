import React, { Component } from 'react';
import Particles from 'react-particles-js';

const ParticlesContainer = () => {
    return (
        <div className='particles-container'>
            <Particles
                params={{
                    particles: {
                        color: {
                            value: '#000000'
                        }
                    }
                }}
            />
        </div>
    );
};

export default ParticlesContainer;
