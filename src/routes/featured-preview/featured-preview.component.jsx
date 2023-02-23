import React, { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import ProductCard from '../../components/product-card/product-card.component';


const FeaturedPreview = () =>{
  const { categoriesMap } = useSelector(selectCategoriesMap);

    return(
        <Fragment>
            
    </Fragment>
    );
};

export default FeaturedPreview;