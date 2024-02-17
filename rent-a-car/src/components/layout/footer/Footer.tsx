import { MDBFooter } from 'mdb-react-ui-kit';
import './footer.css';

type Props = {};

const Footer = (props: Props) => {
  return (
    <MDBFooter className='footer bg-dark text-center text-white'>
    <div className='text-center p-3'>
      © 2024 AUTOPIA
    </div>
  </MDBFooter>
  );
};

export default Footer;
