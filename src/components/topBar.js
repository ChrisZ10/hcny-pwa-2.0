import React from "react";
import { SiYoutube } from "react-icons/si";

const TopBar = () => {
  return (
    <div className="grid lg:grid-cols-3 bg-primary mx-4 my-16 lg:w-80vw lg:mx-auto">
        <div className="px-8 py-4 border-b border-white lg:border-b-0 lg:border-r">
          <h3 className="text-lg font-light">中文主日崇拜</h3>
          <p className="text-sm font-light">
            <span>SUN 10:30AM</span>
            <span className="block">
              實體聚會 + 
              <a href="#chinese">
                <SiYoutube className="inline ml-2 mr-1 relative bottom-0.5"/>YouTube直播
              </a>
            </span>
          </p>
        </div>
        <div className="px-8 py-4 border-b border-white lg:border-b-0 lg:border-r">
          <h3 className="text-lg font-light">英文主日崇拜</h3>
          <p className="text-sm font-light">
            <span>SUN 10:30AM</span>
            <span className="block">
              實體聚會 + 
              <a href="#english">
                <SiYoutube className="inline ml-2 mr-1 relative bottom-0.5"/>YouTube直播
              </a>
            </span>
          </p>
        </div>
        <div className="px-8 py-4">
          <h3 className="text-lg font-light">兒童主日崇拜</h3>
          <p className="text-sm font-light">
            <span>SUN 10:30AM</span>
            <span className="block">
              <a href="#zoom">
                Zoom線上聚會
              </a>
            </span>
          </p>
        </div>
      </div>
  );
};

export default TopBar;