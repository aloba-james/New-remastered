import React, {useState, FC} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';

import {selectCartItems} from '../../store/cart/cart.selector';
import {addItemToCart} from '../../store/cart/cart.action';

import Button from '../button/button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ProductCartContainer,
  Name,
  Price,
   Footer,
   ProductLink
 } from './product-card.styles';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Category, CategoryItem } from '../../store/categories/categories.types';

type ProductCardProps = {
  product: CategoryItem;
  category: Category['title'];
}

const ProductCard: FC<ProductCardProps> = ({ product, category }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();  
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
 

  return (
    <>
      <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer className='footer'>
        <Name className='name'>{name}</Name>
        <Price className='price'>${price}</Price>
      </Footer>
      <Button  onClick={addProductToCart}>
        Add to cart
      </Button>   
      
    </ProductCartContainer>
   
    </>
   

  );
};

export default ProductCard;
