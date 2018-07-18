import { createReducer, Types as ReduxSauceTypes } from 'reduxsauce'

import { actionTypes as exampleActionTypes } from '../actions/example'

const INITIAL_STATE = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null
}

const failure = (state, action) => ({
  ...state,
  ...{error: action.error}
})

const increment = (state, action) => ({
  ...state,
  ...{count: state.count + 1}
})

const decrement = (state, action) => ({
  ...state,
  ...{count: state.count - 1}
})

const reset = (state, action) => ({
  ...state,
  ...{count: INITIAL_STATE.count}
})

const loadDataSuccess = (state, action) => ({
  ...state,
  ...{placeholderData: action.data}
})

const tickClock = (state, action) => ({
  ...state,
  ...{lastUpdate: action.ts, light: !!action.light}
})

const HANDLERS = {
  [exampleActionTypes.FAILURE]: failure,
  [exampleActionTypes.INCREMENT]: increment,
  [exampleActionTypes.DECREMENT]: decrement,
  [exampleActionTypes.RESET]: reset,
  [exampleActionTypes.LOAD_DATA_SUCCESS]: loadDataSuccess,
  [exampleActionTypes.TICK_CLOCK]: tickClock,
  [ReduxSauceTypes.DEFAULT]: (state, action) => state,
}
 
export default createReducer(INITIAL_STATE, HANDLERS)
