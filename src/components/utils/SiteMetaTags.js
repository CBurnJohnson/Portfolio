import React from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

const SiteMetaTags = () => {
    const { title, description, image } = useSiteMetadata();
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='title' content={title} />
            <meta name='description' content={description} />

            <meta property='og:type' content='portfolio' />
            <meta property='og:url' content='https://cburnjohnson.com' />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={image} />

            <meta property='twitter:card' content={image} />
            <meta property='twitter:url' content='https://cburnjohnson.com' />
            <meta property='twitter:title' content={title} />
            <meta property='twitter:description' content={description} />
            <meta property='twitter:image' content={image} />
        </Helmet>
    );
};

export default SiteMetaTags;
