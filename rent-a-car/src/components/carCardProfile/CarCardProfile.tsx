import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRipple,
  MDBRow,
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetAllCarResponse } from '../../models/responses/Car/getAllCarResponse';
import { GetAllRentalResponse } from '../../models/responses/Rental/getAllRentalResponse';
import { setRental } from '../../store/rental/rentalSlice';
import './carCardProfile.css';

type Props = {
  rental: GetAllRentalResponse;
  car: GetAllCarResponse;
};

const CarCardProfile = (props: Props) => {
  const dispatch = useDispatch();
  const getRental = () => {
    dispatch(setRental(props.rental));
  };
  return (
    <>
      <MDBContainer fluid className="my-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="6" lg="12" xl="12">
            <MDBCard style={{ borderRadius: '20px' }}>
              <MDBRipple
                rippleColor="lights"
                rippleTag="div"
                className="bg-image rounded hover-overlay">
                <MDBCardImage
                  src={props.car.imagePath}
                  fluid
                  className="w-100"
                  style={{
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                  }}
                />
                <a href="#!">
                  <div className="mask"></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="pb-0">
                <div className="d-flex justify-content-between">
                  <div className="header mt-4">
                    <h1 className="card-title  font-weight-bold">
                      {props.car.modelName}
                    </h1>
                  </div>
                  <div>
                    <div className="star-icons justify-content-end mb-4">
                      <MDBIcon className="star" fas icon="star" />
                      <MDBIcon className="star" fas icon="star" />
                      <MDBIcon className="star" fas icon="star" />
                      <MDBIcon className="star" fas icon="star" />
                    </div>
                  </div>
                </div>
              </MDBCardBody>
              <hr className="my-0" />
              <MDBCardBody className="pb-0">
                <div className="button d-flex justify-content-between align-items-center pb-2 mb-4">
                  <Link
                    to="/order"
                    className="rent-button-left fw-bold"
                    style={{ textDecoration: 'none' }}>
                    {props.rental.returnDate ? (
                      <MDBBtn
                      className="rent-button-left fw-bold"
                      color="secondary"
                      to="/order"
                      onClick={getRental}>
                      SİPARİŞİ İNCELE
                    </MDBBtn>
                    ):(
                      <MDBBtn
                      className="rent-button-left fw-bold"
                      color="primary"
                      to="/order"
                      onClick={getRental}>
                      SİPARİŞİ İNCELE
                    </MDBBtn>
                    )}
                    
                  </Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default CarCardProfile;
