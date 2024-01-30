import React from "react";
import { API_OPTIONS, IMG_CDN } from "../Utils/constants";
import { useNavigate } from "react-router-dom";
import { addAllNowPlayingMoviesVideos } from "../Store/moviesSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ data }) => {
  const { id, poster_path } = data;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getMovieVideos = async (id) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addAllNowPlayingMoviesVideos(json?.results));
  };
  const getMoviesVideos = () => {
    navigate("/watch");
    getMovieVideos(id);
  };
  return (
    <img
      className="w-24 md:w-32 rounded-md mr-6 my-6 cursor-pointer hover:scale-105 shadow-md shadow-gray-800"
      src={IMG_CDN + poster_path}
      alt="Movies_poster"
      onClick={getMoviesVideos}
    />
  );
};

export default MovieCard;
