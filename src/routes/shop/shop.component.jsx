import React, {useEffect} from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {getCategoriesAndDocuments} from '../../utils/firebase/firebase.utils';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { fetchCategoriesStart } from '../../store/categories/categories.action';



const Shop = () => {
  const dispatch = useDispatch();
  
  useEffect(
    () => { 
      dispatch(fetchCategoriesStart());
    });


  return (
    <Routes>
      <Route path='/*' element={<CategoriesPreview />} />
      <Route path=':category/*' element={<Category />} />
    </Routes>
  );
};

export default Shop;

