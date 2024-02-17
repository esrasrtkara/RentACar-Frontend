import { loginRequest } from './../models/requests/Login/loginRequest';
import { AddRentalRequest } from './../models/requests/Rental/addRentalRequest';
import { AxiosResponse } from 'axios';

import { UpdateRentalRequest } from "../models/requests/Rental/updateRentalRequest";
import { AllDataResultResponse } from "../models/responses/BaseResponse/AllDataResultResponse";
import { DataResultByIdResponse } from "../models/responses/BaseResponse/DataResultByIdResponse";
import { AddRentalResponse } from "../models/responses/Rental/addRentalResponse";
import { GetAllRentalResponse } from "../models/responses/Rental/getAllRentalResponse";
import { GetByIdRentalResponse } from "../models/responses/Rental/getByIdRentalResponse";
import { UpdateRentalResponse } from "../models/responses/Rental/updateRentalResponse";
import { BaseService } from "./baseService";
import axiosInstance from '../core/utils/interceptors/axiosInterceptors';
import { GetFilterRentalResponse } from '../models/responses/Rental/getFilterRentalResponse';

class RentalService extends BaseService<
    AllDataResultResponse<GetAllRentalResponse>,
    DataResultByIdResponse<GetByIdRentalResponse>,
    DataResultByIdResponse<AddRentalResponse>,
    UpdateRentalResponse,
    AddRentalRequest,
    UpdateRentalRequest

>{
    constructor(){
        super();
        this.apiUrl = "rentals/filter";
    }

   /* addRental(request:AddRentalRequest):Promise<AxiosResponse<DataResultByIdResponse<AddRentalResponse>, any>> {
		return axiosInstance.post<DataResultByIdResponse<AddRentalResponse>>(this.apiUrl, request);
	}*/

    getTotal(request:AddRentalRequest):Promise<AxiosResponse<GetFilterRentalResponse, any>>{
        return axiosInstance.post<GetFilterRentalResponse>(this.apiUrl, request);
    }

}
const rentalService = new RentalService();
export default rentalService;