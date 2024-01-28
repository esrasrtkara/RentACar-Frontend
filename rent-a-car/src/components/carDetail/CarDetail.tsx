import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "./carDetail.css";

type Props = {};

const CarDetail = (props: Props) => {
  return (
    <>
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="6" lg="5" xl="4" className="mt-5">
            <img 
              src="https://www.avis.com.tr/Avis/media/Avis/Cars/b-fiat-egea-cross.png"
              className="img-fluid"
              alt=""
            />
            <div className="card-header mt-3">
            <h3 className="card-title text-center font-weight-bold">
              Fiat Egea Cross
            </h3>
            <h5 className="text-center font-weight-bold mt-3">
                Araç Detayları
            </h5>
          </div>
          </MDBCol>
        
          <MDBCol
            md="6"
            lg="5"
            xl="9"
            style={{ marginTop: 100, marginLeft: 300}}
          >
            <div className="row">
              <div className="col-md-4">
                <p className="text-dark description font-lg">
                  <i className="fas fa-dollar-sign" title="Daily Price"></i> 150
                  dailyPrice
                </p>
              </div>
              <div className="col-md-4">
                <p className="text-dark description font-lg">
                  <i className="fas fa-users" title="Capacity"></i> 5 + Yetişkin
                </p>
              </div>
              <div className="col-md-4">
                <p className="text-dark description font-lg">
                  <i className="fas fa-paint-brush" title="Color"></i> White
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <p className="text-dark description font-lg">
                  <i className="fas fa-road" title="Kilometer"></i> 25000 Km
                </p>
              </div>
              <div className="col-md-4">
                <p className="text-dark description font-lg">
                  <i className="fas fa-calendar-alt" title="Year"></i> 2022
                </p>
              </div>
              <div className="col-md-4">
                <p className="text-dark description font-lg">
                  <i className="fas fa-box" title="Trunk Volume"></i> 510
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default CarDetail;
