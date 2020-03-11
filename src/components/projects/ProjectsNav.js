import React, { useContext } from 'react';
import Projects from './Projects';
import ProjectsContext from '../../context/projects/projectsContext';

const ProjectsNav = () => {
    const projectsContext = useContext(ProjectsContext);

    const {
        currentProjects,
        mernProjects,
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

            <Projects
                projects={
                    currentProjects !== null ? currentProjects : mernProjects
                }
            />
        </div>
    );
};

export default ProjectsNav;
