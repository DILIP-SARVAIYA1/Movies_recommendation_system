import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../Store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    getUpComingMovies();
  }, []);
};
export default useUpComingMovies;
