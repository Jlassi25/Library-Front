import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const allCategories = createAsyncThunk('categpry/allCategories', async ()=>{
            const response =await axios.get("http://localhost:8080/category");
            return response.data;     
})
export const createCategory = createAsyncThunk('categpry/createCategory', async (newCategory)=>{
    const response =await axios.post("http://localhost:8080/category",newCategory);
    return response.data;
})
export const deleteCategory = createAsyncThunk('categpry/deleteCategory', async (id)=>{
    const response =await axios.delete("http://localhost:8080/category/"+id);
    return response.data;
})


export const CategoriesSlice = createSlice({
    name:"allCats",
    initialState:{
        categories:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder) => {
            builder
                .addCase(allCategories.pending, (state) => {
                    state.loading = true;
                    state.error = null
                })
                .addCase(allCategories.fulfilled, (state, action) => {
                    state.loading = false;
                    state.categories = action.payload;
                })
                .addCase(allCategories.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error;
                })
                //create Category
                .addCase(createCategory.pending, (state) => {
                    state.loading = false;
                    state.error = null
                })
                .addCase(createCategory.fulfilled, (state, action) => {
                    state.loading = false;
                    state.categories.push(action.payload);
                })
                .addCase(createCategory.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                }) 
                //delete Category
                .addCase(deleteCategory.pending, (state) => {
                    state.loading = false;
                    state.error = null
                })
                .addCase(deleteCategory.fulfilled, (state, action) => {
                    state.loading = false;
                    console.log("inside",action.payload)
                    state.categories = state.categories.filter(category => category.catId !== action.payload);
                })
                .addCase(deleteCategory.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                })        
        }

    
})





