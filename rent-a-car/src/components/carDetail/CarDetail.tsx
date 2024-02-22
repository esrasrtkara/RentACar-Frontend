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
import { GetByIdCarResponse } from '../../models/responses/Car/getByIdCarResponse';
import carService from '../../services/carService';
import Layout from '../layout/Layout';
import { useParams } from 'react-router-dom';
import { GetCommentCarId } from '../../models/responses/Car/getCommentCarId';
import userService from '../../services/userService';

const CarDetail = () => {
  const [car, setCar] = useState<GetByIdCarResponse>();
  const [carComments, setCarComments] = useState<GetCommentCarId[]>([]);
  const [likedComments, setLikedComments] = useState<number[]>([]);
  const [userId, setUserId] = useState<number>(0);
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      getByIdCars();
    }
    getCommentCarId();
    userService.getUserId().then((response) => {
      setUserId(response.data.id);
    });
  }, []);

  //console.log(userId);
  carComments.map((comment) => {
    console.log(comment.userId);
  });

  const getByIdCars = () => {
    carService.getById(Number(id)).then((response) => {
      setCar(response.data.data);
    });
  };

  const getCommentCarId = () => {
    carService.getComment(Number(id)).then((response) => {
      setCarComments(response.data);
    });
  };

  const handleLikeComment = (commentId: number) => {
    if (likedComments.includes(commentId)) {
      setLikedComments(likedComments.filter((id) => id !== commentId));
    } else {
      setLikedComments([...likedComments, commentId]);
    }
  };

  const handleDeleteComment = (commentId: number) => {
    const updatedComments = carComments.filter(
      (comment) => comment.id !== commentId
    );
    setCarComments(updatedComments);
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
                    <MDBIcon far icon="calendar-alt" /> <strong>Yıl :</strong>
                    {car?.year}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="tachometer-alt" />{' '}
                    <strong>Kilometre :</strong> {car?.kilometer}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="car" /> <strong>Plaka :</strong>
                    {car?.plate}
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="credit-card" />{' '}
                    <strong>Min Findeks Puanı :</strong>
                    {car?.minFindeksRate}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="suitcase" /> <strong>Bagaç Hacmi :</strong>{' '}
                    {car?.trunkVolume}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="cogs" /> <strong>Vites Türü :</strong>{' '}
                    Otomatik
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="gas-pump" /> <strong>Yakıt Tipi :</strong>
                    Benzinli
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="users" /> <strong>Kapasite :</strong>{' '}
                    {car?.capacity}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="palette" /> <strong>Renk :</strong>{' '}
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
        {car && <Comments carId={car.id} />}

        {carComments.length !== 0 ? (
          carComments.map((comment) => (
            <MDBRow
              key={comment.id}
              className="comment my-4 align-items-center bg-border">
              <MDBCol md="6" lg="5" xl="1" className="comment-img">
                {/* Kullanıcı Profil Fotoğrafı */}
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
                <p>{comment.text}</p>
              </MDBCol>
              <MDBCol
                md="6"
                lg="5"
                xl="3"
                className="like-delete-button text-right comment-container">
                {/* Beğen ve Sil Butonları */}
                <MDBBtn
                  className="like-button"
                  outline={!likedComments.includes(comment.id)}
                  color={
                    likedComments.includes(comment.id) ? 'primary' : 'secondary'
                  }
                  onClick={() => handleLikeComment(comment.id)}>
                  <MDBIcon icon="heart" />
                </MDBBtn>

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
