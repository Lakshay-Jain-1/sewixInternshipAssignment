import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./addToCart";
const store = configureStore({
reducer:{
    addTocart:cartSlice
}
})

export default store