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

            {images.length > 1 && (
                <>
                    <button className='prevImageBtn' onClick={prevImage}>
                        &#10094;
                    </button>
                    <button className='nextImageBtn' onClick={nextImage}>
                        &#10095;
                    </button>
                </>
            )}
        </>
    );
};

export default ProjectSlideshow;
