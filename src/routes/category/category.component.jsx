import React, { useContext, useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Route, Routes } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';


import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categories.selector';

import { CategoryContainer,
  Title
} from './category.styles';

const Category = () => {
  const { category } = useParams();
  const  categories  = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <Title className='category-title'>{category.toUpperCase()}</Title>
      {
        isLoading ? 
        ( 
          <Spinner />
        ) : 
        (
          <CategoryContainer className='category-container'>
            {
              products && products.map(
                (product) => (
                  <ProductCard key={product.id} product={product} category={category}/>
                )
              )
            }
          </CategoryContainer>
        )
      }
     
    </Fragment>
  );
};



export default Category;
