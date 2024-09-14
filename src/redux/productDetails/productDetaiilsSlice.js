import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    productDetails: null,
    isLoading: false,
    isError: false
};

const productDetailsSlice = createSlice({
  name: "productDetails",

  initialState: INITIAL_STATE,
});

export const productDetailsReducer = productDetailsSlice.reducer;
