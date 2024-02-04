import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptResultsPage from "./GptResultsPage";
import { APP_BG_IMG } from "../Utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img
        className="h-screen w-full absolute top-0 -z-50 object-cover"
        src={APP_BG_IMG}
        alt="App Background"
      />
      <GptSearchBar />
      <GptResultsPage />
    </div>
  );
};

export default GptSearch;
