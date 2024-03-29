import jsPDF from 'jspdf';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Layout from '../../components/layout/Layout';
import { RefundRequest } from '../../models/requests/Payment/refundRequest';
import { UpdateRentalRequest } from '../../models/requests/Rental/updateRentalRequest';
import { GetByIdInvoiceResponse } from '../../models/responses/Invoice/getByIdInvoiceResponse';
import invoiceService from '../../services/invoiceService';
import paymentService from '../../services/paymentService';
import rentalService from '../../services/rentalService';
import { clearRental, setRental } from '../../store/rental/rentalSlice';
import './order.css';

type Props = {};

const Order = (props: Props) => {
  const [invoice, setInvoice] = useState<GetByIdInvoiceResponse | null>(null);
  const rental = useSelector((state: any) => state.rental.rental);
  const updateRental = useSelector(
    (state: any) => state.updateRental.updateRental
  );
  const [returnDate, setReturnDate] = useState<string | null>(null);
  const [endKilometer, setEndKilometer] = useState<number>();
  const dispatch = useDispatch();
  const defaultDate = new Date();
  const chargeId = useSelector((state: any) => state.chargeId.chargeId);
  const refundedAmount = useSelector(
    (state: any) => state.refundedAmount.refundedAmount
  );
  const [deleteStatus, setDeleteStatus] = useState(0);
  const name = useSelector((state: any) => state.name.name);
  const surname = useSelector((state: any) => state.surname.surname);

  useEffect(() => {
    if (rental) {
      handleShowInvoice();
    }
  }, [rental]);

  const updateData: UpdateRentalRequest = {
    id: rental.id,
    startDate: rental.startDate,
    endDate: rental.endDate,
    endKilometer: endKilometer,
    returnDate: returnDate,
    carId: rental.carId,
    userId: rental.userId,
    startKilometer: rental.startKilometer,
    createDate: rental.createDate,
    incoiceId: invoice?.id,
  };
  const refundRequest: RefundRequest = {
    chargeId: chargeId,
    amount: refundedAmount,
  };
  const generatePDF = () => {
    if (invoice !== null) {
      const doc = new jsPDF();
      const englishFont = 'times';

      // Title
      doc.setFontSize(20);
      doc.setFont(englishFont, 'bold');
      doc.text('Invoice Details', 105, 20, { align: 'center' });

      // Line
      doc.setLineWidth(0.5);
      doc.line(20, 30, 190, 30);

      // Invoice Details
      doc.setFontSize(12);
      doc.setFont(englishFont, 'normal');
      doc.text(`Invoice No: ${invoice.invoiceNo}`, 20, 40);
      doc.text(`Create Date: ${invoice.createDate}`, 20, 50);
      doc.text(` ${name} ${surname}`, 20, 60);

      // Line
      doc.line(20, 70, 190, 70);

      // Payment Details
      doc.text(
        `Discount Rate: %${(invoice.discountRate * 100).toFixed(2)}`,
        20,
        80
      );
      doc.text(`Tax Rate: %${(invoice.taxRate * 100).toFixed(2)}`, 20, 90);
      doc.setTextColor(0, 0, 255);
      doc.text(`Total Price: ${invoice.totalPrice}$`, 20, 100);

      doc.save('invoice.pdf');
    }
  };

  const handleEndKilometer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setEndKilometer(value);
    } else {
      // Handle error or reset value
    }
  };

  const handleCancelOrder = () => {
    paymentService.refundPayment(refundRequest).then((response) => {});
    rentalService.delete(rental.id).then((response) => {
      setDeleteStatus(1);
    });
    toast.success('Siparişiniz iptal edildi.', {
      position: 'bottom-left',
    });
  };

  const handleUpdateOrder = () => {
    rentalService.updateRental(updateData).then((response) => {
      dispatch(clearRental());
      dispatch(setRental(updateData));
    });
    toast.success('Siparişiniz güncellendi.', {
      position: 'bottom-left',
    });
  };

  const handleShowInvoice = () => {
    invoiceService.getInvoice(rental.id).then((response) => {
      setInvoice(response.data);
    });
  };

  return (
    <Layout>
      <div className="order-container">
        <div className="order-card">
          <div className="order-header">
            <h1>Sipariş Detayları</h1>
          </div>
          <div className="order-details">
            <div className="order-info">
              <p>
                <span className="bold">Sipariş No :</span>
                {rental.id + '12345'}
              </p>
              {rental && rental.createDate && (
                <p>
                  <span className="bold">Tarih:</span>
                  {rental.createDate.toLocaleString()}
                </p>
              )}
            </div>
          </div>
          <table className="order-table">
            <thead>
              <tr>
                <th>Kiralama Başlangıç Tarihi</th>
                <th>Kiralama Bitiş Tarihi</th>
                <th>Kiralama Dönüş Tarihi</th>
                <th>Kiralama Başlangıç Kilometresi</th>
                <th>Kiralama Dönüş Kilometresi</th>
                <th>Toplam Tutar (TL)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{rental.startDate}</td>
                <td>{rental.endDate}</td>

                {rental.returnDate !== null ? (
                  <>
                    <td>{rental.returnDate}</td>
                  </>
                ) : (
                  <td className="return-date-td">
                    <ReactDatePicker
                      className="date"
                      selected={returnDate ? new Date(returnDate) : null}
                      minDate={new Date(rental.endDate)}
                      onChange={(date: Date | null) =>
                        setReturnDate(
                          date ? date.toISOString().substring(0, 10) : null
                        )
                      }
                      dateFormat="dd/MM/yyyy"
                    />
                  </td>
                )}

                <td>{rental.startKilometer}</td>

                {rental.endKilometer !== null && rental.endKilometer !== 0 ? (
                  <>
                    <td>{rental.endKilometer}</td>
                  </>
                ) : (
                  <td className="return-date-td">
                    <div className="date">
                      <input
                        type="number"
                        id="couponInput"
                        name="couponInput"
                        value={endKilometer ?? ''}
                        onChange={handleEndKilometer}
                      />
                    </div>
                  </td>
                )}

                <td>{invoice?.totalPrice}</td>
              </tr>
            </tbody>
          </table>
          <div className="order-buttons">
            <ToastContainer />
            {rental.returnDate !== null || deleteStatus === 1 ? (
              <div></div>
            ) : (
              <MDBBtn
                className="cancel-order-button"
                onClick={handleCancelOrder}>
                Sİparİşİ İptal Et
              </MDBBtn>
            )}
            {rental.returnDate !== null || deleteStatus === 1 ? (
              <div></div>
            ) : (
              <MDBBtn
                className="update-order-button"
                onClick={handleUpdateOrder}>
                Sİparİşİ Güncelle
              </MDBBtn>
            )}

            <MDBBtn
              className="show-invoice-button"
              onClick={() => {
                handleShowInvoice();
                generatePDF();
              }}>
              Faturayı Göster
            </MDBBtn>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
