import { combineReducers } from "redux";
import { blogsReducer, selectedBlogReducer } from "./blogsReducer";
const reducers = combineReducers({
  allBlogs: blogsReducer,
  blog: selectedBlogReducer,
});
export default reducers;
