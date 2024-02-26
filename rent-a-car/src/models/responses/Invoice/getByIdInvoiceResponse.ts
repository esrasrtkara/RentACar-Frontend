
export interface GetByIdInvoiceResponse {
	id: number;
	invoiceNo: string;
	totalPrice: number;
	discountRate: number;
	taxRate: number;
	rentalId: number;
	createDate: string;
}
