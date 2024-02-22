import { createSlice } from "@reduxjs/toolkit";

const surnameSlice = createSlice({
    name:"surname",
    initialState:{
        surname:"",
    },
    reducers:{
        setSurname:(state, action) => {
            state.surname = action.payload;
        },
        clearSurname:(state) => {
            state.surname="";
        }
    }
});

export const {setSurname, clearSurname} = surnameSlice.actions;
export const selectSurname = (state:any) => state.surname.surname;
export const SurnameReducer = surnameSlice.reducer; 