import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { ChevronDownIcon } from '@heroicons/react/outline';

const Header = () => {

  const [hidden, setHidden] = useState(true); // if true, hide full navbar
  const [toggled, setToggled] = useState(false); // if true, transform toggler from burger to cross
  const [collapsed, setCollapsed] = useState(true); // if true, collapse dropdown menu. Work with index
  const [index, setIndex] = useState(-1); // show dropdown menu of nav item at index. Work with collapsed

  return (
    <nav className="absolute inset-0 z-10 w-full h-24 bg-white">
      <div className="navbar-container">
        <div className="h-16 w-16">
          <StaticImage 
            src = "../assets/logo.png"
            alt = "Church Logo"
            placeholder = "none"
            layout = "constrained"
            onClick = {() => {
              navigate("/");
            }}
          />
        </div>

        <ul className={hidden? "navbar-nav" : "navbar-nav active"}>
            <li
              onMouseEnter={() => {
                if (window.innerWidth >= 768) {
                  setCollapsed(true);
                  setIndex(0);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 768) {
                  setCollapsed(false);
                  setIndex(-1);
                }
              }}
            >
              <div className="nav-item">
                <Link to="#new-friends" className="nav-link">新朋友？</Link>
                <ChevronDownIcon className="nav-chevron-down" />
              </div>
            </li>
            <li
              onMouseEnter={() => {
                if (window.innerWidth >= 768) {
                  setCollapsed(true);
                  setIndex(1);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 768) {
                  setCollapsed(false);
                  setIndex(-1);
                }
              }}
            >
              <div className="nav-item">
                <Link to="#get-involved" className="nav-link">豐收大家庭</Link>
                <ChevronDownIcon className="nav-chevron-down" />
              </div>
            </li>
            <li
              onMouseEnter={() => {
                if (window.innerWidth >= 768) {
                  setCollapsed(true);
                  setIndex(2);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 768) {
                  setCollapsed(false);
                  setIndex(-1);
                }
              }}
            >
              <div className="nav-item">
                <Link to="#devotion-and-courses" className="nav-link">靈修裝備</Link>
                <ChevronDownIcon className="nav-chevron-down" />
              </div> 
            </li>
            <li>
              <div className="nav-item">
                <Link to="#offering" className="nav-link">奉獻</Link>
              </div> 
            </li>
        </ul>

        <div 
          role="button"
          className={toggled? "navbar-toggler toggled" : "navbar-toggler"}
          onClick={() => {
            setHidden(!hidden);
            setToggled(!toggled);
            setCollapsed(!collapsed);
            setIndex(-1);
          }}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>  
      </div>
    </nav>
  );
};

export default Header;