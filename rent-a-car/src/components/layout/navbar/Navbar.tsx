import {
  DropdownMenu,
  DropdownItem,
  MenuMenu,
  MenuItem,
  Button,
  Dropdown,
  Menu,
  Image,
} from "semantic-ui-react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Teams from "../../teams/Teams";
import { MDBIcon } from "mdb-react-ui-kit";


type Props = {};

const Navbar = (props: Props) => {

  return (
    <>
      <Menu inverted size="large">
        <MenuItem>
          <Link to={"/"}>
          <Button primary>
            <i className="fas fa-house"></i> Ana Sayfa
          </Button>
          </Link>
        </MenuItem>
        <MenuItem><Link to={"/cars"}>
          <Button primary><MDBIcon style={{marginRight:7}} icon="car" />Araçlarımız</Button>
          </Link>
        </MenuItem>

        <Menu.Menu className="menu-logo-container">
          <Menu.Item>
            <Image src="/images/rent-a-car-logo.jpg" className="menu-logo" />
          </Menu.Item>
        </Menu.Menu>

        <MenuMenu position="right">
          <MenuItem>
            <Link to={"/login"}>
            <Button primary>
            <i className="fas fa-right-to-bracket"></i> Üye Girişi
            </Button>
            </Link>
          </MenuItem>
        </MenuMenu>
      </Menu>
    </>
  );
};

export default Navbar;
