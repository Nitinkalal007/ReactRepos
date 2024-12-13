// Shree Ganeshay namah 

import { configureStore } from "@reduxjs/toolkit";
import userslice from './userSlice.js'
export const Store = configureStore({
    reducer:{
        user:userslice
    }
})