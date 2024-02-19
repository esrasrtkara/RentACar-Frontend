import { AxiosResponse } from "axios";
import axiosInstance from "../core/utils/interceptors/axiosInterceptors";
import { GetCorporateResponse } from "../models/responses/Corporate/getCorporateResponse";

class CorporateService {
    public apiUrl: string;
    constructor(){
        this.apiUrl = "corporates/user";
    }

    getCorporate():Promise<AxiosResponse<GetCorporateResponse ,any>>{
        return axiosInstance.get<GetCorporateResponse>(this.apiUrl);
    }
}

export default new CorporateService();