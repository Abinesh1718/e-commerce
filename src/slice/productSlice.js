import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


let initialState = {
    data: [],
    // status: 'idle',

}

export const getProducts = createAsyncThunk('product/get', async () => {
    let value = await fetch("https://fakestoreapi.com/products")
    let valueData = await value.json()
    return valueData
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    // reducers: {
    //     fetchProducts(state, action) {
    //         state.data = action.payload
    //     }
    // },
    extraReducers: (builder) => {
        builder.
            addCase(getProducts.pending, (state, action) => {

                state.status = 'Loading'
            })
            .
            addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = 'idle'
            })
            . 
            addCase(getProducts.rejected, (state, action) => {
                state.status = 'Error'
            })


    }
})



export default productSlice.reducer;
export const { fetchProducts } = productSlice.actions



