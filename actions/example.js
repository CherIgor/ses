import actionTypes from './'

export function failure (error) {
  return {
    type: actionTypes.EXAMPLE_FAILURE,
    error
  }
}

export function increment () {
  return {type: actionTypes.EXAMPLE_INCREMENT}
}

export function decrement () {
  return {type: actionTypes.EXAMPLE_DECREMENT}
}

export function reset () {
  return {type: actionTypes.EXAMPLE_RESET}
}

export function loadData () {
  return {type: actionTypes.EXAMPLE_LOAD_DATA}
}

export function loadDataSuccess (data) {
  return {
    type: actionTypes.EXAMPLE_LOAD_DATA_SUCCESS,
    data
  }
}

export function startClock () {
  return {type: actionTypes.EXAMPLE_START_CLOCK}
}

export function tickClock (isServer) {
  return {
    type: actionTypes.EXAMPLE_TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  }
}
