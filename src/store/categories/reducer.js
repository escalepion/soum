import getGategoryTree from "lib/helpers/getCategoryTree";
import setCategoryChecked from 'lib/helpers/setCategoryChecked';

import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
  CHECK_CATEGORY_SUCCESS,
} from "./actionTypes";

const initialState = {
  categories: getGategoryTree(),
  loadingCategories: false,
  error: {
    message: "",
  },
};

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      state = { ...state, loadingCategories: true };
      break;
    case GET_CATEGORIES_SUCCESS:
      state = { ...state, loadingCategories: false };
      break;
    case CHECK_CATEGORY_SUCCESS:
      const newCategories = setCategoryChecked(state.categories, action.data.type, action.data.id);
      state = { ...state, categories: newCategories, loadingCategories: false };
      break;

    case GET_CATEGORIES_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingCategories: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default CategoriesReducer;
