import {  configureStore } from "@reduxjs/toolkit";
import {  CategoriesSlice } from "../features/category/categorySlice";
import {  subscriberSlice } from "../features/subscriber/subscriberSlice";




export const store = configureStore({
    reducer: {
        CategoriesSlice:CategoriesSlice.reducer,
        Subscribers:subscriberSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch