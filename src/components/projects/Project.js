import React, { useContext } from 'react';
import ProjectsContext from '../../context/projects/projectsContext';

const Project = ({ project }) => {
    const projectsContext = useContext(ProjectsContext);

    const { changeActiveProject, activeProject, defaultId } = projectsContext;

    const onClick = () => {
        changeActiveProject(project);
    };

    return (
        <li
            onClick={onClick}
            key={project}
            className={`${
                activeProject !== null
                    ? activeProject.id === project.id
                        ? 'projects-nav-active'
                        : ''
                    : activeProject === null && project.id === defaultId
                    ? 'projects-nav-active'
                    : ''
            }`}
        >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
        </li>
    );
};

export default Project;
