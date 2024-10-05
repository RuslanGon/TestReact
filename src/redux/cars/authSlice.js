import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cars: '',
    loading: null,
    error: null,
    query: '',
  };

  const carsSlice = createSlice({
    name: "cars",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
        builder
    }
  });
  
  export const carsReducer = carsSlice.reducer;



  