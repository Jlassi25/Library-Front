import {  configureStore } from "@reduxjs/toolkit";
import {  CategoriesSlice } from "../features/category/categorySlice";




export const store = configureStore({
    reducer: {
        CategoriesSlice:CategoriesSlice.reducer
    }
})