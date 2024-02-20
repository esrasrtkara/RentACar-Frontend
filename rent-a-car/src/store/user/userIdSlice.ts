import { createSlice } from '@reduxjs/toolkit';
const userIdSlice = createSlice({
    name:"userId",
    initialState:{
        userId:null,
    },reducers:{
        setUserId:(state,actions)=>{
            state.userId=actions.payload;
        },
        clearUserId:(state) =>{
            state.userId=null;
        }
    },
});

export const {setUserId,clearUserId} = userIdSlice.actions;
export const selectUserId=(state:any)=>state.userId.userId;

export const userIdReducer = userIdSlice.reducer;