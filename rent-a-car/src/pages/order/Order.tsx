import { MDBBtn } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetByIdInvoiceResponse } from '../../models/responses/Invoice/getByIdInvoiceResponse';
import invoiceService from '../../services/invoiceService';
import './order.css';
import Layout from '../../components/layout/Layout';
import ReactDatePicker from 'react-datepicker';
import { UpdateRentalRequest } from '../../models/requests/Rental/updateRentalRequest';
import rentalService from '../../services/rentalService';
import { clearRental, setRental } from '../../store/rental/rentalSlice';
import { setUpdateRental } from '../../store/rental/updateRentalSlice';
import moment from 'moment';

type Props = {};

const Order = (props: Props) => {
  const [invoice, setInvoice] = useState<GetByIdInvoiceResponse>();
  const rental = useSelector((state: any) => state.rental.rental);
  const updateRental = useSelector((state: any) => state.updateRental.updateRental);
  const [returnDate, setReturnDate] = useState<string | null>(null);
  const [endKilometer, setEndKilometer] = useState<number>();
  const dispatch = useDispatch();
  const defaultDate = new Date();

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
    startKilometer:rental.startKilometer,
    createDate:rental.createDate,
    incoiceId:invoice?.id,
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
    console.log('Sipariş iptal edildi.');
  };

  const handleUpdateOrder = () => {
    rentalService.updateRental(updateData).then(response => {
      console.log(response.data);
      dispatch(clearRental());
      dispatch(setRental(updateData));
      console.log(rental)
    });
    console.log('Sipariş güncellendi.');
  };

  const handleShowInvoice = () => {
    invoiceService.getInvoice(rental.id).then(response => {
      setInvoice(response.data);
      console.log(response.data);
    });
    console.log('Fatura gösterildi.');
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
                <td>
                  {rental.returnDate !== null ? (
                    <>{rental.returnDate}</>
                  ) : (
                    <ReactDatePicker
  className="date"
  selected={returnDate ? new Date(returnDate) : null}
  minDate={new Date(rental.endDate)}
  onChange={(date: Date | null) => setReturnDate(date ? date.toISOString().substring(0, 10) : null)}
  dateFormat="dd/MM/yyyy"
/>
                  )}
                </td>
                <td>{rental.startKilometer}</td>
                <td>
                  {rental.endKilometer !== null && rental.endKilometer !== 0 ? (
                    <>{rental.endKilometer}</>
                  ) : (
                    <div className="days-label">
                      <input
                        type="number"
                        id="couponInput"
                        name="couponInput"
                        value={endKilometer ?? ''}
                        onChange={handleEndKilometer}
                      />
                    </div>
                  )}
                </td>
                <td>{invoice?.totalPrice}</td>
              </tr>
            </tbody>
          </table>
          <div className="order-buttons">
            
            {rental.returnDate !==null ?(<div></div>):(
              <MDBBtn className="cancel-order-button" onClick={handleCancelOrder}>
              Sİparİşİ İptal Et
            </MDBBtn>
            )}
            {rental.returnDate !==null ?(<div></div>):(
              <MDBBtn className="update-order-button" onClick={handleUpdateOrder}>
              Sİparİşİ Güncelle
            </MDBBtn>
            )}
            
            <MDBBtn className="show-invoice-button" onClick={handleShowInvoice}>
              Faturayı Göster
            </MDBBtn>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
