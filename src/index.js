import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
// import reducer from './store/reducerOLD';

import counterReducer from './store/Reducers/Counter';
import resultsReducer from './store/Reducers/Result';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer,
})

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
