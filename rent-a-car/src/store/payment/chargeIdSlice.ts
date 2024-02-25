import { createSlice } from '@reduxjs/toolkit';
const chargeIdSlice = createSlice({
    name:'chargeId',
    initialState:{
        chargeId:"",
    },
    reducers:{
        setChargeId:(state,action)=>{
            state.chargeId=action.payload;
        },
        clearChargeId:(state)=>{
            state.chargeId="";
        }
    }
});
export const {setChargeId,clearChargeId} = chargeIdSlice.actions;
export const selectChargeId =(state:any) => state.chargeId.chargeId;
export const ChargeIdReducer = chargeIdSlice.reducer;