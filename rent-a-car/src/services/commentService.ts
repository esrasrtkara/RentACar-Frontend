import { AxiosResponse } from 'axios';
import { UpdateCommentResponse } from './../models/responses/Comment/updateCommentResponse';
import { AddCommentResponse } from './../models/responses/Comment/addCommentResponse';
import { DataResultByIdResponse } from './../models/responses/BaseResponse/DataResultByIdResponse';
import { AllDataResultResponse } from "../models/responses/BaseResponse/AllDataResultResponse";
import { GetAllCommentResponse } from "../models/responses/Comment/getAllCommentResponse";
import { BaseService } from "./baseService";
import { GetByIdCommentResponse } from '../models/responses/Comment/getByIdCommentResponse';
import { AddCommentRequest } from '../models/requests/Comment/addCommentRequest';
import { UpdateCommentRequest } from '../models/requests/Comment/updateCommentRequest';
import axiosInstance from '../core/utils/interceptors/axiosInterceptors';

class CommentService extends BaseService<
    AllDataResultResponse<GetAllCommentResponse>,
    DataResultByIdResponse<GetByIdCommentResponse>,
    AddCommentResponse,
    UpdateCommentResponse,
    AddCommentRequest,
    UpdateCommentRequest
>{
    constructor(){
        super();
        this.apiUrl = "comments";
    }

    getCommentUserId(): Promise<AxiosResponse<GetAllCommentResponse[], any>> {
		return axiosInstance.get<GetAllCommentResponse[]>(this.apiUrl+"/userId");
	}
}
const commentService = new CommentService();
export default commentService;