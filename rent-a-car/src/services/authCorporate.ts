import { AxiosResponse } from 'axios';
import { CorporateRequest } from "../models/requests/Corporate/CorporateRequest";
import axiosInstance from '../core/utils/interceptors/axiosInterceptors';

class AuthCorporate{

    public apiUrl: string;
    constructor() {
		this.apiUrl = "auth/corporate-register";
	}
    corporate(request:CorporateRequest):Promise<AxiosResponse<string,any>>{
        return axiosInstance.post<string>(this.apiUrl,request)
    }

}
export default new AuthCorporate();