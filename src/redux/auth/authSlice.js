import { createSlice } from "@reduxjs/toolkit";
import { apiLogin, apiLogout, apiRefreshUser, apiRegistor } from "./operations.js";

const INITIAL_STATE = {
   isSignedIn: false,
   userData: null,
   token: null,
   isLoading: false,
   isError: false
  };

  const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
        builder
          .addCase(apiRegistor.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
          })
          .addCase(apiRegistor.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSignedIn = true;
            state.userData = action.payload.user
            state.token = action.payload.token
          })
          .addCase(apiRegistor.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
          })


          .addCase(apiLogin.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
          })
          .addCase(apiLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSignedIn = true;
            state.userData = action.payload.user
            state.token = action.payload.token
          })
          .addCase(apiLogin.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
          })


          .addCase(apiRefreshUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
          })
          .addCase(apiRefreshUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSignedIn = true;
            state.userData = action.payload
          })
          .addCase(apiRefreshUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
          })


          .addCase(apiLogout.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
          })
          .addCase(apiLogout.fulfilled, () => {
            return INITIAL_STATE
          })
          .addCase(apiLogout.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
          })
      }
  });
  
  export const authReducer = authSlice.reducer;



  