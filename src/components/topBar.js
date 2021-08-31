import React from "react";
import { SiYoutube } from "react-icons/si";

const TopBar = () => {
  return (
    <div className="top-bar-container">
        <div className="top-bar-item-container underlined">
          <h3 className="top-bar-item-title">中文主日崇拜</h3>
          <p className="top-bar-item-subtitle">
            <span>SUN 10:30AM</span>
            <span className="block">
              實體聚會 + 
              <a href="#chinese">
                <SiYoutube className="top-bar-item-inline-icon"/>YouTube直播
              </a>
            </span>
          </p>
        </div>
        <div className="top-bar-item-container underlined">
          <h3 className="top-bar-item-title">英文主日崇拜</h3>
          <p className="top-bar-item-subtitle">
            <span>SUN 10:30AM</span>
            <span className="block">
              實體聚會 + 
              <a href="#english">
                <SiYoutube className="top-bar-item-inline-icon"/>YouTube直播
              </a>
            </span>
          </p>
        </div>
        <div className="top-bar-item-container">
          <h3 className="top-bar-item-title">兒童主日崇拜</h3>
          <p className="top-bar-item-subtitle">
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