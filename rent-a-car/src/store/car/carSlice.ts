import { createSlice } from '@reduxjs/toolkit';
const carSlice = createSlice({
    name:'car',
    initialState:{
        cars:[],
    },
    reducers:{
        setCars:(state, action) =>{
            state.cars = action.payload;
        },
        clearCars:(state) =>{
            state.cars = [];
        },
    }
});

export const {setCars ,clearCars} = carSlice.actions;
export const selectCars =(state:any) => state.car.cars;

export const carReducer = carSlice.reducer;