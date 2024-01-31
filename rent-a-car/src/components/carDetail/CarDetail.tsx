import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./CarDetail.css";
import Comments from "../comment/Comments";

type Props = {};


const CarDetail = (props: Props) => {
  return (
    <>
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="6" lg="5" xl="5" className="car-image">
            <img
              src="https://www.avis.com.tr/Avis/media/Avis/Cars/b-fiat-egea-cross.png"
              className="img-fluid"
              alt="Fiat Egea Cross"
            />
          </MDBCol>

          <MDBCol md="6" lg="5" xl="5" style={{ marginTop: 30 }}>
            <div className="card-header mt-4">
              <h1 className="card-title  font-weight-bold">Fiat Egea Cross</h1>
            </div>
            <div className="daily-price mt-3">
              <p className="text-dark description font-lg">
                <i className="fas fa-dollar-sign" title="Daily Price"></i> 150
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
                    2020
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="tachometer-alt" />{" "}
                    <strong>Kilometre:</strong> 35000
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="car" /> <strong>Plaka:</strong> 06 AD 007
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="credit-card" />{" "}
                    <strong>Min Findeks Puanı:</strong> 7.45
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="suitcase" /> <strong>Bagaç Hacmi:</strong>{" "}
                    510 litre
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="cogs" /> <strong>Vites Türü:</strong> Manuel
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="gas-pump" /> <strong>Yakıt Tipi:</strong>{" "}
                    Benzinli
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="users" /> <strong>Kapasite:</strong> 5 kişi
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="palette" /> <strong>Renk:</strong> White
                  </p>
                </div>
              </div>
            </div>
            <MDBBtn
              style={{ backgroundColor: "#E44A48" }}
              className="mb-4 w-100"
              size="lg"
            >
              Hemen Kİrala
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <Comments/>
      </MDBContainer>
    </>
  );
};

export default CarDetail;
