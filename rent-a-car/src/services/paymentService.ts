import { AxiosResponse } from 'axios';
import axiosInstance from "../core/utils/interceptors/axiosInterceptors";
import { PaymentRequest } from '../models/requests/Payment/paymentRequest';

class PaymentService{
    public apiUrl:string;
    constructor(){
        this.apiUrl ="makePayment";
    }
    payment(request:PaymentRequest):Promise<AxiosResponse<any,any>>{
        return axiosInstance.post<any>(this.apiUrl, request);
    }
}
export default new PaymentService();