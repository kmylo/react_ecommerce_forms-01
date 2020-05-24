import { createStore, applyMiddleware } from "redux"; //catch and display actions
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./root-reducer";

const middlewares = [logger, thunk];

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);
