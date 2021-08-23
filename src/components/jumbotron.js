import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { ChevronDownIcon } from '@heroicons/react/outline';

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

  const [scrollTop, setScrollTop] = useState(0);
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    const onScroll = ( event ) => {
      setScrollTop(event.target.documentElement.scrollTop);
      setScrolling(event.target.documentElement.scrollTop < scrollTop);
    };
    window.addEventListener("scroll", onScroll);
  }, [scrollTop]);
  
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
        <div className="jumbotron-btn-container">
          <a href="#sunday-stream" className="jumbotron-btn">觀看主日直播</a>
        </div>
      </div>
      <div className="jumbotron-chevron-container">
        <ChevronDownIcon className={scrolling? "jumbotron-chevron-down active" : "jumbotron-chevron-down"}/>
      </div>
    </BackgroundImage>
  );
};

export default Jumbotron;