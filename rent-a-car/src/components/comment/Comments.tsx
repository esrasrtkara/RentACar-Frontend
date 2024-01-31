import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import "./Comments.css";
import { useState } from "react";

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
    title: " ",
    text: " ",
  });

  const handleCommentSubmit = () => {
    // Yeni yorumu mevcut yorumlar listesine ekleyin
    setComments([...comments, newComment]);
    // Yeni yorumu temizleyin
    setNewComment({ id: newComment.id + 1, title: "", text: "" });
  };

  const handleLikeComment = (commentId: number) => {
    // Beğeni işlemleri burada gerçekleştirilebilir
    console.log(`Yorum ${commentId} beğenildi.`);
  };

  const handleDeleteComment = (commentId: number) => {
    // Silme işlemleri burada gerçekleştirilebilir
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
        <MDBRow>
          <MDBCol md="6">
            <MDBInput
              type="text"
              label="Yorum Başlığı"
              value={newComment.title}
              onChange={(e) =>
                setNewComment({ ...newComment, title: e.target.value })
              }
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput
              type="textarea"
              label="Yorum Metni"
              value={newComment.text}
              onChange={(e) =>
                setNewComment({ ...newComment, text: e.target.value })
              }
            />
          </MDBCol>
          <MDBCol md="12" className="text-center">
            <MDBBtn color="primary" onClick={handleCommentSubmit}>
              Yorum Yap
            </MDBBtn>
          </MDBCol>
        </MDBRow>

        {/* Yapılan Yorumlar */}
        {comments.map((comment) => (
          <MDBRow key={comment.id} className="my-4 align-items-center">
            <MDBCol md="2">
              {/* Kullanıcı Profil Fotoğrafı */}
              <img
                className="img-fluid rounded-circle"
                src="https://placekitten.com/100/100"
                alt="Profil"
              />
            </MDBCol>
            <MDBCol md="8">
              {/* Yorum Bilgileri */}
              <h5>{comment.title}</h5>
              <p>{comment.text}</p>
            </MDBCol>
            <MDBCol md="2" className="text-right">
              {/* Beğen ve Sil Butonları */}
              <MDBBtn
                color="primary"
                onClick={() => handleLikeComment(comment.id)}
              >
                <MDBIcon icon="heart" />
              </MDBBtn>
              <MDBBtn
                color="danger"
                onClick={() => handleDeleteComment(comment.id)}
              >
                <MDBIcon icon="trash-alt" />
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        ))}
      </MDBContainer>
    </>
  );
};

export default Comments;
