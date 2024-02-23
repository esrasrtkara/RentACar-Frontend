import { AxiosResponse } from 'axios';
import { GetByIdInvoiceResponse } from "../models/responses/Invoice/getByIdInvoiceResponse";
import axiosInstance from '../core/utils/interceptors/axiosInterceptors';

class InvoiceServive{
    public apiUrl:string;

    constructor(){
        this.apiUrl = "invoices";
    }

    getInvoice(rentalId:number):Promise<AxiosResponse<GetByIdInvoiceResponse,any>> {
		return axiosInstance.get<GetByIdInvoiceResponse>(this.apiUrl+"/rentalId");
	}
}
const invoiceService = new InvoiceServive();
export default invoiceService;