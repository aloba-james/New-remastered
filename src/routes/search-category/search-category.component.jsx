import React, { useContext, useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { selectCategoriesMap } from '../../store/categories/categories.selector';

import { CategoryContainer,
  Title
} from './search-category.styles';

const SearchCategory = () => {
  const { category } = useParams();
  const  categories  = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <Title className='category-title'>{category.toUpperCase()}</Title>
      <CategoryContainer className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default SearchCategory;
