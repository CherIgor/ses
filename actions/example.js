import { createActions } from 'reduxsauce'

const prefix = 'EXAMPLE_'

const { Types, Creators } = createActions({
  failure: ['error'],
  increment: null,
  decrement: null,
  reset: null,
  loadData: null,
  loadDataSuccess: ['data'],
  startClock: null,
  tickClock: isServer => ({ type: `${prefix}TICK_CLOCK`, light: !isServer, ts: Date.now() }),
}, {
  prefix,
}) // options - the 2nd parameter is optional

export const actionTypes = Types
export default Creators
