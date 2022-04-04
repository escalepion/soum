import { takeLatest, put } from "redux-saga/effects";

import { GET_CATEGORIES, CHECK_CATEGORY } from "./actionTypes";

import {
  getCategoriesSuccess,
  getCategoriesFail,
  checkCategorySuccess,
} from "./actions";

function* onGetCategories() {
  try {
    yield put(getCategoriesSuccess(''));
  } catch (error) {
    yield put(getCategoriesFail(error.response));
  }
}

function* onCheckCategory(payload) {
  try {
    yield put(checkCategorySuccess(payload.data));
  } catch (error) {
    yield put(getCategoriesFail(error.response));
  }
}

function* CartSaga() {
  yield takeLatest(GET_CATEGORIES, onGetCategories);
  yield takeLatest(CHECK_CATEGORY, onCheckCategory);
}

export default CartSaga;