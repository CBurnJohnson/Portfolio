import React, { useContext } from 'react';
import ProjectsContext from '../../context/projects/projectsContext';

const ActiveProject = () => {
    const projectsContext = useContext(ProjectsContext);

    const { activeProject } = projectsContext;

    return (
        <div className='active-project'>
            <h1>PROJECT</h1>
        </div>
    );
};

export default ActiveProject;
