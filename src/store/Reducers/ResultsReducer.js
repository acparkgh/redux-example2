import * as actionType from '../actions';

const initialState = {
  results: [],
}

const reducer = ( state = initialState, action ) => {
    
  switch( action.type ) {

    case actionType.STORE_RESULT:
      return {
        // ...state, results: state.results.concat({ id: new Date(), value: state.counter })
        ...state, results: state.results.concat({ id: new Date(), value: action.payload.counterVal })
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