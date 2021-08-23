import React from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import YouTube from "react-youtube";

const Card = ({ mediaType, mediaData, children }) => {

  return (
    <div className="card-container">
      <div className="card-right">
        {mediaType === "image" && mediaData &&
          <GatsbyImage
            className="card-image"
            image={getImage(mediaData)}
            alt="Card Image"
          />
        }
        {mediaType === "video" && mediaData &&
          <div className="aspect-w-16 aspect-h-9">
            <YouTube
              videoId={mediaData}
              opts={{
                playerVars: {
                  autoplay: 0
                }
              }}
              className="w-full h-full"
            />
          </div>
        }
      </div>
      <div className="card-left">
        { children }
      </div>
    </div>
  );
};

export default Card;