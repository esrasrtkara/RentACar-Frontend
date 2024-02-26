import axiosInstance from "../core/utils/interceptors/axiosInterceptors";
import { loginRequest } from "../models/requests/Login/loginRequest";
import { AxiosResponse } from 'axios';
import { AuthResponse } from "../models/responses/Auth/AuthResponse";

class AuthService{
    public apiUrl: string;
    constructor() {
		this.apiUrl = "auth/login";
	}
    login(request:loginRequest): Promise<AxiosResponse<AuthResponse,any>>{
        return axiosInstance.post<AuthResponse>(this.apiUrl, request);
    }
}

const authService = new AuthService();
export default authService