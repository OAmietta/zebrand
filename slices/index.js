import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: []
}

export const DataSlice = createSlice({
    name: 'dataSlice',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setData } = DataSlice.actions

export const dataValue = (state) => state.dataReducer.data;

export default DataSlice.reducer