import { MenuMenu, MenuItem, Button, Menu, Image } from 'semantic-ui-react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';
import SignIn from '../SignController/Signin';
import SignOut from '../SignController/SignOut';
import tokenService from '../../../services/tokenService';

type Props = {};

const Navbar = (props: Props) => {
  const token = tokenService.getToken();

  return (
    <>
      <Menu inverted size="large">
        <MenuItem>
          <Link to={'/'}>
            <Button primary>
              <i className="fas fa-house"></i> Ana Sayfa
            </Button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={'/cars'}>
            <Button primary>
              <MDBIcon style={{ marginRight: 7 }} icon="car" />
              Araçlarımız
            </Button>
          </Link>
        </MenuItem>

        <Menu.Menu className="menu-logo-container">
          <Menu.Item>
            <Image src="/images/rent-a-car-logo.jpg" className="menu-logo" />
          </Menu.Item>
        </Menu.Menu>

        <MenuMenu position="right">
          <MenuItem className="menu-item">
            {token ? <SignIn /> : <SignOut />}
          </MenuItem>
        </MenuMenu>
      </Menu>
    </>
  );
};

export default Navbar;
