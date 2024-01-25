import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNovPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNovPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
