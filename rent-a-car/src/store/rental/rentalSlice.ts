import { createSlice } from '@reduxjs/toolkit';
const rentalSlice =createSlice({
    name:'rental',
    initialState:{
        rental:{},
    },
    reducers:{
        setRental:(state,action) =>{
            state.rental = action.payload;
        },
        clearRental:(state) =>{
            state.rental={};
        },
    }
});

export const {setRental,clearRental} = rentalSlice.actions;
export const selectRental = (state:any)=>state.rental.rental;
export const rentalReducer =rentalSlice.reducer;