import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {fromJS} from 'immutable';
import WithStyles from './containers/with_styles.jsx'
import {ChopinAppContainer} from './containers/chopin_app.jsx';

const loggerMiddleware = createLogger()

const middleware = [thunkMiddleware, loggerMiddleware]

const initialState = fromJS(window.__INITIAL_STATE__)

const store = createStore(reducer, initialState, compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

render(
  <Provider store={store}>
    <WithStyles onInsertCss={styles => styles._insertCss()}>
      <ChopinAppContainer />
    </WithStyles>
  </Provider>,
  document.getElementById('root')
);

