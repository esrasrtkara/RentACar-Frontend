import { createSlice } from "@reduxjs/toolkit";

const totalPriceSlice = createSlice({
    name:"totalPrice",
    initialState:{
        totalPrice:null,
    },
    reducers:{
      setTotalPrice: (state, action) => {
        state.totalPrice = action.payload;
      },
      clearTotalPrice: (state) => {
        state.totalPrice = null;
      },
    },
});

export const { setTotalPrice, clearTotalPrice } = totalPriceSlice.actions;
export const selectTotalPrice = (state:any) => state.totalPrice.totalPrice;
export const totalPriceReducer = totalPriceSlice.reducer;