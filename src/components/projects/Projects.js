import React from 'react';

const Projects = ({ projects }) => {
    const onClick = () => {
        console.log('functon');
    };

    return (
        <ul className='projects-list'>
            {projects.map(project => (
                <li onClick={onClick} key={project.name}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default Projects;
