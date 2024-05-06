import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import languageConfig from "../Utils/languageConfig";
import { API_OPTIONS } from "../Utils/constants";
import { addGptSearchMovies } from "../Store/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const tmdbMovieResult = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json;
  };

  const handleGptSearch = async () => {
    const nData = [searchText?.current?.value];
    const gptData = nData.map((movie) => tmdbMovieResult(movie));
    const resolveResults = await Promise.all(gptData);
    dispatch(
      addGptSearchMovies({ moviesNames: nData, moviesResult: resolveResults })
    );
  };

  return (
    <div className="p-[2%] flex justify-center rounded-md">
      <form
        className="w-[95%] md:w-2/4 bg-black bg-opacity-70 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-9 text-xs md:px-4 md:text-base p-2 m-2 bg-gray-100 outline-none"
          type="text"
          placeholder={languageConfig[langKey].gptSearchBarInputPlaceHolder}
        />
        <button
          className="col-span-3 text-xs md:text-base m-2 bg-gray-100"
          onClick={handleGptSearch}
        >
          {languageConfig[langKey].gptSearchBarSearchBtnString}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
