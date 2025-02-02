import { createSlice } from "@reduxjs/toolkit";


const detailMovieSlice = createSlice({
    name:"detailMovie",
    initialState:{
        movieData:{},
        castData:{}
    },
    reducers:{
        addMovieDetailData:(state,action) => {
            if(Object.keys(state.movieData).length > 0){
                state.movieData = {}
            }
            state.movieData = action.payload
        },
        addCastData:(state,action) => {
            if(Object.keys(state.castData).length > 0){
                state.castData = {}
            }
            state.castData = action.payload
        }
    }
})

export const {addMovieDetailData,addCastData} = detailMovieSlice.actions
export default detailMovieSlice.reducer