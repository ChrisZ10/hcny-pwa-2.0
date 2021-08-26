import React from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { StaticImage } from "gatsby-plugin-image";

const apiKey = "AIzaSyCbRnhNO-Nh2aIWKg99DzdCc_e3L7M7rUs";

const Service = ({ google }) => {

  const geo = {
    lat: 40.76662245529929,
    lng: -73.72475775191116
  };

  return (
    <div className="box bg-primary-dark">
      
      <h1 className="h1 light mb-6 lg:mb-8">聚會信息<span></span></h1>
      
      <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-0 lg:gap-x-16 xl:gap-x-24">
        
        <div>
          <div className="aspect-w-16 aspect-h-9 w-full">
            <Map 
              google={ google }
              initialCenter={ geo }
              zoom={18}
              draggable={true}
              scrollwheel={true}
              zoomControl={false}
              mapTypeControl={false}
              streetViewControl={false}
              fullscreenControl={false}
              containerStyle={{ position:"static", width:"100%", height:"100%" }}
            >
              <Marker 
                title="54-47 Little Neck Pkwy, Little Neck, NY 11362"
                name="紐約豐收靈糧堂"
                position={geo}
                onClick={() => {
                  window.open("https://goo.gl/maps/zWJEsDiaPZDmrwNY6");
                }}
              />
            </Map>
          </div>
          <p className="h3 light mt-8">
            中文堂：週日10:30AM<br></br>
            英文堂：週日10:30AM<br></br>
            54-47 Little Neck Pkwy, <span className="block sm:inline">Little Neck, NY 11362</span>
          </p>       
        </div>
        
        <div>
          <div className="aspect-w-16 aspect-h-9 w-full">
            <StaticImage 
              src="../assets/laptop.jpg"
              alt="Worship Online"
              placeholder="blurred"
            />
          </div>  
          <p className="h3 light mt-8">
            線上主日崇拜：YouTube直播<br></br>
            兒童主日崇拜：<span className="block sm:inline">Zoom ID: 564 403 7557</span>
          </p>
        </div>             
      </div>
    </div>    
  );
};

export default GoogleApiWrapper({apiKey})(Service);