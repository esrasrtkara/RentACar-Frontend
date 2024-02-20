import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { loginRequest } from '../models/requests/Login/loginRequest';
import authService from '../services/authService';
import { setAccessToken } from '../store/auth/authSlice';
import tokenService from '../services/tokenService';
import Layout from '../components/layout/Layout';
import customerService from '../services/customerService';
import corporeteService from '../services/corporeteService';
import { setName } from '../store/login/nameSlice';

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [customerName, setCustomerName] = useState<string>();
  const [companyName, setCompanyName] = useState<string>();
  const [error, setError] = useState(null);

  const token = useSelector((state: any) => state.auth.accessToken);

  const postData: loginRequest = {
    email: email,
    password: password,
  };

  useEffect(() => {
    if (companyName) {
      dispatch(setName(companyName));
      console.log(companyName);
      navigate("/");
    } else if (customerName) {
      dispatch(setName(customerName));
      console.log(customerName);
      navigate("/");
    }
  }, [companyName, customerName]);

  const login = () => {
    authService.login(postData).then((response) => {
      dispatch(setAccessToken(postData.email));
      console.log(response.data);
      tokenService.setToken(response.data);
      customerService.getCustomer().then((response) => {
        setCustomerName(response.data.firstName);
        console.log(response.data);
      });
      corporeteService.getCorporate().then((response) => {
        setCompanyName(response.data.companyName);
        console.log(response.data);
      });
    })
    .catch((error) =>{
      setError(error.response.data.message);
    });
    
  };

  return (
    <Layout>
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
              id="email"
              type="email"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="password"
              type="password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
           

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="/signin">Forgot password?</a>
            </div>

            <MDBBtn
              style={{ backgroundColor: '#E44A48' }}
              className="mb-4 w-100"
              size="lg"
              onClick={() => {
                login();
              }}>
              Log in
            </MDBBtn>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4 fs-4 mt-4">
              <p className="mb-0">Don't have an account?</p>
              <Link to={'/signin'}>
                <MDBBtn outline className="mx-2" color="danger">
                  Create New
                </MDBBtn>
              </Link>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
};

export default Login;