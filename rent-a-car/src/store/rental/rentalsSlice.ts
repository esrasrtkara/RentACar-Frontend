import { createSlice } from '@reduxjs/toolkit';
const rentalsSlice =createSlice({
    name:'rentals',
    initialState:{
        rentals:[],
    },
    reducers:{
        setRentals:(state,action) =>{
            state.rentals = action.payload;
        },
        clearRentals:(state) =>{
            state.rentals=[];
        },
    }
});

export const {setRentals,clearRentals} = rentalsSlice.actions;
export const selectRentals = (state:any)=>state.rentals.rentals;
export const rentalsReducer =rentalsSlice.reducer;