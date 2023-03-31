import React, { useContext, Fragment } from 'react';

import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categories.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { useSelector } from 'react-redux';

import  Spinner  from '../../components/spinner/spinner.component';



const CategoriesPreview = () => {
  const categories  = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  
  return (
    <Fragment>
      {
        isLoading ? 
        (
          <Spinner />
        ) : (
          Object.keys(categories).map((title) => {
            const products = categories[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })
        )
      }
  
    </Fragment>
  );
};



export default CategoriesPreview;


