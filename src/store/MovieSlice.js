import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movie",
    initialState:{
        popularMovie:[],
        topRatedMovie:[],
        upcomingMovie:[],
        searchMovie:[],
        searchMovieName:""
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
        },
        addsearchMovie:(state,action) => {
            if(state.searchMovie.length > 0 ){
                state.searchMovie = []
            }
            state.searchMovie = action.payload
        },
        setSearchMovieName:(state,action) => {
            if(state.searchMovieName.length > 0){
                state.searchMovieName = ""
            }
            state.searchMovieName = action.payload
        }
    }
})

export const {addPopularMovie,addTopRatedMovie,addUpcomingMovie,addsearchMovie,setSearchMovieName} = movieSlice.actions
export default movieSlice.reducer