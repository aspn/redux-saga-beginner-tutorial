import { delay } from 'redux-saga';
import { put, takeEvery, call } from 'redux-saga/effects';

export function* incrementAsync() {
    console.log("INCREMENT ASYNC");
    yield call(delay, 1000)
    yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
    console.log("WATCH INCREMENT ASYNC");
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
    yield [
        helloSaga(),
        watchIncrementAsync()
    ]
}

export function* helloSaga() {
    console.log("Hello Sagas!");
}