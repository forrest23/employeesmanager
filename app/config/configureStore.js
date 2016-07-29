'use strict';

import { createStore, applyMiddleware, compose ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import * as reducers from '../reducers';

export default function configureStore(initialState) {
  const reducer = combineReducers(reducers);
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools()
  );
  // Note: passing enhancer as last argument requires redux@>=3.1.0
  return createStore(reducer, initialState, enhancer);
}

