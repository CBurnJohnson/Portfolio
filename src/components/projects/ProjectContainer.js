import React, { useState } from 'react';
import Projects from './Projects';

const ProjectContainer = () => {
    const [mernProjects, setMernProjects] = useState([
        {
            name: 'Project 1',
            description: 'describes the project',
            github: 'https://github.com/cburnjohnson/watch-n-track',
            deploy: 'https://watchntrack.herokuapp.com/',
            image: 'https://source.unsplash.com/random'
        },
        {
            name: 'Project 2',
            description: 'describes the project',
            github: 'https://github.com/cburnjohnson/watch-n-track',
            deploy: 'https://watchntrack.herokuapp.com/',
            image: 'https://source.unsplash.com/random'
        },
        {
            name: 'Project 3',
            description: 'describes the project',
            github: 'https://github.com/cburnjohnson/watch-n-track',
            deploy: 'https://watchntrack.herokuapp.com/',
            image: 'https://source.unsplash.com/random'
        },
        {
            name: 'Project 4',
            description: 'describes the project',
            github: 'https://github.com/cburnjohnson/watch-n-track',
            deploy: 'https://watchntrack.herokuapp.com/',
            image: 'https://source.unsplash.com/random'
        }
    ]);

    return (
        <div className='projects-container'>
            <div className='projects-buttons'>
                <button>MERN Stack</button>

                <button>React</button>

                <button>Vanilla JS</button>

                <button>PHP</button>

                <button>C#/.NET</button>
            </div>
            <h1 id='projects'>Projects</h1>
            <Projects projects={mernProjects} />
        </div>
    );
};

export default ProjectContainer;
