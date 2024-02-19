import { AddRentalRequest } from '../models/requests/Rental/addRentalRequest';
import { AxiosResponse } from 'axios';
import axiosInstance from '../core/utils/interceptors/axiosInterceptors';
import { GetFilterRentalResponse } from '../models/responses/Rental/getFilterRentalResponse';

class RentalFilterService{
    public apiUrl:string;
    constructor(){
        
        this.apiUrl = "rentals/filter";
    }

   

    getTotal(request:AddRentalRequest):Promise<AxiosResponse<GetFilterRentalResponse, any>>{
        return axiosInstance.post<GetFilterRentalResponse>(this.apiUrl, request);
    }

}
const rentalFilterService = new RentalFilterService();
export default rentalFilterService;