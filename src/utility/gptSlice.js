import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        ShowgptSearch : false 
    },
    reducers : {
        toggleGptSearch : (state)=>{
            state.ShowgptSearch = !state.ShowgptSearch ;
        }
    }
})
export const {toggleGptSearch} = gptSlice.actions ;
export default gptSlice.reducer ;
