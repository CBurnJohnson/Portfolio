import React, { useState } from 'react';
import Projects from './Projects';

const ProjectContainer = () => {
    const [mernProjects, setMernProjects] = useState([
        {
            name: 'Watch N Track',
            description:
                ' Nam nisl est, aliquam sit amet erat faucibus, vestibulum euismod leo. Donec quis nulla eget augue mollis lacinia. Maecenas consectetur dictum ex eu fermentum. Donec sit amet erat dignissim, dignissim ipsum eleifend, pretium augue. Maecenas euismod massa sed lorem pharetra facilisis. Nam ac nulla a enim tincidunt egestas vitae et nulla. Curabitur eu felis luctus, aliquam orci quis, suscipit turpis. Nullam sed lacinia felis, sed ultrices augue. Cras elementum posuere tellus egestas vehicula.',
            github: 'https://github.com/cburnjohnson/watch-n-track',
            deploy: 'https://watchntrack.herokuapp.com/',
            image: 'https://source.unsplash.com/random'
        },
        {
            name: 'Phone Book',
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
            <h1 className='projects-header'>Projects</h1>
            <Projects projects={mernProjects} />
        </div>
    );
};

export default ProjectContainer;
