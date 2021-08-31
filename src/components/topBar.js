import React from "react";
import { SiYoutube } from "react-icons/si";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <a href="#chinese">
          <div className="top-bar-item-container underlined">
            <h3 className="top-bar-item-title">中文主日崇拜</h3>
            <p className="top-bar-item-subtitle">
              <span>SUN 10:30AM</span>
              <span className="top-bar-item-span">
                實體聚會 + 
                <SiYoutube className="top-bar-item-inline-icon"/>YouTube直播
              </span>
            </p>
          </div>
        </a>
        <a href="#english">
          <div className="top-bar-item-container underlined">
            <h3 className="top-bar-item-title">英文主日崇拜</h3>
            <p className="top-bar-item-subtitle">
              <span>SUN 10:30AM</span>
              <span className="top-bar-item-span">
                實體聚會 +                 
                <SiYoutube className="top-bar-item-inline-icon"/>YouTube直播
              </span>
            </p>
          </div>
        </a>
        <a href="#zoom">
          <div className="top-bar-item-container">
            <h3 className="top-bar-item-title">兒童主日崇拜</h3>
            <p className="top-bar-item-subtitle">
              <span>SUN 10:30AM</span>
              <span className="top-bar-item-span">
                Zoom線上聚會
              </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TopBar;