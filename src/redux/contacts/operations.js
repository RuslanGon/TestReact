import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://connections-api.goit.global/",
    // headers: {
    //     Authorization: `Bearer ${localStorage.getItem('token')}`
    // }
})  

export const apiGetContacts = createAsyncThunk(
    "contacts/getAll", 
    async (_, thunkApi) => {
        try {
            const { data } = await instance.get('/contacts')
            console.log(data);
            return data
        } catch (error) {
          return thunkApi.rejectWithValue(error.message);
        }
})

export const apiAddContacts = createAsyncThunk(
    "contacts/addNew",
    async (formData, thunkApi) => {
      try {
        const {data} = await instance.post('/contacts', formData);
        // console.log(data);
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
)

export const apiDeleteContact = createAsyncThunk(
    'contacts/delete',
    async (contactId, thunkAPI) => {
      try {
        const { data } = await instance.delete(`/contacts/${contactId}`);
        // console.log(data);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );