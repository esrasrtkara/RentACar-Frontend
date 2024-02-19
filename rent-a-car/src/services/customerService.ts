import { DataResultByIdResponse } from './../models/responses/BaseResponse/DataResultByIdResponse';
import { AllDataResultResponse } from './../models/responses/BaseResponse/AllDataResultResponse';
import { UpdateCustomerRequest } from './../models/requests/Customer/updateRequest';
import { AddCustomerRequest } from './../models/requests/Customer/addCustomerRequest';
import { UpdateCustomerResponse } from './../models/responses/Customer/updateCustomerResponse';
import { AddCustomerResponse } from './../models/responses/Customer/addCustomerResponse';
import { GetByIdCustomerResponse } from './../models/responses/Customer/getByIdCustomerResponse';
import { GetAllCustomerResponse } from '../models/responses/Customer/getAllCustomerResponse';
import { BaseService } from './baseService';
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

export default new CustomerService();