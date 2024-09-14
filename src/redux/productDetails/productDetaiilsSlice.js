import { createSlice } from "@reduxjs/toolkit";
import { apiRequestProductDetailsById } from "./operations.js";

const INITIAL_STATE = {
    productDetails: null,
    isLoading: false,
    isError: false
};

const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState: INITIAL_STATE,
  
    extraReducers: (builder) => {
      builder
        .addCase(apiRequestProductDetailsById.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
        })
        .addCase(apiRequestProductDetailsById.fulfilled, (state, action) => {
          state.isLoading = false;
          state.productDetails = action.payload;
        })
        .addCase(apiRequestProductDetailsById.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
        });
    }
  });

export const productDetailsReducer = productDetailsSlice.reducer;
