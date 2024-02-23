import { AxiosResponse } from 'axios';
import { AddRentalRequest } from '../models/requests/Rental/addRentalRequest';
import { AddRentalResponse } from '../models/responses/Rental/addRentalResponse';
import { DataResultByIdResponse } from './../models/responses/BaseResponse/DataResultByIdResponse';
import axiosInstance from '../core/utils/interceptors/axiosInterceptors';
import { GetAllRentalResponse } from '../models/responses/Rental/getAllRentalResponse';

class RentalService{
    public apiUrl:string;

    constructor(){
        this.apiUrl = "rentals";
    }
    

     addRental(request:AddRentalRequest):Promise<AxiosResponse<DataResultByIdResponse<AddRentalResponse>, any>> {
		return axiosInstance.post<DataResultByIdResponse<AddRentalResponse>>(this.apiUrl, request);
	}
    getRentalUserId():Promise<AxiosResponse<GetAllRentalResponse[],any>> {
		return axiosInstance.get<GetAllRentalResponse[]>(this.apiUrl+"/userId");
	}
}

const rentalService = new RentalService();
export default rentalService;