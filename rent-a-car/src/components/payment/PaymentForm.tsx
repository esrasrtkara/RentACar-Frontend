
import StripeCheckout, { Token } from 'react-stripe-checkout';
import paymentService from '../../services/paymentService';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { PaymentRequest } from '../../models/requests/Payment/paymentRequest';



const PaymentForm = () => {
  const accessToken = useSelector((state: any) => state.auth.accessToken);
  const totalPrice = useSelector((state:any) => state.totalPrice.totalPrice);
  
  
  const handleToken = (token: Token) => {
    console.log(token);
    if (token && token.id) {
        const paymentData: PaymentRequest = {
          tokenId: token.id,
          amount: totalPrice,
          currency: 'USD',
          
        };
  
        paymentService.payment(paymentData)
          .then(response => {
            console.log(response)})
          .catch(error => console.error('Ödeme işleminde hata oluştu:', error));
      } else {
        console.error('Geçersiz token:', token);
      }
    };

  return (
    <StripeCheckout
      stripeKey="pk_test_51Oc4oEJE8sDL3wBycwudyGP1zzmMX2QkGfWL24IVqflheGEW65wSwgXhHmHaYebjSVm8H4LZs2l3i5f0Etpvt3H000eJvEX0mR"
      token={handleToken}
      amount={totalPrice}
      currency="USD"
      name="RentACar Payment"
      description="Ödeme işlemi"
      email={accessToken}
    />
  );
};

export default PaymentForm;
