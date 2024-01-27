import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    allNowPlayingMoviesVideos: null,
    movieTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addAllNowPlayingMoviesVideos: (state, action) => {
      state.allNowPlayingMoviesVideos = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addAllNowPlayingMoviesVideos,
} = moviesSlice.actions;
export default moviesSlice.reducer;
