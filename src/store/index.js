import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./appSlice";
import searchReducer from './searchSlice'

const store=configureStore({
    reducer:{
        app:AppReducer,
        search:searchReducer
    }
})


export default store;