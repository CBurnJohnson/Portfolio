import React from 'react';
import Typewriter from 'typewriter-effect';

const About = () => {
    return (
        <div className='about-content'>
            <Typewriter
                options={{
                    cursor: '_',
                    delay: '80'
                }}
                onInit={typewriter => {
                    typewriter
                        .typeString(
                            "I am a passionate Full Stack Developer with industry experience building web applications using Agile methodologies. The stack I enjoy the most developing with is the MERN stack. I love the flexibility of JavaScript, but my passion for development doesn't stem from one language or stack. My passion comes from the immense amount of learning opportunities that arise each project you start."
                        )

                        .start();
                }}
            />
        </div>
    );
};

export default About;
