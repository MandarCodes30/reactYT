import {createSlice} from "@reduxjs/toolkit"
import { Chat_Count } from "./constants";

const chatSlice= createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessages:(state,action)=>{
            state.messages.splice(Chat_Count,1)
            state.messages.push(action.payload);
        }
    }
})

export const {addMessages} = chatSlice.actions;
export default chatSlice.reducer;