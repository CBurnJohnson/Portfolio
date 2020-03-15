import React from 'react';
import Typewriter from 'typewriter-effect';

const About = () => {
    return (
        <div>
            <Typewriter
                options={{
                    cursor: '_'
                }}
                onInit={typewriter => {
                    typewriter
                        .typeString('Hello World!')

                        .start();
                }}
            />
        </div>
    );
};

export default About;
