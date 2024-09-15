import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
    // baseURL: 'https://connections-api.goit.global.com'
})

export const setToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`
} 

export const cleanToken = () => instance.defaults.headers.common.Authorization = ''

export const apiRegistor = createAsyncThunk(
    "auth/register", 
    async (formData, thunkApi) => {
        try {
            const { data } = await instance.post('/users/signup', formData)
            console.log(data);
            return data
        } catch (error) {
          return thunkApi.rejectWithValue(error.message);
        }
})