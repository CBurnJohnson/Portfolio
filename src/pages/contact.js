import React from 'react';
import Navbar from '../components/layout/Navbar';
import ContactForm from '../components/contact/ContactForm';

const contact = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='contact-container'>
                <h2>Contact Me</h2>
                <ContactForm />
            </div>
        </div>
    );
};

export default contact;
