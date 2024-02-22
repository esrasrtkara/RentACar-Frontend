import { createSlice } from '@reduxjs/toolkit';
const commentsSlice=createSlice({
    name:"comments",
    initialState:{
        comments:[],
    },
    reducers:{
        setComments:(state,action)=>{
            state.comments=action.payload;
        },
        clearComments:(state)=>{
            state.comments=[];
        },
    }
});

export const {setComments,clearComments}=commentsSlice.actions;
export const selectComments =(state:any)=>state.comments.comments;
export const commentReducer=commentsSlice.reducer;