import { MenuMenu, MenuItem, Button, Menu, Image } from 'semantic-ui-react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';
import SignIn from '../SignController/Signin';
import SignOut from '../SignController/SignOut';
import { useState } from 'react';
import tokenService from '../../../services/tokenService';


type Props = {};

const Navbar = (props: Props) => {


  const navigate = useNavigate();

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
        {token?<SignIn/>:<SignOut/>}
        </MenuMenu>
      </Menu>
    </>
  );
};

export default Navbar;
