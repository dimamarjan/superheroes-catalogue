import { createSlice } from "@reduxjs/toolkit";
import superheroesOperations from "./superheroes-operations";

const initialState = {
  data: [],
  status: "idle",
  err: null,
};

const superheroesSlice = createSlice({
  name: "superheroes",
  initialState,

  extraReducers: {
    [superheroesOperations.getSuperheroes.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.status = "fulfilled";
      state.err = null;
    },
    [superheroesOperations.getSuperheroes.pending]: (state) => {
      state.status = "pending";
    },
    [superheroesOperations.getSuperheroes.rejected]: (state) => {
      state.status = null;
      state.err = "ERROR";
    },

    [superheroesOperations.getSuperheroeById.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.status = "fulfilled";
      state.err = null;
    },
    [superheroesOperations.getSuperheroeById.pending]: (state) => {
      state.status = "pending";
    },
    [superheroesOperations.getSuperheroeById.rejected]: (state) => {
      state.status = null;
      state.err = "ERROR";
    },

    [superheroesOperations.addSuperheroes.fulfilled]: (state, _) => {
      state.status = "idle";
      state.err = null;
    },
    [superheroesOperations.addSuperheroes.pending]: (state) => {
      state.status = "pending";
    },
    [superheroesOperations.addSuperheroes.rejected]: (state) => {
      state.status = null;
      state.err = "ERROR";
    },

    [superheroesOperations.delSuperheroe.fulfilled]: (state, _) => {
      state.status = "idle";
      state.err = null;
    },
    [superheroesOperations.delSuperheroe.pending]: (state) => {
      state.status = "pending";
    },
    [superheroesOperations.delSuperheroe.rejected]: (state) => {
      state.status = null;
      state.err = "ERROR";
    },

    [superheroesOperations.updateSuperheroes.fulfilled]: (state, _) => {
      state.status = "idle";
      state.err = null;
    },
    [superheroesOperations.updateSuperheroes.pending]: (state) => {
      state.status = "pending";
    },
    [superheroesOperations.updateSuperheroes.rejected]: (state) => {
      state.status = null;
      state.err = "ERROR";
    },

    [superheroesOperations.updateDataSuperheroes.fulfilled]: (state, _) => {
      state.status = "idle";
      state.err = null;
    },
    [superheroesOperations.updateDataSuperheroes.pending]: (state) => {
      state.status = "pending";
    },
    [superheroesOperations.updateDataSuperheroes.rejected]: (state) => {
      state.status = null;
      state.err = "ERROR";
    },
  },
});

export default superheroesSlice.reducer;
