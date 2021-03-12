import * as actionTypes from './actions/actionTypes';

const initialState = {
  counter: 0,
  results: [],
}

const reducer = ( state = initialState, action ) => {
    
  switch( action.type ) {
    case actionType.INCREMENT:
      return {
        ...state, counter: state.counter + 1             
      }
    case actionType.DECREMENT:
      return {
        ...state, counter: state.counter - 1        
      }
    case actionType.ADD:
      return {
        ...state, counter: state.counter + action.val        
      }
    case actionType.SUBTRACT:
      return {
        ...state, counter: state.counter - action.val        
      }
    case actionType.STORE_RESULT:
      return {
        ...state, results: state.results.concat({ id: new Date(), value: state.counter })
      }      
    case actionType.DELETE_RESULT:
      const updatedResults = state.results.filter(
        (result) => { return result.id !== action.id }
      );
      return {
        ...state, results: updatedResults
      } 

  }

  return state;
}

export default reducer;

