import React from 'react';
import Navbar from '../components/layout/Navbar';
import ContactForm from '../components/contact/ContactForm';
import About from '../components/contact/About';

const contact = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='contact-flex'>
                <div className='about-wrapper'>
                    <div className='about-container'>
                        <About />
                    </div>
                </div>
                <div className='contact-wrapper'>
                    <div className='contact-container'>
                        <h2>Contact Me</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contact;
