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
import { CarModel } from "../models/CarModel";

type Props = {
  car:CarModel
};

const CarCard = (props: Props) => {
  return (
    <>
      <MDBContainer fluid className="my-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="6" lg="4" xl="10">
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
                <div className="d-flex justify-content-between">
                  <p>
                    <a href="#!" className="text-dark">
                        {props.car.dailyPrice + "$"}
                    </a>
                  </p>
                  <p className="text-dark">#### 8787</p>
                </div>
                <p className="small text-muted">VISA Platinum</p>
              </MDBCardBody>
              <hr className="my-0" />
              <MDBCardBody className="pb-0">
                <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                  <a href="#!" className="text-dark fw-bold">
                    Cancel
                  </a>
                  <MDBBtn color="primary">Hemen Kİrala</MDBBtn>
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
