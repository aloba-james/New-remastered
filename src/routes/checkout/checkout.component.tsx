import React from 'react';
import { useSelector } from 'react-redux';
import {selectCartCount, selectCartItems, selectCartTotal} from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  Quantity
} from './checkout.styles';
import PaymentForm from '../../components/payment-form/payment-form.component';

const Checkout = () => {
  const  cartItems  = useSelector(selectCartItems);
  const  cartTotal  = useSelector(selectCartTotal);
  const  cartQuantity  = useSelector(selectCartCount);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          Total
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Complete Total: ${cartTotal}</Total>
      <Quantity>Quantity: {cartQuantity}</Quantity>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
