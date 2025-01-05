import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers:{
        cacheResults:(state,acion)=>{
            state = Object.assign(state, acion.payload)
        }
    }
})

export const{cacheResults} = searchSlice.actions;

export default searchSlice.reducer;