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
import carService from '../../services/carService';
import { setCars } from '../../store/car/carSlice';
import { Col, Row } from 'react-bootstrap';
import CarCardProfile from '../../components/carCardProfile/CarCardProfile';
import { GetAllRentalResponse } from '../../models/responses/Rental/getAllRentalResponse';
import rentalService from '../../services/rentalService';
import { useEffect, useState } from 'react';
import { setRentals } from '../../store/rental/rentalsSlice';
import { GetAllCarResponse } from '../../models/responses/Car/getAllCarResponse';
import commentService from '../../services/commentService';
import { GetAllCommentResponse } from '../../models/responses/Comment/getAllCommentResponse';
import corporateService from '../../services/corporeteService';
import discountService from '../../services/discountService';
import { GetAllDiscountResponse } from '../../models/responses/Discount/GetAllDiscountResponse';

type Props = {};

const Profile = (props: Props) => {
  const dispatch = useDispatch();
  const cars = useSelector((state: any) => state.car.cars);
  const name = useSelector((state: any) => state.name.name);
  const surname = useSelector((state: any) => state.surname.surname);
  const rentals = useSelector((state: any) => state.rentals.rentals);
  const [comments, setComments] = useState<GetAllCommentResponse[]>();
  const [taxNo, setTaxNo] = useState<string>('');
  const [discounts, setDiscounts] = useState<GetAllDiscountResponse[]>([]);
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null);

  useEffect(() => {
    getCars();
    getRental();
    getComment();
    getCorporate();
    getDiscount();
  }, []);

  const getCars = () => {
    carService.getAll().then((response) => {
      dispatch(setCars(response.data.data));
    });
  };
  const getRental = () => {
    rentalService.getRentalUserId().then((response) => {
      dispatch(setRentals(response.data));
    });
  };
  const getComment = () => {
    commentService.getCommentUserId().then((response) => {
      setComments(response.data);
    });
  };

  const getCorporate = () => {
    corporateService.getCorporate().then((response) => {
      setTaxNo(response.data.taxNo);
    });
  };
  const getDiscount = () => {
    discountService.getDiscountUserId().then((response) => {
      setDiscounts(response.data);
    });
  };
  const handleCopyCoupon = (couponCode: string) => {
    navigator.clipboard.writeText(couponCode);
    setCopiedCoupon(couponCode);
    setTimeout(() => {
      setCopiedCoupon(null);
    }, 2000); // 2 saniye sonra geri bildirimi temizle
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
                      <div className="px-3">
                        <MDBCardText className="mb-1 h5">
                          {rentals.length}
                        </MDBCardText>
                        <MDBCardText className="small text-muted mb-0">
                          Kiralamalar
                        </MDBCardText>
                      </div>
                    </div>
                    <div>
                      <MDBCardText className="mb-1 h5">
                        {comments?.length}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Yorumlar
                      </MDBCardText>
                    </div>
                  </div>
                </div>
                {surname ? (
                  <div></div>
                ) : (
                  <MDBCardBody className="text-black p-4">
                    <div className="mb-5">
                      <p className="lead fw-normal mb-1">Bilgilerim</p>
                      <div
                        className="p-4"
                        style={{ backgroundColor: '#f8f9fa' }}>
                        <MDBCardText className="font-italic mb-1">
                          Tax No:{taxNo}
                        </MDBCardText>
                      </div>
                    </div>
                  </MDBCardBody>
                )}

                <div className="discount-coupons">
                  <h4 className="title">İndirim Kuponlarınız</h4>
                  {discounts.length === 0 ? (
                    <p className='no-coupon'>Henüz Kuponunuz Yok</p>
                  ) : (
                    <div className="coupon-tags">
                      {discounts.map((discount, index: number) => (
                        <span
                          key={index}
                          className="coupon-tag"
                          onClick={() => handleCopyCoupon(discount.code)}
                          style={{ cursor: 'pointer' }}>
                          <span className="coupon-code">{discount.code}</span>
                          <span className="coupon-discount">
                            İndirim: %{discount.rate * 100}
                          </span>
                          {copiedCoupon === discount.code && (
                            <span style={{ marginLeft: '5px', color: 'green' }}>
                              Kopyalandı!
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/*Car Card Alanı*/}
                <h4 className="cars-title text-center">Kiraladığım Araçlar</h4>
                <Row>
                  {rentals.map((rental: GetAllRentalResponse, i: number) => {
                    const foundCar: GetAllCarResponse = cars.find(
                      (car: GetAllCarResponse) => car.id === rental.carId
                    );

                    if (foundCar) {
                      return (
                        <Col key={i} className="col-4">
                          <div>
                            <CarCardProfile rental={rental} car={foundCar} />
                          </div>
                        </Col>
                      );
                    } else {
                      return null; // Araba bulunamadıysa, hiçbir şey gösterme
                    }
                  })}
                </Row>
                {/*Yorumlar Alanı*/}
                <h4 className="cars-title text-center">Yorumlarım</h4>
                {comments?.map((comment, i: number) => (
                  <MDBRow
                    key={comment.id}
                    className="comment my-4 align-items-center bg-border">
                    <MDBCol md="6" lg="4" xl="1" className="comment-img">
                      <img
                        className="profile-photo img-fluid rounded-circle"
                        src="https://img.pixers.pics/pho_wat(s3:700/FO/58/46/71/94/700_FO58467194_7cede552ba2758deb49dfb72c3630c51.jpg,700,400,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,350,jpg)/cikartmalar-sevimli-kirmizi-araba-cizgi-film-karakteri.jpg.jpg"
                        alt="Profil"
                        sizes="big"
                      />
                    </MDBCol>
                    <MDBCol md="6" lg="5" xl="3" className="comment-text">
                      {/* Yorum Bilgileri */}
                      {/*<h5>{comment.title}</h5>*/}

                      <p key={i}>{comment.text}</p>
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
                ))}
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Layout>
  );
};

export default Profile;
