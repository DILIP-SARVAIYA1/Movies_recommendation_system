import React from "react";
import { infoLogoSvg, playLogoSvg } from "../Utils/svg";
import { shortString } from "../Utils/randomNumber";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="aspect-video -mt-16 pt-24 md:pt-[25%] px-5 md:px-28 text-white bg-gradient-to-tr from-black">
      <h1 className="font-bold text-md md:text-3xl md:mb-6">
        {shortString(title, 40)}
      </h1>
      <p className="md:text-lg">{shortString(overview, 150)}</p>
      <div className="mt-4 flex text-sm md:text-lg">
        <button className=" flex gap-1 items-center px-2 md:px-6 md:py-2 py-1 bg-gray-500 rounded-md bg-opacity-40">
          {playLogoSvg} Play
        </button>
        <button className="flex gap-1 items-center ml-3 px-2 md:px-6 md:py-2 bg-gray-700 rounded-md bg-opacity-70 text-white">
          {infoLogoSvg} More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
