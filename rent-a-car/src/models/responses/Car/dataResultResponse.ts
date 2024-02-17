import { GetAllCarResponse } from './getAllCarResponse';
export interface DataResultResponse {
	success: boolean;
	message?: any;
	data: GetAllCarResponse[];
}