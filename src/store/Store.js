import {configureStore} from '@reduxjs/toolkit';
import uiReducer from './UiSlice'
import movieReducer from './MovieSlice'
import paginationReducer from './PaginationSlice'

const Store = configureStore({
    reducer:{
        ui:uiReducer,
        movie:movieReducer,
        pagination:paginationReducer
    }
});

export default Store