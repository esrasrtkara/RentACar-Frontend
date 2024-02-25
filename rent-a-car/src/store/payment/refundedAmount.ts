import { createSlice } from '@reduxjs/toolkit';
const refundedAmountSlice = createSlice({
    name:'refundedAmount',
    initialState:{
        refundedAmount:0,
    },
    reducers:{
        setRefundedAmount:(state,action)=>{
            state.refundedAmount=action.payload;
        },
        clearRefundedAmount:(state)=>{
            state.refundedAmount=0;
        }
    }
});
export const {setRefundedAmount,clearRefundedAmount} = refundedAmountSlice.actions;
export const selectRefundedAmount =(state:any) => state.refundedAmount.refundedAmount;
export const RefundedAmountReducer = refundedAmountSlice.reducer;