import React, { useState, useContext } from 'react';
import Projects from './Projects';
import ProjectsContext from '../../context/projects/projectsContext';

const ProjectsNav = () => {
    const projectsContext = useContext(ProjectsContext);

    const {
        currentProjects,
        onMernClick,
        onReactClick,
        onJavascriptClick,
        onPhpClick,
        onCNetClick
    } = projectsContext;

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
