import { createSlice } from '@reduxjs/toolkit';
const paymentSlice = createSlice({
    name:'payment',
    initialState:{
        payment:0,
    },
    reducers:{
        setPayment:(state,action)=>{
            state.payment=action.payload;
        },
        clearPayment:(state)=>{
            state.payment=0;
        }
    }
});
export const {setPayment,clearPayment} = paymentSlice.actions;
export const selectPayment =(state:any) => state.payment.payment;
export const PaymentReducer = paymentSlice.reducer;