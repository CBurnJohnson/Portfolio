import React from 'react';
import ProjectsState from './src/context/projects/ProjectsState';
const wrapRootElement = ({ element }) => (
    <ProjectsState>{element}</ProjectsState>
);

export { wrapRootElement };
