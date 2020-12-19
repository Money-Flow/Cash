import { combineReducers } from "redux";

import { main } from "./main";

const reducers = {
  operation: main,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
