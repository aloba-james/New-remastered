import React, { Fragment } from 'react';
import { useParams, Route, Routes } from 'react-router-dom';

import BlogCard from '../blog-card/blog-card.component';
import {Title} from './blogs-array.styles';



const BlogsArrayPreview = ({title, blogs}) => {
  

  return (
    <Fragment>
      <div className='category-preview-container'>
        <Title to={title}>{title.toUpperCase()}</Title>       

        <div>
          {
            blogs
              .filter((_, idx) => idx < 4)
              .map((blog, index) => (
              <BlogCard key={index} blog={blog} />
          ))}
        </div>
    
      </div>

      {/* <Routes>
        <Route path=':category' element={<Category />} />
      </Routes> */}
    </Fragment>
 
  );
};

export default BlogsArrayPreview;
