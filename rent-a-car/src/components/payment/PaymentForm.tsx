import StripeCheckout, { Token } from 'react-stripe-checkout';
import paymentService from '../../services/paymentService';
import { PaymentRequest } from '../../models/requests/Payment/paymentRequest';
import { useSelector } from 'react-redux';
import rentalService from '../../services/rentalService';

const PaymentForm = () => {
  const accessToken = useSelector((state: any) => state.auth.accessToken);
  const totalPrice = useSelector((state: any) => state.totalPrice.totalPrice);
  const rentalData = useSelector((state: any) => state.rental.rental);

  const handleToken = (token: Token) => {
    console.log(token);
    if (token && token.id) {
      const paymentData: PaymentRequest = {
        tokenId: token.id,
        amount: totalPrice,
        currency: 'USD',
      };

      paymentService
        .payment(paymentData)
        .then((response) => {
          console.log(response);
        })

        .catch((error) => console.error('Ödeme işleminde hata oluştu:', error));
    } else {
      console.error('Geçersiz token:', token);
    }

    rentalService.addRental(rentalData).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="stripe">
      <StripeCheckout
        stripeKey="pk_test_51Oc4oEJE8sDL3wBycwudyGP1zzmMX2QkGfWL24IVqflheGEW65wSwgXhHmHaYebjSVm8H4LZs2l3i5f0Etpvt3H000eJvEX0mR"
        token={handleToken}
        amount={totalPrice}
        currency="USD"
        name="RentACar Payment"
        description="Ödeme işlemi"
        email={accessToken}
      />
    </div>
  );
};

export default PaymentForm;
