import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestProducts, requestProductsDetailsById } from "../../services/api.js";

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

export const apiGetProducts = createAsyncThunk(
    "products/getAll",
    async (_, thunkApi) => {
      try {
        const data = await requestProducts();
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );
