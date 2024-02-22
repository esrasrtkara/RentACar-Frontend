import { createSlice } from '@reduxjs/toolkit';
const customerNameSlice =createSlice({
    name:"customerName",
    initialState:{
        customerName:"",
    },
    reducers:{
        setCustomerName:(state,action)=>{
            state.customerName=action.payload;
        },
        clearCustomerName:(state)=>{
            state.customerName="";
        }
    },
});

export const {setCustomerName,clearCustomerName} =customerNameSlice.actions;
export const selectCustomerName =(state:any) => state.customerName.customerName;
export const customerNameReducer = customerNameSlice.reducer;