import React, { useEffect, useState } from 'react';
import Image from '../layout/Image';

const ProjectSlideshow = ({ projectImages }) => {
    const [activeProjectImages, setActiveProjectImages] = useState({
        currentImage: 0,
        images: [...projectImages]
    });

    setTimeout(() => {
        if (
            activeProjectImages.currentImage <
            activeProjectImages.images.length - 1
        ) {
            setActiveProjectImages({
                ...activeProjectImages,
                currentImage: activeProjectImages.currentImage + 1
            });
        } else {
            setActiveProjectImages({
                ...activeProjectImages,
                currentImage: 0
            });
        }
    }, 3000);

    return (
        <>
            <Image
                alt='Active Project'
                filename={
                    activeProjectImages.images[activeProjectImages.currentImage]
                }
            />
        </>
    );
};

export default ProjectSlideshow;
