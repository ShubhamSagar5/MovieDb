import { createSlice } from "@reduxjs/toolkit";



const paginationSlice = createSlice({
    name:'pagination',
    initialState:{
        page:1,
        totalPage:3,
    },
    reducers:{
        nextPage:(state,action) => {
          if(state.page < state.totalPage){
            state.page = state.page+1
          }
        },
        prevPage:(state,action)=>{
            if(state.page > 1){
                state.page = state.page -1
            }
        },
        setPage:(state,action) => {
            state.page = action.payload
        },
        setTotalPage:(state,action) => {
            state.totalPage = action.payload
        }
       
    }
})

export const {nextPage,prevPage,setPage,setTotalPage} = paginationSlice.actions 
export default paginationSlice.reducer