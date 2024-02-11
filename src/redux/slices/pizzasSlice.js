import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchByIdStatus', async (params) => {
    const {order, serach, sort, categoriId, currentPage} = params;

    const res = await axios.get(
        `https://65ad515fadbd5aa31be090e6.mockapi.io/items?page=${currentPage}&limit=4&${categoriId > 0 ? `category=${categoriId}` : ''}&sortBy=${sort.replace('-', '')}&order=${order}${serach}`
    );
    return res.data
});


const initialState = {
    items: [],
    status: 'loading'
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
      builder
         .addCase(fetchPizzas.pending, (state) => {
            state.status = "loading"
            state.items = []
         })
         .addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = "success"
         })
         .addCase(fetchPizzas.rejected, (state) => {
            state.status = "error"
            state.items = []
         })
   }
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;