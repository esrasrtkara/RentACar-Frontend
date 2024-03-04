import { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { CustomerRequest } from '../models/requests/Customer/customerRequest';
import authCustomer from '../services/authCustomer';
import authCorporate from '../services/authCorporate';
import { CorporateRequest } from '../models/requests/Corporate/CorporateRequest';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Layout from '../components/layout/Layout';

type Props = {};

const Signin = (props: Props) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [taxNo, setTaxNo] = useState<string>('');

  const postData: CustomerRequest = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  const postData2: CorporateRequest = {
    email: email,
    password: password,
    companyName: companyName,
    taxNo: taxNo,
  };

  const navigate = useNavigate();

  // Toastify
  const notify = () => toast.success('Kaydınız Başarıyla Oluştu');

  const handleCustomer = () => {
    if (validateEmail(email) && validatePassword(password) && agreeTerms) {
      authCustomer.customer(postData).then((res) => {});
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      notify();
      setTimeout(() => {
        navigate('/login');
      }, 5800);
    } else {
      if (!validateEmail(email)) {
        setEmailError('Geçersiz email adresi');
      }
      if (!validatePassword(password)) {
        setPasswordError('Şifre gereksinimleri karşılanmıyor');
      }
      if (!agreeTerms) {
        alert('Lütfen şartları kabul edin.');
      }
    }
  };

  const handleCorporate = () => {
    if (validateEmail(email) && validatePassword(password) && agreeTerms) {
      authCorporate.corporate(postData2).then((res) => {});
      setCompanyName('');
      setTaxNo('');
      setEmail('');
      setPassword('');
      notify();
      
        navigate('/login');
      
    } else {
      if (!validateEmail(email)) {
        setEmailError('Geçersiz email adresi');
      }
      if (!validatePassword(password)) {
        setPasswordError('Şifre gereksinimleri karşılanmıyor');
      }
      if (!agreeTerms) {
        alert('Lütfen şartları kabul edin.');
      }
    }
  };

  // Customer-CorporateCustomer Input Alanı
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value: string) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  //! Input Kontrolleri ve Validation Alanı

  const [emailValid, setEmailValid] = useState<boolean>(true);
  const [emailError, setEmailError] = useState<string>('');

  const [passwordValid, setPasswordValid] = useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<string>('');

  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const email: string = e.target.value;
    setEmail(email);

    if (!validateEmail(email)) {
      setEmailValid(false);
      setEmailError('Geçersiz email adresi');
    } else {
      setEmailValid(true);
      setEmailError('');
    }
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const password: string = e.target.value;
    setPassword(password);

    if (!validatePassword(password)) {
      setPasswordValid(false);
      setPasswordError('Şifreniz Büyük - Küçük Harf ve Rakam içermelidir.');
    } else {
      setPasswordValid(true);
      setPasswordError('');
    }
  };

  const handleAgreeTermsChange = () => {
    setAgreeTerms(!agreeTerms);
  };
  return (
    <Layout>
      <MDBContainer className="p-3 my-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="6" lg="5" xl="5" className="mt-5">
            <img
              src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1706196740~exp=1706197340~hmac=8343eebe4132560d3918f00dfcbb6649d2621ea7dd4b0af0770bd7e8589f2efb"
              className="img-fluid"
              alt=""
            />
          </MDBCol>

          <MDBCol md="6" lg="5" xl="6" style={{ marginTop: 105 }}>
            <MDBTabs
              pills
              justify
              className="mb-3 d-flex flex-row justify-content-between">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick('tab1')}
                  active={justifyActive === 'tab1'}
                  style={{
                    color: 'white',
                    backgroundColor:
                      justifyActive === 'tab1' ? '#E44A48' : '#CCCCCC',
                  }}>
                  Bİreysel MÜşterİ
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick('tab2')}
                  active={justifyActive === 'tab2'}
                  style={{
                    color: 'white',
                    backgroundColor:
                      justifyActive === 'tab2' ? '#E44A48' : '#CCCCCC',
                  }}>
                  Kurumsal MÜşterİ
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane open={justifyActive === 'tab1'}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Name"
                  id="form1"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Surname"
                  id="form2"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="form3"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    handleEmailChange(e);
                  }}
                />
                {!emailValid && (
                  <div style={{ color: 'red', marginBottom: '0.9em' }}>
                    <MDBIcon icon="exclamation-circle" className="mr-1" />{' '}
                    {emailError}
                  </div>
                )}
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                  value={password}
                  autoComplete="new-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handlePasswordChange(e);
                  }}
                />
                {!passwordValid && (
                  <div style={{ color: 'red', marginBottom: '0.9em' }}>
                    <MDBIcon icon="exclamation-circle" className="mr-1" />{' '}
                    {passwordError}
                  </div>
                )}

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    label="I have read and agree to the terms"
                    checked={agreeTerms}
                    onChange={handleAgreeTermsChange}
                    autoComplete="off"
                  />
                </div>

                <MDBBtn
                  className="mb-4 w-100"
                  onClick={handleCustomer}
                  disabled={!agreeTerms}>
                  Sign up
                </MDBBtn>
                <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </MDBTabsPane>

              <MDBTabsPane open={justifyActive === 'tab2'}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Company Name"
                  id="form5"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Tax Number"
                  id="form6"
                  type="number"
                  value={taxNo}
                  onChange={(e) => setTaxNo(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form7"
                  type="email"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    handleEmailChange(e);
                  }}
                />
                {!emailValid && (
                  <div style={{ color: 'red', marginBottom: '0.9em' }}>
                    <MDBIcon icon="exclamation-circle" className="mr-1" />{' '}
                    {emailError}
                  </div>
                )}
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form8"
                  type="password"
                  value={password}
                  autoComplete="new-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handlePasswordChange(e);
                  }}
                />
                {!passwordValid && (
                  <div style={{ color: 'red', marginBottom: '0.9em' }}>
                    <MDBIcon icon="exclamation-circle" className="mr-1" />{' '}
                    {passwordError}
                  </div>
                )}

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault2"
                    label="I have read and agree to the terms"
                    checked={agreeTerms}
                    onChange={handleAgreeTermsChange}
                    autoComplete="off"
                  />
                </div>

                <MDBBtn
                  className="mb-4 w-100"
                  onClick={handleCorporate}
                  disabled={!agreeTerms}>
                  Sign up
                </MDBBtn>
                <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
};

export default Signin;
