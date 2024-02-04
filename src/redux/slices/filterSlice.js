import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(stete, action) {
            stete.categoryId = action
        }
    }
});

export const {categoryId} = filterSlice.actions;

export default filterSlice.reducer;