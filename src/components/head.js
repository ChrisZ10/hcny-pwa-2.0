import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const Head = ({ subtitle }) => {
  const res = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Helmet>
      <title>{ `${subtitle} | ${res.title}` }</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Helmet>
  );
};

export default Head;