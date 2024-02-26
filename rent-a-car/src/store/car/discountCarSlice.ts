import { createSlice } from '@reduxjs/toolkit';
const discountCarSlice = createSlice({
    name:'discountCar',
    initialState:{
        discountCar:[],
    },
    reducers:{
        setDiscountCar:(state, action) =>{
            state.discountCar = action.payload;
        },
        clearDiscountCar:(state) =>{
            state.discountCar = [];
        },
    }
});

export const {setDiscountCar ,clearDiscountCar} = discountCarSlice.actions;
export const selectDiscountCar =(state:any) => state.discountCar.discountCar;
export const discountCarReducer = discountCarSlice.reducer;