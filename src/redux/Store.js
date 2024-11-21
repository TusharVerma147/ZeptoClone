import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice.js'


export const Store = configureStore({
    reducer:{
     cart: cartReducer,
    }
})