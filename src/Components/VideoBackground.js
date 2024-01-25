import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMoviesTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.movieTrailer);
  useMovieTrailer(movieId);
  console.log(trailerVideo?.key);

  return (
    <div className="absolute top-0 -z-20">
      <iframe
        className="aspect-video w-screen "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?controls=0&autoplay=1&mute=1&loop=1?rel=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
