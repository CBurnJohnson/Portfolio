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
        currentNavProjects: 'mern',
        activeProject: {
            id: 1,
            name: 'Watch N Track',
            techUsed: ['React', 'NodeJS', 'MongoDB', 'Express', 'CSS'],
            description:
                "Application that tracks the user's movies, TV shows, and anime they have watched.",
            github: 'https://github.com/cburnjohnson/watch-n-track',
            deploy: 'https://watchntrack.herokuapp.com/',
            images: [
                'watchntrack-homepage.jpg',
                'watchntrack-homepage-2.jpg',
                'watchntrack-login.jpg',
                'watchntrack-register.jpg'
            ]
        },
        defaultId: 1,
        mernProjects: [
            {
                id: 1,
                name: 'Watch N Track',
                techUsed: ['React', 'NodeJS', 'MongoDB', 'Express', 'CSS'],
                description:
                    "Application that tracks the user's movies, TV shows, and anime they have watched.",
                github: 'https://github.com/cburnjohnson/watch-n-track',
                deploy: 'https://watchntrack.herokuapp.com/',
                images: [
                    'watchntrack-homepage.jpg',
                    'watchntrack-homepage-2.jpg',
                    'watchntrack-login.jpg',
                    'watchntrack-register.jpg'
                ]
            },
            {
                id: 2,
                name: 'Phone Book',
                techUsed: ['React', 'NodeJS', 'MongoDB', 'Express', 'CSS'],
                description:
                    "Phone book application that stores user's personal professional contacts.",
                github: 'https://github.com/cburnjohnson/phone-book',
                deploy: 'https://phonebook47.herokuapp.com/',
                images: [
                    'phone-book-homepage.jpg',
                    'phone-book-login.jpg',
                    'phone-book-register.jpg'
                ]
            }
        ],
        reactProjects: [
            {
                id: 3,
                name: 'Where To Eat',
                techUsed: [
                    'React',
                    'JavaScript',
                    'CSS',
                    'Bootstrap',
                    'Google Places API'
                ],
                description:
                    'Restaurant application that displays a random nearby restaurant and information about the restaurant.',
                github: 'https://github.com/cburnjohnson/where-to-eat',
                deploy: 'https://wheretoeat.netlify.com',
                images: ['where-to-eat-homepage.jpg']
            },
            {
                id: 4,
                name: 'Pokédex',
                techUsed: ['React', 'JavaScript', 'CSS'],
                description: 'An application that emulates a Pokédex.',
                github: 'https://github.com/cburnjohnson/pokedex',
                deploy: 'https://pokedex123.netlify.com/',
                images: ['pokedex-homepage.jpg', 'pokedex-second-page.jpg']
            },
            {
                id: 5,
                name: 'LoL Summoners',
                techUsed: ['React', 'JavaScript', 'CSS'],
                description:
                    'League of Legends application that allows the user to look up the statistics of a League of Legends account.',
                github: 'https://github.com/cburnjohnson/lol-summoners',
                deploy: 'https://lolsummoners.netlify.com',
                images: [
                    'lol-homepage.png',
                    'lol-summoner.jpg',
                    'lol-notfound.png'
                ]
            },
            {
                id: 6,
                name: 'IT Work Orders',
                techUsed: [
                    'React',
                    'Redux',
                    'JavaScript',
                    'Materialize CSS',
                    'JSON Server'
                ],
                description: 'Logging/Tracking React for IT work orders.',
                github: 'https://github.com/cburnjohnson/it-work-orders',
                images: [
                    'it-homepage.png',
                    'it-add-log.png',
                    'it-add-tech.png',
                    'it-tech-list.png'
                ]
            }
        ],
        javascriptProjects: [
            {
                id: 7,
                name: 'Theme Changer',
                techUsed: ['JavaScript', 'HTML', 'CSS'],
                description: 'Changes theme based on which theme you choose.',
                github: 'https://github.com/cburnjohnson/theme-changer',
                deploy: 'https://themechanger.netlify.com/',
                images: ['themechanger-homepage.jpg']
            },
            {
                id: 8,
                name: 'Tic Tac Toe',
                techUsed: ['JavaScript', 'HTML', 'CSS'],
                description: 'Tic Tac Toe game.',
                github: 'https://github.com/cburnjohnson/tic-tac-toe',
                deploy: 'https://tictactoe47.netlify.com/',
                images: ['tictactoe-homepage.jpg']
            },
            {
                id: 9,
                name: 'Rock Paper Scissors',
                techUsed: ['JavaScript', 'HTML', 'CSS'],
                description:
                    'Rock Paper Scissors game against the computer. Records the user and computer score while playing.',
                github: 'https://github.com/cburnjohnson/rock-paper-scissors',
                deploy: 'https://cburnjohnson.github.io/rock-paper-scissors/',
                images: ['rockpaperscissors.jpg']
            },
            {
                id: 10,
                name: 'To Do List',
                techUsed: ['JavaScript', 'HTML', 'CSS'],
                description:
                    'To Do List application that records tasks and moves them over to the done section when completed.',
                github: 'https://github.com/cburnjohnson/to-do-list',
                deploy: 'https://cburnjohnson.github.io/to-do-list/',
                images: ['todolist.jpg']
            }
        ],
        cNetProjects: [
            {
                id: 11,
                name: 'Twenty One Game',
                techUsed: ['.NET', 'C#'],
                description:
                    'Console application that emulates the game Twenty One.',
                github: 'https://github.com/cburnjohnson/Twenty-One-Game',
                images: ['twenty-one.jpg']
            },
            {
                id: 12,
                name: 'Car Insurance Quoter',
                techUsed: [
                    '.NET',
                    'ASP.NET',
                    'C#',
                    'SQLServer',
                    'JavaScript',
                    'Bootstrap'
                ],
                description:
                    "Web application that issues car insurance quotes based on the user's input. The application also pulls all recent quotes from the database, and displays the data on the admin page.",
                github: 'https://github.com/cburnjohnson/CarInsuranceApp',
                images: [
                    'carinsurance.jpg',
                    'carinsurance-quote.jpg',
                    'carinsurance-admin.jpg'
                ]
            }
        ],
        phpProjects: [
            {
                id: 13,
                name: 'Cloud the Pom',
                techUsed: ['PHP', 'JavaScript', 'HTML', 'CSS'],
                description: `A website created for my dog that allows me to login and
                    upload pictures that get stored in a picture library
                    directory. The home page has a carousel populated with
                    random pictures from the picture library. The login
                    information is “guest” for username and password
                    (uploading is not available for guests).`,
                github: 'https://github.com/cburnjohnson/cloud-the-pom/',
                deploy: 'https://cloudthepom.com',
                images: [
                    'cloud-homepage.png',
                    'cloud-login.png',
                    'cloud-nopics.png',
                    'cloud-pics.png'
                ]
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
                currentNavProjects: state.currentNavProjects,
                defaultId: state.defaultId,
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
