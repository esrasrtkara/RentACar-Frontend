import { MenuMenu, MenuItem, Button, Menu, Image } from 'semantic-ui-react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';
import SignIn from '../SignController/Signin';
import SignOut from '../SignController/SignOut';
import { useState } from 'react';


type Props = {};

const Navbar = (props: Props) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  function handleSignedOut(params:any) {
    setIsAuthenticated(false);
    navigate("/");
  }

  function handleSignedIn(params:any) {
    setIsAuthenticated(true);
  }

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
        {isAuthenticated?<SignIn signOut={handleSignedOut} />:<SignOut signIn={handleSignedIn}/>}
        </MenuMenu>
      </Menu>
    </>
  );
};

export default Navbar;
