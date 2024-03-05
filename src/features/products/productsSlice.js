import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/constants";


export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/products`)
            //console.log(res.data)
            return res.data
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue(e)
        }
    })
const productsSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        filtered: [],
        related: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
            console.log(state, "getCategories.pending state")

        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.list = action.payload;
            state.isLoading = false;
            console.log(state, "getCategories.fulfilled state")
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;

        })
    }
})

export default productsSlice.reducer
