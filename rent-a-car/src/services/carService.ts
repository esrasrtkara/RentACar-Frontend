import { DataResultByIdResponse } from '../models/responses/BaseResponse/DataResultByIdResponse';
import { AllDataResultResponse } from '../models/responses/BaseResponse/AllDataResultResponse';
import { GetByIdCarResponse } from './../models/responses/Car/getByIdCarResponse';
import { GetAllCarResponse } from '../models/responses/Car/getAllCarResponse';
import { AddCarRequest } from "../models/requests/Car/addCarRequest";
import { UpdateCarRequest } from "../models/requests/Car/updateCarRequest";
import { AddCarResponse } from "../models/responses/Car/addCarResponse";
import { UpdateCarResponse } from "../models/responses/Car/updateCarResponse";
import { BaseService } from "./baseService";
import { GetCommentCarId } from '../models/responses/Car/getCommentCarId';
import { AxiosResponse } from 'axios';
import axiosInstance from '../core/utils/interceptors/axiosInterceptors';


class CarService extends BaseService<
    AllDataResultResponse<GetAllCarResponse>,
	DataResultByIdResponse<GetByIdCarResponse>,
	AddCarRequest,
	AddCarResponse,
	UpdateCarRequest,
	UpdateCarResponse>
{
    constructor(){
        super();
        this.apiUrl = "cars";
    }

    getComment(id: number): Promise<AxiosResponse<GetCommentCarId[], any>> {
        return axiosInstance.get<GetCommentCarId[]>(this.apiUrl + "/" + id+"/comments");
    }
}
const carService = new CarService();
export default carService