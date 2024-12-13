// // Shree Ganeshay namah 

// import { configureStore } from "@reduxjs/toolkit";
// import userslice from './userSlice.js'
// export const Store = configureStore({
//     reducer:{
//         user:userslice
//     }
// })


import { configureStore } from '@reduxjs/toolkit'
import usereducer from './userSlice'
 const Store = configureStore({
    reducer: {
        user:usereducer
    },
  })

  export default Store