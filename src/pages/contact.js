import React from 'react';
import Navbar from '../components/layout/Navbar';
import ContactForm from '../components/contact/ContactForm';

const contact = () => {
    return (
        <div className='container'>
            <Navbar />
            <ContactForm />
        </div>
    );
};

export default contact;
