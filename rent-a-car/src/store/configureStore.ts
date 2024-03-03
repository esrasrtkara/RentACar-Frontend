import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { refreshReducer } from './auth/refreshSlice';
import { activeCarReducer } from './car/activeCarSlice';
import { carReducer } from "./car/carSlice";
import { discountCarReducer } from './car/discountCarSlice';
import { carIdReducer } from "./carId/carIdSlice";
import { commentReducer } from './comment/commentsSlice';
import { companyNameReducer } from "./corporate/companyNameSlice";
import { customerNameReducer } from "./customer/customerNameSlice";
import { NameReducer } from "./login/nameSlice";
import { SurnameReducer } from './login/surnameSlice';
import { ChargeIdReducer } from './payment/chargeIdSlice';
import { PaymentReducer } from "./payment/paymentSlice";
import { RefundedAmountReducer } from './payment/refundedAmount';
import { rentalReducer } from "./rental/rentalSlice";
import { rentalsReducer } from './rental/rentalsSlice';
import { updateRentalReducer } from './rental/updateRentalSlice';
import { totalPriceReducer } from "./totalPrice/totalPrice";
import { userIdReducer } from "./user/userIdSlice";

const rootReducer = combineReducers({
  auth: authReducer,
    car: carReducer,
    carId:carIdReducer,
    totalPrice:totalPriceReducer,
    payment : PaymentReducer,
    rental:rentalReducer,
    customerName:customerNameReducer,
    companyName:companyNameReducer,
    name:NameReducer,
    surname:SurnameReducer,
    userId:userIdReducer,
    comments:commentReducer,
    rentals:rentalsReducer,
    updateRental:updateRentalReducer,
    activeCar:activeCarReducer,
    chargeId:ChargeIdReducer,
    refundedAmount:RefundedAmountReducer,
    discountCar:discountCarReducer,
    refresh: refreshReducer,
});

export const store = configureStore({reducer:rootReducer});