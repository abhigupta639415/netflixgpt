import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
            addNowPlayingMovies : null,
            addTailerVideo : null,
    } ,
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.addNowPlayingMovies = action.payload ;
        } ,
        addTailerVideo : (state, action) => {
            state.addTailerVideo = action.payload ;
        }
    }
}) ;
export const {addNowPlayingMovies, addTailerVideo} = moviesSlice.actions ;
export default moviesSlice.reducer ;
