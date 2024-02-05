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
            stete.categoryId = action.payload;
        },
        setSort(stete, action) {
            stete.sort = action.payload;
        }
    }
});

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;