/* global fetch */

import {delay} from 'redux-saga'
import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import exampleActionCreators, {actionTypes as exampleActionTypes} from './actions/example'

es6promise.polyfill()

function * runClockSaga () {
  yield take(exampleActionTypes.START_CLOCK)
  while (true) {
    yield put(exampleActionCreators.tickClock(false))
    yield call(delay, 1000)
  }
}

function * loadDataSaga () {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put(exampleActionCreators.loadDataSuccess(data))
  } catch (err) {
    yield put(exampleActionCreators.failure(err))
  }
}

function * rootSaga () {
  yield all([
    call(runClockSaga),
    takeLatest(exampleActionTypes.LOAD_DATA, loadDataSaga)
  ])
}

export default rootSaga
