import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name:"name",
    initialState:{
        name:"",
    },
    reducers:{
        setName:(state, action)=>{
            state.name = action.payload;
        },
        clearName:(state) => {
            state.name="";
        }
    }
});

export const {setName,clearName} =nameSlice.actions;
export const selectName =(state:any) => state.name.name;
export const NameReducer = nameSlice.reducer;