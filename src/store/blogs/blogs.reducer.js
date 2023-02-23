import BLOGS_ACTION_TYPES from './blogs.types';

export const BLOGS_INITIAL_STATE = {
  blogs: [],
};

export const blogsReducer = (
  state = BLOGS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case BLOGS_ACTION_TYPES.SET_BLOGS:
      return { ...state, blogs: payload };
    default:
      return state;
  }
};
