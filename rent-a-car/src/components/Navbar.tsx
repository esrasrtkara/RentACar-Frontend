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

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Menu inverted size="large">
      <MenuItem>
        <Button primary>Ana Sayfa</Button>
      </MenuItem>
      <MenuItem>
        <Button primary>Hakımızda</Button>
      </MenuItem>

      <Menu.Menu className="menu-logo-container">
        <Menu.Item>
          <Image src="/images/rent-a-car-logo.jpg" className="menu-logo" />
        </Menu.Item>
      </Menu.Menu>

      <MenuMenu position="right">
        <Dropdown item text="Sepetiniz">
          <DropdownMenu>
            <DropdownItem>English</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <MenuItem>
          <Button primary>Kayıt Ol</Button>
        </MenuItem>
      </MenuMenu>
    </Menu>
  );
};

export default Navbar;