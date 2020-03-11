import React, { useContext } from 'react';
import ProjectsContext from '../../context/projects/projectsContext';

const ActiveProject = () => {
    const projectsContext = useContext(ProjectsContext);

    const { activeProject } = projectsContext;

    return (
        <div className='active-project-container'>
            {activeProject !== null ? (
                <div className='active-project'>
                    <h2>{activeProject.name}</h2>
                    <img src={activeProject.image} alt='Active project image' />
                    <p>{activeProject.techUsed}</p>
                    <p>{activeProject.description}</p>

                    <a href={activeProject.deploy}>View</a>
                    <a href={activeProject.github}>Github</a>
                </div>
            ) : (
                <h2>No Active Project</h2>
            )}
        </div>
    );
};

export default ActiveProject;
