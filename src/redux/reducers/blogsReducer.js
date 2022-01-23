import { ActionTypes } from "../constants/action-types";
const intialState = {
  blogs: [],
};

export const blogsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BLOG:
      return { ...state, blogs: payload };
    default:
      return state;
  }
};

export const selectedBlogReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_BLOG:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_BLOG:
      return {};
    default:
      return state;
  }
};
