import { configureStore } from "@reduxjs/toolkit";
import  cartSlice   from "../features/addToCart";
const store = configureStore({
reducer:{
    addTocart:cartSlice
}
})

export default store