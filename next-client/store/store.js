import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

export default function (initialState = []) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware()),
  );
}
