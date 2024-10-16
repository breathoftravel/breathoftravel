import React from "react";
import FacebookOutlineIcon from "@/components/icons/FacebookOutline";
import XOutlineIcon from "@/components/icons/XOutline";
import InstagramOutlineIcon from "@/components/icons/InstagramOutline";
import TiktokOutlineIcon from "@/components/icons/TiktokOutline";

export const Footer = () => {

  return (
      <div className="shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-google-plus-g"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-vimeo-v"></i></a>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-gem text-2xl"></i>
            <span className="text-xl font-semibold">Breath of travel</span>
          </div>
          <div className="flex items-center space-x-4 relative">
            <a href="#"><FacebookOutlineIcon className="w-4 h-4"/></a>
            <a href="#"><XOutlineIcon className="w-4 h-4"/></a>
            <a href="#"><InstagramOutlineIcon className="w-4 h-4"/></a>
            <a href="#"><TiktokOutlineIcon className="w-4 h-4"/></a>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-2">
          <div className="container mx-auto px-4 py-2 flex justify-center items-center">
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-700">HOME</a>
              <a href="#" className="text-gray-700">PRODUCTS</a>
              <a href="#" className="text-gray-700">ABOUT US</a>
              <a href="#" className="text-gray-700">PRICING</a>
              <a href="#" className="text-gray-700">BLOG</a>
              <a href="#" className="text-gray-700">CONTACT</a>
            </nav>
            <a href="#"><i className="fas fa-search"></i></a>
          </div>
        </div>
      </div>
  );
}
