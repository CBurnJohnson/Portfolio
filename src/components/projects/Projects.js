import React from 'react';
import Project from './Project';

const Projects = ({ projects }) => {
    return (
        <div className='projects-grid'>
            {projects.map(project => (
                <Project project={project} key={project.name} />
            ))}
        </div>
    );
};

export default Projects;
