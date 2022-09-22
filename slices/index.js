import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    user: []
}

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        // increment: (state) => {
        //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //     // doesn't actually mutate the state because it uses the Immer library,
        //     // which detects changes to a "draft state" and produces a brand new
        //     // immutable state based off those changes
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
        setUser: (state, action) => {
            console.log("action: ", action);
            state.user = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = userDataSlice.actions

export const userValue = (state) => state.data.user;

export default userDataSlice.reducer