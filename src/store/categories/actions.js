import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
  CHECK_CATEGORY,
  CHECK_CATEGORY_SUCCESS,
} from "./actionTypes";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
  };
};

export const getCategoriesSuccess = () => {
  return {
    type: GET_CATEGORIES_SUCCESS,
  };
};

export const getCategoriesFail = (error) => {
  return {
    type: GET_CATEGORIES_FAIL,
    payload: error,
  };
};

export const checkCategory = (data) => {
  return {
    type: CHECK_CATEGORY,
    data,
  };
};

export const checkCategorySuccess = (data) => {
  return {
    type: CHECK_CATEGORY_SUCCESS,
    data,
  };
};
