import React, { useContext } from 'react';
import ProjectsContext from '../../context/projects/projectsContext';

const Project = ({ project }) => {
    const projectsContext = useContext(ProjectsContext);

    const { changeActiveProject } = projectsContext;

    const onClick = () => {
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
