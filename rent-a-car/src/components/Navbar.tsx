import React from 'react'
import {
    DropdownMenu,
    DropdownItem,
    MenuMenu,
    MenuItem,
    Button,
    Dropdown,
    Menu,
  } from 'semantic-ui-react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <Menu inverted size='large'>
    <MenuItem
      name='home'
    />
    <MenuItem
      name='messages'
    />

    <MenuMenu position='right'>
      <Dropdown item text='Language'>
        <DropdownMenu>
          <DropdownItem>English</DropdownItem>
          <DropdownItem>Russian</DropdownItem>
          <DropdownItem>Spanish</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <MenuItem>
        <Button primary>Sign Up</Button>
      </MenuItem>
    </MenuMenu>
  </Menu>
  )
}

export default Navbar