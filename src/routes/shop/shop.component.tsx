import React, {useEffect} from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {getCategoriesAndDocuments} from '../../utils/firebase/firebase.utils';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { fetchCategoriesStart } from '../../store/categories/categories.action';
import SingleItem from '../single-item/single-item.component';



const Shop = () => {
  const dispatch = useDispatch();
  
  useEffect(
    () => { 
      dispatch(fetchCategoriesStart());
    });


  return (
    <Routes>
      <Route path='/*' element={<CategoriesPreview />} />
      <Route path=':category/' element={<Category />}>
      </Route>
    </Routes>
  );
};

export default Shop;

