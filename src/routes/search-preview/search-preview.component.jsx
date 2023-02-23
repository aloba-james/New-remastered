import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {getCategoriesAndDocuments} from '../../utils/firebase/firebase.utils';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { setCategories } from '../../store/categories/categories.action';
import SearchPreviewPage from '../search-preview-page/search-preview-page.component';
import SearchCategory from '../search-category/search-category.component';


const SearchPreview = ({categories}) => {

  return (
   <>
   </>
  );
};

export default SearchPreview;