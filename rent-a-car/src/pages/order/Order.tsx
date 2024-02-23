import { useEffect, useState } from 'react';
import './order.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import { GetAllRentalResponse } from '../../models/responses/Rental/getAllRentalResponse';
import { GetAllCarResponse } from '../../models/responses/Car/getAllCarResponse';
import invoiceService from '../../services/invoiceService';
import { GetByIdInvoiceResponse } from '../../models/responses/Invoice/getByIdInvoiceResponse';
import { useDispatch, useSelector } from 'react-redux';

type Props = { 
 
};

const Order = (props: Props) => {
  const [invoice, setInvoice] = useState<GetByIdInvoiceResponse>()
  const rental = useSelector((state: any) => state.rental.rental);
  useEffect(() => {
    if(rental){
      handleShowInvoice();
    }
   
   console.log(rental.id)
    
  }, [])
  
  const handleCancelOrder = () => {
    // Siparişi iptal etme işlemleri burada gerçekleştirilebilir
    console.log('Sipariş iptal edildi.');
  };

  const handleUpdateOrder = () => {
    // Siparişi güncelleme işlemleri burada gerçekleştirilebilir
    console.log('Sipariş güncellendi.');
  };

  const handleShowInvoice = () => {
    invoiceService.getInvoice(rental.id).then(response=>{
      setInvoice(response.data)
      console.log(response.data)
    })
    console.log('Fatura gösterildi.');
  };

  return (
    <div className="order-container">
      <div className="order-card">
        <div className="order-header">
          <h1>Sipariş Detayları</h1>
        </div>
        <div className="order-details">
          <div className="order-info">
            <p>
              <span className="bold">Sipariş No:</span>{rental.id+"12345"}
            </p>
            <p>
              <span className="bold">Tarih:</span>{rental.createDate.toLocaleString()}
            </p>
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
              <td>{rental.returnDate}</td>
              <td>{invoice?.totalPrice}</td>
            </tr>
          </tbody>
        </table>
        <div className="order-buttons">
          <MDBBtn className="cancel-order-button" onClick={handleCancelOrder}>
            Siparişi İptal Et
          </MDBBtn>
          <MDBBtn className="update-order-button" onClick={handleUpdateOrder}>
            Siparişi Güncelle
          </MDBBtn>
        </div>
      </div>
      <div className="invoice-button-container">
        <MDBBtn className="show-invoice-button" onClick={handleShowInvoice}>
          Faturayı Göster
        </MDBBtn>
      </div>
    </div>
  );
};

export default Order;
