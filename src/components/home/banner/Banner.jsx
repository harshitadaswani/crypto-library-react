import React from "react";
import "./banner.css";
import { FaPlay } from "react-icons/fa";

export const Banner = () => {
  return (
    <div className="flex flex-center">
      <div className="p-s m-s banner-container relative">
        <img
          src="https://assets.website-files.com/6189b6da0e23c6551df73ab9/618acd4a0b693413290a7435_image-video-coin-template-p-2000.jpeg"
          className="banner br-m"
        />
        <div className="play-container br-m p-s m-s flex flex-center">
          <FaPlay size={45} color={"white"} />
        </div>
      </div>
    </div>
  );
};
