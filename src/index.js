import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore , compose, applyMiddleware} from "redux";
import {rootReducer} from './redux/rootReducer'
import { Provider } from 'react-redux';
import { spamFilter } from './redux/middleware';
import { HashRouter } from 'react-router-dom';


const store = createStore(rootReducer, compose(applyMiddleware(thunk, spamFilter), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />,
    </Provider>
  </HashRouter>,
 

  document.getElementById('root')
);
