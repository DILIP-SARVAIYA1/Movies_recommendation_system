import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const allMovies = useSelector((store) => store?.movies);

  return (
    allMovies && (
      <div className="text-white bg-black -my-8 md:-my-6">
        <div className="my-4">
          <MovieList
            title={"Now Playing Movies"}
            movies={allMovies?.nowPlayingMovies}
          />
        </div>
        <div className="py-3">
          <MovieList
            title={"Top Rated Movies"}
            movies={allMovies?.topRatedMovies}
          />
        </div>
        <div className="py-3">
          <MovieList
            title={"UpComing Movies"}
            movies={allMovies?.upComingMovies}
          />
        </div>
        <div className="">
          <MovieList
            title={"Popular Movies"}
            movies={allMovies?.popularMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
