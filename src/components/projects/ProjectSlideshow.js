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

    const nextImage = () => {
        if (index < images.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };

    const prevImage = () => {
        if (index === 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    return (
        <>
            <Image alt='Active Project' filename={images[index]} />
            <a onClick={prevImage}>&#10094;</a>
            <a onClick={nextImage}>&#10095;</a>
        </>
    );
};

export default ProjectSlideshow;
