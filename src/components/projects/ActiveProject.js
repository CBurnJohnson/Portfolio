import React, { useContext } from 'react';
import ProjectsContext from '../../context/projects/projectsContext';
import Image from '../layout/Image';

const ActiveProject = () => {
    const projectsContext = useContext(ProjectsContext);

    const { activeProject, mernProjects } = projectsContext;

    const initialProject = mernProjects[0];

    return (
        <div className='active-project-container'>
            {activeProject !== null ? (
                <div className='active-project'>
                    <h2>{activeProject.name}</h2>
                    <div className='main-image'>
                        <Image alt='swag' filename={activeProject.image} />
                    </div>
                    <p>Technology Used: {activeProject.techUsed}</p>
                    <p>{activeProject.description}</p>

                    <a className='button' href={activeProject.deploy}>
                        View
                    </a>
                    <a className='button' href={activeProject.github}>
                        Github
                    </a>
                </div>
            ) : (
                <div className='active-project'>
                    <h2>{initialProject.name}</h2>
                    <div className='main-image'>
                        <Image filename={initialProject.image} />
                    </div>

                    <p>Technology Used: {initialProject.techUsed}</p>
                    <p>{initialProject.description}</p>

                    <a className='button' href={initialProject.deploy}>
                        View
                    </a>
                    <a className='button' href={initialProject.github}>
                        Github
                    </a>
                </div>
            )}
        </div>
    );
};

export default ActiveProject;
