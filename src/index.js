import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { fetchReducer, detailsReducer, cacheReducer } from './redux/reducer';
import thunk from 'redux-thunk';

const allReducer = combineReducers({
  fetchReducer,
  detailsReducer,
  cacheReducer
})

// const middleWare = [thunk, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]

const middleWare = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const reduxStore = createStore(allReducer, middleWare)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
