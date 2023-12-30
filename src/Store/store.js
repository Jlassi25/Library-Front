import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createCat, deleteCat, CategoriesSlice } from "../features/category/categorySlice";


const rootReducer = combineReducers({
    CategoriesSlice:CategoriesSlice.reducer,
    createCategory:createCat.reducer,
    deleteCategory:deleteCat.reducer
})

export const store = configureStore({
    reducer:rootReducer
})