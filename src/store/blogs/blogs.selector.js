import { createSelector } from "reselect";

const selectBlogsReducer = (state) => state.blogs;

const selectBlogs = createSelector(
  [selectBlogsReducer],
  (blogsSlice) => blogsSlice.blogs
);


export const selectBlogsArray = createSelector(
  [selectBlogs],
  (blogs) => blogs.reduce((acc, blogs) => {
    const { title, items } = blogs;
    acc[title.toLowerCase()] = items;
    return acc;  
}, {}));
