import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from 'semantic-ui-react';
import tokenService from '../../../services/tokenService';
type Props = {
  signIn: any;
};

const SignOut = (props: Props) => {
  const token = tokenService.getToken();

  return (
    <div>
      {!token && (
        <MenuItem>
          <Link to={'/login'}>
            <Button primary onClick={props.signIn}>
              <i className="fas fa-right-to-bracket"></i> Üye Girişi
            </Button>
          </Link>
        </MenuItem>
      )}
      <Menu.Item>
           <Button primary onClick={props.signIn}>Giriş Yap</Button>
      </Menu.Item>

    </div>
  );
};

export default SignOut;
