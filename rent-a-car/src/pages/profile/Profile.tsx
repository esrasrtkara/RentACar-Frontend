import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBTypography,
} from 'mdb-react-ui-kit';
import Layout from '../../components/layout/Layout';
import './profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import carService from '../../services/carService';
import { setCars } from '../../store/car/carSlice';
import { Col, Row } from 'react-bootstrap';
import { GetAllCarResponse } from '../../models/responses/Car/getAllCarResponse';
import CarCardProfile from '../../components/carCardProfile/CarCardProfile';

type Props = {};

const Profile = (props: Props) => {
  const dispatch = useDispatch();
  const cars = useSelector((state: any) => state.car.cars);
  const name = useSelector((state: any) => state.name.name);
  const surname = useSelector((state: any) => state.surname.surname);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = () => {
    carService.getAll().then((response) => {
      dispatch(setCars(response.data.data));
    });
  };

  return (
    <Layout>
      <div className="gradient-custom-2">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="12" xl="12">
              <MDBCard>
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{
                    background: 'linear-gradient(to right, #E44A48, #8C8D90)',
                    height: '200px',
                  }}>
                  <div className="ms-3" style={{ marginTop: '130px' }}>
                    <MDBTypography
                      style={{
                        fontFamily: 'Chakra Petch',
                        fontWeight: 600,
                        fontSize: 30,
                      }}
                      tag="h3">
                      {name} {surname}
                    </MDBTypography>
                    <MDBCardText>AUTOPIA</MDBCardText>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="d-flex justify-content-end text-center py-1">
                    <div className="px-3">
                      <MDBCardText className="mb-1 h5">15</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Kiralamalar
                      </MDBCardText>
                    </div>
                    <div>
                      <MDBCardText className="mb-1 h5">5</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Yorumlar
                      </MDBCardText>
                    </div>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">Bilgilerim</p>
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                      <MDBCardText className="font-italic mb-1">
                        Web Developers
                      </MDBCardText>
                      <MDBCardText className="font-italic mb-1">
                        Lives in New York
                      </MDBCardText>
                      <MDBCardText className="font-italic mb-0">
                        Photographer
                      </MDBCardText>
                    </div>
                  </div>
                </MDBCardBody>

                {/*Car Card Alanı*/}
                <h4 className="cars-title text-center">Kiraladığım Araçlar</h4>
                <Row>
                  {cars.slice(0, 3).map((car: GetAllCarResponse, i: number) => (
                    <Col key={i} className="col-4">
                      <CarCardProfile car={car} />
                    </Col>
                  ))}
                </Row>
                {/*Yorumlar Alanı*/}
                <h4 className="cars-title text-center">Yorumlarım</h4>
                <MDBRow className="comment my-4 align-items-center bg-border">
                  <MDBCol md="6" lg="4" xl="1" className="comment-img">
                    <img
                      className="profile-photo img-fluid rounded-circle"
                      src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                      alt="Profil"
                      sizes="big"
                    />
                  </MDBCol>
                  <MDBCol md="6" lg="5" xl="3" className="comment-text">
                    {/* Yorum Bilgileri */}
                    {/*<h5>{comment.title}</h5>*/}
                    <p>comment.text</p>
                  </MDBCol>
                  <MDBCol
                    md="6"
                    lg="5"
                    xl="3"
                    className="like-delete-button text-right comment-container">
                    {/* Beğen ve Sil Butonları */}
                    {/*<MDBBtn
                      className="like-button"
                      {outline={!likedComments.includes(comment.id)}
                      color={
                        likedComments.includes(comment.id)
                          ? 'primary'
                          : 'secondary'
                      }
                      onClick={() => handleLikeComment(comment.id)}>}
                      <MDBIcon icon="heart" />
                    </MDBBtn>*/}

                    {/*comment.userId === userId ? (
                      <MDBBtn
                        color="danger"
                        onClick={() => handleDeleteComment(comment.id)}>
                        <MDBIcon icon="trash-alt" />
                      </MDBBtn>
                    ) : (
                      <div></div>
                    )*/}
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Layout>
  );
};

export default Profile;
