import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddCommentRequest } from '../../models/requests/Comment/addCommentRequest';
import carService from '../../services/carService';
import commentService from '../../services/commentService';
import { setComments } from '../../store/comment/commentsSlice';
import './Comments.css';

type Props = {
  carId: number;
};

const Comments = (props: Props) => {
  const [newComment, setNewComment] = useState<AddCommentRequest>({
    text: ' ',
    carId: props.carId,
    userId: 0,
  });

  const comments = useSelector((state: any) => state.comments.comments);
  const dispatch = useDispatch();

  const [textError, setTextError] = useState<boolean>(false);
  const token = useSelector((state: any) => state.auth.accessToken);

  const handleCommentSubmit = () => {
    if (newComment.text.trim() === '') {
      setTextError(true);
    } else {
      setTextError(false);
    }

    // Metin doluysa yorumu ekle
    if (textError === false) {
      commentService.add(newComment).then((response) => {
        console.log(response.data);
        dispatch(setComments([...comments, newComment]));
        setNewComment({ ...newComment, text: '' });
        carService.getComment(props.carId).then((response) => {
          dispatch(setComments(response.data));
        });
      });
    }
  };

  return (
    <>
      <MDBContainer fluid className="p-3 my-5">
        {/* Yorum Yap Alanı */}
        {token !== null ? (
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
              <MDBCol
                md="6"
                lg="5"
                xl="5"
                className="comment-button text-center">
                <MDBBtn color="primary" onClick={handleCommentSubmit}>
                  Yorum Yap
                </MDBBtn>
              </MDBCol>
            </div>
          </MDBRow>
        ) : (
          <div></div>
        )}
      </MDBContainer>
    </>
  );
};

export default Comments;
