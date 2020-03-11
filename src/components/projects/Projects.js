import React, { useContext } from 'react';
import Project from './Project';

const Projects = ({ projects }) => {
    return (
        <ul className='projects-list'>
            {projects.map(project => (
                <Project project={project} />
            ))}
        </ul>
    );
};

export default Projects;
