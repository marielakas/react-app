import { createStore, combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const store = createStore(
  combineReducers({
    app: () => ({}),
    routing: routerReducer
  })
);

export default store;
