import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movie",
    initialState:{
        popularMovie:[],
        topRatedMovie:[],
        upcomingMovie:[]
    },
    reducers:{
        addPopularMovie:(state,action) => {
            state.popularMovie = action.payload
        },
        addTopRatedMovie:(state,action) => {
            state.topRatedMovie = action.payload
        },
        addUpcomingMovie:(state,action) => {
            state.upcomingMovie = action.payload
        }
    }
})

export const {addPopularMovie,addTopRatedMovie,addUpcomingMovie} = movieSlice.actions
export default movieSlice.reducer