import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestProductsDetailsById } from "../../services/api.js";

export const apiRequestProductDetailsById = createAsyncThunk(
  "productDetails/get",
  async (productId, thunkApi) => {
    try {
      const data = await requestProductsDetailsById(productId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
