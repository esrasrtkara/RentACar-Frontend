import { GetAllCarResponse } from '../models/responses/Car/getAllCarResponse';
import { AddCarRequest } from "../models/requests/Car/addCarRequest";
import { UpdateCarRequest } from "../models/requests/Car/updateCarRequest";
import { AddCarResponse } from "../models/responses/Car/addCarResponse";
import { GetByIdCarResponse } from "../models/responses/Car/getByIdCarResponse";
import { UpdateCarResponse } from "../models/responses/Car/updateCarResponse";
import { BaseService } from "./baseService";
import { DataResultResponse } from '../models/responses/Car/dataResultResponse';

class CarService extends BaseService<
    DataResultResponse,
	GetByIdCarResponse,
	AddCarRequest,
	AddCarResponse,
	UpdateCarRequest,
	UpdateCarResponse>
{
    constructor(){
        super();
        this.apiUrl = "cars";
    }
}
const carService = new CarService();
export default carService