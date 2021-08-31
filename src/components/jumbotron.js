import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { SiYoutubetv } from "react-icons/si";

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
        <h2 className="jumbotron-subtitle">建造榮耀的教會</h2>
        <h1 className="jumbotron-title">
          <span>紐約豐收</span>
          <span>靈糧堂</span>
        </h1>
        <div className="jumbotron-btn-container">
          <a href="#sunday-stream" className="jumbotron-btn">
            <span><SiYoutubetv className="inline relative bottom-0.5 mr-2 w-6 h-6"/></span>觀看主日直播
          </a>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Jumbotron;