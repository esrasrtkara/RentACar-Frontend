export interface UpdateRentalRequest {
    id: number;
	startDate: Date;
	endDate: Date;
	returnDate?: any;
	startKilometer: number;
	endKilometer?: number;
	carId: number;
	userId: number;
	createDate:Date;
    incoiceId:number| undefined;
}