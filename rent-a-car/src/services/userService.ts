import { UserIdRequest } from './../models/requests/User/userIdRequest';
import { AxiosResponse } from 'axios';
import axiosInstance from "../core/utils/interceptors/axiosInterceptors";
import { UserIdResponse } from "../models/responses/User/userIdResponse";

class UserService {

    public apiUrl: string;
    constructor(){
        this.apiUrl = "users";
    }
    getUserId():Promise<AxiosResponse<UserIdResponse, any>> {
        return axiosInstance.get<UserIdResponse>(this.apiUrl);
    }
}
const userService = new UserService();
export default userService;