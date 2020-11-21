import React, { useContext } from 'react';
import Projects from './Projects';
import ProjectsContext from '../../context/projects/projectsContext';

const ProjectsNav = () => {
    const projectsContext = useContext(ProjectsContext);

    const {
        currentProjects,
        currentNavProjects,
        mernProjects,
        onMernClick,
        onReactClick,
        onReactNativeClick,
        onJavascriptClick,
        onPhpClick,
        onCNetClick
    } = projectsContext;

    const onClick = e => {
        switch (e.target.innerHTML) {
            case 'MERN Stack':
                onMernClick();
                break;
            case 'React':
                onReactClick();
                break;
            case 'React Native':
                onReactNativeClick();
                break;
            case 'Vanilla JS':
                onJavascriptClick();
                break;
            case 'PHP':
                onPhpClick();
                break;
            case 'C#/.NET':
                onCNetClick();
                break;
            default:
                break;
        }
    };

    return (
        <div className="projects-nav">
            <div className="projects-nav-buttons">
                <button
                    onClick={onClick}
                    className={`${
                        currentNavProjects === 'mern'
                            ? 'projects-button-active'
                            : ''
                    }`}
                >
                    MERN Stack
                </button>

                <button
                    onClick={onClick}
                    className={`${
                        currentNavProjects === 'react'
                            ? 'projects-button-active'
                            : ''
                    }`}
                >
                    React
                </button>

                <button
                    onClick={onClick}
                    className={`${
                        currentNavProjects === 'reactnative'
                            ? 'projects-button-active'
                            : ''
                    }`}
                >
                    React Native
                </button>

                <button
                    onClick={onClick}
                    className={`${
                        currentNavProjects === 'javascript'
                            ? 'projects-button-active'
                            : ''
                    }`}
                >
                    Vanilla JS
                </button>

                <button
                    onClick={onClick}
                    className={`${
                        currentNavProjects === 'php'
                            ? 'projects-button-active'
                            : ''
                    }`}
                >
                    PHP
                </button>

                <button
                    onClick={onClick}
                    className={`${
                        currentNavProjects === 'c#net'
                            ? 'projects-button-active'
                            : ''
                    }`}
                >
                    C#/.NET
                </button>
            </div>

            <Projects
                projects={
                    currentProjects !== null ? currentProjects : mernProjects
                }
            />
        </div>
    );
};

export default ProjectsNav;
