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

    const [reactProjects, setReactProjects] = useState([
        {
            name: 'REACT ONLY',
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

    const [javascriptProjects, setJavascriptProjects] = useState([
        {
            name: 'JAVASCRIPT',
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

    const [cNetProjects, setCNetProejcts] = useState([
        {
            name: 'C SHARP BRo',
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

    const [phpProjects, setPhpProjects] = useState([
        {
            name: 'PHP',
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

    const [currentProjects, setCurrentProjects] = useState({
        active: 'react',
        currentProjects: mernProjects,
        noProjects: {
            name: '',
            description: '',
            github: '',
            deploy: '',
            image: ''
        }
    });

    const onMernClick = () => {
        setCurrentProjects({
            ...currentProjects,
            active: 'mern'
        });
    };

    const onReactClick = () => {
        setCurrentProjects({
            ...currentProjects,
            active: 'react'
        });
    };

    const onJavascriptClick = () => {
        setCurrentProjects({
            ...currentProjects,
            active: 'javascript'
        });
    };

    const onPhpClick = () => {
        setCurrentProjects({
            ...currentProjects,
            active: 'php'
        });
    };

    const onCNetClick = () => {
        setCurrentProjects({
            ...currentProjects,
            active: 'c#net'
        });
    };

    return (
        <div className='projects-container'>
            <div className='projects-buttons'>
                <button onClick={onMernClick}>MERN Stack</button>

                <button onClick={onReactClick}>React</button>

                <button onClick={onJavascriptClick}>Vanilla JS</button>

                <button onClick={onPhpClick}>PHP</button>

                <button onClick={onCNetClick}>C#/.NET</button>
            </div>
            <h1 className='projects-header'>Projects</h1>
            <Projects
                projects={
                    currentProjects.active === 'mern'
                        ? mernProjects
                        : currentProjects.active === 'react'
                        ? reactProjects
                        : currentProjects.active === 'javascript'
                        ? javascriptProjects
                        : currentProjects.active === 'php'
                        ? phpProjects
                        : currentProjects.active === 'c#net'
                        ? cNetProjects
                        : currentProjects.noProjects
                }
            />
        </div>
    );
};

export default ProjectContainer;
