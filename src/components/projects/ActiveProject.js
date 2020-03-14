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
                <>
                    <div className='active-project'>
                        <h2>{activeProject.name}</h2>
                        <div className='main-image'>
                            <Image alt='swag' filename={activeProject.image} />
                        </div>
                    </div>
                    <div className='active-project-info'>
                        <div className='tech-used'>
                            <h3>Technology Used</h3>
                            <ul>
                                {activeProject.techUsed.map(tech => (
                                    <li key={tech}>- {tech}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='active-project-description'>
                            <h3>Description</h3>
                            <p>{activeProject.description}</p>
                        </div>

                        <div className='project-links'>
                            <h3>Links</h3>
                            <div className='project-buttons'>
                                <a
                                    className='button'
                                    href={activeProject.deploy}
                                >
                                    View
                                </a>
                                <a
                                    className='button'
                                    href={activeProject.github}
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='active-project'>
                        <h2>{initialProject.name}</h2>
                        <div className='main-image'>
                            <Image filename={initialProject.image} />
                        </div>
                    </div>

                    <div className='active-project-info'>
                        <div className='tech-used'>
                            <h3>Technology Used</h3>
                            <ul>
                                {initialProject.techUsed.map(tech => (
                                    <li key={tech}>- {tech}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='active-project-description'>
                            <h3>Description</h3>
                            <p>{initialProject.description}</p>
                        </div>

                        <div className='project-links'>
                            <h3>Links</h3>
                            <div className='project-buttons'>
                                <a
                                    className='button'
                                    href={initialProject.deploy}
                                >
                                    View
                                </a>
                                <a
                                    className='button'
                                    href={initialProject.github}
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ActiveProject;
