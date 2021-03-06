import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
// import reducer from './store/reducerOLD';

import counterReducer from './store/Reducers/CounterReducer';
import resultsReducer from './store/Reducers/ResultsReducer';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer,
})

const logger = (store) => {
  return (
    (next) => {
      return (
        (action) => {
          console.log(`[Middleware] Dispatching`, action);
          const result = next(action);
          console.log( '[Middleare] next state', store.getState() );
          return result;
        }
      )
    }
  )
}

const store = createStore(rootReducer, 
    composeWithDevTools( applyMiddleware(logger, thunk), )
  );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
