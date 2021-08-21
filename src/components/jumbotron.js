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
      className="h-screen"
    >
      <div class="h-screen grid place-content-center">
        <h1 className="text-9xl text-white font-bold">Hello World</h1>
      </div>
    </BackgroundImage>
  );
};

export default Jumbotron;