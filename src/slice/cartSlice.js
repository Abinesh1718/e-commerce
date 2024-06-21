import { createSlice } from "@reduxjs/toolkit";


let initialState = []

    
const createSlices = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload)

        }, remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        }

    }

})


export default createSlices.reducer;
export const { add, remove } = createSlices.actions
