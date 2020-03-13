import React, { useContext } from 'react';
import ProjectsContext from '../../context/projects/projectsContext';

const Project = ({ project }) => {
    const projectsContext = useContext(ProjectsContext);

    const { changeActiveProject } = projectsContext;

    const onClick = e => {
        const navActiveProject = document.querySelector('.projects-nav-active');
        if (navActiveProject !== null) {
            navActiveProject.classList.remove('projects-nav-active');
        }
        e.target.closest('li').classList.add('projects-nav-active');
        changeActiveProject(project);
    };

    return (
        <li onClick={onClick} key={project}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
        </li>
    );
};

export default Project;
