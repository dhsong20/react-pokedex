import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { fetchReducer, detailsReducer, cacheReducer } from "./redux/reducer";
import thunk from "redux-thunk";

// combine all our reducers
const allReducer = combineReducers({
  fetchReducer,
  detailsReducer,
  cacheReducer,
});

// create middleware variable
const middleWare = compose(
  applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// create our store with reducers and middleware variable
export const reduxStore = createStore(allReducer, middleWare);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
