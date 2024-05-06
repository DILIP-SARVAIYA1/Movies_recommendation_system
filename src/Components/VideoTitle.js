import React from "react";
import { infoLogoSvg, playLogoSvg } from "../Utils/svg";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="md:py-[10%] pb-8 px-4 md:px-8 text-white bg-gradient-to-t from-black -z-10">
      <h1 className="font-bold text-sm md:text-3xl md:my-6">
        {title.length > 40 ? title.slice(0, 40) + "..." : title}
      </h1>
      <p className="text-xs md:text-lg">
        {overview.length > 150 ? overview.slice(0, 150) + "..." : overview}
      </p>
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
