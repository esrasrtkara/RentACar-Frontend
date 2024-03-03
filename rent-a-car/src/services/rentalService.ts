import axiosInstance from '../core/utils/interceptors/axiosInterceptors';
import { AxiosResponse } from 'axios';
import { AddRentalRequest } from '../models/requests/Rental/addRentalRequest';
import { AddRentalResponse } from '../models/responses/Rental/addRentalResponse';
import { DataResultByIdResponse } from './../models/responses/BaseResponse/DataResultByIdResponse';
import { GetAllRentalResponse } from '../models/responses/Rental/getAllRentalResponse';
import { UpdateRentalRequest } from '../models/requests/Rental/updateRentalRequest';
import { UpdateRentalResponse } from '../models/responses/Rental/updateRentalResponse';

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
    updateRental(
		request: UpdateRentalRequest,
	): Promise<AxiosResponse<UpdateRentalResponse, any>> {
		return axiosInstance.put<UpdateRentalResponse>(this.apiUrl, request);
	}
	delete(id: number) {
		return axiosInstance.delete(this.apiUrl + "/" + id);
	}
	
}

const rentalService = new RentalService();
export default rentalService;