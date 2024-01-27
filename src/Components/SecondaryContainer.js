import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const allMovies = useSelector((store) => store?.movies);

  return (
    allMovies && (
      <div className="flex">
        <MovieList movies={allMovies?.nowPlayingMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
