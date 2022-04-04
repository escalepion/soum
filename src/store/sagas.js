import { all, fork } from "redux-saga/effects";

import CategoriesSaga from "./categories/saga";

export default function* rootSaga() {
  yield all([fork(CategoriesSaga)]);
}