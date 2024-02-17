
export interface AddRentalRequest {
	startDate: Date;
	endDate: Date;
	discountCode?: any;
	carId: number;
}