import { DataResultByIdResponse } from './../models/responses/BaseResponse/DataResultByIdResponse';
import { AllDataResultResponse } from './../models/responses/BaseResponse/AllDataResultResponse';
import { UpdateCustomerRequest } from './../models/requests/Customer/updateRequest';
import { AddCustomerRequest } from './../models/requests/Customer/addCustomerRequest';
import { UpdateCustomerResponse } from './../models/responses/Customer/updateCustomerResponse';
import { AddCustomerResponse } from './../models/responses/Customer/addCustomerResponse';
import { GetByIdCustomerResponse } from './../models/responses/Customer/getByIdCustomerResponse';
import { GetAllCustomerResponse } from '../models/responses/Customer/getAllCustomerResponse';
import { BaseService } from './baseService';
class CustomerService extends BaseService<
  AllDataResultResponse<GetAllCustomerResponse>,
  DataResultByIdResponse<GetByIdCustomerResponse>,
  AddCustomerResponse,
  UpdateCustomerResponse,
  AddCustomerRequest,
  UpdateCustomerRequest
>{

    constructor(){
        super();
        this.apiUrl = "customers";
    }

}

export default new CustomerService();