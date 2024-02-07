import React from "react";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpComingMovies from "../Hooks/useUpComingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const handleGptSearch = useSelector((store) => store.gpt?.showHideGptSearch);
  const backgroundMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return handleGptSearch ? (
    <GptSearch />
  ) : backgroundMovies ? (
    <div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  ) : (
    <div className="bg-black relative w-full h-screen -z-20  ">
      <div className=" relative -top-24 w-full h-screen flex justify-center items-center bg-black bg-opacity-90 mb-28 -z-10">
        <div className="">
          <span className="loader"></span>
        </div>
      </div>
    </div>
  );
};

export default Browse;
