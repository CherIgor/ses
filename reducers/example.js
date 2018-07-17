import { createReducer, Types as ReduxSauceTypes } from 'reduxsauce'

import actionTypes from '../actions'

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
  [actionTypes.EXAMPLE_FAILURE]: failure,
  [actionTypes.EXAMPLE_INCREMENT]: increment,
  [actionTypes.EXAMPLE_DECREMENT]: decrement,
  [actionTypes.EXAMPLE_RESET]: reset,
  [actionTypes.EXAMPLE_LOAD_DATA_SUCCESS]: loadDataSuccess,
  [actionTypes.EXAMPLE_TICK_CLOCK]: tickClock,
  [ReduxSauceTypes.DEFAULT]: (state, action) => state,
}
 
export default createReducer(INITIAL_STATE, HANDLERS)
