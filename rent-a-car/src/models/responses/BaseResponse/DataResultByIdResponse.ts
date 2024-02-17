export interface DataResultByIdResponse<T> {
	success: boolean;
	message?: any;
	data: T;
}