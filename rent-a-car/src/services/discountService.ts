import { AxiosResponse } from 'axios';
import { GetAllDiscountResponse } from "../models/responses/Discount/GetAllDiscountResponse";
import axiosInstance from '../core/utils/interceptors/axiosInterceptors';

class DiscountService{
    public apiUrl:string;

    constructor(){
        this.apiUrl = "discounts";
    }
    getDiscountUserId():Promise<AxiosResponse<GetAllDiscountResponse[],any>> {
		return axiosInstance.get<GetAllDiscountResponse[]>(this.apiUrl+"/userId");
	}
}

const discountService = new DiscountService();
export default discountService;