import { createSlice } from '@reduxjs/toolkit';
const carIdSlice = createSlice({
    name:'carId',
    initialState:{
        carId:null,
    },
    reducers:{
        setCarId:(state, action) =>{
            state.carId = action.payload;
        },
        clearCarId:(state) =>{
            state.carId = null;
        },
    }
});

export const {setCarId ,clearCarId} = carIdSlice.actions;
export const selectCarId =(state:any) => state.carId.carId;

export const carIdReducer = carIdSlice.reducer;