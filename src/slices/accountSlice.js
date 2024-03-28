import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    amount : 1,
}

//get request for rest api
//take action string and callback func and return a promise
export const getUserAccount = createAsyncThunk(
    'account/getUser',  //string name of action
    async (userId, thunkAPI) => {
      const response = await axios.get('http://localhost:7080/accounts/'+userId)
      return response.data.amount
    },
  )
  
const accountSlice = createSlice({
    name:'account',
    initialState,
    reducers:{
        increment : (state)=>{
            state.amount += 1
        },
        decrement : (state)=>{
            if(state.amount === 0){
                alert('cant decrement')
            }else{
                state.amount -= 1
            }
        },
        decrementByAmount:(state,action)=>{
            if(state.amount - action.payload < 0){
                alert('cant decrement')
            }else{
                state.amount -= action.payload
            }
        },
        incrementByAmount : (state,action)=>{
            state.amount += action.payload
        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(getUserAccount.fulfilled,(state,action)=>{
            state.amount = action.payload
            state.pending = false
        })
        .addCase(getUserAccount.pending,(state,action)=>{
            state.pending = true
        })
        .addCase(getUserAccount.rejected,(state,action)=>{
            state.error = action.error
        })
    }
})

console.log(accountSlice)

export const {increment,decrement,incrementByAmount,decrementByAmount} = accountSlice.actions

export default accountSlice.reducer