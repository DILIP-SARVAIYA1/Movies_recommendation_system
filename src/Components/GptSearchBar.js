import React from "react";
import { useSelector } from "react-redux";
import languageConfig from "../Utils/languageConfig";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);

  return (
    <div className="p-[2%] flex justify-center rounded-md">
      <form
        className="w-[95%] md:w-2/4 bg-black bg-opacity-70 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="col-span-9 text-xs md:text-base p-2 m-2 bg-gray-100 outline-none"
          type="text"
          placeholder={languageConfig[langKey].gptSearchBarInputPlaceHolder}
        />
        <button className="col-span-3 text-xs md:text-base m-2 bg-gray-100">
          {languageConfig[langKey].gptSearchBarSearchBtnString}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
