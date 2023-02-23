import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../store/cart/cart.selector';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';
import { emptyCart } from '../../store/cart/cart.action';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  const emptyCartHandler = () => dispatch(emptyCart(cartItems));

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <>
              <EmptyMessage>Your cart is empty</EmptyMessage>
              <Link to='/shop'>Continue shopping</Link>
            </>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      {
        cartItems.length ? (
        <>
          <Button onClick={emptyCartHandler} style={{marginTop: 30}}>Empty cart</Button>
        </>
        ) : (<>
        </>)
      }
    </CartDropdownContainer>
  );
};

export default CartDropdown;
