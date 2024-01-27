import React from "react";
import { useSelector } from "react-redux";

const Watch = () => {
  const videosData = useSelector(
    (store) => store?.movies?.allNowPlayingMoviesVideos
  );

  console.log(videosData);

  return (
    videosData && (
      <div className="absolute bg-black bg-opacity-90 top-0 pt-16 md:pt-[8%] -z-10">
        <div className="w-screen ">
          <iframe
            aria-disabled
            className="aspect-video w-screen md:w-3/5 mx-auto shadow-2xl"
            src={
              "https://www.youtube.com/embed/" +
              videosData[0]?.key +
              "?&autoplay=1&mute=1&&showInfo=0&loop=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {videosData.map((video) => (
          <div className="my-4 md:flex md:flex-wrap w-screen">
            <iframe
              aria-disabled
              className="aspect-video w-screen md:w-1/4 shadow-2xl"
              src={"https://www.youtube.com/embed/" + video?.key}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    )
  );
};

export default Watch;
