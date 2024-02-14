import { GetAllCarResponse } from '../models/responses/Car/getAllCarResponse';
import { AddCarRequest } from "../models/requests/Car/addCarRequest";
import { UpdateCarRequest } from "../models/requests/Car/updateCarRequest";
import { AddCarResponse } from "../models/responses/Car/addCarResponse";
import { GetByIdCarResponse } from "../models/responses/Car/getByIdCarResponse";
import { UpdateCarResponse } from "../models/responses/Car/updateCarResponse";
import { BaseService } from "./baseService";

class CarService extends BaseService<
    GetAllCarResponse,
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