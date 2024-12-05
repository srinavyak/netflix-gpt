import { createSlice } from "@reduxjs/toolkit";

const gptMovieResultSlice = createSlice({
  name: "gptMovieResult",
  initialState: {
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { addGptMovieResult} = gptMovieResultSlice.actions;

export default gptMovieResultSlice.reducer;