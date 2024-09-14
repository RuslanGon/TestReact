import { createAsyncThunk } from "@reduxjs/toolkit";

export const apiRequestProductDetailsById = createAsyncThunk(
    'productDetails/get'
)