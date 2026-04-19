import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        ShowgptSearch : false ,
        movieName : null ,
        movieResults : null ,
    },
    reducers : {
        toggleGptSearch : (state)=>{
            state.ShowgptSearch = !state.ShowgptSearch ;
        }, 
        addGptMovies : (state,action)=>{
            const {movieName, movieResults} = action.payload ;
            state.movieName = movieName ;
            state.movieResults = movieResults ;
        },
    }
})
export const {toggleGptSearch, addGptMovies} = gptSlice.actions ;
export default gptSlice.reducer ;
