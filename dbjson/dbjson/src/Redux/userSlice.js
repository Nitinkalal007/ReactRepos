// Shree Ganeshay namah

// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// const initialState = {
//     userlist : []
// }

// const adduser = createAsyncThunk('user/adduser',async (data)=>{
//     let res =  await axios.post('http://localhost:4444/users',data)
//     return data
// })

// const viweuser =createAsyncThunk('user/viewuser',async()=>{
//     let res=await axios.get('http://localhost:4444/users')
//     return res
// })

// const userSlice = createSlice({
//     name:"username",
//     initialState,
//     reducers:{},
//     extraReducers:(builder)=>{
//         builder.addCase(adduser.fulfilled,(state,action)=>{
//             state.userlist.push(data)
//         })

//         builder.addCase(viweuser.fulfilled,(state,action)=>{
//             state.userlist = action.payload
//         })
//     }
// })

// export default userSlice.reducer
// export {adduser,viweuser} 


import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    userlist: [],
  }



  export const adduser = createAsyncThunk('users/adduser',async (data) => {
      await axios.post('http://localhost:4444/users',data)
      return data
    },
  )
  export const viewuser = createAsyncThunk('user/viewuser',async()=>{
    let res =   await axios.get('http://localhost:4444/users')
    return res.data
  })

  const userslice  = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(adduser.fulfilled, (state, action) => {
        
          state.userlist.push(action.payload)
        }),
        builder.addCase(viewuser.fulfilled, (state, action) => {
          console.log(action.payload)
          state.userlist = action.payload
        })
      },

      
  })

  export default userslice.reducer