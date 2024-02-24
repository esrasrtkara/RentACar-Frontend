import { createSlice } from '@reduxjs/toolkit';
const activeCarSlice = createSlice({
    name:'activeCar',
    initialState:{
        activeCar:[],
    },
    reducers:{
        setActiveCar:(state, action) =>{
            state.activeCar = action.payload;
        },
        clearActiveCar:(state) =>{
            state.activeCar = [];
        },
    }
});

export const {setActiveCar ,clearActiveCar} = activeCarSlice.actions;
export const selectActiveCars =(state:any) => state.activeCar.activeCar;
export const activeCarReducer = activeCarSlice.reducer;