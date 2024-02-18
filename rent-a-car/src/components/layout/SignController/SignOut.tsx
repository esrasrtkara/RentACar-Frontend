import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from 'semantic-ui-react';
type Props = {
  signIn: any;
};

const SignOut = (props: Props) => {
  return (
    <div>
      <MenuItem>
        <Link to={'/login'}>
          <Button primary onClick={props.signIn}>
            <i className="fas fa-right-to-bracket"></i> Üye Girişi
          </Button>
        </Link>
      </MenuItem>
    </div>
  );
};

export default SignOut;