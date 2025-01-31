import {configureStore} from '@reduxjs/toolkit';
import uiReducer from './UiSlice'

const Store = configureStore({
    reducer:{
        ui:uiReducer
    }
});

export default Store