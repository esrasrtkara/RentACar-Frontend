import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="6" lg="5" xl="4" className="mt-5">
            <img
              src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-23872.jpg?w=1380&t=st=1706185173~exp=1706185773~hmac=91b3317955afec87e64a41e6a6732e74519b748f18a98ccec904901ef1a98856"
              className="img-fluid"
              alt=""
            />
          </MDBCol>

          <MDBCol md="6" lg="5" xl="4" style={{ marginTop: 185 }}>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn
              style={{ backgroundColor: "#E44A48" }}
              className="mb-4 w-100"
              size="lg"
            >
              Log in
            </MDBBtn>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4 fs-4 mt-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className="mx-2" color="danger">
                Create New
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Login;
