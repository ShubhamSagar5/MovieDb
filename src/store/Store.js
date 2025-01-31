import {configureStore} from '@reduxjs/toolkit';
import uiReducer from './UiSlice'
import movieReducer from './MovieSlice'

const Store = configureStore({
    reducer:{
        ui:uiReducer,
        movie:movieReducer
    }
});

export default Store