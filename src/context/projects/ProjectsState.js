import React, { useReducer } from 'react';
import ProjectsContext from './projectsContext';
import projectsReducer from './projectsReducer';
import {
    GET_MERN_PROJECTS,
    GET_REACT_PROJECTS,
    GET_JAVASCRIPT_PROJECTS,
    GET_CNET_PROJECTS,
    GET_PHP_PROJECTS,
    CHANGE_ACTIVE_PROJECT
} from '../types';

const ProjectsState = props => {
    const initialState = {
        currentProjects: null,
        activeProject: null,
        mernProjects: [
            {
                name: 'Watch N Track',
                techUsed: 'MongoDB, Express, React, NodeJS, and JavaScript.',
                description:
                    "Application that tracks the user's movies, TV shows, and anime they have watched.",
                github: 'https://github.com/cburnjohnson/watch-n-track',
                deploy: 'https://watchntrack.herokuapp.com/',
                image: 'https://source.unsplash.com/random'
            },
            {
                name: 'Phone Book',
                techUsed: 'MongoDB, Express, React, NodeJS, and JavaScript.',
                description:
                    "Phone book application that stores user's personal professional contacts.",
                github: 'https://github.com/cburnjohnson/phone-book',
                deploy: 'https://phonebook47.herokuapp.com/',
                image: 'https://source.unsplash.com/random'
            }
        ],
        reactProjects: [
            {
                name: 'Where To Eat',
                techUsed:
                    'React, JavaScript, CSS, Bootstrap, and Google Places API.',
                description:
                    'Restaurant application that displays a random nearby restaurant and information about the restaurant.',
                github: 'https://github.com/cburnjohnson/where-to-eat',
                deploy: 'https://wheretoeat.netlify.com',
                image: 'https://source.unsplash.com/random'
            },
            {
                name: 'Pokédex',
                techUsed: 'React, JavaScript, and CSS.',
                description: 'An application that emulates a Pokédex.',
                github: 'https://github.com/cburnjohnson/pokedex',
                deploy: 'https://pokedex123.netlify.com/',
                image: 'https://source.unsplash.com/random'
            },
            {
                name: 'LoL Summoners',
                techUsed: 'React, JavaScript, and CSS.',
                description:
                    'League of Legends application that allows the user to look up the statistics of a League of Legends account.',
                github: 'https://github.com/cburnjohnson/lol-summoners',
                deploy: 'https://lolsummoners.netlify.com',
                image: 'https://source.unsplash.com/random'
            },
            {
                name: 'IT Work Orders',
                techUsed:
                    'React, Redux, JavaScript, Materialize Css, and JSON Server.',
                description: 'Logging/Tracking React for IT work orders.',
                github: 'https://github.com/cburnjohnson/it-work-orders',
                image: 'https://source.unsplash.com/random'
            }
        ],
        javascriptProjects: [
            {
                name: 'Rock Paper Scissors',
                techUsed: 'JavaScript, HTML, and CSS.',
                description:
                    'Rock Paper Scissors game against the computer. Records the user and computer score while playing.',
                github: 'https://github.com/cburnjohnson/rock-paper-scissors',
                deploy: 'https://cburnjohnson.github.io/rock-paper-scissors/',
                image: 'https://source.unsplash.com/random'
            },
            {
                name: 'To Do List',
                techUsed: 'JavaScript, HTML, and CSS.',
                description:
                    'To Do List application that records tasks and moves them over to the done section when completed.',
                github: 'https://github.com/cburnjohnson/to-do-list',
                deploy: 'https://cburnjohnson.github.io/to-do-list/',
                image: 'https://source.unsplash.com/random'
            }
        ],
        cNetProjects: [
            {
                name: 'Twenty One Game',
                techUsed: '.NET, ASP.NET, and C#.',
                description:
                    'Console application that emulates the game Twenty One.',
                github: 'https://github.com/cburnjohnson/Twenty-One-Game',
                image: 'https://source.unsplash.com/random'
            },
            {
                name: 'Car Insurance Quoter',
                techUsed:
                    '.NET, ASP.NET, C#, SQLServer, JavaScript, and Bootstrap.',
                description:
                    "Web application that issues car insurance quotes based on the user's input. The application also pulls all recent quotes from the database, and displays the data on the admin page.",
                github: 'https://github.com/cburnjohnson/CarInsuranceApp',
                image: 'https://source.unsplash.com/random'
            }
        ],
        phpProjects: [
            {
                name: 'Cloud the Pom',
                techUsed: 'PHP, JavaScript, HTML, and CSS.',
                description: `A website created for my dog that allows me to login and
                    upload pictures that get stored in a picture library
                    directory. The home page has a carousel populated with
                    random pictures from the picture library. The login
                    information is “guest” for username and password
                    (uploading is not available for guests).`,
                github: 'https://github.com/cburnjohnson/cloud-the-pom/',
                deploy: 'https://cloudthepom.com',
                image: 'https://source.unsplash.com/random'
            }
        ]
    };

    const [state, dispatch] = useReducer(projectsReducer, initialState);

    const onMernClick = () => {
        dispatch({ type: GET_MERN_PROJECTS });
    };

    const onReactClick = () => {
        dispatch({ type: GET_REACT_PROJECTS });
    };

    const onJavascriptClick = () => {
        dispatch({ type: GET_JAVASCRIPT_PROJECTS });
    };

    const onCNetClick = () => {
        dispatch({ type: GET_CNET_PROJECTS });
    };

    const onPhpClick = () => {
        dispatch({ type: GET_PHP_PROJECTS });
    };

    const changeActiveProject = project => {
        dispatch({ type: CHANGE_ACTIVE_PROJECT, payload: project });
    };

    return (
        <ProjectsContext.Provider
            value={{
                currentProjects: state.currentProjects,
                activeProject: state.activeProject,
                mernProjects: state.mernProjects,
                reactProjects: state.reactProjects,
                javascriptProjects: state.javascriptProjects,
                cNetProjects: state.cNetProjects,
                phpProjects: state.phpProjects,
                onMernClick,
                onReactClick,
                onJavascriptClick,
                onCNetClick,
                onPhpClick,
                changeActiveProject
            }}
        >
            {props.children}
        </ProjectsContext.Provider>
    );
};

export default ProjectsState;
