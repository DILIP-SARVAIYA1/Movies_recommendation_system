import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="relative md:-top-10 md:m-4 ">
      <h1 className="text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex md:flex-nowrap ">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
