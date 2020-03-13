import React, { useContext } from 'react';
import ProjectsContext from '../../context/projects/projectsContext';

const ActiveProject = () => {
    const projectsContext = useContext(ProjectsContext);

    const { activeProject, mernProjects } = projectsContext;

    const initialProject = mernProjects[0];

    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(
                relativePath: { eq: "gatsby-astronaut.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <div className='active-project-container'>
            {activeProject !== null ? (
                <div className='active-project'>
                    <h2>{activeProject.name}</h2>
                    <div className='main-image'>
                        <Img
                            fluid={data.placeholderImage.childImageSharp.fluid}
                        />
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
                        <img
                            src={initialProject.image}
                            alt='Active project image'
                        />
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
