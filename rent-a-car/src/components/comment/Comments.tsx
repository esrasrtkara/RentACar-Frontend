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

type Props = {};

interface Comment {
  id: number;
  title: string;
  text: string;
}

const Comments = (props: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<Comment>({
    id: 1,
    title: ' ',
    text: ' ',
  });

  const [likedComments, setLikedComments] = useState<number[]>([]);

  const [titleError, setTitleError] = useState<boolean>(false);
  const [textError, setTextError] = useState<boolean>(false);

  const handleCommentSubmit = () => {
    if (newComment.title.trim() === '') {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (newComment.text.trim() === '') {
      setTextError(true);
    } else {
      setTextError(false);
    }

    // Başlık ve metin doluysa yorumu ekleyin
    if (newComment.title.trim() !== '' && newComment.text.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment({ id: newComment.id + 1, title: '', text: '' });
    }
  };

  const handleLikeComment = (commentId: number) => {
    // Beğeni işlemleri
    console.log(`Yorum ${commentId} beğenildi.`);
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
    console.log(`Yorum ${commentId} silindi.`);
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
            <MDBCol md="6" lg="5" xl="10" className="comment-title">
              <MDBInput
                type="text"
                label="Yorum Başlığı"
                value={newComment.title}
                onChange={(e) => {
                  setNewComment({ ...newComment, title: e.target.value });
                  setTitleError(false); // Input değiştiğinde hatayı temizleme
                }}
                // Hata durumuna göre border rengini ayarlama
                className={titleError ? 'border border-danger' : ''}
              />
              {/* Başlık hatası durumunda uyarı gösterme */}
              {titleError && (
                <div className="text-danger d-flex align-items-center mt-1">
                  <MDBIcon icon="exclamation-circle" className="mr-1" />
                  Lütfen bir başlık girin.
                </div>
              )}
            </MDBCol>

            <MDBCol md="6" lg="5" xl="10" className='mrl'>
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
        {comments.length != 0 ? (
          comments.map((comment) => (
            <MDBRow
              key={comment.id}
              className="my-4 align-items-center bg-border">
              <MDBCol md="6" lg="5" xl="1" className="comment-img">
                {/* Kullanıcı Profil Fotoğrafı */}
                <img
                  className="img-fluid rounded-circle"
                  src="https://avatars.githubusercontent.com/u/56135111?v=4"
                  alt="Profil"
                />
              </MDBCol>
              <MDBCol md="6" lg="5" xl="3" className="comment-text">
                {/* Yorum Bilgileri */}
                <h5>{comment.title}</h5>
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