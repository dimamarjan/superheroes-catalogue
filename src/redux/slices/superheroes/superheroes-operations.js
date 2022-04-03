import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const HEROE_URL = process.env.REACT_APP_SERVER_URL;
const HEROE_URL_UPD = process.env.REACT_APP_SERVER_URL_UPD;
const HEROE_URL_DATA_UPD = process.env.REACT_APP_SERVER_URL_DATA_UPD;

const getSuperheroes = createAsyncThunk("superheroes/get", async () => {
  const { data } = await axios.get(HEROE_URL);
  return data;
});

const getSuperheroeById = createAsyncThunk("superheroe/get", async (id) => {
  const { data } = await axios.get(`${HEROE_URL}/${id}`);
  return data;
});

const addSuperheroes = createAsyncThunk("superheroe/create", async (req) => {
  const { data } = await axios.post(HEROE_URL, req, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
});

const updateSuperheroes = createAsyncThunk("superheroe/update", async (req) => {
  const { data } = await axios.patch(HEROE_URL_UPD, req, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
});

const updateDataSuperheroes = createAsyncThunk(
  "superheroe/updateData",
  async (req) => {
    const { data } = await axios.patch(HEROE_URL_DATA_UPD, req);
    return data;
  }
);

const delSuperheroe = createAsyncThunk("superheroes/delete", async (id) => {
  await axios.delete(`${HEROE_URL}/${id}`);
  return;
});

const operations = {
  getSuperheroes,
  addSuperheroes,
  getSuperheroeById,
  delSuperheroe,
  updateSuperheroes,
  updateDataSuperheroes,
};
export default operations;
