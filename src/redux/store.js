import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./Products.Slice";

export const store = configureStore({
    reducer:{
        [ProductSlice.name]:ProductSlice.reducer
    }
})