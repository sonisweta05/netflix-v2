import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovie: null,
    movieNames: null,
    movieResults: null,
  },

  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult:(state,action) => {
      const {movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;

    }
  },
});
export default gptSlice.reducer;
export const {toggleGptSearchView,addGptMovieResult} = gptSlice.actions;
