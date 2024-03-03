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
import { clearAccessToken, setAccessToken } from '../store/auth/authSlice';
import tokenService from '../services/tokenService';
import Layout from '../components/layout/Layout';
import customerService from '../services/customerService';
import corporeteService from '../services/corporeteService';
import { setName } from '../store/login/nameSlice';
import { setSurname } from '../store/login/surnameSlice';
import { setRefreshToken } from '../store/auth/refreshSlice';

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [customerName, setCustomerName] = useState<string>();
  const [customerSurname, setCustomerSurname] = useState<string>();
  const [companyName, setCompanyName] = useState<string>();
  const [error, setError] = useState<string>();

  const token = useSelector((state: any) => state.auth.accessToken);

  const postData: loginRequest = {
    email: email,
    password: password,
  };

  useEffect(() => {
    if (companyName) {
      dispatch(setName(companyName));

      navigate('/');
    } else if (customerName) {
      dispatch(setName(customerName));
      dispatch(setSurname(customerSurname));
      navigate('/');
    }
  }, [companyName, customerName, token]);

  const login = () => {
    authService
      .login(postData)
      .then((response) => {
        dispatch(setAccessToken(postData.email));
        dispatch(setRefreshToken(response.data.refreshToken));
        tokenService.setToken(response.data.accessToken);
        tokenService.setRefreshToken(response.data.refreshToken);

        customerService.getCustomer().then((response) => {
          setCustomerName(response.data.firstName);
          setCustomerSurname(response.data.lastName);
        });
        corporeteService.getCorporate().then((response) => {
          setCompanyName(response.data.companyName);
        });
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setError('Kayıtlı Kullanıcı Bulunamadı');
          dispatch(clearAccessToken());
        } else if (error.response && error.response.status === 401) {
          setError('Yetkisiz erişim. Lütfen giriş yapın.');
          dispatch(clearAccessToken());
        } else {
          setError(
            'Kayıtlı Kullanıcı Bulunamadı. E-mail ve Şifrenizi Kontrol Edin'
          );
          dispatch(clearAccessToken());
        }
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

            {error && (
              <p
                style={{
                  color: '#E44A48',
                  fontFamily: 'Chakra Petch',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {error}
              </p>
            )}

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Beni Hatırla"
              />
              <a href="/signin">Şifremi Unuttum?</a>
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
              <p className="mb-0">Hesabınız yok mu?</p>
              <Link to={'/signin'}>
                <MDBBtn outline className="mx-2" color="danger">
                  Hesap Oluştur
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
