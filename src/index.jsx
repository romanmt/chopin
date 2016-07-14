import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

import {ChopinAppContainer} from './components/chopin_app';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f  
)(createStore);

const store = createStoreDevTools(reducer)

store.dispatch({
  type: 'SET_STATE',
  state: { 
    selectedKey: 'C',
    availableKeys: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
  }
})

ReactDOM.render(
  <Provider store={store}>
    <ChopinAppContainer />
  </Provider>,
  document.getElementById('app')
);
