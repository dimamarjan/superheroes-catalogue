import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getSuperheroes = createAsyncThunk("superheroes/get", async () => {
  const { data } = await axios.get(
    "https://superheroe-db-server.herokuapp.com/api/heroes"
  );
  return data;
});

const getSuperheroeById = createAsyncThunk("superheroe/get", async (id) => {
  const { data } = await axios.get(
    `https://superheroe-db-server.herokuapp.com/api/heroes/${id}`
  );
  return data;
});

const addSuperheroes = createAsyncThunk("superheroe/post", async (req) => {
  const { data } = await axios.post(
    "https://superheroe-db-server.herokuapp.com/api/heroes",
    req,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
});

const updateSuperheroes = createAsyncThunk("superheroe/post", async (req) => {
  const { data } = await axios.patch(
    `https://superheroe-db-server.herokuapp.com/api/heroes/update`,
    req,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
});

const updateDataSuperheroes = createAsyncThunk(
  "superheroe/post",
  async (req) => {
    const { data } = await axios.patch(
      `https://superheroe-db-server.herokuapp.com/api/heroes/updateHeroe`,
      req
    );
    return data;
  }
);

const delSuperheroe = createAsyncThunk("superheroes/delete", async (id) => {
  await axios.delete(
    `https://superheroe-db-server.herokuapp.com/api/heroes/${id}`
  );
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
