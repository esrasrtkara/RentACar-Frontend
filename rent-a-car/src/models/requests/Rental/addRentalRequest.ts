
export interface AddRentalRequest {
	id:number;
	startDate: Date;
	endDate: Date;
	discountCode?: any;
	carId: number;
}