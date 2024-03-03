import StripeCheckout, { Token } from 'react-stripe-checkout';
import paymentService from '../../services/paymentService';
import { PaymentRequest } from '../../models/requests/Payment/paymentRequest';
import rentalService from '../../services/rentalService';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setRental } from '../../store/rental/rentalSlice';
import { setChargeId } from '../../store/payment/chargeIdSlice';
import { setRefundedAmount } from '../../store/payment/refundedAmount';

const PaymentForm = () => {
  const accessToken = useSelector((state: any) => state.auth.accessToken);
  const totalPrice = useSelector((state: any) => state.totalPrice.totalPrice);
  const rentalData = useSelector((state: any) => state.rental.rental);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToken = (token: Token) => {
    if (token && token.id) {
      const paymentData: PaymentRequest = {
        tokenId: token.id,
        amount: totalPrice * 100,
        currency: 'USD',
      };

      paymentService
        .payment(paymentData)
        .then((response) => {
          dispatch(setChargeId(response.data));
          dispatch(setRefundedAmount(paymentData.amount));
        })

        .catch((error) => console.error('Ödeme işleminde hata oluştu:', error));
    } else {
      console.error('Geçersiz token:', token);
    }

    rentalService.addRental(rentalData).then((response) => {
      dispatch(setRental(response.data.data));
      navigate('/order');
    });
  };

  return (
    <div className="stripe">
      <StripeCheckout
        stripeKey="pk_test_51Oc4oEJE8sDL3wBycwudyGP1zzmMX2QkGfWL24IVqflheGEW65wSwgXhHmHaYebjSVm8H4LZs2l3i5f0Etpvt3H000eJvEX0mR"
        token={handleToken}
        amount={totalPrice * 100}
        currency="USD"
        name="RentACar Payment"
        description="Ödeme işlemi"
        email={accessToken}
      />
    </div>
  );
};

export default PaymentForm;
