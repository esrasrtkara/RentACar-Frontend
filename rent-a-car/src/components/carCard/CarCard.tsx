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
} from "mdb-react-ui-kit";
import { CarModel } from "../../models/CarModel";
import "./CarCard.css";

type Props = {
  car: CarModel;
};

const CarCard = (props: Props) => {
  return (
    <>
      <MDBContainer fluid className="my-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="6" lg="12" xl="12">
            <MDBCard style={{ borderRadius: "20px" }}>
              <MDBRipple
                rippleColor="lights"
                rippleTag="div"
                className="bg-image rounded hover-overlay"
              >
                <MDBCardImage
                  src={props.car.imagePath}
                  fluid
                  className="w-100"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                />
                <a href="#!">
                  <div className="mask"></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="pb-0">
                <div className="d-flex justify-content-between">
                  <div>
                    <p>
                      <a href="#!" className="text-dark">
                        {props.car.modelName}
                      </a>
                    </p>
                    <p className="small text-muted"></p>
                  </div>
                  <div>
                    <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                    <p className="small text-muted">Rated 4.0/5</p>
                  </div>
                </div>
              </MDBCardBody>
              <hr className="my-0" />
              <MDBCardBody className="pb-0">
                <div className="row">
                  <div className="col-md-4">
                    <p className="text-dark description font-lg">
                      <i className="fas fa-dollar-sign" title="Daily Price"></i>{" "}
                      {props.car.dailyPrice}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="text-dark description font-lg">
                      <i className="fas fa-users" title="Capacity"></i>{" "}
                      {props.car.capacity + " Yetişkin"}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="text-dark description font-lg">
                      <i className="fas fa-paint-brush" title="Color"></i>{" "}
                      {props.car.colorName}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <p className="text-dark description font-lg">
                      <i className="fas fa-road" title="Kilometer"></i>{" "}
                      {props.car.kilometer + " Km"}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="text-dark description font-lg">
                      <i className="fas fa-calendar-alt" title="Year"></i>{" "}
                      {props.car.year}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="text-dark description font-lg">
                      <i className="fas fa-box" title="Trunk Volume"></i>{" "}
                      {props.car.trunkVolume}
                    </p>
                  </div>
                </div>
                <p className="small text-muted">VISA Platinum</p>
              </MDBCardBody>
              <hr className="my-0" />
              <MDBCardBody className="pb-0">
                <div className="button d-flex justify-content-between align-items-center pb-2 mb-4">
                  <MDBBtn className="rent-button-left fw-bold" color="primary">
                    Aracı İncele
                  </MDBBtn>
                  <MDBBtn className="rent-button fw-bold" color="danger">
                    Hemen Kİrala
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

export default CarCard;
