export interface GetByIdRentalResponse {
	id: number;
	startDate: string;
	endDate: string;
	returnDate?: any;
	startKilometer: number;
	endKilometer: number;
	carId: number;
	userId: number;
	discount?: any;
	discountCode?: any;
}
