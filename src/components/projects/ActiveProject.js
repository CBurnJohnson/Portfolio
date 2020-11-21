import React, { useContext } from 'react';
import ProjectsContext from '../../context/projects/projectsContext';
import ProjectSlideshow from './ProjectSlideshow';

const ActiveProject = () => {
    const projectsContext = useContext(ProjectsContext);

    const { activeProject } = projectsContext;

    console.log(activeProject);

    return (
        <div className="active-project-container">
            <div className="active-project">
                <h2>{activeProject.name}</h2>
                {activeProject.video ? (
                    <div className="video-background">
                        <iframe
                            src={activeProject.video}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                ) : (
                    <div className="main-image">
                        <ProjectSlideshow />
                    </div>
                )}
            </div>
            <div className="active-project-info">
                <div className="tech-used">
                    <h3>Technology Used</h3>
                    <ul>
                        {activeProject.techUsed.map(tech => (
                            <li key={tech}>- {tech}</li>
                        ))}
                    </ul>
                </div>
                <div className="active-project-description">
                    <h3>Description</h3>
                    <p>{activeProject.description}</p>
                </div>

                <div className="project-links">
                    <h3>Links</h3>
                    <div className="project-buttons">
                        {activeProject.deploy && (
                            <a
                                className="button"
                                href={activeProject.deploy}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View
                            </a>
                        )}
                        <a
                            className="button"
                            href={activeProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveProject;
