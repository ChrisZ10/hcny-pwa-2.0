import React from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const apiKey = "AIzaSyCbRnhNO-Nh2aIWKg99DzdCc_e3L7M7rUs";

const Service = ({ google }) => {

  const geo = {
    lat: 40.76662245529929,
    lng: -73.72475775191116
  };

  return (
    <div className="box bg-gray-300">
      <h1 className="h1 dark">聚會信息</h1>
      <div>
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
          // containerStyle={{ position:"static" }}
          // style={{ width:"100%", height:"100%" }}
        >
          <Marker 
            title="54-47 Little Neck Parkway, Little Neck, NY 11362"
            name="紐約豐收靈糧堂"
            position={geo}
            onClick={() => {
              window.open("https://goo.gl/maps/zWJEsDiaPZDmrwNY6");
            }}
          />
        </Map>        
      </div>
    </div>    
  );
};

export default GoogleApiWrapper({apiKey})(Service);