import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {fromJS} from 'immutable';
import {selectKey} from './action_creators.js'
import {ChopinAppContainer} from './containers/chopin_app.jsx';

const loggerMiddleware = createLogger()

const middleware = [thunkMiddleware, loggerMiddleware]

const initialState = fromJS(window.__INITIAL_STATE__)

const store = createStore(reducer, initialState, compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.dispatch(selectKey('G'))

render(
  <Provider store={store}>
    <ChopinAppContainer />
  </Provider>,
  document.getElementById('root')
);

