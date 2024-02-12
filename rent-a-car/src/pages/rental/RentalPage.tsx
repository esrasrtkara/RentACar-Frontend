import { MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
import './Rental.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import carService from '../../services/carService';
import { GetByIdCarResponse } from '../../models/responses/Car/getByIdCarResponse';
import Layout from '../../components/layout/Layout';

type Props = {};

const RentalPage = (props: Props) => {
  const carId = useSelector((state: any) => state.carId.carId);

  const [car, setCar] = useState<GetByIdCarResponse>();

  useEffect(() => {
    getByIdCars();
  }, []);

  const getByIdCars = () => {
    carService.getById(carId).then((response) => {
      console.log(response.data);
      setCar(response.data);
    });
  };

  // Date Picker

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

          <MDBCol md="6" lg="5" xl="5"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
};

export default RentalPage;
