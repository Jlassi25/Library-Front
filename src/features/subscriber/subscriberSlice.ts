import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Subscriber } from "../../types/Subscriber";

export const allSubscriber = createAsyncThunk('subscriber/allSubscriber', async () => {
    const response = await axios.get("http://localhost:8080/subscriber");
    return response.data;
})
export const createSubscriber = createAsyncThunk('subscriber/createSubscriber', async (newSubscriber: Subscriber) => {
    const response = await axios.post("http://localhost:8080/subscriber", newSubscriber);
    return response.data;
})
export const deleteSubscriber = createAsyncThunk('subscriber/deleteSubscriber', async (id: Number) => {
    // const response = await axios.delete("http://localhost:8080/subscriber/" + id);
    return id;
})



export const subscriberSlice = createSlice({
    name: "allSubs",
    initialState: {
        subscribers: [],
        loading: false,
        error: null
    },
    reducers: {
        sortSubscribersASC: (state) => {

            const sortedSubscribers = state.subscribers.slice().sort((a: any, b: any) => {
                const d1 = Date.parse(a.expirationDate);
                const d2 = Date.parse(b.expirationDate);            
                return d1 - d2

            });
            state.subscribers = sortedSubscribers;
        },
        sortSubscribersDES: (state) => {

            const sortedSubscribers = state.subscribers.slice().sort((a: any, b: any) => {
                const d1 = Date.parse(a.expirationDate);
                const d2 = Date.parse(b.expirationDate);            
                return d2 - d1

            });
            console.log("inDES")
            state.subscribers = sortedSubscribers;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(allSubscriber.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(allSubscriber.fulfilled, (state, action) => {
                state.loading = false;
                state.subscribers = action.payload;
            })
            .addCase(allSubscriber.rejected, (state: any, action) => {
                state.loading = false;
                state.subscribers = []
                state.error = action.error;

            })
            //create Subscriber
            .addCase(createSubscriber.pending, (state) => {
                state.loading = false;
                state.error = null
            })
            .addCase(createSubscriber.fulfilled, (state: any, action: any) => {
                state.loading = false;
                state.subscribers.push(action.payload);
            })
            .addCase(createSubscriber.rejected, (state: any, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            //delete Subscriber
            .addCase(deleteSubscriber.pending, (state) => {
                state.loading = false;
                state.error = null
            })
            .addCase(deleteSubscriber.fulfilled, (state, action) => {
                state.loading = false;
                console.log("inside", action.payload)
                state.subscribers = state.subscribers.filter((sub: any) => sub.cin !== action.payload);
            })
            .addCase(deleteSubscriber.rejected, (state: any, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }


})

export const { sortSubscribersASC,sortSubscribersDES } = subscriberSlice.actions;



