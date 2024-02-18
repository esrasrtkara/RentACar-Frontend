import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { carReducer } from "./car/carSlice";
import { carIdReducer } from "./carId/carIdSlice";
import { totalPriceReducer } from "./totalPrice/totalPrice";
import { PaymentReducer } from "./payment/paymentSlice";
import { rentalReducer } from "./rental/rentalSlice";
import { customerNameReducer } from "./customer/customerNameSlice";
const rootReducer = combineReducers({
    auth: authReducer,
    car: carReducer,
    carId:carIdReducer,
    totalPrice:totalPriceReducer,
    payment : PaymentReducer,
    rental:rentalReducer,
    customerName:customerNameReducer
   
});

export const store = configureStore({reducer:rootReducer});