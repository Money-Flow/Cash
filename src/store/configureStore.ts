import { createStore, compose } from "redux";
import rootReducer from "./reducers";

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const configureStore = (preloadedState: any) =>
  createStore(rootReducer, preloadedState, composeEnhancers());

const store = configureStore({});

export default store;
