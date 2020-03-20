import React, { useEffect, useState, useContext } from 'react';
import ProjectsContext from '../../context/projects/projectsContext';
import Image from '../layout/Image';

const ProjectSlideshow = () => {
    const projectsContext = useContext(ProjectsContext);

    const { activeProject } = projectsContext;

    const { images } = activeProject;

    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0);
    }, activeProject);

    const onClick = () => {
        if (index < images.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };

    return (
        <>
            <Image alt='Active Project' filename={images[index]} />
            <button onClick={onClick}>Go next image</button>
        </>
    );
};

export default ProjectSlideshow;
