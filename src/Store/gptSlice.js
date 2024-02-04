import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showHideGptSearch: false,
  },
  reducers: {
    setShowHideGptSearch: (state) => {
      state.showHideGptSearch = !state.showHideGptSearch;
    },
  },
});

export const { setShowHideGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
