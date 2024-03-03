import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ButtonContent, Dropdown, Image } from 'semantic-ui-react';
import tokenService from '../../../services/tokenService';
import { clearAccessToken } from '../../../store/auth/authSlice';
import './signController.css';

type Props = {};

const SignIn = (props: Props) => {
  const name = useSelector((state: any) => state.name.name);
  const dispatch = useDispatch();
  const firstInitial = name.charAt(0).toUpperCase();
  const avatarUrl = `https://ui-avatars.com/api/?name=${firstInitial}&size=128&color=E44A48&background=FFFFFF&bold=true&font-size=0.7`;
  const handleToken = () => {
    tokenService.clearToken();
    tokenService.clearRefreshToken();
    navigate('/');
    window.location.reload();
    dispatch(clearAccessToken());
  };
  const navigate = useNavigate();

  return (
    <>
      <Image className="avatar" avatar spaced="right" src={avatarUrl} />
      <Dropdown className="dropdown" pointing="top left" text={name}>
        <Dropdown.Menu className="dropdown-menu">
          <ButtonContent className="dropdown-button">
            <Dropdown.Item
              className="dropdown-item"
              text="Profilim"
              icon="info"
              onClick={() => {
                navigate('/profile');
              }}
            />
          </ButtonContent>
          <ButtonContent className="dropdown-button">
            <Dropdown.Item
              className="dropdown-item"
              onClick={handleToken}
              text="Çıkış Yap"
              icon="sign-out"
            />
          </ButtonContent>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default SignIn;
