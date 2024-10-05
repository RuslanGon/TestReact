import { createSlice } from "@reduxjs/toolkit";
import { apiCarsByQuery, apiRequestCars } from "./operations.js";

const INITIAL_STATE = {
    cars: null,
    loading: false,
    error: false,
    query: '',
  };

  const carsSlice = createSlice({
    name: "cars",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
        builder
        .addCase(apiRequestCars.pending, (state) => {
          state.loading = true; 
          state.error = false; 
        })
        .addCase(apiRequestCars.fulfilled, (state, action) => {
          state.loading = false; 
          state.cars = action.payload; 
        })
        .addCase(apiRequestCars.rejected, (state) => {
          state.loading = false; 
          state.error = true; 
        })


        .addCase(apiCarsByQuery.pending, (state) => {
            state.loading = true; 
            state.error = false; 
          })
          .addCase(apiCarsByQuery.fulfilled, (state, action) => {
            state.loading = false; 
            // state.cars = action.payload.items; 
            state.query = action.payload.query
          })
          .addCase(apiCarsByQuery.rejected, (state) => {
            state.loading = false; 
            state.error = true; 
          })
      },
    
  });
  
  export const carsReducer = carsSlice.reducer;



  