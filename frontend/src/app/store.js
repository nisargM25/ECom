import { configureStore } from "@reduxjs/toolkit";
import vendorReducer from './features/vendorSlice'

const store=configureStore({
    reducer:{
        vendor:vendorReducer,
    }
});


export default store;