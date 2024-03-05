import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BASE_URL} from "../../utils/constants";
import axios from "axios";


export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async (_, thunkAPI) => {
    try {
        const res = await axios(`${BASE_URL}/categories`)
        //console.log(res.data)
        return res.data
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue(e)
    }
})
export const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state, action) => {
            state.isLoading = true;
            console.log(state, "getCategories.pending state")

        })
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.list = action.payload;
            state.isLoading = false;
            console.log(state, "getCategories.fulfilled state")
        })
        builder.addCase(getCategories.rejected, (state, action) => {
            state.isLoading = false;

        })
    }
})
