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

    const onClick = e => {
        const activeButton = document.querySelector('.projects-active-button');
        if (activeButton !== null) {
            activeButton.classList.remove('projects-active-button');
        }
        console.log(activeButton);
        e.target.classList.add('projects-active-button');
        switch (e.target.innerHTML) {
            case 'MERN Stack':
                onMernClick();
                break;
            case 'React':
                onReactClick();
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
        <div className='projects-nav'>
            <div className='projects-nav-buttons'>
                <button onClick={onClick}>MERN Stack</button>

                <button onClick={onClick}>React</button>

                <button onClick={onClick}>Vanilla JS</button>

                <button onClick={onClick}>PHP</button>

                <button onClick={onClick}>C#/.NET</button>
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
