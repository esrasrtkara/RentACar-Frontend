import { createSlice } from "@reduxjs/toolkit";


const companyNameSlice = createSlice({
    name:"companyName",
    initialState:{
        companyName:"",
    },
    reducers:{
        setCompanyName:(state,action)=>{
            state.companyName= action.payload;
        },
        clearCompanyName:(state)=>{
            state.companyName="";
        }
    }
});

export const {setCompanyName, clearCompanyName} = companyNameSlice.actions;
export const selectCompanyName = (state:any) => state.companyName.companyName;
export const companyNameReducer = companyNameSlice.reducer;