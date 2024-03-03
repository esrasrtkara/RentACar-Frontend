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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetAllCarResponse } from '../../models/responses/Car/getAllCarResponse';
import carService from '../../services/carService';
import userService from '../../services/userService';
import { setComments } from '../../store/comment/commentsSlice';
import { setUserId } from '../../store/user/userIdSlice';
import './CarCardActive.css';

type Props = {
  activeCar: GetAllCarResponse;
};

const CarCardActive = (props: Props) => {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.auth.accessToken);

  useEffect(() => {
    // Kullanıcı girişi kontrolü yap
    if (token !== null) {
      getUserId();
    }
  }, []);

  const getUserId = () => {
    userService.getUserId().then((response) => {
      dispatch(setUserId(response.data));
    });
  };

  const getCommentCarId = () => {
    carService.getComment(props.activeCar.id).then((response) => {
      dispatch(setComments(response.data));
    });
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
                  src={props.activeCar.imagePath}
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
                      {props.activeCar.modelName}
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
                      <i className="fas fa-dollar-sign" title="Daily Price"></i>{' '}
                      {props.activeCar.dailyPrice}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="text-dark description font-lg">
                      <i className="fas fa-users" title="Capacity"></i>{' '}
                      {props.activeCar.capacity + ' Yetişkin'}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="text-dark description font-lg">
                      <i className="fas fa-paint-brush" title="Color"></i>{' '}
                      {props.activeCar.colorName}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <p className="text-dark description font-lg">
                      <i className="fas fa-road" title="Kilometer"></i>{' '}
                      {props.activeCar.kilometer}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="text-dark description font-lg">
                      <i className="fas fa-calendar-alt" title="Year"></i>{' '}
                      {props.activeCar.year}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="text-dark description font-lg">
                      <i className="fas fa-box" title="Trunk Volume"></i>{' '}
                      {props.activeCar.trunkVolume}
                    </p>
                  </div>
                </div>
                <p className="small text-muted">VISA Platinum</p>
              </MDBCardBody>
              <hr className="my-0" />
              <MDBCardBody className="pb-0">
                <div className="button d-flex justify-content-between align-items-center pb-2 mb-4">
                  <MDBBtn
                    className="rent-button-left fw-bold"
                    color="primary"
                    onClick={() => {
                      getCommentCarId();
                    }}>
                    <Link
                      to={'/cardetail/' + props.activeCar.id}
                      className="link-left">
                      {' '}
                      Aracı İncele
                    </Link>
                  </MDBBtn>
                  <MDBBtn className="rent-button fw-bold" color="danger">
                    <Link
                      to={'/rental/' + props.activeCar.id}
                      className="rent-btn">
                      {' '}
                      Hemen Kİrala{' '}
                    </Link>
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

export default CarCardActive;
