import { AxiosResponse } from 'axios';
import { AddRentalRequest } from '../models/requests/Rental/addRentalRequest';
import { AddRentalResponse } from '../models/responses/Rental/addRentalResponse';
import { DataResultByIdResponse } from './../models/responses/BaseResponse/DataResultByIdResponse';
import axiosInstance from '../core/utils/interceptors/axiosInterceptors';

class RentalService{
    public apiUrl:string;

    constructor(){
        this.apiUrl = "rentals";
    }
    

     addRental(request:AddRentalRequest):Promise<AxiosResponse<DataResultByIdResponse<AddRentalResponse>, any>> {
		return axiosInstance.post<DataResultByIdResponse<AddRentalResponse>>(this.apiUrl, request);
	}
}

const rentalService = new RentalService();
export default rentalService;