import * as actionTypes from './actionTypes';


export const saveResult = (counterVal) => {
  return({
    type: actionTypes.STORE_RESULT,
    payload: { counterVal: counterVal }
  })
}

export const storeResult = (counterVal) => {
  return (
    (dispatch) => {
      setTimeout( 
        () => { dispatch( saveResult(counterVal) ) }, 3000 
      );
    }
  )
}

// export const storeResult = (counterVal) => {
//   return (
//     (dispatch) => {
//       setTimeout( () => {
//         dispatch({ type: STORE_RESULT, payload: { counterVal } })
//       }, 2000 );
//     }
//   )
// }


// export const storeResult = (counterVal) => {
//   return ({
//     type: STORE_RESULT,
//     payload: { counterVal }
//   })
// }

export const deleteResult = (id) => {
  return ({
    type: actionTypes.DELETE_RESULT,
    clickedLiId: id,
  })
}