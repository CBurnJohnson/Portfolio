import React from 'react';
import '../styles/styles.scss';
import SiteMetaTags from '../components/utils/SiteMetaTags';

const NotFoundPage = () => (
    <>
        <SiteMetaTags />
        <div className='container'>
            <h1>404 Page Not Found</h1>
        </div>
    </>
);

export default NotFoundPage;
