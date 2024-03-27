import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    points : 1,
}

export const increment = createAction('reward/increment')
export const incrementByAmount = createAction('reward/incrementByAmount')

const rewardReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase(increment,(state)=>{
        state.points += 1;
    })
    .addCase(incrementByAmount,(state,action)=>{
        state.points += action.payload
    })
})

export default rewardReducer;
