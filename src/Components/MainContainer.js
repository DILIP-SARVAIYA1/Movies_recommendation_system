import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import { randomInt } from "../Utils/randomNumber";

const MainContainer = () => {
  const backgroundMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  if (!backgroundMovies) return;
  const rndInt = randomInt(1, 19);
  const mainMovies = backgroundMovies[rndInt];
  const { original_title, overview, id } = mainMovies;
  return (
    <div className="w-screen">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
