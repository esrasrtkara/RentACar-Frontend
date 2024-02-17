
export interface AddRentalResponse {
	id: number;
	startDate: string;
	endDate: string;
	returnDate?: any;
	startKilometer: number;
	endKilometer: number;
	carId: number;
	userId: number;
	discount: number;
	discountCode?: any;
	totalPrice: number;
}

