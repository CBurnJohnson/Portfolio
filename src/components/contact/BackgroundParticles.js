import React from 'react';
import Particles from 'react-particles-js';

const BackgroundParticles = () => {
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 100,
                        density: { enable: true, value_area: 800 }
                    },
                    color: { value: '#00aaff' },
                    shape: {
                        type: 'circle',
                        stroke: { width: 0, color: '#000000' },
                        polygon: { nb_sides: 5 },
                        image: { width: 100, height: 100 }
                    },
                    opacity: {
                        value: 0.7,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#00aaff',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'right',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: { enable: false, rotateX: 600, rotateY: 1200 }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    modes: {
                        grab: { distance: 400, line_linked: { opacity: 1 } },
                        bubble: {
                            distance: 100,
                            size: 5,
                            duration: 2,
                            opacity: 1,
                            speed: 3
                        },
                        repulse: { distance: 200, duration: 0.4 },
                        push: { particles_nb: 4 },
                        remove: { particles_nb: 2 }
                    }
                },
                retina_detect: true
            }}
        />
    );
};

export default BackgroundParticles;
