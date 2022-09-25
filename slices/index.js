import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    inputSearch: '',
    currentPageValue: 1
}

export const DataSlice = createSlice({
    name: 'dataSlice',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setInputSearch: (state, action) => {
            state.inputSearch = action.payload;
        },
        setCurrentPageValue: (state, action) => {
            state.currentPageValue = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setData, setInputSearch, setCurrentPageValue } = DataSlice.actions

export const dataValue = (state) => state.dataReducer.data;
export const inputSearch = (state) => state.dataReducer.inputSearch;
export const currentPageValue = (state) => state.dataReducer.currentPageValue;

export default DataSlice.reducer