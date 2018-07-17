import actionTypes from '../actions'

const INITIAL_STATE = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null
}

function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.EXAMPLE_FAILURE:
      return {
        ...state,
        ...{error: action.error}
      }

    case actionTypes.EXAMPLE_INCREMENT:
      return {
        ...state,
        ...{count: state.count + 1}
      }

    case actionTypes.EXAMPLE_DECREMENT:
      return {
        ...state,
        ...{count: state.count - 1}
      }

    case actionTypes.EXAMPLE_RESET:
      return {
        ...state,
        ...{count: INITIAL_STATE.count}
      }

    case actionTypes.EXAMPLE_LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{placeholderData: action.data}
      }

    case actionTypes.EXAMPLE_TICK_CLOCK:
      return {
        ...state,
        ...{lastUpdate: action.ts, light: !!action.light}
      }

    default:
      return state
  }
}

export default reducer
