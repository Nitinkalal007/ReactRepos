// Shree Ganeshay namah

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    userlist : []
}

const adduser = createAsyncThunk('user/adduser',async (data)=>{
    let res =  await axios.post('http://localhost:4444/users',data)
    return data
})

const viweuser =createAsyncThunk('user/viewuser',async()=>{
    let res=await axios.get('http://localhost:4444/users')
    return res
})

const userSlice = createSlice({
    name:"username",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(adduser.fulfilled,(state,action)=>{
            state.userlist.push(data)
        })

        builder.addCase(viweuser.fulfilled,(state,action)=>{
            state.userlist = action.payload
        })
    }
})

export default userSlice.reducer
export {adduser,viweuser} 