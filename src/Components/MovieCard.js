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
    <div>
      <img
        className="w-32 rounded-md m-4 cursor-pointer"
        src={IMG_CDN + poster_path}
        alt="Movies_poster"
        onClick={getMoviesVideos}
      />
    </div>
  );
};

export default MovieCard;
