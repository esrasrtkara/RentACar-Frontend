
export interface AddRentalRequest {
	startDate: Date;
	endDate: Date;
	discountCode: string;
	carId: number;
}