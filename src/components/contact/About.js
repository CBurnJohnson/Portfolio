import React from 'react';
import Typewriter from 'typewriter-effect';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const About = () => {
    const data = useStaticQuery(graphql`
        query {
            portrait: file(relativePath: { eq: "portrait.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <>
            <div className='portrait-img'>
                <Img fluid={data.portrait.childImageSharp.fluid} alt='me' />
            </div>
            <div className='about-content'>
                <Typewriter
                    options={{
                        cursor: '_',
                        delay: '70'
                    }}
                    onInit={typewriter => {
                        typewriter
                            .typeString(
                                "I am a passionate Full Stack Developer with industry experience building web applications using Agile methodologies. The stack I enjoy the most developing with is the MERN stack. I love the flexibility of JavaScript, but my passion for development doesn't stem from one language or stack. My passion comes from the immense amount of learning opportunities that arise each project I start."
                            )

                            .start();
                    }}
                />

                <Link to='/projects'>
                    <button>I don't care, just show me the code!</button>
                </Link>
            </div>
        </>
    );
};

export default About;
