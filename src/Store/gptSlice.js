import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showHideGptSearch: false,
    moviesNames: null,
    moviesResult: null,
  },
  reducers: {
    setShowHideGptSearch: (state) => {
      state.showHideGptSearch = !state.showHideGptSearch;
    },
    addGptSearchMovies: (state, action) => {
      const { moviesNames, moviesResult } = action.payload;
      state.moviesNames = moviesNames;
      state.moviesResult = moviesResult;
    },
  },
});

export const { setShowHideGptSearch, addGptSearchMovies } = gptSlice.actions;
export default gptSlice.reducer;
