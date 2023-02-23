import React, { useContext, Fragment } from 'react';

import { selectCategoriesMap } from '../../store/categories/categories.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { useSelector } from 'react-redux';

const SearchPreviewPage = () => {
  const categories  = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default SearchPreviewPage;
