import React, { Fragment, FC } from 'react';
import { useParams, Route, Routes } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';
import { Category } from '../../store/categories/categories.types';


type CategoryPreviewProps = {
  title: Category['title'];
  products: Category['items'];
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {

  return (
    <CategoryPreviewContainer className='category-preview-container'>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
          <ProductCard key={product.id} product={product} category={title} />
          ))}
      </Preview>
   
    </CategoryPreviewContainer>
   
  );
};

export default CategoryPreview;