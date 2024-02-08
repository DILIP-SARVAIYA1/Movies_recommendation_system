import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptResultsPage = () => {
  const { moviesNames, moviesResult } = useSelector((store) => store.gpt);
  // console.log(moviesResult);
  if (!moviesResult) return null;
  return (
    <div className=" bg-black text-white p-4 pt-12">
      {moviesNames.map((movie, index) => (
        <MovieList title={movie} movies={moviesResult[index].results} />
      ))}
    </div>
  );
};

export default GptResultsPage;
