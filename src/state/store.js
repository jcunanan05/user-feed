import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import rootReducer from "./rootReducer";
import initialState from "./initialState";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers)
);

sagaMiddleware.run(saga);

store.dispatch({ type: "FETCH_USER" });

export default store;
