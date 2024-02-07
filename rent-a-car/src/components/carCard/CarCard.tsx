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
import { Link } from "react-router-dom";
import carService from "../../services/carService";
import { GetAllCarResponse } from "../../models/responses/Car/getAllCarResponse";
import CarDetail from "../carDetail/CarDetail";
import { useDispatch, useSelector } from 'react-redux';
import { setCarId } from "../../store/carId/carIdSlice";

type Props = {
  car:GetAllCarResponse
};

const CarCard = (props: Props) => {


  const carId = useSelector((state: any) => state.carId.carId);
  const dispatch = useDispatch();

  const handleCarId = () =>{
    dispatch(setCarId(props.car.id))
  }
  

 

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
                      {props.car.capacity +"Yetişkin"}
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
                  <MDBBtn className="rent-button-left fw-bold" color="primary" onClick={handleCarId}>
                  
                  
                    <Link className="link-left" to={"/cardetail"}>
                      {" "}
                      Aracı İncele 
                    </Link>
                    
                  </MDBBtn>
                  <MDBBtn className="rent-button fw-bold" color="danger">
                   <Link  className="rent-btn" to={"/rental"}> Hemen Kİrala </Link>
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
