import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
    name: "counter",  // ác định action.type trong Redux DevTools, không ảnh hưởng đến truy xuất state
    initialState : {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        }, 
        incrementByAmount: (state, action) => { state.value += action.payload; },
        decrementByAmount: (state, action) => { state.value -= action.payload; }, 
    }
})

export const { increment, decrement, reset, incrementByAmount, decrementByAmount} = counterReducer.actions;
export default counterReducer.reducer;
