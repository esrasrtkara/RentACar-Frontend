import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from 'mdb-react-ui-kit';
import './carCardProfile.css';
import { GetAllCarResponse } from '../../models/responses/Car/getAllCarResponse';

type Props = { car: GetAllCarResponse };

const CarCardProfile = (props: Props) => {
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
                  <MDBBtn className="rent-button-left fw-bold" color="primary">
                      {' '}
                      Aracı İncele
                  </MDBBtn>
                  <MDBBtn className="rent-button fw-bold" color="danger">       
                      {' '}
                      Kİralamayı İptal Et{' '}
                  </MDBBtn>
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
