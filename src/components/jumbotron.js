import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const Jumbotron = () => {

  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file (relativePath: {eq: "assets/wheat.jpg"}) {
          childImageSharp {
            gatsbyImageData (
              placeholder: BLURRED
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  );
  const image = getImage(placeholderImage);
  const bgImage = convertToBgImage(image);
  
  return (
    <BackgroundImage
      {...bgImage}
      preserveStackingContext
      className="jumbotron-bg"
    >
      <div className="jumbotron-inner">
        <h2 className="jumbotron-subtitle">歡迎來到</h2>
        <h1 className="jumbotron-title">
          <span>紐約豐收</span>
          <span>靈糧堂</span>
        </h1>
      </div>
    </BackgroundImage>
  );
};

export default Jumbotron;