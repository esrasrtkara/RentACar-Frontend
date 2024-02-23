import { MDBBtn } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GetByIdInvoiceResponse } from '../../models/responses/Invoice/getByIdInvoiceResponse';
import invoiceService from '../../services/invoiceService';
import './order.css';
import Layout from '../../components/layout/Layout';
import ReactDatePicker from 'react-datepicker';

type Props = {};

const Order = (props: Props) => {
  const [invoice, setInvoice] = useState<GetByIdInvoiceResponse>();
  const rental = useSelector((state: any) => state.rental.rental);
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  useEffect(() => {
    if (rental) {
      handleShowInvoice();
    }

    console.log(rental.id);
  }, []);

  const handleCancelOrder = () => {
    // Siparişi iptal etme işlemleri burada gerçekleştirilebilir
    console.log('Sipariş iptal edildi.');
  };

  const handleUpdateOrder = () => {
    // Siparişi güncelleme işlemleri burada gerçekleştirilebilir
    console.log('Sipariş güncellendi.');
  };

  const handleShowInvoice = () => {
    invoiceService.getInvoice(rental.id).then((response) => {
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
                <th>Toplam Tutar (TL)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{rental.startDate}</td>
                <td>{rental.endDate}</td>
                <td className="return-date-td">
                  <ReactDatePicker
                    className="date"
                    selected={returnDate}
                    minDate={new Date(rental.endDate)}
                    onChange={(date: Date | null) => setReturnDate(date)}
                  />
                </td>
                <td>{invoice?.totalPrice}</td>
              </tr>
            </tbody>
          </table>
          <div className="order-buttons">
            <MDBBtn className="cancel-order-button" onClick={handleCancelOrder}>
              Sİparİşİ İptal Et
            </MDBBtn>
            <MDBBtn className="update-order-button" onClick={handleUpdateOrder}>
              Sİparİşİ Güncelle
            </MDBBtn>
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
