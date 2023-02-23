import BLOGS_ACTION_TYPES from './blogs.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setBlogs = (blogsArray) =>
  createAction(BLOGS_ACTION_TYPES.SET_BLOGS, blogsArray);
