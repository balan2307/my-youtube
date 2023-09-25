

import { createSlice } from "@reduxjs/toolkit";

const chat=createSlice({
    name:'chat',
    initialState:{
        chats:[]

    },
    reducers:{
        addChats(state,action){

            if(state.chats.length>15) state.chats.splice(15,1)

            state.chats.unshift(action.payload)

        },
        clearChats(state){
            state.chats=[]

        }
    
    }
})


export default chat.reducer
export const chatActions=chat.actions;