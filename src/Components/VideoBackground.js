import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMoviesTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.movieTrailer);
  useMovieTrailer(movieId);
  return (
    <div className="absolute top-0  md:top-[-120px] -z-20">
      <iframe
        aria-disabled
        className="aspect-video w-screen"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?controls=0&autoplay=1&mute=1&&showInfo=0&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
