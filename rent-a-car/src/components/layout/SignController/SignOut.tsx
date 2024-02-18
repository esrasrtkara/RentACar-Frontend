import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from 'semantic-ui-react';
import tokenService from '../../../services/tokenService';
type Props = {
};

const SignOut = (props: Props) => {

  

  return (
    <div>   
        <MenuItem>
          <Link to={'/login'}>
            <Button primary>
              <i className="fas fa-right-to-bracket"></i> Üye Girişi
            </Button>
          </Link>
        </MenuItem>
    </div>
  );
};

export default SignOut;
