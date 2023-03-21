import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearItemFromCart } from '../../store/cart/cart.action';
import { CartItemContainer, ItemDetails } from './cart-item.styles';
import { RemoveButton } from '../checkout-item/checkout-item.styles';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>      
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
