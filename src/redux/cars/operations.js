import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestCars, requestCarsByQuery } from "../../servicesCar/api.js";

export const apiRequestCars = createAsyncThunk(
  "cars/getCars",
  async (_, thunkApi) => {
    try {
      const data = await requestCars();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiCarsByQuery = createAsyncThunk(
    "cars/query",
    async (query, thunkApi) => {
      try {
        const data = await requestCarsByQuery(query);
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
);
