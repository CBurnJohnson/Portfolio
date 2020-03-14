import React, { useEffect } from 'react';
import Project from './Project';

const Projects = ({ projects }) => {
    return (
        <ul className='projects-list'>
            {projects.map(project => (
                <Project project={project} key={project.name} />
            ))}
        </ul>
    );
};

export default Projects;
