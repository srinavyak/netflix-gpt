import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import gptMovieResultReducer from "./gptMovieResultSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt : gptReducer,
    config: configReducer,
    gptResult:gptMovieResultReducer
  },
});

export default appStore;