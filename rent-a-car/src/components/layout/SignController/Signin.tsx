import { Dropdown, Image, Menu } from 'semantic-ui-react'
import tokenService from '../../../services/tokenService';
import { useNavigate } from 'react-router-dom';

type Props = {
};

const SignIn = (props: Props) => {
  const name = "Abdulkadir";
  const firstInitial = name.charAt(0).toUpperCase();
  const avatarUrl = `https://ui-avatars.com/api/?name=${firstInitial}&size=128`;
    const handleToken = () => {
      tokenService.clearToken();
      navigate("/");
    }
    const navigate = useNavigate();
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src={avatarUrl}
        />
        <Dropdown pointing="top left" text={name}>
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item
              onClick={handleToken}
              text="Çıkış Yap"
              icon="sign-out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
};

export default SignIn;
