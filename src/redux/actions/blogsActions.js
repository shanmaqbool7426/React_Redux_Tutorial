import { ActionTypes } from "../constants/action-types";

export const setBlog = (blog) => {
  return {
    type: ActionTypes.SET_BLOG,
    payload: blog,
  };
};

export const selectedBlog = (blog) => {
  return {
    type: ActionTypes.SELECTED_BLOG,
    payload: blog,
  };
};
export const removeSelectedBlog = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_BLOG,
  };
};
