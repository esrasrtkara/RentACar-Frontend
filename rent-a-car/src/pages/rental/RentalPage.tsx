import { MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
import './Rental.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import carService from '../../services/carService';
import { GetByIdCarResponse } from '../../models/responses/Car/getByIdCarResponse';
import Layout from '../../components/layout/Layout';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RentalPage = () => {
  const carId = useSelector((state: any) => state.carId.carId);
  const [car, setCar] = useState<GetByIdCarResponse>();

  useEffect(() => {
    getByIdCars();
  });

  const getByIdCars = () => {
    carService.getById(carId).then((response) => {
      setCar(response.data);
    });
  };

  // Date Picker

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [dayDifference, setDayDifference] = useState<number | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    if (date && date >= new Date()) {
      setStartDate(date);
      setErrorMessage(null);
      if (endDate) {
        const differenceInTime = endDate.getTime() - date.getTime();
        const differenceInDays = Math.ceil(
          differenceInTime / (1000 * 3600 * 24)
        );
        if (differenceInDays > 25) {
          setErrorMessage('Hata: Tarih aralığı 25 günden fazla olamaz');
        }
        setDayDifference(differenceInDays);
      }
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    setErrorMessage(null);
    if (startDate && date) {
      const differenceInTime = date.getTime() - startDate.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      if (differenceInDays > 25) {
        setErrorMessage('Hata: Tarih aralığı 25 günden fazla olamaz');
      }
      setDayDifference(differenceInDays);
    }
  };

  return (
    <Layout>
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="6" lg="5" xl="5" className="car-image">
            <img
              src={car?.imagePath}
              className="img-fluid"
              alt="Fiat Egea Cross"
            />
            <div className="details">
              <div className="row">
                <div className="col-md-4">
                  <p>
                    <MDBIcon far icon="calendar-alt" /> <strong>Yıl:</strong>
                    {car?.year}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="car" /> <strong>Plaka:</strong>
                    {car?.plate}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="credit-card" />{' '}
                    <strong>Min Findeks Puanı:</strong>
                    {car?.minFindeksRate}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="cogs" /> <strong>Vites Türü:</strong>{' '}
                    Otomatik
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="gas-pump" /> <strong>Yakıt Tipi:</strong>
                    Benzinli
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="users" /> <strong>Kapasite:</strong>{' '}
                    {car?.capacity}
                  </p>
                </div>
              </div>
            </div>
          </MDBCol>

          <MDBCol md="6" lg="5" xl="5">
            <div className="datepicker">
              <div className="date-labels">
                <h4 className="label1">Araç Kiralama Tarihi</h4>
                <h4 className="label2">Araç Geri Dönüş Tarihi</h4>
              </div>
              {errorMessage && <div>{errorMessage}</div>}
              <DatePicker
                className="custom-datepicker"
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                maxDate={endDate}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                placeholderText="Başlangıç Tarihi"
              />
              <DatePicker
                className="custom-datepicker datepicker-left"
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="dd/MM/yyyy"
                placeholderText="Bitiş Tarihi"
              />
              {dayDifference !== null && (
                <div className='days-label'><label>Seçili gün miktarı: {dayDifference}</label></div>
              )}
               <div className='days-label'><label>İndirim Oranı : </label></div>
               <div className='days-label'><label>Kiralama Bedeli : </label></div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
};

export default RentalPage;
