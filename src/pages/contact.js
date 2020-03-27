import React from 'react';
import '../styles/styles.scss';
import SiteMetaTags from '../components/utils/SiteMetaTags';
import Navbar from '../components/layout/Navbar';
import ContactForm from '../components/contact/ContactForm';
import About from '../components/contact/About';
import BackgroundParticles from '../components/contact/BackgroundParticles';

const contact = () => {
    return (
        <>
            <SiteMetaTags />
            <div id='background-particles'>
                <BackgroundParticles />
            </div>
            <div className='container contact'>
                <Navbar />
                <div className='contact-grid'>
                    <div className='about-container'>
                        <About />
                    </div>
                    <div className='contact-container'>
                        <h2>Get In Touch</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default contact;
