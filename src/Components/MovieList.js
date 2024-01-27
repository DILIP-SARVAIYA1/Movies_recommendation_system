import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="flex">
      <h1>Title</h1>
      <div className="flex flex-wrap justify-around md:flex-nowrap  overflow-x-auto">
        {movies?.map((movie) => (
          <MovieCard key={movie?.id} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
