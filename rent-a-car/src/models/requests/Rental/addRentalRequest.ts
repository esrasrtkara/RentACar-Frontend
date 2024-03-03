export interface AddRentalRequest {
	startDate: Date;
	endDate: Date;
	discountCode: string|null;
	carId: number;
}