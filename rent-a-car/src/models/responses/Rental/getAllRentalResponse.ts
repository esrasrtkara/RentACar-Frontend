export interface GetAllRentalResponse {
	id: number;
	startDate: string;
	endDate: string;
	returnDate?: any;
	startKilometer: number;
	endKilometer: number;
	carId: number;
	userId: number;
	createDate:Date;
}
