import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { carReducer } from "./car/carSlice";
const rootReducer = combineReducers({
    auth: authReducer,
    car: carReducer
   
});

export const store = configureStore({reducer:rootReducer});