import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { carReducer } from "./car/carSlice";
import { carIdReducer } from "./carId/carIdSlice";
const rootReducer = combineReducers({
    auth: authReducer,
    car: carReducer,
    carId:carIdReducer,
   
});

export const store = configureStore({reducer:rootReducer});