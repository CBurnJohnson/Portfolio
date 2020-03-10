import React from 'react';

const Project = ({ project }) => {
    const { name, description, github, deploy, image } = project;

    return (
        <div className='projects-grid-item'>
            <h2>{name}</h2>
            <img src={image} alt='project image' />
            <div className='project-info'></div>
            <p>{description}</p>
            <div className='projects-grid-buttons'>
                <a href={deploy} target='_blank' className='button'>
                    View
                </a>

                <a href={github} target='_blank' className='button'>
                    Github
                </a>
            </div>
        </div>
    );
};

export default Project;
