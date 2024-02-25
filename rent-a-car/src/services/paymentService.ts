import { AxiosResponse } from 'axios';
import axiosInstance from "../core/utils/interceptors/axiosInterceptors";
import { PaymentRequest } from '../models/requests/Payment/paymentRequest';
import { RefundRequest } from '../models/requests/Payment/refundRequest';

class PaymentService{
    public apiUrl:string;
    constructor(){
        this.apiUrl ="makePayment";
    }
    payment(request:PaymentRequest):Promise<AxiosResponse<any,any>>{
        return axiosInstance.post<any>(this.apiUrl, request);
    }
    refundPayment(request: RefundRequest): Promise<AxiosResponse<any, any>> {
        return axiosInstance.post<any>('refund', request); // 'refund' endpointi API'nin refund işlemi için oluşturulan endpointi olduğunu varsayalım
    }
}
const paymentService = new PaymentService();
export default paymentService;