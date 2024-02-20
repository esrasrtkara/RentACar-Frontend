import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from 'mdb-react-ui-kit';
import './Comments.css';
import { useState } from 'react';
import { AddCommentRequest } from '../../models/requests/Comment/addCommentRequest';
import commentService from '../../services/commentService';
import carService from '../../services/carService';
import { GetCommentCarId } from '../../models/responses/Car/getCommentCarId';

type Props = {
  carId: number;
};

const Comments = (props: Props) => {
  const [comments, setComments] = useState<GetCommentCarId[]>([]);
  const [newComment, setNewComment] = useState<AddCommentRequest>({
    id: 0,
    text: ' ',
    carId: props.carId,
    userId: 0,
  });

  const [likedComments, setLikedComments] = useState<number[]>([]);
  const [textError, setTextError] = useState<boolean>(false);

  const handleCommentSubmit = () => {
    commentService.add(newComment).then((response) => {
      console.log(response.data);
    });

    if (newComment.text.trim() === '') {
      setTextError(true);
    } else {
      setTextError(false);
    }

    // Başlık ve metin doluysa yorumu ekleyin
    if (newComment.text.trim() !== '') {
      carService.getComment(props.carId).then((response) => {
        setComments([...response.data, newComment]);
        setNewComment({ id: 0, text: '', carId: props.carId, userId: 0 });
      });
    }
  };

  const handleLikeComment = (commentId: number) => {
    if (likedComments.includes(commentId)) {
      setLikedComments(likedComments.filter((id) => id !== commentId));
    } else {
      setLikedComments([...likedComments, commentId]);
    }
  };

  const handleDeleteComment = (commentId: number) => {
    // Silme işlemleri
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };

  return (
    <>
      <MDBContainer fluid className="p-3 my-5">
        {/* Yorum Yap Alanı */}
        <MDBRow className="semi-container">
          <div className="comment-header text-center mt-4">
            <h1 className="card-title  font-weight-bold">Yorumlar</h1>
          </div>
          <div className="input-container">
            <MDBCol md="6" lg="5" xl="10" className="mrl">
              <MDBInput
                type="textarea"
                label="Yorum Metni"
                value={newComment.text}
                onChange={(e) => {
                  setNewComment({ ...newComment, text: e.target.value });
                  setTextError(false); // Input değiştiğinde hatayı temizleme
                }}
                // Hata durumuna göre border rengini ayarlama
                className={textError ? 'border border-danger' : ''}
              />
              {/* Metin hatası durumunda uyarı gösterme */}
              {textError && (
                <div className="text-danger d-flex align-items-center mt-2">
                  <MDBIcon icon="exclamation-circle" className="mr-1" />
                  Lütfen bir metin girin.
                </div>
              )}
            </MDBCol>
            <MDBCol md="6" lg="5" xl="5" className="comment-button text-center">
              <MDBBtn color="primary" onClick={handleCommentSubmit}>
                Yorum Yap
              </MDBBtn>
            </MDBCol>
          </div>
        </MDBRow>

        {/* Yapılan Yorumlar */}
        {comments.length !== 0 ? (
          comments.map((comment) => (
            <MDBRow
              key={comment.id}
              className="comment my-4 align-items-center bg-border">
              <MDBCol md="6" lg="5" xl="1" className="comment-img">
                {/* Kullanıcı Profil Fotoğrafı */}
                <img
                  className="img-fluid rounded-circle"
                  src="https://rajueditor.com/wp-content/uploads/2023/10/instagram-profil-fotografi-netlestirme-1024x1024.jpg"
                  alt="Profil"
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
                <MDBBtn
                  color="danger"
                  onClick={() => handleDeleteComment(comment.id)}>
                  <MDBIcon icon="trash-alt" />
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          ))
        ) : (
          <div className="no-data">No Comment</div>
        )}
      </MDBContainer>
    </>
  );
};

export default Comments;
