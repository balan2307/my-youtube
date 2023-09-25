import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./AppSlice";
import chatReducer from './chatSlice'
import searchReducer from './searchSlice'

const store=configureStore({
    reducer:{
        app:AppReducer,
        search:searchReducer,
        chat:chatReducer
    }
})


export default store;