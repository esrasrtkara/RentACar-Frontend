
export interface GetFilterRentalResponse {
	carStatus: string;
	totalPrice: number;
	discount: number;
	id: number;
	startDate: string;
	endDate: string;
	returnDate?: any;
	startKilometer: number;
	endKilometer: number;
	carId: number;
	userId: number;
	discountCode?: any;
}