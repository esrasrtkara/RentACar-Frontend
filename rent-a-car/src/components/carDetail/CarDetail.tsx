import { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import './carDetail.css';
import Comments from '../comment/Comments';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GetByIdCarResponse } from '../../models/responses/Car/getByIdCarResponse';
import carService from '../../services/carService';
import Layout from '../layout/Layout';
import { useParams } from 'react-router-dom'




const CarDetail = () => {
  const [car, setCar] = useState<GetByIdCarResponse>();
  let { id } = useParams();

  useEffect(() => {
    if(id){
      getByIdCars();
    }
    
  });

  const getByIdCars = () => {
    carService.getById(Number(id)).then((response) => {
      setCar(response.data.data);
    });
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/rental/'+id);
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
          </MDBCol>

          <MDBCol md="6" lg="5" xl="5" style={{ marginTop: 30 }}>
            <div className="card-header mt-4">
              <h1 className="card-title  font-weight-bold">{car?.modelName}</h1>
            </div>
            <div className="daily-price mt-3">
              <p className="text-dark description font-lg">
                <i className="fas fa-dollar-sign" title="Daily Price"></i>{' '}
                {car?.dailyPrice}
              </p>
            </div>
            <div className="star-icons justify-content-end mt-1 mb-4">
              <MDBIcon className="star" fas icon="star" />
              <MDBIcon className="star" fas icon="star" />
              <MDBIcon className="star" fas icon="star" />
              <MDBIcon className="star" fas icon="star" />
            </div>
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
                    <MDBIcon icon="tachometer-alt" />{' '}
                    <strong>Kilometre:</strong> {car?.kilometer}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="car" /> <strong>Plaka:</strong>
                    {car?.plate}
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="credit-card" />{' '}
                    <strong>Min Findeks Puanı:</strong>
                    {car?.minFindeksRate}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="suitcase" /> <strong>Bagaç Hacmi:</strong>{' '}
                    {car?.trunkVolume}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="cogs" /> <strong>Vites Türü:</strong>{' '}
                    Otomatik
                  </p>
                </div>
              </div>

              <div className="row">
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
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="palette" /> <strong>Renk:</strong>{' '}
                    {car?.colorName}
                  </p>
                </div>
              </div>
            </div>
            <MDBBtn
              style={{ backgroundColor: '#E44A48' }}
              className="mb-4 w-100"
              size="lg"
              onClick={handleButtonClick}
            >
              Hemen Kirala
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {car && <Comments />}
    </Layout>
  );
};

export default CarDetail;