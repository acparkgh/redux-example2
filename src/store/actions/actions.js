export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  return({
    type: INCREMENT
  })
}

export const decrement = () => {
  return ({
    type: DECREMENT
  })
}

export const add = (value) => {
  return ({
    type: ADD,
    val: value,
  })
}

export const subtract = (value) => {
  return ({
    type: SUBTRACT,
    val: value,
  })
}

export const saveResult = (counterVal) => {
  return({
    type: STORE_RESULT,
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
    type: DELETE_RESULT,
    clickedLiId: id,
  })
}