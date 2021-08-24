import { graphql, useStaticQuery } from "gatsby";

export const useConfig = () => {
  const config = useStaticQuery(
    graphql`
      query {
        allMongodbHcnydbConfigurations {
          edges {
            node {
              sermonYoutubeId
            }
          }
        }
      }
    `
  );
  return config.allMongodbHcnydbConfigurations.edges[0].node;
};