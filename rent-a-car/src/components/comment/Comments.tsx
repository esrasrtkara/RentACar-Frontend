import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from 'mdb-react-ui-kit';
import './Comments.css';
import { useEffect, useState } from 'react';
import { AddCommentRequest } from '../../models/requests/Comment/addCommentRequest';
import commentService from '../../services/commentService';
import carService from '../../services/carService';
import { GetCommentCarId } from '../../models/responses/Car/getCommentCarId';

type Props = {
  carId: number;
};

const Comments = (props: Props) => {
  const [newComment, setNewComment] = useState<AddCommentRequest>({
    id: 0,
    text: ' ',
    carId: props.carId,
    userId: 0,
  });


  const [textError, setTextError] = useState<boolean>(false);

  const handleCommentSubmit = () => {
   

    if (newComment.text.trim() === '') {
      setTextError(true);
    } else {
      setTextError(false);
    }

    // Başlık ve metin doluysa yorumu ekleyin
    if (newComment.text.trim() !== '') {
      commentService.add(newComment).then((response) => {
        console.log(response.data);
        setNewComment({ id: 0, text: '', carId: props.carId, userId: 0 });
      });

    }
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
      </MDBContainer>
    </>
  );
};

export default Comments;
