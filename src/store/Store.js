import {configureStore} from '@reduxjs/toolkit';
import uiReducer from './UiSlice'
import movieReducer from './MovieSlice'
import paginationReducer from './PaginationSlice'
import detailReducer from './DetailMovieSlice'

const Store = configureStore({
    reducer:{
        ui:uiReducer,
        movie:movieReducer,
        pagination:paginationReducer,
        detailMovie:detailReducer
    }
});

export default Store