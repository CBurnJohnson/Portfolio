import { useStaticQuery, graphql } from 'gatsby';
export const useSiteMetadata = () => {
    const { site } = useStaticQuery(graphql`
        query SITE_METADATA_QUERY {
            site {
                siteMetadata {
                    title
                    description
                    image
                }
            }
        }
    `);
    return site.siteMetadata;
};
