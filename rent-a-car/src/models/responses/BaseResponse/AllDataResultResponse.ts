export interface AllDataResultResponse<T> {
	success: boolean;
	message?: any;
	data: T[];
}