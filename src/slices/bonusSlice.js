import {createAction, createSlice} from '@reduxjs/toolkit'

// account ka reducer function se bhi aur khud ka createAction se bhi trigger krwa sakte bonus me increment in extrareducer
// import { incrementByAmount } from './accountSlice';
const incByAmt = createAction('account/incrementByAmount')

const initialState = {
    points:1,
}

const bonusSlice = createSlice({
    name:'bonus',
    initialState,
    reducers:{
        increment : (state)=>{
            state.points += 1;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(incByAmt,(state,action)=>{
            state.points += action.payload > 100 ? 1 : 0;
        })
    }
})


export const {increment} = bonusSlice.actions

export default bonusSlice.reducer