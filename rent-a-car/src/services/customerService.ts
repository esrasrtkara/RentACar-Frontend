import { AxiosResponse } from 'axios';
import { GetCustomerResponse } from '../models/responses/Customer/getCustomerResponse';
import axiosInstance from '../core/utils/interceptors/axiosInterceptors';
class CustomerService{
  public apiUrl: string;
    constructor(){
        this.apiUrl = "customers/user";
    }

    getCustomer():Promise<AxiosResponse<GetCustomerResponse, any>>{
      return axiosInstance.get<GetCustomerResponse>(this.apiUrl);
    }

}

const customerService = new CustomerService();
export default customerService;