import { configureStore } from "@reduxjs/toolkit";
import cartslice from "../slice/cartSlice";
import productSlice from "../slice/productSlice";



const store = configureStore({
    reducer: {
        carts: cartslice,
        product: productSlice
    }
})

export default store