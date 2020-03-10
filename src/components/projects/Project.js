import React from 'react';

const Project = ({ project }) => {
    const { name, description, github, deploy, image } = project;

    return (
        <div className='projects-grid-item'>
            <h2>{name}</h2>
            <img src={image} alt='project image' />
            <p>{description}</p>
            <button>
                <a href={deploy} target='_blank'>
                    View
                </a>
            </button>
            <button>
                <a href={github} target='_blank'>
                    Github
                </a>
            </button>
        </div>
    );
};

export default Project;
