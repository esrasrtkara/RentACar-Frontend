
export interface Data {
	id: number;
	kilometer: number;
	year: number;
	plate: string;
	dailyPrice: number;
	minFindeksRate: number;
	imagePath: string;
	trunkVolume: number;
	capacity: number;
	caseType: string;
	fuelType: string;
	gearType: string;
	modelName: string;
	colorName: string;
}

export interface GetByIdCarResponse {
	success: boolean;
	message?: any;
	data: Data;
}