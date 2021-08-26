import React from "react";
import { Link } from "gatsby";
import { FaYoutube, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="box bg-gray-800 grid lg:grid-cols-3 lg:items-center">
      <div>
        <p className="p text-gray-300 text-center loose">
          建造榮耀的教會<br></br>
          <span className="text-2xl font-normal">紐約豐收靈糧堂</span>
        </p>
        <p className="p sm text-gray-300 text-center">
          54-47 Little Neck Pkwy, <span className="block md:inline"></span>Little Neck, NY 11362<br></br>
          info@hcny.org<span class="block md:inline md:mx-2"></span>+1(718)715-1730
        </p>
      </div>
      
      <div className="flex justify-center pb-4">
        <Link to="#youtube">
          <FaYoutube className="w-10 h-10 m-2 text-gray-300"/>
        </Link> 
        <Link to="#facebook">
          <FaFacebookSquare className="w-10 h-10 m-2 text-gray-300"/>
        </Link>
      </div>
      <p className="p sm text-gray-300 text-center">  
        &copy; 2021 Harvest Church of New York. <span className="block md:inline lg:block xl:inline"></span>All Rights Reserved<br></br>
        <a href="#termsOfUse">Terms of Use</a>
        <span class="block md:inline md:mx-2"></span>
        <a href="#privacyPolicy">Privacy Policy</a>
      </p>
    </div>
  );
};

export default Footer;