import React, { useState, useContext } from 'react';
import Projects from './Projects';
import ProjectsContext from '../../context/projects/projectsContext';

const ProjectsNav = () => {
    const [currentProjects, setCurrentProjects] = useState({
        active: 'react',
        currentProjects: 'mernProjects',
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
        <div className='projects-nav'>
            <div className='projects-nav-buttons'>
                <button onClick={onMernClick}>MERN Stack</button>

                <button onClick={onReactClick}>React</button>

                <button onClick={onJavascriptClick}>Vanilla JS</button>

                <button onClick={onPhpClick}>PHP</button>

                <button onClick={onCNetClick}>C#/.NET</button>
            </div>

            {/* <Projects
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
            /> */}
        </div>
    );
};

export default ProjectsNav;
