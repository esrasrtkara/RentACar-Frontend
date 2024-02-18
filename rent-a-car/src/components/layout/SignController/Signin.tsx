import { Dropdown, Image, Menu } from 'semantic-ui-react'

type Props = {
    signOut:any;
};

const SignIn = (props: Props) => {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media.licdn.com/dms/image/D4D03AQFlT0d2oZzewA/profile-displayphoto-shrink_800_800/0/1671223716657?e=1709769600&v=beta&t=53Htu6mkFY3FFEzJpXfJ89jI2dop2hTIl6dMCBY70lg"
        />
        <Dropdown pointing="top left" text="Esra">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item
              onClick={props.signOut}
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
