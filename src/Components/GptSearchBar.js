import React, { useRef } from "react";
import { useSelector } from "react-redux";
import languageConfig from "../Utils/languageConfig";
import openai from "../Utils/openAi";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const gptQuery =
    "act as a movies recommendation system and suggest some movie for the query" +
    searchText?.current?.value +
    ". only give me name of 5 movie, comma separated like the example result given ahead. example result: solay,jawan,tiger,gunda raj,c company";

  const handleGptSearch = async () => {
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults.choices);
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
