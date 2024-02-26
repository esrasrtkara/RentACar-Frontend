import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { carReducer } from "./car/carSlice";
import { carIdReducer } from "./carId/carIdSlice";
import { totalPriceReducer } from "./totalPrice/totalPrice";
import { PaymentReducer } from "./payment/paymentSlice";
import { rentalReducer } from "./rental/rentalSlice";
import { customerNameReducer } from "./customer/customerNameSlice";
import { companyNameReducer } from "./corporate/companyNameSlice";
import { NameReducer } from "./login/nameSlice";
import { SurnameReducer } from './login/surnameSlice';
import { commentReducer } from './comment/commentsSlice';
import { rentalsReducer } from './rental/rentalsSlice';
import { updateRentalReducer } from './rental/updateRentalSlice';
import { activeCarReducer } from './car/activeCarSlice';
import { ChargeIdReducer } from './payment/chargeIdSlice';
import { RefundedAmountReducer } from './payment/refundedAmount';
import { discountCarReducer } from './car/discountCarSlice';
import { refreshReducer } from './auth/refreshSlice';
import { userIdReducer } from "./user/userIdSlice";


// Kök Reducer'ı tanımlayın
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