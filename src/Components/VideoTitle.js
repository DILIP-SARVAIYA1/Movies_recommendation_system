import React from "react";
import { infoLogoSvg, playLogoSvg } from "../Utils/svg";
import { shortString } from "../Utils/randomNumber";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="py-[5%] md:py-[11%]  px-5 md:px-28 text-white bg-gradient-to-t from-black -z-10">
      <h1 className="font-bold text-sm md:text-3xl md:my-6">
        {shortString(title, 40)}
      </h1>
      <p className="text-xs md:text-lg">{shortString(overview, 150)}</p>
      <div className="mt-4 flex text-sm md:text-lg">
        <button className=" flex gap-1 items-center px-2 md:px-6 md:py-2  bg-gray-500 rounded-md bg-opacity-40">
          {playLogoSvg} Play
        </button>
        <button className="flex gap-1 items-center ml-3 px-2 md:px-6 md:py-2 bg-gray-700 rounded-md bg-opacity-70">
          {infoLogoSvg} More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
