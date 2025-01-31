import {createSlice} from '@reduxjs/toolkit' 


const uiSlice = createSlice({
    name:'ui',
    initialState:{
        loading:false,
        darkMode:false
    },
    reducers:{
        setLoading:(state,action) => {
            state.loading = action.payload
        },
        setDarkMode:(state,action) => {
            state.darkMode = !state.darkMode
        }
    }
})

const {setLoading,setDarkMode} = uiSlice.actions
export default uiSlice.reducer