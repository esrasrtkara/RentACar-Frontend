import { createSlice } from '@reduxjs/toolkit';
const updateRentalSlice =createSlice({
    name:'updateRental',
    initialState:{
        updateRental:{},
    },
    reducers:{
        setUpdateRental:(state,action) =>{
            state.updateRental = action.payload;
        },
        clearUpdateRental:(state) =>{
            state.updateRental={};
        },
    }
});

export const {setUpdateRental,clearUpdateRental} = updateRentalSlice.actions;
export const selectUpdateRental = (state:any)=>state.updateRental.updateRental;
export const updateRentalReducer =updateRentalSlice.reducer;