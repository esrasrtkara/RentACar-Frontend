import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { GetByIdCarResponse } from '../../models/responses/Car/getByIdCarResponse';
import { GetCommentCarId } from '../../models/responses/Car/getCommentCarId';
import carService from '../../services/carService';
import commentService from '../../services/commentService';
import { setComments } from '../../store/comment/commentsSlice';
import Comments from '../comment/Comments';
import Layout from '../layout/Layout';
import './carDetail.css';

const CarDetail = () => {
  const [car, setCar] = useState<GetByIdCarResponse>();

  const comments = useSelector((state: any) => state.comments.comments);
  const userId = useSelector((state: any) => state.userId.userId);
  let { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      getByIdCars();
    }
    carService.getComment(Number(id)).then((response) => {
      dispatch(setComments(response.data));
    });
  }, []);

  const getByIdCars = () => {
    carService.getById(Number(id)).then((response) => {
      setCar(response.data.data);
    });
  };

  const handleDeleteComment = (commentId: number) => {
    const updatedComments = comments.filter(
      (comment: GetCommentCarId) => comment.id !== commentId
    );
    dispatch(setComments(updatedComments));
    commentService.delete(commentId);
  };
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/rental/' + id);
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
                    {car?.gearType}
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="gas-pump" /> <strong>Yakıt Tipi:</strong>
                    {car?.fuelType}
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
              onClick={handleButtonClick}>
              Hemen Kirala
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <Comments carId={Number(id)} />

        {comments.length !== 0 ? (
          comments.map((comment: GetCommentCarId) => (
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
                <p>{comment.text}</p>
              </MDBCol>
              <MDBCol
                md="6"
                lg="5"
                xl="3"
                className="like-delete-button text-right comment-container">
                {/* Beğen ve Sil Butonları */}
                {comment.userId === userId ? (
                  <MDBBtn
                    color="danger"
                    onClick={() => handleDeleteComment(comment.id)}>
                    <MDBIcon icon="trash-alt" />
                  </MDBBtn>
                ) : (
                  <div></div>
                )}
              </MDBCol>
            </MDBRow>
          ))
        ) : (
          <div className="no-data">No Comment</div>
        )}
      </MDBContainer>
    </Layout>
  );
};

export default CarDetail;
