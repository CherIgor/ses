/* global fetch */

import {delay} from 'redux-saga'
import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import actionTypes from './actions'
import {failure, loadDataSuccess, tickClock} from './actions/example'

es6promise.polyfill()

function * runClockSaga () {
  yield take(actionTypes.EXAMPLE_START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield call(delay, 1000)
  }
}

function * loadDataSaga () {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function * rootSaga () {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.EXAMPLE_LOAD_DATA, loadDataSaga)
  ])
}

export default rootSaga
