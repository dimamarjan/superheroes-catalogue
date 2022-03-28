import { configureStore } from "@reduxjs/toolkit";
import superheroesReducer from "../slices/superheroes/superheroes-slice";

export const store = configureStore({
  reducer: {
    superheroes: superheroesReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
