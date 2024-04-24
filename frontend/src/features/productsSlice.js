
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items:[],
    status:null,
}

//  this function is action creater  createAsyncThunk  to fetch data
export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        const response = await axios.get("http://localhost:5000/products");
        return response?.data;
    }
);


//  slice is logic containing reducers and actions in one file 
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsFetch.pending, (state) => {
                state.status = "pending";
            })
            .addCase(productsFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(productsFetch.rejected, (state) => {
                state.status = "rejected";
            });
    },
  });
  
  export default productsSlice.reducer;
