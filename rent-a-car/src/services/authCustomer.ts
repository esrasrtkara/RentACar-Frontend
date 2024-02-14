import { AxiosResponse } from 'axios';
import axiosInstance from "../core/utils/interceptors/axiosInterceptors";
import { CustomerRequest } from "../models/requests/Customer/customerRequest";

class AuthCustomer{
    public apiUrl: string;
    constructor() {
		this.apiUrl = "auth/customer-register";
	}
    customer(request:CustomerRequest):Promise<AxiosResponse<string,any>>{
        return axiosInstance.post<string>(this.apiUrl,request)
    }
}
const authCustomer = new AuthCustomer();
export default authCustomer