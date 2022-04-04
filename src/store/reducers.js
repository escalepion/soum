import { combineReducers } from "redux";

import CategoriesReducer from "./categories/reducer";

const rootReducer = combineReducers({
  CategoriesReducer,
});

export default rootReducer;