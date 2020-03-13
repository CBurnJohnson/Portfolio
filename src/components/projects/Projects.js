import React, { useEffect } from 'react';
import Project from './Project';

const Projects = ({ projects }) => {
    useEffect(() => {
        document
            .querySelector('.projects-list li')
            .classList.add('projects-nav-active');
    }, []);

    return (
        <ul className='projects-list'>
            {projects.map(project => (
                <Project project={project} key={project.name} />
            ))}
        </ul>
    );
};

export default Projects;
